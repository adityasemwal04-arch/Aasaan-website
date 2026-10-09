import React, { useState, useEffect } from 'react';
import { globalIndustries, globalModules, globalTestimonials } from '../data/globalData';
import { Globe, ShieldCheck, ArrowRight, ExternalLink, Check, Server, Layers, Cpu, Building2, Sparkles, Star } from 'lucide-react';

export default function ErpGlobalPage({ onOpenDemo, onNavigate }) {
  const [selectedModuleId, setSelectedModuleId] = useState('financial');
  const [industryFilter, setIndustryFilter] = useState('All');

  // Listen for target module selection triggered from search
  useEffect(() => {
    const handleSelectModule = (e) => {
      if (e.detail && e.detail.moduleId) {
        setSelectedModuleId(e.detail.moduleId);
      }
    };
    window.addEventListener('aasaan-select-global-module', handleSelectModule);
    return () => window.removeEventListener('aasaan-select-global-module', handleSelectModule);
  }, []);

  const activeModule = globalModules.find((m) => m.id === selectedModuleId) || globalModules[0];

  const filteredIndustries = industryFilter === 'All'
    ? globalIndustries
    : globalIndustries.filter((ind) => ind.name.toLowerCase().includes(industryFilter.toLowerCase()) || ind.tag.toLowerCase().includes(industryFilter.toLowerCase()));

  return (
    <div style={{ paddingTop: '100px' }}>
      
      {/* 1. Global Hero Section */}
      <section className="section-pad bg-grid" style={{ paddingTop: '40px', paddingBottom: '70px', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span className="badge-pill badge-blue">
                <Globe size={12} /> Aasaan ERP Global Edition
              </span>
              <span className="badge-pill badge-orange">
                AWS Powered & On-Premises
              </span>
            </div>

            <h1>
              India’s Leading <span style={{ color: 'var(--primary-blue)' }}>AI-Enabled</span> Enterprise Cloud ERP.
            </h1>

            <p style={{
              fontSize: 'clamp(17px, 2.2vw, 20px)',
              color: 'var(--text-muted)',
              marginTop: '20px',
              lineHeight: 1.5
            }}>
              Engineered for growing mid-market enterprises with complex manufacturing, multi-location supply chains, and multi-currency consolidation.
            </p>

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
                <span>Schedule Global Architecture Demo</span>
                <ArrowRight size={16} />
              </button>
              <a
                href="https://erp.aasaan.in/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
                style={{ padding: '14px 28px', fontSize: '16px' }}
              >
                <span>Register at erp.aasaan.in</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          {/* Interactive Multi-Entity Console Visual */}
          <div style={{
            background: '#0B1329',
            color: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 25px 60px -15px rgba(11, 19, 41, 0.4)',
            overflow: 'hidden',
            maxWidth: '1060px',
            margin: '0 auto'
          }}>
            <div style={{
              background: '#131F3F',
              padding: '16px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="live-indicator" />
                <span style={{ fontSize: '13.5px', fontWeight: 700, letterSpacing: '0.04em' }}>
                  AASAAN GLOBAL MULTI-ENTITY SPHERICAL LEDGER
                </span>
              </div>
              <span className="mono" style={{ fontSize: '12px', color: '#93C5FD' }}>
                Global Sync: 3 Subsidiaries Active
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              padding: '28px'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#60A5FA', fontSize: '12.5px', fontWeight: 600 }}>
                  <Building2 size={16} /> HQ — New Delhi (INR)
                </div>
                <div style={{ fontSize: '20px', fontWeight: 800, marginTop: '8px' }}>₹48,29,400</div>
                <div style={{ fontSize: '12.5px', color: '#94A3B8', marginTop: '4px' }}>Consolidated Daily Collections</div>
                <div className="mono" style={{ fontSize: '11px', color: '#34D399', marginTop: '12px' }}>
                  ● GSTR-1 & E-Way Portal Connected
                </div>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F97316', fontSize: '12.5px', fontWeight: 600 }}>
                  <Layers size={16} /> Plant — Bhiwandi (Hub)
                </div>
                <div style={{ fontSize: '20px', fontWeight: 800, marginTop: '8px' }}>94.2% Capacity</div>
                <div style={{ fontSize: '12.5px', color: '#94A3B8', marginTop: '4px' }}>Active Assembly Lines & BOM</div>
                <div className="mono" style={{ fontSize: '11px', color: '#FB923C', marginTop: '12px' }}>
                  ● Work Order #WO-204 in process
                </div>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34D399', fontSize: '12.5px', fontWeight: 600 }}>
                  <Globe size={16} /> Dubai Polymers LLC (USD)
                </div>
                <div style={{ fontSize: '20px', fontWeight: 800, marginTop: '8px' }}>$1,42,850 USD</div>
                <div style={{ fontSize: '12.5px', color: '#94A3B8', marginTop: '4px' }}>Cross-Border Sales Orders</div>
                <div className="mono" style={{ fontSize: '11px', color: '#38BDF8', marginTop: '12px' }}>
                  ● Auto-Forex Hedging Live
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Full 20+ Industries Matrix */}
      <section id="global-industries" className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto 40px', textAlign: 'center' }}>
            <span className="badge-pill badge-orange" style={{ marginBottom: '12px' }}>
              Engineered for Real-World Business Physics
            </span>
            <h2>Tailored for 20+ Complex Industries</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginTop: '10px' }}>
              Aasaan ERP offers deep industry-specific configurations designed to integrate seamlessly with your company's processes and statutory requirements.
            </p>

            {/* Quick Filter */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '24px', flexWrap: 'wrap' }}>
              {['All', 'Manufacturing', 'Pharma', 'Chemical', 'Construction', 'Trading', 'Warehouse', 'Recycling'].map((f) => (
                <button
                  key={f}
                  onClick={() => setIndustryFilter(f)}
                  style={{
                    background: industryFilter === f ? 'var(--primary-blue)' : 'var(--surface-subtle)',
                    color: industryFilter === f ? '#FFFFFF' : 'var(--text-body)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '8px',
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '20px'
          }}>
            {filteredIndustries.map((ind, i) => {
              const slugMap = {
                'Manufacturing & Engineering': 'manufacturing-engineering',
                'Dairy Industry': 'dairy-industry',
                'Car Rental & Fleet Industry': 'car-rental-fleet',
                'Chemical & Process Industry': 'chemical-process',
                'Construction & EPC Building': 'construction-epc',
                'Gems & Jewelry Manufacturing': 'gems-jewelry',
                'Food & Beverage Processing': 'food-beverage',
                'High-Tech & Electronics': 'high-tech-electronics',
                'Malls & Commercial Facilities': 'malls-commercial',
                'Packaging & Corrugation': 'packaging-corrugation',
                'Smart Factory & Production': 'smart-factory-production',
                'Pharma & Life Sciences': 'pharma-life-sciences',
                'Publication & Media Print': 'publication-media-print',
                'Omnichannel Retail Chains': 'omnichannel-retail-chains',
                'Trading & Regional Distribution': 'trading-regional-distribution',
                'Education & Academic Institutes': 'education-academic-institutes',
                'Sports & Arena Management': 'sports-arena-management',
                'Oil, Gas & Energy Fields': 'oil-gas-energy',
                'Warehouse & 3PL Logistics': 'warehouse-3pl-logistics',
                'Waste Management & Recycling': 'waste-management-recycling'
              };
              const cardSlug = slugMap[ind.name] || ind.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

              const handleCardClick = () => {
                if (onNavigate) {
                  onNavigate(`blog/${cardSlug}`);
                } else {
                  window.location.hash = `#/blog/${cardSlug}`;
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
              };

              return (
              <div
                key={i}
                id={`industry-${cardSlug}`}
                onClick={handleCardClick}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '16px',
                  scrollMarginTop: '120px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 18px 36px -8px rgba(15, 23, 42, 0.14)';
                  e.currentTarget.style.borderColor = 'var(--primary-blue)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 23, 42, 0.04)';
                  e.currentTarget.style.borderColor = 'var(--border-medium)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Industry Image Banner with Frosted Badge */}
                {ind.img && (
                  <div style={{ height: '140px', position: 'relative', overflow: 'hidden', background: '#0F172A' }}>
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
                      borderRadius: '6px',
                      letterSpacing: '0.02em'
                    }}>
                      {ind.tag}
                    </span>
                  </div>
                )}
                <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px', lineHeight: 1.3 }}>
                      {ind.name}
                    </h4>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                      {ind.desc}
                    </p>
                  </div>
                  <div style={{
                    marginTop: '14px',
                    paddingTop: '10px',
                    borderTop: '1px solid #F1F5F9',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--primary-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    Read Industry Guide & BOM <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </section>

      {/* 3. Deep Modules Architecture */}
      <section id="global-modules" className="section-pad bg-grid" style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', scrollMarginTop: '100px' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto 48px', textAlign: 'center' }}>
            <span className="badge-pill badge-blue" style={{ marginBottom: '12px' }}>
              Full Operational Suite
            </span>
            <h2>Comprehensive Modules of Aasaan ERP</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginTop: '10px' }}>
              Every department works from the exact same live ledger without data re-entry.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 320px) minmax(0, 1fr)',
            gap: '32px',
            alignItems: 'start'
          }} className="global-module-grid">
            
            {/* Module Selector List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {globalModules.map((mod) => {
                const isSelected = mod.id === selectedModuleId;
                return (
                  <button
                    key={mod.id}
                    onClick={() => setSelectedModuleId(mod.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px 20px',
                      borderRadius: '12px',
                      border: isSelected ? '1.5px solid var(--primary-blue)' : '1px solid var(--border-medium)',
                      background: isSelected ? '#EFF6FF' : '#FFFFFF',
                      color: isSelected ? 'var(--primary-blue)' : 'var(--text-main)',
                      fontWeight: isSelected ? 700 : 600,
                      fontSize: '15px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <span>{mod.title}</span>
                    <span style={{
                      fontSize: '11px',
                      color: isSelected ? 'var(--primary-blue)' : 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)'
                    }}>
                      0{globalModules.indexOf(mod) + 1}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Module Detail */}
            <div
              id="global-active-module"
              style={{
                background: '#FFFFFF',
                border: '1.5px solid var(--border-medium)',
                borderRadius: '20px',
                overflow: 'hidden',
                scrollMarginTop: '120px',
              boxShadow: '0 8px 30px -10px rgba(15, 23, 42, 0.08)'
            }}>
              {/* High-Resolution Module Image Banner */}
              {activeModule.img && (
                <div style={{ height: '220px', position: 'relative', overflow: 'hidden', background: '#0B1329' }}>
                  <img
                    src={activeModule.img}
                    alt={activeModule.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(11, 19, 41, 0.85) 0%, rgba(11, 19, 41, 0.2) 60%, transparent 100%)'
                  }} />
                  <div style={{ position: 'absolute', bottom: '16px', left: '24px', right: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <span className="badge-pill badge-orange" style={{ margin: 0, background: '#EA580C', color: '#FFFFFF', border: 'none' }}>
                      {activeModule.tag}
                    </span>
                    <span style={{ fontSize: '12px', color: '#CBD5E1', background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(6px)', padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                      Module 0{globalModules.findIndex(m => m.id === selectedModuleId) + 1} of 0{globalModules.length}
                    </span>
                  </div>
                </div>
              )}
              <div style={{ padding: 'clamp(24px, 4vw, 36px)' }}>
                <h3 style={{ fontSize: '26px', fontWeight: 800, marginTop: '4px' }}>
                  {activeModule.title}
                </h3>
                <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginTop: '12px', lineHeight: 1.6 }}>
                  {activeModule.desc}
                </p>

                <div style={{ marginTop: '28px' }}>
                  <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '14px' }}>
                    Enterprise Key Capabilities:
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                    {activeModule.highlights.map((h, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '13.5px',
                          color: 'var(--text-body)',
                          background: 'var(--surface-subtle)',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: '1px solid var(--border-subtle)'
                        }}
                      >
                        <Check size={14} color="var(--primary-blue)" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '32px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'flex-end' }}>
                  <button onClick={onOpenDemo} className="btn btn-primary btn-sm">
                    <span>Explore {activeModule.title} Live</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>{/* end inner padding div */}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Enterprise Architecture & Security */}
      <section className="section-pad bg-dark-enterprise" style={{ color: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
            <span className="badge-pill" style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#93C5FD', border: '1px solid rgba(59, 130, 246, 0.4)' }}>
              Enterprise Grade SLA
            </span>
            <h2 style={{ color: '#FFFFFF', marginTop: '12px' }}>Built on Secure Cloud & On-Premises Architecture</h2>
            <p style={{ fontSize: '17.5px', color: '#94A3B8', marginTop: '10px' }}>
              Deploy on high-availability Amazon Web Services (AWS) or host entirely on your own secure on-premises private infrastructure.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '28px' }}>
              <Server size={28} color="#60A5FA" />
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', margin: '14px 0 8px' }}>Dedicated Tenant Isolation</h4>
              <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.5 }}>
                Unlike shared multi-tenant SaaS that limits customization, Aasaan provisions dedicated database instances for every enterprise customer.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '28px' }}>
              <Cpu size={28} color="#F97316" />
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', margin: '14px 0 8px' }}>Unlimited Custom Fields & Scripting</h4>
              <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.5 }}>
                Your ERP, your rules. Add custom fields, automated calculation scripts, validation triggers, and custom print formats on the fly.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '28px' }}>
              <ShieldCheck size={28} color="#34D399" />
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', margin: '14px 0 8px' }}>Bank-Grade Data Encryption</h4>
              <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.5 }}>
                End-to-end AES-256 data encryption at rest and TLS 1.3 in transit with automated point-in-time disaster recovery backups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Verified Client Testimonials from Live Global Page */}
      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
            <span className="badge-pill badge-blue" style={{ marginBottom: '12px' }}>
              Global Client Validation
            </span>
            <h2>See How Businesses Grow with Aasaan ERP</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginTop: '10px' }}>
              Real feedback from operational leaders across India, Italy, Argentina, and South Africa.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {globalTestimonials.map((t, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--surface-subtle)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '16px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '4px', color: 'var(--accent-orange)', marginBottom: '14px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-body)', lineHeight: 1.6, fontStyle: 'italic' }}>
                    "{t.quote}"
                  </p>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-main)' }}>
                    {t.author}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    {t.role} • <strong>{t.company}</strong> ({t.location})
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bottom Registration CTA Bar */}
      <section style={{
        background: 'linear-gradient(135deg, #1D4ED8 0%, #0B1329 100%)',
        color: '#FFFFFF',
        padding: '64px 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Maximize Your ERP Technology ROI with <br /><span style={{ color: '#FB923C' }}>Aasaan ERP Global</span>
          </h2>
          <p style={{ fontSize: '18px', color: '#BFDBFE', marginTop: '16px' }}>
            Join 100+ enterprises running connected operations across sales, finance, inventory, and manufacturing.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
            <button onClick={onOpenDemo} className="btn btn-orange" style={{ padding: '14px 28px' }}>
              Schedule Global Demo
            </button>
            <a
              href="https://erp.aasaan.in/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
              style={{ padding: '14px 28px' }}
            >
              <span>Register Now at erp.aasaan.in</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .global-module-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
