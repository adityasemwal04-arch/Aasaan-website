import React from 'react';
import { getAssetUrl, handleImageError } from '../utils/assetHelper';
import aasaanLogoSrc from '../assets/aasaan-logo.png';

export default function Footer({ onOpenDemo, onNavigate }) {
  const handlePageLink = (pageId, href, e) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      window.location.hash = href;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="about" className="column_alignment align_center footer_wrapper">
      <div className="column_alignment align_center" style={{ width: '100%' }}>
        <div className="row_column_alignment main_content" style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          
          {/* Column 1: Brand & Description */}
          <div className="footer_container column_alignment" style={{ flex: '1.2', minWidth: '280px' }}>
            <img
              className="footer_logo"
              src={aasaanLogoSrc}
              alt="Aasaan ERP"
              style={{ width: '170px', objectFit: 'contain' }}
            />
            <p>
              Aasaan ERP is a powerful business management software that can perfectly integrate with any type of business. The most
              customisable and fast-to-implementation ERP tool is available on the cloud and on-premises and powered by Amazon Web Services
              (AWS). The scalable, Robust, Easy to understand and proven software provides clear visibility into your business functions and
              shows up to date data and reports on a real time platform. Being AI powered ERP, Aasaan ERP provides state of the art automation
              for different business functions.
            </p>
            <p style={{ margin: '14px 0 8px', fontWeight: 600, color: '#ffffff', fontSize: '13px' }}>Follow Us</p>

            <div className="row_alignment wrap" style={{ gap: '6px' }}>
              <a href="https://www.facebook.com/aasaanerp/" target="_blank" rel="noopener noreferrer" className="footer_social_link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/aasaanerp/" target="_blank" rel="noopener noreferrer" className="footer_social_link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/aasaanerp" target="_blank" rel="noopener noreferrer" className="footer_social_link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com/aasaanservices" target="_blank" rel="noopener noreferrer" className="footer_social_link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.youtube.com/@aasaanerp" target="_blank" rel="noopener noreferrer" className="footer_social_link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer_container column_alignment" style={{ flex: '0.8', minWidth: '180px' }}>
            <span className="footer_heading">Quick Links</span>
            <div className="column_alignment">
              <a href="#/" onClick={(e) => handlePageLink('home', '#/', e)} className="footer_link">Home</a>
              <a href="#/services" onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('modules');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }} className="footer_link">Services</a>
              <a href="#about" onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('about');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }} className="footer_link">About Us</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); onOpenDemo(); }} className="footer_link">Contact Us</a>
              <a href="#/partners" onClick={(e) => handlePageLink('partners', '#/partners', e)} className="footer_link">Become Our Partner</a>
              <a href="#/login" onClick={(e) => handlePageLink('login', '#/login', e)} className="footer_link">Admin Portal</a>
            </div>
          </div>

          {/* Column 3: Our Products */}
          <div className="footer_container column_alignment" style={{ flex: '0.8', minWidth: '180px' }}>
            <span className="footer_heading">Our Products</span>
            <div className="column_alignment">
              <a href="#/global" onClick={(e) => handlePageLink('global', '#/global', e)} className="footer_link">ERP Global</a>
              <a href="#/lite" onClick={(e) => handlePageLink('lite', '#/lite', e)} className="footer_link">ERP Lite</a>
              <a href="#/awm" onClick={(e) => handlePageLink('awm', '#/awm', e)} className="footer_link">AWM (Waste Management)</a>
            </div>
          </div>

          {/* Column 4: Reach Us */}
          <div className="footer_container column_alignment" style={{ flex: '1', minWidth: '220px' }}>
            <span className="footer_heading">Reach Us</span>
            <div className="column_alignment">
              <div className="footer_link" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <i className="fas fa-location-arrow" style={{ marginTop: '4px', color: 'var(--colorAccent)' }}></i>
                <span>17A/35, Fourth Floor,<br />West Punjabi Bagh,<br />New Delhi 110026</span>
              </div>
              <a href="mailto:contactus@aasaanservices.in" className="footer_link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-envelope" style={{ color: 'var(--colorAccent)' }}></i>
                <span>contactus@aasaanservices.in</span>
              </a>
              <a href="tel:+917428267616" className="footer_link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-mobile-alt" style={{ color: 'var(--colorAccent)' }}></i>
                <span>+91 7428267616</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright bar */}
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          marginTop: '30px',
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '20px 16px 0',
          color: '#9ca3af',
          fontSize: '12.5px',
          textAlign: 'center'
        }}>
          © 2025 | AASAAN SERVICES SOLUTIONS PRIVATE LIMITED | All rights reserved
        </div>
      </div>
    </footer>
  );
}
