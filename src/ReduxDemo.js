'use client';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { increment, decrement, incrementByAmount, reset } from './store/slices/counterSlice';
import { login, logout, updateProfile } from './store/slices/userSlice';

export function ReduxDemo() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter);
  const user = useAppSelector((state) => state.user);
  
  const [amount, setAmount] = useState(5);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = () => {
    if (userName && userEmail) {
      dispatch(login({ name: userName, email: userEmail }));
    }
  };

  const handleUpdateProfile = () => {
    dispatch(updateProfile({ name: userName, email: userEmail }));
  };

  return (
    <div className="redux-demo">
      <h2>🔄 Redux Demo</h2>
      
      {/* Counter Section */}
      <div className="demo-section">
        <h3>Counter State</h3>
        <div className="counter-display">
          <span className="counter-value">Count: {counter.value}</span>
        </div>
        <div className="counter-controls">
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
        <div className="counter-custom">
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Amount"
          />
          <button onClick={() => dispatch(incrementByAmount(amount))}>
            Add {amount}
          </button>
        </div>
      </div>

      {/* User Section */}
      <div className="demo-section">
        <h3>User State</h3>
        <div className="user-display">
          <p>Status: {user.isLoggedIn ? '✅ Logged In' : '❌ Not Logged In'}</p>
          {user.isLoggedIn && (
            <>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </>
          )}
        </div>
        
        {!user.isLoggedIn ? (
          <div className="login-form">
            <input 
              type="text" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Name"
            />
            <input 
              type="email" 
              value={userEmail} 
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Email"
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        ) : (
          <div className="user-controls">
            <div className="update-form">
              <input 
                type="text" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)}
                placeholder="New Name"
              />
              <input 
                type="email" 
                value={userEmail} 
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="New Email"
              />
              <button onClick={handleUpdateProfile}>Update Profile</button>
            </div>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </div>
        )}
      </div>

      {/* State Display */}
      <div className="demo-section">
        <h3>Current Redux State</h3>
        <pre className="state-display">
          {JSON.stringify({ counter, user }, null, 2)}
        </pre>
      </div>
    </div>
  );
}