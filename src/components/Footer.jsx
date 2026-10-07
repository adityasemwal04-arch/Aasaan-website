import React from 'react';
import { MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';
import AasaanLogo from './AasaanLogo';

export default function Footer({ onOpenDemo, onNavigate }) {
  const handlePageLink = (pageId, href, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      window.location.hash = href;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="about" style={{
      background: '#0B1329',
      color: '#94A3B8',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '80px 0 36px'
    }}>
      <div className="container">
        
        {/* Main Footer 4-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 0.9fr) minmax(0, 0.9fr) minmax(0, 1.2fr)',
          gap: '48px',
          marginBottom: '64px'
        }} className="footer-grid">
          
          {/* Column 1: Brand & Positioning */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <AasaanLogo height={30} showBadge={true} isDark={true} />
            </div>

            <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: '#94A3B8', maxWidth: '340px', marginBottom: '20px' }}>
              Aasaan ERP is a next-generation enterprise business management platform engineered on AWS cloud and on-premises infrastructure. Acting as the central nervous system for 100+ businesses across manufacturing, waste recycling, retail, and distribution.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#CBD5E1' }}>
              <ShieldCheck size={16} color="#34D399" />
              <span>AWS Cloud Partner • Enterprise Grade</span>
            </div>
          </div>

          {/* Column 2: Products & Verticals */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 700, marginBottom: '20px', letterSpacing: '0.02em' }}>
              Solutions & Editions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
              <li>
                <a
                  href="#/global"
                  onClick={(e) => handlePageLink('global', '#/global', e)}
                  style={{ color: '#E2E8F0', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>Aasaan ERP Global</span>
                  <span style={{ fontSize: '10px', background: '#1E3A8A', color: '#93C5FD', padding: '1px 6px', borderRadius: '4px' }}>Mid-Market</span>
                </a>
              </li>
              <li>
                <a
                  href="#/lite"
                  onClick={(e) => handlePageLink('lite', '#/lite', e)}
                  style={{ color: '#E2E8F0', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>Aasaan ERP Lite</span>
                  <span style={{ fontSize: '10px', background: '#065F46', color: '#6EE7B7', padding: '1px 6px', borderRadius: '4px' }}>From ₹12k</span>
                </a>
              </li>
              <li>
                <a
                  href="#/awm"
                  onClick={(e) => handlePageLink('awm', '#/awm', e)}
                  style={{ color: '#FB923C', textDecoration: 'none', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>AWM Waste Management</span>
                  <span style={{ fontSize: '10px', background: '#7C2D12', color: '#FDBA74', padding: '1px 6px', borderRadius: '4px' }}>Flagship ★</span>
                </a>
              </li>
              <li>
                <a
                  href="#/partners"
                  onClick={(e) => handlePageLink('partners', '#/partners', e)}
                  style={{ color: '#E2E8F0', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>Partners Program</span>
                  <span style={{ fontSize: '10px', background: '#312E81', color: '#A5B4FC', padding: '1px 6px', borderRadius: '4px' }}>Ecosystem</span>
                </a>
              </li>
              <li>
                <a
                  href="#/"
                  onClick={(e) => handlePageLink('home', '#/', e)}
                  style={{ color: '#94A3B8', textDecoration: 'none' }}
                >
                  Platform Overview (Home)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform & Modules */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 700, marginBottom: '20px', letterSpacing: '0.02em' }}>
              Platform Modules
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
              <li>
                <a
                  href="#/global"
                  onClick={(e) => handlePageLink('global', '#/global', e)}
                  style={{ color: '#94A3B8', textDecoration: 'none' }}
                >
                  Financial Management
                </a>
              </li>
              <li>
                <a
                  href="#/global"
                  onClick={(e) => handlePageLink('global', '#/global', e)}
                  style={{ color: '#94A3B8', textDecoration: 'none' }}
                >
                  Multi-Depot Stock Control
                </a>
              </li>
              <li>
                <a
                  href="#/awm"
                  onClick={(e) => handlePageLink('awm', '#/awm', e)}
                  style={{ color: '#94A3B8', textDecoration: 'none' }}
                >
                  Weighbridge Scale Indicators
                </a>
              </li>
              <li>
                <a
                  href="#/lite"
                  onClick={(e) => handlePageLink('lite', '#/lite', e)}
                  style={{ color: '#94A3B8', textDecoration: 'none' }}
                >
                  Field Sales Mobile App
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenDemo}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent-orange)',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 600,
                    padding: 0,
                    textAlign: 'left'
                  }}
                >
                  Schedule an Architecture Demo →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Headquarters & Contact */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 700, marginBottom: '20px', letterSpacing: '0.02em' }}>
              Reach Us Directly
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '13.5px', color: '#94A3B8' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--primary-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>AASAAN SERVICES SOLUTIONS PVT LTD</strong><br />
                  17A/35, Fourth Floor, West Punjabi Bagh,<br />
                  New Delhi 110026, India
                </span>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Mail size={16} color="var(--accent-orange)" style={{ flexShrink: 0 }} />
                <a href="mailto:contactus@aasaanservices.in" style={{ color: '#E2E8F0', textDecoration: 'none' }}>
                  contactus@aasaanservices.in
                </a>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={16} color="#34D399" style={{ flexShrink: 0 }} />
                <a href="tel:+917428267616" style={{ color: '#E2E8F0', textDecoration: 'none' }}>
                  +91 7428267616
                </a>
              </div>

              <div style={{ marginTop: '12px' }}>
                <button onClick={onOpenDemo} className="btn btn-orange btn-sm" style={{ width: '100%' }}>
                  Speak to an ERP Specialist
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '12.5px',
          color: '#64748B'
        }}>
          <div>
            © 2026 AASAAN SERVICES SOLUTIONS PRIVATE LIMITED. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Cloud & On-Premises ERP</span>
            <span>Made in New Delhi, India</span>
            <span>Version 4.2 Multi-Page Platform</span>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
