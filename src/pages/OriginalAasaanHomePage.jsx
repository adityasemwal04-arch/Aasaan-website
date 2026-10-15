import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Shield, Zap, Cloud, Smartphone, Lock, RefreshCw, Layers, Award } from 'lucide-react';
import { verifiedClients } from '../data/clientsData';
import { integrationCategories } from '../data/integrationsData';
import { globalModules } from '../data/globalData';

export default function OriginalAasaanHomePage({ onOpenDemo, onNavigate }) {
  // Why Aasaan tabs: 0 = Effortless to Use, 1 = Your Business Anywhere, 2 = Proven. Powerful. Trusted.
  const [whyTab, setWhyTab] = useState(0);

  // Client tabs: 0 = Tadweeer, 1 = Resustainability, 2 = Galaxy Tools, etc.
  const [clientTab, setClientTab] = useState(0);

  // Integration tool tabs
  const [toolTab, setToolTab] = useState(0);

  const currentClient = verifiedClients[clientTab] || verifiedClients[0];
  const currentCategory = integrationCategories[toolTab] || integrationCategories[0];

  const handlePageLink = (pageId, href, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      window.location.hash = href;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ background: '#FFFFFF', paddingTop: '100px' }}>
      
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO BANNER: Clean, Trust-Focused, Matches Original Aasaan */}
      {/* ------------------------------------------------------------- */}
      <section style={{
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
        borderBottom: '1px solid #E2E8F0',
        padding: '50px 0 70px',
        position: 'relative'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto' }}>
          
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#EFF6FF',
            border: '1px solid #BFDBFE',
            color: '#1D4ED8',
            fontSize: '13px',
            fontWeight: 700,
            padding: '6px 16px',
            borderRadius: '24px',
            marginBottom: '20px'
          }}>
            <Sparkles size={14} color="#F97316" />
            <span>AI-Driven Enterprise Resource Planning (ERP)</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 54px)',
            fontWeight: 800,
            color: '#0F172A',
            lineHeight: 1.2,
            marginBottom: '20px'
          }}>
            Shaping the Future of Business, <span style={{ color: '#F97316' }}>Together</span>
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2.2vw, 19px)',
            color: '#475569',
            lineHeight: 1.6,
            maxWidth: '780px',
            margin: '0 auto 36px'
          }}>
            Aasaan ERP is a powerful, flexible enterprise software that seamlessly connects sales, inventory, finance, and shop floor operations. Powered by AWS Cloud, built for speed and effortless scalability.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}>
            <button
              onClick={onOpenDemo}
              style={{
                background: '#F97316',
                color: '#FFFFFF',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(249, 115, 22, 0.35)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#EA580C'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#F97316'}
            >
              <span>Schedule A Demo</span>
              <ArrowRight size={16} />
            </button>

            <a
              href="#/global"
              onClick={(e) => handlePageLink('global', '#/global', e)}
              style={{
                background: '#FFFFFF',
                color: '#1D4ED8',
                border: '1.5px solid #1D4ED8',
                padding: '13px 26px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#EFF6FF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
              }}
            >
              <span>Explore Products</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            flexWrap: 'wrap',
            color: '#64748B',
            fontSize: '13.5px',
            borderTop: '1px solid #E2E8F0',
            paddingTop: '28px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="#10B981" />
              <span>100% Cloud Native & On-Premises</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="#10B981" />
              <span>AWS Powered Security & Scalability</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="#10B981" />
              <span>Trusted by 100+ Mid-Market Leaders</span>
            </div>
          </div>

        </div>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* 2. SECTION: SHAPING THE FUTURE WITH AI-DRIVEN ERP             */}
      {/* ------------------------------------------------------------- */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'center'
          }}>
            
            {/* Visual Box */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              padding: '36px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
              textAlign: 'center'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: '#EFF6FF',
                color: '#1D4ED8',
                marginBottom: '20px'
              }}>
                <Zap size={32} />
              </div>

              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
                Intelligent Business Co-Pilot
              </h3>
              <p style={{ fontSize: '14.5px', color: '#64748B', lineHeight: 1.6, marginBottom: '24px' }}>
                With Aasaan ERP, AI isn’t a buzzword — it is baked into the DNA of your day-to-day operations.
              </p>

              <div style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                padding: '16px',
                textAlign: 'left',
                fontSize: '13px',
                color: '#334155',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontWeight: 700 }}>
                  <CheckCircle2 size={15} /> <span>Live Telemetry & Demand Forecasting</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontWeight: 700 }}>
                  <CheckCircle2 size={15} /> <span>Automatic Reorder Recommendations</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontWeight: 700 }}>
                  <CheckCircle2 size={15} /> <span>Self-Optimizing Inventory Routing</span>
                </div>
              </div>
            </div>

            {/* Content List */}
            <div>
              <span style={{
                color: '#1D4ED8',
                fontSize: '12.5px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                display: 'block',
                marginBottom: '10px'
              }}>
                AI & Machine Intelligence
              </span>

              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 800, color: '#0F172A', marginBottom: '16px', lineHeight: 1.25 }}>
                Shaping the Future with AI-Driven ERP
              </h2>

              <p style={{ fontSize: '15.5px', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                Aasaan ERP is more than software — it is your intelligent business co-pilot. Powered by machine intelligence, driven by your real data, and always learning.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ background: '#FFF7ED', padding: '6px', borderRadius: '8px', color: '#F97316', marginTop: '2px' }}>
                    <Zap size={16} />
                  </div>
                  <div>
                    <strong style={{ color: '#0F172A', fontSize: '15px' }}>Smart Recommendations – </strong>
                    <span style={{ color: '#475569', fontSize: '14px' }}>Get actionable insights for pricing, minimum stock levels, and follow-ups.</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ background: '#FFF7ED', padding: '6px', borderRadius: '8px', color: '#F97316', marginTop: '2px' }}>
                    <RefreshCw size={16} />
                  </div>
                  <div>
                    <strong style={{ color: '#0F172A', fontSize: '15px' }}>Predictive Automation – </strong>
                    <span style={{ color: '#475569', fontSize: '14px' }}>Forecast customer demand, auto-suggest purchase orders, and detect anomalies early.</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ background: '#FFF7ED', padding: '6px', borderRadius: '8px', color: '#F97316', marginTop: '2px' }}>
                    <Shield size={16} />
                  </div>
                  <div>
                    <strong style={{ color: '#0F172A', fontSize: '15px' }}>Real-Time Decision Support – </strong>
                    <span style={{ color: '#475569', fontSize: '14px' }}>Make faster, data-backed decisions across finance, supply chain, and sales registers.</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* 3. SECTION: WHY AASAAN ERP (3 Tabbed Features with Details)    */}
      {/* ------------------------------------------------------------- */}
      <section style={{ padding: '80px 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 800, color: '#0F172A' }}>
              Why <b>AASAAN</b> Enterprise Resource Planning?
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', marginTop: '10px' }}>
              Built for people who want results, without babysitting complex software.
            </p>
          </div>

          {/* Tabs bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}>
            {[
              { id: 0, label: 'Effortless to Use' },
              { id: 1, label: 'Your Business, Anywhere' },
              { id: 2, label: 'Proven. Powerful. Trusted.' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setWhyTab(tab.id)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '14.5px',
                  cursor: 'pointer',
                  border: 'none',
                  background: whyTab === tab.id ? '#1D4ED8' : '#FFFFFF',
                  color: whyTab === tab.id ? '#FFFFFF' : '#475569',
                  boxShadow: whyTab === tab.id ? '0 4px 14px rgba(29, 78, 216, 0.25)' : '0 1px 3px rgba(0,0,0,0.06)',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Box */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #CBD5E1',
            padding: '40px',
            maxWidth: '1000px',
            margin: '0 auto',
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
          }}>
            {whyTab === 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '36px', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
                    Zero learning curve – Start using it like a pro from Day 1
                  </h3>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                    Aasaan ERP is designed for business operators who get things done. Everything is exactly where you expect it.
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14.5px', color: '#334155' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={16} color="#1D4ED8" /> <strong>Intuitive interface:</strong> Clean screens designed for fast navigation
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={16} color="#1D4ED8" /> <strong>Smart workflows:</strong> Automate repetitive billing and inventory entries
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={16} color="#1D4ED8" /> <strong>Easily customizable:</strong> Tailor screens and fields without tech support
                    </li>
                  </ul>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
                  borderRadius: '12px',
                  padding: '32px',
                  textAlign: 'center',
                  border: '1px solid #BFDBFE'
                }}>
                  <div style={{ fontSize: '48px', fontWeight: 800, color: '#1D4ED8' }}>&lt; 3 Days</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginTop: '6px' }}>Onboarding & Team Adoption</div>
                  <div style={{ fontSize: '13px', color: '#64748B', marginTop: '4px' }}>Pre-configured masters & intuitive entry screens</div>
                </div>
              </div>
            )}

            {whyTab === 1 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '36px', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
                    Whether you are in the office or on-site — your ERP moves with you
                  </h3>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                    Access full operational data from laptop, tablet, or smartphone without installing bulky software or VPNs.
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14.5px', color: '#334155' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Cloud size={16} color="#1D4ED8" /> <strong>100% Cloud-native:</strong> Zero server maintenance headaches
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Smartphone size={16} color="#1D4ED8" /> <strong>Mobile-first:</strong> Works seamlessly across mobile browsers
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Lock size={16} color="#1D4ED8" /> <strong>Secure & scalable:</strong> Enterprise-grade security powered by AWS
                    </li>
                  </ul>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
                  borderRadius: '12px',
                  padding: '32px',
                  textAlign: 'center',
                  border: '1px solid #BFDBFE'
                }}>
                  <div style={{ fontSize: '48px', fontWeight: 800, color: '#1D4ED8' }}>99.9%</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginTop: '6px' }}>Cloud Uptime Guaranteed</div>
                  <div style={{ fontSize: '13px', color: '#64748B', marginTop: '4px' }}>Real-time multi-location synchronization</div>
                </div>
              </div>
            )}

            {whyTab === 2 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '36px', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
                    The reliable operational backbone for 100+ businesses
                  </h3>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                    Proven track record across manufacturing, waste recycling, retail distribution, and services.
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14.5px', color: '#334155' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Award size={16} color="#1D4ED8" /> <strong>Built to grow:</strong> Easily handle 10 or 10,000 transactions daily
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Layers size={16} color="#1D4ED8" /> <strong>Flexible architecture:</strong> Add new modules without breaking your workflow
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Shield size={16} color="#1D4ED8" /> <strong>Dedicated support:</strong> Direct assistance from real ERP specialists
                    </li>
                  </ul>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, #FFF7ED 0%, #FED7AA 100%)',
                  borderRadius: '12px',
                  padding: '32px',
                  textAlign: 'center',
                  border: '1px solid #FDBA74'
                }}>
                  <div style={{ fontSize: '48px', fontWeight: 800, color: '#F97316' }}>10+ Yrs</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginTop: '6px' }}>Enterprise ERP Excellence</div>
                  <div style={{ fontSize: '13px', color: '#64748B', marginTop: '4px' }}>Proven, tested, and constantly improving</div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* 4. SECTION: MODULES OF AASAAN ERP                             */}
      {/* ------------------------------------------------------------- */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 800, color: '#0F172A' }}>
              MODULES OF <b>AASAAN ERP</b>
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', marginTop: '10px' }}>
              Comprehensive operational suite designed to cover every touchpoint of your business.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {globalModules.slice(0, 9).map((mod) => (
              <div
                key={mod.id}
                style={{
                  background: '#F8FAFC',
                  borderRadius: '14px',
                  border: '1px solid #E2E8F0',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                }}
              >
                <div>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#1D4ED8',
                    background: '#EFF6FF',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    display: 'inline-block',
                    marginBottom: '12px'
                  }}>
                    {mod.tag}
                  </span>
                  <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                    {mod.title}
                  </h4>
                  <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: 1.5 }}>
                    {mod.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* 5. SECTION: OUR VERIFIED CLIENTS (Tadweeer, Resustainability) */}
      {/* ------------------------------------------------------------- */}
      <section style={{ padding: '80px 0', background: 'rgba(211, 234, 245, 0.25)', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 800, color: '#0F172A' }}>
              OUR CLIENTS
            </h2>
            <p style={{ fontSize: '16px', color: '#475569', marginTop: '8px', lineHeight: 1.5 }}>
              The reason Aasaan has been trusted by growing businesses across India and the Middle East — we put our customers first.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {/* Client selector tabs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {verifiedClients.map((c, idx) => (
                <div
                  key={c.id}
                  onClick={() => setClientTab(idx)}
                  style={{
                    background: clientTab === idx ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                    border: clientTab === idx ? '2px solid #1D4ED8' : '1px solid #CBD5E1',
                    borderRadius: '12px',
                    padding: '16px 20px',
                    cursor: 'pointer',
                    boxShadow: clientTab === idx ? '0 4px 12px rgba(29, 78, 216, 0.12)' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: '16px', color: '#0F172A' }}>{c.name}</div>
                  <div style={{ fontSize: '13px', color: '#64748B', marginTop: '4px' }}>{c.category}</div>
                </div>
              ))}
            </div>

            {/* Client active showcase details */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #CBD5E1',
              padding: '36px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#F97316', textTransform: 'uppercase' }}>
                  Client Case Study
                </span>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', marginTop: '6px' }}>
                  {currentClient.name}
                </h3>
                <p style={{ fontSize: '14px', color: '#1D4ED8', fontWeight: 600, marginTop: '2px' }}>
                  {currentClient.scope}
                </p>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, marginTop: '16px' }}>
                  {currentClient.highlight}
                </p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '16px',
                  marginTop: '24px',
                  paddingTop: '20px',
                  borderTop: '1px solid #F1F5F9'
                }}>
                  {currentClient.metrics.map((m, i) => (
                    <div key={i}>
                      <div style={{ fontSize: '20px', fontWeight: 800, color: '#1D4ED8' }}>{m.value}</div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '28px' }}>
                <button
                  onClick={onOpenDemo}
                  style={{
                    background: '#1D4ED8',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>Request Custom Demo</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* 6. SECTION: INTEGRATION TOOLS TABS                           */}
      {/* ------------------------------------------------------------- */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 800, color: '#0F172A' }}>
              Seamless Integration with Your Existing Tools
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', marginTop: '10px' }}>
              Connect effortlessly with Tally, Razorpay, WhatsApp, barcode readers, and banking systems.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px'
          }}>
            {/* Category tabs list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {integrationCategories.map((cat, idx) => (
                <button
                  key={cat.id}
                  onClick={() => setToolTab(idx)}
                  style={{
                    textAlign: 'left',
                    padding: '12px 18px',
                    borderRadius: '8px',
                    border: 'none',
                    background: toolTab === idx ? '#EFF6FF' : 'transparent',
                    color: toolTab === idx ? '#1D4ED8' : '#475569',
                    fontWeight: toolTab === idx ? 700 : 500,
                    fontSize: '14px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span>{cat.name}</span>
                  {toolTab === idx && <ArrowRight size={14} color="#1D4ED8" />}
                </button>
              ))}
            </div>

            {/* Active category tools grid */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              padding: '36px'
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                {currentCategory.name}
              </h3>
              <p style={{ fontSize: '14.5px', color: '#64748B', marginBottom: '24px' }}>
                {currentCategory.description}
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: '12px'
              }}>
                {currentCategory.toolNames.map((tool, i) => (
                  <div
                    key={i}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #CBD5E1',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      color: '#1E293B',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <CheckCircle2 size={14} color="#10B981" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* 7. FINAL CALL TO ACTION (CTA)                                 */}
      {/* ------------------------------------------------------------- */}
      <section style={{
        background: '#0B1329',
        color: '#FFFFFF',
        padding: '70px 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>
            Ready to Run Your Business Smarter?
          </h2>
          <p style={{ fontSize: '16px', color: '#94A3B8', lineHeight: 1.6, marginBottom: '32px' }}>
            Experience the ease, clarity, and control of Aasaan ERP with a tailored 1-on-1 walkthrough for your team.
          </p>
          <button
            onClick={onOpenDemo}
            style={{
              background: '#F97316',
              color: '#FFFFFF',
              border: 'none',
              padding: '14px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 16px rgba(249, 115, 22, 0.4)'
            }}
          >
            <span>Schedule A Demo Today</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

    </div>
  );
}
