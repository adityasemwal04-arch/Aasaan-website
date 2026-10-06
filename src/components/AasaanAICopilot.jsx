import React, { useState } from 'react';
import { aiScenarios } from '../data/aiScenarios';
import { Sparkles, Bot, User, Check, ArrowRight, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function AasaanAICopilot({ onOpenDemo }) {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [executedAction, setExecutedAction] = useState(null);

  const scenario = aiScenarios[selectedScenarioIndex];

  const handleExecute = () => {
    setExecutedAction(scenario.aiResponse.actionConfirm);
    setTimeout(() => {
      // Keep confirmed message visible
    }, 4000);
  };

  const handleSelectScenario = (idx) => {
    setSelectedScenarioIndex(idx);
    setExecutedAction(null);
  };

  return (
    <section id="aasaan-ai" className="section-pad bg-dark-enterprise" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background ambient lighting */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '20%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(29, 78, 216, 0.22) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '15%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="badge-pill" style={{
              background: 'rgba(249, 115, 22, 0.15)',
              color: '#FB923C',
              border: '1px solid rgba(249, 115, 22, 0.3)'
            }}>
              <Sparkles size={12} /> Embedded Intelligence — Not A Robot Gimmick
            </span>
          </div>
          <h2 style={{ color: '#FFFFFF' }}>AI that solves tangible business problems.</h2>
          <p style={{ fontSize: '18px', color: '#94A3B8', marginTop: '12px' }}>
            Ask questions in plain English or conversational chat. Aasaan AI scans live transactional data, identifies operational risks, and creates 1-click executable actions.
          </p>
        </div>

        {/* 2-Column AI Simulator */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 320px) minmax(0, 1fr)',
          gap: '32px',
          alignItems: 'start'
        }} className="ai-grid">
          
          {/* Left Column: Preset Business Inquiries */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
              Select Simulated Scenario:
            </div>
            {aiScenarios.map((scen, idx) => {
              const isSelected = idx === selectedScenarioIndex;
              return (
                <button
                  key={scen.id}
                  onClick={() => handleSelectScenario(idx)}
                  style={{
                    background: isSelected ? 'rgba(29, 78, 216, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                    border: isSelected ? '1.5px solid #3B82F6' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '14px',
                    padding: '16px 20px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: isSelected ? '#FFFFFF' : '#94A3B8',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '15px', color: isSelected ? '#93C5FD' : '#E2E8F0', marginBottom: '6px' }}>
                    {scen.name}
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#94A3B8', fontStyle: 'italic', lineHeight: 1.4 }}>
                    "{scen.userPrompt}"
                  </div>
                </button>
              );
            })}

            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px dashed rgba(255,255,255,0.15)',
              borderRadius: '12px',
              padding: '14px',
              fontSize: '12.5px',
              color: '#64748B',
              marginTop: '10px'
            }}>
              💡 Powered by Aasaan NLP: supports English, Hindi voice queries, and WhatsApp conversational prompts.
            </div>
          </div>

          {/* Right Column: Conversational Terminal */}
          <div style={{
            background: '#111827',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 25px 60px -15px rgba(0,0,0,0.5)'
          }}>
            
            {/* Terminal Header */}
            <div style={{
              background: '#1F2937',
              padding: '14px 20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, #1D4ED8 0%, #F97316 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}>
                  <Sparkles size={14} />
                </div>
                <span style={{ fontWeight: 700, fontSize: '14px', color: '#FFFFFF' }}>
                  Aasaan Copilot Terminal
                </span>
                <span style={{
                  fontSize: '11px',
                  color: '#34D399',
                  background: 'rgba(52, 211, 153, 0.15)',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontWeight: 600
                }}>
                  Live Data Connected
                </span>
              </div>

              <span className="mono" style={{ fontSize: '12px', color: '#9CA3AF' }}>
                Engine: v4.2 ERP-LLM
              </span>
            </div>

            {/* Conversation Flow */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* User Prompt */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#374151',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E5E7EB',
                  flexShrink: 0
                }}>
                  <User size={16} />
                </div>
                <div style={{
                  background: '#1F2937',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  fontSize: '15px',
                  color: '#F9FAFB',
                  fontWeight: 500,
                  maxWidth: '85%'
                }}>
                  "{scenario.userPrompt}"
                </div>
              </div>

              {/* AI Response */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#1D4ED8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0
                }}>
                  <Bot size={16} />
                </div>
                <div style={{
                  background: 'rgba(31, 41, 55, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '18px 20px',
                  borderRadius: '14px',
                  fontSize: '14.5px',
                  color: '#E5E7EB',
                  lineHeight: 1.5,
                  width: '100%'
                }}>
                  <p style={{ marginBottom: '16px', color: '#D1D5DB' }}>
                    {scenario.aiResponse.summary}
                  </p>

                  {/* Diagnostic Table */}
                  <div style={{
                    background: '#111827',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '10px',
                    overflowX: 'auto',
                    marginBottom: '16px'
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', color: '#9CA3AF' }}>
                          <th style={{ padding: '10px 14px' }}>Item / Account</th>
                          <th style={{ padding: '10px 14px' }}>Status / Level</th>
                          <th style={{ padding: '10px 14px' }}>Velocity / Drag</th>
                          <th style={{ padding: '10px 14px' }}>Runway</th>
                          <th style={{ padding: '10px 14px' }}>Priority</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scenario.aiResponse.items.map((it, idx) => (
                          <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                            <td style={{ padding: '10px 14px', fontWeight: 600, color: '#F9FAFB' }}>{it.name}</td>
                            <td className="mono" style={{ padding: '10px 14px', color: '#93C5FD' }}>{it.currentStock}</td>
                            <td style={{ padding: '10px 14px', color: '#9CA3AF' }}>{it.dailyRunRate}</td>
                            <td className="mono" style={{ padding: '10px 14px', color: '#FCD34D' }}>{it.daysRemaining}</td>
                            <td style={{ padding: '10px 14px' }}>
                              <span style={{
                                fontSize: '10.5px',
                                fontWeight: 700,
                                padding: '2px 8px',
                                borderRadius: '4px',
                                background: it.status === 'CRITICAL' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                                color: it.status === 'CRITICAL' ? '#F87171' : '#FBBF24'
                              }}>
                                {it.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Recommendation Box */}
                  <div style={{
                    background: 'rgba(249, 115, 22, 0.1)',
                    border: '1px solid rgba(249, 115, 22, 0.3)',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    fontSize: '13.5px',
                    color: '#FDBA74',
                    marginBottom: '16px'
                  }}>
                    {scenario.aiResponse.recommendation}
                  </div>

                  {/* Action Trigger Button */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                    <button
                      onClick={handleExecute}
                      className="btn btn-orange btn-sm"
                      style={{ padding: '8px 18px', fontSize: '13.5px' }}
                    >
                      <Sparkles size={14} />
                      <span>{scenario.aiResponse.actionLabel}</span>
                    </button>

                    {executedAction && (
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        color: '#34D399',
                        fontWeight: 600
                      }}>
                        <Check size={16} />
                        <span>{executedAction}</span>
                      </div>
                    )}
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .ai-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
