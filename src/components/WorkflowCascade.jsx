import React, { useState } from 'react';
import { orderLifecycleWorkflow } from '../data/erpEvents';
import { CheckCircle2, ChevronRight, FileText, ArrowRight, CornerDownRight, Zap } from 'lucide-react';

export default function WorkflowCascade() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const activeStep = orderLifecycleWorkflow[currentStepIndex];

  return (
    <section id="workflow-cascade" className="section-pad" style={{ background: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '56px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="badge-pill badge-blue">
              <Zap size={12} /> The Ripple Effect of One Transaction
            </span>
          </div>
          <h2>Everything talks to everything.</h2>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginTop: '14px' }}>
            In traditional systems, one sales order requires 4 people typing data across 4 disconnected tools. In Aasaan, a single action cascades across your entire company instantaneously.
          </p>
        </div>

        {/* 2-Column Interactive Workflow Simulator */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
          gap: '48px',
          alignItems: 'start'
        }} className="cascade-grid">
          
          {/* Left Column: Interactive Stepper Sequence */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {orderLifecycleWorkflow.map((item, idx) => {
              const isCurrent = idx === currentStepIndex;
              const isPast = idx < currentStepIndex;

              return (
                <div
                  key={item.step}
                  onClick={() => setCurrentStepIndex(idx)}
                  style={{
                    cursor: 'pointer',
                    padding: '20px 24px',
                    borderRadius: '16px',
                    border: isCurrent
                      ? '2px solid var(--accent-orange)'
                      : isPast
                      ? '1.5px solid var(--border-medium)'
                      : '1.5px solid var(--border-subtle)',
                    background: isCurrent
                      ? 'var(--accent-orange-soft)'
                      : isPast
                      ? '#FFFFFF'
                      : '#FAFCFF',
                    transition: 'all 0.25s ease',
                    boxShadow: isCurrent ? '0 8px 24px -6px rgba(249, 115, 22, 0.2)' : 'none',
                    position: 'relative'
                  }}
                >
                  {/* Step metadata */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span className="mono" style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: isCurrent ? 'var(--accent-orange)' : 'var(--text-faint)'
                      }}>
                        {item.time}
                      </span>
                      <span style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: isCurrent ? '#FFFFFF' : '#EFF6FF',
                        color: 'var(--primary-blue)',
                        border: '1px solid var(--border-subtle)'
                      }}>
                        {item.dept}
                      </span>
                    </div>

                    <span className="mono" style={{
                      fontSize: '11.5px',
                      fontWeight: 600,
                      color: isCurrent ? 'var(--accent-orange)' : 'var(--text-muted)'
                    }}>
                      Step 0{item.step}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '19px',
                    fontWeight: 700,
                    color: isCurrent ? 'var(--text-main)' : '#475569',
                    marginBottom: '8px'
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '14.5px',
                    color: isCurrent ? 'var(--text-body)' : 'var(--text-muted)',
                    lineHeight: 1.5
                  }}>
                    {item.description}
                  </p>

                  {/* Active Indicator Arrow */}
                  {isCurrent && (
                    <div style={{
                      position: 'absolute',
                      right: '-12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '24px',
                      height: '24px',
                      background: 'var(--accent-orange)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      boxShadow: '0 2px 8px rgba(249, 115, 22, 0.4)'
                    }} className="step-arrow">
                      <ChevronRight size={16} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Synchronized Department Console */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div style={{
              background: '#0B1329',
              color: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 25px 60px -15px rgba(11, 19, 41, 0.35)',
              overflow: 'hidden'
            }}>
              
              {/* Console Window Header */}
              <div style={{
                background: '#131F3F',
                padding: '16px 20px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#94A3B8',
                    marginLeft: '8px',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    aasaan://terminal/{activeStep.dept.toLowerCase().replace(/[^a-z]/g, '-')}
                  </span>
                </div>

                <span className="mono" style={{
                  fontSize: '11px',
                  background: 'rgba(249, 115, 22, 0.2)',
                  color: '#FB923C',
                  border: '1px solid rgba(249, 115, 22, 0.4)',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  fontWeight: 700
                }}>
                  {activeStep.badge}
                </span>
              </div>

              {/* Department View Title */}
              <div style={{ padding: '24px 24px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '12px', color: '#93C5FD', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Live System Inspector
                </div>
                <h4 style={{ fontSize: '20px', color: '#FFFFFF', marginTop: '4px', fontWeight: 700 }}>
                  {activeStep.panelTitle}
                </h4>
              </div>

              {/* Document Key-Value Grid */}
              <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {Object.entries(activeStep.panelData).map(([key, value]) => {
                  const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
                  return (
                    <div
                      key={key}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '140px 1fr',
                        gap: '16px',
                        alignItems: 'baseline',
                        paddingBottom: '10px',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        fontSize: '13.5px'
                      }}
                    >
                      <span style={{ color: '#94A3B8', fontWeight: 500 }}>{formattedKey}</span>
                      <span className="mono" style={{
                        color: key === 'status' ? '#34D399' : key.includes('amount') || key.includes('receivable') || key.includes('today') ? '#FB923C' : '#F1F5F9',
                        fontWeight: 600
                      }}>
                        {value}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Automated Next Action Footer */}
              <div style={{
                background: 'rgba(29, 78, 216, 0.15)',
                borderTop: '1px solid rgba(29, 78, 216, 0.3)',
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#BFDBFE' }}>
                  <CornerDownRight size={14} color="#60A5FA" />
                  <span>Next: Automatic sync with remaining departments</span>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => setCurrentStepIndex((i) => Math.max(0, i - 1))}
                    disabled={currentStepIndex === 0}
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: 'none',
                      color: currentStepIndex === 0 ? '#475569' : '#FFFFFF',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      cursor: currentStepIndex === 0 ? 'not-allowed' : 'pointer'
                    }}
                  >
                    Prev
                  </button>
                  <button
                    onClick={() => setCurrentStepIndex((i) => Math.min(orderLifecycleWorkflow.length - 1, i + 1))}
                    disabled={currentStepIndex === orderLifecycleWorkflow.length - 1}
                    style={{
                      background: '#1D4ED8',
                      border: 'none',
                      color: '#FFFFFF',
                      padding: '4px 12px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: currentStepIndex === orderLifecycleWorkflow.length - 1 ? 'not-allowed' : 'pointer'
                    }}
                  >
                    Next Step
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .cascade-grid {
            grid-template-columns: 1fr !important;
          }
          .step-arrow { display: none !important; }
        }
      `}</style>
    </section>
  );
}
