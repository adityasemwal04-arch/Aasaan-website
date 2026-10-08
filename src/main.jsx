import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

function initApp() {
  const root = document.getElementById('root');
  if (root) {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    let fallbackRoot = document.getElementById('root');
    if (!fallbackRoot) {
      fallbackRoot = document.createElement('div');
      fallbackRoot.id = 'root';
      document.body.appendChild(fallbackRoot);
    }
    ReactDOM.createRoot(fallbackRoot).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

initApp();
