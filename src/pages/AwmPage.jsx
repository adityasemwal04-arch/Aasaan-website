import React, { useState, useEffect } from 'react';
import { awmSectors, awmModules as defaultModules, awmClients as defaultClients, awmWeighbridgeSimulation } from '../data/awmData';
import { getAwmModules, getAwmClients } from '../services/dataService';
import { Recycle, Scale, Navigation, Smartphone, FileCheck, Truck, ArrowRight, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';

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

  // Listen for sector selection from search
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
    <div style={{ paddingTop: '100px' }}>
      
      {/* 1. AWM Hero Section */}
      <section className="section-pad bg-grid" style={{ paddingTop: '40px', paddingBottom: '70px', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span className="badge-pill" style={{ background: '#FFF7ED', color: '#EA580C', border: '1px solid #FFEDD5' }}>
                <Recycle size={12} /> Aasaan Waste Management (AWM)
              </span>
              <span className="badge-pill badge-blue">
                IoT • RFID • Weighbridge Automated
              </span>
            </div>

            <h1>
              The Operating System for Modern <br />
              <span style={{ color: 'var(--accent-orange)' }}>Waste & Recycling Enterprises</span>
            </h1>

            <p style={{
              fontSize: 'clamp(17px, 2.2vw, 20px)',
              color: 'var(--text-muted)',
              marginTop: '18px',
              lineHeight: 1.5
            }}>
              Unifying municipal collections, commercial dumpster rentals, weighbridge scale indicators, material recovery facilities (MRF), and pollution board compliance on a single cloud platform.
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
              <button onClick={onOpenDemo} className="btn btn-orange" style={{ padding: '14px 28px', fontSize: '16px' }}>
                <span>Book an AWM Technical Demo</span>
                <ArrowRight size={16} />
              </button>
              <a href="#weighbridge" className="btn btn-ghost" style={{ padding: '14px 28px', fontSize: '16px' }}>
                <span>See Weighbridge Automation</span>
              </a>
            </div>
          </div>

          {/* Interactive Live Weighbridge Scale Terminal */}
          <div id="weighbridge" style={{
            background: '#0B1329',
            color: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 25px 60px -15px rgba(11, 19, 41, 0.4)',
            overflow: 'hidden',
            maxWidth: '960px',
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
                <Scale size={18} color="#FB923C" />
                <span style={{ fontSize: '13.5px', fontWeight: 700, letterSpacing: '0.04em' }}>
                  AWM WEIGHBRIDGE HARDWARE BRIDGE (INDICATOR RS232 / TCP-IP)
                </span>
              </div>
              <span className="mono" style={{ fontSize: '12px', color: '#34D399', background: 'rgba(52, 211, 153, 0.15)', padding: '2px 8px', borderRadius: '4px' }}>
                ● Scale Connected
              </span>
            </div>

            <div style={{ padding: '28px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '12px', color: '#94A3B8' }}>Ticket No. & Date</div>
                  <div className="mono" style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>
                    {awmWeighbridgeSimulation.ticketNo}
                  </div>
                  <div style={{ fontSize: '11px', color: '#93C5FD', marginTop: '2px' }}>{awmWeighbridgeSimulation.date}</div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '12px', color: '#94A3B8' }}>Vehicle & Transporter</div>
                  <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>
                    {awmWeighbridgeSimulation.vehicleNo}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#FB923C', marginTop: '2px' }}>{awmWeighbridgeSimulation.transporter}</div>
                </div>

                <div style={{ background: 'rgba(249, 115, 22, 0.12)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(249, 115, 22, 0.3)' }}>
                  <div style={{ fontSize: '12px', color: '#FDBA74' }}>Net Material Weight</div>
                  <div className="mono" style={{ fontSize: '20px', fontWeight: 800, color: '#F97316', marginTop: '4px' }}>
                    {awmWeighbridgeSimulation.netWeight}
                  </div>
                  <div style={{ fontSize: '11px', color: '#FDBA74', marginTop: '2px' }}>Gross: 24,850 kg | Tare: 10,050 kg</div>
                </div>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                fontSize: '13px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#CBD5E1' }}>
                  <ShieldCheck size={16} color="#34D399" />
                  <span>Manifest Form 6: <strong style={{ color: '#FFFFFF' }}>{awmWeighbridgeSimulation.manifestId}</strong> (CPCB Compliant)</span>
                </div>
                <span className="mono" style={{ color: '#38BDF8', fontSize: '12px' }}>
                  Destination: {awmWeighbridgeSimulation.disposalSite}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Seven Specialized Waste Sectors */}
      <section id="awm-sectors" className="section-pad" style={{ background: '#FFFFFF', scrollMarginTop: '100px' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto 48px', textAlign: 'center' }}>
            <span className="badge-pill badge-orange" style={{ marginBottom: '12px' }}>
              Purpose-Built Architecture
            </span>
            <h2>Specialized Solutions Across the Waste Life Cycle</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginTop: '10px' }}>
              Whether operating municipal collection routes or industrial hazardous disposal, AWM configures to your exact operational stream.
            </p>

            {/* Sector Selector Tabs */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '24px', flexWrap: 'wrap' }}>
              {awmSectors.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSectorId(s.id)}
                  style={{
                    background: selectedSectorId === s.id ? 'var(--accent-orange)' : 'var(--surface-subtle)',
                    color: selectedSectorId === s.id ? '#FFFFFF' : 'var(--text-body)',
                    border: selectedSectorId === s.id ? '1.5px solid var(--accent-orange)' : '1px solid var(--border-medium)',
                    borderRadius: '10px',
                    padding: '8px 16px',
                    fontSize: '13.5px',
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

          {/* Active Sector Detail Card with Dynamic Image Banner */}
          <div
            id="awm-active-sector"
            style={{
              background: '#FFFFFF',
              border: '1.5px solid var(--border-medium)',
              borderRadius: '20px',
              overflow: 'hidden',
              maxWidth: '920px',
              margin: '0 auto',
              scrollMarginTop: '120px',
            boxShadow: '0 12px 35px -10px rgba(15, 23, 42, 0.08)'
          }}>
            {/* Sector Image Banner */}
            {activeSector.img && (
              <div style={{ height: '220px', position: 'relative', overflow: 'hidden', background: '#0B1329' }}>
                <img
                  src={activeSector.img}
                  alt={activeSector.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(11, 19, 41, 0.85) 0%, rgba(11, 19, 41, 0.2) 60%, transparent 100%)'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '24px',
                  right: '24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  <span className="badge-pill badge-orange" style={{ margin: 0, background: '#EA580C', color: '#FFFFFF', border: 'none' }}>
                    {activeSector.tag}
                  </span>
                  <span style={{ fontSize: '12px', color: '#CBD5E1', background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(6px)', padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                    Sector 0{awmSectors.findIndex(s => s.id === selectedSectorId) + 1} of 0{awmSectors.length}
                  </span>
                </div>
              </div>
            )}

            <div style={{ padding: 'clamp(24px, 4vw, 36px)' }}>
              <h3 style={{ fontSize: '26px', fontWeight: 800, marginTop: '4px' }}>
                {activeSector.title}
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginTop: '10px', lineHeight: 1.6 }}>
                {activeSector.desc}
              </p>

              <div style={{ marginTop: '24px' }}>
                <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '14px' }}>
                  Key Operational Capabilities:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                  {activeSector.points.map((p, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '13.5px',
                        color: 'var(--text-body)',
                        background: 'var(--surface-subtle)',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <CheckCircle2 size={16} color="var(--accent-orange)" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core AWM Automation Modules with High-Res Photography */}
      <section id="awm-modules" className="section-pad bg-grid" style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', scrollMarginTop: '100px' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto 48px', textAlign: 'center' }}>
            <span className="badge-pill badge-blue" style={{ marginBottom: '12px' }}>
              End-to-End Automation
            </span>
            <h2>Core Modules Built into AWM</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginTop: '10px' }}>
              From gate weigh-in to sorting, baling, customer invoicing, and pollution regulatory compliance.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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
                  background: '#FFFFFF',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '16px',
                  scrollMarginTop: '120px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px -8px rgba(15, 23, 42, 0.12)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Module Image Banner */}
                {m.img && (
                  <div style={{ height: '160px', position: 'relative', overflow: 'hidden', background: '#0F172A' }}>
                    <img
                      src={m.img}
                      alt={m.title}
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
                      {m.tag}
                    </span>
                  </div>
                )}
                <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', flex: 1, gap: '8px' }}>
                  <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                    {m.title}
                  </h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0, flex: 1 }}>
                    {m.desc}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-blue)', fontSize: '12.5px', fontWeight: 700, marginTop: '8px' }}>
                    Explore Module Deep-Dive <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </section>

      {/* 4. Verified Client Validation (Tadweeer & Resustainability) with Facility Photos */}
      <section id="awm-clients" className="section-pad" style={{ background: '#FFFFFF', scrollMarginTop: '100px' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto 40px', textAlign: 'center' }}>
            <span className="badge-pill badge-blue" style={{ marginBottom: '12px' }}>
              Proven on Real Ground
            </span>
            <h2>Trusted by Leaders in Waste & Circular Economy</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginTop: '8px' }}>
              Managing thousands of tons of daily material intake across industrial and municipal yards.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', maxWidth: '880px', margin: '0 auto' }}>
            {clients.map((c, i) => {
              const clientSlug = (c.name || `client-${i}`).toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return (
                <div
                  key={c.id || i}
                  id={`client-${clientSlug}`}
                  onClick={() => handleCardClick(clientSlug)}
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid var(--border-medium)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    scrollMarginTop: '120px',
                    boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
                    cursor: 'pointer',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 16px 32px -8px rgba(15, 23, 42, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 23, 42, 0.05)';
                  }}
                >
                  {c.img && (
                    <div style={{ height: '150px', position: 'relative', overflow: 'hidden', background: '#0F172A' }}>
                      <img
                        src={c.img}
                        alt={c.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        loading="lazy"
                      />
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(11, 19, 41, 0.7) 0%, transparent 60%)'
                      }} />
                      {c.type && (
                        <span style={{
                          position: 'absolute',
                          bottom: '10px',
                          left: '14px',
                          fontSize: '11px',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          background: i % 2 === 0 ? '#EA580C' : 'var(--primary-blue)',
                          padding: '3px 8px',
                          borderRadius: '6px'
                        }}>
                          {c.type}
                        </span>
                      )}
                    </div>
                  )}
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 800, margin: 0 }}>{c.name}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '10px', lineHeight: 1.5 }}>
                      {c.desc}
                    </p>
                    {c.metric && (
                      <div className="mono" style={{ fontSize: '12px', color: 'var(--primary-blue)', fontWeight: 700, marginTop: '14px' }}>
                        ✓ {c.metric}
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-blue)', fontSize: '12.5px', fontWeight: 700, marginTop: '14px', paddingTop: '10px', borderTop: '1px solid #F1F5F9' }}>
                      Read Complete Case Study <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Bottom Demo CTA Bar */}
      <section style={{
        background: 'linear-gradient(135deg, #C2410C 0%, #0B1329 100%)',
        color: '#FFFFFF',
        padding: '64px 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Digitize Your Waste & Recycling Operations with <br /><span style={{ color: '#FB923C' }}>AWM</span>
          </h2>
          <p style={{ fontSize: '18px', color: '#FED7AA', marginTop: '16px' }}>
            Book a dedicated consultation to see live weighbridge scale indicators and driver mobile apps.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
            <button onClick={onOpenDemo} className="btn btn-orange" style={{ padding: '14px 28px' }}>
              Book an AWM Demo
            </button>
            <a
              href="mailto:contactus@aasaanservices.in?subject=AWM%20Inquiry"
              className="btn btn-ghost"
              style={{ padding: '14px 28px', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.4)', background: 'transparent' }}
            >
              <span>Email Solutions Team</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
