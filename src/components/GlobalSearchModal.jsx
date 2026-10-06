import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, CornerDownLeft, Sparkles, Layers, Factory, Recycle, Feather, Users, Calendar, ArrowUpRight } from 'lucide-react';
import { globalModules, globalIndustries } from '../data/globalData';
import { liteFeatures, liteIndustries } from '../data/liteData';
import { awmSectors, awmModules } from '../data/awmData';

export default function GlobalSearchModal({ isOpen, onClose, onNavigate, onOpenDemo }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  // Build Comprehensive Master Search Index across the entire website
  const searchIndex = [
    // 1. Primary Pages & Sections
    {
      id: 'page-home',
      category: 'Page',
      badge: 'Main',
      icon: Layers,
      title: 'Aasaan ERP Platform Overview',
      desc: 'Next-generation cloud ERP architecture, modules, and 40+ third-party integrations.',
      keywords: 'home overview platform features integrations tally sap oracle erp pricing',
      pageId: 'home'
    },
    {
      id: 'page-global',
      category: 'Page',
      badge: 'Tier 1',
      icon: Layers,
      title: 'Aasaan ERP Global Edition',
      desc: 'Full-suite ERP engineered for mid-market and multi-entity manufacturing enterprises.',
      keywords: 'global mid-market enterprise multi-plant corporate large scale 8 modules',
      pageId: 'global'
    },
    {
      id: 'page-lite',
      category: 'Page',
      badge: '₹12k/yr',
      icon: Feather,
      title: 'Aasaan ERP Lite Edition',
      desc: 'Mobile-first cloud ERP for growing SMEs, trading, and field sales teams. Live in 7 days.',
      keywords: 'lite small business sme agile cheap affordable pricing 12000 field sales',
      pageId: 'lite'
    },
    {
      id: 'page-awm',
      category: 'Page',
      badge: 'Specialized',
      icon: Recycle,
      title: 'AWM — Aasaan Waste Management OS',
      desc: 'Complete circular economy OS with IoT weighbridge indicators, RFID bin tracking, and MRF accounting.',
      keywords: 'awm waste management recycling weighbridge scale rfid dumpster mrf cpcb scrap',
      pageId: 'awm'
    },
    {
      id: 'page-partners',
      category: 'Page',
      badge: 'Channel',
      icon: Users,
      title: 'Aasaan Partner Ecosystem',
      desc: 'Reseller, implementation, and consulting partner programs across India and the Middle East.',
      keywords: 'partners reseller channel referral implementation consultant revenue share',
      pageId: 'partners'
    },
    {
      id: 'action-demo',
      category: 'Action',
      badge: 'Schedule',
      icon: Calendar,
      title: 'Schedule a 1-on-1 Architecture Demo',
      desc: 'Book a 15-minute tailored walkthrough with our solution engineering team.',
      keywords: 'demo book schedule contact inquiry sales call consultation presentation',
      action: 'demo'
    },

    // 2. All 8 Global ERP Modules
    ...globalModules.map((m, idx) => ({
      id: `mod-global-${idx}`,
      category: 'Module',
      badge: 'ERP Global',
      icon: Layers,
      title: m.title,
      desc: m.desc,
      keywords: `${m.title} ${m.desc} ${m.tag || ''} module global`,
      pageId: 'global'
    })),

    // 3. All 20 Global Industries
    ...globalIndustries.map((ind, idx) => ({
      id: `ind-global-${idx}`,
      category: 'Industry',
      badge: ind.tag || 'Global Industry',
      icon: Factory,
      title: ind.name,
      desc: ind.desc,
      keywords: `${ind.name} ${ind.desc} ${ind.tag || ''} industry manufacturing`,
      pageId: 'global'
    })),

    // 4. All 6 ERP Lite Features
    ...liteFeatures.map((f, idx) => ({
      id: `feat-lite-${idx}`,
      category: 'Feature',
      badge: 'ERP Lite',
      icon: Feather,
      title: f.title,
      desc: f.desc,
      keywords: `${f.title} ${f.desc} ${f.tag || ''} lite feature`,
      pageId: 'lite'
    })),

    // 5. All 8 ERP Lite Industries
    ...liteIndustries.map((ind, idx) => ({
      id: `ind-lite-${idx}`,
      category: 'Industry',
      badge: ind.tag || 'SME Industry',
      icon: Factory,
      title: ind.name,
      desc: ind.desc,
      keywords: `${ind.name} ${ind.desc} lite trading services`,
      pageId: 'lite'
    })),

    // 6. All 6 AWM Waste Sectors
    ...awmSectors.map((s, idx) => ({
      id: `awm-sector-${idx}`,
      category: 'AWM Sector',
      badge: s.tag || 'Waste Sector',
      icon: Recycle,
      title: s.title,
      desc: s.desc,
      keywords: `${s.title} ${s.desc} ${s.tag || ''} awm municipal medical hazardous dumpster construction`,
      pageId: 'awm'
    })),

    // 7. All 6 AWM Modules
    ...awmModules.map((m, idx) => ({
      id: `awm-mod-${idx}`,
      category: 'AWM Module',
      badge: 'AWM Automation',
      icon: Recycle,
      title: m.title,
      desc: m.desc,
      keywords: `${m.title} ${m.desc} ${m.tag || ''} weighbridge route mrf telematics epr driver app`,
      pageId: 'awm'
    })),

    // 8. Verified Client Validations
    {
      id: 'client-tadweeer',
      category: 'Client',
      badge: 'Case Study',
      icon: Recycle,
      title: 'Tadweeer Recycling Case Study',
      desc: 'Sub-45s weighbridge gross/tare logging, MRF sorting yields, and instant customer payout settlements.',
      keywords: 'tadweeer case study recycling uae metal plastic weighbridge customer',
      pageId: 'awm'
    },
    {
      id: 'client-resustainability',
      category: 'Client',
      badge: 'Case Study',
      icon: Recycle,
      title: 'Resustainability Environmental Services',
      desc: 'Pan-India circular economy project accounting, hazardous manifests, and municipal SLA management.',
      keywords: 'resustainability case study environmental municipal circular economy',
      pageId: 'awm'
    }
  ];

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 50);
    }
  }, [isOpen]);

  // Handle Result Click / Navigation
  const handleSelect = (item) => {
    onClose();
    if (item.action === 'demo') {
      if (onOpenDemo) onOpenDemo();
    } else if (item.pageId) {
      if (onNavigate) {
        onNavigate(item.pageId);
      } else {
        window.location.hash = item.pageId === 'home' ? '#/' : `#/${item.pageId}`;
      }
    }
  };

  // Keyboard Navigation (Arrow keys, Enter, Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < filteredResults.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredResults.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredResults[selectedIndex]) {
          handleSelect(filteredResults[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  if (!isOpen) return null;

  // Filter Logic
  const cleanQ = query.trim().toLowerCase();
  const filteredResults = cleanQ === ''
    ? searchIndex.slice(0, 7) // Show top primary destinations when query is empty
    : searchIndex.filter((item) => {
        return (
          item.title.toLowerCase().includes(cleanQ) ||
          item.desc.toLowerCase().includes(cleanQ) ||
          item.category.toLowerCase().includes(cleanQ) ||
          (item.keywords && item.keywords.toLowerCase().includes(cleanQ)) ||
          (item.badge && item.badge.toLowerCase().includes(cleanQ))
        );
      });

  const popularChips = [
    'ERP Global',
    'ERP Lite',
    'AWM Weighbridge',
    'Manufacturing',
    'Dairy Industry',
    'GST Invoicing',
    'Partners',
    'Pricing'
  ];

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '60px 16px 20px',
        animation: 'fadeIn 0.15s ease-out'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#FFFFFF',
          width: '100%',
          maxWidth: '720px',
          borderRadius: '20px',
          border: '1.5px solid var(--border-medium)',
          boxShadow: '0 30px 70px -15px rgba(0,0,0,0.35)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '85vh'
        }}
      >
        
        {/* Search Header Input */}
        <div style={{
          padding: '18px 22px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          background: '#FFFFFF'
        }}>
          <Search size={22} color="var(--primary-blue)" style={{ flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search pages, solutions, industries, ERP modules, features..."
            style={{
              width: '100%',
              border: 'none',
              outline: 'none',
              fontSize: '17px',
              color: 'var(--text-main)',
              fontFamily: 'inherit',
              background: 'transparent'
            }}
          />
          {query && (
            <button
              onClick={() => {
                setQuery('');
                setSelectedIndex(0);
                if (inputRef.current) inputRef.current.focus();
              }}
              style={{
                background: '#F1F5F9',
                border: 'none',
                borderRadius: '6px',
                padding: '4px 8px',
                cursor: 'pointer',
                fontSize: '12px',
                color: 'var(--text-muted)'
              }}
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            style={{
              background: '#F1F5F9',
              border: 'none',
              borderRadius: '8px',
              padding: '6px',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title="Close Search (ESC)"
          >
            <X size={18} />
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div style={{
          padding: '10px 22px',
          background: 'var(--surface-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexWrap: 'wrap'
        }}>
          <span style={{ fontSize: '11.5px', color: 'var(--text-muted)', fontWeight: 700, marginRight: '4px' }}>
            Trending:
          </span>
          {popularChips.map((chip) => (
            <button
              key={chip}
              onClick={() => {
                setQuery(chip);
                setSelectedIndex(0);
                if (inputRef.current) inputRef.current.focus();
              }}
              style={{
                background: query.toLowerCase() === chip.toLowerCase() ? 'var(--primary-blue)' : '#FFFFFF',
                color: query.toLowerCase() === chip.toLowerCase() ? '#FFFFFF' : 'var(--text-body)',
                border: query.toLowerCase() === chip.toLowerCase() ? '1px solid var(--primary-blue)' : '1px solid var(--border-medium)',
                borderRadius: '6px',
                padding: '3px 9px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Results Counter / Title */}
        <div style={{
          padding: '8px 22px',
          fontSize: '11.5px',
          fontWeight: 700,
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          background: '#FFFFFF',
          borderBottom: '1px solid #F1F5F9'
        }}>
          {cleanQ === '' ? 'Recommended Destinations' : `${filteredResults.length} matching results found`}
        </div>

        {/* Results List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '10px 14px' }}>
          {filteredResults.length === 0 ? (
            <div style={{ padding: '48px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>🔍</div>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)' }}>
                No exact matches found for "{query}"
              </h4>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '6px', maxWidth: '420px', margin: '6px auto 0' }}>
                Try searching for <strong>Global</strong>, <strong>Lite</strong>, <strong>Weighbridge</strong>, <strong>Manufacturing</strong>, <strong>Dairy</strong>, or <strong>Partners</strong>.
              </p>
            </div>
          ) : (
            filteredResults.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const IconComponent = item.icon || Layers;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '14px',
                    cursor: 'pointer',
                    background: isSelected ? '#EFF6FF' : 'transparent',
                    border: isSelected ? '1px solid #BFDBFE' : '1px solid transparent',
                    transition: 'all 0.1s ease',
                    marginBottom: '4px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: isSelected ? 'var(--primary-blue)' : '#F1F5F9',
                      color: isSelected ? '#FFFFFF' : 'var(--primary-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <IconComponent size={18} />
                    </div>

                    <div style={{ minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--text-main)' }}>
                          {item.title}
                        </span>
                        <span style={{
                          fontSize: '10.5px',
                          fontWeight: 700,
                          padding: '1px 6px',
                          borderRadius: '4px',
                          background: item.category === 'Page' ? '#ECFDF5' : item.category === 'Module' ? '#EFF6FF' : item.category === 'Action' ? '#FFF7ED' : '#F1F5F9',
                          color: item.category === 'Page' ? '#059669' : item.category === 'Module' ? 'var(--primary-blue)' : item.category === 'Action' ? '#EA580C' : '#475569'
                        }}>
                          {item.category}
                        </span>
                        {item.badge && (
                          <span style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>
                            • {item.badge}
                          </span>
                        )}
                      </div>
                      <p style={{
                        fontSize: '12.5px',
                        color: 'var(--text-muted)',
                        marginTop: '3px',
                        marginBottom: 0,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '520px'
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: isSelected ? 'var(--primary-blue)' : '#94A3B8',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      {item.action === 'demo' ? 'Open Demo' : 'Navigate'}
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Keyboard Shortcut Footer */}
        <div style={{
          padding: '12px 22px',
          background: 'var(--surface-subtle)',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '11.5px',
          color: 'var(--text-muted)',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <kbd style={{ background: '#FFF', border: '1px solid var(--border-medium)', padding: '1px 5px', borderRadius: '4px', fontSize: '10px' }}>↑</kbd>
              <kbd style={{ background: '#FFF', border: '1px solid var(--border-medium)', padding: '1px 5px', borderRadius: '4px', fontSize: '10px' }}>↓</kbd> Navigate
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <kbd style={{ background: '#FFF', border: '1px solid var(--border-medium)', padding: '1px 5px', borderRadius: '4px', fontSize: '10px' }}>Enter</kbd> Open
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <kbd style={{ background: '#FFF', border: '1px solid var(--border-medium)', padding: '1px 5px', borderRadius: '4px', fontSize: '10px' }}>ESC</kbd> Close
            </span>
          </div>
          <span>Aasaan Global Omni-Search • All 50+ Modules & Industries Indexed</span>
        </div>

      </div>
    </div>
  );
}
