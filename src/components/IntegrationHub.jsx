import React, { useState } from 'react';
import { integrationCategories } from '../data/integrationsData';
import { integrationLogos } from '../data/integrationLogos';
import { Network, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function IntegrationHub({ onOpenDemo }) {
  const [selectedCatId, setSelectedCatId] = useState('finance'); // Start with Accounting & Finance as on the live site

  const activeCategory = integrationCategories.find((c) => c.id === selectedCatId) || integrationCategories[0];
  const logosForActiveCat = integrationLogos[activeCategory.logoKey] || [];

  return (
    <section id="integrations" className="section-pad" style={{ background: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="badge-pill badge-orange">
              <Network size={12} /> Frictionless Ecosystem
            </span>
          </div>
          <h2>Seamless Integration with Your Existing Tools</h2>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginTop: '12px' }}>
            Connects effortlessly with the software and hardware you already use — so your data flows freely, and your team works from one single source of truth.
          </p>
        </div>

        {/* 2-Column Integration Explorer */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 310px) minmax(0, 1fr)',
          gap: '36px',
          alignItems: 'start'
        }} className="int-layout">
          
          {/* Left Column: 10 Categories List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            background: 'var(--surface-subtle)',
            padding: '12px',
            borderRadius: '16px',
            border: '1px solid var(--border-medium)'
          }}>
            {integrationCategories.map((cat) => {
              const isSelected = cat.id === selectedCatId;
              const count = (integrationLogos[cat.logoKey] || []).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCatId(cat.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: isSelected ? '1.5px solid var(--primary-blue)' : '1px solid transparent',
                    background: isSelected ? '#FFFFFF' : 'transparent',
                    color: isSelected ? 'var(--primary-blue)' : 'var(--text-body)',
                    fontWeight: isSelected ? 700 : 500,
                    fontSize: '14px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 2px 8px rgba(29, 78, 216, 0.12)' : 'none',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span>{cat.name}</span>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    background: isSelected ? '#EFF6FF' : '#E2E8F0',
                    color: isSelected ? 'var(--primary-blue)' : '#64748B',
                    padding: '2px 7px',
                    borderRadius: '999px',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Category Logos Showcase */}
          <div style={{
            background: 'var(--surface-subtle)',
            border: '1px solid var(--border-medium)',
            borderRadius: '20px',
            padding: 'clamp(24px, 4vw, 36px)',
            boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)'
          }}>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                <span className="badge-pill badge-blue" style={{ fontSize: '12px' }}>
                  {activeCategory.name}
                </span>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500 }}>
                  {logosForActiveCat.length} Verified Connectors
                </span>
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, marginTop: '10px' }}>
                {activeCategory.name} Partners
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginTop: '4px' }}>
                {activeCategory.description}
              </p>
            </div>

            {/* Official Brand Logos Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(145px, 1fr))',
              gap: '16px',
              marginBottom: '32px'
            }}>
              {logosForActiveCat.map((logoDataUri, idx) => {
                const toolName = activeCategory.toolNames && activeCategory.toolNames[idx]
                  ? activeCategory.toolNames[idx]
                  : `Connector ${idx + 1}`;
                return (
                  <div
                    key={idx}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '14px',
                      padding: '16px 14px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '92px',
                      boxShadow: '0 2px 6px rgba(15, 23, 42, 0.03)',
                      transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease, border-color 0.2s ease',
                      cursor: 'default',
                      textAlign: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 10px 24px -6px rgba(15, 23, 42, 0.12)';
                      e.currentTarget.style.borderColor = 'var(--primary-blue-border)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 6px rgba(15, 23, 42, 0.03)';
                      e.currentTarget.style.borderColor = 'var(--border-medium)';
                    }}
                  >
                    <img
                      src={logoDataUri}
                      alt={toolName}
                      style={{
                        maxHeight: '44px',
                        maxWidth: '120px',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        display: 'block'
                      }}
                      loading="lazy"
                    />
                    <span style={{
                      fontSize: '11.5px',
                      fontWeight: 600,
                      color: '#475569',
                      marginTop: '8px',
                      lineHeight: 1.2
                    }}>
                      {toolName}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Custom Integration Callout */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--border-medium)',
              borderRadius: '14px',
              padding: '18px 22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '14px'
            }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14.5px', color: 'var(--text-main)' }}>
                  Need a custom ERP integration or legacy database bridge?
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>
                  Aasaan supports custom REST endpoints, webhooks, and on-premises middleware agents.
                </div>
              </div>

              <button onClick={onOpenDemo} className="btn btn-ghost btn-sm">
                <span>Inquire About APIs</span>
                <ArrowRight size={13} />
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .int-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
