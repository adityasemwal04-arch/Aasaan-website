import React, { useState, useEffect } from 'react';
import { Lock, Search } from 'lucide-react';
import { getActiveAnnouncements } from '../services/dataService';
import { getAssetUrl, handleImageError } from '../utils/assetHelper';
import { getRoutePath } from '../utils/navigation';
import aasaanLogoSrc from '../assets/aasaan-logo.png';

export default function Navbar({ onOpenDemo, onOpenSearch, currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [topBannerIndex, setTopBannerIndex] = useState(0);
  const [announcements, setAnnouncements] = useState([
    { id: '1', text: 'Your ERP, Your Rules — Custom Fields Made Easy.' },
    { id: '2', text: 'Aasaan Global Search: One Search Box. Every Answer.' },
    { id: '3', text: 'Run Your Business Smarter, Not Harder – Meet Aasaan ERP.' }
  ]);

  // Load announcements from backend / localStorage
  useEffect(() => {
    getActiveAnnouncements().then((data) => {
      if (data && data.length > 0) {
        setAnnouncements(data.map(d => ({ id: d.id, text: d.text })));
      }
    });
  }, []);

  // Autoplay top announcement carousel
  useEffect(() => {
    if (announcements.length <= 1) return;
    const interval = setInterval(() => {
      setTopBannerIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [announcements.length]);

  const handlePrevBanner = (e) => {
    e.preventDefault();
    setTopBannerIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const handleNextBanner = (e) => {
    e.preventDefault();
    setTopBannerIndex((prev) => (prev + 1) % announcements.length);
  };

  const handleNavClick = (pageId, e) => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);

    if (pageId === currentPage) {
      if (e) e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (onNavigate) {
      if (e) e.preventDefault();
      onNavigate(pageId);
    } else {
      window.location.href = getRoutePath(pageId);
    }
  };

  const currentAnnouncement = announcements[topBannerIndex] || announcements[0];

  return (
    <>
      {/* Mobile Side Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="drawer_background"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 9998,
            backdropFilter: 'blur(2px)'
          }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        style={{
          position: 'fixed',
          top: 0,
          right: mobileMenuOpen ? 0 : '-320px',
          width: '280px',
          height: '100vh',
          background: '#FFFFFF',
          zIndex: 9999,
          boxShadow: '-4px 0 20px rgba(0,0,0,0.15)',
          transition: 'right 0.35s ease',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 20px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <img
            src={aasaanLogoSrc}
            alt="Aasaan ERP"
            style={{ height: '44px', objectFit: 'contain' }}
          />
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', color: '#212121' }}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <a
            href={getRoutePath('home')}
            onClick={(e) => handleNavClick('home', e)}
            style={{ padding: '12px', fontSize: '15px', fontWeight: 600, color: '#212121', textDecoration: 'none' }}
          >
            Home
          </a>
          <a
            href={getRoutePath('global')}
            onClick={(e) => handleNavClick('global', e)}
            style={{ padding: '12px', fontSize: '15px', fontWeight: 600, color: '#212121', textDecoration: 'none' }}
          >
            Aasaan Enterprises
          </a>
          <a
            href={getRoutePath('lite')}
            onClick={(e) => handleNavClick('lite', e)}
            style={{ padding: '12px', fontSize: '15px', fontWeight: 600, color: '#212121', textDecoration: 'none' }}
          >
            ERP Lite
          </a>
          <a
            href={getRoutePath('awm')}
            onClick={(e) => handleNavClick('awm', e)}
            style={{ padding: '12px', fontSize: '15px', fontWeight: 600, color: '#212121', textDecoration: 'none' }}
          >
            AWM Waste Management
          </a>
          <a
            href={getRoutePath('partners')}
            onClick={(e) => handleNavClick('partners', e)}
            style={{ padding: '12px', fontSize: '15px', fontWeight: 600, color: '#212121', textDecoration: 'none' }}
          >
            Partners
          </a>
          <a
            href={getRoutePath('blog/manufacturing-engineering')}
            onClick={(e) => handleNavClick('blog/manufacturing-engineering', e)}
            style={{ padding: '12px', fontSize: '15px', fontWeight: 600, color: '#212121', textDecoration: 'none' }}
          >
            Blogs
          </a>
          <a
            href={getRoutePath('login')}
            onClick={(e) => handleNavClick('login', e)}
            style={{ padding: '12px', fontSize: '15px', fontWeight: 600, color: '#1e95d3', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Lock size={16} /> Admin Portal
          </a>
          <div style={{ marginTop: '20px' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
              className="accent_button"
              style={{ width: '100%', borderRadius: '6px' }}
            >
              Schedule A Demo
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Navigation Header */}
      <div id="toolbar_root" className="toolbar_root column_alignment">
        
        {/* Top Micro-Announcement Strip */}
        <div className="column_alignment align_center toolbar_strip" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '1200px',
            position: 'relative'
          }}>
            <button
              onClick={handlePrevBanner}
              style={{
                position: 'absolute',
                left: '10px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                opacity: 0.6,
                color: '#212121',
                padding: '4px 8px'
              }}
              title="Previous announcement"
            >
              <i className="fas fa-angle-left"></i>
            </button>

            <div style={{ textAlign: 'center', padding: '0 40px' }}>
              <span style={{ fontSize: '13.5px', fontWeight: 500, color: '#212121' }}>
                {currentAnnouncement?.text}
              </span>
            </div>

            <button
              onClick={handleNextBanner}
              style={{
                position: 'absolute',
                right: '10px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                opacity: 0.6,
                color: '#212121',
                padding: '4px 8px'
              }}
              title="Next announcement"
            >
              <i className="fas fa-angle-right"></i>
            </button>
          </div>
        </div>

        {/* Sticky Toolbar Bar */}
        <div id="toolbar" className="main_content row_alignment align_self_center" style={{ padding: '0 16px', height: '72px', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo */}
          <a
            href={getRoutePath('home')}
            onClick={(e) => handleNavClick('home', e)}
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          >
            <img
              id="main_logo"
              src={aasaanLogoSrc}
              alt="Aasaan ERP"
              style={{ height: '56px', objectFit: 'contain' }}
            />
          </a>

          {/* Desktop Navigation Items */}
          <div className="row_alignment" style={{ alignItems: 'center', gap: '4px' }}>
            
            {/* Products Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <div className="menu_item" style={{ padding: '0 8px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Products <i className="fas fa-chevron-down" style={{ fontSize: '11px', opacity: 0.7 }}></i>
                </span>
              </div>

              {productsDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '240px',
                    background: '#FFFFFF',
                    borderRadius: '8px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
                    border: '1px solid #E2E8F0',
                    padding: '8px',
                    zIndex: 1000
                  }}
                >
                  <a
                    href={getRoutePath('global')}
                    onClick={(e) => handleNavClick('global', e)}
                    style={{
                      display: 'block',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      color: '#212121',
                      fontSize: '13.5px',
                      fontWeight: 500,
                      transition: 'background 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f6fbfe'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ fontWeight: 600, color: '#1e95d3' }}>Aasaan Enterprises</div>
                    <div style={{ fontSize: '11.5px', color: '#64748b' }}>Mid & Large Market Scale</div>
                  </a>

                  <a
                    href={getRoutePath('lite')}
                    onClick={(e) => handleNavClick('lite', e)}
                    style={{
                      display: 'block',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      color: '#212121',
                      fontSize: '13.5px',
                      fontWeight: 500,
                      transition: 'background 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f6fbfe'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ fontWeight: 600, color: '#1e95d3' }}>Aasaan ERP Lite</div>
                    <div style={{ fontSize: '11.5px', color: '#64748b' }}>Fast Setup for Growing Teams</div>
                  </a>

                  <a
                    href={getRoutePath('awm')}
                    onClick={(e) => handleNavClick('awm', e)}
                    style={{
                      display: 'block',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      color: '#212121',
                      fontSize: '13.5px',
                      fontWeight: 500,
                      transition: 'background 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f6fbfe'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ fontWeight: 600, color: '#ff5b0b' }}>AWM Waste Management</div>
                    <div style={{ fontSize: '11.5px', color: '#64748b' }}>Industry-Specific Solution</div>
                  </a>
                </div>
              )}
            </div>

            <a
              className="menu_item"
              href={currentPage === 'home' ? '#modules' : getRoutePath('home') + '#modules'}
              onClick={(e) => {
                if (currentPage === 'home') {
                  e.preventDefault();
                  const el = document.getElementById('modules');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = getRoutePath('home') + '#modules';
                }
              }}
            >
              <span>Services</span>
            </a>

            <a
              className="menu_item"
              href={getRoutePath('partners')}
              onClick={(e) => handleNavClick('partners', e)}
            >
              <span>Partners</span>
            </a>

            <a
              className="menu_item"
              href={getRoutePath('blog/manufacturing-engineering')}
              onClick={(e) => handleNavClick('blog/manufacturing-engineering', e)}
            >
              <span>Blogs</span>
            </a>

            <a
              className="menu_item"
              href={currentPage === 'home' ? '#about' : getRoutePath('home') + '#about'}
              onClick={(e) => {
                if (currentPage === 'home') {
                  e.preventDefault();
                  const el = document.getElementById('about');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = getRoutePath('home') + '#about';
                }
              }}
            >
              <span>About Us</span>
            </a>

            {/* Quick Search Shortcut */}
            <button
              onClick={onOpenSearch}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '8px 10px',
                color: '#5f5f5f',
                display: 'flex',
                alignItems: 'center'
              }}
              title="Global Search (Ctrl+K)"
            >
              <Search size={16} />
            </button>

            {/* Admin Portal subtle access */}
            <a
              className="menu_item"
              href={getRoutePath('login')}
              onClick={(e) => handleNavClick('login', e)}
              title="Admin Portal"
              style={{ padding: '0 8px' }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#1e95d3' }}>
                <Lock size={13} /> Admin
              </span>
            </a>

            {/* Highlighted Schedule Demo CTA */}
            <div
              className="menu_item"
              onClick={onOpenDemo}
            >
              <span className="highlight">
                Schedule A Demo
              </span>
            </div>

            {/* Mobile Menu Bars Icon */}
            <div
              className="menu_item"
              onClick={() => setMobileMenuOpen(true)}
              style={{ display: 'none' }}
              id="mobile_bars_btn"
            >
              <span><i className="fas fa-bars" style={{ fontSize: '18px' }}></i></span>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .menu_item:not(:last-child):not(#mobile_bars_btn) {
            display: none !important;
          }
          #mobile_bars_btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
