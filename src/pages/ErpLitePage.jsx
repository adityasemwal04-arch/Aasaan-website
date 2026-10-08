import React, { useState, useEffect } from 'react';
import { liteSteps, liteFeatures as defaultFeatures, liteIndustries as defaultIndustries } from '../data/liteData';
import { getLiteFeatures, getLiteIndustries } from '../services/dataService';
import { Feather, Smartphone, ArrowRight, ExternalLink, CheckCircle2, Zap, Shield, Sparkles, DollarSign } from 'lucide-react';

export default function ErpLitePage({ onOpenDemo }) {
  const [features, setFeatures] = useState(defaultFeatures);
  const [industries, setIndustries] = useState(defaultIndustries);

  useEffect(() => {
    getLiteFeatures().then(data => { if (data && data.length) setFeatures(data); });
    getLiteIndustries().then(data => { if (data && data.length) setIndustries(data); });
  }, []);
  return (
    <div style={{ paddingTop: '100px' }}>
      
      {/* 1. ERP Lite Hero Section */}
      <section className="section-pad bg-grid" style={{ paddingTop: '40px', paddingBottom: '70px', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span className="badge-pill" style={{ background: '#ECFDF5', color: '#059669', border: '1px solid #A7F3D0' }}>
                <Feather size={12} /> Aasaan ERP Lite Edition
              </span>
              <span className="badge-pill badge-orange">
                Live in 7 Days • From ₹12,000/yr
              </span>
            </div>

            <h1>
              Grow Faster with <br />
              <span style={{ color: 'var(--primary-blue)' }}>AI-Powered Aasaan ERP Lite</span>
            </h1>

            <p style={{
              fontSize: 'clamp(17px, 2.2vw, 20px)',
              color: 'var(--text-muted)',
              marginTop: '18px',
              lineHeight: 1.5
            }}>
              Optimize your team's daily sales performance, manage inventory, and generate GST invoices with a clutter-free, mobile-first cloud platform.
            </p>

            {/* Price Highlight Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: '#FFFFFF',
              border: '1.5px solid #10B981',
              borderRadius: '999px',
              padding: '6px 18px',
              marginTop: '20px',
              boxShadow: '0 4px 14px rgba(16, 185, 129, 0.15)'
            }}>
              <span style={{ fontSize: '13px', color: '#065F46', fontWeight: 600 }}>The Most Affordable ERP in India:</span>
              <span className="mono" style={{ fontSize: '15px', fontWeight: 800, color: '#047857' }}>Starts at ₹12,000 / year</span>
            </div>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginTop: '32px',
              flexWrap: 'wrap'
            }}>
              <button onClick={onOpenDemo} className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '16px' }}>
                <span>Schedule a 15-Minute Demo</span>
                <ArrowRight size={16} />
              </button>
              <a
                href="https://erplite.aasaan.in/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
                style={{ padding: '14px 28px', fontSize: '16px' }}
              >
                <span>Register at erplite.aasaan.in</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          {/* Clean Dashboard Preview Card with Workspace Image */}
          <div style={{
            background: '#FFFFFF',
            border: '1.5px solid var(--border-medium)',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px -10px rgba(15, 23, 42, 0.08)',
            maxWidth: '960px',
            margin: '0 auto'
          }}>
            {/* Visual Workspace Banner */}
            <div style={{ height: '180px', position: 'relative', overflow: 'hidden', background: '#0F172A' }}>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                alt="Aasaan ERP Lite Dashboard"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.3) 60%, transparent 100%)'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '24px',
                right: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="live-indicator" />
                  <span style={{ fontWeight: 800, fontSize: '15px', color: '#FFFFFF', letterSpacing: '0.02em' }}>
                    Aasaan ERP Lite — Clean, Distraction-Free Daily View
                  </span>
                </div>
                <span style={{
                  background: '#059669',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '6px'
                }}>
                  Zero Learning Curve
                </span>
              </div>
            </div>

            <div style={{ padding: '24px 28px 28px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <div style={{ background: 'var(--surface-subtle)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>Active Leads Today</div>
                  <div className="mono" style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary-blue)', marginTop: '4px' }}>28 Leads</div>
                  <div style={{ fontSize: '11px', color: '#059669', marginTop: '4px' }}>+6 from WhatsApp API</div>
                </div>

                <div style={{ background: 'var(--surface-subtle)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>Quotes Out (Pending)</div>
                  <div className="mono" style={{ fontSize: '24px', fontWeight: 800, color: 'var(--accent-orange)', marginTop: '4px' }}>₹6,42,000</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>8 quotes awaiting approval</div>
                </div>

                <div style={{ background: 'var(--surface-subtle)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>Today's Invoiced Revenue</div>
                  <div className="mono" style={{ fontSize: '24px', fontWeight: 800, color: '#10B981', marginTop: '4px' }}>₹1,84,500</div>
                  <div style={{ fontSize: '11px', color: '#059669', marginTop: '4px' }}>100% GSTR-1 matched</div>
                </div>

                <div style={{ background: 'var(--surface-subtle)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>Low Stock Alert</div>
                  <div className="mono" style={{ fontSize: '24px', fontWeight: 800, color: '#EF4444', marginTop: '4px' }}>2 Items</div>
                  <div style={{ fontSize: '11px', color: '#DC2626', marginTop: '4px' }}>Auto-PO requisition ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Top Features Customers Love */}
      <section id="lite-features" className="section-pad" style={{ background: '#FFFFFF', scrollMarginTop: '100px' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto 48px', textAlign: 'center' }}>
            <span className="badge-pill badge-blue" style={{ marginBottom: '12px' }}>
              Built for Fast-Moving Teams
            </span>
            <h2>Top Features that Our Customers Love</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginTop: '10px' }}>
              Everything your team needs to track leads, manage inventory, and get paid faster without wrestling with bloated software.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {features.map((feat, i) => {
              const featSlug = feat.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return (
              <div
                key={i}
                id={`lite-feat-${featSlug}`}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '16px',
                  scrollMarginTop: '120px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px -8px rgba(15, 23, 42, 0.12)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 23, 42, 0.04)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Feature Image Banner */}
                {feat.img && (
                  <div style={{ height: '150px', position: 'relative', overflow: 'hidden', background: '#0F172A' }}>
                    <img
                      src={feat.img}
                      alt={feat.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                      loading="lazy"
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(11, 19, 41, 0.65) 0%, transparent 60%)'
                    }} />
                    <span style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '14px',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      background: 'rgba(15, 23, 42, 0.8)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      padding: '3px 8px',
                      borderRadius: '6px'
                    }}>
                      {feat.tag}
                    </span>
                  </div>
                )}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1, gap: '8px' }}>
                  <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                    {feat.title}
                  </h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </section>

      {/* 3. The 6-Step Onboarding Roadmap (From Live erplite.aasaan.com) */}
      <section id="lite-roadmap" className="section-pad bg-grid" style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', scrollMarginTop: '100px' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto 48px', textAlign: 'center' }}>
            <span className="badge-pill badge-orange" style={{ marginBottom: '12px' }}>
              Rapid 7-Day Implementation
            </span>
            <h2>Registering? We’ve Got the Steps Covered</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginTop: '10px' }}>
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
                  background: '#FFFFFF',
                  border: '1.5px solid var(--border-medium)',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  position: 'relative'
                }}
              >
                <div className="mono" style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  color: 'var(--accent-orange)',
                  marginBottom: '10px'
                }}>
                  {s.step}
                </div>
                <h4 style={{ fontSize: '16.5px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                  {s.title}
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Industries Ideal for ERP Lite with Photos */}
      <section id="lite-industries" className="section-pad" style={{ background: '#FFFFFF', scrollMarginTop: '100px' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto 40px', textAlign: 'center' }}>
            <span className="badge-pill badge-blue" style={{ marginBottom: '12px' }}>
              Tailored for SME Agility
            </span>
            <h2>Industries Thriving on Aasaan ERP Lite</h2>
            <p style={{ fontSize: '17px', color: 'var(--text-muted)', marginTop: '8px' }}>
              Proven architecture across trading, distribution, field services, and light manufacturing.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '20px'
          }}>
            {industries.map((ind, i) => {
              const indSlug = ind.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return (
              <div
                key={i}
                id={`lite-ind-${indSlug}`}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '16px',
                  scrollMarginTop: '120px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px -8px rgba(15, 23, 42, 0.12)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 23, 42, 0.04)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Industry Photo Banner with Tag */}
                {ind.img && (
                  <div style={{ height: '130px', position: 'relative', overflow: 'hidden', background: '#0F172A' }}>
                    <img
                      src={ind.img}
                      alt={ind.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                      loading="lazy"
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(11, 19, 41, 0.6) 0%, transparent 60%)'
                    }} />
                    <span style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '12px',
                      fontSize: '10.5px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      background: 'rgba(15, 23, 42, 0.8)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      padding: '3px 8px',
                      borderRadius: '6px'
                    }}>
                      {ind.tag}
                    </span>
                  </div>
                )}
                <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px', lineHeight: 1.3 }}>
                      {ind.name}
                    </h4>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: 1.45, margin: 0 }}>
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </section>

      {/* 5. Bottom Registration CTA Bar (Pricing) */}
      <section id="lite-pricing" style={{
        background: 'linear-gradient(135deg, #059669 0%, #0B1329 100%)',
        color: '#FFFFFF',
        padding: '64px 0',
        scrollMarginTop: '100px',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Start Scaling Your Business with <br /><span style={{ color: '#34D399' }}>Aasaan ERP Lite</span>
          </h2>
          <p style={{ fontSize: '18px', color: '#D1FAE5', marginTop: '16px' }}>
            Get started for as low as ₹12,000/year. Zero setup friction, full cloud flexibility.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
            <button onClick={onOpenDemo} className="btn" style={{ background: '#FFFFFF', color: '#065F46', padding: '14px 28px', fontWeight: 700 }}>
              Schedule a Demo
            </button>
            <a
              href="https://erplite.aasaan.in/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
              style={{ padding: '14px 28px', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.4)', background: 'transparent' }}
            >
              <span>Register at erplite.aasaan.in</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
