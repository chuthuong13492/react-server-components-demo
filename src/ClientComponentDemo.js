'use client';
import { useState, useEffect } from 'react';

export function ClientComponentDemo() {
  const [count, setCount] = useState(0);
  const [clientTime, setClientTime] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [userAgent, setUserAgent] = useState('');
  const [screenWidth, setScreenWidth] = useState(0);

  // useEffect để cập nhật thời gian mỗi giây
  useEffect(() => {
    const updateTime = () => {
      setClientTime(new Date().toLocaleString());
    };
    
    // Cập nhật thông tin browser sau khi component mount
    setUserAgent(navigator.userAgent.slice(0, 50) + '...');
    setScreenWidth(window.innerWidth);
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Event handlers
  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => prev - 1);
  const handleReset = () => setCount(0);
  const handleToggle = () => setIsVisible(prev => !prev);

  return (
    <div className="component-demo client-component">
      <h2>🌐 Client Component Demo</h2>
      <div className="demo-content">
        <div className="interactive-card">
          <h3>Interactive Counter</h3>
          <div className="counter-display">
            <span className="count">{count}</span>
          </div>
          <div className="button-group">
            <button onClick={handleDecrement} className="btn btn-danger">-</button>
            <button onClick={handleReset} className="btn btn-secondary">Reset</button>
            <button onClick={handleIncrement} className="btn btn-success">+</button>
          </div>
        </div>

        <div className="info-card">
          <h3>Client Information</h3>
          <p><strong>Live Time:</strong> {clientTime}</p>
          <p><strong>User Agent:</strong> {userAgent || 'Loading...'}</p>
          <p><strong>Screen Width:</strong> {screenWidth || 'Loading...'}px</p>
        </div>

        <div className="toggle-demo">
          <h3>Visibility Toggle</h3>
          <button onClick={handleToggle} className="btn btn-primary">
            {isVisible ? 'Hide' : 'Show'} Content
          </button>
          {isVisible && (
            <div className="toggle-content">
              <p>🎉 This content can be toggled on/off!</p>
              <p>This demonstrates client-side interactivity.</p>
            </div>
          )}
        </div>

        <div className="features-list">
          <h3>Client Component Features:</h3>
          <ul>
            <li>✅ Chạy trên browser</li>
            <li>✅ useState & useEffect</li>
            <li>✅ Event handlers</li>
            <li>✅ User interactions</li>
            <li>✅ Real-time updates</li>
            <li>✅ Browser APIs access</li>
            <li>❌ Không truy cập trực tiếp server</li>
            <li>❌ Bundle size lớn hơn</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
