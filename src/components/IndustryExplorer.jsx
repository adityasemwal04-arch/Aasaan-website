import React, { useState } from 'react';
import { industriesData } from '../data/industriesData';
import { Factory, Recycle, Truck, Store, Briefcase, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export default function IndustryExplorer({ onOpenDemo }) {
  const [selectedIndustryId, setSelectedIndustryId] = useState('waste'); // Highlight AWM flagship by default or manufacturing

  const currentInd = industriesData.find((i) => i.id === selectedIndustryId) || industriesData[0];

  const iconMap = {
    manufacturing: Factory,
    waste: Recycle,
    distribution: Truck,
    retail: Store,
    services: Briefcase,
    trading: TrendingUp
  };

  return (
    <section id="industries" className="section-pad" style={{ background: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="badge-pill badge-blue">Tailored Operational Architectures</span>
          </div>
          <h2>Pick your industry. See the difference.</h2>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginTop: '12px' }}>
            Instead of forcing every company into a one-size-fits-all mold, Aasaan configures its connected core around the exact physics of your business.
          </p>
        </div>

        {/* Industry Pill Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '44px'
        }}>
          {industriesData.map((ind) => {
            const Icon = iconMap[ind.id] || Factory;
            const isSelected = ind.id === selectedIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustryId(ind.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '12px',
                  border: isSelected ? '1.5px solid var(--primary-blue)' : '1px solid var(--border-medium)',
                  background: isSelected ? 'var(--primary-blue)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--text-body)',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '0 4px 14px rgba(29, 78, 216, 0.25)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={16} color={isSelected ? '#FFFFFF' : 'var(--primary-blue)'} />
                <span>{ind.name}</span>
                {ind.id === 'waste' && (
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    background: isSelected ? 'var(--accent-orange)' : 'var(--accent-orange-soft)',
                    color: isSelected ? '#FFFFFF' : 'var(--accent-orange)',
                    padding: '2px 6px',
                    borderRadius: '4px'
                  }}>
                    AWM
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Industry Display Card */}
        <div style={{
          background: 'var(--surface-subtle)',
          border: '1px solid var(--border-medium)',
          borderRadius: '24px',
          padding: 'clamp(24px, 4vw, 44px)',
          boxShadow: '0 8px 30px -10px rgba(15, 23, 42, 0.06)'
        }}>
          
          {/* Card Top Banner */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            paddingBottom: '32px',
            borderBottom: '1px solid var(--border-medium)'
          }}>
            <div style={{ maxWidth: '680px' }}>
              <span className="badge-pill badge-orange" style={{ marginBottom: '10px' }}>
                {currentInd.badge}
              </span>
              <h3 style={{ fontSize: '26px', fontWeight: 800, marginTop: '8px' }}>
                {currentInd.name} Workflow
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginTop: '8px' }}>
                {currentInd.overview}
              </p>
            </div>

            {/* KPI Badge */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--border-medium)',
              borderRadius: '16px',
              padding: '16px 24px',
              minWidth: '220px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
            }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Impact Benchmark
              </div>
              <div className="mono" style={{ fontSize: '24px', fontWeight: 800, color: 'var(--accent-orange)', marginTop: '4px' }}>
                {currentInd.kpi.metric}
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginTop: '2px' }}>
                {currentInd.kpi.sub}
              </div>
            </div>
          </div>

          {/* Operational Pipeline Flow Diagram */}
          <div style={{ margin: '36px 0' }}>
            <h4 style={{ fontSize: '15px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '20px' }}>
              Connected Operational Stages:
            </h4>

            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${currentInd.stages.length}, minmax(0, 1fr))`,
              gap: '16px'
            }} className="stages-grid">
              {currentInd.stages.map((stage, i) => (
                <div
                  key={stage.id}
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid var(--border-subtle)',
                    borderRadius: '14px',
                    padding: '20px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '14px',
                    position: 'relative'
                  }}
                >
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '10px'
                    }}>
                      <span className="mono" style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: 'var(--primary-blue)',
                        background: '#EFF6FF',
                        padding: '2px 8px',
                        borderRadius: '4px'
                      }}>
                        Phase 0{i + 1}
                      </span>
                    </div>

                    <div style={{ fontWeight: 700, fontSize: '15.5px', color: 'var(--text-main)', marginBottom: '6px' }}>
                      {stage.title}
                    </div>

                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                      {stage.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Module Capabilities & Action */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            paddingTop: '24px',
            borderTop: '1px solid var(--border-medium)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px 16px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
                Active Capabilities:
              </span>
              {currentInd.features.map((feat, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '13px',
                    color: 'var(--text-body)',
                    background: '#FFFFFF',
                    border: '1px solid var(--border-subtle)',
                    padding: '4px 10px',
                    borderRadius: '6px'
                  }}
                >
                  <CheckCircle2 size={13} color="var(--primary-blue)" /> {feat}
                </span>
              ))}
            </div>

            <button onClick={onOpenDemo} className="btn btn-primary btn-sm" style={{ padding: '10px 18px' }}>
              <span>Request {currentInd.name} Demo</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .stages-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
