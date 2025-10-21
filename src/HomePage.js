import React from 'react';

export default function HomePage() {
  return (
    <div className="home-page">
      <h1>Trang Chủ</h1>
      <p>Chào mừng bé iu đến với React Server Components Demo!</p>
      <div className="features">
        <h2>Tính năng chính:</h2>
        <ul>
          <li>🖥️ Server Components</li>
          <li>🌐 Client Components</li>
          <li>🔄 Redux State Management</li>
          <li>🚀 Server-Side Rendering</li>
        </ul>
      </div>
    </div>
  );
}
