import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Send, Check } from 'lucide-react';
import { saveQueryToStorage, syncLeadToBackend } from '../utils/excelExport';
import { saveLead, sendLeadToOfficialAasaanApi } from '../services/dataService';

export default function ScheduleDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'India',
    solution: 'Aasaan Enterprises',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const isSubmittingRef = React.useRef(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmittingRef.current || isSyncing) return;
    isSubmittingRef.current = true;
    setIsSyncing(true);

    try {
      // 1. Submit lead to Official Aasaan ERP REST API (single unique dispatch)
      await sendLeadToOfficialAasaanApi(formData);

      // 2. Save query to persistent storage & backend API for admin dashboard
      saveQueryToStorage(formData);
      await saveLead(formData);

      // 3. Transmit to Cloud Spreadsheet Webhook / Backend Excel
      await syncLeadToBackend(formData);
    } catch (err) {
      console.warn('Lead capture error:', err);
    } finally {
      setIsSyncing(false);
      isSubmittingRef.current = false;
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      country: 'India',
      solution: 'Aasaan Enterprises',
      message: ''
    });
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#FFFFFF',
          width: '100%',
          maxWidth: '560px',
          borderRadius: '24px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 30px 70px -15px rgba(0,0,0,0.3)',
          overflow: 'hidden',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0b1e36 0%, #1e95d3 100%)',
          color: '#FFFFFF',
          padding: '28px 30px 24px',
          position: 'relative'
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.15)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer',
              transition: 'background 0.2s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            fontSize: '12px',
            fontWeight: 700,
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, 0.15)',
            color: '#FFFFFF',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            marginBottom: '10px'
          }}>
            <Sparkles size={12} color="#ffbe3d" /> 1-on-1 Guided Architecture Walkthrough
          </span>

          <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF', marginTop: '6px', margin: '6px 0 0' }}>
            Schedule an Aasaan ERP Demo
          </h3>
          <p style={{ fontSize: '14px', color: '#e0f2fe', marginTop: '4px', margin: '4px 0 0' }}>
            See how Aasaan connects your specific sales, inventory, and finance workflows.
          </p>
        </div>

        {/* Content Body */}
        <div style={{ padding: '28px 30px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '16px 0' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#ECFDF5',
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <CheckCircle size={36} />
              </div>

              <h4 style={{ fontSize: '22px', fontWeight: 800, color: '#212121', margin: 0 }}>
                Demo Request Confirmed!
              </h4>

              <p style={{ fontSize: '14.5px', color: '#64748b', marginTop: '8px', lineHeight: 1.5 }}>
                Thank you, <strong>{formData.name}</strong>. Your inquiry has been successfully transmitted to our solution engineering team.
              </p>

              {/* Inquiry Summary Box */}
              <div style={{
                background: '#F8FAFC',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '16px 20px',
                marginTop: '20px',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#1e95d3', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                  Inquiry Summary
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '13px', color: '#334155' }}>
                  <div><strong>Company:</strong> {formData.company || 'N/A'}</div>
                  <div><strong>Solution:</strong> {formData.solution}</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Phone:</strong> {formData.phone}</div>
                </div>
                <div style={{ marginTop: '12px', fontSize: '12px', color: '#059669', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Check size={14} />
                  <span>A solution specialist will reach out via WhatsApp & Email within 2 business hours.</span>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleReset}
                style={{
                  width: '100%',
                  padding: '13px',
                  fontSize: '15px',
                  fontWeight: 700,
                  marginTop: '24px',
                  background: 'var(--colorAccent)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#212121', marginBottom: '5px' }}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Aditya Semwal"
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      borderRadius: '8px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={e => e.target.style.borderColor = '#1e95d3'}
                    onBlur={e => e.target.style.borderColor = '#cbd5e1'}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#212121', marginBottom: '5px' }}>
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. ABC Manufacturing Ltd."
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      borderRadius: '8px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={e => e.target.style.borderColor = '#1e95d3'}
                    onBlur={e => e.target.style.borderColor = '#cbd5e1'}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#212121', marginBottom: '5px' }}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      borderRadius: '8px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={e => e.target.style.borderColor = '#1e95d3'}
                    onBlur={e => e.target.style.borderColor = '#cbd5e1'}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#212121', marginBottom: '5px' }}>
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      borderRadius: '8px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={e => e.target.style.borderColor = '#1e95d3'}
                    onBlur={e => e.target.style.borderColor = '#cbd5e1'}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#212121', marginBottom: '5px' }}>
                    Primary Solution
                  </label>
                  <select
                    value={formData.solution}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      borderRadius: '8px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '14px',
                      outline: 'none',
                      background: '#FFF',
                      transition: 'border-color 0.2s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={e => e.target.style.borderColor = '#1e95d3'}
                    onBlur={e => e.target.style.borderColor = '#cbd5e1'}
                  >
                    <option value="Aasaan Enterprises">Aasaan Enterprises</option>
                    <option value="Aasaan ERP Lite">Aasaan ERP Lite</option>
                    <option value="AWM Waste Management">AWM Waste Management</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#212121', marginBottom: '5px' }}>
                    Country
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      borderRadius: '8px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={e => e.target.style.borderColor = '#1e95d3'}
                    onBlur={e => e.target.style.borderColor = '#cbd5e1'}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#212121', marginBottom: '5px' }}>
                  Specific Requirements or Current Pain Points
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your current software setup (e.g. migrating from Tally/Excel, need bin tracking, multi-warehouse sync)..."
                  style={{
                    width: '100%',
                    padding: '9px 12px',
                    borderRadius: '8px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'none',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={e => e.target.style.borderColor = '#1e95d3'}
                  onBlur={e => e.target.style.borderColor = '#cbd5e1'}
                />
              </div>

              <button
                type="submit"
                disabled={isSyncing}
                style={{
                  width: '100%',
                  padding: '13px',
                  fontSize: '15.5px',
                  fontWeight: 700,
                  marginTop: '4px',
                  background: 'var(--colorAccent)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: isSyncing ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(30,149,211,0.3)',
                  transition: 'background 0.2s ease, transform 0.15s ease',
                  opacity: isSyncing ? 0.75 : 1
                }}
                onMouseEnter={e => { if (!isSyncing) e.currentTarget.style.background = '#157bb3'; }}
                onMouseLeave={e => { if (!isSyncing) e.currentTarget.style.background = 'var(--colorAccent)'; }}
              >
                <Send size={16} />
                <span>{isSyncing ? 'Submitting Request...' : 'Confirm & Request Architecture Demo'}</span>
              </button>

              <div style={{ fontSize: '11.5px', color: '#64748b', textAlign: 'center', marginTop: '2px' }}>
                🔒 Your information is secure. Aasaan Services Solutions Pvt Ltd will never share your contact details.
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
