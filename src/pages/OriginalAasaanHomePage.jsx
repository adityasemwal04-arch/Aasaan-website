import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Sparkles,
  Cpu,
  Bot,
  Zap,
  RefreshCw,
  ShieldCheck,
  Globe,
  Award,
  Layers,
  CheckCircle2,
  SlidersHorizontal,
  LayoutDashboard,
  Smartphone,
  Lock,
  Building2,
  TrendingUp,
  CreditCard,
  MessageSquare,
  ShoppingCart,
  Factory,
  Users,
  Truck,
  BarChart3,
  Database,
  Code2
} from 'lucide-react';
import { getAssetUrl, handleImageError, getToolLogoUrl } from '../utils/assetHelper';
import { getRoutePath } from '../utils/navigation';
import heroImg from '../assets/aasaan_erp_header_desktop.png';
import aasaanLogoSrc from '../assets/aasaan-logo.png';
import WorldVectorMap from '../components/WorldVectorMap';

/* ============================================================
   CRISP SVG FLAG BADGE HELPER
   Renders razor-sharp flags on every OS (bypasses Windows emoji font issues)
   ============================================================ */
function FlagBadge({ code, size = 20 }) {
  const h = Math.round(size * 0.68);
  if (code === 'in' || code === 'india') {
    return (
      <svg width={size} height={h} viewBox="0 0 24 16" style={{ borderRadius: '3px', flexShrink: 0, boxShadow: '0 1px 4px rgba(0,0,0,0.4)', verticalAlign: 'middle' }}>
        <rect width="24" height="5.33" fill="#FF9933" />
        <rect y="5.33" width="24" height="5.33" fill="#FFFFFF" />
        <rect y="10.66" width="24" height="5.33" fill="#138808" />
        <circle cx="12" cy="8" r="2.2" fill="none" stroke="#000080" strokeWidth="0.7" />
      </svg>
    );
  }
  if (code === 'ae' || code === 'middleeast') {
    return (
      <svg width={size} height={h} viewBox="0 0 24 16" style={{ borderRadius: '3px', flexShrink: 0, boxShadow: '0 1px 4px rgba(0,0,0,0.4)', verticalAlign: 'middle' }}>
        <rect width="24" height="5.33" fill="#00732F" />
        <rect y="5.33" width="24" height="5.33" fill="#FFFFFF" />
        <rect y="10.66" width="24" height="5.33" fill="#000000" />
        <rect width="6" height="16" fill="#FF0000" />
      </svg>
    );
  }
  if (code === 'us' || code === 'america') {
    return (
      <svg width={size} height={h} viewBox="0 0 24 16" style={{ borderRadius: '3px', flexShrink: 0, boxShadow: '0 1px 4px rgba(0,0,0,0.4)', verticalAlign: 'middle' }}>
        <rect width="24" height="16" fill="#B22234" />
        <path d="M0,2.46h24M0,4.92h24M0,7.38h24M0,9.84h24M0,12.3h24M0,14.76h24" stroke="#FFF" strokeWidth="1.23" />
        <rect width="9.6" height="8.6" fill="#3C3B6E" />
      </svg>
    );
  }
  if (code === 'za' || code === 'southafrica') {
    return (
      <svg width={size} height={h} viewBox="0 0 24 16" style={{ borderRadius: '3px', flexShrink: 0, boxShadow: '0 1px 4px rgba(0,0,0,0.4)', verticalAlign: 'middle' }}>
        <rect width="24" height="8" fill="#E03C31" />
        <rect y="8" width="24" height="8" fill="#001489" />
        <polygon points="0,0 12,8 0,16" fill="#000000" />
        <polygon points="0,0 2,0 14,8 2,16 0,16 11,8" fill="#FFB81C" />
        <polygon points="2,0 7,0 19,8 7,16 2,16 12,8" fill="#FFFFFF" />
        <polygon points="4,0 24,0 24,5 14,8 24,11 24,16 4,16 13,8" fill="#007749" />
      </svg>
    );
  }
  if (code === 'au' || code === 'australia') {
    return (
      <svg width={size} height={h} viewBox="0 0 24 16" style={{ borderRadius: '3px', flexShrink: 0, boxShadow: '0 1px 4px rgba(0,0,0,0.4)', verticalAlign: 'middle' }}>
        <rect width="24" height="16" fill="#00008B" />
        <rect width="10" height="7" fill="#00247D" />
        <path d="M0,0 L10,7 M10,0 L0,7" stroke="#FFF" strokeWidth="1.2" />
        <path d="M0,0 L10,7 M10,0 L0,7" stroke="#CF142B" strokeWidth="0.6" />
        <path d="M5,0 v7 M0,3.5 h10" stroke="#FFF" strokeWidth="2" />
        <path d="M5,0 v7 M0,3.5 h10" stroke="#CF142B" strokeWidth="1.2" />
        <circle cx="17" cy="11" r="1.2" fill="#FFF" />
        <circle cx="20" cy="5" r="0.8" fill="#FFF" />
        <circle cx="15" cy="4" r="0.8" fill="#FFF" />
        <circle cx="19" cy="8" r="0.8" fill="#FFF" />
      </svg>
    );
  }
  return <span style={{ fontSize: '14px' }}>🌐</span>;
}

/* ============================================================
   GLOBAL PRESENCE MAP — High-Tech Vector Component
   ============================================================ */
