import React, { useState } from 'react';
import { Unlink, Link2, AlertCircle, CheckCircle, ArrowRight, ShieldAlert, Zap } from 'lucide-react';

export default function SiloComparison() {
  const [activeMode, setActiveMode] = useState('with'); // 'with' or 'without'

  const disconnectedItems = [
    { tool: 'Excel Spreadsheets', role: 'Sales Orders', pain: 'Manual double entry, out-of-date pricing sheets, lost revisions.' },
    { tool: 'Standalone Inventory App', role: 'Stock & Batches', pain: 'Warehouse counts never match sales promises, frequent stockouts.' },
    { tool: 'Separate Accounting Software', role: 'Finance & GST', pain: 'Accountants re-typing paper invoices 10 days after shipment.' },
    { tool: 'Email & WhatsApp Threads', role: 'Procurement', pain: 'PO approvals get lost in inboxes, zero bulk volume discount tracking.' },
    { tool: 'Manual Monthly Exports', role: 'Executive Reports', pain: 'Management makes decisions on 3-week-old retrospective data.' }
  ];

  const connectedItems = [
    { tool: 'Aasaan Sales Console', role: 'Sales Orders', benefit: 'Customer orders reserve stock instantly with automated credit limits.' },
    { tool: 'Aasaan Unified Inventory', role: 'Stock & Batches', benefit: 'Real-time multi-depot counts with automated reorder trigger algorithms.' },
    { tool: 'Aasaan General Ledger', role: 'Finance & GST', benefit: 'Invoices post directly to P&L and GST E-way portal with zero human touch.' },
    { tool: 'Aasaan Procurement Engine', role: 'Procurement', benefit: 'Shortfalls auto-generate POs to preferred vendor rate contracts.' },
    { tool: 'Aasaan Executive Pulse', role: 'Executive Reports', benefit: 'Live margin, cashflow, and fulfillment telemetry updated by the second.' }
  ];

  return (
    <section id="zero-silos" className="section-pad" style={{ background: '#FAFBFD' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="badge-pill badge-orange">
              <Zap size={12} /> The Fundamental ERP Architecture Shift
            </span>
          </div>
          <h2>One system. Zero silos.</h2>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginTop: '12px' }}>
            Why do growing companies replace their tools? Because running a business across 5 disconnected software stacks wastes 20% of your team's productive time carrying data back and forth.
          </p>

          {/* Interactive Switcher */}
          <div style={{
            display: 'inline-flex',
            background: '#FFFFFF',
            border: '1.5px solid var(--border-medium)',
            borderRadius: '12px',
            padding: '4px',
            marginTop: '28px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
          }}>
            <button
              onClick={() => setActiveMode('without')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '8px',
                border: 'none',
                background: activeMode === 'without' ? '#EF4444' : 'transparent',
                color: activeMode === 'without' ? '#FFFFFF' : 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <Unlink size={15} />
              <span>Without Aasaan (Legacy Chaos)</span>
            </button>

            <button
              onClick={() => setActiveMode('with')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '8px',
                border: 'none',
                background: activeMode === 'with' ? 'var(--primary-blue)' : 'transparent',
                color: activeMode === 'with' ? '#FFFFFF' : 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <Link2 size={15} />
              <span>With Aasaan (Connected Core)</span>
            </button>
          </div>
        </div>

        {/* Visual Stack Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginBottom: '32px'
        }}>
          {(activeMode === 'without' ? disconnectedItems : connectedItems).map((card, i) => (
            <div
              key={i}
              style={{
                background: '#FFFFFF',
                border: activeMode === 'without' ? '1.5px dashed #FCA5A5' : '1.5px solid var(--primary-blue-border)',
                borderRadius: '16px',
                padding: '24px 20px',
                boxShadow: '0 4px 16px -4px rgba(15, 23, 42, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '210px',
                transition: 'all 0.25s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: activeMode === 'without' ? '#DC2626' : 'var(--primary-blue)',
                    background: activeMode === 'without' ? '#FEF2F2' : '#EFF6FF',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}>
                    {card.role}
                  </span>
                  {activeMode === 'without' ? (
                    <AlertCircle size={16} color="#EF4444" />
                  ) : (
                    <CheckCircle size={16} color="#10B981" />
                  )}
                </div>

                <h4 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                  {card.tool}
                </h4>

                <p style={{
                  fontSize: '13.5px',
                  color: activeMode === 'without' ? '#7F1D1D' : 'var(--text-muted)',
                  lineHeight: 1.45
                }}>
                  {activeMode === 'without' ? card.pain : card.benefit}
                </p>
              </div>

              <div style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '12px',
                fontSize: '12px',
                fontWeight: 600,
                color: activeMode === 'without' ? '#EF4444' : '#059669',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                {activeMode === 'without' ? '⚠️ Siloed & Disconnected' : '⚡ 100% Real-Time Synced'}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Comparison Summary Strip */}
        <div style={{
          background: activeMode === 'without' ? '#FEF2F2' : '#EFF6FF',
          border: `1px solid ${activeMode === 'without' ? '#FCA5A5' : 'var(--primary-blue-border)'}`,
          borderRadius: '16px',
          padding: '20px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{
              fontSize: '22px'
            }}>
              {activeMode === 'without' ? '❌' : '✅'}
            </span>
            <div>
              <div style={{
                fontWeight: 700,
                fontSize: '15.5px',
                color: activeMode === 'without' ? '#991B1B' : 'var(--primary-blue)'
              }}>
                {activeMode === 'without'
                  ? 'The Result: 18-24 hours wasted weekly reconciliation, inventory mismatch, duplicate data.'
                  : 'The Result: Instant visibility, zero duplicate entry, single source of truth across all branches.'}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>
                {activeMode === 'without'
                  ? 'Decisions based on delayed gut feeling.'
                  : 'Decisions backed by live operational facts.'}
              </div>
            </div>
          </div>

          <a href="#workflow-cascade" className="btn btn-ghost btn-sm">
            <span>See How Data Flows in Aasaan</span>
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
