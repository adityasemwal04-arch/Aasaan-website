import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, Clock, Calendar, ArrowRight, BookOpen, Filter, Sparkles, Building2 } from 'lucide-react';
import { getBlogs } from '../services/dataService';
import { getRoutePath } from '../utils/navigation';

// Industry taxonomy for quick filtering
const INDUSTRY_CATEGORIES = [
  { key: 'all', label: 'All Industries', icon: '🌐' },
  { key: 'manufacturing', label: 'Manufacturing & Engineering', icon: '🏭', keywords: ['manufacturing', 'engineering', 'bom', 'production', 'corrugation', 'chemical', 'factory'] },
  { key: 'logistics', label: 'Supply Chain & 3PL', icon: '🚚', keywords: ['warehouse', '3pl', 'logistics', 'fleet', 'rental', 'stock', 'purchasing', 'transport'] },
  { key: 'waste', label: 'Waste Management (AWM)', icon: '♻️', keywords: ['waste', 'recycling', 'awm', 'manifest', 'cpcb', 'weighbridge'] },
  { key: 'finance', label: 'Finance & Compliance', icon: '💰', keywords: ['financial', 'gst', 'invoicing', 'accounting', 'reconciliation', 'reporting'] },
  { key: 'pharma', label: 'Pharma & Process', icon: '🧪', keywords: ['pharma', 'chemical', 'life sciences', 'potency', 'msds', 'gmp'] },
  { key: 'retail', label: 'Retail, Gems & FMCG', icon: '🛍️', keywords: ['retail', 'omnichannel', 'gems', 'jewelry', 'food', 'beverage', 'dairy', 'sales', 'pos'] },
  { key: 'specialized', label: 'Education, Sports & Energy', icon: '🏛️', keywords: ['education', 'academic', 'sports', 'arena', 'oil', 'gas', 'energy', 'malls', 'real estate', 'publication'] },
  { key: 'implementation', label: 'Implementation & SLAs', icon: '⚙️', keywords: ['implementation', 'go-live', 'sla', 'customization', 'api', 'architecture'] },
];

