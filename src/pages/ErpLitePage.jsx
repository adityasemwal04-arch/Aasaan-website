import React, { useState, useEffect } from 'react';
import { liteSteps, liteFeatures as defaultFeatures, liteIndustries as defaultIndustries } from '../data/liteData';
import { getLiteFeatures, getLiteIndustries } from '../services/dataService';
import { Feather, ArrowRight, ExternalLink } from 'lucide-react';
import { getRoutePath } from '../utils/navigation';

export default function ErpLitePage({ onOpenDemo, onNavigate }) {
  const [features, setFeatures] = useState(defaultFeatures);
  const [industries, setIndustries] = useState(defaultIndustries);

  useEffect(() => {
    getLiteFeatures().then((data) => {
      if (data && data.length) setFeatures(data);
    });
    getLiteIndustries().then((data) => {
      if (data && data.length) setIndustries(data);
    });
  }, []);

  const handleCardClick = (slug) => {
    if (onNavigate) {
      onNavigate(`blog/${slug}`);
    } else {
      window.location.href = getRoutePath(`blog/${slug}`);
    }
  };

  return (
    <div className="column_alignment base_margin" style={{ marginTop: '106px' }}>

      {/* ============================================================ */}
      {/* 1. ERP LITE HERO SECTION                                     */}
      {/* ============================================================ */}
      <section style={{
        background: 'linear-gradient(180deg, #f6fbfe 0%, #ffffff 100%)',
        padding: '50px 20px 40px',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div className="main_content align_self_center" style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Eyebrow badge pills */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{
              background: 'rgba(30,149,211,0.1)',
              color: 'var(--colorAccent)',
              border: '1px solid rgba(30,149,211,0.25)',
              padding: '5px 14px',
              borderRadius: '20px',
              fontSize: '12.5px',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Feather size={13} /> Aasaan ERP Lite Edition
            </span>
            <span style={{
              background: '#f8fafc',
              color: '#475569',
              border: '1px solid #cbd5e1',
              padding: '5px 14px',
              borderRadius: '20px',
              fontSize: '12.5px',
              fontWeight: 600
            }}>
              ⚡ Live in 7 Days • From ₹12,000/yr
            </span>
          </div>

          <h1 className="page_heading" style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.2, marginBottom: '16px' }}>
            Grow Faster with <br />
            <b>AI-Powered Aasaan ERP Lite</b>
          </h1>

          <p style={{
            fontSize: '16.5px',
            color: '#5f5f5f',
            maxWidth: '720px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Optimize your team's daily sales performance, manage inventory, and generate GST invoices with a clutter-free, mobile-first cloud platform.
          </p>

          {/* Pricing Highlight Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: '#ffffff',
            border: '1.5px solid var(--colorAccent)',
            borderRadius: '999px',
            padding: '8px 22px',
            marginTop: '22px',
            boxShadow: '0 4px 14px rgba(30,149,211,0.12)'
          }}>
            <span style={{ fontSize: '13.5px', color: '#212121', fontWeight: 600 }}>The Most Affordable ERP in India:</span>
            <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--colorAccent)' }}>Starts at ₹12,000 / year</span>
          </div>

          {/* CTAs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            marginTop: '28px',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={onOpenDemo}
              className="accent_button"
              style={{ padding: '13px 28px', fontSize: '15px' }}
            >
              <span>Schedule a 15-Minute Demo</span>
              <ArrowRight size={16} style={{ marginLeft: '6px' }} />
            </button>
            <a
              href="https://erplite.aasaan.in/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '13px 24px',
                fontSize: '15px',
                fontWeight: 600,
                color: '#212121',
                background: '#ffffff',
                border: '1.5px solid #cbd5e1',
                borderRadius: '6px',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--colorAccent)'; e.currentTarget.style.color = 'var(--colorAccent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.color = '#212121'; }}
            >
              <span>Register at erplite.aasaan.in</span>
              <ExternalLink size={15} />
            </a>
          </div>

          {/* Clean Dashboard Preview Card */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 12px 36px rgba(0,0,0,0.06)',
            maxWidth: '920px',
            margin: '36px auto 0'
          }}>
            <div style={{
              background: '#1a3a54',
              padding: '14px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
              color: '#ffffff'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                <span style={{ fontWeight: 700, fontSize: '14px', letterSpacing: '0.02em' }}>
                  Aasaan ERP Lite — Clean, Distraction-Free Daily View
                </span>
              </div>
              <span style={{
                background: 'var(--colorAccent)',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: '4px'
              }}>
                Zero Learning Curve
              </span>
            </div>

            <div style={{ padding: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '16px' }}>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px', textAlign: 'left' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>Active Leads Today</div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--colorAccent)', marginTop: '4px' }}>28 Leads</div>
                  <div style={{ fontSize: '11px', color: '#10b981', marginTop: '4px' }}>+6 from WhatsApp API</div>
                </div>

                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px', textAlign: 'left' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>Quotes Out (Pending)</div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#334155', marginTop: '4px' }}>₹6,42,000</div>
                  <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>8 quotes awaiting approval</div>
                </div>

                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px', textAlign: 'left' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>Today's Invoiced Revenue</div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--colorAccent)', marginTop: '4px' }}>₹1,84,500</div>
                  <div style={{ fontSize: '11px', color: '#10b981', marginTop: '4px' }}>100% GSTR-1 matched</div>
                </div>

                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px', textAlign: 'left' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>Low Stock Alert</div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#dc2626', marginTop: '4px' }}>2 Items</div>
                  <div style={{ fontSize: '11px', color: '#dc2626', marginTop: '4px' }}>Auto-PO requisition ready</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. TOP FEATURES OUR CUSTOMERS LOVE (From User Screenshot 1)  */}
      {/* ============================================================ */}
      <section id="lite-features" className="column_alignment section_wrapper" style={{ background: '#ffffff', scrollMarginTop: '100px' }}>
        <div className="main_content align_self_center">
          
          <div style={{ maxWidth: '780px', margin: '0 auto 40px', textAlign: 'center' }}>
            <span style={{
              background: 'rgba(30,149,211,0.1)',
              color: 'var(--colorAccent)',
              padding: '4px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'inline-block',
              marginBottom: '10px'
            }}>
              Built for Fast-Moving Teams
            </span>
            <h2 className="page_heading" style={{ margin: '0 auto 12px' }}>
              Top Features that Our Customers Love
            </h2>
            <p style={{ fontSize: '16px', color: '#5f5f5f', margin: '0 auto', lineHeight: 1.5, maxWidth: '640px' }}>
              Everything your team needs to track leads, manage inventory, and get paid faster without wrestling with bloated software.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '24px'
          }}>
            {features.map((feat, i) => {
              const featSlug = feat.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return (
                <div
                  key={i}
                  id={`lite-feat-${featSlug}`}
                  onClick={() => handleCardClick(featSlug)}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'all 0.25s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(30,149,211,0.15)';
                    e.currentTarget.style.borderColor = 'var(--colorAccent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                >
                  {/* Feature Image Banner */}
                  {feat.img && (
                    <div style={{ height: '160px', position: 'relative', overflow: 'hidden', background: '#0f172a' }}>
                      <img
                        src={feat.img}
                        alt={feat.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        loading="lazy"
                      />
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 60%)'
                      }} />
                      <span style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: '14px',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#ffffff',
                        background: 'rgba(15, 23, 42, 0.85)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        padding: '3px 10px',
                        borderRadius: '4px',
                        letterSpacing: '0.02em'
                      }}>
                        {feat.tag}
                      </span>
                    </div>
                  )}

                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1, gap: '8px' }}>
                    <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#212121', margin: 0 }}>
                      {feat.title}
                    </h4>
                    <p style={{ fontSize: '13.5px', color: '#5f5f5f', lineHeight: 1.5, margin: 0, flex: 1 }}>
                      {feat.desc}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--colorAccent)', fontSize: '13px', fontWeight: 700, marginTop: '10px' }}>
                      <span>Read Architecture Article</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. 6-STEP ONBOARDING ROADMAP                                 */}
      {/* ============================================================ */}
      <section id="lite-roadmap" className="column_alignment section_wrapper" style={{ background: '#f8f9fa', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', scrollMarginTop: '100px' }}>
        <div className="main_content align_self_center">
          
          <div style={{ maxWidth: '780px', margin: '0 auto 40px', textAlign: 'center' }}>
            <span style={{
              background: 'rgba(30,149,211,0.1)',
              color: 'var(--colorAccent)',
              padding: '4px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'inline-block',
              marginBottom: '10px'
            }}>
              Rapid 7-Day Implementation
            </span>
            <h2 className="page_heading" style={{ margin: '0 auto 12px' }}>
              Registering? We’ve Got the Steps Covered
            </h2>
            <p style={{ fontSize: '16px', color: '#5f5f5f', margin: '0 auto', lineHeight: 1.5 }}>
              No 6-month consulting engagements. ERP Lite gets your team up and running in days.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {liteSteps.map((s) => (
              <div
                key={s.step}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                  position: 'relative'
                }}
              >
                <div style={{
                  fontSize: '26px',
                  fontWeight: 800,
                  color: 'var(--colorAccent)',
                  marginBottom: '10px'
                }}>
                  {s.step}
                </div>
                <h4 style={{ fontSize: '16.5px', fontWeight: 700, color: '#212121', marginBottom: '8px' }}>
                  {s.title}
                </h4>
                <p style={{ fontSize: '13.5px', color: '#5f5f5f', lineHeight: 1.5, margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. INDUSTRIES THRIVING ON ERP LITE (From User Screenshot 2)   */}
      {/* ============================================================ */}
      <section id="lite-industries" className="column_alignment section_wrapper" style={{ background: '#ffffff', scrollMarginTop: '100px' }}>
        <div className="main_content align_self_center">
          
          <div style={{ maxWidth: '780px', margin: '0 auto 40px', textAlign: 'center' }}>
            <span style={{
              background: 'rgba(30,149,211,0.1)',
              color: 'var(--colorAccent)',
              padding: '4px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'inline-block',
              marginBottom: '10px'
            }}>
              Tailored for SME Agility
            </span>
            <h2 className="page_heading" style={{ margin: '0 auto 12px' }}>
              Industries Thriving on Aasaan ERP Lite
            </h2>
            <p style={{ fontSize: '16px', color: '#5f5f5f', margin: '0 auto', lineHeight: 1.5, maxWidth: '640px' }}>
              Proven architecture across trading, distribution, field services, and light manufacturing.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {industries.map((ind, i) => {
              const indSlug = ind.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return (
                <div
                  key={i}
                  id={`lite-ind-${indSlug}`}
                  onClick={() => handleCardClick(indSlug)}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                    transition: 'all 0.25s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(30,149,211,0.15)';
                    e.currentTarget.style.borderColor = 'var(--colorAccent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.04)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                >
                  {/* Industry Photo Banner with Tag */}
                  {ind.img && (
                    <div style={{ height: '140px', position: 'relative', overflow: 'hidden', background: '#0f172a' }}>
                      <img
                        src={ind.img}
                        alt={ind.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        loading="lazy"
                      />
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, transparent 60%)'
                      }} />
                      <span style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '12px',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#ffffff',
                        background: 'rgba(15, 23, 42, 0.85)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        padding: '3px 8px',
                        borderRadius: '4px'
                      }}>
                        {ind.tag}
                      </span>
                    </div>
                  )}

                  <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{ fontSize: '15.5px', fontWeight: 700, color: '#212121', marginBottom: '6px', lineHeight: 1.3 }}>
                        {ind.name}
                      </h4>
                      <p style={{ fontSize: '12.5px', color: '#5f5f5f', lineHeight: 1.45, margin: 0 }}>
                        {ind.desc}
                      </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--colorAccent)', fontSize: '12px', fontWeight: 700, marginTop: '14px' }}>
                      <span>Read Solution Blog</span>
                      <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. BOTTOM REGISTRATION CTA BAR                                */}
      {/* ============================================================ */}
      <section id="lite-pricing" style={{
        background: 'linear-gradient(135deg, #1e95d3 0%, #0d6ea0 60%, #212121 100%)',
        color: '#ffffff',
        padding: '54px 20px',
        textAlign: 'center'
      }}>
        <div className="main_content align_self_center" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(24px, 3.5vw, 32px)', fontWeight: 800, margin: '0 auto 12px' }}>
            Start Scaling Your Business with <br /><span style={{ color: '#75d0f7' }}>Aasaan ERP Lite</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', margin: '0 auto', maxWidth: '600px', lineHeight: 1.5 }}>
            Get started for as low as ₹12,000/year. Zero setup friction, full cloud flexibility.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginTop: '28px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenDemo}
              className="accent_button"
              style={{ padding: '13px 30px', fontSize: '15px' }}
            >
              Schedule a Demo
            </button>
            <a
              href="https://erplite.aasaan.in/"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '13px 26px',
                color: '#ffffff',
                border: '1.5px solid rgba(255,255,255,0.4)',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '6px',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
            >
              <span>Register at erplite.aasaan.in</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Floating CTA buttons matching HomePage */}
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
          href="https://wa.me/917428267616?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Aasaan%20ERP%20Lite"
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
