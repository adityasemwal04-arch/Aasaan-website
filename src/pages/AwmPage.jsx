import React, { useState, useEffect } from 'react';
import { awmSectors, awmModules as defaultModules, awmClients as defaultClients, awmWeighbridgeSimulation } from '../data/awmData';
import { getAwmModules, getAwmClients } from '../services/dataService';
import { Recycle, Scale, ArrowRight, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';

export default function AwmPage({ onOpenDemo, onNavigate }) {
  const [selectedSectorId, setSelectedSectorId] = useState('municipal');
  const [modules, setModules] = useState(defaultModules);
  const [clients, setClients] = useState(defaultClients);

  useEffect(() => {
    getAwmModules().then(data => { if (data && data.length) setModules(data); });
    getAwmClients().then(data => { if (data && data.length) setClients(data); });
  }, []);

  const handleCardClick = (slug) => {
    if (onNavigate) {
      onNavigate(`blog/${slug}`);
    } else {
      window.location.hash = `#/blog/${slug}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleSelectSector = (e) => {
      if (e.detail && e.detail.sectorId) {
        setSelectedSectorId(e.detail.sectorId);
      }
    };
    window.addEventListener('aasaan-select-awm-sector', handleSelectSector);
    return () => window.removeEventListener('aasaan-select-awm-sector', handleSelectSector);
  }, []);

  const activeSector = awmSectors.find((s) => s.id === selectedSectorId) || awmSectors[0];

  return (
    <div className="column_alignment base_margin" style={{ marginTop: '106px' }}>
      
      {/* ============================================================ */}
      {/* 1. AWM HERO SECTION                                          */}
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
              <Recycle size={13} /> Aasaan Waste Management (AWM)
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
              ⚖️ IoT • RFID • Weighbridge Automated
            </span>
          </div>

          <h1 className="page_heading" style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.2, marginBottom: '16px' }}>
            The Operating System for Modern <br />
            <b>Waste &amp; Recycling Enterprises</b>
          </h1>

          <p style={{
            fontSize: '16.5px',
            color: '#5f5f5f',
            maxWidth: '740px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Unifying municipal collections, commercial dumpster rentals, weighbridge scale indicators, material recovery facilities (MRF), and pollution board compliance on a single cloud platform.
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
              <span>Book an AWM Live Demo</span>
              <ArrowRight size={16} style={{ marginLeft: '6px' }} />
            </button>
            <a
              href="mailto:contactus@aasaanservices.in?subject=AWM%20Inquiry"
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
              <Mail size={15} />
              <span>Contact Waste Tech Specialists</span>
            </a>
          </div>

          {/* Interactive Weighbridge Hardware Simulation Card */}
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
                <Scale size={18} color="#75d0f7" />
                <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.04em' }}>
                  AWM WEIGHBRIDGE HARDWARE BRIDGE (INDICATOR RS232 / TCP-IP)
                </span>
              </div>
              <span style={{ fontSize: '11.5px', color: '#10b981', background: 'rgba(16, 185, 129, 0.15)', padding: '3px 10px', borderRadius: '4px', fontWeight: 600 }}>
                ● Scale Connected
              </span>
            </div>

            <div style={{ padding: '24px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
                marginBottom: '18px'
              }}>
                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0', textAlign: 'left' }}>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>Ticket No. &amp; Date</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#212121', marginTop: '4px' }}>
                    {awmWeighbridgeSimulation.ticketNo}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--colorAccent)', marginTop: '2px' }}>{awmWeighbridgeSimulation.date}</div>
                </div>

                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0', textAlign: 'left' }}>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>Vehicle &amp; Transporter</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#212121', marginTop: '4px' }}>
                    {awmWeighbridgeSimulation.vehicleNo}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#475569', marginTop: '2px' }}>{awmWeighbridgeSimulation.transporter}</div>
                </div>

                <div style={{ background: '#f0f9ff', padding: '16px', borderRadius: '10px', border: '1.5px solid var(--colorAccent)', textAlign: 'left' }}>
                  <div style={{ fontSize: '12px', color: 'var(--colorAccent)', fontWeight: 600 }}>Net Material Weight</div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--colorAccent)', marginTop: '4px' }}>
                    {awmWeighbridgeSimulation.netWeight}
                  </div>
                  <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Gross: 24,850 kg | Tare: 10,050 kg</div>
                </div>
              </div>

              <div style={{
                background: '#f8fafc',
                borderRadius: '8px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                fontSize: '13px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#334155' }}>
                  <ShieldCheck size={16} color="var(--colorAccent)" />
                  <span>Manifest Form 6: <strong style={{ color: '#212121' }}>{awmWeighbridgeSimulation.manifestId}</strong> (CPCB Compliant)</span>
                </div>
                <span style={{ color: 'var(--colorAccent)', fontSize: '12px', fontWeight: 600 }}>
                  Destination: {awmWeighbridgeSimulation.disposalSite}
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. SPECIALIZED SOLUTIONS ACROSS THE WASTE LIFE CYCLE         */}
      {/* ============================================================ */}
      <section id="awm-sectors" className="column_alignment section_wrapper" style={{ background: '#ffffff', scrollMarginTop: '100px' }}>
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
              Purpose-Built Architecture
            </span>
            <h2 className="page_heading" style={{ margin: '0 auto 12px' }}>
              Specialized Solutions Across the Waste Life Cycle
            </h2>
            <p style={{ fontSize: '16px', color: '#5f5f5f', margin: '0 auto', lineHeight: 1.5 }}>
              Whether operating municipal collection routes or industrial hazardous disposal, AWM configures to your exact operational stream.
            </p>

            {/* Sector Selector Tabs */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '22px', flexWrap: 'wrap' }}>
              {awmSectors.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSectorId(s.id)}
                  style={{
                    background: selectedSectorId === s.id ? 'var(--colorAccent)' : '#f8fafc',
                    color: selectedSectorId === s.id ? '#ffffff' : '#334155',
                    border: '1px solid #cbd5e1',
                    borderRadius: '6px',
                    padding: '8px 16px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Sector Detail Card */}
          <div
            id="awm-active-sector"
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              overflow: 'hidden',
              maxWidth: '920px',
              margin: '0 auto',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
            }}
          >
            {activeSector.img && (
              <div style={{ height: '220px', position: 'relative', overflow: 'hidden', background: '#0f172a' }}>
                <img
                  src={activeSector.img}
                  alt={activeSector.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%)'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '20px',
                  right: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  <span style={{ background: 'var(--colorAccent)', color: '#ffffff', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '4px' }}>
                    {activeSector.tag}
                  </span>
                  <span style={{ fontSize: '12px', color: '#cbd5e1', background: 'rgba(15, 23, 42, 0.7)', padding: '4px 10px', borderRadius: '4px' }}>
                    Sector 0{awmSectors.findIndex(s => s.id === selectedSectorId) + 1} of 0{awmSectors.length}
                  </span>
                </div>
              </div>
            )}

            <div style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#212121', margin: 0 }}>
                {activeSector.title}
              </h3>
              <p style={{ fontSize: '15px', color: '#5f5f5f', marginTop: '10px', lineHeight: 1.6 }}>
                {activeSector.desc}
              </p>

              <div style={{ marginTop: '24px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#212121', marginBottom: '12px' }}>
                  Key Operational Capabilities:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                  {activeSector.points.map((p, idx) => (
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
                      <CheckCircle2 size={16} color="var(--colorAccent)" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CORE MODULES BUILT INTO AWM                                */}
      {/* ============================================================ */}
      <section id="awm-modules" className="column_alignment section_wrapper" style={{ background: '#f8f9fa', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', scrollMarginTop: '100px' }}>
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
              End-to-End Automation
            </span>
            <h2 className="page_heading" style={{ margin: '0 auto 12px' }}>
              Core Modules Built into AWM
            </h2>
            <p style={{ fontSize: '16px', color: '#5f5f5f', margin: '0 auto', lineHeight: 1.5 }}>
              From gate weigh-in to sorting, baling, customer invoicing, and pollution regulatory compliance.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '24px'
          }}>
            {modules.map((m, i) => {
              const modSlug = m.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return (
                <div
                  key={i}
                  id={`awm-mod-${modSlug}`}
                  onClick={() => handleCardClick(modSlug)}
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
                  {m.img && (
                    <div style={{ height: '160px', position: 'relative', overflow: 'hidden', background: '#0f172a' }}>
                      <img
                        src={m.img}
                        alt={m.title}
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
                        left: '14px',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#ffffff',
                        background: 'rgba(15, 23, 42, 0.85)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        padding: '3px 8px',
                        borderRadius: '4px'
                      }}>
                        {m.tag}
                      </span>
                    </div>
                  )}
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1, gap: '8px' }}>
                    <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#212121', margin: 0 }}>
                      {m.title}
                    </h4>
                    <p style={{ fontSize: '13.5px', color: '#5f5f5f', lineHeight: 1.5, margin: 0, flex: 1 }}>
                      {m.desc}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--colorAccent)', fontSize: '13px', fontWeight: 700, marginTop: '10px' }}>
                      <span>Explore Module Deep-Dive</span>
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
      {/* 4. CLIENT VALIDATION (Tadweeer & Resustainability)          */}
      {/* ============================================================ */}
      <section id="awm-clients" className="column_alignment section_wrapper" style={{ background: '#ffffff', scrollMarginTop: '100px' }}>
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
              Proven on Real Ground
            </span>
            <h2 className="page_heading" style={{ margin: '0 auto 12px' }}>
              Trusted by Leaders in Waste &amp; Circular Economy
            </h2>
            <p style={{ fontSize: '16px', color: '#5f5f5f', margin: '0 auto', lineHeight: 1.5 }}>
              Managing thousands of tons of daily material intake across industrial and municipal yards.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '24px', maxWidth: '880px', margin: '0 auto' }}>
            {clients.map((c, i) => {
              const clientSlug = (c.name || `client-${i}`).toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return (
                <div
                  key={c.id || i}
                  id={`client-${clientSlug}`}
                  onClick={() => handleCardClick(clientSlug)}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
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
                  {c.img && (
                    <div style={{ height: '160px', position: 'relative', overflow: 'hidden', background: '#0f172a' }}>
                      <img
                        src={c.img}
                        alt={c.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        loading="lazy"
                      />
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 60%)'
                      }} />
                      {c.type && (
                        <span style={{
                          position: 'absolute',
                          bottom: '10px',
                          left: '14px',
                          fontSize: '11px',
                          fontWeight: 700,
                          color: '#ffffff',
                          background: 'var(--colorAccent)',
                          padding: '3px 8px',
                          borderRadius: '4px'
                        }}>
                          {c.type}
                        </span>
                      )}
                    </div>
                  )}
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#212121', margin: 0 }}>{c.name}</h3>
                    <p style={{ fontSize: '13.5px', color: '#5f5f5f', marginTop: '10px', lineHeight: 1.5 }}>
                      {c.desc}
                    </p>
                    {c.metric && (
                      <div style={{ fontSize: '12px', color: 'var(--colorAccent)', fontWeight: 700, marginTop: '14px' }}>
                        ✓ {c.metric}
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--colorAccent)', fontSize: '13px', fontWeight: 700, marginTop: '14px', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
                      <span>Read Complete Case Study</span>
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
      {/* 5. BOTTOM DEMO CTA BAR                                        */}
      {/* ============================================================ */}
      <section style={{
        background: 'linear-gradient(135deg, #1e95d3 0%, #0d6ea0 60%, #212121 100%)',
        color: '#ffffff',
        padding: '54px 20px',
        textAlign: 'center'
      }}>
        <div className="main_content align_self_center" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(24px, 3.5vw, 32px)', fontWeight: 800, margin: '0 auto 12px' }}>
            Digitize Your Waste &amp; Recycling Operations with <br /><span style={{ color: '#75d0f7' }}>AWM</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', margin: '0 auto', maxWidth: '600px', lineHeight: 1.5 }}>
            Book a dedicated consultation to see live weighbridge scale indicators and driver mobile apps.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginTop: '28px', flexWrap: 'wrap' }}>
            <button onClick={onOpenDemo} className="accent_button" style={{ padding: '13px 30px', fontSize: '15px' }}>
              Book an AWM Demo
            </button>
            <a
              href="mailto:contactus@aasaanservices.in?subject=AWM%20Inquiry"
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
              <span>Email Solutions Team</span>
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
          href="https://wa.me/917428267616?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20AWM%20Waste%20Management"
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
