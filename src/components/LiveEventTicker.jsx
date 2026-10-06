import React from 'react';
import { liveTimelineFeed } from '../data/erpEvents';
import { Activity, ShieldCheck, ChevronRight } from 'lucide-react';

export default function LiveEventTicker() {
  return (
    <section style={{
      background: '#FFFFFF',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '16px 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '20px', overflow: 'hidden' }}>
        
        {/* Label Tag */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          whiteSpace: 'nowrap',
          paddingRight: '16px',
          borderRight: '2px solid var(--border-subtle)'
        }}>
          <span className="live-indicator" />
          <span style={{
            fontSize: '12.5px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--text-main)',
            fontFamily: 'var(--font-mono)'
          }}>
            Real-Time Stream
          </span>
        </div>

        {/* Ticker Stream */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
          {liveTimelineFeed.concat(liveTimelineFeed).map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '13.5px'
              }}
            >
              <span className="mono" style={{ color: 'var(--text-faint)', fontSize: '12px' }}>
                {item.time}
              </span>
              <span style={{
                background: '#EFF6FF',
                color: 'var(--primary-blue)',
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: 700,
                fontFamily: 'var(--font-mono)'
              }}>
                {item.dept}
              </span>
              <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>
                {item.title}
              </span>
              <span className="mono" style={{ color: 'var(--accent-orange)', fontWeight: 600 }}>
                {item.value}
              </span>
              <span style={{ color: 'var(--border-medium)' }}>•</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
