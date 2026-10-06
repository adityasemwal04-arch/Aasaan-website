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

// ─── Sub-components ───────────────────────────────────────────────────────────

function HeroSection({ onOpenDemo }) {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #0B1329 0%, #0F1E42 60%, #1E1B4B 100%)',
      color: '#FFFFFF',
      padding: '120px 0 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'linear-gradient(#94A3B8 1px, transparent 1px), linear-gradient(90deg, #94A3B8 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Accent blobs */}
      <div style={{
        position: 'absolute', top: '-60px', right: '-60px',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(234,88,12,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', left: '10%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(29,78,216,0.12) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Eyebrow label */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(234,88,12,0.15)',
          border: '1px solid rgba(234,88,12,0.4)',
          borderRadius: '99px',
          padding: '6px 16px',
          fontSize: '12px', fontWeight: 700,
          color: '#FDBA74',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '28px',
        }}>
          <span style={{ width: '6px', height: '6px', background: '#FB923C', borderRadius: '50%', display: 'inline-block' }} />
          Aasaan Partner Program
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(38px, 5.5vw, 68px)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          lineHeight: 1.08,
          marginBottom: '28px',
          maxWidth: '820px',
        }}>
          Grow your business by{' '}
          <span style={{ color: '#FB923C' }}>selling</span>{' '}
          and{' '}
          <span style={{
            background: 'linear-gradient(135deg, #60A5FA, #A78BFA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            implementing
          </span>{' '}
          Aasaan ERP.
        </h1>

        <p style={{
          fontSize: '19px', color: '#CBD5E1', lineHeight: 1.65,
          maxWidth: '620px', marginBottom: '44px',
        }}>
          Join 20+ organisations across 10+ countries building their practice around Aasaan ERP.
          Earn competitive commissions, access world-class training, and win deals with our co-selling support.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <a
            href="mailto:contactus@aasaanservices.in?subject=Partner Program Inquiry"
            className="btn btn-orange"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px', padding: '14px 28px' }}
          >
            Apply to Partner Program
            <ArrowRight size={16} />
          </a>
          <button
            onClick={onOpenDemo}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: '8px',
              color: '#E2E8F0',
              padding: '14px 28px',
              fontSize: '15px',
              cursor: 'pointer',
              fontWeight: 500,
            }}
          >
            Talk to Partnership Team
          </button>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          marginTop: '72px',
          paddingTop: '40px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }} className="partner-stats-grid">
          {partnerStats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '4px' }}>{s.icon}</div>
              <div style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.03em' }}>{s.value}</div>
              <div style={{ fontSize: '12px', color: '#64748B', marginTop: '4px', lineHeight: 1.4 }}>{s.label}</div>
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

