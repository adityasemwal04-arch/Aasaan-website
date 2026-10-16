import React from 'react';
import {
  ArrowRight,
  Users,
  Award,
  Target,
  Heart,
  Globe,
  Zap,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Star,
  CheckCircle2,
  Layers,
  Building2,
  Clock,
  MessageSquare
} from 'lucide-react';
import { getAssetUrl, handleImageError } from '../utils/assetHelper';

export default function AboutUsPage({ onOpenDemo }) {
  const team = [
    {
      name: 'Amit Sharma',
      role: 'Chief Executive Officer',
      initials: 'AS',
      bg: 'linear-gradient(135deg, #1e95d3, #0284c7)',
      desc: '15+ years scaling enterprise software companies across India and the Middle East.'
    },
    {
      name: 'Priya Nair',
      role: 'Chief Technology Officer',
      initials: 'PN',
      bg: 'linear-gradient(135deg, #6366f1, #4f46e5)',
      desc: 'Former AWS Solutions Architect with deep expertise in distributed ERP systems.'
    },
    {
      name: 'Rahul Mehta',
      role: 'Head of Product Design',
      initials: 'RM',
      bg: 'linear-gradient(135deg, #10b981, #059669)',
      desc: 'UX-obsessed designer who believes ERP should feel as intuitive as a consumer app.'
    },
    {
      name: 'Fatima Al-Rashid',
      role: 'Head of Global Operations',
      initials: 'FA',
      bg: 'linear-gradient(135deg, #f59e0b, #d97706)',
      desc: 'Driving enterprise ERP expansion across UAE, Saudi Arabia, and East Africa.'
    },
    {
      name: 'Vikram Joshi',
      role: 'Head of Customer Success',
      initials: 'VJ',
      bg: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
      desc: 'Pioneered the Aasaan 7-day go-live methodology trusted by 100+ enterprises.'
    },
    {
      name: 'Neha Kapoor',
      role: 'Chief Financial Officer',
      initials: 'NK',
      bg: 'linear-gradient(135deg, #dc2626, #b91c1c)',
      desc: 'CA with ICAI and CPA credentials, ensuring Aasaan stays financially robust and compliant.'
    }
  ];

  const values = [
    {
      icon: Heart,
      color: '#dc2626',
      bg: 'rgba(220,38,38,0.08)',
      title: 'Customer Obsession',
      desc: 'Every feature we build starts with a customer problem. Every decision we make is filtered through: "Does this make our clients more successful?"'
    },
    {
      icon: Zap,
      color: '#f59e0b',
      bg: 'rgba(245,158,11,0.08)',
      title: 'Speed & Simplicity',
      desc: 'We believe enterprise software should be fast to deploy and easy to use. We refuse to build complexity for its own sake.'
    },
    {
      icon: ShieldCheck,
      color: '#10b981',
      bg: 'rgba(16,185,129,0.08)',
      title: 'Trust & Transparency',
      desc: 'No hidden fees, no lock-in surprises, no fine print. What we promise is exactly what we deliver — with audit trails to prove it.'
    },
    {
      icon: TrendingUp,
      color: '#1e95d3',
      bg: 'rgba(30,149,211,0.08)',
      title: 'Continuous Innovation',
      desc: 'The business world never stops moving. Neither do we. Our product team ships meaningful improvements every sprint.'
    },
    {
      icon: Users,
      color: '#6366f1',
      bg: 'rgba(99,102,241,0.08)',
      title: 'People First Culture',
      desc: 'We invest in our team because a happy, empowered team builds better products and delivers exceptional client service.'
    },
    {
      icon: Globe,
      color: '#0284c7',
      bg: 'rgba(2,132,199,0.08)',
      title: 'Global Thinking, Local Execution',
      desc: 'Enterprise-grade architecture built for global operations, with deep local compliance across India, UAE, KSA, and beyond.'
    }
  ];

  const milestones = [
    { year: '2014', event: 'Aasaan ERP founded in Gurgaon, India with a vision to make enterprise software genuinely easy.' },
    { year: '2016', event: 'Launched our first GST-ready cloud ERP suite, onboarding 15 manufacturing clients within 6 months.' },
    { year: '2018', event: 'Expanded into UAE and Saudi Arabia. First Middle East waste management ERP deployment for a municipal client.' },
    { year: '2020', event: 'Crossed 50+ enterprise client milestone. Launched AWM specialised waste management ERP vertical.' },
    { year: '2022', event: 'AWS partnership cemented. Re-architected platform on microservices for multi-region high availability.' },
    { year: '2024', event: 'Launched AI Co-Pilot engine. 100+ enterprise clients across 6 countries. 98.7% client retention.' },
    { year: '2026', event: 'Next-gen ERP platform with native AI workflows, generative BI reporting, and edge-IoT integration.' }
  ];

  const stats = [
    { value: '100+', label: 'Enterprises Served', icon: Building2 },
    { value: '10+', label: 'Years of Innovation', icon: Award },
    { value: '6', label: 'Countries of Operation', icon: Globe },
    { value: '98.7%', label: 'Client Retention Rate', icon: Heart }
  ];

  return (
    <div style={{ marginTop: '106px' }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <div style={{
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a54 50%, #1e95d3 100%)',
        padding: '90px 24px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255,255,255,0.12)',
            color: '#93c5fd',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '6px 16px',
            borderRadius: '20px',
            marginBottom: '24px'
          }}>
            <Star size={13} /> Our Story
          </span>
          <h1 style={{ fontSize: '48px', fontWeight: 900, color: '#ffffff', margin: '0 0 18px', lineHeight: 1.15 }}>
            Built by Enterprise Operators.{' '}
            <span style={{ background: 'linear-gradient(90deg, #38bdf8, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              For Enterprise Operators.
            </span>
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, maxWidth: '680px', margin: '0 auto 32px' }}>
            Aasaan ERP was born from frustration with software that was powerful on paper but painful in practice. We built the ERP we always wished existed — genuinely simple, deeply integrated, and truly enterprise-grade.
          </p>
          <button
            onClick={onOpenDemo}
            style={{
              background: '#ffffff',
              color: '#1e95d3',
              border: 'none',
              borderRadius: '10px',
              padding: '14px 30px',
              fontSize: '15px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#f0f9ff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            See Our ERP in Action <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* ── STATS BAR ─────────────────────────────────────────────────── */}
      <div style={{
        background: 'linear-gradient(90deg, #1e95d3 0%, #0d6ea0 100%)',
        padding: '28px 24px'
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          textAlign: 'center'
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <s.icon size={22} style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2px' }} />
              <div style={{ fontSize: '30px', fontWeight: 900, color: '#ffffff' }}>{s.value}</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MISSION ──────────────────────────────────────────────────── */}
      <div style={{ background: '#ffffff', padding: '90px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 500px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(30,149,211,0.1)',
              color: '#0d6ea0',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '6px 14px',
              borderRadius: '20px',
              marginBottom: '16px'
            }}>
              <Target size={13} /> Our Mission
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#0f172a', margin: '0 0 20px', lineHeight: 1.25 }}>
              Making Enterprise Operations{' '}
              <span style={{ color: '#1e95d3' }}>Genuinely Effortless</span>
            </h2>
            <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.75, marginBottom: '20px' }}>
              Our mission is to democratise enterprise-grade operational intelligence — making the same tools that Fortune 500 companies use accessible to the fastest-growing businesses in emerging markets.
            </p>
            <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.75, marginBottom: '28px' }}>
              We believe that the future of business operations is <strong style={{ color: '#0f172a' }}>unified, intelligent, and cloud-native</strong>. Every feature we ship moves us one step closer to a world where no business is held back by outdated systems or manual spreadsheets.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {['Cloud-Native Architecture', 'AI-Powered Workflows', 'Real-Time Intelligence', 'Zero Learning Curve'].map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    background: '#f0f9ff',
                    color: '#0284c7',
                    border: '1px solid #bae6fd',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    padding: '6px 14px',
                    borderRadius: '20px'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div style={{ flex: '1 1 440px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
              borderRadius: '24px',
              padding: '40px',
              border: '1px solid #bae6fd'
            }}>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', marginBottom: '20px' }}>Our Vision for 2030</div>
              {[
                { icon: Cpu, title: 'AI-First ERP Platform', desc: 'Every workflow intelligently augmented by machine learning.' },
                { icon: Globe, title: 'Pan-Asia & Middle East Expansion', desc: '25+ country deployments with localised compliance engines.' },
                { icon: Zap, title: '3-Day Go-Live Standard', desc: 'Reduce implementation time to 72 hours through AI-assisted configuration.' },
                { icon: Layers, title: '500+ Enterprise Clients', desc: 'The most trusted ERP brand across emerging market enterprises.' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    paddingBottom: idx < 3 ? '20px' : 0,
                    borderBottom: idx < 3 ? '1px solid #bae6fd' : 'none',
                    marginBottom: idx < 3 ? '20px' : 0
                  }}
                >
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: '#ffffff',
                    border: '1px solid #bae6fd',
                    color: '#1e95d3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <item.icon size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#0f172a' }}>{item.title}</div>
                    <div style={{ fontSize: '13px', color: '#64748b', marginTop: '2px', lineHeight: 1.45 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── VALUES ───────────────────────────────────────────────────── */}
      <div style={{ background: '#f8fafc', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#0f172a', margin: '0 0 14px' }}>
              The Values That <span style={{ color: '#1e95d3' }}>Drive Us</span>
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
              These aren't just wall posters. They're the filters through which every product decision, client interaction, and team hire passes.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '22px'
          }}>
            {values.map((val, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '28px',
                  display: 'flex',
                  gap: '18px',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(30,149,211,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.03)';
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: val.bg,
                  color: val.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <val.icon size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>{val.title}</div>
                  <div style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.6 }}>{val.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TEAM ─────────────────────────────────────────────────────── */}
      <div style={{ background: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#0f172a', margin: '0 0 14px' }}>
              The People Behind <span style={{ color: '#1e95d3' }}>Aasaan ERP</span>
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
              A passionate team of enterprise software veterans, cloud architects, and industry specialists united by one goal — making ERP effortless.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '22px'
          }}>
            {team.map((member, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '28px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '18px',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(30,149,211,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(30,149,211,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.03)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  background: member.bg,
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '18px',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(30,149,211,0.2)'
                }}>
                  {member.initials}
                </div>
                <div>
                  <div style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a' }}>{member.name}</div>
                  <div style={{ fontSize: '12.5px', color: '#1e95d3', fontWeight: 700, marginBottom: '8px' }}>{member.role}</div>
                  <div style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.55 }}>{member.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TIMELINE ─────────────────────────────────────────────────── */}
      <div style={{ background: '#f8fafc', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#0f172a', margin: '0 0 14px' }}>
              Our <span style={{ color: '#1e95d3' }}>Journey</span>
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '520px', margin: '0 auto', lineHeight: 1.6 }}>
              Over a decade of continuous innovation, customer partnership, and platform evolution.
            </p>
          </div>

          <div style={{ position: 'relative', paddingLeft: '36px', borderLeft: '2px solid #bae6fd' }}>
            {milestones.map((m, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  paddingBottom: idx < milestones.length - 1 ? '32px' : 0,
                  marginBottom: idx < milestones.length - 1 ? '0' : 0
                }}
              >
                <div style={{
                  position: 'absolute',
                  left: '-46px',
                  top: '2px',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: idx === milestones.length - 1 ? '#1e95d3' : '#ffffff',
                  border: `3px solid #1e95d3`,
                  boxShadow: idx === milestones.length - 1 ? '0 0 0 4px rgba(30,149,211,0.2)' : 'none'
                }}></div>
                <div style={{ marginLeft: '0' }}>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 800,
                    color: '#1e95d3',
                    background: '#e0f2fe',
                    padding: '2px 10px',
                    borderRadius: '12px',
                    marginBottom: '6px',
                    display: 'inline-block'
                  }}>
                    {m.year}
                  </span>
                  <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: 1.6, margin: '6px 0 0' }}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <div style={{
        background: 'linear-gradient(135deg, #1e95d3 0%, #0d6ea0 60%, #212121 100%)',
        padding: '64px 24px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#ffffff', margin: '0 0 12px' }}>
          Want to Be Part of the Story?
        </h2>
        <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.8)', margin: '0 auto 32px', maxWidth: '520px', lineHeight: 1.6 }}>
          Whether you're a potential customer, partner, or investor — we'd love to connect and show you what we're building.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={onOpenDemo}
            style={{
              background: '#ffffff',
              color: '#1e95d3',
              border: 'none',
              borderRadius: '10px',
              padding: '15px 32px',
              fontSize: '16px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#f0f9ff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Book a Demo <ArrowRight size={17} />
          </button>
          <a
            href="https://wa.me/917428267616?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Aasaan%20ERP"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'rgba(255,255,255,0.1)',
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '10px',
              padding: '15px 28px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <MessageSquare size={17} /> Get in Touch
          </a>
        </div>
      </div>

    </div>
  );
}
