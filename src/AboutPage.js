import React from 'react';

export default function AboutPage() {
  return (
    <div className="about-page">
      <h1>Về Chúng Tôi</h1>
      <p>Đây là trang giới thiệu về React Server Components.</p>
      
      <section className="info-section">
        <h2>Server Components</h2>
        <p>Server Components chạy trên server và có thể truy cập trực tiếp vào backend resources.</p>
      </section>
      
      <section className="info-section">
        <h2>Client Components</h2>
        <p>Client Components chạy trên browser và có thể sử dụng hooks, event handlers.</p>
      </section>
      
      <section className="info-section">
        <h2>Hybrid Approach</h2>
        <p>Kết hợp cả hai để có performance tốt nhất và UX mượt mà.</p>
      </section>
    </div>
  );
}
