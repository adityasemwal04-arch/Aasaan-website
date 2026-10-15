import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { saveQueryToStorage, syncLeadToBackend } from '../utils/excelExport';
import { saveLead } from '../services/dataService';

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

    try {
      // 1. Save query to persistent local storage & backend API
      saveQueryToStorage(formData);
      await saveLead(formData);

      // 2. Transmit to Cloud Spreadsheet Webhook / Backend
      await syncLeadToBackend(formData);
    } catch (err) {
      console.warn('Lead capture error:', err);
    } finally {
      setIsSyncing(false);
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
      solution: 'ERP Global',
      message: ''
    });
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(3px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        className="form_wrapper column_alignment"
        style={{
          background: '#FFFFFF',
          width: '100%',
          maxWidth: '480px',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.25)',
          padding: '28px 24px',
          position: 'relative',
          margin: 0
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'none',
            border: 'none',
            fontSize: '18px',
            color: '#767575',
            cursor: 'pointer',
            padding: '4px'
          }}
          aria-label="Close"
        >
          <i className="fas fa-times"></i>
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <CheckCircle size={56} color="#1e95d3" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#212121', marginBottom: '8px' }}>
              Enquiry Received!
            </h3>
            <p style={{ color: '#5f5f5f', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '24px' }}>
              Thank you for reaching out. Our solution consultant will get in touch with you shortly.
            </p>
            <button
              onClick={handleReset}
              className="accent_button"
              style={{ width: '100%', borderRadius: '6px' }}
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="column_alignment" style={{ width: '100%' }}>
            <span className="title" style={{ fontSize: '22px', fontWeight: 700, color: '#212121', marginBottom: '20px' }}>
              <b style={{ color: 'var(--colorAccent)' }}>Enquire</b> Now
            </span>

            <input
              name="name"
              placeholder="Full Name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <input
              name="company_name"
              placeholder="Company Name"
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />

            <input
              name="mobile"
              placeholder="Mobile Number"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />

            <input
              name="email"
              placeholder="Email Id"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <input
              name="country"
              placeholder="Country"
              type="text"
              required
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            />

            <select
              value={formData.solution}
              onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
              style={{
                padding: '10px 16px',
                width: '100%',
                fontSize: '14px',
                marginBottom: '14px',
                background: '#f6f6f6',
                borderRadius: '4px',
                outline: 'none',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                color: '#212121'
              }}
            >
              <option value="ERP Global">Aasaan Enterprises (Global)</option>
              <option value="ERP Lite">Aasaan ERP Lite</option>
              <option value="AWM Waste Management">AWM (Waste Management)</option>
            </select>

            <textarea
              className="input_field"
              name="message"
              placeholder="Message / Requirements"
              required
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{ resize: 'vertical', minHeight: '80px' }}
            />

            <button
              className="accent_button align_self_center"
              type="submit"
              disabled={isSyncing}
              style={{
                width: '100%',
                marginTop: '10px',
                borderRadius: '6px',
                opacity: isSyncing ? 0.7 : 1
              }}
            >
              {isSyncing ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
