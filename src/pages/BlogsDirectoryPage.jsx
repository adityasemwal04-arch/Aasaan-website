import React from 'react';
import BlogsDirectorySection from '../components/BlogsDirectorySection';
import { getRoutePath } from '../utils/navigation';
import { ChevronRight } from 'lucide-react';

export default function BlogsDirectoryPage({ onNavigate, onOpenDemo }) {
  return (
    <div style={{ marginTop: '106px', background: '#FFFFFF', minHeight: '100vh', paddingBottom: '90px' }}>
      {/* Breadcrumb Bar */}
      <div style={{ background: '#f8f9fa', borderBottom: '1px solid #edf2f7', padding: '14px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748B' }}>
          <button
            onClick={() => onNavigate ? onNavigate('home') : window.location.href = getRoutePath('home')}
            style={{ background: 'none', border: 'none', color: '#1e95d3', fontWeight: 600, cursor: 'pointer', padding: 0 }}
          >
            Home
          </button>
          <ChevronRight size={13} />
          <span style={{ color: '#212121', fontWeight: 600 }}>Industry Blogs & Knowledge Base</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px 0' }}>
        <BlogsDirectorySection
          onNavigate={onNavigate}
          isFullPage={true}
          title="Industry ERP Knowledge Base & Architectural Blueprints"
          subtitle="Explore in-depth implementation frameworks, regulatory compliance guides, and shop floor automation protocols across 30+ sectors. Choose your industry to inspect workflows."
        />
      </div>

      {/* Floating CTA buttons matching other pages */}
      <div style={{ position: 'fixed', bottom: '24px', right: '20px', display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 9000, alignItems: 'flex-end' }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to top"
          style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#ffffff', border: '2px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.12)', cursor: 'pointer', color: '#1e95d3', transition: 'all 0.2s ease' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#1e95d3'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.border = '2px solid #1e95d3'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#1e95d3'; e.currentTarget.style.border = '2px solid #e2e8f0'; }}
        >
          <i className="fas fa-chevron-up" style={{ fontSize: '14px' }}></i>
        </button>

        <a
          href="https://wa.me/917428267616?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Aasaan%20ERP"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px 10px 12px', borderRadius: '28px', background: '#25D366', boxShadow: '0 4px 16px rgba(37,211,102,0.45)', textDecoration: 'none', transition: 'transform 0.2s ease, box-shadow 0.2s ease', color: '#fff', fontWeight: 600, fontSize: '13.5px' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.6)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.45)'; }}
        >
          <i className="fab fa-whatsapp" style={{ fontSize: '22px' }}></i>
          <span>WhatsApp Us</span>
        </a>

        <button
          onClick={onOpenDemo}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px 10px 12px', borderRadius: '28px', background: 'var(--colorAccent)', border: 'none', boxShadow: '0 4px 16px rgba(30,149,211,0.4)', cursor: 'pointer', transition: 'transform 0.2s ease, box-shadow 0.2s ease', color: '#fff', fontWeight: 600, fontSize: '13.5px' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(30,149,211,0.6)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(30,149,211,0.4)'; }}
        >
          <i className="fas fa-calendar-check" style={{ fontSize: '18px' }}></i>
          <span>Book a Demo</span>
        </button>
      </div>
    </div>
  );
}
