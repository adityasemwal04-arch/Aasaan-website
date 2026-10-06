import React, { useState } from 'react';
import { liveTimelineFeed } from '../data/erpEvents';
import { Clock, Filter, CheckCircle, ArrowUpRight, Search } from 'lucide-react';

export default function RealTimeTimeline() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Sales', 'Inventory', 'Finance', 'Manufacturing', 'AWM Waste'];

  const filteredItems = selectedFilter === 'All'
    ? liveTimelineFeed
    : liveTimelineFeed.filter((item) => item.dept.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <section className="section-pad bg-grid" style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className="badge-pill badge-orange">
                <Clock size={12} /> Granular Audit Trail
              </span>
            </div>
            <h2>See your business as it happens.</h2>
            <p style={{ fontSize: '17.5px', color: 'var(--text-muted)', marginTop: '10px', maxWidth: '640px' }}>
              Every transaction, bin lift, weighbridge pass, and invoice posting generates a live tamper-evident log across your company.
            </p>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                style={{
                  background: selectedFilter === f ? 'var(--primary-blue)' : '#FFFFFF',
                  color: selectedFilter === f ? '#FFFFFF' : 'var(--text-muted)',
                  border: `1px solid ${selectedFilter === f ? 'var(--primary-blue)' : 'var(--border-medium)'}`,
                  borderRadius: '999px',
                  padding: '6px 16px',
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

        {/* Timeline Event Feed Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredItems.map((evt) => (
            <div
              key={evt.id}
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--border-subtle)',
                borderRadius: '14px',
                padding: '18px 24px',
                display: 'grid',
                gridTemplateColumns: '100px 140px 1fr auto',
                alignItems: 'center',
                gap: '20px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                transition: 'transform 0.15s ease, border-color 0.15s ease'
              }}
              className="timeline-row"
            >
              {/* Time Stamp */}
              <div className="mono" style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600 }}>
                {evt.time}
              </div>

              {/* Department Badge */}
              <div>
                <span style={{
                  display: 'inline-block',
                  background: '#EFF6FF',
                  color: 'var(--primary-blue)',
                  border: '1px solid var(--primary-blue-border)',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-mono)'
                }}>
                  {evt.dept}
                </span>
              </div>

              {/* Title & Operational Narrative */}
              <div>
                <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-main)' }}>
                  {evt.title}
                </div>
                <div style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '2px' }}>
                  <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{evt.entity}</span> — {evt.detail}
                </div>
              </div>

              {/* Value & Status */}
              <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                <span className="mono" style={{ fontSize: '15px', fontWeight: 700, color: 'var(--accent-orange)' }}>
                  {evt.value}
                </span>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#059669',
                  background: '#ECFDF5',
                  padding: '1px 8px',
                  borderRadius: '4px'
                }}>
                  <CheckCircle size={10} /> {evt.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-row {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
