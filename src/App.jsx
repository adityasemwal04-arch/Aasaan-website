import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalSearchModal from './components/GlobalSearchModal';
import ScheduleDemoModal from './components/ScheduleDemoModal';

// Pages
import HomePage from './pages/HomePage';
import ErpGlobalPage from './pages/ErpGlobalPage';
import ErpLitePage from './pages/ErpLitePage';
import AwmPage from './pages/AwmPage';
import PartnersPage from './pages/PartnersPage';
import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import BlogDetailPage from './pages/BlogDetailPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentBlogSlug, setCurrentBlogSlug] = useState('manufacturing-engineering');
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync state with URL hash
  useEffect(() => {
    const parseHash = () => {
      const rawHash = window.location.hash || '#/';
      const lowerHash = rawHash.toLowerCase();

      if (lowerHash.startsWith('#/blog/')) {
        const slug = rawHash.replace(/^#\/blog\//i, '').split('?')[0].trim();
        if (slug) setCurrentBlogSlug(slug);
        return 'blog';
      }
      if (lowerHash.includes('login')) return 'login';
      if (lowerHash.includes('admin')) return 'admin';
      if (lowerHash.includes('global')) return 'global';
      if (lowerHash.includes('lite')) return 'lite';
      if (lowerHash.includes('awm')) return 'awm';
      if (lowerHash.includes('partner')) return 'partners';
      return 'home';
    };

    setCurrentPage(parseHash());

    const handleHashChange = () => {
      setCurrentPage(parseHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Global keyboard shortcut: Cmd+K / Ctrl+K opens search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (pageId, targetElementId) => {
    if (pageId.startsWith('blog/')) {
      const slug = pageId.replace('blog/', '');
      setCurrentBlogSlug(slug);
      setCurrentPage('blog');
      window.location.hash = `#/blog/${slug}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setCurrentPage(pageId);
    const hashTarget = pageId === 'home' ? '#/' : `#/${pageId}`;
    window.location.hash = hashTarget;

    if (targetElementId) {
      setTimeout(() => {
        const el = document.getElementById(targetElementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.style.transition = 'outline 0.3s ease, box-shadow 0.3s ease';
          el.style.outline = '3px solid var(--primary-blue)';
          el.style.boxShadow = '0 0 25px rgba(29, 78, 216, 0.4)';
          setTimeout(() => {
            el.style.outline = 'none';
            el.style.boxShadow = '';
          }, 2200);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800" style={{ position: 'relative' }}>
      {/* Sticky Enterprise Navigation with Active Page Routing (Hidden on full Admin Dashboard) */}
      {currentPage !== 'admin' && (
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenDemo={() => setIsDemoOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
        />
      )}

      <main id="top">
        {currentPage === 'home' && (
          <HomePage
            onOpenDemo={() => setIsDemoOpen(true)}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'global' && (
          <ErpGlobalPage
            onOpenDemo={() => setIsDemoOpen(true)}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'lite' && (
          <ErpLitePage
            onOpenDemo={() => setIsDemoOpen(true)}
          />
        )}
        {currentPage === 'awm' && (
          <AwmPage
            onOpenDemo={() => setIsDemoOpen(true)}
          />
        )}
        {currentPage === 'partners' && (
          <PartnersPage
            onOpenDemo={() => setIsDemoOpen(true)}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'login' && (
          <LoginPage
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'admin' && (
          <AdminDashboardPage
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'blog' && (
          <BlogDetailPage
            slug={currentBlogSlug}
            onNavigate={handleNavigate}
            onOpenDemo={() => setIsDemoOpen(true)}
          />
        )}
      </main>

      {/* Corporate Enterprise Footer (Hidden on Admin Dashboard) */}
      {currentPage !== 'admin' && (
        <Footer
          onNavigate={handleNavigate}
          onOpenDemo={() => setIsDemoOpen(true)}
        />
      )}

      {/* Interactive Global Omni-Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      {/* Interactive Schedule Demo Modal */}
      <ScheduleDemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </div>
  );
}
