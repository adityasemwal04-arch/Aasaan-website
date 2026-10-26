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
  Layers,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { getBlogBySlug, getBlogs } from '../services/dataService';
import { updateMetaTags } from '../utils/seoHelper';
import { getRoutePath } from '../utils/navigation';
import BlogsDirectorySection from '../components/BlogsDirectorySection';

export default function BlogDetailPage({ slug, onNavigate, onOpenDemo }) {
  const [blog, setBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);

      const targetSlug = slug || window.location.pathname.replace(/^.*\/blog\//i, '').trim() || window.location.hash.replace(/^#\/blog\//i, '').trim() || 'manufacturing-engineering';
      const fetchedBlog = await getBlogBySlug(targetSlug);
      const blogsList = await getBlogs();

      setBlog(fetchedBlog);
      setAllBlogs(blogsList);
      setLoading(false);

      if (fetchedBlog) {
        updateMetaTags('blog', fetchedBlog);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    load();
  }, [slug]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Simple Markdown to JSX converter for headings, bold, bullet lists, and tables
  const renderFormattedContent = (content) => {
    if (!content) return null;
    const lines = content.split('\n');
    const elements = [];
    let listBuffer = [];
    let tableBuffer = [];

    const flushList = (key) => {
      if (listBuffer.length > 0) {
        elements.push(
          <ul key={`ul-${key}`} style={{ paddingLeft: '24px', margin: '14px 0 20px', lineHeight: 1.8, color: '#334155' }}>
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

    const flushTable = (key) => {
      if (tableBuffer.length > 0) {
        const [headerRow, ...bodyRows] = tableBuffer;
        elements.push(
          <div key={`table-${key}`} style={{ overflowX: 'auto', margin: '24px 0 28px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14.5px' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                  {headerRow.map((cell, cIdx) => (
                    <th key={cIdx} style={{ padding: '12px 16px', fontWeight: 700, color: '#1e293b' }}>
                      {renderInlineFormatting(cell)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} style={{ borderBottom: rIdx < bodyRows.length - 1 ? '1px solid #f1f5f9' : 'none', background: rIdx % 2 === 0 ? '#ffffff' : '#fbfcfd' }}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} style={{ padding: '12px 16px', color: '#475569', lineHeight: 1.6 }}>
                        {renderInlineFormatting(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableBuffer = [];
      }
    };

    const renderInlineFormatting = (text) => {
      const parts = text.split(/(\*\*.*?\*\*)/g);
      return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} style={{ color: '#212121' }}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Check if line is a table row (starts and ends with |)
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        flushList(index);
        const cells = trimmed
          .slice(1, -1)
          .split('|')
          .map(c => c.trim());
        tableBuffer.push(cells);
        return;
      } else {
        flushTable(index);
      }

      if (trimmed.startsWith('### ')) {
        flushList(index);
        elements.push(
          <h3 key={index} style={{ fontSize: '20px', fontWeight: 800, color: '#212121', marginTop: '28px', marginBottom: '12px' }}>
            {trimmed.slice(4)}
          </h3>
        );
      } else if (trimmed.startsWith('## ')) {
        flushList(index);
        elements.push(
          <h2 key={index} style={{ fontSize: '24px', fontWeight: 800, color: '#212121', marginTop: '36px', marginBottom: '16px', borderBottom: '2px solid #eaf6fd', paddingBottom: '8px' }}>
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
          <p key={index} style={{ fontSize: '15.5px', lineHeight: 1.85, color: '#475569', margin: '14px 0' }}>
            {renderInlineFormatting(trimmed)}
          </p>
        );
      }
    });

    flushList(lines.length);
    flushTable(lines.length);
    return elements;
  };

  if (loading) {
    return (
      <div style={{ marginTop: '106px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '16px', color: '#64748B' }}>Loading industry insights...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div style={{ marginTop: '106px', padding: '80px 20px', textAlign: 'center' }}>
        <h2>Industry Article Not Found</h2>
        <p style={{ color: '#64748B', marginTop: '8px' }}>The requested industry topic does not exist or has been moved.</p>
        <button
          onClick={() => onNavigate ? onNavigate('global') : window.location.href = getRoutePath('global')}
          style={{
            marginTop: '20px',
            background: 'var(--colorAccent)',
            color: '#FFFFFF',
            border: 'none',
            padding: '10px 22px',
            borderRadius: '6px',
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
    <div style={{ marginTop: '106px', background: '#FFFFFF', minHeight: '100vh', paddingBottom: '90px' }}>
      {/* Breadcrumb Bar */}
      <div style={{ background: '#f8f9fa', borderBottom: '1px solid #edf2f7', padding: '14px 0' }}>
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748B' }}>
            <button
              onClick={() => onNavigate ? onNavigate('home') : window.location.href = getRoutePath('home')}
              style={{ background: 'none', border: 'none', color: '#1e95d3', fontWeight: 600, cursor: 'pointer', padding: 0 }}
            >
              Home
            </button>
            <ChevronRight size={13} />
            <button
              onClick={() => onNavigate ? onNavigate('blogs') : window.location.href = getRoutePath('blogs')}
              style={{ background: 'none', border: 'none', color: '#1e95d3', fontWeight: 600, cursor: 'pointer', padding: 0 }}
            >
              Industry Blogs
            </button>
            <ChevronRight size={13} />
            <span style={{ color: '#212121', fontWeight: 600, maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'inline-block' }}>{blog.title}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => onNavigate ? onNavigate('blogs') : window.location.href = getRoutePath('blogs')}
              style={{
                background: '#eaf6fd',
                border: '1px solid rgba(30,149,211,0.3)',
                color: '#1e95d3',
                padding: '5px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <Layers size={13} /> All Blogs (30+)
            </button>
            <button
              onClick={handleShare}
              style={{
                background: '#FFFFFF',
                border: '1px solid #e2e8f0',
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
        background: 'linear-gradient(180deg, #f6fbfe 0%, #ffffff 100%)',
        color: '#212121',
        padding: '50px 0 40px',
        borderBottom: '1px solid #edf2f7'
      }}>
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto', padding: '0 20px' }}>
          <span style={{
            background: '#eaf6fd',
            border: '1px solid rgba(30, 149, 211, 0.3)',
            color: '#1e95d3',
            fontSize: '12px',
            fontWeight: 700,
            padding: '4px 12px',
            borderRadius: '99px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            display: 'inline-block',
            marginBottom: '16px'
          }}>
            {blog.tag || 'Specialized Industry ERP'}
          </span>

          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 800,
            lineHeight: 1.25,
            color: '#212121',
            margin: '0 0 16px',
            letterSpacing: '-0.02em'
          }}>
            {blog.title}
          </h1>

          <p style={{
            fontSize: '17px',
            lineHeight: 1.6,
            color: '#5f5f5f',
            margin: '0 0 24px',
            fontWeight: 400
          }}>
            {blog.excerpt}
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            fontSize: '13px',
            color: '#64748b',
            flexWrap: 'wrap',
            borderTop: '1px solid #edf2f7',
            paddingTop: '18px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <User size={15} color="#1e95d3" />
              <span>{blog.author || 'Aasaan Solutions Practice'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <Calendar size={15} color="#1e95d3" />
              <span>{blog.date || 'October 2026'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <Clock size={15} color="#1e95d3" />
              <span>{blog.readTime || '6 min read'}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner Image */}
      {blog.img && (
        <div className="container" style={{ maxWidth: '880px', margin: '32px auto 0', padding: '0 20px', position: 'relative', zIndex: 2 }}>
          <div style={{
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
            maxHeight: '440px',
            border: '1px solid #e2e8f0'
          }}>
            <img
              src={blog.img}
              alt={blog.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80';
              }}
            />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="container" style={{ maxWidth: '880px', margin: '0 auto', padding: '40px 20px 0' }}>
        <div style={{ fontSize: '16px', lineHeight: 1.8 }}>
          {renderFormattedContent(blog.content)}
        </div>

        {/* All Industry Blogs Directory with Search & Filters */}
        <div style={{ borderTop: '2px solid #edf2f7', paddingTop: '48px', marginTop: '48px' }}>
          <BlogsDirectorySection
            currentSlug={blog.slug}
            onNavigate={onNavigate}
            title="Explore More Industry ERP Guides"
            subtitle="Search other industries or pick any guide below to inspect workflows."
          />
        </div>
      </div>

      {/* Floating CTA buttons matching HomePage */}
      <div style={{ position: 'fixed', bottom: '24px', right: '20px', display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 9000, alignItems: 'flex-end' }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to top"
          style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#ffffff', border: '2px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.12)', cursor: 'pointer', color: '#1e95d3', transition: 'all 0.2s ease' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#1e95d3'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.border = '2px solid #1e95d3'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#1e95d3'; e.currentTarget.style.border = '2px solid #e2e8f0'; }}
        >
          <i className="fas fa-chevron-up" style={{ fontSize: '14px' }}></i>
        </button>

        <a
          href="https://wa.me/917428267616?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Aasaan%20ERP"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px 10px 12px', borderRadius: '28px', background: '#25D366', boxShadow: '0 4px 16px rgba(37,211,102,0.45)', textDecoration: 'none', transition: 'transform 0.2s ease, box-shadow 0.2s ease', color: '#fff', fontWeight: 600, fontSize: '13.5px' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.6)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.45)'; }}
        >
          <i className="fab fa-whatsapp" style={{ fontSize: '22px' }}></i>
          <span>WhatsApp Us</span>
        </a>

        <button
          onClick={onOpenDemo}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px 10px 12px', borderRadius: '28px', background: 'var(--colorAccent)', border: 'none', boxShadow: '0 4px 16px rgba(30,149,211,0.4)', cursor: 'pointer', transition: 'transform 0.2s ease, box-shadow 0.2s ease', color: '#fff', fontWeight: 600, fontSize: '13.5px' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(30,149,211,0.6)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(30,149,211,0.4)'; }}
        >
          <i className="fas fa-calendar-check" style={{ fontSize: '18px' }}></i>
          <span>Book a Demo</span>
        </button>
      </div>
    </div>
  );
}
