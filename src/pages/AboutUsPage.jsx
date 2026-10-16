import React, { useEffect } from 'react';
import { getAssetUrl, handleImageError } from '../utils/assetHelper';

export default function AboutUsPage({ onOpenDemo }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-wrapper" style={{ background: '#f8f9fa', minHeight: '100vh', paddingBottom: '0' }}>
      
      {/* Hero / About Aasaan Main Story */}
      <section style={{ padding: '60px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 800,
            color: '#1e293b',
            letterSpacing: '0.5px',
            marginBottom: '24px',
            textTransform: 'uppercase'
          }}>
            About Aasaan
          </h1>
          <div style={{ fontSize: '15.5px', lineHeight: 1.75, color: '#475569', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p>
              At Aasaan ERP, we believe that true digital transformation goes beyond tools — it’s about partnership, intelligence, and
              adaptability. That’s why we don’t just deliver software; we work as an extension of your team to help you unlock real, measurable
              growth.
            </p>
            <p>
              With over 10+ years of experience in building and managing systems across industries — from retail to manufacturing to waste
              management — we understand what it takes to run a modern business. Our team brings a unique blend of technical depth, business
              understanding, and industry-specific insights to every implementation.
            </p>
            <p>
              We offer a future-ready ERP platform powered by AI — enabling your business to automate routine operations, make data-driven
              decisions, and respond to changes in real-time. From financial management to inventory, compliance, CRM, and more, Aasaan ERP
              covers every critical touchpoint in your enterprise journey.
            </p>
            <p>
              Our AI-driven core intelligently prioritizes what matters most: optimizing workflows, identifying risks before they occur, and
              uncovering new opportunities for efficiency and profit. Meanwhile, our flexible architecture allows your teams to customize,
              scale, and evolve the system as your needs grow. We take pride in providing ongoing, high-touch support — not just during onboarding, but throughout your digital journey. Whether
              you're scaling your team, entering new markets, or streamlining legacy operations, Aasaan ERP grows with you — not against you.
            </p>
            <p style={{ fontWeight: 600, color: '#1e293b' }}>
              With Aasaan ERP, you're not just getting a product — you're gaining a long-term technology partner committed to helping you build
              a smarter, faster, and more resilient business.
            </p>
          </div>

          {/* About Head Image */}
          <div style={{ margin: '36px auto', display: 'flex', justifyContent: 'center' }}>
            <img
              src={getAssetUrl('images/about_page_head_img.jpg')}
              alt="About Aasaan Team"
              onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/about_page_head_img.jpg')}
              style={{
                width: '100%',
                maxWidth: '720px',
                borderRadius: '16px',
                boxShadow: '0 12px 36px rgba(0,0,0,0.1)',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Empowering Growth Section */}
          <h2 style={{
            fontSize: '26px',
            fontWeight: 700,
            color: '#1e293b',
            marginTop: '20px',
            marginBottom: '20px'
          }}>
            Empowering Growth, Made Simple with <span style={{ color: '#1e95d3' }}>Aasaan ERP</span>
          </h2>
          <div style={{ fontSize: '15.5px', lineHeight: 1.75, color: '#475569', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p>
              At Aasaan ERP, we're reimagining how small and mid-sized businesses run and grow. Designed for real-world operations, our smart,
              scalable ERP platform helps you tackle daily challenges with ease—streamlining processes, reducing risk, and unlocking new growth
              opportunities with confidence.
            </p>
            <p>
              Built with simplicity at its core, Aasaan ERP offers intuitive tools, ready-to-use industry features, and a flexible setup that
              grows as your business does. Whether you're modernizing operations or just getting started on your digital journey, we make ERP
              straightforward and accessible.
            </p>
            <p>
              But we’re more than just software—we’re a collaborative community. With customers, partners, and innovators all working together,
              Aasaan ERP is creating a new standard for agility and progress in business. Add in transparent pricing, flexible deployment, and
              features that scale with you—and you’ve got an ERP that fits your pace and vision.
            </p>
            <p style={{ fontWeight: 600, color: '#1e95d3', fontSize: '17px' }}>
              Let’s build the future of business—together. Welcome to Aasaan ERP.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Strip Banner */}
      <section style={{ background: '#e9f3f8', padding: '36px 20px', margin: '20px 0' }}>
        <div style={{
          maxWidth: '1050px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '30px'
        }}>
          <img
            src={getAssetUrl('images/best_software_tag.png')}
            alt="Best Software Tag"
            onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/best_software_tag.png')}
            style={{ width: '130px', height: 'auto', objectFit: 'contain' }}
          />
          <div style={{ flex: '1 1 500px', textAlign: 'left' }}>
            <span style={{
              fontSize: '22px',
              fontWeight: 600,
              color: '#1e293b',
              lineHeight: 1.5,
              display: 'block'
            }}>
              There’s a reason Aasaan ERP is trusted by businesses across 20+ countries — we grow by putting our customers first, every step of the way.
            </span>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section style={{ padding: '50px 20px' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px'
        }}>
          {/* Vision */}
          <div style={{
            flex: '1 1 450px',
            maxWidth: '520px',
            background: '#e9f3f8',
            borderRadius: '16px',
            padding: '36px 30px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#1e293b', marginBottom: '16px' }}>
              OUR <span style={{ color: '#1e95d3' }}>VISION</span>
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#475569', textAlign: 'center' }}>
              At Aasaan ERP, our vision is to revolutionize how businesses
              manage their operations by making enterprise software truly
              accessible, adaptable, and effortless. We aim to be the go-to ERP
              partner for startups, growing businesses, and mid-sized
              enterprises across the globe. Our goal is to empower
              organizations to thrive in the digital age through intelligent
              automation, real-time insights, and technology that evolves with
              them. We envision a future where managing a business is
              seamless, data-driven, and always one step ahead—because
              running a business should be Aasaan (easy).
            </p>
          </div>

          {/* Mission */}
          <div style={{
            flex: '1 1 450px',
            maxWidth: '520px',
            background: '#e9f3f8',
            borderRadius: '16px',
            padding: '36px 30px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#1e293b', marginBottom: '16px' }}>
              OUR <span style={{ color: '#1e95d3' }}>MISSION</span>
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#475569', textAlign: 'center' }}>
              Our mission is to design and deliver a powerful, user-centric ERP
              ecosystem that simplifies complex business processes without
              compromising on functionality. We are committed to building
              solutions that are intuitive, scalable, and ready to integrate with
              the modern business landscape. With over 74% of our resources
              dedicated to innovation and R&D, we continuously upgrade our
              offerings to meet the evolving needs of industries. More than just
              software, we offer a long-term partnership—focused on customer
              success, quick implementations, and personalized support. At
              Aasaan ERP, we grow when our customers grow.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section style={{ padding: '30px 20px 60px' }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px',
          textAlign: 'center'
        }}>
          <div style={{ background: '#ffffff', padding: '28px 20px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
            <div style={{ fontSize: '40px', fontWeight: 800, color: '#1e95d3', marginBottom: '6px' }}>
              10+
            </div>
            <div style={{ fontSize: '15px', fontWeight: 600, color: '#495057' }}>
              Years Of Experience
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '28px 20px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
            <div style={{ fontSize: '40px', fontWeight: 800, color: '#1e95d3', marginBottom: '6px' }}>
              20+
            </div>
            <div style={{ fontSize: '15px', fontWeight: 600, color: '#495057' }}>
              Countries We Are Present In
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '28px 20px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
            <div style={{ fontSize: '40px', fontWeight: 800, color: '#1e95d3', marginBottom: '6px' }}>
              1250+
            </div>
            <div style={{ fontSize: '15px', fontWeight: 600, color: '#495057' }}>
              Happy Customers
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '28px 20px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
            <div style={{ fontSize: '40px', fontWeight: 800, color: '#1e95d3', marginBottom: '6px' }}>
              98.5%
            </div>
            <div style={{ fontSize: '15px', fontWeight: 600, color: '#495057' }}>
              Repeat Business
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section style={{
        background: '#1e95d3',
        padding: '60px 20px',
        textAlign: 'center',
        color: '#ffffff'
      }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 700,
            lineHeight: 1.4,
            marginBottom: '24px',
            color: '#ffffff'
          }}>
            Unlock new possibilities with growth-driven technology and award-winning support by your side.
          </h2>
          <button
            onClick={onOpenDemo}
            style={{
              background: '#ffffff',
              color: '#1e95d3',
              border: 'none',
              padding: '14px 36px',
              fontSize: '16px',
              fontWeight: 700,
              borderRadius: '6px',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)';
            }}
          >
            Schedule Demo
          </button>
        </div>
      </section>

    </div>
  );
}
