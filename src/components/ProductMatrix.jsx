import React from 'react';
import { Globe, Feather, Recycle, Check, ArrowRight, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';

export default function ProductMatrix({ onOpenDemo, onNavigate }) {
  const products = [
    {
      id: 'global',
      pageId: 'global',
      href: '#/global',
      name: 'ERP Global',
      badge: 'Mid-Market & Multi-Entity',
      icon: Globe,
      color: 'var(--primary-blue)',
      description: 'Comprehensive enterprise cloud platform engineered for growing mid-market enterprises with complex operations.',
      bestFor: 'Companies with 25+ users, multiple branches, or advanced manufacturing/supply chains.',
      features: [
        'Multi-company & Multi-currency consolidation',
        'Advanced Multi-level BOM & Shop Floor Routing',
        'Automated Purchase Requisitions & 3-way Matching',
        'Granular Role-based Access Control (RBAC) & Audit Logs',
        'Custom Fields, Scripting & Unlimited REST API Endpoints',
        'Dedicated Enterprise Account Manager & SLA Support'
      ],
      ctaText: 'Explore ERP Global Page',
      recommended: true
    },
    {
      id: 'lite',
      pageId: 'lite',
      href: '#/lite',
      name: 'ERP Lite',
      badge: 'From ₹12,000 / Year',
      icon: Feather,
      color: '#10B981',
      description: 'Streamlined, frictionless ERP tailored for fast-growing businesses that need core operations without enterprise bloat.',
      bestFor: 'Teams of 5 to 25 users looking for rapid 7-day implementation.',
      features: [
        'Core Invoicing, Sales & Customer CRM',
        'Multi-location Inventory & Stock Alerts',
        'Vendor Management & Purchase Orders',
        'GST Billing, E-Way Bill & E-Invoice Integration',
        'Bank Statement Import & Reconciliation',
        'Ready-to-use Standard Business Reports'
      ],
      ctaText: 'Explore ERP Lite Page',
      recommended: false
    },
    {
      id: 'awm',
      pageId: 'awm',
      href: '#/awm',
      name: 'AWM',
      badge: 'Specialized Waste & Recycling',
      icon: Recycle,
      color: 'var(--accent-orange)',
      description: 'Aasaan’s flagship vertical designed specifically for waste haulers, recyclers, sorting facilities, and weighbridges.',
      bestFor: 'Waste management companies, recycling yards, and environmental service providers.',
      features: [
        'Automated Weighbridge (Gross/Tare) Integration',
        'Smart Bin RFID Tagging & GPS Route Optimization',
        'Digital Hazardous & Non-Hazardous Waste Manifests',
        'Material Recovery Facility (MRF) Sorting & Baling',
        'Pollution Control Board (CPCB) Regulatory Export',
        'Vehicle Fuel Telemetry & Maintenance Scheduling'
      ],
      ctaText: 'Explore AWM Dedicated Page',
      recommended: false
    }
  ];

  const handleProductNavigate = (pageId, href, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      window.location.hash = href;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="products" className="section-pad" style={{ background: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="badge-pill badge-blue">
              <ShieldCheck size={12} /> Purpose-Built Solutions
            </span>
          </div>
          <h2>Choose your Aasaan.</h2>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginTop: '12px' }}>
            Three specialized editions built on the same connected core. Choose the edition that matches your business scale and industry complexity.
          </p>
        </div>

        {/* 3-Column Product Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
          alignItems: 'stretch'
        }}>
          {products.map((prod) => {
            const Icon = prod.icon;
            return (
              <div
                key={prod.id}
                style={{
                  background: '#FFFFFF',
                  border: prod.recommended ? '2px solid var(--primary-blue)' : '1.5px solid var(--border-medium)',
                  borderRadius: '20px',
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: prod.recommended
                    ? '0 20px 40px -10px rgba(29, 78, 216, 0.15)'
                    : '0 4px 16px rgba(15, 23, 42, 0.04)',
                  position: 'relative'
                }}
              >
                {/* Recommended Badge */}
                {prod.recommended && (
                  <div style={{
                    position: 'absolute',
                    top: '-13px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--primary-blue)',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    padding: '4px 14px',
                    borderRadius: '999px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: '0 2px 8px rgba(29, 78, 216, 0.3)'
                  }}>
                    <Sparkles size={11} /> Most Versatile
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: prod.id === 'awm' ? 'var(--accent-orange-soft)' : prod.id === 'global' ? '#EFF6FF' : '#ECFDF5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: prod.color
                    }}>
                      <Icon size={24} />
                    </div>

                    <span style={{
                      fontSize: '11.5px',
                      fontWeight: 700,
                      color: prod.color,
                      background: 'var(--surface-subtle)',
                      border: '1px solid var(--border-subtle)',
                      padding: '4px 10px',
                      borderRadius: '6px'
                    }}>
                      {prod.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                    {prod.name}
                  </h3>

                  <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '20px' }}>
                    {prod.description}
                  </p>

                  <div style={{
                    background: 'var(--surface-subtle)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '10px',
                    padding: '10px 14px',
                    fontSize: '12.5px',
                    color: 'var(--text-body)',
                    marginBottom: '24px'
                  }}>
                    <strong>Best for:</strong> {prod.bestFor}
                  </div>

                  {/* Feature Checklist */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', marginBottom: '32px' }}>
                    {prod.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px' }}>
                        <div style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: '#EFF6FF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--primary-blue)',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}>
                          <Check size={11} />
                        </div>
                        <span style={{ color: 'var(--text-body)' }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTAs: Dedicated Page + Demo */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a
                    href={prod.href}
                    onClick={(e) => handleProductNavigate(prod.pageId, prod.href, e)}
                    className={prod.recommended ? 'btn btn-primary' : 'btn btn-ghost'}
                    style={{ width: '100%', padding: '12px' }}
                  >
                    <span>{prod.ctaText}</span>
                    <ArrowRight size={14} />
                  </a>

                  <button
                    onClick={onOpenDemo}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-muted)',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      padding: '4px'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-blue)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    or Request Dedicated Demo →
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
