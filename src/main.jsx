import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/original.css';

class RootErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error('RootErrorBoundary caught render error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#F8FAFC', padding: '24px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          <div style={{ background: '#FFFFFF', padding: '36px 32px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', maxWidth: '480px', width: '100%', textAlign: 'center', border: '1px solid #E2E8F0' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#EFF6FF', color: '#1E95D3', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '26px' }}>
              🚀
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#1E293B', margin: '0 0 10px' }}>
              Aasaan ERP Platform
            </h2>
            <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6, margin: '0 0 24px' }}>
              Your session was refreshed. Click below to continue exploring smoothly.
            </p>
            <button
              onClick={() => { window.location.href = window.location.pathname; }}
              style={{ background: '#1E95D3', color: '#FFFFFF', border: 'none', padding: '11px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 14px rgba(30,149,211,0.3)' }}
            >
              Continue to Aasaan ERP
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function initApp() {
  const root = document.getElementById('root');
  if (root) {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <RootErrorBoundary>
          <App />
        </RootErrorBoundary>
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
        <RootErrorBoundary>
          <App />
        </RootErrorBoundary>
      </React.StrictMode>
    );
  }
}

initApp();
