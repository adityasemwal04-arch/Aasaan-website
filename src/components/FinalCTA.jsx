import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, Zap } from 'lucide-react';

export default function FinalCTA({ onOpenDemo }) {
  return (
    <section style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0B1329 0%, #172554 50%, #1E3A8A 100%)',
      color: '#FFFFFF',
      padding: 'clamp(90px, 12vw, 150px) 0',
      overflow: 'hidden'
    }}>
      {/* Background Animated SVG Vector Grid */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.25
        }}
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="ctaLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        {/* Dynamic Connected Lines converge towards center */}
        {[
          'M 0 100 Q 600 250 1200 100',
          'M 0 250 Q 600 350 1200 250',
          'M 0 450 Q 600 300 1200 450',
          'M 150 0 Q 600 300 1050 600',
          'M 1050 0 Q 600 300 150 600'
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="url(#ctaLineGrad)"
            strokeWidth="1.8"
            strokeDasharray="10 14"
            style={{
              animation: `dash ${12 + i * 3}s linear infinite`
            }}
          />
        ))}

        <circle cx="600" cy="300" r="14" fill="#F97316" filter="drop-shadow(0 0 12px #F97316)" />
        <circle cx="600" cy="300" r="28" fill="none" stroke="#60A5FA" strokeWidth="2" opacity="0.6" />
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '820px' }}>
        
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
          <span className="badge-pill" style={{
            background: 'rgba(249, 115, 22, 0.2)',
            color: '#FB923C',
            border: '1px solid rgba(249, 115, 22, 0.4)'
          }}>
            <Zap size={12} /> The New Aasaan Standard
          </span>
        </div>

        <h2 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.4rem)', color: '#FFFFFF', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08 }}>
          One business. <br />
          <span style={{ color: '#FB923C' }}>One connected system.</span>
        </h2>

        <p style={{ fontSize: '20px', color: '#BFDBFE', marginTop: '24px', lineHeight: 1.5, fontWeight: 400 }}>
          Stop letting disconnected spreadsheets and software silos slow your company down. See how Aasaan brings sales, inventory, finance, and shop floor together.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          marginTop: '40px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={onOpenDemo}
            className="btn btn-orange"
            style={{ padding: '16px 36px', fontSize: '17px', borderRadius: '12px' }}
          >
            <span>Schedule a Demo</span>
            <ArrowRight size={18} />
          </button>

          <a
            href="tel:+917428267616"
            className="btn"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              padding: '16px 32px',
              fontSize: '17px',
              borderRadius: '12px'
            }}
          >
            <PhoneCall size={18} />
            <span>Talk to Us (+91 7428267616)</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
          marginTop: '44px',
          fontSize: '13px',
          color: '#94A3B8',
          flexWrap: 'wrap'
        }}>
          <span>✓ 100+ Live Enterprise Deployments</span>
          <span>✓ Dedicated Cloud or On-Premises</span>
          <span>✓ Custom Fields & Scripting Built-In</span>
        </div>

      </div>

      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -300; }
        }
      `}</style>
    </section>
  );
}
