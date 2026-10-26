import React, { useState } from 'react';
import {
  Building2,
  Zap,
  Recycle,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Globe2,
  Sparkles
} from 'lucide-react';

export default function InteractiveHeroDashboard({ onOpenDemo, onNavigate }) {
  const [selectedProduct, setSelectedProduct] = useState('enterprise');

  const products = {
    enterprise: {
      id: 'enterprise',
      name: 'Aasaan ERP Enterprise',
      shortLabel: 'ERP Enterprise',
      icon: Building2,
      accentColor: '#38bdf8',
      badge: 'Multi-Plant & Global',
      tagline: 'End-to-End Enterprise Resource Planning for Growing Businesses',
      description: 'Comprehensive solution designed for multi-branch organizations, manufacturing plants, and supply chains requiring automated accounting, inventory control, and multi-currency operations.',
      highlights: [
        'Multi-Plant Manufacturing & Multi-Level BOM',
        'Direct Statutory GST, E-Invoicing & E-Way Bill Integration',
        'Real-Time Consolidated Financial Statements & P&L',
        'Granular Role-Based Permissions & Complete Audit Trails'
      ],
      pageRoute: 'global',
      ctaText: 'Explore ERP Enterprise'
    },
    lite: {
      id: 'lite',
      name: 'Aasaan ERP Lite',
      shortLabel: 'ERP Lite',
      icon: Zap,
      accentColor: '#34d399',
      badge: 'Fast & Simple',
      tagline: 'Streamlined Invoicing & Accounting for Lean Teams',
      description: 'A lightning-fast, clutter-free ERP designed for distributors, traders, and small business owners who want day-to-day billing, customer balances, and tax compliance without enterprise complexity.',
      highlights: [
        'Instant 3-Click Quotations & GST Invoicing',
        'Mobile-Ready Field Sales & WhatsApp Payment Reminders',
        'Simplified Inventory & Low-Stock Alerts',
        '7-Day Rapid Deployment with Zero Learning Curve'
      ],
      pageRoute: 'lite',
      ctaText: 'Explore ERP Lite'
    },
    awm: {
      id: 'awm',
      name: 'AWM Waste Management',
      shortLabel: 'AWM Recycling',
      icon: Recycle,
      accentColor: '#10b981',
      badge: 'Hardware & IoT Bridge',
      tagline: 'Industrial Weighbridge Automation & Material Recovery',
      description: 'Dedicated vertical solution purpose-built for scrapyards, recyclers, and waste management operators. Connects directly to physical scale indicators for tamper-proof weight capture.',
      highlights: [
        'Zero-Tamper RS232 / TCP-IP Weighbridge Automation',
        'Automated Inbound Gross & Outbound Tare Capture',
        'MRF Scrap Sorting, Mass Balance & Yield Calculation',
        'Driver Gate Passes & Pollution Board / EPR Tracking'
      ],
      pageRoute: 'awm',
      ctaText: 'Explore AWM Automation'
    },
    mart: {
      id: 'mart',
      name: 'Aasaan Mart',
      shortLabel: 'Aasaan Mart',
      icon: ShoppingBag,
      accentColor: '#fbbf24',
      badge: 'B2B Marketplace',
      tagline: 'Connected B2B Supply & Distribution Network',
      description: 'Unified business marketplace platform linking verified manufacturers, bulk suppliers, and retailers with synchronized live catalog pricing and order routing.',
      highlights: [
        'Direct B2B Buyer & Supplier Connectivity',
        'Automated Purchase Requisitions & Stock Sync',
        'Digital Product Catalog with Tiered Price Lists',
        'Streamlined Logistics & Bulk Order Tracking'
      ],
      pageRoute: null,
      ctaText: 'Schedule Mart Demo'
    }
  };

  const current = products[selectedProduct];
  const CurrentIcon = current.icon;

  const handleAction = () => {
    if (current.pageRoute && onNavigate) {
      onNavigate(current.pageRoute);
    } else if (onOpenDemo) {
      onOpenDemo(current.name);
    }
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '600px',
      background: '#0B1523',
      borderRadius: '16px',
      border: '1px solid rgba(56, 189, 248, 0.25)',
      boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px -10px rgba(30, 149, 211, 0.35)',
      overflow: 'hidden',
      color: '#ffffff',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
    }}>
      {/* Top Browser Chrome Bar */}
      <div style={{
        background: 'rgba(15, 23, 42, 0.95)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        {/* Window controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
          <div style={{
            background: 'rgba(255, 255, 255, 0.06)',
            borderRadius: '6px',
            padding: '3px 12px',
            marginLeft: '8px',
            fontSize: '11px',
            color: '#93c5fd',
            fontFamily: 'monospace',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Globe2 size={11} color="#38bdf8" />
            <span>aasaan.in/products</span>
          </div>
        </div>

        {/* Cloud Badge */}
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          background: 'rgba(56, 189, 248, 0.12)',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          color: '#38bdf8',
          padding: '2px 8px',
          borderRadius: '99px',
          fontSize: '10.5px',
          fontWeight: 700
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8' }} />
          OFFICIAL SUITE
        </span>
      </div>

      {/* Interactive Product Tabs */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        background: 'rgba(15, 23, 42, 0.6)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '6px'
      }}>
        {Object.values(products).map((p) => {
          const Icon = p.icon;
          const isSelected = selectedProduct === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedProduct(p.id)}
              style={{
                background: isSelected ? 'rgba(56, 189, 248, 0.16)' : 'transparent',
                border: isSelected ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid transparent',
                borderRadius: '8px',
                padding: '10px 4px',
                color: isSelected ? '#ffffff' : '#94a3b8',
                fontSize: '11.5px',
                fontWeight: isSelected ? 700 : 500,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5px',
                transition: 'all 0.15s ease',
                outline: 'none'
              }}
              onMouseEnter={(e) => {
                if (!isSelected) e.currentTarget.style.color = '#f1f5f9';
              }}
              onMouseLeave={(e) => {
                if (!isSelected) e.currentTarget.style.color = '#94a3b8';
              }}
            >
              <Icon size={16} color={isSelected ? p.accentColor : '#64748b'} />
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>
                {p.shortLabel}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Product Detail Card */}
      <div style={{ padding: '22px 24px', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                background: `${current.accentColor}20`,
                border: `1px solid ${current.accentColor}40`,
                borderRadius: '10px',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <CurrentIcon size={20} color={current.accentColor} />
              </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, margin: 0, color: '#ffffff' }}>
                  {current.name}
                </h3>
                <span style={{ fontSize: '11.5px', color: current.accentColor, fontWeight: 600 }}>
                  {current.badge}
                </span>
              </div>
            </div>
          </div>

          <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: 1.6, margin: '8px 0 14px' }}>
            {current.description}
          </p>

          {/* Core Feature Bullet Points */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.07)',
            borderRadius: '10px',
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Core Capabilities
            </div>
            {current.highlights.map((h, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: '#e2e8f0' }}>
                <CheckCircle2 size={14} color={current.accentColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation CTA */}
        <div style={{
          marginTop: '18px',
          paddingTop: '14px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <div style={{ fontSize: '11.5px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={13} color={current.accentColor} />
            <span>Click any product above to explore</span>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => onOpenDemo ? onOpenDemo(current.name) : null}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '8px',
                padding: '8px 14px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Request Demo
            </button>

            <button
              onClick={handleAction}
              style={{
                background: `linear-gradient(135deg, ${current.accentColor}dd 0%, #0284c7 100%)`,
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 16px',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 14px rgba(2, 132, 199, 0.4)',
                transition: 'transform 0.15s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <span>{current.ctaText}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