export default function BlogsDirectorySection({
  currentSlug = null,
  onNavigate,
  isFullPage = false,
  title = "Explore ERP Architecture Guides by Industry",
  subtitle = "Search practical blueprints, regulatory compliance checklists, and workflow automation guides across 30+ sectors."
}) {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      const data = await getBlogs();
      setBlogs(data || []);
      setLoading(false);
    }
    fetchBlogs();
  }, []);

  // Filter blogs based on search query and selected industry category
  const filteredBlogs = useMemo(() => {
    let list = blogs;

    // Exclude current slug if requested (e.g. inside a detail page bottom section)
    if (currentSlug) {
      list = list.filter((b) => b.slug !== currentSlug);
    }

    // 1. Category filter
    if (selectedCategory !== 'all') {
      const catObj = INDUSTRY_CATEGORIES.find((c) => c.key === selectedCategory);
      if (catObj && catObj.keywords) {
        list = list.filter((b) => {
          const text = `${b.title} ${b.tag || ''} ${b.slug} ${b.excerpt || ''}`.toLowerCase();
          return catObj.keywords.some((kw) => text.includes(kw));
        });
      }
    }

    // 2. Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((b) => {
        const titleMatch = (b.title || '').toLowerCase().includes(q);
        const tagMatch = (b.tag || '').toLowerCase().includes(q);
        const excerptMatch = (b.excerpt || '').toLowerCase().includes(q);
        const slugMatch = (b.slug || '').toLowerCase().includes(q);
        return titleMatch || tagMatch || excerptMatch || slugMatch;
      });
    }

    return list;
  }, [blogs, searchQuery, selectedCategory, currentSlug]);

  const handleCardClick = (slug, e) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(`blog/${slug}`);
    } else {
      window.location.href = getRoutePath(`blog/${slug}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      {/* Header Bar */}
      <div style={{ textAlign: isFullPage ? 'center' : 'left', marginBottom: '28px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '7px',
          background: '#eaf6fd', border: '1px solid rgba(30,149,211,0.25)',
          borderRadius: '99px', padding: '4px 14px',
          fontSize: '12px', fontWeight: 700, color: '#1e95d3',
          letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '12px'
        }}>
          <BookOpen size={13} />
          Industry Knowledge Base
        </div>

        <h2 style={{
          fontSize: isFullPage ? 'clamp(26px, 3.8vw, 38px)' : '24px',
          fontWeight: 800, color: '#212121', margin: '0 0 10px',
          letterSpacing: '-0.02em', lineHeight: 1.25
        }}>
          {title}
        </h2>

        {subtitle && (
          <p style={{
            color: '#64748B', fontSize: '15.5px',
            maxWidth: isFullPage ? '720px' : '100%',
            margin: isFullPage ? '0 auto 24px' : '0 0 24px',
            lineHeight: 1.6
          }}>
            {subtitle}
          </p>
        )}

        {/* ── Search Input ── */}
        <div style={{
          maxWidth: isFullPage ? '680px' : '100%',
          margin: isFullPage ? '0 auto 20px' : '0 0 20px',
          position: 'relative'
        }}>
          <Search
            size={18}
            color="#94A3B8"
            style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by industry, module, or topic (e.g. Dairy, 3PL, Waste, GST, Manufacturing, Jewelry...)"
            style={{
              width: '100%',
              padding: '13px 44px 13px 44px',
              borderRadius: '12px',
              border: '2px solid #E2E8F0',
              fontSize: '14.5px',
              outline: 'none',
              boxSizing: 'border-box',
              background: '#FFFFFF',
              color: '#1E293B',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#1e95d3';
              e.target.style.boxShadow = '0 0 0 3px rgba(30,149,211,0.15)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#E2E8F0';
              e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)',
                background: '#E2E8F0', border: 'none', borderRadius: '50%',
                width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#64748B', padding: 0
              }}
              title="Clear search"
            >
              <X size={13} />
            </button>
          )}
        </div>

        {/* ── Category Filter Pills ── */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '8px',
          justifyContent: isFullPage ? 'center' : 'flex-start',
          marginBottom: '20px'
        }}>
          {INDUSTRY_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '7px 14px', borderRadius: '999px',
                  fontSize: '12.5px', fontWeight: 600,
                  cursor: 'pointer', border: '1px solid',
                  borderColor: isActive ? '#1e95d3' : '#E2E8F0',
                  background: isActive ? '#1e95d3' : '#F8FAFC',
                  color: isActive ? '#FFFFFF' : '#475569',
                  boxShadow: isActive ? '0 2px 8px rgba(30,149,211,0.25)' : 'none',
                  transition: 'all 0.18s ease'
                }}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Counter & Clear Info */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          fontSize: '13px', color: '#64748B', borderBottom: '1px solid #edf2f7',
          paddingBottom: '12px', marginBottom: '24px'
        }}>
          <div>
            Showing <strong>{filteredBlogs.length}</strong> {filteredBlogs.length === 1 ? 'industry guide' : 'industry guides'}
            {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
            {selectedCategory !== 'all' && <span> in <strong>{INDUSTRY_CATEGORIES.find(c => c.key === selectedCategory)?.label}</strong></span>}
          </div>

          {(searchQuery || selectedCategory !== 'all') && (
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              style={{
                background: 'none', border: 'none', color: '#1e95d3',
                fontSize: '12.5px', fontWeight: 700, cursor: 'pointer', padding: 0
              }}
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* ── Small Blocks Grid ── */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#64748B', fontSize: '15px' }}>
          Loading industry blogs...
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div style={{
          textAlign: 'center', padding: '50px 20px',
          background: '#F8FAFC', border: '1px dashed #CBD5E1', borderRadius: '16px'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>🔍</div>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#334155', margin: '0 0 6px' }}>
            No blogs found matching "{searchQuery}"
          </h3>
          <p style={{ fontSize: '13.5px', color: '#64748B', margin: '0 0 16px' }}>
            Try searching for terms like Manufacturing, 3PL, Waste, GST, Dairy, or Fleet.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            style={{
              background: '#1e95d3', color: '#FFFFFF', border: 'none',
              padding: '8px 18px', borderRadius: '6px', fontSize: '13px', fontWeight: 700, cursor: 'pointer'
            }}
          >
            Show All Industry Blogs
          </button>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: '20px'
        }}>
          {filteredBlogs.map((b) => (
            <a
              key={b.slug}
              href={getRoutePath(`blog/${b.slug}`)}
              onClick={(e) => handleCardClick(b.slug, e)}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '0',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#1e95d3';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(30,149,211,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.03)';
              }}
            >
              {/* Thumbnail Image */}
              <div style={{ height: '150px', overflow: 'hidden', background: '#EAF6FD', flexShrink: 0, borderRadius: '12px 12px 0 0' }}>
                <img
                  src={b.img || 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80'}
                  alt={b.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80';
                  }}
                />
              </div>

              <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Header Row: Category Badge + Read Time */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', gap: '8px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#1e95d3',
                    background: '#eaf6fd',
                    padding: '3px 9px',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '180px'
                  }}>
                    {b.tag || 'Specialized ERP'}
                  </span>

                  <span style={{
                    fontSize: '11.5px',
                    color: '#94A3B8',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    flexShrink: 0
                  }}>
                    <Clock size={11} />
                    {b.readTime || '6 min'}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '15px',
                  fontWeight: 800,
                  color: '#1E293B',
                  margin: '0 0 8px',
                  lineHeight: 1.35,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {b.title}
                </h3>

                {/* Excerpt */}
                <p style={{
                  fontSize: '13px',
                  color: '#64748B',
                  lineHeight: 1.5,
                  margin: '0 0 14px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {b.excerpt || 'Explore technical architecture, compliance automation, and operational blueprints for this industry.'}
                </p>

                {/* Bottom Footer: Author & Read Link */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '12px',
                  borderTop: '1px solid #F1F5F9',
                  marginTop: 'auto'
                }}>
                  <span style={{ fontSize: '11.5px', color: '#94A3B8', fontWeight: 500 }}>
                    {b.author ? b.author.split(' ')[0] + ' Solutions' : 'Aasaan Practice'}
                  </span>

                  <span style={{
                    fontSize: '12.5px',
                    color: '#1e95d3',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    Read Guide <ArrowRight size={13} />
                  </span>
                </div>
              </div>{/* end inner padding div */}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
