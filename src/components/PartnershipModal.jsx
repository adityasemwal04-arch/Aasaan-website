import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Handshake, Send, Check, AlertCircle, Phone, Mail, Building, Globe, MapPin } from 'lucide-react';
import { saveQueryToStorage, syncLeadToBackend } from '../utils/excelExport';
import { saveLead, sendLeadToOfficialAasaanApi, sendLeadEmailNotification } from '../services/dataService';
import {
  validateEmail,
  validatePhone,
  COUNTRY_CODES,
  INDIAN_STATES_STD
} from '../utils/validationHelper';

// Partner-specific solution types
const PARTNER_SOLUTIONS = [
  { value: 'Reseller Partner', label: '🤝 Reseller Partner', desc: 'Sell Aasaan ERP and earn commissions' },
  { value: 'Implementation Partner', label: '⚙️ Implementation Partner', desc: 'Deploy & implement Aasaan ERP for clients' },
  { value: 'Strategic Alliance', label: '🌐 Strategic Alliance', desc: 'Deep co-sell & co-build partnership' },
];

export default function PartnershipModal({ isOpen, onClose, initialSolution }) {
  const defaultSolution = (typeof initialSolution === 'string' && initialSolution.trim().length > 0)
    ? initialSolution
    : 'Reseller Partner';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'India',
    state: 'Delhi NCR',
    solution: defaultSolution,
    message: ''
  });

  useEffect(() => {
    if (isOpen) {
      const sol = (typeof initialSolution === 'string' && initialSolution.trim().length > 0)
        ? initialSolution
        : 'Reseller Partner';
      setFormData((prev) => ({
        ...prev,
        solution: sol,
      }));
    }
  }, [initialSolution, isOpen]);

  const [countryCode, setCountryCode] = useState('+91');
  const [phoneType, setPhoneType] = useState('mobile');
  const [selectedState, setSelectedState] = useState('Delhi NCR');

  // Validation
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

  // Email validation handlers
  const handleEmailChange = (val) => {
    setFormData((prev) => ({ ...prev, email: val }));
    setEmailSuggestion('');
    if (!val || !val.trim()) { setEmailError(''); setIsEmailValid(false); return; }
    const res = validateEmail(val);
    if (res.isValid) {
      setEmailError(''); setIsEmailValid(true);
      if (res.suggestion) setEmailSuggestion(res.suggestion);
    } else {
      setIsEmailValid(false);
      if (val.length > 5 && (val.includes('@') || val.includes('.'))) setEmailError(res.message);
      else setEmailError('');
    }
  };

  const handleEmailBlur = () => {
    if (!formData.email || !formData.email.trim()) { setEmailError('Work email is required.'); setIsEmailValid(false); return; }
    const res = validateEmail(formData.email);
    if (!res.isValid) { setEmailError(res.message); setIsEmailValid(false); }
    else { setEmailError(''); setIsEmailValid(true); if (res.suggestion) setEmailSuggestion(res.suggestion); }
  };

  const applyEmailSuggestion = () => {
    if (emailSuggestion) {
      setFormData((prev) => ({ ...prev, email: emailSuggestion }));
      setEmailSuggestion(''); setEmailError(''); setIsEmailValid(true);
    }
  };

  // Phone validation handlers
  const handlePhoneChange = (val) => {
    setFormData((prev) => ({ ...prev, phone: val }));
    if (!val || !val.trim()) { setPhoneError(''); setIsPhoneValid(false); setPhoneSuccessMsg(''); return; }
    const res = validatePhone(val, countryCode, phoneType, selectedState);
    if (res.isValid) { setPhoneError(''); setIsPhoneValid(true); setPhoneSuccessMsg(res.message); }
    else {
      setIsPhoneValid(false); setPhoneSuccessMsg('');
      const cleanDigits = val.replace(/\D/g, '');
      if (cleanDigits.length >= 4) setPhoneError(res.message);
      else setPhoneError('');
    }
  };

  const handlePhoneBlur = () => {
    if (!formData.phone || !formData.phone.trim()) { setPhoneError('Phone number is required.'); setIsPhoneValid(false); setPhoneSuccessMsg(''); return; }
    const res = validatePhone(formData.phone, countryCode, phoneType, selectedState);
    if (!res.isValid) { setPhoneError(res.message); setIsPhoneValid(false); setPhoneSuccessMsg(''); }
    else { setPhoneError(''); setIsPhoneValid(true); setPhoneSuccessMsg(res.message); }
  };

  const handleCountryChange = (newCode) => {
    setCountryCode(newCode);
    const countryObj = COUNTRY_CODES.find((c) => c.code === newCode);
    if (countryObj) setFormData((prev) => ({ ...prev, country: countryObj.name }));
    if (formData.phone) {
      const res = validatePhone(formData.phone, newCode, phoneType, selectedState);
      setIsPhoneValid(res.isValid); setPhoneError(res.isValid ? '' : res.message); setPhoneSuccessMsg(res.isValid ? res.message : '');
    }
  };

  const handleStateChange = (newState) => {
    setSelectedState(newState); setFormData((prev) => ({ ...prev, state: newState }));
    if (countryCode === '+91' && formData.phone) {
      const res = validatePhone(formData.phone, countryCode, phoneType, newState);
      setIsPhoneValid(res.isValid); setPhoneError(res.isValid ? '' : res.message); setPhoneSuccessMsg(res.isValid ? res.message : '');
    }
  };

  const handlePhoneTypeChange = (newType) => {
    setPhoneType(newType);
    if (countryCode === '+91' && formData.phone) {
      const res = validatePhone(formData.phone, countryCode, newType, selectedState);
      setIsPhoneValid(res.isValid); setPhoneError(res.isValid ? '' : res.message); setPhoneSuccessMsg(res.isValid ? res.message : '');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRes = validateEmail(formData.email);
    if (!emailRes.isValid) { setEmailError(emailRes.message); setIsEmailValid(false); return; }

    const phoneRes = validatePhone(formData.phone, countryCode, phoneType, selectedState);
    if (!phoneRes.isValid) { setPhoneError(phoneRes.message); setIsPhoneValid(false); return; }

    if (isSubmittingRef.current || isSyncing) return;
    isSubmittingRef.current = true;
    setIsSyncing(true);

    const solutionStr = (typeof formData.solution === 'string' && formData.solution.trim().length > 0)
      ? formData.solution
      : 'Reseller Partner';

    const formattedLead = {
      ...formData,
      solution: solutionStr,
      phone: phoneRes.formatted || `${countryCode} ${formData.phone}`,
      rawPhone: phoneRes.cleanDigits || formData.phone,
      countryCode,
      phoneType,
      state: countryCode === '+91' ? selectedState : (formData.state || ''),
      leadType: 'Partnership Application',
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    try {
      await sendLeadToOfficialAasaanApi(formattedLead);
      sendLeadEmailNotification(formattedLead).catch((err) => console.warn('Notification email error:', err));
      saveQueryToStorage(formattedLead);
      await saveLead(formattedLead);
      await syncLeadToBackend(formattedLead);
    } catch (err) {
      console.warn('Partnership lead capture error:', err);
    } finally {
      setIsSyncing(false);
      isSubmittingRef.current = false;
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', company: '', email: '', phone: '', country: 'India', state: 'Delhi NCR', solution: 'Reseller Partner', message: '' });
    setCountryCode('+91'); setPhoneType('mobile'); setSelectedState('Delhi NCR');
    setEmailError(''); setEmailSuggestion(''); setIsEmailValid(false);
    setPhoneError(''); setIsPhoneValid(false); setPhoneSuccessMsg('');
    onClose();
  };

  const activeStateObj = INDIAN_STATES_STD.find((s) => s.state === selectedState) || INDIAN_STATES_STD[0];
  const inputStyle = {
    width: '100%', padding: '10px 14px 10px 38px', borderRadius: '8px',
    border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none', boxSizing: 'border-box',
    background: '#FFFFFF', color: '#1E293B',
  };

  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 99999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#FFFFFF', width: '100%', maxWidth: '580px',
          maxHeight: '92vh', borderRadius: '24px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 30px 70px -15px rgba(0,0,0,0.3)',
          overflowY: 'auto', position: 'relative', display: 'flex', flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div style={{
          background: 'linear-gradient(135deg, #0b2236 0%, #1D4ED8 100%)',
          color: '#FFFFFF', padding: '26px 28px 22px', position: 'relative'
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '18px', right: '18px',
              background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%',
              width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#FFFFFF', cursor: 'pointer', transition: 'background 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.28)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '4px 12px', fontSize: '12px', fontWeight: 700,
            borderRadius: '999px', background: 'rgba(255,255,255,0.15)',
            color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '8px'
          }}>
            🤝 Aasaan Partner Program
          </span>

          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', margin: '4px 0 0' }}>
            Schedule a Partnership Call
          </h3>
          <p style={{ fontSize: '13.5px', color: '#bfdbfe', margin: '4px 0 0' }}>
            Join 20+ partner organisations across 10+ countries. Zero cost to join.
          </p>
        </div>

        {/* ── Body ── */}
        <div style={{ padding: '24px 28px' }}>
          {submitted ? (
            /* ── Success State ── */
            <div style={{ textAlign: 'center', padding: '16px 0' }}>
              <div style={{
                width: '64px', height: '64px', borderRadius: '50%',
                background: '#EFF6FF', color: '#1D4ED8',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <CheckCircle size={36} />
              </div>
              <h4 style={{ fontSize: '22px', fontWeight: 800, color: '#212121', margin: 0 }}>
                Partnership Application Sent! 🎉
              </h4>
              <p style={{ fontSize: '14.5px', color: '#64748b', marginTop: '8px', lineHeight: 1.5 }}>
                Thank you, <strong>{formData.name}</strong>. Our partner team will reach out within <strong>1 business day</strong> to schedule your 30-min discovery call.
              </p>

              <div style={{
                background: '#EFF6FF', border: '1px solid #BFDBFE',
                borderRadius: '14px', padding: '16px 20px', marginTop: '20px', textAlign: 'left'
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#1D4ED8', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                  Application Summary
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '13px', color: '#334155' }}>
                  <div><strong>Company:</strong> {formData.company || 'N/A'}</div>
                  <div><strong>Partnership Type:</strong> {typeof formData.solution === 'string' ? formData.solution : 'Reseller Partner'}</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Phone:</strong> {formData.phone}</div>
                  {countryCode === '+91' && <div><strong>State:</strong> {selectedState}</div>}
                  <div><strong>Country:</strong> {formData.country}</div>
                </div>
              </div>

              <div style={{
                marginTop: '16px', padding: '12px 16px',
                background: '#F0FDF4', border: '1px solid #BBF7D0',
                borderRadius: '10px', fontSize: '13px', color: '#166534'
              }}>
                ✅ Onboarding, training & certification are <strong>100% free</strong>. You'll receive portal access on Day 1.
              </div>

              <button
                onClick={handleReset}
                style={{
                  marginTop: '24px', padding: '12px 28px',
                  background: '#1D4ED8', color: '#FFFFFF',
                  border: 'none', borderRadius: '10px',
                  fontSize: '14.5px', fontWeight: 700, cursor: 'pointer'
                }}
              >
                Close
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} noValidate>

              {/* Partnership Type Selector (pill tabs) */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                  Partnership Type
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {PARTNER_SOLUTIONS.map((opt) => {
                    const isActive = formData.solution === opt.value;
                    return (
                      <button
                        type="button"
                        key={opt.value}
                        onClick={() => setFormData((prev) => ({ ...prev, solution: opt.value }))}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '12px',
                          padding: '12px 16px', borderRadius: '10px', cursor: 'pointer',
                          border: isActive ? '2px solid #1D4ED8' : '2px solid #E2E8F0',
                          background: isActive ? '#EFF6FF' : '#F8FAFC',
                          textAlign: 'left', transition: 'all 0.15s ease',
                        }}
                      >
                        <span style={{ fontSize: '22px', flexShrink: 0 }}>{opt.label.split(' ')[0]}</span>
                        <span>
                          <span style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: isActive ? '#1D4ED8' : '#334155' }}>
                            {opt.label.slice(opt.label.indexOf(' ') + 1)}
                          </span>
                          <span style={{ display: 'block', fontSize: '12px', color: '#64748B', marginTop: '1px' }}>
                            {opt.desc}
                          </span>
                        </span>
                        {isActive && (
                          <Check size={16} color="#1D4ED8" style={{ marginLeft: 'auto', flexShrink: 0 }} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div style={{ height: '1px', background: '#E2E8F0', margin: '4px 0 18px' }} />

              {/* Name */}
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                  Full Name *
                </label>
                <div style={{ position: 'relative' }}>
                  <Building size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Your full name"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Company */}
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                  Company / Organisation *
                </label>
                <div style={{ position: 'relative' }}>
                  <Building size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                    placeholder="Your company name"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Email */}
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                  Work Email *
                </label>
                <div style={{ position: 'relative' }}>
                  <Mail size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    onBlur={handleEmailBlur}
                    placeholder="you@company.com"
                    style={{
                      ...inputStyle,
                      borderColor: emailError ? '#EF4444' : isEmailValid ? '#22C55E' : '#CBD5E1',
                      paddingRight: '38px'
                    }}
                  />
                  {isEmailValid && (
                    <Check size={16} color="#22C55E" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  )}
                  {emailError && (
                    <AlertCircle size={16} color="#EF4444" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  )}
                </div>
                {emailError && <p style={{ fontSize: '12px', color: '#EF4444', margin: '4px 0 0' }}>{emailError}</p>}
                {emailSuggestion && !emailError && (
                  <p style={{ fontSize: '12px', color: '#F59E0B', margin: '4px 0 0' }}>
                    Did you mean{' '}
                    <button type="button" onClick={applyEmailSuggestion} style={{ color: '#1D4ED8', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 700, padding: 0 }}>
                      {emailSuggestion}
                    </button>?
                  </p>
                )}
              </div>

              {/* Phone */}
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                  Phone / WhatsApp *
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <select
                    value={countryCode}
                    onChange={(e) => handleCountryChange(e.target.value)}
                    style={{ padding: '10px 8px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px', background: '#F8FAFC', color: '#334155', flexShrink: 0, maxWidth: '110px' }}
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                    ))}
                  </select>
                  <div style={{ position: 'relative', flex: 1 }}>
                    <Phone size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      onBlur={handlePhoneBlur}
                      placeholder={countryCode === '+91' ? '10-digit mobile' : 'Phone number'}
                      style={{
                        ...inputStyle,
                        borderColor: phoneError ? '#EF4444' : isPhoneValid ? '#22C55E' : '#CBD5E1',
                        paddingRight: '38px'
                      }}
                    />
                    {isPhoneValid && (
                      <Check size={16} color="#22C55E" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    )}
                    {phoneError && (
                      <AlertCircle size={16} color="#EF4444" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    )}
                  </div>
                </div>
                {phoneError && <p style={{ fontSize: '12px', color: '#EF4444', margin: '4px 0 0' }}>{phoneError}</p>}
                {phoneSuccessMsg && !phoneError && <p style={{ fontSize: '12px', color: '#22C55E', margin: '4px 0 0' }}>{phoneSuccessMsg}</p>}

                {/* India landline/mobile toggle */}
                {countryCode === '+91' && (
                  <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                    {['mobile', 'landline'].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => handlePhoneTypeChange(t)}
                        style={{
                          padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, cursor: 'pointer',
                          border: '1px solid', transition: 'all 0.15s ease',
                          borderColor: phoneType === t ? '#1D4ED8' : '#CBD5E1',
                          background: phoneType === t ? '#EFF6FF' : '#F8FAFC',
                          color: phoneType === t ? '#1D4ED8' : '#64748B',
                        }}
                      >
                        {t === 'mobile' ? '📱 Mobile' : '☎️ Landline'}
                      </button>
                    ))}
                  </div>
                )}

                {/* India state selector */}
                {countryCode === '+91' && (
                  <div style={{ marginTop: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                      <MapPin size={13} color="#94A3B8" />
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#64748B' }}>
                        State / Region {activeStateObj && <span style={{ color: '#94A3B8', fontWeight: 400 }}>— STD: {activeStateObj.std}</span>}
                      </label>
                    </div>
                    <select
                      value={selectedState}
                      onChange={(e) => handleStateChange(e.target.value)}
                      style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13.5px', background: '#F8FAFC', color: '#334155' }}
                    >
                      {INDIAN_STATES_STD.map((s) => (
                        <option key={s.state} value={s.state}>{s.state}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Country (non-India) */}
              {countryCode !== '+91' && (
                <div style={{ marginBottom: '14px' }}>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                    Country / Region
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Globe size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData((prev) => ({ ...prev, country: e.target.value }))}
                      placeholder="Your country"
                      style={inputStyle}
                    />
                  </div>
                </div>
              )}

              {/* Message */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                  Tell us about your business (optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder="e.g. We are a 5-person consulting firm with ERP implementation experience in manufacturing…"
                  rows={3}
                  style={{
                    width: '100%', padding: '10px 14px', borderRadius: '8px',
                    border: '1px solid #CBD5E1', fontSize: '14px',
                    outline: 'none', boxSizing: 'border-box', resize: 'vertical',
                    background: '#FFFFFF', color: '#1E293B',
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSyncing}
                style={{
                  width: '100%', padding: '14px 20px',
                  background: isSyncing ? '#93C5FD' : '#1D4ED8',
                  color: '#FFFFFF', border: 'none', borderRadius: '12px',
                  fontSize: '15.5px', fontWeight: 800, cursor: isSyncing ? 'wait' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => { if (!isSyncing) e.currentTarget.style.background = '#1E40AF'; }}
                onMouseLeave={(e) => { if (!isSyncing) e.currentTarget.style.background = '#1D4ED8'; }}
              >
                {isSyncing ? (
                  <>
                    <span style={{ width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} />
                    Submitting Application…
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Submit Partnership Application
                  </>
                )}
              </button>

              <p style={{ textAlign: 'center', fontSize: '11.5px', color: '#94A3B8', marginTop: '12px' }}>
                🔒 Your details are encrypted and never shared with third parties.
              </p>

              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