function GlobalPresenceMap({ onOpenDemo }) {
  const [activeHub, setActiveHub] = React.useState('india');
  const [filter, setFilter] = React.useState('all');

  const hubs = {
    india: {
      code: 'in',
      label: 'India',
      badge: 'Global HQ & Core R&D',
      cities: 'Delhi NCR · Mumbai · Bengaluru',
      deployments: '4,000+ Enterprises',
      uptime: '99.99%',
      latency: '< 15ms',
      color: '#1e95d3',
      bgGlow: 'rgba(30,149,211,0.12)',
      highlights: [
        'Discrete & Process Manufacturing ERP',
        'GST, E-Invoicing & E-Way Bill Auto-Sync',
        'Agentic AI Auto-Reconciliation Engine',
        'Real-time Multi-Depot Stock Control'
      ],
      compliance: ['GST E-Invoicing', 'E-Way Bill API', 'TDS 194Q', 'Schedule III Financials']
    },
    middleeast: {
      code: 'ae',
      label: 'Middle East',
      badge: 'UAE & GCC Regional Hub',
      cities: 'Dubai · Riyadh · Abu Dhabi',
      deployments: '400+ Enterprises',
      uptime: '99.98%',
      latency: '< 22ms',
      color: '#f59e0b',
      bgGlow: 'rgba(245,158,11,0.12)',
      highlights: [
        'GCC VAT & ZATCA Phase 2 E-Invoicing',
        'Multi-Currency Group Consolidation',
        'AWM Environmental & Waste Cloud',
        'Cross-Border Trading & Freezone Ops'
      ],
      compliance: ['ZATCA Phase 2', 'FTA VAT Ready', 'Multi-Currency', 'Freezone Customs']
    },
    america: {
      code: 'us',
      label: 'North America',
      badge: 'Logistics & Distribution Hub',
      cities: 'New York · California · Texas',
      deployments: '200+ Enterprises',
      uptime: '99.98%',
      latency: '< 28ms',
      color: '#10b981',
      bgGlow: 'rgba(16,185,129,0.12)',
      highlights: [
        'Multi-Entity Cross-Border Accounting',
        '3PL Warehousing & Freight Tracking',
        'Automated Supply Chain Reordering',
        'AWS Cloud-Native High Availability'
      ],
      compliance: ['US GAAP', 'SOC2 Type II', '3PL EDI Mesh', 'Multi-Warehouse']
    },
    southafrica: {
      code: 'za',
      label: 'South Africa',
      badge: 'Sub-Saharan Industrial Hub',
      cities: 'Johannesburg · Cape Town · Durban',
      deployments: '150+ Enterprises',
      uptime: '99.97%',
      latency: '< 35ms',
      color: '#8b5cf6',
      bgGlow: 'rgba(139,92,246,0.12)',
      highlights: [
        'Fleet & Heavy Equipment Telematics',
        'WasteCarrier & Industrial Recycling',
        'Regional Depot Distribution ERP',
        'Field Service Job Dispatching'
      ],
      compliance: ['SARS VAT Ready', 'Hazmat Manifest', 'Fleet GPS Bridge', 'ISO 14001 Audit']
    },
    australia: {
      code: 'au',
      label: 'Australia',
      badge: 'APAC Omnichannel Hub',
      cities: 'Sydney · Melbourne · Brisbane',
      deployments: '180+ Enterprises',
      uptime: '99.98%',
      latency: '< 32ms',
      color: '#f43f5e',
      bgGlow: 'rgba(244,63,94,0.12)',
      highlights: [
        'Omnichannel Retail POS & Multi-Store',
        'Mining & Heavy Machinery Maintenance',
        'Cloud-Native Multi-Tenant Architecture',
        'Automated Supplier Drop-shipping'
      ],
      compliance: ['ATO Single Touch', 'GST Compliance', 'EFT Barcodes', 'AWS AP-Southeast']
    }
  };

  const filterOptions = [
    { key: 'all', label: 'All Hubs', code: null },
    { key: 'india', label: 'India (HQ)', code: 'in' },
    { key: 'middleeast', label: 'Middle East', code: 'ae' },
    { key: 'america', label: 'North America', code: 'us' },
    { key: 'southafrica', label: 'South Africa', code: 'za' },
    { key: 'australia', label: 'Australia', code: 'au' }
  ];

  const currentHub = hubs[activeHub] || hubs.india;

  return (
    <section style={{
      background: 'linear-gradient(180deg, #040914 0%, #071324 50%, #030812 100%)',
      padding: '88px 20px',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(56, 189, 248, 0.15)',
      borderBottom: '1px solid rgba(56, 189, 248, 0.15)'
    }}>
      <style>{`
        .gpm-pill-btn {
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(13, 26, 45, 0.7);
          color: rgba(255, 255, 255, 0.75);
          padding: 8px 16px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          display: inline-flex;
          alignItems: center;
          gap: 8px;
          backdrop-filter: blur(8px);
        }
        .gpm-pill-btn:hover {
          border-color: #38bdf8;
          color: #ffffff;
          transform: translateY(-1px);
          background: rgba(30, 149, 211, 0.15);
        }
        .gpm-pill-btn.active {
          background: #1e95d3;
          border-color: #38bdf8;
          color: #ffffff;
          box-shadow: 0 0 16px rgba(30, 149, 211, 0.45);
        }
        .gpm-map-container {
          background: radial-gradient(circle at 62% 42%, #0f223d 0%, #071221 65%, #040a14 100%);
          border: 1px solid rgba(56, 189, 248, 0.22);
          border-radius: 20px;
          box-shadow: 0 24px 64px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          overflow: hidden;
          position: relative;
        }
        .gpm-card-glow {
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
      `}</style>

      {/* Atmospheric ambient lighting */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(30,149,211,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(60px)'
      }} />

      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '44px', position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(30, 149, 211, 0.12)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          padding: '6px 18px',
          borderRadius: '999px',
          marginBottom: '18px'
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 8px #10b981' }} />
          <span style={{ color: '#38bdf8', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Active Global Cloud Mesh
          </span>
        </div>

        <h2 style={{
          color: '#ffffff',
          fontSize: 'clamp(28px, 4.5vw, 42px)',
          fontWeight: 800,
          margin: '0 0 14px',
          lineHeight: 1.2,
          letterSpacing: '-0.02em'
        }}>
          Worldwide Presence. <span style={{
            background: 'linear-gradient(135deg, #38bdf8 0%, #1e95d3 60%, #60a5fa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Localised Compliance.</span>
        </h2>

        <p style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontSize: '16px',
          maxWidth: '680px',
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          Powering discrete manufacturers, waste management networks, and multi-depot trading conglomerates across 5 continents with sub-25ms synchronized cloud latency.
        </p>
      </div>

      {/* Filter / Hub Selector Pills */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center',
        marginBottom: '36px',
        position: 'relative',
        zIndex: 2
      }}>
        {filterOptions.map((f) => (
          <button
            key={f.key}
            className={`gpm-pill-btn${activeHub === f.key || (filter === f.key && f.key === 'all') ? ' active' : ''}`}
            onClick={() => {
              setFilter(f.key);
              if (f.key !== 'all') {
                setActiveHub(f.key);
              }
            }}
          >
            {f.code ? <FlagBadge code={f.code} size={18} /> : <span>🌐</span>}
            <span>{f.label}</span>
          </button>
        ))}
      </div>

      {/* Main Map + Executive Card Grid */}
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.75fr) minmax(320px, 1fr)',
        gap: '24px',
        alignItems: 'stretch',
        position: 'relative',
        zIndex: 2
      }}>

        {/* Real High-Fidelity Vector World Map */}
        <div className="gpm-map-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '440px' }}>
          
          {/* Top Mesh Status Header Bar */}
          <div style={{
            padding: '14px 20px',
            borderBottom: '1px solid rgba(56, 189, 248, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(7, 18, 33, 0.6)',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '12.5px', fontWeight: 600 }}>
                Enterprise Edge Topology · <strong>5 Core Sovereign Regions</strong>
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>
              <span>AWS Cloud-Native</span>
              <span>·</span>
              <span style={{ color: '#38bdf8', fontWeight: 600 }}>Zero Data Residency Leak</span>
            </div>
          </div>

          {/* Interactive World Map SVG */}
          <div style={{ padding: '16px 20px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <WorldVectorMap
              activeHub={activeHub}
              filter={filter}
              onSelectHub={(hubKey) => {
                setActiveHub(hubKey);
                setFilter(hubKey);
              }}
            />
          </div>

          {/* Bottom Interactive Legend / Status Bar */}
          <div style={{
            padding: '12px 20px',
            borderTop: '1px solid rgba(56, 189, 248, 0.1)',
            background: 'rgba(5, 12, 22, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '12px'
          }}>
            <div style={{ color: 'rgba(255, 255, 255, 0.55)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>💡</span>
              <span>Click on any regional beacon or pill above to inspect deployments and compliance.</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#38bdf8' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1e95d3' }} /> India (Global HQ)
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#f59e0b' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} /> GCC Hub
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#10b981' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} /> North America
              </span>
            </div>
          </div>
        </div>

        {/* Executive Regional Detail Card */}
        <div
          className="gpm-card-glow"
          style={{
            background: 'rgba(10, 22, 38, 0.85)',
            border: `1.5px solid ${currentHub.color}45`,
            borderRadius: '20px',
            padding: '28px',
            backdropFilter: 'blur(16px)',
            boxShadow: `0 20px 48px -10px rgba(0,0,0,0.7), 0 0 24px ${currentHub.bgGlow}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            {/* Region Top Badge & Flag */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FlagBadge code={currentHub.code} size={30} />
                <div>
                  <h3 style={{ color: '#ffffff', margin: 0, fontSize: '22px', fontWeight: 800, letterSpacing: '-0.01em' }}>
                    {currentHub.label}
                  </h3>
                  <div style={{ color: currentHub.color, fontSize: '12.5px', fontWeight: 600, marginTop: '2px' }}>
                    {currentHub.badge}
                  </div>
                </div>
              </div>

              <div style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '4px 10px',
                borderRadius: '999px',
                fontSize: '11px',
                color: '#10b981',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                Online
              </div>
            </div>

            {/* City Hubs */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '10px',
              padding: '10px 14px',
              fontSize: '12.5px',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '18px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span>📍</span>
              <span><strong>Primary Hubs:</strong> {currentHub.cities}</span>
            </div>

            {/* Mini Metrics Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                padding: '12px 14px'
              }}>
                <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Deployments</div>
                <div style={{ color: currentHub.color, fontSize: '19px', fontWeight: 800, marginTop: '4px' }}>
                  {currentHub.deployments}
                </div>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                padding: '12px 14px'
              }}>
                <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Edge Latency</div>
                <div style={{ color: '#ffffff', fontSize: '19px', fontWeight: 800, marginTop: '4px' }}>
                  {currentHub.latency}
                </div>
              </div>
            </div>

            {/* Core Capabilities */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.45)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
                Key Operational Strengths
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {currentHub.highlights.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.4 }}>
                    <CheckCircle2 size={15} color={currentHub.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Pills */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.45)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                Sovereign Compliance
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {currentHub.compliance.map((c, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'rgba(255, 255, 255, 0.8)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '11.5px',
                      fontWeight: 600
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTA Button */}
          <button
            onClick={onOpenDemo}
            style={{
              width: '100%',
              background: currentHub.color,
              color: '#ffffff',
              border: 'none',
              borderRadius: '10px',
              padding: '13px 18px',
              fontWeight: 800,
              fontSize: '14px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: `0 8px 24px -4px ${currentHub.color}66`,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.filter = 'brightness(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.filter = 'brightness(1)';
            }}
          >
            <span>Schedule {currentHub.label} Walkthrough</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>

      {/* High-Trust Metrics Strip */}
      <div style={{
        maxWidth: '1240px',
        margin: '40px auto 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '16px',
        position: 'relative',
        zIndex: 2
      }}>
        {[
          { icon: '🌍', stat: '5 Strategic Hubs', sub: 'USA · Australia · Middle East · India · South Africa' },
          { icon: '⚡', stat: '99.98% High Availability', sub: 'Zero single points of failure across Multi-AZ cloud' },
          { icon: '🏢', stat: '5,000+ Enterprise Sites', sub: 'From discrete plants to 200+ location retail chains' },
          { icon: '🛡️', stat: 'Local Sovereign Privacy', sub: 'Zero cross-border residency leak; encrypted at rest' }
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              background: 'rgba(10, 22, 38, 0.65)',
              border: '1px solid rgba(56, 189, 248, 0.14)',
              borderRadius: '14px',
              padding: '18px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              backdropFilter: 'blur(8px)'
            }}
          >
            <div style={{
              fontSize: '26px',
              width: '46px',
              height: '46px',
              borderRadius: '10px',
              background: 'rgba(30, 149, 211, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              {item.icon}
            </div>
            <div>
              <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '15px' }}>{item.stat}</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.55)', fontSize: '12px', marginTop: '3px', lineHeight: 1.35 }}>
                {item.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default function OriginalAasaanHomePage({ onOpenDemo, onNavigate }) {
  const [whyTab, setWhyTab] = useState(0);
  const [clientTab, setClientTab] = useState(0);
  const [toolTab, setToolTab] = useState(0);
  const [logoErrors, setLogoErrors] = useState({});

  useEffect(() => {
    setLogoErrors({});
  }, [toolTab]);

  const clients = [
    {
      id: 0,
      name: 'Tadweeer',
      initials: 'TD',
      industry: 'Recycling & Waste Management',
      work: 'End-to-end municipal & commercial recycling operations management.',
      metrics: '1,200+ Daily Weighbridge Manifests',
      highlight: 'Automated Gross/Tare weighbridge telemetry & 100% CPCB compliance export.',
      tag: 'Circular Economy',
      img: 'media/Taqdweer_11.png',
      fallback: 'https://www.aasaanerp.com/media/solutions/Taqdweer_11.png'
    },
    {
      id: 1,
      name: 'Resustainability',
      initials: 'RS',
      industry: 'Environmental Services & Sustainability Solutions',
      work: 'Large-scale sustainability project tracking and environmental compliance.',
      metrics: '40% Faster Regulatory Filing',
      highlight: 'Multi-site environmental monitoring and zero-latency operational audit logs.',
      tag: 'CleanTech',
      img: 'media/Resustainability_11.png',
      fallback: 'https://www.aasaanerp.com/media/solutions/Resustainability_11.png'
    },
    {
      id: 2,
      name: 'Galaxy Tools',
      initials: 'GT',
      industry: 'Industrial Tools & Equipment Manufacturing',
      work: 'Multi-level BOM engineering, shop-floor routing and inventory control.',
      metrics: '99.2% Inventory Accuracy',
      highlight: 'Real-time machine telemetry, multi-tier BOM costing & scrap tracking.',
      tag: 'Precision Mfg',
      img: 'media/Galaxy_Tools1_MYqjHU9.png',
      fallback: 'https://www.aasaanerp.com/media/solutions/Galaxy_Tools1_MYqjHU9.png'
    },
    {
      id: 3,
      name: 'Shofu Dental',
      initials: 'SD',
      industry: 'Dental Products & Medical Equipment',
      work: 'Batch-expiry tracking, multi-warehouse stock and sterile order distribution.',
      metrics: '3.5x Faster Order Dispatch',
      highlight: 'Automated cold-chain inventory & regulatory batch trace validation.',
      tag: 'MedTech & Dental',
      img: 'media/Shofu_Dental_1.png',
      fallback: 'https://www.aasaanerp.com/media/solutions/Shofu_Dental_1.png'
    },
    {
      id: 4,
      name: 'Miranay Trading and Investment',
      initials: 'MT',
      industry: 'Trading & Investment Services',
      work: 'Multi-currency corporate consolidation, forex reconciliation & credit limits.',
      metrics: '100% Consolidated Ledgers',
      highlight: 'Real-time multi-entity cash flow and trade finance visibility.',
      tag: 'Global Trade',
      img: 'media/Miranay_Trading_and_Investment_11.png',
      fallback: 'https://www.aasaanerp.com/media/solutions/Miranay_Trading_and_Investment_11.png'
    }
  ];

  const modules = [
    {
      slug: 'financial-management',
      name: 'Financial Management',
      tag: 'Accounting & GST',
      desc: 'A full suite of accounting functions, automated GST, multi-currency ledgers, and real-time financial reporting.',
      img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      fallback: 'https://www.aasaanerp.com/media/solutions/Group_1281.png',
      features: ['Multi-Currency Ledgers', 'Auto GST & e-Way']
    },
    {
      slug: 'stock-control',
      name: 'Stock Control',
      tag: 'Inventory & Depots',
      desc: 'Effortlessly manage multi-warehouse inventory, bin locations, batch/serial tracking, and automated reorder alerts.',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      fallback: 'https://www.aasaanerp.com/media/solutions/Group_1282.png',
      features: ['Bin-Level Locations', 'FEFO / FIFO Batching']
    },
    {
      slug: 'crm',
      name: 'CRM',
      tag: 'Lead & Pipeline',
      desc: 'Seamlessly capture omni-channel leads, track customer interactions on visual Kanban pipelines, and boost conversions.',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      fallback: 'https://www.aasaanerp.com/media/solutions/Group_1283.png',
      features: ['Visual Deal Pipeline', 'Instant Quote Builder']
    },
    {
      slug: 'purchasing',
      name: 'Purchasing',
      tag: 'Vendor Procurement',
      desc: 'Streamline vendor management, automate RFQ comparisons, and ensure 3-way matching of PO, GRN, and invoices.',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      fallback: 'https://www.aasaanerp.com/media/solutions/Group_1287.png',
      features: ['RFQ Rate Matrices', '3-Way PO Matching']
    },
    {
      slug: 'sales',
      name: 'Sales',
      tag: 'Order Fulfillment',
      desc: 'Effortlessly manage your entire sales cycle with tier-based pricing, credit limit approvals, and 1-click e-invoicing.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      fallback: 'https://www.aasaanerp.com/media/solutions/Group_1284.png',
      features: ['Tier-Based Pricing', 'Direct e-Invoicing']
    },
    {
      slug: 'service',
      name: 'Service',
      tag: 'Field Operations',
      desc: 'Streamline customer ticketing, mobile technician dispatch, warranty tracking, and Annual Maintenance Contracts (AMC).',
      img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
      fallback: 'https://www.aasaanerp.com/media/solutions/Group_1285.png',
      features: ['Technician Dispatch', 'AMC & Warranty SLA']
    },
    {
      slug: 'reporting',
      name: 'Reporting',
      tag: 'BI & Analytics',
      desc: 'Comprehensive, real-time insights at your fingertips with 300+ pre-built reports, executive KPIs, and drill-downs.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      fallback: 'https://www.aasaanerp.com/media/solutions/Group_1286.png',
      features: ['300+ Standard Reports', 'Live Executive KPIs']
    },
    {
      slug: 'manufacturing',
      name: 'Manufacturing',
      tag: 'Production & Shop Floor',
      desc: 'Streamline your production with multi-level Bill of Materials (BOM), work center routings, digital job cards, and MRP.',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      fallback: 'https://www.aasaanerp.com/media/solutions/Group_1288.png',
      features: ['Multi-Level BOMs', 'MRP & Shop Routing']
    },
    {
      slug: 'waste-management',
      name: 'Waste Management',
      tag: 'AWM Specialized Solution',
      desc: 'Dedicated enterprise tools for weighbridge hardware automation, RFID skip bin tracking, and environmental EPR compliance.',
      img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
      fallback: 'https://www.aasaanerp.com/media/solutions/Waste_Management_pic.png',
      features: ['Weighbridge Sync', 'Bin RFID Logistics']
    }
  ];

  const toolCategories = [
    {
      name: 'Accounting & Finance',
      dir: 'accounting_and_finance',
      icon: CreditCard,
      badge: 'Core Financials',
      description: 'Synchronize ledgers, payment gateways, tax compliance, and automated bank feeds.',
      tools: [
        { name: 'CCAvenue', type: 'Payment Gateway', status: 'Active' },
        { name: 'Razorpay', type: 'Payment Gateway', status: 'Instant Sync' },
        { name: 'PayPal', type: 'Cross-Border', status: 'Instant Sync' },
        { name: 'ICICI Bank', type: 'Bank Feed', status: 'Automated' },
        { name: 'Xero', type: 'Cloud Accounting', status: 'Connected' },
        { name: 'QuickBooks', type: 'Ledger Export', status: 'Automated' },
        { name: 'Stripe', type: 'Global Checkout', status: 'Active' },
        { name: 'Tally Prime', type: 'Accounting Bridge', status: 'Two-Way Sync' },
        { name: 'Zoho Books', type: 'Financial Cloud', status: 'Connected' }
      ]
    },
    {
      name: 'Communication & Messaging',
      dir: 'communication_and_messaging',
      icon: MessageSquare,
      badge: 'Omni-Channel',
      description: 'Trigger WhatsApp alerts, automated SMS updates, and internal team dispatches.',
      tools: [
        { name: 'WhatsApp Business', type: 'Direct Messaging', status: 'Instant Sync' },
        { name: 'Microsoft Teams', type: 'Collaboration', status: 'Connected' },
        { name: 'SendGrid', type: 'Transactional Email', status: 'Automated' },
        { name: 'Slack', type: 'Ops Notifications', status: 'Webhooks' },
        { name: 'Twilio', type: 'Cloud SMS & OTP', status: 'Active' },
        { name: 'Mailgun', type: 'Email Automation', status: 'Verified' }
      ]
    },
    {
      name: 'E-Commerce Platforms',
      dir: 'ecommerce_platforms',
      icon: ShoppingCart,
      badge: 'Multi-Store',
      description: 'Consolidate orders, catalog inventory, and fulfillment across digital storefronts.',
      tools: [
        { name: 'Amazon Seller', type: 'Marketplace Orders', status: 'Connected' },
        { name: 'Flipkart', type: 'Fulfillment Sync', status: 'Active' },
        { name: 'Shopify', type: 'Storefront Sync', status: 'Real-Time' },
        { name: 'Magento', type: 'Enterprise Commerce', status: 'Active' },
        { name: 'WooCommerce', type: 'WordPress Sync', status: 'Two-Way Sync' }
      ]
    },
    {
      name: 'Manufacturing & Supply Chain',
      dir: 'manufacturing_and_supply',
      icon: Factory,
      badge: 'Shop Floor & IoT',
      description: 'Connect shop-floor SCADA, machine PLC feeds, and raw material replenishment.',
      tools: [
        { name: 'MS Excel', type: 'Data Import/Export', status: 'Automated' },
        { name: 'SAP HANA', type: 'Enterprise DB', status: 'Connected' },
        { name: 'Autodesk', type: 'CAD Integration', status: 'Active' }
      ]
    },
    {
      name: 'CRM & Marketing',
      dir: 'crm_and_marketing',
      icon: Building2,
      badge: 'Pipeline Growth',
      description: 'Bi-directional synchronization of enterprise leads, deals, and customer touchpoints.',
      tools: [
        { name: 'Freshsales', type: 'CRM Suite', status: 'Two-Way Sync' },
        { name: 'HubSpot', type: 'Inbound CRM', status: 'Active' },
        { name: 'LeadSquared', type: 'Field Sales', status: 'Instant Sync' },
        { name: 'Mailchimp', type: 'Campaign Marketing', status: 'Automated' },
        { name: 'Zoho CRM', type: 'Pipeline Manager', status: 'Verified' }
      ]
    },
    {
      name: 'Logistics & Shipping',
      dir: 'logistics_and_shipping',
      icon: Truck,
      badge: 'Fulfillment & Fleet',
      description: 'Automate AWB generation, dispatch manifests, and live fleet parcel tracking.',
      tools: [
        { name: 'Delhivery', type: 'Express Logistics', status: 'Automated' },
        { name: 'Shiprocket', type: 'Multi-Courier Shipping', status: 'Instant Sync' },
        { name: 'Pickrr', type: 'Smart Courier', status: 'Active' },
        { name: 'India Post', type: 'Government Postal', status: 'Connected' },
        { name: 'BlueDart', type: 'Priority Cargo', status: 'Verified' }
      ]
    },
    {
      name: 'HR & Payroll',
      dir: 'hr_and_payroll',
      icon: Users,
      badge: 'Workforce',
      description: 'Reconcile attendance biometrics, statutory deductions, and payroll disbursement.',
      tools: [
        { name: 'GreytHR', type: 'Statutory Payroll', status: 'Connected' },
        { name: 'ADP', type: 'Global Payroll', status: 'Active' },
        { name: 'Zoho People', type: 'Staff Directory', status: 'Automated' },
        { name: 'Keka', type: 'Payroll & HR', status: 'Active' },
        { name: 'Paybooks', type: 'Payroll Management', status: 'Verified' }
      ]
    },
    {
      name: 'Analytics & Reporting',
      dir: 'analytics_and_reporting',
      icon: BarChart3,
      badge: 'Business Intelligence',
      description: 'Stream ERP data warehouses into executive visual dashboards and custom models.',
      tools: [
        { name: 'Google Data Studio', type: 'Executive Dashboards', status: 'Connected' },
        { name: 'Metabase', type: 'SQL Explorer', status: 'Automated' },
        { name: 'Power BI', type: 'Microsoft Analytics', status: 'Live Data Feed' },
        { name: 'Tableau', type: 'Visual Analytics', status: 'Active' },
        { name: 'Zoho Analytics', type: 'Business Intelligence', status: 'Real-Time' }
      ]
    },
    {
      name: 'Document & Cloud Storage',
      dir: 'dev_tools_and_api',
      icon: Database,
      badge: 'Secure Storage',
      description: 'Encrypted document archiving for PO receipts, invoices, and e-way bill PDFs.',
      tools: [
        { name: 'Adobe Sign', type: 'e-Signatures', status: 'Active' },
        { name: 'Dropbox', type: 'Digital Archive', status: 'Verified' },
        { name: 'Google Drive', type: 'Workspace Storage', status: 'Automated' },
        { name: 'OneDrive', type: 'Document Vault', status: 'Connected' }
      ]
    },
    {
      name: 'Dev Tools & APIs',
      dir: 'document_and_cloud_storage',
      icon: Code2,
      badge: 'Extensibility',
      description: 'Open REST endpoints, webhooks, and developer SDKs for unlimited customizations.',
      tools: [
        { name: 'Webhooks', type: 'Custom Endpoints', status: '<100ms Ping' },
        { name: 'Make', type: 'No-Code Workflow', status: 'Active' },
        { name: 'Postman', type: 'API Test Suite', status: 'Verified' },
        { name: 'Zapier', type: 'Automation Platform', status: 'Published' }
      ]
    }
  ];

  const currentToolCategory = toolCategories[toolTab] || toolCategories[0];
  const activeClient = clients[clientTab] || clients[0];

  return (
    <div className="column_alignment base_margin" style={{ marginTop: '106px' }}>

      {/* ============================================================ */}
      {/* TRUST / STATS BAR                                           */}
      {/* ============================================================ */}
      <div style={{
        background: 'linear-gradient(90deg, var(--colorAccent) 0%, #1565c0 100%)',
        color: '#ffffff',
        padding: '14px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '28px',
        fontSize: '14px',
        fontWeight: 600,
        boxShadow: '0 2px 8px rgba(30,149,211,0.3)'
      }}>
        {[
          { value: '100+', label: 'Businesses Served', icon: 'fas fa-briefcase' },
          { value: '9',    label: 'ERP Modules',       icon: 'fas fa-cubes' },
          { value: '10+', label: 'Years of Innovation',icon: 'fas fa-award' },
          { value: '24/7',label: 'Expert Support',     icon: 'fas fa-headset' },
        ].map((stat, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className={stat.icon} style={{ fontSize: '18px', color: 'rgba(255,255,255,0.75)' }}></i>
            <span style={{ fontSize: '22px', fontWeight: 800, color: '#fff' }}>{stat.value}</span>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{stat.label}</span>
            {i < 3 && <span style={{ color: 'rgba(255,255,255,0.35)', marginLeft: '8px' }}>|</span>}
          </div>
        ))}
      </div>

      {/* ============================================================ */}
      {/* 1. HERO — SPLIT LAYOUT (replaces generic city video)         */}
      {/* ============================================================ */}
      <div style={{
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a54 45%, #1e95d3 100%)',
        padding: '60px 24px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>

          {/* LEFT — Headline + CTAs */}
          <div style={{ flex: '1 1 420px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Badge pills */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', color: '#75d0f7', fontSize: '12px', fontWeight: 700, padding: '5px 14px', borderRadius: '20px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                🏆 &nbsp;Trusted by 100+ Businesses
              </span>
              <span style={{ background: 'rgba(255,91,11,0.2)', border: '1px solid rgba(255,91,11,0.4)', color: '#ffb38a', fontSize: '12px', fontWeight: 700, padding: '5px 14px', borderRadius: '20px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                ⚡ &nbsp;Go Live in Days
              </span>
            </div>

            {/* Headline */}
            <h1 style={{ color: '#ffffff', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, margin: 0, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              The ERP That Actually<br />
              <span style={{ background: 'linear-gradient(90deg, #75d0f7, #ff5b0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Works For You.
              </span>
            </h1>

            {/* Subline */}
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', margin: 0, lineHeight: 1.7, maxWidth: '480px' }}>
              Aasaan ERP brings Finance, Sales, CRM, Inventory, Manufacturing and more into one powerful platform — tailored for Indian businesses and deployed on AWS.
            </p>

            {/* Feature bullets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { icon: '✅', text: 'No IT team needed — zero-code setup' },
                { icon: '☁️', text: 'Cloud + On-Premise — your choice' },
                { icon: '📱', text: 'Works on any device, anywhere' },
                { icon: '🔗', text: 'Connects with WhatsApp, Tally, Razorpay & more' }
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '16px' }}>{f.icon}</span>
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14.5px', fontWeight: 500 }}>{f.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
              <button
                onClick={onOpenDemo}
                style={{ background: 'var(--colorAccent)', color: '#fff', border: 'none', borderRadius: '8px', padding: '14px 32px', fontSize: '15px', fontWeight: 800, cursor: 'pointer', boxShadow: '0 6px 20px rgba(30,149,211,0.4)', transition: 'all 0.2s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(30,149,211,0.55)'; e.currentTarget.style.background = '#157bb3'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(30,149,211,0.4)'; e.currentTarget.style.background = 'var(--colorAccent)'; }}
              >
                Book a Free Demo →
              </button>
              <a
                href="https://wa.me/917428267616?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Aasaan%20ERP"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: '8px', padding: '14px 24px', fontSize: '15px', fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', gap: '8px' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
              >
                <i className="fab fa-whatsapp" style={{ fontSize: '18px', color: '#25D366' }}></i>
                Talk to Us
              </a>
            </div>

            {/* Quick Micro Guarantees */}
            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', fontSize: '12.5px', color: 'rgba(255,255,255,0.7)', alignItems: 'center', marginTop: '-4px' }}>
              <span><i className="fas fa-shield-alt" style={{ color: '#75d0f7', marginRight: '6px' }}></i>ISO & AWS Certified</span>
              <span><i className="fas fa-bolt" style={{ color: '#ffb38a', marginRight: '6px' }}></i>Free 30-Min Walkthrough</span>
              <span><i className="fas fa-credit-card" style={{ color: '#75d0f7', marginRight: '6px' }}></i>No Credit Card Required</span>
            </div>

            {/* Social proof numbers */}
            <div style={{ display: 'flex', gap: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
              {[{ n: '100+', l: 'Clients' }, { n: '9', l: 'Modules' }, { n: '10+', l: 'Years' }, { n: '24/7', l: 'Support' }].map((s, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, lineHeight: 1 }}>{s.n}</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px', fontWeight: 500, marginTop: '2px' }}>{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Product screenshot in browser frame */}
          <div style={{ flex: '1 1 380px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '560px' }}>
              {/* Glow */}
              <div style={{ position: 'absolute', inset: '-20px', background: 'radial-gradient(ellipse at center, rgba(30,149,211,0.35) 0%, transparent 70%)', borderRadius: '24px', zIndex: 0 }} />
              {/* Browser chrome */}
              <div style={{ background: '#1e2832', borderRadius: '12px 12px 0 0', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '6px', position: 'relative', zIndex: 1 }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
                <div style={{ flex: 1, background: '#2d3748', borderRadius: '4px', padding: '3px 10px', marginLeft: '8px', fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace' }}>
                  app.aasaanerp.com
                </div>
              </div>
              {/* Screenshot */}
              <img
                src={heroImg}
                alt="Aasaan ERP Dashboard"
                style={{ width: '100%', display: 'block', borderRadius: '0 0 12px 12px', boxShadow: '0 24px 60px rgba(0,0,0,0.5)', position: 'relative', zIndex: 1 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* FEATURE STRIP — 3 Quick Trust Cards                         */}
      {/* ============================================================ */}
      <div style={{
        background: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        padding: '0 24px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {[
            { icon: 'fas fa-rocket', title: 'Go Live in Days', desc: 'Not months. Fastest ERP implementation guaranteed — or we help you for free.', color: '#1e95d3' },
            { icon: 'fas fa-cloud', title: 'Cloud + On-Premise', desc: 'Hosted on AWS or your own servers. Your data, your control, your choice.', color: '#0094DA' },
            { icon: 'fas fa-headset', title: '24/7 Expert Support', desc: 'Real humans, not bots. Our team is always one call away whenever you need help.', color: '#1565c0' },
            { icon: 'fas fa-puzzle-piece', title: '9 Integrated Modules', desc: 'Finance, CRM, Sales, Inventory, HR and more — all talking to each other seamlessly.', color: '#23779a' },
          ].map((f, i) => (
            <div key={i} style={{
              flex: '1 1 220px',
              padding: '28px 20px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px',
              borderRight: i < 3 ? '1px solid #e2e8f0' : 'none',
              minWidth: '200px'
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(30,149,211,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <i className={f.icon} style={{ fontSize: '18px', color: f.color }}></i>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14.5px', color: '#212121', marginBottom: '4px' }}>{f.title}</div>
                <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* COMMUNITY & TAGLINE                                          */}
      {/* ============================================================ */}
      <div className="column_alignment" style={{ background: '#fff' }}>
        <div className="row_column_alignment align_self_center align_center" style={{ width: '90%', maxWidth: '850px', padding: '36px 0', gap: '20px' }}>
          <img
            src={getAssetUrl('images/best_software_tag.png')}
            onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/best_software_tag.png')}
            alt="Best Software Tag"
            style={{ width: '150px', objectFit: 'contain', flexShrink: 0 }}
          />
          <div className="column_alignment" style={{ padding: '8px 16px' }}>
            <span style={{ fontWeight: 600, fontSize: '26px', color: '#212121', lineHeight: 1.3 }}>
              Shaping the Future of Business, <b style={{ color: 'var(--colorAccent2)', fontWeight: 700 }}>Together</b>
            </span>
            <span style={{ marginTop: '16px', lineHeight: 1.6, color: '#5f5f5f', fontSize: '15.5px' }}>
              Community is our foundation. It drives innovation, empowers individuals, and enables growth. Our customers, our partners, our people – it takes all of us.
            </span>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* AI-DRIVEN ERP BANNER                                         */}
      {/* ============================================================ */}
      <div style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f1f8fd 50%, #ffffff 100%)', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            background: 'radial-gradient(ellipse at 20% 20%, rgba(30,149,211,0.08) 0%, rgba(255,255,255,0.95) 70%), #ffffff',
            border: '1px solid rgba(30,149,211,0.22)',
            borderRadius: '24px',
            boxShadow: '0 20px 50px -15px rgba(30,149,211,0.12)',
            padding: '44px 36px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '40px'
          }}>
            {/* Visual Column */}
            <div style={{ flex: '1 1 440px', position: 'relative' }}>
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.22)'
              }}>
                <img
                  src={getAssetUrl('images/AI Driven Image.jpg')}
                  onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/AI%20Driven%20Image.jpg')}
                  alt="AI Driven ERP Co-Pilot"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 60%, rgba(15,23,42,0.45) 100%)'
                }}></div>
              </div>

              {/* Floating Live Badge Top Left */}
              <div style={{
                position: 'absolute',
                top: '-16px',
                left: '-12px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(30,149,211,0.25)',
                borderRadius: '12px',
                padding: '10px 16px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981'
                }}></div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#64748b' }}>Neural Co-Pilot</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>v4.2 Engine Active</div>
                </div>
              </div>

              {/* Floating Stat Card Bottom Right */}
              <div style={{
                position: 'absolute',
                bottom: '-16px',
                right: '-12px',
                background: 'rgba(15, 23, 42, 0.94)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '14px',
                padding: '12px 18px',
                boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(30,149,211,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8'
                }}>
                  <Cpu size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff' }}>99.4% Anomaly Precision</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>+28% Operational Velocity</div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(30,149,211,0.1)',
                  color: '#0d6ea0',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  marginBottom: '10px'
                }}>
                  <Sparkles size={14} /> Next-Generation Intelligence
                </span>
                <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', margin: '6px 0 10px', lineHeight: 1.25 }}>
                  Shaping the Future with <span style={{ background: 'linear-gradient(135deg, #1e95d3, #0284c7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI-Driven Enterprise ERP</span>
                </h2>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  Aasaan ERP is more than software — it's your intelligent business co-pilot. Powered by machine learning, driven by your real-time operational data, and constantly calibrating for margin efficiency.
                </p>
              </div>

              {/* 5 Feature Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '12px' }}>
                {[
                  {
                    icon: Sparkles,
                    color: '#1e95d3',
                    bg: 'rgba(30,149,211,0.1)',
                    title: 'Smart Recommendations',
                    desc: 'Real-time AI insights for dynamic pricing, reorder thresholds & receivables.'
                  },
                  {
                    icon: TrendingUp,
                    color: '#0284c7',
                    bg: 'rgba(2,132,199,0.1)',
                    title: 'Predictive Automation',
                    desc: 'Forecast demand, auto-suggest purchase orders & detect anomalies before stock-outs.'
                  },
                  {
                    icon: Bot,
                    color: '#6366f1',
                    bg: 'rgba(99,102,241,0.1)',
                    title: 'Conversational Co-Pilot',
                    desc: 'Natural language queries to pull reports and trigger workflows instantly.'
                  },
                  {
                    icon: Zap,
                    color: '#f59e0b',
                    bg: 'rgba(245,158,11,0.1)',
                    title: 'Real-Time Risk Radar',
                    desc: 'Instant cross-functional decision support across cash flow, shop floor & dispatch.'
                  },
                  {
                    icon: RefreshCw,
                    color: '#10b981',
                    bg: 'rgba(16,185,129,0.1)',
                    title: 'Self-Optimizing Workflows',
                    desc: 'Continuous pattern learning that eliminates repetitive manual tasks.'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '12px',
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '12px 14px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(30,149,211,0.4)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(30,149,211,0.08)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.02)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: item.bg,
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <item.icon size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#0f172a', marginBottom: '2px' }}>{item.title}</div>
                      <div style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.45 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dark Callout Bar */}
              <div style={{
                background: '#0f172a',
                color: '#e2e8f0',
                borderRadius: '12px',
                padding: '14px 18px',
                borderLeft: '4px solid #1e95d3',
                fontSize: '13.5px',
                lineHeight: 1.5,
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <ShieldCheck size={20} style={{ color: '#38bdf8', flexShrink: 0 }} />
                <span><b>With Aasaan ERP, AI isn't an afterthought —</b> it's embedded across every ledger, warehouse, and work order.</span>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={onOpenDemo}
                  style={{
                    background: 'linear-gradient(135deg, #1e95d3 0%, #0d6ea0 100%)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '14px 28px',
                    fontSize: '15px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '0 8px 20px rgba(30,149,211,0.28)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(30,149,211,0.38)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(30,149,211,0.28)';
                  }}
                >
                  <span>Experience AI ERP</span>
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. WHY AASAAN ERP — TABS                                     */}
      {/* ============================================================ */}
      <div className="column_alignment section_wrapper" style={{ background: '#FFFFFF', padding: '80px 20px' }}>
        <div className="column_alignment main_content align_self_center" style={{ maxWidth: '1200px' }}>

          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(30,149,211,0.1)',
              color: '#0d6ea0',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '6px 14px',
              borderRadius: '20px',
              marginBottom: '12px'
            }}>
              <Zap size={14} /> Built for Speed &amp; Reliability
            </span>
            <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#0f172a', margin: '0 0 12px', lineHeight: 1.25 }}>
              Why <span style={{ color: '#1e95d3' }}>AASAAN Enterprise</span> Resource Planning?
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
              Purpose-built architecture that unifies operations, eliminates software babysitting, and delivers rapid ROI across your entire enterprise.
            </p>
          </div>

          {/* Segmented Switcher */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <div style={{
              display: 'inline-flex',
              background: '#f1f5f9',
              padding: '6px',
              borderRadius: '14px',
              border: '1px solid #e2e8f0',
              gap: '6px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              {[
                { label: 'Effortless to Use', icon: Zap },
                { label: 'Your Business, Anywhere', icon: Globe },
                { label: 'Proven. Powerful. Trusted.', icon: Award }
              ].map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setWhyTab(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    borderRadius: '10px',
                    fontSize: '14.5px',
                    fontWeight: whyTab === idx ? 700 : 600,
                    color: whyTab === idx ? '#1e95d3' : '#64748b',
                    background: whyTab === idx ? '#ffffff' : 'transparent',
                    boxShadow: whyTab === idx ? '0 4px 14px rgba(30,149,211,0.14)' : 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <tab.icon size={16} style={{ color: whyTab === idx ? '#1e95d3' : '#94a3b8' }} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* TAB 0 CONTENT */}
          {whyTab === 0 && (
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '40px',
              animation: 'fadeIn 0.3s ease-in-out'
            }}>
              <div style={{ flex: '1 1 480px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', margin: 0, lineHeight: 1.35 }}>
                  Designed for people who get things done — <span style={{ color: '#1e95d3' }}>zero babysitting required.</span>
                </h3>
                <p style={{ fontSize: '15px', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                  Most ERP systems require months of painful training. Aasaan ERP is built with modern consumer-grade UX so your staff adopts it effortlessly from Day 1.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { icon: LayoutDashboard, color: '#1e95d3', title: 'Zero Learning Curve', desc: 'Start using it like a pro from Day 1 with intuitive UI workflows.' },
                    { icon: SlidersHorizontal, color: '#0284c7', title: 'Intuitive Navigation', desc: 'Everything is positioned contextually right where operators expect it.' },
                    { icon: Zap, color: '#f59e0b', title: 'Smart Workflows', desc: 'Automate repetitive tasks, skip tedious paperwork and eliminate human error.' },
                    { icon: Layers, color: '#6366f1', title: 'Easily Customizable', desc: 'Tailor screens, custom fields, and approval paths without tech support.' },
                    { icon: CheckCircle2, color: '#10b981', title: 'One-Click Navigation', desc: 'Jump between modules, ledgers, and transactions in a snap.' }
                  ].map((row, rIdx) => (
                    <div
                      key={rIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '14px',
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '12px',
                        padding: '12px 16px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#ffffff';
                        e.currentTarget.style.borderColor = 'rgba(30,149,211,0.3)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(30,149,211,0.06)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#f8fafc';
                        e.currentTarget.style.borderColor = '#e2e8f0';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: row.color,
                        flexShrink: 0
                      }}>
                        <row.icon size={17} />
                      </div>
                      <div>
                        <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#0f172a' }}>{row.title}</div>
                        <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.45 }}>{row.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual Frame */}
              <div style={{ flex: '1 1 440px', position: 'relative' }}>
                <div style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.18)',
                  border: '1px solid rgba(30,149,211,0.2)'
                }}>
                  <img
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                    src={getAssetUrl('images/Why Aasaan Image 1 Effortless Use.jpg')}
                    onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/Why%20Aasaan%20Image%201%20Effortless%20Use.jpg')}
                    alt="Effortless to Use"
                  />
                </div>

                {/* Floating Stat Top Right */}
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  right: '-10px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(30,149,211,0.25)',
                  borderRadius: '12px',
                  padding: '10px 16px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Zap size={18} style={{ color: '#1e95d3' }} />
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Rapid Deployment</div>
                    <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#0f172a' }}>7-Day Average Go-Live</div>
                  </div>
                </div>

                {/* Floating Stat Bottom Left */}
                <div style={{
                  position: 'absolute',
                  bottom: '-14px',
                  left: '-10px',
                  background: 'rgba(15, 23, 42, 0.94)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  padding: '10px 16px',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <CheckCircle2 size={18} style={{ color: '#10b981' }} />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff' }}>100% User Adoption</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Zero specialized training required</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 1 CONTENT */}
          {whyTab === 1 && (
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '40px',
              animation: 'fadeIn 0.3s ease-in-out'
            }}>
              <div style={{ flex: '1 1 480px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', margin: 0, lineHeight: 1.35 }}>
                  Whether in the office, on-site, or across borders — <span style={{ color: '#1e95d3' }}>your ERP moves with you.</span>
                </h3>
                <p style={{ fontSize: '15px', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                  Run your whole business from any web browser or mobile phone with zero server maintenance, high-availability AWS hosting, and instant sync.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { icon: Globe, color: '#1e95d3', title: '100% Cloud-Native', desc: 'Zero hardware setup, automatic version upgrades and zero server hassles.' },
                    { icon: Smartphone, color: '#0284c7', title: 'Mobile-First Architecture', desc: 'Fully responsive operations across iOS, Android, laptops and tablets.' },
                    { icon: Lock, color: '#10b981', title: 'Enterprise-Grade Security', desc: 'ISO 27001-aligned access control, role permissions and SSL encryption.' },
                    { icon: RefreshCw, color: '#6366f1', title: 'Real-Time Multi-Branch Sync', desc: 'All plants, warehouses, and corporate branches stay synchronized.' },
                    { icon: Zap, color: '#f59e0b', title: 'Connect Your Modern Stack', desc: 'Plug into WhatsApp, Razorpay, Tally, logistics APIs & 50+ integrations.' }
                  ].map((row, rIdx) => (
                    <div
                      key={rIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '14px',
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '12px',
                        padding: '12px 16px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#ffffff';
                        e.currentTarget.style.borderColor = 'rgba(30,149,211,0.3)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(30,149,211,0.06)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#f8fafc';
                        e.currentTarget.style.borderColor = '#e2e8f0';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: row.color,
                        flexShrink: 0
                      }}>
                        <row.icon size={17} />
                      </div>
                      <div>
                        <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#0f172a' }}>{row.title}</div>
                        <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.45 }}>{row.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual Frame */}
              <div style={{ flex: '1 1 440px', position: 'relative' }}>
                <div style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.18)',
                  border: '1px solid rgba(30,149,211,0.2)'
                }}>
                  <img
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                    src={getAssetUrl('images/Why Aasaan Image 2 Business Anywhere.jpg')}
                    onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/Why%20Aasaan%20Image%202%20Business%20Anywhere.jpg')}
                    alt="Your Business Anywhere"
                  />
                </div>

                {/* Floating Stat Top Right */}
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  right: '-10px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(30,149,211,0.25)',
                  borderRadius: '12px',
                  padding: '10px 16px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Globe size={18} style={{ color: '#1e95d3' }} />
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Uptime Guarantee</div>
                    <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#0f172a' }}>99.99% AWS Reliability</div>
                  </div>
                </div>

                {/* Floating Stat Bottom Left */}
                <div style={{
                  position: 'absolute',
                  bottom: '-14px',
                  left: '-10px',
                  background: 'rgba(15, 23, 42, 0.94)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  padding: '10px 16px',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <ShieldCheck size={18} style={{ color: '#38bdf8' }} />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff' }}>Bank-Grade Encryption</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>256-Bit SSL payload protection</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2 CONTENT */}
          {whyTab === 2 && (
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '40px',
              animation: 'fadeIn 0.3s ease-in-out'
            }}>
              <div style={{ flex: '1 1 480px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', margin: 0, lineHeight: 1.35 }}>
                  The proven operational backbone for <span style={{ color: '#1e95d3' }}>100+ high-growth enterprises.</span>
                </h3>
                <p style={{ fontSize: '15px', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                  Aasaan ERP is the trusted operating system across heavy manufacturing, circular economy waste management, healthcare, retail, and global investment trading.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { icon: Building2, color: '#1e95d3', title: 'Trusted Across Industries', desc: 'Proven across precision engineering, waste management, dental & retail.' },
                    { icon: TrendingUp, color: '#10b981', title: 'Built to Scale With You', desc: 'Easily supports 10 to 10,000 concurrent operators with zero lag.' },
                    { icon: Cpu, color: '#6366f1', title: 'Flexible Architecture', desc: 'Add new modules, custom triggers, or workflows without breaking existing data.' },
                    { icon: Award, color: '#f59e0b', title: 'Direct Human Expert Support', desc: 'Fast, dedicated help from senior ERP solution architects — no robotic runaround.' },
                    { icon: RefreshCw, color: '#0284c7', title: 'Always Improving', desc: 'Regular feature updates and compliance upgrades delivered with zero downtime.' }
                  ].map((row, rIdx) => (
                    <div
                      key={rIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '14px',
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '12px',
                        padding: '12px 16px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#ffffff';
                        e.currentTarget.style.borderColor = 'rgba(30,149,211,0.3)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(30,149,211,0.06)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#f8fafc';
                        e.currentTarget.style.borderColor = '#e2e8f0';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: row.color,
                        flexShrink: 0
                      }}>
                        <row.icon size={17} />
                      </div>
                      <div>
                        <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#0f172a' }}>{row.title}</div>
                        <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.45 }}>{row.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual Frame */}
              <div style={{ flex: '1 1 440px', position: 'relative' }}>
                <div style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.18)',
                  border: '1px solid rgba(30,149,211,0.2)'
                }}>
                  <img
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                    src={getAssetUrl('images/Why Aasaan Image 3 Proven trusted.jpg')}
                    onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/Why%20Aasaan%20Image%203%20Proven%20trusted.jpg')}
                    alt="Proven Powerful Trusted"
                  />
                </div>

                {/* Floating Stat Top Right */}
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  right: '-10px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(30,149,211,0.25)',
                  borderRadius: '12px',
                  padding: '10px 16px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Award size={18} style={{ color: '#1e95d3' }} />
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Client Loyalty</div>
                    <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#0f172a' }}>98.7% Retention Rate</div>
                  </div>
                </div>

                {/* Floating Stat Bottom Left */}
                <div style={{
                  position: 'absolute',
                  bottom: '-14px',
                  left: '-10px',
                  background: 'rgba(15, 23, 42, 0.94)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  padding: '10px 16px',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Building2 size={18} style={{ color: '#38bdf8' }} />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff' }}>100+ Enterprise Deployments</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Across India, Middle East &amp; Global</div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. MODULES OF AASAAN ERP                                     */}
      {/* ============================================================ */}
      <div id="modules" className="column_alignment section_wrapper" style={{ background: '#f8fafc', padding: '80px 20px' }}>
        <div className="column_alignment main_content align_self_center" style={{ maxWidth: '1200px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#eaf6fd',
              color: '#1e95d3',
              border: '1px solid rgba(30,149,211,0.25)',
              borderRadius: '99px',
              padding: '4px 14px',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '14px'
            }}>
              <Sparkles size={12} color="#1e95d3" /> Integrated Enterprise Suite
            </div>
            <h2 className="page_heading align_self_center" style={{ maxWidth: '750px', margin: '0 auto 12px' }}>
              MODULES OF <b>AASAAN ERP</b>
            </h2>
            <p style={{ color: '#5f5f5f', fontSize: '16px', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
              Enterprise-grade depth across every department. Built to operate in real time, with seamless cross-module workflows.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
            gap: '24px',
            width: '100%'
          }}>
            {modules.map((m, idx) => (
              <div
                key={idx}
                onClick={() => {
                  if (onNavigate) {
                    onNavigate(`blog/${m.slug}`);
                  } else {
                    window.location.href = getRoutePath(`blog/${m.slug}`);
                  }
                }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 18px 36px rgba(30, 149, 211, 0.16)';
                  e.currentTarget.style.borderColor = '#1e95d3';
                  const img = e.currentTarget.querySelector('.module-card-img');
                  if (img) img.style.transform = 'scale(1.06)';
                  const arrow = e.currentTarget.querySelector('.module-arrow');
                  if (arrow) arrow.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.04)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  const img = e.currentTarget.querySelector('.module-card-img');
                  if (img) img.style.transform = 'scale(1)';
                  const arrow = e.currentTarget.querySelector('.module-arrow');
                  if (arrow) arrow.style.transform = 'translateX(0)';
                }}
                title={`Explore ${m.name} Architecture & Features`}
              >
                {/* Photo Banner with Tag */}
                <div style={{ height: '190px', position: 'relative', overflow: 'hidden', background: '#0f172a' }}>
                  <img
                    className="module-card-img"
                    src={m.img}
                    onError={(e) => handleImageError(e, m.fallback)}
                    alt={m.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease'
                    }}
                    loading="lazy"
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(6px)',
                    color: '#1e95d3',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: '99px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                    {m.tag}
                  </div>
                </div>

                {/* Body Content */}
                <div style={{ padding: '22px 20px 18px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{
                      fontSize: '19px',
                      fontWeight: 800,
                      color: '#212121',
                      margin: '0 0 8px',
                      letterSpacing: '-0.01em'
                    }}>
                      {m.name}
                    </h3>
                    <p style={{
                      fontSize: '13.5px',
                      color: '#5f5f5f',
                      lineHeight: 1.55,
                      margin: '0 0 14px',
                      minHeight: '42px'
                    }}>
                      {m.desc}
                    </p>

                    {/* Feature Chips */}
                    {m.features && (
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                        {m.features.map((feat, fIdx) => (
                          <span
                            key={fIdx}
                            style={{
                              background: '#f6fbfe',
                              color: '#1e95d3',
                              border: '1px solid rgba(30,149,211,0.2)',
                              fontSize: '11px',
                              fontWeight: 600,
                              borderRadius: '6px',
                              padding: '2px 8px'
                            }}
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Footer Link */}
                  <div style={{
                    borderTop: '1px solid #f1f5f9',
                    paddingTop: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    color: '#1e95d3'
                  }}>
                    <span>Explore Architecture</span>
                    <ArrowRight className="module-arrow" size={15} style={{ transition: 'transform 0.2s ease' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. OUR CLIENTS — ENTERPRISE SUCCESS SHOWCASE                 */}
      {/* ============================================================ */}
      <div className="column_alignment section_wrapper" style={{ background: 'linear-gradient(180deg, #f0f7fc 0%, #ffffff 100%)', padding: '80px 20px' }}>
        <div className="column_alignment main_content align_self_center" style={{ maxWidth: '1200px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(30,149,211,0.1)',
              color: '#0d6ea0',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '6px 14px',
              borderRadius: '20px',
              marginBottom: '12px'
            }}>
              <ShieldCheck size={14} /> Proven Enterprise Success
            </span>
            <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#0f172a', margin: '0 0 12px', lineHeight: 1.25 }}>
              Trusted by <span style={{ color: '#1e95d3' }}>Industrial &amp; Corporate</span> Leaders
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
              The reason Aasaan has been trusted for over a decade — we engineer high-performance operational systems tailored to actual shop floors, weighbridges, and corporate trading desks.
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '36px',
            alignItems: 'center'
          }}>
            {/* Left Column: Interactive Client Cards */}
            <div style={{ flex: '1 1 480px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {clients.map((c, idx) => {
                const isActive = clientTab === idx;
                return (
                  <div
                    key={c.id}
                    onClick={() => setClientTab(idx)}
                    style={{
                      background: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
                      border: isActive ? '2px solid #1e95d3' : '1px solid #e2e8f0',
                      borderRadius: '16px',
                      padding: '18px 22px',
                      cursor: 'pointer',
                      boxShadow: isActive ? '0 10px 28px rgba(30, 149, 211, 0.12)' : '0 2px 6px rgba(0,0,0,0.02)',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = '#ffffff';
                        e.currentTarget.style.borderColor = 'rgba(30,149,211,0.3)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.65)';
                        e.currentTarget.style.borderColor = '#e2e8f0';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '12px',
                          background: isActive ? 'linear-gradient(135deg, #1e95d3, #0d6ea0)' : '#e2e8f0',
                          color: isActive ? '#ffffff' : '#475569',
                          fontWeight: 800,
                          fontSize: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          boxShadow: isActive ? '0 4px 12px rgba(30,149,211,0.3)' : 'none'
                        }}>
                          {c.initials}
                        </div>
                        <div>
                          <div style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a' }}>{c.name}</div>
                          <div style={{ fontSize: '12.5px', color: '#64748b', fontWeight: 500 }}>{c.industry}</div>
                        </div>
                      </div>
                      <span style={{
                        background: isActive ? '#e0f2fe' : '#f1f5f9',
                        color: isActive ? '#0284c7' : '#64748b',
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: '20px',
                        whiteSpace: 'nowrap'
                      }}>
                        {c.tag}
                      </span>
                    </div>

                    {isActive && (
                      <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                        {/* Metric Highlight */}
                        <div style={{
                          background: 'linear-gradient(90deg, #f0f9ff, #f8fafc)',
                          borderLeft: '3px solid #1e95d3',
                          padding: '10px 14px',
                          borderRadius: '0 8px 8px 0',
                          marginBottom: '12px'
                        }}>
                          <div style={{ fontSize: '12px', fontWeight: 700, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Key Transformation</div>
                          <div style={{ fontSize: '14.5px', fontWeight: 800, color: '#0f172a' }}>{c.metrics}</div>
                          <div style={{ fontSize: '12.5px', color: '#64748b', marginTop: '2px' }}>{c.highlight}</div>
                        </div>

                        <div style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.5 }}>
                          <span style={{ fontWeight: 700, color: '#0f172a' }}>Aasaan ERP Scope: </span>
                          {c.work}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: High-Impact Showcase Visual & Live Case Badge */}
            <div style={{ flex: '1 1 480px', position: 'relative' }}>
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 24px 50px -12px rgba(15, 23, 42, 0.2)',
                border: '1px solid rgba(30,149,211,0.25)',
                position: 'relative',
                background: '#0f172a'
              }}>
                <img
                  src={getAssetUrl(activeClient.img)}
                  onError={(e) => handleImageError(e, activeClient.fallback)}
                  alt={activeClient.name}
                  style={{ width: '100%', height: '440px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.88) 100%)'
                }}></div>

                {/* Glassmorphism Case Card Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '16px',
                  padding: '18px 20px',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
                  border: '1px solid rgba(255,255,255,0.4)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#10b981',
                        boxShadow: '0 0 8px #10b981'
                      }}></span>
                      <span style={{ fontSize: '12px', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Verified Production Client</span>
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 700, background: '#f1f5f9', color: '#475569', padding: '2px 8px', borderRadius: '4px' }}>
                      {activeClient.tag}
                    </span>
                  </div>

                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                    {activeClient.name}
                  </div>
                  <div style={{ fontSize: '13px', color: '#475569', lineHeight: 1.45, marginBottom: '10px' }}>
                    "{activeClient.highlight}"
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid #e2e8f0', paddingTop: '8px', fontSize: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0284c7', fontWeight: 700 }}>
                      <Zap size={14} />
                      <span>{activeClient.metrics}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b' }}>
                      <ShieldCheck size={14} />
                      <span>Zero Downtime Architecture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* GLOBAL PRESENCE MAP                                          */}
      {/* ============================================================ */}
      <GlobalPresenceMap onOpenDemo={onOpenDemo} />

      {/* ============================================================ */}
      {/* CTA BANNER                                                   */}
      {/* ============================================================ */}
      <div style={{ background: 'linear-gradient(135deg, #1e95d3 0%, #0d6ea0 60%, #212121 100%)', padding: '52px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '18px' }}>
        <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '12px', fontWeight: 700, padding: '4px 14px', borderRadius: '20px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Limited Demo Slots Available
        </span>
        <h2 style={{ color: '#ffffff', fontSize: '30px', fontWeight: 800, margin: 0, lineHeight: 1.3, maxWidth: '640px' }}>
          Ready to Transform Your Business?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', margin: 0, maxWidth: '520px', lineHeight: 1.6 }}>
          See Aasaan ERP in action — live, personalised, and built around your workflows. No commitment required.
        </p>
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px' }}>
          <button
            onClick={onOpenDemo}
            style={{ background: '#ffffff', color: 'var(--colorAccent)', border: 'none', borderRadius: '8px', padding: '14px 32px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', transition: 'all 0.2s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#f0f9ff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Book a Free Demo →
          </button>
          <a
            href="https://wa.me/917428267616?text=Hi%2C%20I%20want%20to%20book%20a%20demo%20of%20Aasaan%20ERP"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.35)', borderRadius: '8px', padding: '14px 28px', fontSize: '15px', fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', gap: '8px' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
          >
            <i className="fab fa-whatsapp" style={{ fontSize: '18px' }}></i> Chat with Us
          </a>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 5. ALL-IN-ONE CLOUD ERP                                      */}
      {/* ============================================================ */}
      <div className="column_alignment section_wrapper instant_go_live_section" style={{ background: '#FFFFFF' }}>
        <div className="column_alignment main_content align_self_center" style={{ textAlign: 'center' }}>
          <h2 className="page_heading" style={{ maxWidth: '750px', alignSelf: 'center', marginBottom: '12px' }}>
            <b>All-in-One Cloud</b> ERP Software for Seamless Business Growth
          </h2>
          <span style={{ maxWidth: '700px', textAlign: 'center', alignSelf: 'center', fontSize: '15px', color: '#5f5f5f', lineHeight: 1.6, marginBottom: '24px' }}>
            Unlock best-in-class, industry-specific solutions designed to adapt and scale with your business—customizable, powerful, and built for success.
          </span>

          <div className="row_column_alignment two" style={{ margin: '16px 0', gap: '24px', justifyContent: 'center' }}>
            <div className="column_alignment" style={{ flex: 1, alignItems: 'center' }}>
              <img
                src={getAssetUrl('images/implementation_img.jpg')}
                onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/implementation_img.jpg')}
                alt="Implementation and Architecture"
                style={{ width: '95%', maxWidth: '540px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', borderRadius: '8px' }}
              />
            </div>
            <div className="column_alignment" style={{ flex: 1, alignItems: 'center' }}>
              <img
                src={getAssetUrl('images/instant_go_live_img.jpg')}
                onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/instant_go_live_img.jpg')}
                alt="Instant Go Live"
                style={{ width: '95%', maxWidth: '540px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', borderRadius: '8px' }}
              />
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <button onClick={onOpenDemo} className="accent_button align_self_center" style={{ padding: '14px 32px', fontSize: '16px' }}>
              Schedule Demo
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 6. SEAMLESS INTEGRATION TOOLS                                */}
      {/* ============================================================ */}
      <div className="column_alignment section_wrapper" style={{ background: '#f8fafc', padding: '80px 20px' }}>
        <div className="column_alignment main_content align_self_center" style={{ maxWidth: '1200px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(30,149,211,0.1)',
              color: '#0d6ea0',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '6px 14px',
              borderRadius: '20px',
              marginBottom: '12px'
            }}>
              <Layers size={14} /> Extensible Ecosystem
            </span>
            <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#0f172a', margin: '0 0 12px', lineHeight: 1.25 }}>
              Seamless Integration with Your <span style={{ color: '#1e95d3' }}>Existing Tools</span>
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
              Connects effortlessly with 50+ enterprise services — eliminating data silos, accelerating bookkeeping, and ensuring bidirectional real-time sync.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', alignItems: 'flex-start' }}>
            
            {/* Left Column: Category Navigator */}
            <div style={{
              flex: '0 0 320px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              background: '#ffffff',
              borderRadius: '18px',
              padding: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
            }}>
              <div style={{ padding: '8px 12px', fontSize: '12px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Tool Categories
              </div>
              {toolCategories.map((t, idx) => {
                const isActive = toolTab === idx;
                const IconComponent = t.icon || Layers;
                return (
                  <button
                    key={idx}
                    onClick={() => setToolTab(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: isActive ? '1px solid #1e95d3' : '1px solid transparent',
                      background: isActive ? '#f0f9ff' : 'transparent',
                      color: isActive ? '#0284c7' : '#475569',
                      fontWeight: isActive ? 700 : 500,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                      width: '100%'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = '#f8fafc';
                        e.currentTarget.style.color = '#0f172a';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#475569';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: isActive ? '#1e95d3' : '#f1f5f9',
                        color: isActive ? '#ffffff' : '#64748b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <IconComponent size={16} />
                      </div>
                      <span style={{ fontSize: '13.5px' }}>{t.name}</span>
                    </div>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '12px',
                      background: isActive ? '#e0f2fe' : '#f1f5f9',
                      color: isActive ? '#0369a1' : '#94a3b8'
                    }}>
                      {t.tools ? t.tools.length : t.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Connected App Directory Grid */}
            <div style={{ flex: '1 1 560px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              
              {/* Category Header Bar */}
              <div style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                    <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                      {currentToolCategory.name}
                    </h3>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      background: 'rgba(30,149,211,0.1)',
                      color: '#0284c7',
                      padding: '2px 8px',
                      borderRadius: '6px'
                    }}>
                      {currentToolCategory.badge || 'Verified Stack'}
                    </span>
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                    {currentToolCategory.description || 'Seamless bi-directional integration with your core enterprise stack.'}
                  </p>
                </div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#ecfdf5',
                  color: '#059669',
                  border: '1px solid #a7f3d0',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 700
                }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></div>
                  <span>100% Cloud Connected</span>
                </div>
              </div>

              {/* Cards Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: '14px'
              }}>
                {currentToolCategory.tools ? (
                  currentToolCategory.tools.map((tool, tIdx) => {
                    const logoIndex = (tIdx % currentToolCategory.tools.length) + 1;
                    return (
                      <div
                        key={tIdx}
                        style={{
                          background: '#ffffff',
                          border: '1px solid #e2e8f0',
                          borderRadius: '14px',
                          padding: '16px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                          transition: 'all 0.25s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-3px)';
                          e.currentTarget.style.borderColor = 'rgba(30,149,211,0.35)';
                          e.currentTarget.style.boxShadow = '0 10px 22px rgba(30,149,211,0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.borderColor = '#e2e8f0';
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.02)';
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div style={{
                            width: '52px',
                            height: '52px',
                            background: '#f8fafc',
                            borderRadius: '10px',
                            border: '1px solid #e2e8f0',
                            padding: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden'
                          }}>
                            {logoErrors[`${currentToolCategory.dir}_${logoIndex}`] ? (
                              <span style={{ fontSize: '11px', fontWeight: 800, color: '#1e95d3' }}>
                                {tool.name.substring(0, 2).toUpperCase()}
                              </span>
                            ) : (
                              <img
                                src={getToolLogoUrl(currentToolCategory.dir, logoIndex)}
                                onError={(e) => {
                                  const cdnUrl = `https://www.aasaanerp.com/static/main/images/tools/${currentToolCategory.dir}/logo_${logoIndex}.png`;
                                  if (e.currentTarget.src !== cdnUrl) {
                                    e.currentTarget.src = cdnUrl;
                                  } else {
                                    setLogoErrors(prev => ({ ...prev, [`${currentToolCategory.dir}_${logoIndex}`]: true }));
                                  }
                                }}
                                alt={tool.name}
                                style={{ maxHeight: '38px', maxWidth: '42px', objectFit: 'contain' }}
                              />
                            )}
                          </div>
                          <span style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            padding: '3px 8px',
                            borderRadius: '6px',
                            background: '#f0fdf4',
                            color: '#16a34a',
                            border: '1px solid #bbf7d0',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}>
                            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#16a34a' }}></span>
                            {tool.status}
                          </span>
                        </div>

                        <div>
                          <div style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>{tool.name}</div>
                          <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>{tool.type}</div>
                        </div>

                        <div style={{
                          borderTop: '1px solid #f1f5f9',
                          paddingTop: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '11.5px',
                          color: '#1e95d3',
                          fontWeight: 600
                        }}>
                          <span>Native Connector</span>
                          <CheckCircle2 size={13} style={{ color: '#10b981' }} />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  Array.from({ length: currentToolCategory.count }, (_, i) => i + 1).map((num) => (
                    <div
                      key={num}
                      style={{
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '12px',
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '80px'
                      }}
                    >
                      <img
                        src={getToolLogoUrl(currentToolCategory.dir, num)}
                        onError={(e) => {
                          const cdnUrl = `https://www.aasaanerp.com/static/main/images/tools/${currentToolCategory.dir}/logo_${num}.png`;
                          if (e.currentTarget.src !== cdnUrl) {
                            e.currentTarget.src = cdnUrl;
                          } else {
                            e.currentTarget.style.display = 'none';
                          }
                        }}
                        alt={`${currentToolCategory.name} Logo ${num}`}
                        style={{ maxHeight: '42px', maxWidth: '100px', objectFit: 'contain' }}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>

          {/* Ecosystem Capabilities Security Strip */}
          <div style={{
            marginTop: '44px',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '18px',
            padding: '24px 30px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px'
          }}>
            {[
              { icon: ShieldCheck, title: 'Enterprise REST APIs', desc: 'Secure tokenized endpoints for custom ERP integrations.' },
              { icon: Zap, title: 'Real-Time Webhooks', desc: 'Sub-100ms event notifications for payments and orders.' },
              { icon: Lock, title: 'AES-256 Encryption', desc: 'End-to-end encrypted payload transit and token protection.' },
              { icon: RefreshCw, title: 'Two-Way Syncing', desc: 'Automated conflict resolution ensuring single source of truth.' }
            ].map((feature, fIdx) => (
              <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(30,149,211,0.1)',
                  color: '#1e95d3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <feature.icon size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>{feature.title}</div>
                  <div style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.45, marginTop: '2px' }}>{feature.desc}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* FLOATING BUTTONS                                             */}
      {/* ============================================================ */}
      <div style={{ position: 'fixed', bottom: '24px', right: '20px', display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 9000, alignItems: 'flex-end' }}>
        {/* Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to top"
          style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#ffffff', border: '2px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.12)', cursor: 'pointer', color: '#1e95d3', transition: 'all 0.2s ease' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#1e95d3'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.border = '2px solid #1e95d3'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#1e95d3'; e.currentTarget.style.border = '2px solid #e2e8f0'; }}
        >
          <i className="fas fa-chevron-up" style={{ fontSize: '14px' }}></i>
        </button>

        {/* WhatsApp */}
        <a
          href="https://wa.me/917428267616?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Aasaan%20ERP"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px 10px 12px', borderRadius: '28px', background: '#25D366', boxShadow: '0 4px 16px rgba(37,211,102,0.45)', textDecoration: 'none', transition: 'transform 0.2s ease, box-shadow 0.2s ease', color: '#fff', fontWeight: 600, fontSize: '13.5px' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.6)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.45)'; }}
        >
          <i className="fab fa-whatsapp" style={{ fontSize: '22px' }}></i>
          <span>WhatsApp Us</span>
        </a>

        {/* Book Demo */}
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
