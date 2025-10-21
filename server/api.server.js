'use strict';

const register = require('react-server-dom-webpack/node-register');
register();
const babelRegister = require('@babel/register');

babelRegister({
  ignore: [/[\\\/](build|server|node_modules)[\\\/]/],
  plugins: ['@babel/transform-modules-commonjs'],
  extensions: ['.js', '.jsx', '.ts', '.tsx']
});

const express = require('express');
const compress = require('compression');
const {readFileSync} = require('fs');
const {renderToPipeableStream} = require('react-server-dom-webpack/server');
const path = require('path');
const React = require('react');
const ReactApp = require('../src/App.js').default;
const {exec} = require('child_process');

const PORT = process.env.PORT || 4000;

// Function to kill processes using the port
function killProcessOnPort(port) {
  return new Promise((resolve) => {
    exec(`lsof -ti:${port}`, (error, stdout, stderr) => {
      if (stdout.trim()) {
        const pids = stdout.trim().split('\n');
        console.log(`Found processes using port ${port}: ${pids.join(', ')}`);
        
        // Kill each process
        pids.forEach(pid => {
          exec(`kill ${pid}`, (killError) => {
            if (!killError) {
              console.log(`Killed process ${pid}`);
            }
          });
        });
        
        // Wait a bit for processes to be killed
        setTimeout(resolve, 1000);
      } else {
        resolve();
      }
    });
  });
}
const app = express();

app.use(compress());
app.use(express.json());

// Kill any existing processes on the port before starting
killProcessOnPort(PORT).then(() => {
  app
    .listen(PORT, () => {
      console.log(`React App listening at ${PORT}...`);
    })
    .on('error', function(error) {
      if (error.syscall !== 'listen') {
        throw error;
      }
      const isPipe = (portOrPipe) => Number.isNaN(portOrPipe);
      const bind = isPipe(PORT) ? 'Pipe ' + PORT : 'Port ' + PORT;
      switch (error.code) {
        case 'EACCES':
          console.error(bind + ' requires elevated privileges');
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error(bind + ' is already in use');
          process.exit(1);
          break;
        default:
          throw error;
      }
    });
});

function handleErrors(fn) {
  return async function(req, res, next) {
    try {
      return await fn(req, res);
    } catch (x) {
      next(x);
    }
  };
}

app.get(
  '/',
  handleErrors(async function(_req, res) {
    await waitForWebpack();
    const html = readFileSync(
      path.resolve(__dirname, '../build/index.html'),
      'utf8'
    );
    res.send(html);
  })
);

async function renderReactTree(res, props) {
  await waitForWebpack();
  const manifest = readFileSync(
    path.resolve(__dirname, '../build/react-client-manifest.json'),
    'utf8'
  );
  const moduleMap = JSON.parse(manifest);
  const {pipe} = renderToPipeableStream(
    React.createElement(ReactApp, props),
    moduleMap
  );
  pipe(res);
}

app.get('/react', function(req, res) {
  res.set('X-Location', JSON.stringify({}));
  renderReactTree(res, {});
});

app.use(express.static('build'));
app.use(express.static('public'));

async function waitForWebpack() {
  while (true) {
    try {
      readFileSync(path.resolve(__dirname, '../build/index.html'));
      return;
    } catch (err) {
      console.log(
        'Could not find webpack build output. Will retry in a second...'
      );
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}