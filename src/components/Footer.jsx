import React from 'react';
import aasaanLogoSrc from '../assets/aasaan-logo.png';
import { getAssetUrl, handleImageError } from '../utils/assetHelper';
import { getRoutePath } from '../utils/navigation';

export default function Footer({ onOpenDemo, onNavigate }) {
  const handlePageLink = (pageId, e) => {
    if (onNavigate) {
      if (e) e.preventDefault();
      onNavigate(pageId);
    } else {
      window.location.href = getRoutePath(pageId);
    }
  };

  return (
    <footer id="site-footer" className="column_alignment align_center footer_wrapper" style={{ paddingTop: 0 }}>

      {/* Top Demo CTA Strip */}
      <div style={{
        width: '100%',
        background: 'linear-gradient(90deg, var(--colorAccent) 0%, #1565c0 100%)',
        padding: '24px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        flexWrap: 'wrap',
        textAlign: 'center'
      }}>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: '18px' }}>
          Ready to see Aasaan ERP in action?
        </span>
        <button
          onClick={onOpenDemo}
          style={{
            background: '#ffffff',
            color: 'var(--colorAccent)',
            border: 'none',
            borderRadius: '6px',
            padding: '10px 26px',
            fontSize: '14px',
            fontWeight: 800,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.2)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'; }}
        >
          Book a Free Demo →
        </button>
      </div>

      {/* Main footer body */}
      <div className="column_alignment align_center" style={{ width: '100%', padding: '50px 20px 0' }}>
        <div className="row_column_alignment main_content" style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>

          {/* Column 1: Brand & Description */}
          <div className="footer_container column_alignment" style={{ flex: '1.2', minWidth: '280px' }}>
            <img
              className="footer_logo"
              src={aasaanLogoSrc}
              alt="Aasaan ERP"
              style={{ width: '170px', objectFit: 'contain', marginBottom: '14px' }}
            />
            <p>
              Aasaan ERP is a powerful business management software that can perfectly integrate with any type of business.
              Available on the cloud and on-premises, powered by Amazon Web Services (AWS), Microsoft Azure, and Google Cloud (GCP). AI-powered, scalable, and easy to use.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '10px 0 4px' }}>
              <span style={{ fontSize: '11px', background: 'rgba(255,255,255,0.08)', color: '#cbd5e1', padding: '3px 8px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.15)' }}>
                ☁️ AWS Powered
              </span>
              <span style={{ fontSize: '11px', background: 'rgba(255,255,255,0.08)', color: '#cbd5e1', padding: '3px 8px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.15)' }}>
                ☁️ Azure Powered
              </span>
              <span style={{ fontSize: '11px', background: 'rgba(255,255,255,0.08)', color: '#cbd5e1', padding: '3px 8px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.15)' }}>
                ☁️ Google Cloud Powered
              </span>
            </div>
            <p style={{ margin: '14px 0 8px', fontWeight: 600, color: '#ffffff', fontSize: '13px' }}>Follow Us</p>
            <div className="row_alignment wrap" style={{ gap: '8px' }}>
              {[
                { href: 'https://www.facebook.com/aasaanerp/', icon: 'fab fa-facebook-f' },
                { href: 'https://www.instagram.com/aasaanerp/', icon: 'fab fa-instagram' },
                { href: 'https://www.linkedin.com/company/aasaanerpawm/', icon: 'fab fa-linkedin-in' },
                { href: 'https://twitter.com/aasaanservices', icon: 'fab fa-twitter' },
                { href: 'https://www.youtube.com/@aasaanerp', icon: 'fab fa-youtube' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="footer_social_link">
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer_container column_alignment" style={{ flex: '0.8', minWidth: '160px' }}>
            <span className="footer_heading">Quick Links</span>
            <div className="column_alignment">
              <a href={getRoutePath('home')} onClick={(e) => handlePageLink('home', e)} className="footer_link">Home</a>
              <a href={getRoutePath('services')} onClick={(e) => handlePageLink('services', e)} className="footer_link">Services</a>
              <a href={getRoutePath('about')} onClick={(e) => handlePageLink('about', e)} className="footer_link">About Us</a>
              <a href={getRoutePath('blogs')} onClick={(e) => handlePageLink('blogs', e)} className="footer_link">Blogs</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); onOpenDemo(); }} className="footer_link">Contact Us</a>
              <a href="https://erplite.aasaan.in/academy/apply" target="_blank" rel="noopener noreferrer" className="footer_link">Apply for Certification</a>
              <a href="https://erplite.aasaan.in/academy/verify" target="_blank" rel="noopener noreferrer" className="footer_link">Verify Certification</a>
              <a href={getRoutePath('partners')} onClick={(e) => handlePageLink('partners', e)} className="footer_link">Become Our Partner</a>
            </div>
          </div>

          {/* Column 3: Products */}
          <div className="footer_container column_alignment" style={{ flex: '0.8', minWidth: '160px' }}>
            <span className="footer_heading">Our Products</span>
            <div className="column_alignment">
              <a href={getRoutePath('global')} onClick={(e) => handlePageLink('global', e)} className="footer_link">Aasaan Enterprises</a>
              <a href={getRoutePath('lite')} onClick={(e) => handlePageLink('lite', e)} className="footer_link">ERP Lite</a>
              <a href={getRoutePath('awm')} onClick={(e) => handlePageLink('awm', e)} className="footer_link">AWM Waste Management</a>
              <a
                href="https://erplite.aasaan.in/aasaanmart"
                target="_blank"
                rel="noopener noreferrer"
                className="footer_link"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#10B981', fontWeight: 600 }}
              >
                <span>Aasaan Mart</span>
                <span style={{ fontSize: '10px', background: 'rgba(16, 185, 129, 0.15)', padding: '1px 5px', borderRadius: '3px' }}>↗</span>
              </a>
            </div>
          </div>

          {/* Column 4: Reach Us */}
          <div className="footer_container column_alignment" style={{ flex: '1', minWidth: '220px' }}>
            <span className="footer_heading">Reach Us</span>
            <div className="column_alignment" style={{ gap: '10px' }}>
              <a href="mailto:contactus@aasaanservices.in" className="footer_link" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-envelope" style={{ color: 'var(--colorAccent)', fontSize: '14px' }}></i>
                <span>contactus@aasaanservices.in</span>
              </a>
              <a href="tel:+917428267616" className="footer_link" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-phone-alt" style={{ color: 'var(--colorAccent)', fontSize: '14px' }}></i>
                <span>+91 74282 67616</span>
              </a>
              <a
                href="https://wa.me/917428267616?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Aasaan%20ERP"
                target="_blank"
                rel="noopener noreferrer"
                className="footer_link"
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <i className="fab fa-whatsapp" style={{ color: '#25D366', fontSize: '16px' }}></i>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          marginTop: '36px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '20px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <span style={{ color: '#9ca3af', fontSize: '12.5px' }}>
            © 2025 AASAAN SERVICES SOLUTIONS PRIVATE LIMITED. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((t, i) => (
              <span key={i} style={{ color: '#6b7280', fontSize: '12px', cursor: 'pointer', transition: '0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#1e95d3'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#6b7280'; }}
              >{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
