import React, { useState, useEffect } from 'react';
import { liteSteps, liteFeatures as defaultFeatures, liteIndustries as defaultIndustries } from '../data/liteData';
import { getLiteFeatures, getLiteIndustries } from '../services/dataService';
import { Feather, ArrowRight, ExternalLink, ShoppingBag, CheckCircle2 } from 'lucide-react';
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
              <span>Try Demo for Free</span>
              <ExternalLink size={15} />
            </a>
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
      {/* 4.5 SPOTLIGHT: AASAAN MART BUSINESS NETWORK                  */}
      {/* ============================================================ */}
      <section style={{
        background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 100%)',
        borderTop: '1px solid #DCFCE7',
        borderBottom: '1px solid #E2E8F0',
        padding: '60px 20px'
      }}>
        <div className="main_content align_self_center" style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{
            background: '#FFFFFF',
            border: '1.5px solid #BBF7D0',
            borderRadius: '20px',
            padding: '36px 32px',
            boxShadow: '0 12px 36px rgba(16, 185, 129, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: '#ECFDF5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #A7F3D0',
                  flexShrink: 0
                }}>
                  <ShoppingBag size={24} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 800, color: '#064E3B' }}>
                      Aasaan Mart Powered By Aasaan ERP
                    </h3>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      background: '#059669',
                      color: '#FFFFFF',
                      padding: '2px 8px',
                      borderRadius: '12px'
                    }}>
                      LIVE MARKETPLACE
                    </span>
                  </div>
                  <p style={{ margin: '4px 0 0', fontSize: '13.5px', color: '#4B5563' }}>
                    The verified business network connecting buyers and sellers across all Indian states with instant storefront listing.
                  </p>
                </div>
              </div>

              <a
                href="https://erplite.aasaan.in/aasaanmart"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#059669',
                  color: '#FFFFFF',
                  padding: '11px 22px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(5, 150, 105, 0.25)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#047857'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#059669'; e.currentTarget.style.transform = 'none'; }}
              >
                <span>Explore Aasaan Mart</span>
                <ExternalLink size={15} />
              </a>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '18px',
              paddingTop: '20px',
              borderTop: '1px solid #F1F5F9'
            }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle2 size={18} style={{ color: '#059669', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#1E293B' }}>Instant Digital Storefront</div>
                  <div style={{ fontSize: '12.5px', color: '#64748B', lineHeight: 1.4, marginTop: '2px' }}>
                    Switch on "Show in Aasaan Mart" inside your ERP organization settings and your company goes live across India.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle2 size={18} style={{ color: '#059669', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#1E293B' }}>Verified B2B & Retail Buyers</div>
                  <div style={{ fontSize: '12.5px', color: '#64748B', lineHeight: 1.4, marginTop: '2px' }}>
                    Receive qualified inquiries and direct quick orders from active businesses searching by category and state.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle2 size={18} style={{ color: '#059669', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#1E293B' }}>Unified Inventory & Billing</div>
                  <div style={{ fontSize: '12.5px', color: '#64748B', lineHeight: 1.4, marginTop: '2px' }}>
                    Orders from Aasaan Mart automatically synchronize with your Aasaan ERP ledger and real-time inventory.
                  </div>
                </div>
              </div>
            </div>
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
              <span>Try Demo for Free</span>
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
