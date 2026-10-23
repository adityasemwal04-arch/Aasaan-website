import React, { useState, useEffect } from 'react';
import { globalIndustries, globalModules, globalTestimonials } from '../data/globalData';
import { Globe, ArrowRight, ExternalLink, Check, Server, Cpu, ShieldCheck, Star } from 'lucide-react';
import { getRoutePath } from '../utils/navigation';

const moduleSlugMap = {
  'financial': 'financial-management',
  'stock': 'stock-control',
  'crm': 'crm',
  'purchasing': 'purchasing',
  'sales': 'sales',
  'service': 'service',
  'reporting': 'reporting',
  'manufacturing': 'manufacturing',
  'digital-ceo': 'digital-ceo',
  'ai-capabilities': 'ai-capabilities'
};

export default function ErpGlobalPage({ onOpenDemo, onNavigate }) {
  const [selectedModuleId, setSelectedModuleId] = useState('financial');
  const [industryFilter, setIndustryFilter] = useState('All');

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
    : globalIndustries.filter((ind) => {
        if (industryFilter === 'Waste & Recycling') {
          return ind.name.includes('Waste') || ind.name.includes('Recycling');
        }
        return ind.name.toLowerCase().includes(industryFilter.toLowerCase()) || ind.tag.toLowerCase().includes(industryFilter.toLowerCase());
      });

  return (
    <div className="column_alignment base_margin" style={{ marginTop: '106px' }}>

      {/* ============================================================ */}
      {/* 1. GLOBAL HERO SECTION                                       */}
      {/* ============================================================ */}
      <section style={{
        background: 'linear-gradient(180deg, #f6fbfe 0%, #ffffff 100%)',
        padding: '50px 20px 40px',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div className="main_content align_self_center" style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
          
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
              <Globe size={13} /> Aasaan Enterprises
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
              ☁️ Cloud Powered &amp; On-Premises
            </span>
          </div>

          <h1 className="page_heading" style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.2, marginBottom: '16px' }}>
            India’s Leading <b>AI-Enabled</b> Enterprise Cloud ERP
          </h1>

          <p style={{
            fontSize: '16.5px',
            color: '#5f5f5f',
            maxWidth: '740px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Engineered for growing mid-market enterprises with complex manufacturing, multi-location supply chains, and multi-currency consolidation.
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            marginTop: '28px',
            flexWrap: 'wrap'
          }}>
            <button onClick={onOpenDemo} className="accent_button" style={{ padding: '13px 28px', fontSize: '15px' }}>
              <span>Schedule Detailed Demo</span>
              <ArrowRight size={16} style={{ marginLeft: '6px' }} />
            </button>
            <a
              href="https://erpplus.aasaan.in/portal/register"
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
              <span>Try Free Demo Today</span>
              <ExternalLink size={15} />
            </a>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. TAILORED FOR 20+ COMPLEX INDUSTRIES                       */}
      {/* ============================================================ */}
      <section id="global-industries" className="column_alignment section_wrapper" style={{ background: '#ffffff', scrollMarginTop: '100px' }}>
        <div className="main_content align_self_center">
          
          <div style={{ maxWidth: '780px', margin: '0 auto 36px', textAlign: 'center' }}>
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
              Engineered for Real-World Business Physics
            </span>
            <h2 className="page_heading" style={{ margin: '0 auto 12px' }}>
              Tailored for 20+ Complex Industries
            </h2>
            <p style={{ fontSize: '16px', color: '#5f5f5f', margin: '0 auto', lineHeight: 1.5 }}>
              Aasaan ERP offers deep industry-specific configurations designed to integrate seamlessly with your statutory requirements and shop-floor flows.
            </p>

            {/* Quick Filter */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '22px', flexWrap: 'wrap' }}>
              {['All', 'Manufacturing', 'Pharma', 'Chemical', 'Construction', 'Trading', 'Warehouse', 'Waste & Recycling'].map((f) => (
                <button
                  key={f}
                  onClick={() => setIndustryFilter(f)}
                  style={{
                    background: industryFilter === f ? 'var(--colorAccent)' : '#f8fafc',
                    color: industryFilter === f ? '#ffffff' : '#334155',
                    border: '1px solid #cbd5e1',
                    borderRadius: '6px',
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
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
                  window.location.href = getRoutePath(`blog/${cardSlug}`);
                }
              };

              return (
                <div
                  key={i}
                  id={`industry-${cardSlug}`}
                  onClick={handleCardClick}
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
                    <div style={{
                      marginTop: '14px',
                      paddingTop: '10px',
                      borderTop: '1px solid #f1f5f9',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--colorAccent)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <span>Read Industry Guide &amp; BOM</span>
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
      {/* 3. COMPREHENSIVE MODULES OF AASAAN ERP                       */}
      {/* ============================================================ */}
      <section id="global-modules" className="column_alignment section_wrapper" style={{ background: '#f8f9fa', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', scrollMarginTop: '100px' }}>
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
              Full Operational Suite
            </span>
            <h2 className="page_heading" style={{ margin: '0 auto 12px' }}>
              Comprehensive Modules of Aasaan ERP
            </h2>
            <p style={{ fontSize: '16px', color: '#5f5f5f', margin: '0 auto', lineHeight: 1.5 }}>
              Every department works from the exact same live ledger without data re-entry.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 300px) minmax(0, 1fr)',
            gap: '24px',
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
                      padding: '14px 18px',
                      borderRadius: '8px',
                      border: isSelected ? '1.5px solid var(--colorAccent)' : '1px solid #cbd5e1',
                      background: isSelected ? '#f0f9ff' : '#ffffff',
                      color: isSelected ? 'var(--colorAccent)' : '#212121',
                      fontWeight: isSelected ? 700 : 500,
                      fontSize: '14.5px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <span>{mod.title}</span>
                    <span style={{
                      fontSize: '11px',
                      color: isSelected ? 'var(--colorAccent)' : '#94a3b8',
                      fontFamily: 'monospace'
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
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
              }}
            >
              {activeModule.img && (
                <div style={{ height: '220px', position: 'relative', overflow: 'hidden', background: '#0f172a' }}>
                  <img
                    src={activeModule.img}
                    alt={activeModule.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%)'
                  }} />
                  <div style={{ position: 'absolute', bottom: '16px', left: '20px', right: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <span style={{ background: 'var(--colorAccent)', color: '#ffffff', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '4px' }}>
                      {activeModule.tag}
                    </span>
                    <span style={{ fontSize: '12px', color: '#cbd5e1', background: 'rgba(15, 23, 42, 0.7)', padding: '4px 10px', borderRadius: '4px' }}>
                      Module {String(globalModules.findIndex(m => m.id === selectedModuleId) + 1).padStart(2, '0')} of {String(globalModules.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              )}

              <div style={{ padding: '28px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#212121', margin: 0 }}>
                  {activeModule.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#5f5f5f', marginTop: '10px', lineHeight: 1.6 }}>
                  {activeModule.desc}
                </p>

                <div style={{ marginTop: '24px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#212121', marginBottom: '12px' }}>
                    Enterprise Key Capabilities:
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                    {activeModule.highlights.map((h, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '13px',
                          color: '#334155',
                          background: '#f8fafc',
                          padding: '10px 12px',
                          borderRadius: '6px',
                          border: '1px solid #e2e8f0'
                        }}
                      >
                        <Check size={14} color="var(--colorAccent)" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '28px', paddingTop: '18px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <a
                    href={getRoutePath(`blog/${moduleSlugMap[activeModule.id] || activeModule.id}`)}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetSlug = moduleSlugMap[activeModule.id] || activeModule.id;
                      if (onNavigate) {
                        onNavigate(`blog/${targetSlug}`);
                      } else {
                        window.location.href = getRoutePath(`blog/${targetSlug}`);
                      }
                    }}
                    className="accent_button"
                    style={{
                      padding: '11px 24px',
                      fontSize: '14.5px',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    <span>Explore {activeModule.title} Live</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. ENTERPRISE ARCHITECTURE & SECURITY                        */}
      {/* ============================================================ */}
      <section className="column_alignment section_wrapper" style={{ background: '#ffffff' }}>
        <div className="main_content align_self_center">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
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
              Enterprise Grade SLA
            </span>
            <h2 className="page_heading" style={{ margin: '0 auto 12px' }}>
              Built on Secure Cloud &amp; On-Premises Architecture
            </h2>
            <p style={{ fontSize: '16px', color: '#5f5f5f', margin: '0 auto', lineHeight: 1.5 }}>
              Deploy on high-availability Amazon Web Services (AWS), Microsoft Azure, Google Cloud (GCP), or host entirely on your own secure on-premises private infrastructure.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '12px', background: '#f1f5f9', color: '#334155', padding: '4px 12px', borderRadius: '20px', fontWeight: 600, border: '1px solid #cbd5e1' }}>☁️ AWS Powered</span>
              <span style={{ fontSize: '12px', background: '#f1f5f9', color: '#334155', padding: '4px 12px', borderRadius: '20px', fontWeight: 600, border: '1px solid #cbd5e1' }}>☁️ Azure Powered</span>
              <span style={{ fontSize: '12px', background: '#f1f5f9', color: '#334155', padding: '4px 12px', borderRadius: '20px', fontWeight: 600, border: '1px solid #cbd5e1' }}>☁️ Google Cloud Powered</span>
              <span style={{ fontSize: '12px', background: '#f1f5f9', color: '#334155', padding: '4px 12px', borderRadius: '20px', fontWeight: 600, border: '1px solid #cbd5e1' }}>🏢 On-Premises Private</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px' }}>
              <Server size={28} color="var(--colorAccent)" />
              <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#212121', margin: '12px 0 8px' }}>Dedicated Tenant Isolation</h4>
              <p style={{ fontSize: '13.5px', color: '#5f5f5f', lineHeight: 1.5, margin: 0 }}>
                Unlike shared multi-tenant SaaS that limits customization, Aasaan provisions dedicated database instances for every enterprise customer.
              </p>
            </div>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px' }}>
              <Cpu size={28} color="var(--colorAccent)" />
              <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#212121', margin: '12px 0 8px' }}>Unlimited Custom Fields &amp; Scripting</h4>
              <p style={{ fontSize: '13.5px', color: '#5f5f5f', lineHeight: 1.5, margin: 0 }}>
                Your ERP, your rules. Add custom fields, automated calculation scripts, validation triggers, and custom print formats on the fly.
              </p>
            </div>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px' }}>
              <ShieldCheck size={28} color="var(--colorAccent)" />
              <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#212121', margin: '12px 0 8px' }}>Bank-Grade Data Encryption</h4>
              <p style={{ fontSize: '13.5px', color: '#5f5f5f', lineHeight: 1.5, margin: 0 }}>
                End-to-end AES-256 data encryption at rest and TLS 1.3 in transit with automated point-in-time disaster recovery backups.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. VERIFIED CLIENT TESTIMONIALS                              */}
      {/* ============================================================ */}
      <section className="column_alignment section_wrapper" style={{ background: '#f6fbfe' }}>
        <div className="main_content align_self_center">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
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
              Global Client Validation
            </span>
            <h2 className="page_heading" style={{ margin: '0 auto 12px' }}>
              See How Businesses Grow with Aasaan ERP
            </h2>
            <p style={{ fontSize: '16px', color: '#5f5f5f', margin: '0 auto', lineHeight: 1.5 }}>
              Real feedback from operational leaders across India, Italy, Argentina, and South Africa.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '20px'
          }}>
            {globalTestimonials.map((t, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '3px', color: '#f59e0b', marginBottom: '12px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>
                    "{t.quote}"
                  </p>
                </div>

                <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid #f1f5f9' }}>
                  <div style={{ fontWeight: 700, fontSize: '14.5px', color: '#212121' }}>
                    {t.author}
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#64748b', marginTop: '2px' }}>
                    {t.role} • <strong>{t.company}</strong> ({t.location})
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. BOTTOM REGISTRATION CTA BAR                                */}
      {/* ============================================================ */}
      <section style={{
        background: 'linear-gradient(135deg, #1e95d3 0%, #0d6ea0 60%, #212121 100%)',
        color: '#ffffff',
        padding: '54px 20px',
        textAlign: 'center'
      }}>
        <div className="main_content align_self_center" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(24px, 3.5vw, 32px)', fontWeight: 800, margin: '0 auto 12px' }}>
            Maximize Your ERP Technology ROI with <br /><span style={{ color: '#75d0f7' }}>Aasaan ERP Global</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', margin: '0 auto', maxWidth: '600px', lineHeight: 1.5 }}>
            Join 5,000+ enterprises running connected operations across sales, finance, inventory, and manufacturing.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginTop: '28px', flexWrap: 'wrap' }}>
            <button onClick={onOpenDemo} className="accent_button" style={{ padding: '13px 30px', fontSize: '15px' }}>
              Schedule Global Demo
            </button>
            <a
              href="https://erpplus.aasaan.in/portal/register"
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
              <span>Try Free Demo Today</span>
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
          href="https://wa.me/917428267616?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Aasaan%20Enterprises"
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
