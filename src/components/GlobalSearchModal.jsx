import React, { useState, useEffect } from 'react';
import { Search, X, FileText, ArrowRight, CornerDownLeft } from 'lucide-react';

export default function GlobalSearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('ABC Industries');

  const mockDatabase = [
    { type: 'Sales Order', code: 'SO-4821', title: 'ABC Industries Ltd. — 60 Industrial Valves', value: '₹84,500', dept: 'Sales', date: 'Today, 10:42 AM' },
    { type: 'Stock Record', code: 'SKU-1082', title: 'Industrial Valve-X (Rack B4) — 42 Units Allocated', value: '42 / 60 Units', dept: 'Inventory', date: 'Updated 10:43 AM' },
    { type: 'Purchase Order', code: 'PO-1092', title: 'Rao Metals & Alloys — 60 Units Material Requisition', value: '₹61,200', dept: 'Purchasing', date: 'Drafted 10:43 AM' },
    { type: 'GST Invoice', code: 'INV-3307', title: 'E-Invoice for ABC Industries (IRN #9021)', value: '₹84,500 Receivable', dept: 'Finance', date: 'Generated 10:44 AM' },
    { type: 'Customer Account', code: 'CUST-881', title: 'ABC Industries Ltd. — Tier A Client Record', value: 'Credit Limit: ₹15L', dept: 'CRM', date: 'Active 2 Years' },
    { type: 'AWM Weigh Ticket', code: 'WB-4091', title: 'Recyclables Gross Tare — Truck DL-1AA-4091', value: '22.4 MT', dept: 'AWM Waste', date: 'Today, 09:15 AM' }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle or open
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? mockDatabase
    : mockDatabase.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.code.toLowerCase().includes(query.toLowerCase()) ||
        item.dept.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '80px 20px 20px'
    }}>
      <div style={{
        background: '#FFFFFF',
        width: '100%',
        maxWidth: '680px',
        borderRadius: '20px',
        border: '1px solid var(--border-medium)',
        boxShadow: '0 25px 60px -15px rgba(0,0,0,0.3)',
        overflow: 'hidden',
        animation: 'fadeIn 0.2s ease-out'
      }}>
        
        {/* Search Bar Input */}
        <div style={{
          padding: '18px 24px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          background: '#FFFFFF'
        }}>
          <Search size={20} color="var(--primary-blue)" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documents, customers, SKUs, or invoices across all modules..."
            style={{
              width: '100%',
              border: 'none',
              outline: 'none',
              fontSize: '17px',
              color: 'var(--text-main)',
              fontFamily: 'var(--font-ui)'
            }}
          />
          <button
            onClick={onClose}
            style={{
              background: '#F1F5F9',
              border: 'none',
              borderRadius: '6px',
              padding: '6px',
              cursor: 'pointer',
              color: 'var(--text-muted)'
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Suggestion Chips */}
        <div style={{
          padding: '12px 24px',
          background: 'var(--surface-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap'
        }}>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>Quick search:</span>
          {['ABC Industries', 'Valve-X', 'SO-4821', 'INV-3307', 'Weighbridge'].map((q) => (
            <button
              key={q}
              onClick={() => setQuery(q)}
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--border-medium)',
                borderRadius: '6px',
                padding: '2px 8px',
                fontSize: '12px',
                color: 'var(--text-body)',
                cursor: 'pointer'
              }}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '360px', overflowY: 'auto', padding: '12px 16px' }}>
          {filtered.length === 0 ? (
            <div style={{ padding: '36px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px' }}>
              No matches found for "{query}". Try searching for customer name, item code, or document ID.
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '14px',
                  cursor: 'pointer',
                  transition: 'background 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#F8FAFC')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: '#EFF6FF',
                    color: 'var(--primary-blue)',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {item.dept}
                  </span>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-main)' }}>
                      {item.title}
                    </div>
                    <div className="mono" style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {item.code} • {item.date}
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div className="mono" style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--accent-orange)' }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div style={{
          padding: '12px 24px',
          background: 'var(--surface-subtle)',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '12px',
          color: 'var(--text-muted)'
        }}>
          <span>Aasaan Global Search indexing 100% of ERP records in real time</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Press <kbd style={{ background: '#FFF', border: '1px solid var(--border-medium)', padding: '1px 5px', borderRadius: '4px' }}>ESC</kbd> to close
          </span>
        </div>

      </div>
    </div>
  );
}
