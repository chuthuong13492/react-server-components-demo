'use client';

import React, {Suspense} from 'react';
import { ClientComponentDemo } from './ClientComponentDemo.js';
import { ReduxDemo } from './ReduxDemo.js';
import HomePage from './HomePage.js';
import AboutPage from './AboutPage.js';
import ContactPage from './ContactPage.js';
import AsyncServerComponent from './AsyncServerComponent.js';
import { useRouter } from './framework/router.js';

export default function AppWithRouter() {
  const { location, navigate } = useRouter();
  const currentRoute = location.selectedId || 'home';

  let content;
  switch (currentRoute) {
    case 'home':
      content = <HomePage />;
      break;
    case 'about':
      content = <AboutPage />;
      break;
    case 'contact':
      content = <ContactPage />;
      break;
    case 'demo':
      content = (
        <div className="demo-container">
          <h1>React Server Components vs Client Components</h1>
          <p className="intro-text">
            So sánh Server Components và Client Components trong React 18
          </p>
          
          <div className="components-grid">
            <Suspense fallback={<div className="loading">🔄 Loading Server Component...</div>}>
              <AsyncServerComponent />
            </Suspense>
            
            <ClientComponentDemo />
            
            <ReduxDemo />
          </div>
        </div>
      );
      break;
    default:
      content = <HomePage />;
  }

  return (
    <div className="main">
      <section className="col sidebar">
        <section className="sidebar-header">
          <img
            className="logo"
            src="logo.svg"
            width="22px"
            height="20px"
            alt=""
            role="presentation"
          />
          <strong>React Server Components Demo</strong>
        </section>
        <section className="sidebar-menu">
          <div className="demo-nav">
            <h3>Navigation</h3>
            <ul>
              <li 
                className={currentRoute === 'home' ? 'active' : ''}
                onClick={() => navigate({ selectedId: 'home' })}
                style={{ cursor: 'pointer', padding: '8px 0' }}
              >
                🏠 Trang Chủ
              </li>
              <li 
                className={currentRoute === 'about' ? 'active' : ''}
                onClick={() => navigate({ selectedId: 'about' })}
                style={{ cursor: 'pointer', padding: '8px 0' }}
              >
                ℹ️ Giới Thiệu
              </li>
              <li 
                className={currentRoute === 'contact' ? 'active' : ''}
                onClick={() => navigate({ selectedId: 'contact' })}
                style={{ cursor: 'pointer', padding: '8px 0' }}
              >
                📞 Liên Hệ
              </li>
              <li 
                className={currentRoute === 'demo' ? 'active' : ''}
                onClick={() => navigate({ selectedId: 'demo' })}
                style={{ cursor: 'pointer', padding: '8px 0' }}
              >
                🖥️ Demo Components
              </li>
            </ul> 
          </div>
        </section>
      </section>
      <section className="col content">
        {content}
      </section>
    </div>
  );
}
