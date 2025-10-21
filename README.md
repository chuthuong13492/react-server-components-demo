# React Server Components Demo

A comprehensive demonstration of React Server Components - an experimental React feature that allows components to run on the server and send their output to the client. This project showcases the power of Server Components through a fully functional note-taking application.

## 📋 Table of Contents

* [🚀 What is this?](#-what-is-this)
* [⚠️ Important Notes](#️-important-notes)
* [🛠️ Prerequisites](#️-prerequisites)
* [⚡ Quick Start](#-quick-start)
* [🏗️ Project Structure](#️-project-structure)
* [🎯 Features](#-features)
* [🔧 Development](#-development)
* [📚 Learning Resources](#-learning-resources)
* [🤝 Contributing](#-contributing)
* [📄 License](#-license)

## 🚀 What is this?

This is a **React Notes** application built with **React Server Components** - an experimental React feature that enables components to execute on the server and stream their results to the client. This approach offers several advantages:

- **Reduced Bundle Size**: Server components don't ship JavaScript to the client
- **Direct Database Access**: Server components can directly access databases and APIs
- **Better Performance**: Reduced client-side JavaScript execution
- **Enhanced Security**: Sensitive operations stay on the server

**🎥 Recommended**: Watch the [official React Server Components talk](https://reactjs.org/server-components) before exploring this demo for a comprehensive understanding.

**📅 Latest Update (March 2023)**: This demo has been updated to match the [latest React Server Components conventions](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components).

## ⚠️ Important Notes

### Experimental Status
Server Components are **experimental** and not ready for production use. This demo is for learning and experimentation purposes only.

### Performance Considerations
If you're comparing React Server Components to other frameworks, keep in mind:

- **No Server-Side Rendering (SSR)**: This demo only shows Server Components, not SSR
- **Initial Load Performance**: Without SSR, there's a client-server network waterfall on first load
- **Bundle Optimization**: Current bundling strategy is not optimized for production
- **Partial Refetching**: Currently refetches the entire app shell when navigating

This demo showcases the core concepts but doesn't represent production performance characteristics.

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- **[Node.js 18 LTS](https://nodejs.org/en)** or higher
- **Git** (for cloning the repository)

If you use `nvm`, run `nvm i` to install the recommended Node version.

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/chuthuong13492/react-server-components-demo.git
   cd react-server-components-demo
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:4000](http://localhost:4000)

### Production Build
For a production build, use:
```bash
npm run start:prod
```

### Docker Setup (Optional)
If you prefer Docker, you can use the provided docker-compose setup:

```bash
# Start the application
docker-compose up

# Or run in detached mode
docker-compose up -d

# (Optional) Other docker-compose commands can be added as needed
```

⚠️ **Note**: Docker setup is completely optional and only for those who prefer Docker over global installs.



## 🏗️ Project Structure

The **React Notes** application consists of several key components:

```
src/
├── framework/           # Core framework files
│   ├── bootstrap.js     # Application bootstrap
│   └── router.js        # Client-side routing
├── store/              # Redux store configuration
│   ├── hooks.js        # Redux hooks
│   ├── index.js        # Store setup
│   └── slices/         # Redux slices
├── types/              # TypeScript definitions
└── *.js                # React components

server/
└── api.server.js       # Express server with API endpoints

public/                 # Static assets
scripts/
└── build.js           # Build configuration
```

### Architecture Overview

- **Webpack Plugin**: Automatically splits client components in build artifacts
- **Express Server**: 
  - Serves API endpoints
  - Renders Server Components into special format for client consumption
- **React App**: Mix of Server and Client components building the React Notes interface

## 🎯 Features

- ✅ **Note Management**: Create, edit, delete, and search notes
- ✅ **Real-time Updates**: Live updates when notes are modified
- ✅ **Search Functionality**: Search through note titles and content
- ✅ **Responsive Design**: Works on desktop and mobile devices
- ✅ **Server Components**: Demonstrates server-side component execution
- ✅ **Client Components**: Shows client-side interactivity
- ✅ **Redux Integration**: State management with Redux Toolkit
- ✅ **Suspense Support**: Loading states and error boundaries

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run start:prod` - Start production build
- `npm run build` - Build the application

### Interesting Things to Try

🎯 **Interactive Experiments**:

1. **Note Expansion**: Hover over notes in the sidebar and click expand/collapse. Create or delete notes and observe what happens to expanded notes.

2. **Live Editing**: Change a note's title while editing and watch the sidebar animation. Try editing notes in the middle of the list.

3. **Search Behavior**: Search for any title, then create a new note with a matching title. Observe the search results update.

4. **Network Simulation**: Test on Slow 3G to see the inline loading indicators in action.

5. **Navigation Caching**: Switch between two notes back and forth. Notice that responses aren't sent again on subsequent switches.

6. **Suspense Testing**: Uncomment the `await fetch('http://localhost:4000/sleep/....')` calls in `Note.js` or `NoteList.js` to trigger Suspense:
   - Only in `Note.js`: Fallback appears every time you open a note
   - Only in `NoteList.js`: List fallback on first page load
   - In both: Less interesting as both need to respond

7. **Server Component Demo**: Add a new Server Component above the search bar in `App.js` that renders some server-only data or markup. Observe how the UI updates when you add or delete notes.

📺 **Video Walkthrough**: Watch a [recorded demonstration](https://youtu.be/La4agIEgoNg?t=600) of all these features with timestamps.

### Future Integration

This demo uses a custom Webpack plugin, but Server Components are intended for integration with frameworks that support server rendering (like Next.js). The real integration will be developed in the coming months.

## 📚 Learning Resources

### Official Documentation
- [React Server Components Announcement](https://reactjs.org/server-components)
- [React Labs Updates](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components)
- [Server Components RFC](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md)

### Video Content
- [Official React Server Components Talk](https://reactjs.org/server-components)
- [Demo Walkthrough with Timestamps](https://youtu.be/La4agIEgoNg?t=600)

### Related Projects
- [Next.js App Router](https://nextjs.org/docs/app) - Production-ready Server Components implementation
- [React Server Components RFC](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md) - Technical specification

## 🤝 Contributing

This is an experimental demo project. While contributions are welcome, please note:

- This is a **learning and experimentation** project
- Server Components are still **experimental** and not production-ready
- Focus on **educational value** and **demonstration** rather than production features

### Development Guidelines
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Built by (A-Z)

- [Andrew Clark](https://twitter.com/acdlite)
- [Dan Abramov](https://twitter.com/dan_abramov)
- [Joe Savona](https://twitter.com/en_JS)
- [Lauren Tan](https://twitter.com/sugarpirate_)
- [Sebastian Markbåge](https://twitter.com/sebmarkbage)
- [Tate Strickland](http://www.tatestrickland.com/) (Design)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**⚠️ Disclaimer**: This is an experimental demo showcasing React Server Components. Use at your own risk and do not use in production environments.
