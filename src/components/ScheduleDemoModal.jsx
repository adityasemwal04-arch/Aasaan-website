import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Building, Phone, Mail, Globe, Send, Check } from 'lucide-react';
import { saveQueryToStorage, syncLeadToBackend } from '../utils/excelExport';

export default function ScheduleDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'India',
    solution: 'ERP Global',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSyncing(true);

    // 1. Save query to persistent storage (local backup)
    saveQueryToStorage(formData);

    // 2. Transmit to Cloud Spreadsheet Webhook / Backend Excel
    await syncLeadToBackend(formData);

    // 3. Complete submission (NO files downloaded to the client's device)
    setIsSyncing(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      country: 'India',
      solution: 'ERP Global',
      message: ''
    });
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 110,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: '#FFFFFF',
        width: '100%',
        maxWidth: '560px',
        borderRadius: '24px',
        border: '1px solid var(--border-medium)',
        boxShadow: '0 30px 70px -15px rgba(0,0,0,0.3)',
        overflow: 'hidden',
        position: 'relative'
      }}>
        
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0B1329 0%, #1D4ED8 100%)',
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
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>

          <span className="badge-pill" style={{
            background: 'rgba(249, 115, 22, 0.2)',
            color: '#FB923C',
            border: '1px solid rgba(249, 115, 22, 0.4)',
            marginBottom: '10px'
          }}>
            <Sparkles size={11} /> 1-on-1 Guided Architecture Walkthrough
          </span>

          <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF', marginTop: '6px' }}>
            Schedule an Aasaan ERP Demo
          </h3>
          <p style={{ fontSize: '14px', color: '#BFDBFE', marginTop: '4px' }}>
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

              <h4 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-main)' }}>
                Demo Request Confirmed!
              </h4>

              <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', marginTop: '8px', lineHeight: 1.5 }}>
                Thank you, <strong>{formData.name}</strong>. Your inquiry has been successfully transmitted to our solution engineering team.
              </p>

              {/* Inquiry Summary Box */}
              <div style={{
                background: '#F8FAFC',
                border: '1px solid var(--border-medium)',
                borderRadius: '14px',
                padding: '16px 20px',
                marginTop: '20px',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-blue)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                  Inquiry Summary
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '13px', color: 'var(--text-body)' }}>
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
                className="btn btn-primary"
                style={{ width: '100%', padding: '13px', fontSize: '15px', marginTop: '24px' }}
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Aditya Sharma"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid var(--border-medium)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
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
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid var(--border-medium)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
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
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid var(--border-medium)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
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
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid var(--border-medium)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                    Primary Solution
                  </label>
                  <select
                    value={formData.solution}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid var(--border-medium)',
                      fontSize: '14px',
                      outline: 'none',
                      background: '#FFF'
                    }}
                  >
                    <option value="ERP Global">Aasaan ERP Global (Mid-Market)</option>
                    <option value="ERP Lite">Aasaan ERP Lite (Small Teams)</option>
                    <option value="AWM Waste">AWM (Waste & Weighbridges)</option>
                    <option value="Manufacturing">Manufacturing & Engineering</option>
                    <option value="Retail POS">Retail & Multi-store POS</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                    Country
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid var(--border-medium)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                  Specific Requirements or Current Pain Points
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your current software setup (e.g. migrating from Tally/Excel, need bin tracking, multi-warehouse sync)..."
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1.5px solid var(--border-medium)',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSyncing}
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '16px', marginTop: '4px' }}
              >
                <Send size={16} />
                <span>{isSyncing ? 'Submitting Request...' : 'Confirm & Request Architecture Demo'}</span>
              </button>

              <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', textAlign: 'center' }}>
                🔒 Your information is secure. Aasaan Services Solutions Pvt Ltd will never share your contact details.
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
