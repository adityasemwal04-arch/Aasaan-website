import React, { useEffect } from 'react';
import { getAssetUrl, handleImageError } from '../utils/assetHelper';

export default function ServicesPage({ onOpenDemo }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id, e) => {
    if (e) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="services-page-wrapper" style={{ background: '#f8f9fa', minHeight: '100vh', paddingBottom: '0' }}>
      
      {/* Hero / Header Section */}
      <section style={{ padding: '60px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 800,
            color: '#1e293b',
            letterSpacing: '0.5px',
            marginBottom: '20px',
            textTransform: 'uppercase'
          }}>
            Implementation & Planning
          </h1>
          <p style={{
            fontSize: '16px',
            lineHeight: 1.7,
            color: '#475569',
            marginBottom: '16px'
          }}>
            From day one, our expert team works alongside you to ensure a smooth, stress-free rollout. As your business evolves, we help you
            adapt, optimize, and scale — so your ERP always fits your workflow, not the other way around.
          </p>
          <p style={{
            fontSize: '16px',
            lineHeight: 1.7,
            fontWeight: 600,
            color: '#1e95d3',
            margin: '0 auto'
          }}>
            No delays. No confusion. Just a solid start and smarter scaling.
          </p>
        </div>

        {/* Sub-navigation Anchor Bar */}
        <div style={{
          background: 'rgba(211, 234, 245, 0.45)',
          padding: '16px 20px',
          margin: '36px auto 0',
          borderRadius: '12px',
          maxWidth: '960px'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px'
          }}>
            {[
              { id: 'implementation-planning', label: 'Implementation Planning' },
              { id: 'instant-go-live', label: 'Instant Go-Live' },
              { id: 'support', label: 'Support' },
              { id: 'customization', label: 'Customization' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(item.id, e)}
                style={{
                  background: '#1e95d3',
                  color: '#ffffff',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(30, 149, 211, 0.25)',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(30, 149, 211, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(30, 149, 211, 0.25)';
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section 1: Implementation & Planning */}
      <section id="implementation-planning" style={{ padding: '40px 20px', scrollMarginTop: '100px' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '40px'
        }}>
          <div style={{ flex: '1 1 450px', display: 'flex', justifyContent: 'center' }}>
            <img
              src={getAssetUrl('images/implementation_side_banner.jpg')}
              alt="Implementation & Planning"
              onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/implementation_side_banner.jpg')}
              style={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '24px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                objectFit: 'cover'
              }}
            />
          </div>
          <div style={{ flex: '1 1 450px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>
              Implementation & Planning
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#475569' }}>
              We match Aasaan customers with a local VAR partner who knows their industry and market. Based on the scope of the project,
              the VAR partner will help develop an implementation project. This plan will include details on how and when data will be
              migrated or entered, but it’s also an opportunity to get expert advice on streamlining business processes.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Section 2: Instant Go-Live (Reversed) */}
      <section id="instant-go-live" style={{ padding: '40px 20px', scrollMarginTop: '100px', background: '#ffffff' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap-reverse',
          gap: '40px'
        }}>
          <div style={{ flex: '1 1 450px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>
              Instant Go-Live
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#475569' }}>
              With our Instant Go-Live service, you can get started with Aasaan
              ERP in record time. We’ve simplified the onboarding process to
              help you go live within days—not weeks. Our team ensures data
              migration, system setup, and user access are ready quickly so
              your operations continue without delay.
            </p>
          </div>
          <div style={{ flex: '1 1 450px', display: 'flex', justifyContent: 'center' }}>
            <img
              src={getAssetUrl('images/Instant_go_live_image.jpg')}
              alt="Instant Go-Live"
              onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/Instant%20go%20live%20image.jpg')}
              style={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '24px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </section>

      {/* Feature Section 3: Support */}
      <section id="support" style={{ padding: '40px 20px', scrollMarginTop: '100px' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '40px'
        }}>
          <div style={{ flex: '1 1 450px', display: 'flex', justifyContent: 'center' }}>
            <img
              src={getAssetUrl('images/support_banner.jpg')}
              alt="Support"
              onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/support_banner.jpg')}
              style={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '24px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                objectFit: 'cover'
              }}
            />
          </div>
          <div style={{ flex: '1 1 450px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>
              Support
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#475569' }}>
              We’ve got your back—always. Our dedicated support team is here to assist you at every step, whether it’s troubleshooting,
              training, or optimizing your ERP system. Enjoy ongoing assistance and timely resolutions so your business never misses a
              beat.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Section 4: Customization (Reversed) */}
      <section id="customization" style={{ padding: '40px 20px', scrollMarginTop: '100px', background: '#ffffff' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap-reverse',
          gap: '40px'
        }}>
          <div style={{ flex: '1 1 450px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>
              Customization
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#475569' }}>
              Every business is unique, and so is your ERP. With our
              Customization service, we tailor Aasaan ERP to match
              your specific workflows, industry needs, and goals.
              From custom modules to unique reports, we build a
              solution that fits just right.
            </p>
          </div>
          <div style={{ flex: '1 1 450px', display: 'flex', justifyContent: 'center' }}>
            <img
              src={getAssetUrl('images/customization_banner.jpg')}
              alt="Customization"
              onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/customization_banner.jpg')}
              style={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '24px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section style={{
        background: '#1e95d3',
        padding: '60px 20px',
        textAlign: 'center',
        color: '#ffffff'
      }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 700,
            lineHeight: 1.4,
            marginBottom: '24px',
            color: '#ffffff'
          }}>
            Unlock new possibilities with growth-driven technology and trusted support that scales with you.
          </h2>
          <button
            onClick={onOpenDemo}
            style={{
              background: '#ffffff',
              color: '#1e95d3',
              border: 'none',
              padding: '14px 36px',
              fontSize: '16px',
              fontWeight: 700,
              borderRadius: '6px',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)';
            }}
          >
            Schedule Demo
          </button>
        </div>
      </section>

    </div>
  );
}
