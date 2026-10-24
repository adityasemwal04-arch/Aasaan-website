const fs = require('fs');
const path = require('path');

const svgPath = path.resolve('src/assets/world-map.svg');
let svg = fs.readFileSync(svgPath, 'utf8');

const startIdx = svg.indexOf('<g>');
const endIdx = svg.lastIndexOf('</svg>');
let innerSvg = svg.substring(startIdx, endIdx);

// Replace class="xyz" with className="xyz"
innerSvg = innerSvg.replace(/class="([^"]*)"/g, 'className="$1"');

// Countries to map to hubs
const hubCountryMap = {
  in: 'india',
  us: 'america',
  ae: 'middleeast',
  sa: 'middleeast',
  qa: 'middleeast',
  om: 'middleeast',
  kw: 'middleeast',
  bh: 'middleeast',
  za: 'southafrica',
  au: 'australia'
};

console.log('Original inner SVG length:', innerSvg.length);

// We can replace id="xyz" for these countries with custom classes or data attributes
// E.g. id="in" -> id="in" className="country-path country-india"
for (const [code, hub] of Object.entries(hubCountryMap)) {
  // For <path id="code"
  const pathRegex = new RegExp(`<path id="${code}"`, 'g');
  innerSvg = innerSvg.replace(pathRegex, `<path id="${code}" data-hub="${hub}" className="country-path country-${hub}"`);
  
  // For <g id="code"
  const gRegex = new RegExp(`<g id="${code}"`, 'g');
  innerSvg = innerSvg.replace(gRegex, `<g id="${code}" data-hub="${hub}" className="country-path country-${hub}"`);
}

