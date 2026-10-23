import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Send, Check, AlertCircle, Phone, Mail, Building, Globe, MapPin } from 'lucide-react';
import { saveQueryToStorage, syncLeadToBackend } from '../utils/excelExport';
import { saveLead, sendLeadToOfficialAasaanApi, sendLeadEmailNotification } from '../services/dataService';
import {
  validateEmail,
  validatePhone,
  COUNTRY_CODES,
  INDIAN_STATES_STD
} from '../utils/validationHelper';

export default function ScheduleDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'India',
    state: 'Delhi NCR',
    solution: 'Aasaan ERP Enterprise',
    message: ''
  });

  const [countryCode, setCountryCode] = useState('+91');
  const [phoneType, setPhoneType] = useState('mobile'); // 'mobile' | 'landline'
  const [selectedState, setSelectedState] = useState('Delhi NCR');

  // Validation States
  const [emailError, setEmailError] = useState('');
  const [emailSuggestion, setEmailSuggestion] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [phoneError, setPhoneError] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [phoneSuccessMsg, setPhoneSuccessMsg] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const isSubmittingRef = React.useRef(false);

  if (!isOpen) return null;

  // Real-time Email Validation
  const handleEmailChange = (val) => {
    setFormData((prev) => ({ ...prev, email: val }));
    setEmailSuggestion('');

    if (!val || !val.trim()) {
      setEmailError('');
      setIsEmailValid(false);
      return;
    }

    const res = validateEmail(val);
    if (res.isValid) {
      setEmailError('');
      setIsEmailValid(true);
      if (res.suggestion) {
        setEmailSuggestion(res.suggestion);
      }
    } else {
      setIsEmailValid(false);
      // Only show error text if user typed past '@' or has several chars
      if (val.length > 5 && (val.includes('@') || val.includes('.'))) {
        setEmailError(res.message);
      } else {
        setEmailError('');
      }
    }
  };

  const handleEmailBlur = () => {
    if (!formData.email || !formData.email.trim()) {
      setEmailError('Work email is required.');
      setIsEmailValid(false);
      return;
    }
    const res = validateEmail(formData.email);
    if (!res.isValid) {
      setEmailError(res.message);
      setIsEmailValid(false);
    } else {
      setEmailError('');
      setIsEmailValid(true);
      if (res.suggestion) setEmailSuggestion(res.suggestion);
    }
  };

  const applyEmailSuggestion = () => {
    if (emailSuggestion) {
      setFormData((prev) => ({ ...prev, email: emailSuggestion }));
      setEmailSuggestion('');
      setEmailError('');
      setIsEmailValid(true);
    }
  };

  // Real-time Phone Validation
  const handlePhoneChange = (val) => {
    setFormData((prev) => ({ ...prev, phone: val }));

    if (!val || !val.trim()) {
      setPhoneError('');
      setIsPhoneValid(false);
      setPhoneSuccessMsg('');
      return;
    }

    const res = validatePhone(val, countryCode, phoneType, selectedState);
    if (res.isValid) {
      setPhoneError('');
      setIsPhoneValid(true);
      setPhoneSuccessMsg(res.message);
    } else {
      setIsPhoneValid(false);
      setPhoneSuccessMsg('');
      const cleanDigits = val.replace(/\D/g, '');
      if (cleanDigits.length >= 4) {
        setPhoneError(res.message);
      } else {
        setPhoneError('');
      }
    }
  };

  const handlePhoneBlur = () => {
    if (!formData.phone || !formData.phone.trim()) {
      setPhoneError('Phone number is required.');
      setIsPhoneValid(false);
      setPhoneSuccessMsg('');
      return;
    }
    const res = validatePhone(formData.phone, countryCode, phoneType, selectedState);
    if (!res.isValid) {
      setPhoneError(res.message);
      setIsPhoneValid(false);
      setPhoneSuccessMsg('');
    } else {
      setPhoneError('');
      setIsPhoneValid(true);
      setPhoneSuccessMsg(res.message);
    }
  };

  const handleCountryChange = (newCode) => {
    setCountryCode(newCode);
    const countryObj = COUNTRY_CODES.find((c) => c.code === newCode);
    if (countryObj) {
      setFormData((prev) => ({ ...prev, country: countryObj.name }));
    }
    // Re-validate phone with new country rules
    if (formData.phone) {
      const res = validatePhone(formData.phone, newCode, phoneType, selectedState);
      setIsPhoneValid(res.isValid);
      setPhoneError(res.isValid ? '' : res.message);
      setPhoneSuccessMsg(res.isValid ? res.message : '');
    }
  };

  const handleStateChange = (newState) => {
    setSelectedState(newState);
    setFormData((prev) => ({ ...prev, state: newState }));
    if (countryCode === '+91' && formData.phone) {
      const res = validatePhone(formData.phone, countryCode, phoneType, newState);
      setIsPhoneValid(res.isValid);
      setPhoneError(res.isValid ? '' : res.message);
      setPhoneSuccessMsg(res.isValid ? res.message : '');
    }
  };

  const handlePhoneTypeChange = (newType) => {
    setPhoneType(newType);
    if (countryCode === '+91' && formData.phone) {
      const res = validatePhone(formData.phone, countryCode, newType, selectedState);
      setIsPhoneValid(res.isValid);
      setPhoneError(res.isValid ? '' : res.message);
      setPhoneSuccessMsg(res.isValid ? res.message : '');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Strict Validation Check
    const emailRes = validateEmail(formData.email);
    if (!emailRes.isValid) {
      setEmailError(emailRes.message);
      setIsEmailValid(false);
      return;
    }

    const phoneRes = validatePhone(formData.phone, countryCode, phoneType, selectedState);
    if (!phoneRes.isValid) {
      setPhoneError(phoneRes.message);
      setIsPhoneValid(false);
      return;
    }

    if (isSubmittingRef.current || isSyncing) return;
    isSubmittingRef.current = true;
    setIsSyncing(true);

    const formattedLead = {
      ...formData,
      phone: phoneRes.formatted || `${countryCode} ${formData.phone}`,
      rawPhone: phoneRes.cleanDigits || formData.phone,
      countryCode,
      phoneType,
      state: countryCode === '+91' ? selectedState : (formData.state || ''),
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    try {
      // 1. Submit lead to Official Aasaan ERP REST API (single unique dispatch)
      await sendLeadToOfficialAasaanApi(formattedLead);

      // 2. Dispatch real-time email notification alert to admin-configured lead email
      sendLeadEmailNotification(formattedLead).catch((err) => console.warn('Notification email error:', err));

      // 3. Save query to persistent storage & backend API for admin dashboard
      saveQueryToStorage(formattedLead);
      await saveLead(formattedLead);

      // 4. Transmit to Cloud Spreadsheet Webhook / Backend Excel
      await syncLeadToBackend(formattedLead);
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
      state: 'Delhi NCR',
      solution: 'Aasaan ERP Enterprise',
      message: ''
    });
    setCountryCode('+91');
    setPhoneType('mobile');
    setSelectedState('Delhi NCR');
    setEmailError('');
    setEmailSuggestion('');
    setIsEmailValid(false);
    setPhoneError('');
    setIsPhoneValid(false);
    setPhoneSuccessMsg('');
    onClose();
  };

  // Find active state STD
  const activeStateObj = INDIAN_STATES_STD.find((s) => s.state === selectedState) || INDIAN_STATES_STD[0];

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
          maxWidth: '580px',
          maxHeight: '92vh',
          borderRadius: '24px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 30px 70px -15px rgba(0,0,0,0.3)',
          overflowY: 'auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0b1e36 0%, #1e95d3 100%)',
          color: '#FFFFFF',
          padding: '26px 28px 22px',
          position: 'relative'
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '18px',
              right: '18px',
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
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')}
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
            marginBottom: '8px'
          }}>
            <Sparkles size={12} color="#ffbe3d" /> 1-on-1 Guided Architecture Walkthrough
          </span>

          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', margin: '4px 0 0' }}>
            Schedule an Aasaan ERP Demo
          </h3>
          <p style={{ fontSize: '13.5px', color: '#e0f2fe', margin: '4px 0 0' }}>
            Experience how Aasaan simplifies your inventory, GST billing, and factory workflows.
          </p>
        </div>

        {/* Content Body */}
        <div style={{ padding: '24px 28px' }}>
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
                Thank you, <strong>{formData.name}</strong>. Your inquiry has been verified and transmitted to our enterprise solutions team.
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
                  Verified Inquiry Details
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '13px', color: '#334155' }}>
                  <div><strong>Company:</strong> {formData.company || 'N/A'}</div>
                  <div><strong>Solution:</strong> {formData.solution}</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Phone:</strong> {formData.phone}</div>
                  {countryCode === '+91' && <div><strong>State / Region:</strong> {selectedState}</div>}
                  <div><strong>Country:</strong> {formData.country}</div>
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
              {/* Row 1: Name & Company */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#1E293B', marginBottom: '4px' }}>
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
                      fontSize: '13.5px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#1e95d3')}
                    onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#1E293B', marginBottom: '4px' }}>
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. ABC Industries Ltd."
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      borderRadius: '8px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '13.5px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#1e95d3')}
                    onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                  />
                </div>
              </div>

              {/* Row 2: Work Email with Real-Time Validator */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <label style={{ fontSize: '12.5px', fontWeight: 700, color: '#1E293B' }}>
                    Work Email Address *
                  </label>
                  {isEmailValid && (
                    <span style={{ fontSize: '11.5px', color: '#059669', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <CheckCircle size={13} /> Valid format
                    </span>
                  )}
                </div>
                <div style={{ position: 'relative' }}>
                  <Mail size={16} color={emailError ? '#EF4444' : (isEmailValid ? '#059669' : '#94A3B8')} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    onBlur={handleEmailBlur}
                    placeholder="name@company.com"
                    style={{
                      width: '100%',
                      padding: '9px 12px 9px 36px',
                      borderRadius: '8px',
                      border: `1.5px solid ${emailError ? '#EF4444' : (isEmailValid ? '#10B981' : '#cbd5e1')}`,
                      fontSize: '13.5px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      background: emailError ? '#FEF2F2' : (isEmailValid ? '#F0FDF4' : '#FFFFFF')
                    }}
                  />
                </div>

                {emailError && (
                  <div style={{ fontSize: '11.5px', color: '#DC2626', fontWeight: 600, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <AlertCircle size={12} /> {emailError}
                  </div>
                )}

                {emailSuggestion && (
                  <div style={{
                    fontSize: '12px',
                    color: '#1E40AF',
                    background: '#EFF6FF',
                    border: '1px solid #BFDBFE',
                    padding: '6px 10px',
                    borderRadius: '6px',
                    marginTop: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span>Did you mean <strong>{emailSuggestion}</strong>?</span>
                    <button
                      type="button"
                      onClick={applyEmailSuggestion}
                      style={{
                        background: 'var(--primary-blue)',
                        color: '#FFFFFF',
                        border: 'none',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>

              {/* Row 3: Country Code & State-Wise Code Selector */}
              <div style={{ background: '#F8FAFC', padding: '12px 14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: countryCode === '+91' ? '1fr 1fr' : '1fr', gap: '10px', marginBottom: '10px' }}>
                  {/* Country Selector */}
                  <div>
                    <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, color: '#475569', marginBottom: '3px' }}>
                      Country Code
                    </label>
                    <select
                      value={countryCode}
                      onChange={(e) => handleCountryChange(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '7px 10px',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        fontSize: '13px',
                        background: '#FFFFFF',
                        outline: 'none',
                        boxSizing: 'border-box',
                        cursor: 'pointer'
                      }}
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option key={c.id} value={c.code}>
                          {c.flag} {c.name} ({c.code})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Indian State / STD Code Selector */}
                  {countryCode === '+91' && (
                    <div>
                      <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, color: '#475569', marginBottom: '3px' }}>
                        State
                      </label>
                      <select
                        value={selectedState}
                        onChange={(e) => handleStateChange(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '7px 10px',
                          borderRadius: '6px',
                          border: '1px solid #cbd5e1',
                          fontSize: '13px',
                          background: '#FFFFFF',
                          outline: 'none',
                          boxSizing: 'border-box',
                          cursor: 'pointer'
                        }}
                      >
                        {INDIAN_STATES_STD.map((s) => (
                          <option key={s.state} value={s.state}>
                            {s.state}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                {/* Phone Input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <label style={{ fontSize: '12.5px', fontWeight: 700, color: '#1E293B' }}>
                      Mobile / WhatsApp Number *
                    </label>
                    {isPhoneValid && (
                      <span style={{ fontSize: '11.5px', color: '#059669', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <CheckCircle size={13} /> {phoneSuccessMsg || 'Verified'}
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{
                      background: '#E2E8F0',
                      color: '#334155',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      userSelect: 'none'
                    }}>
                      {countryCode}
                    </span>

                    <div style={{ position: 'relative', flex: 1 }}>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        onBlur={handlePhoneBlur}
                        placeholder={
                          countryCode === '+91'
                            ? (phoneType === 'mobile' ? '98112 34567 (10 digits starting with 6-9)' : `e.g. ${activeStateObj.std}-23456789`)
                            : 'Enter phone number'
                        }
                        style={{
                          width: '100%',
                          padding: '9px 12px',
                          borderRadius: '8px',
                          border: `1.5px solid ${phoneError ? '#EF4444' : (isPhoneValid ? '#10B981' : '#cbd5e1')}`,
                          fontSize: '13.5px',
                          outline: 'none',
                          boxSizing: 'border-box',
                          background: phoneError ? '#FEF2F2' : (isPhoneValid ? '#F0FDF4' : '#FFFFFF')
                        }}
                      />
                    </div>
                  </div>

                  {phoneError && (
                    <div style={{ fontSize: '11.5px', color: '#DC2626', fontWeight: 600, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <AlertCircle size={12} /> {phoneError}
                    </div>
                  )}

                  <div style={{ fontSize: '11px', color: '#64748B', marginTop: '4px' }}>
                    {countryCode === '+91'
                      ? (phoneType === 'mobile'
                          ? '💡 Enter 10 digits without leading 0 or +91. Must start with 6, 7, 8, or 9.'
                          : `💡 Standard office telephone for ${selectedState}. Includes area STD code (${activeStateObj.std}).`)
                      : `💡 Country dial code ${countryCode} will be automatically formatted.`}
                  </div>
                </div>
              </div>

              {/* Row 4: Solution & State confirmation */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#1E293B', marginBottom: '4px' }}>
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
                      fontSize: '13.5px',
                      outline: 'none',
                      background: '#FFF',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#1e95d3')}
                    onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                  >
                    <option value="Aasaan ERP Enterprise">Aasaan ERP Enterprise</option>
                    <option value="Aasaan ERP Lite">Aasaan ERP Lite</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#1E293B', marginBottom: '4px' }}>
                    Country & Region
                  </label>
                  <input
                    type="text"
                    value={countryCode === '+91' ? `${formData.country} (${selectedState})` : formData.country}
                    readOnly
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      borderRadius: '8px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '13px',
                      outline: 'none',
                      background: '#F1F5F9',
                      color: '#475569',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              {/* Row 5: Specific Requirements */}
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#1E293B', marginBottom: '4px' }}>
                  Specific Requirements or Current Pain Points
                </label>
                <textarea
                  rows="2"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your setup (e.g. migrating from Tally/Excel, factory floor BOM, multi-bin warehouse, CPCB weighbridge)..."
                  style={{
                    width: '100%',
                    padding: '9px 12px',
                    borderRadius: '8px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '13px',
                    outline: 'none',
                    resize: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#1e95d3')}
                  onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSyncing}
                style={{
                  width: '100%',
                  padding: '13px',
                  fontSize: '15px',
                  fontWeight: 800,
                  marginTop: '2px',
                  background: isEmailValid && isPhoneValid ? '#059669' : 'var(--colorAccent)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: isSyncing ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(30,149,211,0.3)',
                  transition: 'all 0.2s ease',
                  opacity: isSyncing ? 0.75 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isSyncing) e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  if (!isSyncing) e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Send size={16} />
                <span>{isSyncing ? 'Submitting & Verifying...' : 'Confirm & Request Architecture Demo'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
