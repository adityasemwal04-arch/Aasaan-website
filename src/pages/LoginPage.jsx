import React, { useState, useEffect } from 'react';
import { Lock, User, ArrowRight, AlertCircle } from 'lucide-react';
import { loginAdmin, getAdminAuth } from '../services/dataService';
import AasaanLogo from '../components/AasaanLogo';

export default function LoginPage({ onNavigate }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If already authenticated, redirect to admin panel
    const auth = getAdminAuth();
    if (auth) {
      if (onNavigate) onNavigate('admin');
      else window.location.hash = '#/admin';
    }
  }, [onNavigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await loginAdmin(username, password);
      if (result.success) {
        if (onNavigate) {
          onNavigate('admin');
        } else {
          window.location.hash = '#/admin';
        }
      } else {
        setError(result.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div style={{
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      background: 'radial-gradient(circle at 50% 20%, rgba(29, 78, 216, 0.08) 0%, rgba(15, 23, 42, 0.02) 100%)'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '440px',
        background: '#FFFFFF',
        borderRadius: '24px',
        border: '1px solid var(--border-medium)',
        boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.12)',
        overflow: 'hidden'
      }}>
        {/* Top Header Card */}
        <div style={{
          background: 'linear-gradient(135deg, #0B1329 0%, #1D4ED8 100%)',
          padding: '36px 32px 30px',
          textAlign: 'center',
          color: '#FFFFFF'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <AasaanLogo height={32} showBadge={true} isDark={true} />
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 6px', color: '#FFFFFF' }}>
            Admin Portal
          </h2>
          <p style={{ fontSize: '13.5px', color: '#93C5FD', margin: 0 }}>
            Manage client inquiries, update industry blogs & website content
          </p>
        </div>

        {/* Form Body */}
        <div style={{ padding: '32px' }}>
          {error && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 14px',
              borderRadius: '10px',
              background: '#FEF2F2',
              border: '1px solid #FECACA',
              color: '#DC2626',
              fontSize: '13px',
              marginBottom: '20px'
            }}>
              <AlertCircle size={18} style={{ flexShrink: 0 }} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                Admin User ID / Username
              </label>
              <div style={{ position: 'relative' }}>
                <User size={18} style={{ position: 'absolute', left: '14px', top: '13px', color: '#94A3B8' }} />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  style={{
                    width: '100%',
                    padding: '11px 14px 11px 42px',
                    borderRadius: '10px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', left: '14px', top: '13px', color: '#94A3B8' }} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{
                    width: '100%',
                    padding: '11px 14px 11px 42px',
                    borderRadius: '10px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: '6px',
                background: 'var(--primary-blue)',
                color: '#FFFFFF',
                padding: '13px',
                borderRadius: '10px',
                border: 'none',
                fontSize: '14.5px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'background 0.2s',
                boxShadow: '0 4px 14px rgba(29, 78, 216, 0.3)'
              }}
            >
              {loading ? 'Authenticating...' : (
                <>
                  Sign In to Administration <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>



          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('home');
                else window.location.hash = '#/';
              }}
              style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}
            >
              ← Back to Main Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
