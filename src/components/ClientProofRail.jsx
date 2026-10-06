import React, { useRef } from 'react';
import { verifiedClients } from '../data/clientsData';
import { ChevronLeft, ChevronRight, Award, CheckCircle, ExternalLink } from 'lucide-react';

export default function ClientProofRail({ onOpenDemo }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="clients" className="section-pad bg-grid" style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className="badge-pill badge-blue">
                <Award size={12} /> The Backbone of 100+ Enterprise Leaders
              </span>
            </div>
            <h2>Businesses using Aasaan to run smarter.</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginTop: '10px', maxWidth: '640px' }}>
              Verified deployments across waste management, advanced tooling, medical devices, and trading operations.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => scroll('left')}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                border: '1.5px solid var(--border-medium)',
                background: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-main)',
                transition: 'all 0.15s ease'
              }}
              aria-label="Previous client"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                border: '1.5px solid var(--border-medium)',
                background: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-main)',
                transition: 'all 0.15s ease'
              }}
              aria-label="Next client"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Rail */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingBottom: '20px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {verifiedClients.map((client) => (
            <div
              key={client.id}
              style={{
                flex: '0 0 min(420px, 85vw)',
                scrollSnapAlign: 'start',
                background: '#FFFFFF',
                border: '1px solid var(--border-medium)',
                borderTop: '5px solid var(--accent-orange)',
                borderRadius: '16px',
                padding: '30px 28px',
                boxShadow: '0 4px 20px -5px rgba(15, 23, 42, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '24px'
              }}
            >
              <div>
                {/* Client Category & Name */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--primary-blue)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                    {client.category}
                  </span>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#059669',
                    background: '#ECFDF5',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}>
                    Verified Client
                  </span>
                </div>

                <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>
                  {client.name}
                </h3>

                <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '20px' }}>
                  {client.tagline}
                </p>

                {/* Measurable KPIs Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '8px',
                  background: 'var(--surface-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '14px 10px',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  {client.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="mono" style={{ fontSize: '17px', fontWeight: 800, color: 'var(--accent-orange)' }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px', lineHeight: 1.2 }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Implementation Narrative */}
                <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.5 }}>
                  <strong>Operational Scope:</strong> {client.scope}. {client.highlight}
                </p>
              </div>

              {/* Module Tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '16px'
              }}>
                {client.modules.map((mod, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '11.5px',
                      background: '#F1F5F9',
                      color: '#475569',
                      padding: '3px 8px',
                      borderRadius: '5px',
                      fontWeight: 500
                    }}
                  >
                    {mod}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Note */}
        <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '16px', textAlign: 'center' }}>
          * Case highlights sourced from official Aasaan ERP implementation records. Contact our solutions team for full technical case studies.
        </div>

      </div>
    </section>
  );
}
