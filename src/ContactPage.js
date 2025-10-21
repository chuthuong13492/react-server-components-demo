import React from 'react';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Liên Hệ</h1>
      <p>Trang liên hệ với thông tin về React Server Components.</p>
      
      <div className="contact-info">
        <section className="contact-section">
          <h2>📧 Email</h2>
          <p>contact@react-server-components.com</p>
        </section>
        
        <section className="contact-section">
          <h2>📱 Phone</h2>
          <p>+84 123 456 789</p>
        </section>
        
        <section className="contact-section">
          <h2>🏢 Address</h2>
          <p>123 React Street, Component City, Vietnam</p>
        </section>
        
        <section className="contact-section">
          <h2>💬 Social Media</h2>
          <div className="social-links">
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">LinkedIn</a>
          </div>
        </section>
      </div>
      
      <div className="contact-form">
        <h2>Gửi Tin Nhắn</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Tên:</label>
            <input type="text" id="name" name="name" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Tin nhắn:</label>
            <textarea id="message" name="message" rows="5"></textarea>
          </div>
          
          <button type="submit" className="submit-btn">Gửi Tin Nhắn</button>
        </form>
      </div>
    </div>
  );
}
