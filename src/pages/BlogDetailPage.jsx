import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Edit3,
  Layers,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { getBlogBySlug, getBlogs, getAdminAuth } from '../services/dataService';

export default function BlogDetailPage({ slug, onNavigate, onOpenDemo }) {
  const [blog, setBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const auth = getAdminAuth();
      setIsAdmin(!!auth);

      const targetSlug = slug || window.location.hash.replace('#/blog/', '').trim() || 'manufacturing-engineering';
      const fetchedBlog = await getBlogBySlug(targetSlug);
      const blogsList = await getBlogs();

      setBlog(fetchedBlog);
      setAllBlogs(blogsList);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    load();
  }, [slug]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Simple Markdown to JSX converter for headings, bold, bullet lists
  const renderFormattedContent = (content) => {
    if (!content) return null;
    const lines = content.split('\n');
    const elements = [];
    let listBuffer = [];

    const flushList = (key) => {
      if (listBuffer.length > 0) {
        elements.push(
          <ul key={`ul-${key}`} style={{ paddingLeft: '24px', margin: '14px 0 20px', lineHeight: 1.7, color: '#334155' }}>
            {listBuffer.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '8px' }}>
                {renderInlineFormatting(item)}
              </li>
            ))}
          </ul>
        );
        listBuffer = [];
      }
    };

    const renderInlineFormatting = (text) => {
      // replace **bold**
      const parts = text.split(/(\*\*.*?\*\*)/g);
      return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} style={{ color: 'var(--text-main)' }}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith('### ')) {
        flushList(index);
        elements.push(
          <h3 key={index} style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', marginTop: '28px', marginBottom: '12px' }}>
            {trimmed.slice(4)}
          </h3>
        );
      } else if (trimmed.startsWith('## ')) {
        flushList(index);
        elements.push(
          <h2 key={index} style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)', marginTop: '36px', marginBottom: '16px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '8px' }}>
            {trimmed.slice(3)}
          </h2>
        );
      } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        listBuffer.push(trimmed.slice(2));
      } else if (/^\d+\.\s/.test(trimmed)) {
        listBuffer.push(trimmed.replace(/^\d+\.\s/, ''));
      } else if (trimmed.length > 0) {
        flushList(index);
        elements.push(
          <p key={index} style={{ fontSize: '15.5px', lineHeight: 1.8, color: '#334155', margin: '14px 0' }}>
            {renderInlineFormatting(trimmed)}
          </p>
        );
      }
    });

    flushList(lines.length);
    return elements;
  };

  if (loading) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '16px', color: '#64748B' }}>Loading industry insights...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2>Industry Article Not Found</h2>
        <p style={{ color: '#64748B', marginTop: '8px' }}>The requested industry topic does not exist or has been moved.</p>
        <button
          onClick={() => onNavigate ? onNavigate('global') : window.location.hash = '#/global'}
          style={{
            marginTop: '20px',
            background: 'var(--primary-blue)',
            color: '#FFFFFF',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            fontWeight: 700,
            cursor: 'pointer'
          }}
        >
          ← Return to All Industries
        </button>
      </div>
    );
  }

  // Related articles
  const otherBlogs = allBlogs.filter(b => b.slug !== blog.slug).slice(0, 3);

  return (
    <article style={{ background: '#FFFFFF', minHeight: '100vh', paddingBottom: '90px' }}>
      {/* Breadcrumb Bar */}
      <div style={{ background: '#F8FAFC', borderBottom: '1px solid var(--border-subtle)', padding: '14px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748B' }}>
            <button
              onClick={() => onNavigate ? onNavigate('global') : window.location.hash = '#/global'}
              style={{ background: 'none', border: 'none', color: '#2563EB', fontWeight: 600, cursor: 'pointer', padding: 0 }}
            >
              ERP Global
            </button>
            <ChevronRight size={13} />
            <span>Industries</span>
            <ChevronRight size={13} />
            <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{blog.industry || blog.title}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {isAdmin && (
              <button
                onClick={() => onNavigate ? onNavigate('admin') : window.location.hash = '#/admin'}
                style={{
                  background: '#EFF6FF',
                  border: '1px solid #BFDBFE',
                  color: '#1D4ED8',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Edit3 size={13} /> Edit Article (Admin)
              </button>
            )}

            <button
              onClick={handleShare}
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--border-medium)',
                color: '#475569',
                padding: '5px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Share2 size={13} /> {copied ? 'Link Copied!' : 'Share Article'}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header style={{
        background: 'linear-gradient(135deg, #0B1329 0%, #172554 100%)',
        color: '#FFFFFF',
        padding: '60px 0 50px'
      }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <span style={{
            background: 'rgba(59, 130, 246, 0.25)',
            border: '1px solid rgba(59, 130, 246, 0.5)',
            color: '#93C5FD',
            fontSize: '11.5px',
            fontWeight: 700,
            padding: '4px 10px',
            borderRadius: '6px',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            display: 'inline-block',
            marginBottom: '16px'
          }}>
            {blog.tag || 'Specialized Industry ERP'}
          </span>

          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 38px)',
            fontWeight: 800,
            lineHeight: 1.25,
            color: '#FFFFFF',
            margin: '0 0 18px',
            letterSpacing: '-0.02em'
          }}>
            {blog.title}
          </h1>

          <p style={{
            fontSize: '17px',
            lineHeight: 1.6,
            color: '#CBD5E1',
            margin: '0 0 28px',
            fontWeight: 400
          }}>
            {blog.excerpt}
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            fontSize: '13px',
            color: '#94A3B8',
            flexWrap: 'wrap',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <User size={15} color="#60A5FA" />
              <span>{blog.author || 'Aasaan Solutions Practice'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <Calendar size={15} color="#60A5FA" />
              <span>{blog.date || 'October 2026'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <Clock size={15} color="#60A5FA" />
              <span>{blog.readTime || '6 min read'}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner Image */}
      {blog.img && (
        <div className="container" style={{ maxWidth: '880px', marginTop: '-30px', position: 'relative', zIndex: 2 }}>
          <div style={{
            borderRadius: '18px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.2)',
            maxHeight: '440px',
            border: '1px solid var(--border-medium)'
          }}>
            <img
              src={blog.img}
              alt={blog.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="container" style={{ maxWidth: '880px', padding: '48px 20px 0' }}>
        <div style={{ fontSize: '16px', lineHeight: 1.8 }}>
          {renderFormattedContent(blog.content)}
        </div>

        {/* CTA Box inside article */}
        <div style={{
          margin: '50px 0',
          background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
          border: '1px solid #BFDBFE',
          borderRadius: '20px',
          padding: '36px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div style={{ maxWidth: '520px' }}>
            <span style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--primary-blue)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Live Architecture Consultation
            </span>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#1E3A8A', margin: '6px 0 8px' }}>
              Deploy Aasaan ERP for {blog.industry || 'Your Business'}
            </h3>
            <p style={{ fontSize: '14px', color: '#3B82F6', margin: 0, lineHeight: 1.5 }}>
              Talk with our senior enterprise architects. Get a tailored walk-through featuring real industry workflows, BOMs, and compliance modules.
            </p>
          </div>

          <button
            onClick={() => onOpenDemo ? onOpenDemo() : null}
            style={{
              background: 'var(--primary-blue)',
              color: '#FFFFFF',
              border: 'none',
              padding: '14px 26px',
              borderRadius: '12px',
              fontSize: '14.5px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 16px rgba(29, 78, 216, 0.3)',
              whiteSpace: 'nowrap'
            }}
          >
            <Sparkles size={16} /> Schedule Industry Demo
          </button>
        </div>

        {/* Related Industry Articles */}
        {otherBlogs.length > 0 && (
          <div style={{ borderTop: '1px solid var(--border-medium)', paddingTop: '48px', marginTop: '48px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '24px', color: 'var(--text-main)' }}>
              Explore Other Industry Guides
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              {otherBlogs.map(ob => (
                <a
                  key={ob.slug}
                  href={`#/blog/${ob.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) {
                      onNavigate(`blog/${ob.slug}`);
                    } else {
                      window.location.hash = `#/blog/${ob.slug}`;
                    }
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    background: '#F8FAFC',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '14px',
                    padding: '18px',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary-blue)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--primary-blue)', textTransform: 'uppercase' }}>
                      {ob.tag}
                    </span>
                    <h4 style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--text-main)', margin: '6px 0 8px', lineHeight: 1.35 }}>
                      {ob.title}
                    </h4>
                  </div>
                  <div style={{ fontSize: '12px', color: '#2563EB', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px', marginTop: '12px' }}>
                    Read Guide <ArrowRight size={12} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
