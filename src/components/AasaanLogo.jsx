import React from 'react';
import { AASAAN_LOGO } from '../assets/logoData';

export default function AasaanLogo({
  height = 34,
  showBadge = true,
  isDark = false,
  style = {}
}) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', ...style }}>
      {isDark ? (
        <div style={{
          background: 'rgba(255, 255, 255, 0.96)',
          padding: '4px 10px',
          borderRadius: '8px',
          display: 'inline-flex',
          alignItems: 'center',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
        }}>
          <img
            src={AASAAN_LOGO}
            alt="Aasaan"
            style={{
              height: `${height}px`,
              width: 'auto',
              display: 'block',
              objectFit: 'contain'
            }}
          />
        </div>
      ) : (
        <img
          src={AASAAN_LOGO}
          alt="Aasaan"
          style={{
            height: `${height}px`,
            width: 'auto',
            display: 'block',
            objectFit: 'contain'
          }}
        />
      )}

      {showBadge && (
        <span style={{
          background: isDark ? 'rgba(29, 78, 216, 0.4)' : '#EFF6FF',
          color: isDark ? '#93C5FD' : 'var(--primary-blue)',
          border: isDark ? '1px solid rgba(59, 130, 246, 0.4)' : '1px solid var(--primary-blue-border)',
          fontSize: '11px',
          fontWeight: 800,
          padding: '2px 7px',
          borderRadius: '5px',
          letterSpacing: '0.04em'
        }}>
          ERP
        </span>
      )}
    </div>
  );
}