// Add default class to all other paths
// We will wrap the countries in a group with class "world-countries-group"
const componentCode = `import React from 'react';

/**
 * WorldVectorMap — High-fidelity SVG World Map
 * Real vector coastlines and borders with ISO 3166-1 country paths.
 */
export default function WorldVectorMap({ activeHub, filter, onSelectHub }) {
  // Coordinate anchors for beacons on viewBox="30.767 241.591 784.077 458.627"
  const hubs = {
    india: {
      key: 'india',
      name: 'India',
      role: 'Global HQ & R&D Hub',
      flag: '🇮🇳',
      x: 588,
      y: 470,
      color: '#1e95d3',
      glow: 'rgba(30,149,211,0.6)'
    },
    middleeast: {
      key: 'middleeast',
      name: 'Middle East',
      role: 'UAE & GCC Regional Hub',
      flag: '🇦🇪',
      x: 532,
      y: 468,
      color: '#f59e0b',
      glow: 'rgba(245,158,11,0.6)'
    },
    america: {
      key: 'america',
      name: 'North America',
      role: 'Enterprise & 3PL Logistics',
      flag: '🇺🇸',
      x: 185,
      y: 410,
      color: '#10b981',
      glow: 'rgba(16,185,129,0.6)'
    },
    southafrica: {
      key: 'southafrica',
      name: 'South Africa',
      role: 'Fleet & AWM Waste Hub',
      flag: '🇿🇦',
      x: 472,
      y: 602,
      color: '#8b5cf6',
      glow: 'rgba(139,92,246,0.6)'
    },
    australia: {
      key: 'australia',
      name: 'Australia',
      role: 'Omnichannel & Cloud Hub',
      flag: '🇦🇺',
      x: 712,
      y: 616,
      color: '#f43f5e',
      glow: 'rgba(244,63,94,0.6)'
    }
  };

  const arcs = [
    { from: hubs.india, to: hubs.america, path: 'M 588 470 Q 380 260 185 410', dur: '3.2s' },
    { from: hubs.india, to: hubs.middleeast, path: 'M 588 470 Q 560 450 532 468', dur: '2.0s' },
    { from: hubs.india, to: hubs.southafrica, path: 'M 588 470 Q 560 560 472 602', dur: '2.8s' },
    { from: hubs.india, to: hubs.australia, path: 'M 588 470 Q 660 520 712 616', dur: '2.6s' }
  ];

  return (
    <div style={{ position: 'relative', width: '100%', userSelect: 'none' }}>
      <style>{\`
        .wvm-land {
          fill: #112239;
          stroke: #1b3558;
          stroke-width: 0.55;
          transition: fill 0.25s ease, stroke 0.25s ease;
        }
        .wvm-land:hover {
          fill: #193152;
        }

        /* Hub highlights */
        .country-india path, path.country-india {
          fill: #1e95d3 !important;
          stroke: #60a5fa !important;
          stroke-width: 0.8 !important;
          filter: drop-shadow(0 0 6px rgba(30,149,211,0.7));
          cursor: pointer;
        }
        .country-middleeast path, path.country-middleeast {
          fill: #f59e0b !important;
          stroke: #fcd34d !important;
          stroke-width: 0.8 !important;
          filter: drop-shadow(0 0 6px rgba(245,158,11,0.7));
          cursor: pointer;
        }
        .country-america path, path.country-america {
          fill: #10b981 !important;
          stroke: #6ee7b7 !important;
          stroke-width: 0.8 !important;
          filter: drop-shadow(0 0 6px rgba(16,185,129,0.7));
          cursor: pointer;
        }
        .country-southafrica path, path.country-southafrica {
          fill: #8b5cf6 !important;
          stroke: #c4b5fd !important;
          stroke-width: 0.8 !important;
          filter: drop-shadow(0 0 6px rgba(139,92,246,0.7));
          cursor: pointer;
        }
        .country-australia path, path.country-australia {
          fill: #f43f5e !important;
          stroke: #fda4af !important;
          stroke-width: 0.8 !important;
          filter: drop-shadow(0 0 6px rgba(244,63,94,0.7));
          cursor: pointer;
        }

        @keyframes wvmPulse {
          0% { r: 5; opacity: 1; }
          70% { r: 16; opacity: 0; }
          100% { r: 5; opacity: 0; }
        }
        @keyframes wvmDash {
          to { stroke-dashoffset: -40; }
        }
        @keyframes wvmFlow {
          0% { offset-distance: 0%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
      \`}</style>

      <svg
        viewBox="30.767 241.591 784.077 458.627"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <defs>
          {/* Radial ambient glow behind India HQ */}
          <radialGradient id="hqGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e95d3" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1e95d3" stopOpacity="0" />
          </radialGradient>
          {/* Linear gradient for arcs */}
          <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e95d3" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Ambient atmospheric backdrop */}
        <circle cx="588" cy="470" r="160" fill="url(#hqGlow)" pointerEvents="none" />
        <circle cx="185" cy="410" r="110" fill="rgba(16,185,129,0.08)" pointerEvents="none" />
        <circle cx="712" cy="616" r="90" fill="rgba(244,63,94,0.08)" pointerEvents="none" />

        {/* Subtle coordinate grid lines */}
        <g stroke="rgba(30,149,211,0.06)" strokeWidth="0.6" strokeDasharray="3 3">
          <line x1="30" y1="350" x2="815" y2="350" />
          <line x1="30" y1="470" x2="815" y2="470" />
          <line x1="30" y1="590" x2="815" y2="590" />
          <line x1="185" y1="240" x2="185" y2="700" />
          <line x1="472" y1="240" x2="472" y2="700" />
          <line x1="588" y1="240" x2="588" y2="700" />
          <line x1="712" y1="240" x2="712" y2="700" />
        </g>

        {/* World Countries Base Paths */}
        <g className="wvm-land">
          ${innerSvg}
        </g>

        {/* Flight / Network Arcs */}
        <g pointerEvents="none">
          {arcs.map((arc, i) => (
            <g key={i}>
              {/* Outer glow line */}
              <path
                d={arc.path}
                fill="none"
                stroke="rgba(30,149,211,0.2)"
                strokeWidth="2.5"
              />
              {/* Dashed animated line */}
              <path
                d={arc.path}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="1.2"
                strokeDasharray="6 4"
                style={{ animation: \`wvmDash \${arc.dur} linear infinite\` }}
              />
            </g>
          ))}
        </g>

        {/* Beacons and Interactive Pins */}
        {Object.values(hubs).map((h) => {
          const isSelected = activeHub === h.key;
          const isDimmed = filter !== 'all' && filter !== h.key;
          if (isDimmed) return null;

          return (
            <g
              key={h.key}
              style={{ cursor: 'pointer', transition: 'opacity 0.2s' }}
              onClick={() => onSelectHub(h.key)}
            >
              {/* Expanding pulse wave */}
              <circle
                cx={h.x}
                cy={h.y}
                r="6"
                fill="none"
                stroke={h.color}
                strokeWidth="1.8"
                style={{ animation: 'wvmPulse 2.2s cubic-bezier(0, 0.2, 0.8, 1) infinite' }}
              />

              {/* Core beacon pin */}
              <circle
                cx={h.x}
                cy={h.y}
                r={isSelected ? 6.5 : 4.5}
                fill={h.color}
                stroke="#ffffff"
                strokeWidth={isSelected ? 2 : 1.2}
                style={{
                  filter: \`drop-shadow(0 0 8px \${h.color})\`,
                  transition: 'all 0.2s ease'
                }}
              />

              {/* High-tech label badge */}
              <g transform={\`translate(\${h.x}, \${h.y - 12})\`}>
                <rect
                  x="-42"
                  y="-18"
                  width="84"
                  height="18"
                  rx="9"
                  fill="rgba(5, 15, 30, 0.88)"
                  stroke={isSelected ? h.color : 'rgba(255,255,255,0.2)'}
                  strokeWidth={isSelected ? '1.2' : '0.75'}
                  style={{ backdropFilter: 'blur(4px)' }}
                />
                <text
                  x="0"
                  y="-6"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="8.5"
                  fontWeight="700"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  letterSpacing="0.2px"
                >
                  {h.flag} {h.name}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
`;

fs.writeFileSync(path.resolve('src/components/WorldVectorMap.jsx'), componentCode, 'utf8');
console.log('Successfully generated src/components/WorldVectorMap.jsx');
