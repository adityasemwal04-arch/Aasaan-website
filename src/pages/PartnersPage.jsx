import React, { useState } from 'react';
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import {
  partnerTiers,
  partnerBenefitPillars,
  partnerJourneySteps,
  currentPartners,
  partnerStats,
  partnerFAQs,
} from '../data/partnerData';
import PartnershipModal from '../components/PartnershipModal';

// ─── Sub-components ───────────────────────────────────────────────────────────

function HeroSection({ onOpenPartnerModal }) {
  return (
    <section style={{
      background: 'linear-gradient(180deg, #f6fbfe 0%, #ffffff 100%)',
      color: '#212121',
      padding: '70px 0 60px',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid #edf2f7'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Eyebrow label */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: '#eaf6fd',
          border: '1px solid rgba(30,149,211,0.25)',
          borderRadius: '99px',
          padding: '6px 18px',
          fontSize: '12.5px', fontWeight: 700,
          color: '#1e95d3',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom: '24px',
        }}>
          <span style={{ width: '7px', height: '7px', background: '#1e95d3', borderRadius: '50%', display: 'inline-block' }} />
          Aasaan Global Partner Ecosystem
        </div>

        <h1 style={{
          fontSize: 'clamp(32px, 4.5vw, 54px)',
          fontWeight: 800,
          color: '#212121',
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
          marginBottom: '22px',
          maxWidth: '840px',
        }}>
          Grow your business by{' '}
          <span style={{ color: '#1e95d3' }}>selling</span>{' '}
          and{' '}
          <span style={{ color: '#ff5b0b' }}>implementing</span>{' '}
          Aasaan ERP.
        </h1>

        <p style={{
          fontSize: '17px', color: '#5f5f5f', lineHeight: 1.65,
          maxWidth: '680px', marginBottom: '36px',
        }}>
          Join 20+ organisations across 10+ countries building their practice around Aasaan ERP.
          Earn competitive recurring margins, access world-class training, and win enterprise deals with our direct co-selling support.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            onClick={() => onOpenPartnerModal('Reseller Partner')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14.5px',
              fontWeight: 700,
              padding: '13px 26px',
              background: 'var(--colorAccent)',
              color: '#ffffff',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(30,149,211,0.28)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#157bb3'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--colorAccent)'}
          >
            Apply to Partner Program
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => onOpenPartnerModal('Reseller Partner')}
            style={{
              background: 'transparent',
              border: '2px solid #1e95d3',
              borderRadius: '6px',
              color: '#1e95d3',
              padding: '12px 24px',
              fontSize: '14.5px',
              cursor: 'pointer',
              fontWeight: 700,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#1e95d3';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#1e95d3';
            }}
          >
            Talk to Partnership Team
          </button>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          marginTop: '56px',
          paddingTop: '36px',
          borderTop: '1px solid #edf2f7',
        }} className="partner-stats-grid">
          {partnerStats.map((s) => (
            <div key={s.label} style={{
              textAlign: 'center',
              background: '#ffffff',
              padding: '20px 16px',
              borderRadius: '10px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
            }}>
              <div style={{ fontSize: '28px', marginBottom: '6px' }}>{s.icon}</div>
              <div style={{ fontSize: 'clamp(22px, 2.2vw, 30px)', fontWeight: 800, color: '#1e95d3', letterSpacing: '-0.02em' }}>{s.value}</div>
              <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px', lineHeight: 1.4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .partner-stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}

function TiersSection({ onOpenPartnerModal }) {
  return (
    <section id="partner-tiers" style={{ padding: '80px 0', background: '#f8f9fa', scrollMarginTop: '110px' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div style={{
            display: 'inline-block',
            background: '#eaf6fd', color: '#1e95d3',
            border: '1px solid rgba(30,149,211,0.25)',
            borderRadius: '99px', padding: '4px 14px',
            fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em',
            textTransform: 'uppercase', marginBottom: '14px',
          }}>Partnership Tiers</div>
          <h2 className="page_heading" style={{ margin: '0 auto 14px' }}>
            Choose Your Level of Partnership
          </h2>
          <p style={{ color: '#5f5f5f', fontSize: '16px', maxWidth: '580px', margin: '0 auto', lineHeight: 1.6 }}>
            Whether you're starting out as a local referral partner or building a full enterprise ERP practice, there's a tier designed for your growth.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }} className="tiers-grid">
          {partnerTiers.map((tier) => (
            <div key={tier.id} style={{
              background: '#FFFFFF',
              border: '1px solid #e2e8f0',
              borderRadius: '14px',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
              boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 32px rgba(30,149,211,0.12)';
                e.currentTarget.style.borderColor = '#1e95d3';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
            >
              {/* Header */}
              <div style={{ marginBottom: '18px' }}>
                <span style={{ fontSize: '32px' }}>{tier.icon}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#212121', margin: 0 }}>{tier.name}</h3>
                  <span style={{
                    background: '#eaf6fd',
                    color: '#1e95d3',
                    border: '1px solid rgba(30,149,211,0.25)',
                    fontSize: '11px', fontWeight: 700,
                    padding: '2px 8px', borderRadius: '4px',
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                  }}>{tier.badge}</span>
                </div>
                <p style={{ fontSize: '14px', color: '#5f5f5f', lineHeight: 1.6, marginTop: '10px', marginBottom: 0 }}>
                  {tier.description}
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: '#edf2f7', marginBottom: '20px' }} />

              {/* Benefits */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#1e95d3', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>
                  What you get
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  {tier.benefits.map((b) => (
                    <li key={b} style={{ display: 'flex', gap: '10px', fontSize: '13.5px', color: '#475569', lineHeight: 1.45 }}>
                      <CheckCircle size={15} color="#1e95d3" style={{ flexShrink: 0, marginTop: '2px' }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#64748b', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Requirements
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {tier.requirements.map((r) => (
                    <li key={r} style={{ display: 'flex', gap: '8px', fontSize: '12.5px', color: '#64748b' }}>
                      <span style={{ color: '#1e95d3', fontWeight: 700, flexShrink: 0 }}>→</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA — opens partnership modal with pre-selected tier */}
              <button
                onClick={() => onOpenPartnerModal(tier.name)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  background: 'var(--colorAccent)',
                  color: '#FFFFFF',
                  borderRadius: '6px',
                  padding: '12px 20px',
                  fontSize: '14px', fontWeight: 700,
                  border: 'none', cursor: 'pointer',
                  marginTop: '26px',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#157bb3'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--colorAccent)'}
              >
                {tier.cta}
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .tiers-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div style={{
            display: 'inline-block',
            background: '#eaf6fd', color: '#1e95d3',
            border: '1px solid rgba(30,149,211,0.25)',
            borderRadius: '99px', padding: '4px 14px',
            fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em',
            textTransform: 'uppercase', marginBottom: '14px',
          }}>Why Partner with Aasaan</div>
          <h2 className="page_heading" style={{ margin: '0 auto 14px' }}>
            Everything You Need to Build a Profitable Practice
          </h2>
          <p style={{ color: '#5f5f5f', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
            We provide deep product enablement, dedicated partner managers, and aggressive margin structures.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }} className="benefits-grid">
          {partnerBenefitPillars.map((p) => (
            <div key={p.title} style={{
              background: '#f8f9fa',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '28px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(0,0,0,0.06)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '30px', marginBottom: '14px' }}>{p.icon}</div>
              <h3 style={{ fontSize: '16.5px', fontWeight: 700, color: '#212121', marginBottom: '10px' }}>{p.title}</h3>
              <p style={{ fontSize: '14px', color: '#5f5f5f', lineHeight: 1.6, margin: 0 }}>{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .benefits-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .benefits-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function JourneySection() {
  return (
    <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, #f6fbfe 0%, #ffffff 100%)', borderTop: '1px solid #edf2f7', borderBottom: '1px solid #edf2f7' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            display: 'inline-block',
            background: '#eaf6fd', color: '#1e95d3',
            border: '1px solid rgba(30,149,211,0.25)',
            borderRadius: '99px', padding: '4px 14px',
            fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em',
            textTransform: 'uppercase', marginBottom: '14px',
          }}>Partner Onboarding</div>
          <h2 className="page_heading" style={{ margin: '0 auto 14px' }}>
            From Application to First Revenue in 30 Days
          </h2>
          <p style={{ color: '#5f5f5f', fontSize: '16px', maxWidth: '520px', margin: '0 auto' }}>
            Our structured onboarding removes friction so you can focus on building client trust and closing deals.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '16px',
          position: 'relative',
        }} className="journey-grid">
          {/* Connector line */}
          <div style={{
            position: 'absolute',
            top: '32px',
            left: 'calc(10% + 20px)',
            right: 'calc(10% + 20px)',
            height: '2px',
            background: '#bfdbfe',
            zIndex: 0,
          }} className="journey-line" />

          {partnerJourneySteps.map((s, i) => (
            <div key={s.step} style={{ textAlign: 'center', padding: '0 8px', position: 'relative', zIndex: 1 }}>
              {/* Step number circle */}
              <div style={{
                width: '64px', height: '64px',
                borderRadius: '50%',
                background: '#1e95d3',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '20px', fontWeight: 800, color: '#FFFFFF',
                boxShadow: '0 4px 14px rgba(30,149,211,0.3)',
              }}>
                {s.step}
              </div>
              <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#212121', marginBottom: '8px' }}>{s.title}</h4>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5 }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .journey-grid { grid-template-columns: 1fr 1fr !important; }
          .journey-line { display: none !important; }
        }
        @media (max-width: 560px) {
          .journey-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function PartnersShowcase() {
  return (
    <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div style={{
            display: 'inline-block',
            background: '#eaf6fd', color: '#1e95d3',
            border: '1px solid rgba(30,149,211,0.25)',
            borderRadius: '99px', padding: '4px 14px',
            fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em',
            textTransform: 'uppercase', marginBottom: '14px',
          }}>Partner Network</div>
          <h2 className="page_heading" style={{ margin: '0 auto 14px' }}>
            Organisations Already Thriving in Our Network
          </h2>
          <p style={{ color: '#5f5f5f', fontSize: '16px', maxWidth: '580px', margin: '0 auto' }}>
            From IT consulting agencies to regional industrial distributors delivering Aasaan solutions.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }} className="partners-showcase-grid">
          {currentPartners.map((p) => (
            <div key={p.name} style={{
              background: '#FFFFFF',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '24px',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(30,149,211,0.1)';
                e.currentTarget.style.borderColor = '#1e95d3';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.03)';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <div style={{ fontSize: '17px', fontWeight: 800, color: '#212121' }}>{p.name}</div>
                  <div style={{ fontSize: '13px', color: '#64748b', marginTop: '2px' }}>{p.country}</div>
                </div>
                <span style={{
                  background: '#eaf6fd', color: '#1e95d3',
                  border: '1px solid rgba(30,149,211,0.25)',
                  fontSize: '11px', fontWeight: 700,
                  padding: '3px 8px', borderRadius: '4px',
                  whiteSpace: 'nowrap',
                }}>{p.type}</span>
              </div>
              <div style={{
                fontSize: '11.5px', fontWeight: 700,
                color: '#ff5b0b',
                textTransform: 'uppercase', letterSpacing: '0.05em',
                marginBottom: '10px',
              }}>{p.industry}</div>
              <p style={{ fontSize: '13.5px', color: '#5f5f5f', lineHeight: 1.6, margin: 0 }}>{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .partners-showcase-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .partners-showcase-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
      <div className="container" style={{ maxWidth: '780px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <h2 className="page_heading" style={{ margin: '0 auto 12px' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#5f5f5f', fontSize: '16px' }}>
            Everything you need to know about joining the Aasaan Partner Program.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {partnerFAQs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} style={{
                border: `1px solid ${isOpen ? '#1e95d3' : '#e2e8f0'}`,
                borderRadius: '10px',
                overflow: 'hidden',
                background: isOpen ? '#f6fbfe' : '#FFFFFF',
                transition: 'background 0.2s ease, border-color 0.2s ease',
              }}>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '18px 22px',
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    textAlign: 'left', gap: '16px',
                  }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#212121', lineHeight: 1.4 }}>{faq.q}</span>
                  {isOpen ? <ChevronUp size={18} color="#1e95d3" style={{ flexShrink: 0 }} /> : <ChevronDown size={18} color="#94a3b8" style={{ flexShrink: 0 }} />}
                </button>
                {isOpen && (
                  <div style={{ padding: '0 22px 20px', fontSize: '14.5px', color: '#475569', lineHeight: 1.7 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PartnerCTA({ onOpenPartnerModal }) {
  return (
    <section style={{
      padding: '80px 0',
      background: 'linear-gradient(135deg, #1e95d3 0%, #0d6ea0 100%)',
      color: '#FFFFFF',
      textAlign: 'center',
    }}>
      <div className="container" style={{ maxWidth: '680px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ fontSize: '44px', marginBottom: '18px' }}>🤝</div>
        <h2 style={{
          fontSize: 'clamp(28px, 3.5vw, 42px)',
          fontWeight: 800,
          color: '#FFFFFF',
          letterSpacing: '-0.02em',
          marginBottom: '16px',
        }}>
          Ready to Grow Your Business with Aasaan?
        </h2>
        <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, marginBottom: '36px' }}>
          Join our partner ecosystem today. It's free to apply, complete with partner training, lead sharing, and lucrative recurring margins.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => onOpenPartnerModal('Reseller Partner')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#FFFFFF', color: '#1e95d3',
              borderRadius: '6px', padding: '13px 28px',
              fontSize: '15px', fontWeight: 800,
              border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Apply Now — It's Free
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => onOpenPartnerModal('Reseller Partner')}
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: '2px solid rgba(255,255,255,0.7)',
              borderRadius: '6px', color: '#FFFFFF',
              padding: '12px 26px',
              fontSize: '15px', fontWeight: 700, cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
          >
            Schedule a Partnership Call
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Page Assembly ─────────────────────────────────────────────────────────────

export default function PartnersPage({ onOpenDemo, onNavigate }) {
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [partnerSolution, setPartnerSolution] = useState('Reseller Partner');

  const handleOpenPartnerModal = (solution = 'Reseller Partner') => {
    setPartnerSolution(solution);
    setIsPartnerModalOpen(true);
  };

  return (
    <div style={{ marginTop: '106px', minHeight: '100vh', background: '#FFFFFF' }}>
      <HeroSection onOpenPartnerModal={handleOpenPartnerModal} />
      <TiersSection onOpenPartnerModal={handleOpenPartnerModal} />
      <BenefitsSection />
      <JourneySection />
      <PartnersShowcase />
      <FAQSection />
      <PartnerCTA onOpenPartnerModal={handleOpenPartnerModal} />

      {/* Floating CTA buttons */}
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
          href="https://wa.me/917428267616?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20the%20Aasaan%20Partner%20Program"
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
          onClick={() => handleOpenPartnerModal('Reseller Partner')}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px 10px 12px', borderRadius: '28px', background: '#1D4ED8', border: 'none', boxShadow: '0 4px 16px rgba(29,78,216,0.4)', cursor: 'pointer', transition: 'transform 0.2s ease, box-shadow 0.2s ease', color: '#fff', fontWeight: 600, fontSize: '13.5px' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(29,78,216,0.6)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(29,78,216,0.4)'; }}
        >
          <i className="fas fa-handshake" style={{ fontSize: '18px' }}></i>
          <span>Join Partner Program</span>
        </button>
      </div>

      {/* Dedicated Partnership Application Modal */}
      <PartnershipModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
        initialSolution={partnerSolution}
      />
    </div>
  );
}
