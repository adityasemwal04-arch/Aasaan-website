import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalSearchModal from './components/GlobalSearchModal';
import ScheduleDemoModal from './components/ScheduleDemoModal';

// Pages
import HomePage from './pages/OriginalAasaanHomePage';
import ErpGlobalPage from './pages/ErpGlobalPage';
import ErpLitePage from './pages/ErpLitePage';
import AwmPage from './pages/AwmPage';
import PartnersPage from './pages/PartnersPage';
import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ServicesPage from './pages/ServicesPage';
import AboutUsPage from './pages/AboutUsPage';

import { parseRoute, getRoutePath } from './utils/navigation';
import { updateMetaTags } from './utils/seoHelper';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentBlogSlug, setCurrentBlogSlug] = useState('manufacturing-engineering');
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [demoInitialSolution, setDemoInitialSolution] = useState('Aasaan ERP Enterprise');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleOpenDemo = (solution = null) => {
    if (solution) {
      setDemoInitialSolution(solution);
    } else if (currentPage === 'lite') {
      setDemoInitialSolution('Aasaan ERP Lite');
    } else if (currentPage === 'awm') {
      setDemoInitialSolution('AWM Waste Management');
    } else {
      setDemoInitialSolution('Aasaan ERP Enterprise');
    }
    setIsDemoOpen(true);
  };

  // Sync state with HTML5 History / URL
  useEffect(() => {
    const applyCurrentRoute = () => {
      const { page, slug, hadHash } = parseRoute();
      setCurrentPage(page);
      if (slug) setCurrentBlogSlug(slug);
      updateMetaTags(page);

      // If user landed on an old hash URL (e.g. #/awm or #/lite), upgrade URL to clean pushState URL
      if (hadHash) {
        const cleanPath = getRoutePath(page === 'blog' ? `blog/${slug}` : page);
        window.history.replaceState({ pageId: page }, '', cleanPath);
      }
    };

    applyCurrentRoute();

    const handlePopState = () => {
      applyCurrentRoute();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleHashChange = () => {
      applyCurrentRoute();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
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

  // Check for anchor hash on load (e.g. #modules or #about)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && !hash.startsWith('#/')) {
      const targetId = hash.replace(/^#/, '');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, []);

  const handleNavigate = (pageId, targetElementId) => {
    const cleanUrl = getRoutePath(pageId);

    // If navigating to a section on the same active page, smooth scroll
    if (pageId === currentPage && targetElementId) {
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
        return;
      }
    }

    if (pageId === currentPage && !targetElementId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Trigger real browser page reload navigation to the separate page
    const dest = targetElementId ? `${cleanUrl}#${targetElementId}` : cleanUrl;
    window.location.href = dest;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800" style={{ position: 'relative' }}>
      {/* Sticky Enterprise Navigation with Active Page Routing (Hidden on full Admin Dashboard) */}
      {currentPage !== 'admin' && (
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenDemo={handleOpenDemo}
          onOpenSearch={() => setIsSearchOpen(true)}
        />
      )}

      <main id="top">
        {currentPage === 'home' && (
          <HomePage
            onOpenDemo={handleOpenDemo}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'global' && (
          <ErpGlobalPage
            onOpenDemo={handleOpenDemo}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'lite' && (
          <ErpLitePage
            onOpenDemo={handleOpenDemo}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'awm' && (
          <AwmPage
            onOpenDemo={handleOpenDemo}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'partners' && (
          <PartnersPage
            onOpenDemo={handleOpenDemo}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onOpenDemo={handleOpenDemo}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'about' && (
          <AboutUsPage
            onOpenDemo={handleOpenDemo}
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
            onOpenDemo={handleOpenDemo}
          />
        )}
      </main>

      {/* Corporate Enterprise Footer (Hidden on Admin Dashboard) */}
      {currentPage !== 'admin' && (
        <Footer
          onNavigate={handleNavigate}
          onOpenDemo={handleOpenDemo}
        />
      )}

      {/* Interactive Global Omni-Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
        onOpenDemo={handleOpenDemo}
      />

      {/* Interactive Schedule Demo Modal */}
      <ScheduleDemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        initialSolution={demoInitialSolution}
      />
    </div>
  );
}
