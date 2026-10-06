import React, { useState, useEffect } from 'react';
import { heroDepartments } from '../data/erpEvents';
import { Play, Pause, RefreshCw, ArrowRight, ShieldCheck, Activity, Layers, Zap } from 'lucide-react';

export default function HeroConnectedCore({ onOpenDemo }) {
  const [activeDeptId, setActiveDeptId] = useState('sales');
  const [isPlaying, setIsPlaying] = useState(true);
  const [pulseKey, setPulseKey] = useState(0);

  const cx = 400;
  const cy = 280;

  // Auto cycle through departments every 3.8s
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveDeptId((current) => {
        const idx = heroDepartments.findIndex((d) => d.id === current);
        const nextIdx = (idx + 1) % heroDepartments.length;
        return heroDepartments[nextIdx].id;
      });
      setPulseKey((k) => k + 1);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeDept = heroDepartments.find((d) => d.id === activeDeptId) || heroDepartments[0];

  const handleNodeClick = (id) => {
    setActiveDeptId(id);
    setPulseKey((k) => k + 1);
  };

  return (
    <section id="connected-core" className="section-pad bg-grid" style={{ paddingTop: '130px', position: 'relative' }}>
      <div className="container">
        
        {/* Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span className="badge-pill badge-blue">
              <span className="live-indicator" /> Next-Gen Enterprise Architecture
            </span>
            <span className="badge-pill badge-orange">
              Cloud & On-Premises (AWS Powered)
            </span>
          </div>

          <h1>
            Your entire business. <span style={{ color: 'var(--primary-blue)' }}>Connected.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(17px, 2.2vw, 20px)',
            color: 'var(--text-muted)',
            marginTop: '20px',
            lineHeight: 1.5,
            fontWeight: 400
          }}>
            Instead of fragmented software and manual data entry, Aasaan acts as the <strong>central nervous system</strong> of your enterprise — coordinating sales, inventory, finance, production, and waste logistics in real time.
          </p>

          {/* Action Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '32px',
            flexWrap: 'wrap'
          }}>
            <button onClick={onOpenDemo} className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '16px' }}>
              <span>Schedule an Architecture Demo</span>
              <ArrowRight size={16} />
            </button>
            <a href="#workflow-cascade" className="btn btn-ghost" style={{ padding: '14px 28px', fontSize: '16px' }}>
              <span>Follow an Order Workflow</span>
            </a>
          </div>
        </div>

        {/* The Central Nervous System Visual Canvas */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid var(--border-medium)',
          borderRadius: '24px',
          boxShadow: '0 20px 50px -10px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(15, 23, 42, 0.05)',
          overflow: 'hidden',
          position: 'relative'
        }}>
          
          {/* Canvas Top Bar Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 24px',
            borderBottom: '1px solid var(--border-subtle)',
            background: '#FAFBFD',
            fontSize: '13px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: 'var(--text-main)' }}>
                <span className="live-indicator" /> Live Business Telemetry Stream
              </span>
              <span style={{ color: 'var(--text-faint)' }}>|</span>
              <span style={{ color: 'var(--text-muted)' }}>
                Click any department node below to trigger real-time data flow
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: isPlaying ? '#EFF6FF' : '#FFFFFF',
                  color: isPlaying ? 'var(--primary-blue)' : 'var(--text-muted)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                <span>{isPlaying ? 'Auto-Simulating' : 'Paused'}</span>
              </button>
            </div>
          </div>

          {/* SVG Diagram Canvas */}
          <div style={{ padding: '20px 10px 10px', position: 'relative' }}>
            <svg
              viewBox="0 0 800 560"
              style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '560px' }}
              aria-label="Aasaan Central Nervous System diagram connecting sales, inventory, procurement, finance, manufacturing, and waste logistics"
            >
              <defs>
                {/* Glow Filter */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="nodeGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Hub Gradient */}
                <linearGradient id="hubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E3A8A" />
                  <stop offset="50%" stopColor="#1D4ED8" />
                  <stop offset="100%" stopColor="#0B1329" />
                </linearGradient>

                {/* Active vector gradient */}
                <linearGradient id="activeStream" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
              </defs>

              {/* Orbital Telemetry Rings around Hub */}
              <circle cx={cx} cy={cy} r="180" fill="none" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 6" opacity="0.7" />
              <circle cx={cx} cy={cy} r="110" fill="none" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="6 8" opacity="0.8" />
              <circle
                cx={cx}
                cy={cy}
                r="78"
                fill="none"
                stroke="var(--accent-orange)"
                strokeWidth="2"
                strokeDasharray="12 12"
                opacity="0.35"
                style={{
                  animation: 'spin 20s linear infinite',
                  transformOrigin: `${cx}px ${cy}px`
                }}
              />

              {/* Connecting Vector Splines */}
              {heroDepartments.map((dept) => {
                const isActive = dept.id === activeDeptId;
                // Calculate curved control point
                const mx = (dept.x + cx) / 2;
                const my = (dept.y + cy) / 2;
                const dx = cx - dept.x;
                const dy = cy - dept.y;
                const curveFactor = dept.y < cy ? -25 : 25;
                const qx = mx - (dy / Math.hypot(dx, dy)) * curveFactor;
                const qy = my + (dx / Math.hypot(dx, dy)) * curveFactor;
                const pathD = `M ${dept.x} ${dept.y} Q ${qx} ${qy} ${cx} ${cy}`;

                return (
                  <g key={`wire-${dept.id}`}>
                    {/* Background track line */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke={isActive ? 'var(--primary-blue)' : '#E2E8F0'}
                      strokeWidth={isActive ? '2.5' : '1.5'}
                      strokeDasharray={isActive ? 'none' : '4 4'}
                      opacity={isActive ? 0.9 : 0.6}
                      style={{ transition: 'all 0.4s ease' }}
                    />

                    {/* Animated Data Packets along active path */}
                    {isActive && (
                      <g key={`packet-${pulseKey}`}>
                        <circle r="6" fill="#F97316" filter="url(#glow)">
                          <animateMotion
                            path={pathD}
                            dur="1.6s"
                            repeatCount="indefinite"
                            keyPoints="0;0.5;1"
                            keyTimes="0;0.5;1"
                          />
                        </circle>
                        <circle r="4" fill="#FFFFFF">
                          <animateMotion
                            path={pathD}
                            dur="1.6s"
                            repeatCount="indefinite"
                            keyPoints="0;0.5;1"
                            keyTimes="0;0.5;1"
                          />
                        </circle>

                        {/* Reverse return packet from Hub to Department */}
                        <circle r="5" fill="#2563EB" filter="url(#glow)">
                          <animateMotion
                            path={`M ${cx} ${cy} Q ${qx} ${qy} ${dept.x} ${dept.y}`}
                            dur="1.6s"
                            begin="0.8s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      </g>
                    )}
                  </g>
                );
              })}

              {/* Central Aasaan Hub */}
              <g>
                <circle cx={cx} cy={cy} r="64" fill="url(#hubGrad)" filter="url(#nodeGlow)" />
                <circle cx={cx} cy={cy} r="60" fill="none" stroke="#60A5FA" strokeWidth="1.5" opacity="0.6" />
                <circle cx={cx} cy={cy} r="68" fill="none" stroke="#F97316" strokeWidth="2" opacity="0.4" />
                
                {/* Center Brand Text */}
                <text
                  x={cx}
                  y={cy - 8}
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontFamily="var(--font-display)"
                  fontWeight="800"
                  fontSize="21"
                  letterSpacing="-0.04em"
                >
                  aasaan
                </text>
                <circle cx={cx + 38} cy={cy - 16} r="3.5" fill="#F97316" />
                <text
                  x={cx}
                  y={cy + 14}
                  textAnchor="middle"
                  fill="#93C5FD"
                  fontFamily="var(--font-mono)"
                  fontWeight="600"
                  fontSize="10"
                  letterSpacing="0.08em"
                >
                  INTELLIGENT CORE
                </text>
                <text
                  x={cx}
                  y={cy + 28}
                  textAnchor="middle"
                  fill="#38BDF8"
                  fontFamily="var(--font-ui)"
                  fontWeight="500"
                  fontSize="9.5"
                >
                  ● Single Truth Spine
                </text>
              </g>

              {/* Peripheral Department Nodes */}
              {heroDepartments.map((dept) => {
                const isActive = dept.id === activeDeptId;

                return (
                  <g
                    key={dept.id}
                    onClick={() => handleNodeClick(dept.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Click Hit Target */}
                    <circle cx={dept.x} cy={dept.y} r="54" fill="transparent" />

                    {/* Outer Active Ring */}
                    {isActive && (
                      <circle
                        cx={dept.x}
                        cy={dept.y}
                        r="42"
                        fill="none"
                        stroke={dept.color}
                        strokeWidth="2.5"
                        filter="url(#glow)"
                        opacity="0.8"
                      />
                    )}

                    {/* Node Body Card Container */}
                    <circle
                      cx={dept.x}
                      cy={dept.y}
                      r="32"
                      fill={isActive ? '#FFFFFF' : '#F8FAFC'}
                      stroke={isActive ? dept.color : '#CBD5E1'}
                      strokeWidth={isActive ? '2.5' : '1.5'}
                      style={{ transition: 'all 0.3s ease' }}
                    />

                    {/* Department Code Pill */}
                    <rect
                      x={dept.x - 20}
                      y={dept.y - 10}
                      width="40"
                      height="20"
                      rx="4"
                      fill={isActive ? dept.color : '#E2E8F0'}
                    />
                    <text
                      x={dept.x}
                      y={dept.y + 4}
                      textAnchor="middle"
                      fill={isActive ? '#FFFFFF' : '#475569'}
                      fontFamily="var(--font-mono)"
                      fontWeight="700"
                      fontSize="11"
                    >
                      {dept.code}
                    </text>

                    {/* Department Title */}
                    <text
                      x={dept.x}
                      y={dept.y - 42}
                      textAnchor="middle"
                      fill="var(--text-main)"
                      fontFamily="var(--font-display)"
                      fontWeight="700"
                      fontSize="14"
                    >
                      {dept.name}
                    </text>

                    {/* Department Real-Time Metric Tag */}
                    <rect
                      x={dept.x - 56}
                      y={dept.y + 40}
                      width="112"
                      height="22"
                      rx="6"
                      fill={isActive ? '#EFF6FF' : '#F1F5F9'}
                      stroke={isActive ? '#93C5FD' : '#E2E8F0'}
                      strokeWidth="1"
                    />
                    <text
                      x={dept.x}
                      y={dept.y + 55}
                      textAnchor="middle"
                      fill={isActive ? 'var(--primary-blue)' : '#64748B'}
                      fontFamily="var(--font-mono)"
                      fontWeight="600"
                      fontSize="10.5"
                    >
                      {dept.metric}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Active Telemetry Detail Card */}
          <div style={{
            background: 'linear-gradient(90deg, #F8FAFC 0%, #FFFFFF 100%)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: '#EFF6FF',
                border: '1px solid var(--primary-blue-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary-blue)',
                fontWeight: 700,
                fontFamily: 'var(--font-mono)',
                fontSize: '14px'
              }}>
                {activeDept.code}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 700 }}>{activeDept.name}</h4>
                  <span className="badge-pill badge-blue" style={{ fontSize: '11px', padding: '2px 8px' }}>
                    {activeDept.tag}
                  </span>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {activeDept.description}
                </p>
              </div>
            </div>

            {/* Department Live Events Log */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {activeDept.events.map((evt, i) => (
                <div
                  key={i}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '8px',
                    padding: '8px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                  }}
                >
                  <span style={{ fontSize: '13px', color: 'var(--text-body)' }}>{evt.text}</span>
                  <span className="mono" style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--accent-orange)',
                    background: 'var(--accent-orange-soft)',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}>
                    {evt.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
