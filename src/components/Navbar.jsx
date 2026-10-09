import React, { useState, useEffect } from 'react';
import { Search, Sparkles, ArrowRight, Menu, X, Lock } from 'lucide-react';
import AasaanLogo from './AasaanLogo';
import { getActiveAnnouncements } from '../services/dataService';

export default function Navbar({ onOpenDemo, onOpenSearch, currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [topBannerIndex, setTopBannerIndex] = useState(0);
  const [announcements, setAnnouncements] = useState([
    { id: 'default', text: 'Your ERP, Your Rules — Custom Fields & Intelligent Workflows Made Easy.', badge: 'ENTERPRISE RELEASE' }
  ]);

  // Load live announcements from backend/localStorage
  useEffect(() => {
    getActiveAnnouncements().then((data) => {
      if (data && data.length > 0) setAnnouncements(data);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (announcements.length <= 1) return;
    const interval = setInterval(() => {
      setTopBannerIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [announcements.length]);

  const currentAnn = announcements[topBannerIndex] || announcements[0];


  const navItems = [
    { id: 'home', label: 'Home', href: '#/' },
    { id: 'global', label: 'Aasaan Enterprises', href: '#/global', badge: 'Mid-Large Market' },
    { id: 'lite', label: 'ERP Lite', href: '#/lite', badge: 'Small Businesses' },
    { id: 'awm', label: 'AWM', href: '#/awm', badge: 'Waste & Recycling' },
    { id: 'partners', label: 'Partners', href: '#/partners' }
  ];

  const handleNavClick = (pageId, href, e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      window.location.hash = href;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top micro-announcement bar */}
      <div style={{
        background: '#0B1329',
        color: '#94A3B8',
        fontSize: '12px',
        padding: '6px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          color: '#FB923C',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontSize: '11px'
        }}>
          <Sparkles size={12} /> {currentAnn?.badge || 'ENTERPRISE RELEASE'}
        </span>
        <span style={{ color: '#E2E8F0', fontWeight: 500 }} className="transition-all duration-300">
          {currentAnn?.text || ''}
        </span>
      </div>

      {/* Main Navigation Bar */}
      <nav style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-subtle)',
        boxShadow: scrolled ? '0 4px 20px -4px rgba(15, 23, 42, 0.08)' : 'none',
        transition: 'all 0.25s ease'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          
          {/* Logo */}
          <a
            href="#/"
            onClick={(e) => handleNavClick('home', '#/', e)}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', marginRight: '28px' }}
          >
            <AasaanLogo height={56} showBadge={false} isDark={false} />
          </a>

          {/* Desktop Nav Items */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="hidden-mobile">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.id, item.href, e)}
                  style={{
                    textDecoration: 'none',
                    color: isActive ? 'var(--primary-blue)' : 'var(--text-body)',
                    background: isActive ? '#EFF6FF' : 'transparent',
                    border: isActive ? '1px solid var(--primary-blue-border)' : '1px solid transparent',
                    borderRadius: '8px',
                    padding: '8px 14px',
                    fontSize: '14.5px',
                    fontWeight: isActive ? 700 : 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      background: item.id === 'awm' ? 'var(--accent-orange)' : isActive ? 'var(--primary-blue)' : '#E2E8F0',
                      color: item.id === 'awm' || isActive ? '#FFFFFF' : '#475569',
                      padding: '1px 5px',
                      borderRadius: '4px'
                    }}>
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Divider between nav and CTAs */}
          <div className="hidden-mobile" style={{ width: '1px', height: '24px', background: '#CBD5E1', margin: '0 12px', flexShrink: 0 }} />

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Admin Portal Button */}
            <a
              href="#/login"
              onClick={(e) => handleNavClick('login', '#/login', e)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                background: currentPage === 'login' ? 'var(--primary-blue)' : 'rgba(29, 78, 216, 0.08)',
                color: currentPage === 'login' ? '#FFFFFF' : 'var(--primary-blue)',
                border: '1px solid rgba(29, 78, 216, 0.2)',
                borderRadius: '8px',
                padding: '6px 11px',
                fontSize: '12.5px',
                fontWeight: 700,
                textDecoration: 'none',
                cursor: 'pointer'
              }}
              title="Admin Portal (ID & Password)"
            >
              <Lock size={13} />
              <span className="hidden-mobile">Admin</span>
            </a>

            {/* Global Search Button */}
            <button
              onClick={onOpenSearch}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--surface-subtle)',
                border: '1px solid var(--border-medium)',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '13px',
                color: 'var(--text-muted)',
                cursor: 'pointer'
              }}
              title="Global Search"
            >
              <Search size={14} color="var(--primary-blue)" />
              <span className="hidden-mobile">Search</span>
              <kbd style={{
                background: '#FFFFFF',
                border: '1px solid var(--border-medium)',
                borderRadius: '4px',
                padding: '1px 5px',
                fontSize: '10px',
                fontFamily: 'var(--font-mono)'
              }}>
                Ctrl+K
              </kbd>
            </button>

            {/* Schedule Demo CTA */}
            <button
              onClick={onOpenDemo}
              className="btn btn-primary btn-sm"
              style={{ padding: '9px 18px' }}
            >
              <span>Schedule a Demo</span>
              <ArrowRight size={14} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                padding: '6px',
                cursor: 'pointer'
              }}
              className="mobile-toggle"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div style={{
            background: '#FFFFFF',
            borderTop: '1px solid var(--border-subtle)',
            padding: '16px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(item.id, item.href, e)}
                style={{
                  textDecoration: 'none',
                  color: currentPage === item.id ? 'var(--primary-blue)' : 'var(--text-main)',
                  fontSize: '16px',
                  fontWeight: 600,
                  padding: '10px 0',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    background: item.id === 'awm' ? 'var(--accent-orange)' : '#EFF6FF',
                    color: item.id === 'awm' ? '#FFFFFF' : 'var(--primary-blue)',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}>
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                href="#/login"
                onClick={(e) => { setMobileMenuOpen(false); handleNavClick('login', '#/login', e); }}
                className="btn btn-ghost"
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--primary-blue)', fontWeight: 700 }}
              >
                <Lock size={15} />
                <span>Admin Portal Login</span>
              </a>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenSearch(); }}
                className="btn btn-ghost"
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <Search size={16} color="var(--primary-blue)" />
                <span>Search Website</span>
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Schedule a Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 992px) {
          .hidden-mobile { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
