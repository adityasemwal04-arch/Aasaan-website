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

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync state with URL hash
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('global')) return 'global';
      if (hash.includes('lite')) return 'lite';
      if (hash.includes('awm')) return 'awm';
      if (hash.includes('partner')) return 'partners';
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

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    const hashTarget = pageId === 'home' ? '#/' : `#/${pageId}`;
    window.location.hash = hashTarget;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800" style={{ position: 'relative' }}>
      {/* Sticky Enterprise Navigation with Active Page Routing */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenDemo={() => setIsDemoOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

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
      </main>

      {/* Corporate Enterprise Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

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
