import {createRoot} from 'react-dom/client';
import {Router} from './router'
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

const root = createRoot(document.getElementById('root'));
root.render(<Root />);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Error error={this.state.error} />;
    }

    return this.props.children;
  }
}

function Root() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </Provider>
  );
}

function Error({error}) {
  return (
    <div>
      <h1>Application Error</h1>
      <pre style={{whiteSpace: 'pre-wrap'}}>{error?.stack}</pre>
    </div>
  );
}