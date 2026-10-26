import React, { useState } from 'react';
import {
  TrendingUp,
  Package,
  FileCheck,
  Scale,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Layers,
  ChevronRight,
  Play
} from 'lucide-react';

export default function InteractiveHeroDashboard({ onOpenDemo, onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [liveCounter, setLiveCounter] = useState(148290);
  const [invoicesCount, setInvoicesCount] = useState(42);

  const tabs = [
    { id: 'overview', label: 'Real-Time Ledger', icon: TrendingUp, color: '#38bdf8' },
    { id: 'inventory', label: 'Stock & Batches', icon: Package, color: '#34d399' },
    { id: 'einvoice', label: 'E-Invoicing & GST', icon: FileCheck, color: '#fbbf24' },
    { id: 'weighbridge', label: 'Weighbridge IoT', icon: Scale, color: '#a78bfa' }
  ];

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
      {/* Top Chrome / Window Bar */}
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
          <span style={{ marginLeft: '8px', fontSize: '11px', color: '#94a3b8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Activity size={12} color="#10b981" /> Aasaan Cloud OS v4.2 • Live Preview
          </span>
        </div>

        {/* Live sync pulse */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            color: '#34d399',
            padding: '2px 8px',
            borderRadius: '99px',
            fontSize: '10.5px',
            fontWeight: 700,
            letterSpacing: '0.04em'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 6px #34d399' }} />
            SYNCED
          </span>
        </div>
      </div>

      {/* Interactive Tabs Header */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        background: 'rgba(15, 23, 42, 0.6)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '4px'
      }}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: isActive ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                border: isActive ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid transparent',
                borderRadius: '8px',
                padding: '8px 6px',
                color: isActive ? '#ffffff' : '#94a3b8',
                fontSize: '11px',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                transition: 'all 0.2s ease',
                outline: 'none'
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = '#e2e8f0';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.color = '#94a3b8';
              }}
            >
              <Icon size={14} color={isActive ? tab.color : '#94a3b8'} />
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Interactive Body */}
      <div style={{ padding: '20px 22px', minHeight: '290px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        
        {/* TAB 1: REAL-TIME LEDGER */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94a3b8', fontWeight: 700 }}>
                  Today's Gross Billing
                </div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginTop: '2px' }}>
                  ₹{(liveCounter).toLocaleString('en-IN')}.00
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <TrendingUp size={12} /> +18.4% MoM
                </span>
              </div>
            </div>

            {/* Quick mini ledger entries */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '10px', padding: '12px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                <span>Latest Production Postings</span>
                <span>Audit Status</span>
              </div>
              {[
                { ref: 'INV-2026-884', party: 'Tata Motors Pune Plant', amt: '₹42,850', tag: 'E-Way Verified', ok: true },
                { ref: 'GRN-4019-B', party: 'JSW Steel Scrap Intake', amt: '₹78,400', tag: 'QC Approved', ok: true },
                { ref: 'WO-5510-DIS', party: 'Auto Components Export', amt: '₹27,040', tag: 'Dispatched', ok: true }
              ].map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '7px 0',
                  borderBottom: idx < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  fontSize: '12px'
                }}>
                  <div>
                    <div style={{ fontWeight: 700, color: '#e2e8f0' }}>{item.party}</div>
                    <div style={{ fontSize: '10px', color: '#64748b' }}>{item.ref}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 700, color: '#38bdf8' }}>{item.amt}</div>
                    <div style={{ fontSize: '10px', color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '3px' }}>
                      <CheckCircle2 size={10} /> {item.tag}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: INVENTORY & STOCK */}
        {activeTab === 'inventory' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94a3b8', fontWeight: 700 }}>
                  Central Warehouse Valuation
                </div>
                <div style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff' }}>
                  ₹1,84,30,000 <span style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 500 }}>(FIFO Basis)</span>
                </div>
              </div>
              <span style={{ background: 'rgba(52, 211, 153, 0.15)', color: '#34d399', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 700 }}>
                100% Reconciled
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              {[
                { title: 'Active SKUs', val: '4,820', note: 'Multi-Bin Mapped' },
                { title: 'Reorder Alerts', val: '0', note: 'Optimal Safety' },
                { title: 'Batch Trace', val: '< 2s', note: 'QR Barcoded' }
              ].map((m, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '10px 8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase' }}>{m.title}</div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#34d399', margin: '3px 0' }}>{m.val}</div>
                  <div style={{ fontSize: '9.5px', color: '#64748b' }}>{m.note}</div>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.2)', borderRadius: '8px', padding: '8px 12px', fontSize: '11px', color: '#bae6fd', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} color="#38bdf8" />
              <span>Auto-locks dispatches if inventory hits minimum safety limit.</span>
            </div>
          </div>
        )}

        {/* TAB 3: E-INVOICING & GST */}
        {activeTab === 'einvoice' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94a3b8', fontWeight: 700 }}>
                  Govt. Portal Sync Status
                </div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  IRP Direct API Linked <CheckCircle2 size={18} color="#10b981" />
                </div>
              </div>
              <span style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 700 }}>
                NIC Auto-Signing
              </span>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'IRN & QR Code Gen Time', value: '450ms', ok: true },
                { label: 'Automated E-Way Bill Dispatch', value: 'Instant via GSTN', ok: true },
                { label: 'GSTR-1 / 3B Reconciliation', value: '0% Mismatch Gap', ok: true }
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', padding: '4px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <span style={{ color: '#cbd5e1' }}>{row.label}</span>
                  <span style={{ fontWeight: 700, color: '#fbbf24' }}>{row.value}</span>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', fontSize: '11px', color: '#94a3b8' }}>
              Generates compliant statutory invoices with embedded Class 3 DSC tokens.
            </div>
          </div>
        )}

        {/* TAB 4: WEIGHBRIDGE IOT */}
        {activeTab === 'weighbridge' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94a3b8', fontWeight: 700 }}>
                  Yard Terminal #01 (RS232 / TCP-IP)
                </div>
                <div style={{ fontSize: '26px', fontWeight: 800, color: '#a78bfa' }}>
                  32,480 KG <span style={{ fontSize: '13px', color: '#94a3b8' }}>(Gross Stabilized)</span>
                </div>
              </div>
              <span style={{ background: 'rgba(167, 139, 250, 0.15)', color: '#c4b5fd', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 700 }}>
                Indicator Active
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '10px' }}>
                <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase' }}>Vehicle Tag</div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>MH-12-QE-9481</div>
                <div style={{ fontSize: '10px', color: '#10b981', marginTop: '2px' }}>RFID Yard Gate Cleared</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '10px' }}>
                <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase' }}>CCTV Snapshot</div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#38bdf8', marginTop: '2px' }}>Plate Auto-Matched</div>
                <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '2px' }}>Confidence: 99.4%</div>
              </div>
            </div>

            <div style={{ background: 'rgba(167, 139, 250, 0.1)', border: '1px solid rgba(167, 139, 250, 0.3)', borderRadius: '8px', padding: '8px 12px', fontSize: '11px', color: '#e9d5ff', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Scale size={16} color="#c4b5fd" />
              <span>Zero manual entry tampering: indicator gross & net are cloud-locked.</span>
            </div>
          </div>
        )}

        {/* Action Bar Footer */}
        <div style={{
          marginTop: '16px',
          paddingTop: '14px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <div style={{ fontSize: '11.5px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={13} color="#38bdf8" />
            <span>Interactive Simulator • Click tabs to test</span>
          </div>

          <button
            onClick={() => onOpenDemo ? onOpenDemo() : null}
            style={{
              background: 'linear-gradient(135deg, #1e95d3 0%, #0d6ea0 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 16px',
              fontSize: '12.5px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 14px rgba(30, 149, 211, 0.4)',
              transition: 'transform 0.15s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <span>Try Live Simulator</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
}