function TiersSection({ onOpenDemo }) {
  return (
    <section style={{ padding: '96px 0', background: '#F8FAFC' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block',
            background: '#EFF6FF', color: 'var(--primary-blue)',
            border: '1px solid var(--primary-blue-border)',
            borderRadius: '99px', padding: '4px 14px',
            fontSize: '12px', fontWeight: 700, letterSpacing: '0.06em',
            textTransform: 'uppercase', marginBottom: '16px',
          }}>Partnership Tiers</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 800, letterSpacing: '-0.03em',
            color: 'var(--text-main)', marginBottom: '16px',
          }}>
            Choose your level of partnership
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '17px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
            Whether you're starting out as a reseller or building a full ERP practice, there's a tier designed for your ambition.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '28px',
        }} className="tiers-grid">
          {partnerTiers.map((tier) => (
            <div key={tier.id} style={{
              background: '#FFFFFF',
              border: `2px solid ${tier.colorBorder}`,
              borderRadius: '16px',
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 20px 40px -12px ${tier.color}22`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
              }}
            >
              {/* Header */}
              <div style={{ marginBottom: '20px' }}>
                <span style={{ fontSize: '36px' }}>{tier.icon}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '12px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>{tier.name}</h3>
                  <span style={{
                    background: tier.colorLight,
                    color: tier.color,
                    border: `1px solid ${tier.colorBorder}`,
                    fontSize: '10px', fontWeight: 700,
                    padding: '2px 8px', borderRadius: '4px',
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                  }}>{tier.badge}</span>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, marginTop: '10px', marginBottom: 0 }}>
                  {tier.description}
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: tier.colorBorder, marginBottom: '20px' }} />

              {/* Benefits */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
                  What you get
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  {tier.benefits.map((b) => (
                    <li key={b} style={{ display: 'flex', gap: '10px', fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.4 }}>
                      <CheckCircle size={15} color={tier.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Requirements
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {tier.requirements.map((r) => (
                    <li key={r} style={{ display: 'flex', gap: '8px', fontSize: '12.5px', color: 'var(--text-muted)' }}>
                      <span style={{ color: tier.color, fontWeight: 700, flexShrink: 0 }}>→</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="mailto:contactus@aasaanservices.in?subject=Partner Application"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  background: tier.color,
                  color: '#FFFFFF',
                  borderRadius: '8px',
                  padding: '13px 20px',
                  fontSize: '14px', fontWeight: 700,
                  textDecoration: 'none',
                  marginTop: '28px',
                  transition: 'opacity 0.15s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                {tier.cta}
                <ArrowRight size={14} />
              </a>
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
    <section style={{ padding: '96px 0', background: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-block',
            background: '#FFF7ED', color: '#EA580C',
            border: '1px solid #FED7AA',
            borderRadius: '99px', padding: '4px 14px',
            fontSize: '12px', fontWeight: 700, letterSpacing: '0.06em',
            textTransform: 'uppercase', marginBottom: '16px',
          }}>Why Partner with Aasaan</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px, 3vw, 40px)',
            fontWeight: 800, letterSpacing: '-0.03em',
            color: 'var(--text-main)', marginBottom: '14px',
          }}>
            Everything you need to build a successful ERP practice
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '28px',
        }} className="benefits-grid">
          {partnerBenefitPillars.map((p) => (
            <div key={p.title} style={{
              background: '#F8FAFC',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              padding: '28px',
            }}>
              <div style={{ fontSize: '32px', marginBottom: '14px' }}>{p.icon}</div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>{p.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>{p.description}</p>
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
    <section style={{ padding: '96px 0', background: 'linear-gradient(135deg, #0B1329 0%, #0F1E42 100%)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(234,88,12,0.15)', color: '#FDBA74',
            border: '1px solid rgba(234,88,12,0.4)',
            borderRadius: '99px', padding: '4px 14px',
            fontSize: '12px', fontWeight: 700, letterSpacing: '0.06em',
            textTransform: 'uppercase', marginBottom: '16px',
          }}>Partner Onboarding</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px, 3vw, 42px)',
            fontWeight: 800, letterSpacing: '-0.03em',
            color: '#FFFFFF', marginBottom: '14px',
          }}>
            From application to first commission in 30 days
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
            Our structured onboarding removes friction so you can focus on building client relationships.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '0',
          position: 'relative',
        }} className="journey-grid">
          {/* Connector line */}
          <div style={{
            position: 'absolute',
            top: '36px',
            left: 'calc(10% + 18px)',
            right: 'calc(10% + 18px)',
            height: '2px',
            background: 'linear-gradient(90deg, rgba(234,88,12,0.5), rgba(147,112,219,0.5))',
            zIndex: 0,
          }} className="journey-line" />

          {partnerJourneySteps.map((s, i) => (
            <div key={s.step} style={{ textAlign: 'center', padding: '0 12px', position: 'relative', zIndex: 1 }}>
              {/* Step number circle */}
              <div style={{
                width: '72px', height: '72px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1D4ED8, #7C3AED)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '22px', fontWeight: 900, color: '#FFFFFF',
                boxShadow: '0 0 0 4px rgba(29,78,216,0.2)',
              }}>
                {s.step}
              </div>
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>{s.title}</h4>
              <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: 1.5 }}>{s.description}</p>
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
    <section style={{ padding: '96px 0', background: '#F8FAFC' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            display: 'inline-block',
            background: '#EFF6FF', color: 'var(--primary-blue)',
            border: '1px solid var(--primary-blue-border)',
            borderRadius: '99px', padding: '4px 14px',
            fontSize: '12px', fontWeight: 700, letterSpacing: '0.06em',
            textTransform: 'uppercase', marginBottom: '16px',
          }}>Partner Network</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px, 3vw, 40px)',
            fontWeight: 800, letterSpacing: '-0.03em',
            color: 'var(--text-main)',
          }}>
            Organisations already in our network
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }} className="partners-showcase-grid">
          {currentPartners.map((p) => (
            <div key={p.name} style={{
              background: '#FFFFFF',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              padding: '24px',
              transition: 'box-shadow 0.2s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <div style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)' }}>{p.name}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>{p.country}</div>
                </div>
                <span style={{
                  background: '#EFF6FF', color: 'var(--primary-blue)',
                  border: '1px solid var(--primary-blue-border)',
                  fontSize: '10px', fontWeight: 700,
                  padding: '3px 8px', borderRadius: '4px',
                  whiteSpace: 'nowrap',
                }}>{p.type}</span>
              </div>
              <div style={{
                fontSize: '11px', fontWeight: 700,
                color: 'var(--accent-orange)',
                textTransform: 'uppercase', letterSpacing: '0.06em',
                marginBottom: '10px',
              }}>{p.industry}</div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>{p.description}</p>
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
    <section style={{ padding: '96px 0', background: '#FFFFFF' }}>
      <div className="container" style={{ maxWidth: '760px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px, 3vw, 40px)',
            fontWeight: 800, letterSpacing: '-0.03em',
            color: 'var(--text-main)', marginBottom: '12px',
          }}>Frequently asked questions</h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px' }}>
            Everything you need to know before applying.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {partnerFAQs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} style={{
                border: `1px solid ${isOpen ? 'var(--primary-blue-border)' : 'var(--border-subtle)'}`,
                borderRadius: '10px',
                overflow: 'hidden',
                background: isOpen ? '#EFF6FF' : '#FFFFFF',
                transition: 'background 0.2s ease, border-color 0.2s ease',
              }}>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '20px 24px',
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    textAlign: 'left', gap: '16px',
                  }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.4 }}>{faq.q}</span>
                  {isOpen ? <ChevronUp size={18} color="var(--primary-blue)" style={{ flexShrink: 0 }} /> : <ChevronDown size={18} color="var(--text-muted)" style={{ flexShrink: 0 }} />}
                </button>
                {isOpen && (
                  <div style={{ padding: '0 24px 20px', fontSize: '14.5px', color: 'var(--text-body)', lineHeight: 1.7 }}>
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

function PartnerCTA({ onOpenDemo }) {
  return (
    <section style={{
      padding: '96px 0',
      background: 'linear-gradient(135deg, #1D4ED8 0%, #7C3AED 100%)',
      color: '#FFFFFF',
      textAlign: 'center',
    }}>
      <div className="container" style={{ maxWidth: '640px' }}>
        <div style={{ fontSize: '48px', marginBottom: '24px' }}>🤝</div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 3.5vw, 48px)',
          fontWeight: 900, letterSpacing: '-0.03em',
          marginBottom: '16px',
        }}>
          Ready to build with Aasaan?
        </h2>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '40px' }}>
          Join our partner network today. It's free to apply, free to train, and your first commission could arrive within 30 days.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="mailto:contactus@aasaanservices.in?subject=Partner Program Application"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#FFFFFF', color: '#1D4ED8',
              borderRadius: '8px', padding: '14px 32px',
              fontSize: '15px', fontWeight: 800,
              textDecoration: 'none',
            }}
          >
            Apply Now — It's Free
            <ArrowRight size={16} />
          </a>
          <button
            onClick={onOpenDemo}
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '8px', color: '#FFFFFF',
              padding: '14px 28px',
              fontSize: '15px', fontWeight: 500, cursor: 'pointer',
            }}
          >
            Schedule a Partnership Call
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Page Assembly ─────────────────────────────────────────────────────────────

export default function PartnersPage({ onOpenDemo }) {
  return (
    <div>
      <HeroSection onOpenDemo={onOpenDemo} />
      <TiersSection onOpenDemo={onOpenDemo} />
      <BenefitsSection />
      <JourneySection />
      <PartnersShowcase />
      <FAQSection />
      <PartnerCTA onOpenDemo={onOpenDemo} />
    </div>
  );
}
