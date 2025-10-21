import React, { cache } from "react";

// Simulate async data fetching on the server (memoized)
const fetchServerData = cache(async function fetchServerData() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    message: "Dữ liệu async từ Server Component",
    timestamp: new Date().toLocaleString("vi-VN"),
    processingTime: "1 giây",
  };
});

// RSC supports async components. Await your data at the top level
export default async function AsyncServerComponent() {
  const data = await fetchServerData();

  return (
    <div className="component-demo server-component">
      <h2>🖥️ Async Server Component Demo</h2>
      <div className="demo-content">
        <div className="info-card async-data">
          <h3>🔄 Async Data Fetching</h3>
          <p>
            <strong>Message:</strong> {data.message}
          </p>
          <p>
            <strong>Timestamp:</strong> {data.timestamp}
          </p>
          <p>
            <strong>Processing Time:</strong> {data.processingTime}
          </p>
          <p>
            <em>Dữ liệu này được fetch với async/await trên server</em>
          </p>
        </div>

        <div className="features-list">
          <h3>Server Component Capabilities:</h3>
          <ul>
            <li>✅ Async/await operations</li>
            <li>✅ Database queries</li>
            <li>✅ File system access</li>
            <li>✅ Server-side APIs</li>
            <li>✅ Process information</li>
            <li>✅ Environment variables</li>
            <li>✅ Zero client-side JavaScript</li>
            <li>❌ No interactivity</li>
            <li>❌ No event handlers</li>
            <li>❌ No React hooks</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
