import React, { useState, useEffect } from 'react';
import {
  Users,
  FileText,
  Settings,
  LogOut,
  Search,
  Plus,
  Trash2,
  Edit,
  ExternalLink,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  Building,
  Calendar,
  Download,
  Save,
  X,
  Server,
  RefreshCw,
  Sparkles,
  ArrowRight,
  Eye,
  AlertCircle,
  Megaphone,
  ToggleLeft,
  ToggleRight,
  Feather,
  Recycle,
  Layers,
  Award,
  Image as ImageIcon
} from 'lucide-react';
import {
  getLeads,
  updateLeadStatus,
  deleteLead,
  saveLead,
  getBlogs,
  saveBlog,
  deleteBlog,
  getAdminAuth,
  logoutAdmin,
  checkBackendHealth,
  updateAdminCredentials,
  getAnnouncements,
  saveAnnouncement,
  deleteAnnouncement,
  getLiteFeatures,
  saveLiteFeature,
  deleteLiteFeature,
  getLiteIndustries,
  saveLiteIndustry,
  deleteLiteIndustry,
  getAwmModules,
  saveAwmModule,
  deleteAwmModule,
  getAwmClients,
  saveAwmClient,
  deleteAwmClient
} from '../services/dataService';
import AasaanLogo from '../components/AasaanLogo';

export default function AdminDashboardPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('queries'); // 'queries' | 'blogs' | 'lite-cms' | 'awm-cms' | 'announcements' | 'settings'
  const [adminUser, setAdminUser] = useState(null);

  // Queries state
  const [leads, setLeads] = useState([]);
  const [leadSearch, setLeadSearch] = useState('');
  const [leadStatusFilter, setLeadStatusFilter] = useState('All');
  const [loadingLeads, setLoadingLeads] = useState(false);

  // Blogs state
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null); // null or blog object
  const [isNewBlogModal, setIsNewBlogModal] = useState(false);
  const [blogSuccessMsg, setBlogSuccessMsg] = useState('');

  // ERP Lite CMS state
  const [liteFeaturesList, setLiteFeaturesList] = useState([]);
  const [liteIndustriesList, setLiteIndustriesList] = useState([]);
  const [liteSubTab, setLiteSubTab] = useState('features'); // 'features' | 'industries'
  const [editingLiteItem, setEditingLiteItem] = useState(null);
  const [isLiteModalOpen, setIsLiteModalOpen] = useState(false);
  const [liteModalType, setLiteModalType] = useState('feature'); // 'feature' | 'industry'

  // AWM CMS state
  const [awmModulesList, setAwmModulesList] = useState([]);
  const [awmClientsList, setAwmClientsList] = useState([]);
  const [awmSubTab, setAwmSubTab] = useState('modules'); // 'modules' | 'clients'
  const [editingAwmItem, setEditingAwmItem] = useState(null);
  const [isAwmModalOpen, setIsAwmModalOpen] = useState(false);
  const [awmModalType, setAwmModalType] = useState('module'); // 'module' | 'client'

  const [cmsSuccessMsg, setCmsSuccessMsg] = useState('');

  // Announcements state
  const [announcements, setAnnouncements] = useState([]);
  const [annSuccessMsg, setAnnSuccessMsg] = useState('');
  const [editingAnn, setEditingAnn] = useState(null); // null or announcement object
  const [newAnnText, setNewAnnText] = useState('');
  const [newAnnBadge, setNewAnnBadge] = useState('NEW RELEASE');
  const [showAnnForm, setShowAnnForm] = useState(false);

  // Backend status
  const [isServerLive, setIsServerLive] = useState(false);
  const [serverInfo, setServerInfo] = useState({ isOnline: false, type: 'Standalone Browser Storage', url: null });

  // Password update
  const [newPassword, setNewPassword] = useState('');
  const [pwdMsg, setPwdMsg] = useState('');

  useEffect(() => {
    const auth = getAdminAuth();
    if (!auth) {
      if (onNavigate) onNavigate('login');
      else window.location.hash = '#/login';
      return;
    }
    setAdminUser(auth.user);

    loadData();
    checkBackendHealth().then((res) => {
      setIsServerLive(res && res.isOnline);
      if (res) setServerInfo(res);
    });
  }, [onNavigate]);

  const loadData = async () => {
    setLoadingLeads(true);
    const [fetchedLeads, fetchedBlogs, fetchedAnns, fetchedLF, fetchedLI, fetchedAM, fetchedAC] = await Promise.all([
      getLeads(),
      getBlogs(),
      getAnnouncements(),
      getLiteFeatures(),
      getLiteIndustries(),
      getAwmModules(),
      getAwmClients()
    ]);
    setLeads(fetchedLeads);
    setBlogs(fetchedBlogs);
    setAnnouncements(fetchedAnns);
    setLiteFeaturesList(fetchedLF);
    setLiteIndustriesList(fetchedLI);
    setAwmModulesList(fetchedAM);
    setAwmClientsList(fetchedAC);
    setLoadingLeads(false);
  };

  const handleLogout = () => {
    logoutAdmin();
    if (onNavigate) onNavigate('login');
    else window.location.hash = '#/login';
  };

  // Queries Actions
  const handleStatusChange = async (id, newStatus) => {
    const updated = await updateLeadStatus(id, newStatus);
    setLeads(updated);
  };

  const handleDeleteLead = async (id) => {
    if (window.confirm('Are you sure you want to delete this query?')) {
      const updated = await deleteLead(id);
      setLeads(updated);
    }
  };

  const handleAddSampleLead = async () => {
    const sample = {
      name: 'Priya Mehra',
      company: 'Heritage Dairy Products',
      email: 'priya@heritagedairy.in',
      phone: '+91 98112 34567',
      solution: 'ERP Global',
      country: 'India',
      message: 'Interested in dairy procurement, FAT/SNF automated testing, and chilling depot management.',
      status: 'New'
    };
    await saveLead(sample);
    await loadData();
  };

  const handleExportCSV = () => {
    if (leads.length === 0) {
      alert('No queries to export.');
      return;
    }

    const headers = ['ID', 'Date/Time', 'Name', 'Company', 'Email', 'Phone', 'Country', 'Solution', 'Message', 'Status'];
    const rows = leads.map(l => [
      l.id,
      `"${l.timestamp || ''}"`,
      `"${(l.name || '').replace(/"/g, '""')}"`,
      `"${(l.company || '').replace(/"/g, '""')}"`,
      `"${l.email || ''}"`,
      `"${l.phone || ''}"`,
      `"${l.country || ''}"`,
      `"${l.solution || ''}"`,
      `"${(l.message || '').replace(/"/g, '""')}"`,
      `"${l.status || ''}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Aasaan_ERP_Queries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Blog Editor Actions
  const handleOpenBlogEditor = (blog) => {
    setEditingBlog({ ...blog });
    setIsNewBlogModal(false);
  };

  const handleOpenNewBlog = () => {
    setEditingBlog({
      slug: '',
      title: '',
      tag: 'Specialized ERP',
      industry: '',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      readTime: '5 min read',
      author: 'Aasaan ERP Expert',
      excerpt: '',
      content: '## Overview\n\nWrite your industry insights and solutions here...'
    });
    setIsNewBlogModal(true);
  };

  const handleSaveBlog = async (e) => {
    e.preventDefault();
    if (!editingBlog.title) {
      alert('Title is required');
      return;
    }

    const saved = await saveBlog(editingBlog);
    setBlogSuccessMsg(`Article "${saved.title}" saved successfully!`);
    setTimeout(() => setBlogSuccessMsg(''), 4000);
    setEditingBlog(null);
    await loadData();
  };

  const handleDeleteBlog = async (slug) => {
    if (window.confirm(`Are you sure you want to delete the blog for "${slug}"?`)) {
      await deleteBlog(slug);
      await loadData();
    }
  };

  // ERP Lite CMS Handlers
  const handleOpenEditLite = (item, type) => {
    setEditingLiteItem({ ...item });
    setLiteModalType(type);
    setIsLiteModalOpen(true);
  };

  const handleOpenNewLite = (type) => {
    setEditingLiteItem({
      title: '',
      name: '',
      tag: '',
      desc: '',
      icon: 'Sparkles',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80'
    });
    setLiteModalType(type);
    setIsLiteModalOpen(true);
  };

  const handleSaveLiteItem = async (e) => {
    e.preventDefault();
    if (liteModalType === 'feature') {
      await saveLiteFeature(editingLiteItem);
      setCmsSuccessMsg('ERP Lite Feature updated successfully!');
      const fresh = await getLiteFeatures();
      setLiteFeaturesList(fresh);
    } else {
      await saveLiteIndustry(editingLiteItem);
      setCmsSuccessMsg('ERP Lite Industry updated successfully!');
      const fresh = await getLiteIndustries();
      setLiteIndustriesList(fresh);
    }
    setIsLiteModalOpen(false);
    setEditingLiteItem(null);
    setTimeout(() => setCmsSuccessMsg(''), 3500);
  };

  const handleDeleteLiteItem = async (id, type) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      if (type === 'feature') {
        await deleteLiteFeature(id);
        const fresh = await getLiteFeatures();
        setLiteFeaturesList(fresh);
      } else {
        await deleteLiteIndustry(id);
        const fresh = await getLiteIndustries();
        setLiteIndustriesList(fresh);
      }
    }
  };

  // AWM CMS Handlers
  const handleOpenEditAwm = (item, type) => {
    setEditingAwmItem({ ...item });
    setAwmModalType(type);
    setIsAwmModalOpen(true);
  };

  const handleOpenNewAwm = (type) => {
    setEditingAwmItem({
      title: '',
      name: '',
      tag: '',
      type: '',
      desc: '',
      metric: '',
      icon: 'Layers',
      img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80'
    });
    setAwmModalType(type);
    setIsAwmModalOpen(true);
  };

  const handleSaveAwmItem = async (e) => {
    e.preventDefault();
    if (awmModalType === 'module') {
      await saveAwmModule(editingAwmItem);
      setCmsSuccessMsg('AWM Module updated successfully!');
      const fresh = await getAwmModules();
      setAwmModulesList(fresh);
    } else {
      await saveAwmClient(editingAwmItem);
      setCmsSuccessMsg('Industry Leader / Case Study updated successfully!');
      const fresh = await getAwmClients();
      setAwmClientsList(fresh);
    }
    setIsAwmModalOpen(false);
    setEditingAwmItem(null);
    setTimeout(() => setCmsSuccessMsg(''), 3500);
  };

  const handleDeleteAwmItem = async (id, type) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      if (type === 'module') {
        await deleteAwmModule(id);
        const fresh = await getAwmModules();
        setAwmModulesList(fresh);
      } else {
        await deleteAwmClient(id);
        const fresh = await getAwmClients();
        setAwmClientsList(fresh);
      }
    }
  };

  // Password update
  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (newPassword.length < 4) {
      setPwdMsg('Password must be at least 4 characters');
      return;
    }
    updateAdminCredentials(newPassword);
    setPwdMsg('Admin password updated successfully!');
    setNewPassword('');
    setTimeout(() => setPwdMsg(''), 4000);
  };

  // Announcement handlers
  const handleSaveAnn = async (e) => {
    e.preventDefault();
    const annData = editingAnn
      ? { ...editingAnn }
      : { text: newAnnText, badge: newAnnBadge, active: true };
    if (!annData.text || !annData.text.trim()) return;
    await saveAnnouncement(annData);
    setAnnSuccessMsg(editingAnn ? 'Announcement updated!' : 'Announcement added to the banner!');
    setEditingAnn(null);
    setNewAnnText('');
    setNewAnnBadge('NEW RELEASE');
    setShowAnnForm(false);
    const fresh = await getAnnouncements();
    setAnnouncements(fresh);
    setTimeout(() => setAnnSuccessMsg(''), 3500);
  };

  const handleToggleAnn = async (ann) => {
    await saveAnnouncement({ ...ann, active: !ann.active });
    const fresh = await getAnnouncements();
    setAnnouncements(fresh);
  };

  const handleDeleteAnn = async (id) => {
    if (window.confirm('Delete this announcement from the banner?')) {
      await deleteAnnouncement(id);
      const fresh = await getAnnouncements();
      setAnnouncements(fresh);
    }
  };

  // Filtered queries
  const filteredLeads = leads.filter(l => {
    const matchesSearch =
      (l.name && l.name.toLowerCase().includes(leadSearch.toLowerCase())) ||
      (l.company && l.company.toLowerCase().includes(leadSearch.toLowerCase())) ||
      (l.email && l.email.toLowerCase().includes(leadSearch.toLowerCase())) ||
      (l.phone && l.phone.includes(leadSearch));
    const matchesStatus = leadStatusFilter === 'All' || l.status === leadStatusFilter;
    return matchesSearch && matchesStatus;
  });

  const newLeadsCount = leads.filter(l => l.status === 'New').length;
  const contactedLeadsCount = leads.filter(l => l.status === 'Contacted' || l.status === 'Demo Scheduled').length;

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC' }}>
      {/* Top Admin Navbar */}
      <header style={{
        background: '#0B1329',
        color: '#FFFFFF',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '68px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <AasaanLogo height={28} showBadge={true} isDark={true} />
            <span style={{
              background: 'rgba(29, 78, 216, 0.4)',
              color: '#93C5FD',
              border: '1px solid rgba(59, 130, 246, 0.4)',
              fontSize: '11px',
              fontWeight: 700,
              padding: '3px 8px',
              borderRadius: '6px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Administration Portal
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              color: isServerLive ? '#34D399' : '#94A3B8',
              background: 'rgba(255, 255, 255, 0.06)',
              padding: '4px 10px',
              borderRadius: '20px'
            }}>
              <span style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: isServerLive ? '#10B981' : '#64748B'
              }} />
              {isServerLive ? 'Spring Boot Active (8080)' : 'Browser Storage Mode'}
            </span>

            <button
              onClick={() => {
                if (onNavigate) onNavigate('home');
                else window.location.hash = '#/';
              }}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#CBD5E1',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '12.5px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <ExternalLink size={13} /> View Website
            </button>

            <button
              onClick={handleLogout}
              style={{
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#FCA5A5',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '12.5px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <LogOut size={13} /> Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Workspace */}
      <div className="container" style={{ padding: '32px 20px 80px' }}>
        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          borderBottom: '1px solid var(--border-medium)',
          marginBottom: '28px',
          paddingBottom: '12px'
        }}>
          <button
            onClick={() => setActiveTab('queries')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer',
              border: 'none',
              background: activeTab === 'queries' ? 'var(--primary-blue)' : 'transparent',
              color: activeTab === 'queries' ? '#FFFFFF' : '#64748B',
              transition: 'all 0.2s'
            }}
          >
            <Users size={16} /> Customer Inquiries & Queries
            {newLeadsCount > 0 && (
              <span style={{
                background: activeTab === 'queries' ? '#FFFFFF' : '#EF4444',
                color: activeTab === 'queries' ? 'var(--primary-blue)' : '#FFFFFF',
                fontSize: '11px',
                fontWeight: 800,
                padding: '1px 6px',
                borderRadius: '10px',
                marginLeft: '4px'
              }}>
                {newLeadsCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('blogs')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer',
              border: 'none',
              background: activeTab === 'blogs' ? 'var(--primary-blue)' : 'transparent',
              color: activeTab === 'blogs' ? '#FFFFFF' : '#64748B',
              transition: 'all 0.2s'
            }}
          >
            <FileText size={16} /> Industry Blogs & Content CMS
            <span style={{
              background: activeTab === 'blogs' ? 'rgba(255,255,255,0.2)' : '#E2E8F0',
              color: activeTab === 'blogs' ? '#FFFFFF' : '#475569',
              fontSize: '11px',
              fontWeight: 800,
              padding: '1px 6px',
              borderRadius: '10px',
              marginLeft: '4px'
            }}>
              {blogs.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('announcements')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer',
              border: 'none',
              background: activeTab === 'announcements' ? 'var(--primary-blue)' : 'transparent',
              color: activeTab === 'announcements' ? '#FFFFFF' : '#64748B',
              transition: 'all 0.2s'
            }}
          >
            <Megaphone size={16} /> Banner Announcements
            <span style={{
              background: activeTab === 'announcements' ? 'rgba(255,255,255,0.2)' : '#E2E8F0',
              color: activeTab === 'announcements' ? '#FFFFFF' : '#475569',
              fontSize: '11px',
              fontWeight: 800,
              padding: '1px 6px',
              borderRadius: '10px',
              marginLeft: '4px'
            }}>
              {announcements.filter(a => a.active).length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('lite-cms')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer',
              border: 'none',
              background: activeTab === 'lite-cms' ? 'var(--primary-blue)' : 'transparent',
              color: activeTab === 'lite-cms' ? '#FFFFFF' : '#64748B',
              transition: 'all 0.2s'
            }}
          >
            <Feather size={16} /> ERP Lite CMS
            <span style={{
              background: activeTab === 'lite-cms' ? 'rgba(255,255,255,0.2)' : '#E2E8F0',
              color: activeTab === 'lite-cms' ? '#FFFFFF' : '#475569',
              fontSize: '11px',
              fontWeight: 800,
              padding: '1px 6px',
              borderRadius: '10px',
              marginLeft: '4px'
            }}>
              {liteFeaturesList.length + liteIndustriesList.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('awm-cms')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer',
              border: 'none',
              background: activeTab === 'awm-cms' ? 'var(--primary-blue)' : 'transparent',
              color: activeTab === 'awm-cms' ? '#FFFFFF' : '#64748B',
              transition: 'all 0.2s'
            }}
          >
            <Recycle size={16} /> AWM Modules & Leaders
            <span style={{
              background: activeTab === 'awm-cms' ? 'rgba(255,255,255,0.2)' : '#E2E8F0',
              color: activeTab === 'awm-cms' ? '#FFFFFF' : '#475569',
              fontSize: '11px',
              fontWeight: 800,
              padding: '1px 6px',
              borderRadius: '10px',
              marginLeft: '4px'
            }}>
              {awmModulesList.length + awmClientsList.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer',
              border: 'none',
              background: activeTab === 'settings' ? 'var(--primary-blue)' : 'transparent',
              color: activeTab === 'settings' ? '#FFFFFF' : '#64748B',
              transition: 'all 0.2s'
            }}
          >
            <Settings size={16} /> Portal Settings
          </button>
        </div>

        {blogSuccessMsg && (
          <div style={{
            background: '#ECFDF5',
            border: '1px solid #A7F3D0',
            color: '#065F46',
            padding: '14px 18px',
            borderRadius: '12px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '14px',
            fontWeight: 600
          }}>
            <CheckCircle size={18} color="#059669" />
            <span>{blogSuccessMsg}</span>
          </div>
        )}

        {cmsSuccessMsg && (
          <div style={{
            background: '#ECFDF5',
            border: '1px solid #A7F3D0',
            color: '#065F46',
            padding: '14px 18px',
            borderRadius: '12px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '14px',
            fontWeight: 600
          }}>
            <CheckCircle size={18} color="#059669" />
            <span>{cmsSuccessMsg}</span>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 1: CUSTOMER INQUIRIES & DEMO LEADS                        */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'queries' && (
          <div>
            {/* KPI Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              marginBottom: '28px'
            }}>
              <div style={{ background: '#FFFFFF', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--border-medium)', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#64748B' }}>Total Inquiries Received</div>
                <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-main)', marginTop: '6px' }}>{leads.length}</div>
                <div style={{ fontSize: '12px', color: '#10B981', marginTop: '4px', fontWeight: 600 }}>Stored & Viewable Locally</div>
              </div>

              <div style={{ background: '#FFFFFF', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--border-medium)', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#64748B' }}>New Uncontacted Leads</div>
                <div style={{ fontSize: '32px', fontWeight: 800, color: '#2563EB', marginTop: '6px' }}>{newLeadsCount}</div>
                <div style={{ fontSize: '12px', color: '#64748B', marginTop: '4px' }}>Awaiting follow-up</div>
              </div>

              <div style={{ background: '#FFFFFF', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--border-medium)', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#64748B' }}>In Progress / Contacted</div>
                <div style={{ fontSize: '32px', fontWeight: 800, color: '#F59E0B', marginTop: '6px' }}>{contactedLeadsCount}</div>
                <div style={{ fontSize: '12px', color: '#64748B', marginTop: '4px' }}>Demo discussions</div>
              </div>

              <div style={{ background: '#FFFFFF', padding: '20px 24px', borderRadius: '16px', border: '1px solid var(--border-medium)', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#64748B' }}>System Backend Status</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: isServerLive ? '#10B981' : '#6366F1', marginTop: '12px' }}>
                  {isServerLive ? 'REST API Active' : 'Offline / Pages Safe'}
                </div>
                <div style={{ fontSize: '12px', color: '#64748B', marginTop: '4px' }}>Zero Google Sheets dependencies</div>
              </div>
            </div>

            {/* Filter Bar & Controls */}
            <div style={{
              background: '#FFFFFF',
              padding: '16px 20px',
              borderRadius: '16px',
              border: '1px solid var(--border-medium)',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: '280px' }}>
                <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
                  <Search size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: '#94A3B8' }} />
                  <input
                    type="text"
                    value={leadSearch}
                    onChange={(e) => setLeadSearch(e.target.value)}
                    placeholder="Search client, company, phone, email..."
                    style={{
                      width: '100%',
                      padding: '9px 12px 9px 36px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-medium)',
                      fontSize: '13.5px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <select
                  value={leadStatusFilter}
                  onChange={(e) => setLeadStatusFilter(e.target.value)}
                  style={{
                    padding: '9px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '13.5px',
                    background: '#FFFFFF',
                    color: '#334155',
                    cursor: 'pointer'
                  }}
                >
                  <option value="All">All Statuses</option>
                  <option value="New">Status: New</option>
                  <option value="Contacted">Status: Contacted</option>
                  <option value="Demo Scheduled">Status: Demo Scheduled</option>
                  <option value="Closed">Status: Closed</option>
                </select>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  onClick={handleAddSampleLead}
                  style={{
                    background: '#F1F5F9',
                    border: '1px solid #CBD5E1',
                    color: '#334155',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Plus size={15} /> Add Test Inquiry
                </button>

                <button
                  onClick={handleExportCSV}
                  style={{
                    background: 'var(--primary-blue)',
                    border: 'none',
                    color: '#FFFFFF',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Download size={15} /> Export CSV
                </button>

                <button
                  onClick={loadData}
                  title="Refresh Data"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border-medium)',
                    color: '#64748B',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  <RefreshCw size={15} />
                </button>
              </div>
            </div>

            {/* Inquiries Table */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid var(--border-medium)',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
            }}>
              {filteredLeads.length === 0 ? (
                <div style={{ padding: '60px 20px', textAlign: 'center', color: '#64748B' }}>
                  <Users size={40} style={{ margin: '0 auto 12px', opacity: 0.3 }} />
                  <h4 style={{ margin: '0 0 6px', color: 'var(--text-main)' }}>No Inquiries Found</h4>
                  <p style={{ margin: 0, fontSize: '13.5px' }}>
                    {leadSearch ? 'Try adjusting your search filters.' : 'Submit a form via "Schedule Demo" or click "Add Test Inquiry".'}
                  </p>
                </div>
              ) : (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13.5px' }}>
                    <thead>
                      <tr style={{ background: '#F8FAFC', borderBottom: '1px solid var(--border-medium)', color: '#475569', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        <th style={{ padding: '14px 18px', fontWeight: 700 }}>Client & Company</th>
                        <th style={{ padding: '14px 18px', fontWeight: 700 }}>Contact Info</th>
                        <th style={{ padding: '14px 18px', fontWeight: 700 }}>Product / Scope</th>
                        <th style={{ padding: '14px 18px', fontWeight: 700 }}>Requirement / Message</th>
                        <th style={{ padding: '14px 18px', fontWeight: 700 }}>Date Received</th>
                        <th style={{ padding: '14px 18px', fontWeight: 700 }}>Status</th>
                        <th style={{ padding: '14px 18px', fontWeight: 700, textAlign: 'right' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredLeads.map((lead) => {
                        const statusColors = {
                          'New': { bg: '#EFF6FF', text: '#1D4ED8', border: '#BFDBFE' },
                          'Contacted': { bg: '#FEF3C7', text: '#B45309', border: '#FDE68A' },
                          'Demo Scheduled': { bg: '#ECFDF5', text: '#047857', border: '#A7F3D0' },
                          'Closed': { bg: '#F1F5F9', text: '#475569', border: '#CBD5E1' }
                        };
                        const sc = statusColors[lead.status] || statusColors['New'];

                        return (
                          <tr key={lead.id} style={{ borderBottom: '1px solid #F1F5F9', transition: 'background 0.15s' }}>
                            <td style={{ padding: '16px 18px' }}>
                              <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>{lead.name || 'Unnamed Client'}</div>
                              <div style={{ fontSize: '12.5px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                                <Building size={12} /> {lead.company || 'Private Inquiry'}
                              </div>
                            </td>

                            <td style={{ padding: '16px 18px' }}>
                              {lead.email && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#2563EB', fontSize: '13px' }}>
                                  <Mail size={12} />
                                  <a href={`mailto:${lead.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                    {lead.email}
                                  </a>
                                </div>
                              )}
                              {lead.phone && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#475569', fontSize: '12.5px', marginTop: '3px' }}>
                                  <Phone size={12} />
                                  <a href={`tel:${lead.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                    {lead.phone}
                                  </a>
                                </div>
                              )}
                            </td>

                            <td style={{ padding: '16px 18px' }}>
                              <span style={{
                                background: '#F1F5F9',
                                color: '#334155',
                                padding: '3px 8px',
                                borderRadius: '6px',
                                fontSize: '12px',
                                fontWeight: 600
                              }}>
                                {lead.solution || 'ERP Global'}
                              </span>
                              {lead.country && (
                                <div style={{ fontSize: '11px', color: '#94A3B8', marginTop: '4px' }}>
                                  {lead.country}
                                </div>
                              )}
                            </td>

                            <td style={{ padding: '16px 18px', maxWidth: '320px' }}>
                              <p style={{ margin: 0, fontSize: '13px', color: '#334155', lineHeight: 1.4 }}>
                                {lead.message || <em style={{ color: '#94A3B8' }}>No specific message provided</em>}
                              </p>
                            </td>

                            <td style={{ padding: '16px 18px', whiteSpace: 'nowrap', fontSize: '12.5px', color: '#64748B' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <Calendar size={12} /> {lead.timestamp || 'Recent'}
                              </div>
                            </td>

                            <td style={{ padding: '16px 18px' }}>
                              <select
                                value={lead.status || 'New'}
                                onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                                style={{
                                  background: sc.bg,
                                  color: sc.text,
                                  border: `1px solid ${sc.border}`,
                                  padding: '4px 8px',
                                  borderRadius: '6px',
                                  fontSize: '12px',
                                  fontWeight: 700,
                                  cursor: 'pointer'
                                }}
                              >
                                <option value="New">New</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Demo Scheduled">Demo Scheduled</option>
                                <option value="Closed">Closed</option>
                              </select>
                            </td>

                            <td style={{ padding: '16px 18px', textAlign: 'right' }}>
                              <button
                                onClick={() => handleDeleteLead(lead.id)}
                                title="Delete Query"
                                style={{
                                  background: 'none',
                                  border: 'none',
                                  color: '#94A3B8',
                                  cursor: 'pointer',
                                  padding: '4px',
                                  borderRadius: '4px'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#EF4444'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                              >
                                <Trash2 size={16} />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 2: INDUSTRY BLOGS & CONTENT CMS                           */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'blogs' && (
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div>
                <h3 style={{ margin: '0 0 4px', fontSize: '20px', fontWeight: 800 }}>Industry Deep-Dive Blogs</h3>
                <p style={{ margin: 0, fontSize: '13.5px', color: '#64748B' }}>
                  Visitors see these articles when they click on cards like <strong>Manufacturing & Engineering</strong>, <strong>Dairy Industry</strong>, etc.
                </p>
              </div>

              <button
                onClick={handleOpenNewBlog}
                style={{
                  background: 'var(--primary-blue)',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '10px 18px',
                  borderRadius: '10px',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(29, 78, 216, 0.25)'
                }}
              >
                <Plus size={16} /> Write New Industry Blog
              </button>
            </div>

            {/* Blogs Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '24px'
            }}>
              {blogs.map((b) => (
                <div
                  key={b.slug}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid var(--border-medium)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                  }}
                >
                  <div style={{ height: '150px', position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={b.img || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80'}
                      alt={b.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      backdropFilter: 'blur(6px)',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '6px'
                    }}>
                      {b.tag || 'Specialized ERP'}
                    </div>
                  </div>

                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: 800, margin: '0 0 8px', color: 'var(--text-main)', lineHeight: 1.35 }}>
                        {b.title}
                      </h4>
                      <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.5, margin: '0 0 16px' }}>
                        {b.excerpt || (b.content ? b.content.slice(0, 110) + '...' : '')}
                      </p>
                    </div>

                    <div style={{
                      borderTop: '1px solid #F1F5F9',
                      paddingTop: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <span style={{ fontSize: '11.5px', color: '#94A3B8' }}>
                        Slug: <code style={{ color: '#2563EB' }}>{b.slug}</code>
                      </span>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <a
                          href={`#/blog/${b.slug}`}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            background: '#F1F5F9',
                            color: '#334155',
                            padding: '6px 10px',
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: 600,
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <Eye size={13} /> View
                        </a>

                        <button
                          onClick={() => handleOpenBlogEditor(b)}
                          style={{
                            background: 'var(--primary-blue)',
                            color: '#FFFFFF',
                            border: 'none',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <Edit size={13} /> Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 3: BANNER ANNOUNCEMENTS                                    */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'announcements' && (
          <div>
            {/* Success message */}
            {annSuccessMsg && (
              <div style={{
                background: '#ECFDF5', border: '1px solid #A7F3D0', color: '#065F46',
                padding: '14px 18px', borderRadius: '12px', marginBottom: '20px',
                display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 600
              }}>
                <CheckCircle size={18} color="#059669" /> {annSuccessMsg}
              </div>
            )}

            {/* Preview banner */}
            <div style={{
              background: '#0B1329', borderRadius: '12px', padding: '12px 20px',
              marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px',
              fontSize: '12px'
            }}>
              <span style={{ color: '#FB923C', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Sparkles size={12} /> LIVE PREVIEW
              </span>
              <span style={{ color: '#E2E8F0' }}>
                {announcements.find(a => a.active)?.text || 'No active announcements — add one below'}
              </span>
            </div>

            {/* Add new announcement form */}
            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-medium)', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 800 }}>
                  {editingAnn ? '✏️ Edit Announcement' : '➕ Add New Announcement'}
                </h3>
                {!showAnnForm && !editingAnn && (
                  <button
                    onClick={() => setShowAnnForm(true)}
                    style={{
                      background: 'var(--primary-blue)', color: '#FFFFFF',
                      border: 'none', borderRadius: '8px', padding: '8px 16px',
                      fontSize: '13px', fontWeight: 700, cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: '6px'
                    }}
                  >
                    <Plus size={15} /> New Announcement
                  </button>
                )}
              </div>

              {(showAnnForm || editingAnn) && (
                <form onSubmit={handleSaveAnn} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '6px', textTransform: 'uppercase' }}>
                      Badge Label (shown in orange)
                    </label>
                    <input
                      type="text"
                      value={editingAnn ? editingAnn.badge : newAnnBadge}
                      onChange={e => editingAnn
                        ? setEditingAnn({ ...editingAnn, badge: e.target.value })
                        : setNewAnnBadge(e.target.value)
                      }
                      placeholder="e.g. NEW RELEASE, ENTERPRISE UPDATE"
                      style={{
                        width: '100%', padding: '10px 14px', borderRadius: '8px',
                        border: '1px solid var(--border-medium)', fontSize: '13.5px',
                        boxSizing: 'border-box', outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '6px', textTransform: 'uppercase' }}>
                      Announcement Text (shown in white)
                    </label>
                    <textarea
                      required
                      value={editingAnn ? editingAnn.text : newAnnText}
                      onChange={e => editingAnn
                        ? setEditingAnn({ ...editingAnn, text: e.target.value })
                        : setNewAnnText(e.target.value)
                      }
                      placeholder="e.g. Aasaan ERP v3.0 — Introducing AI-Powered Invoice Matching!"
                      rows={2}
                      style={{
                        width: '100%', padding: '10px 14px', borderRadius: '8px',
                        border: '1px solid var(--border-medium)', fontSize: '13.5px',
                        boxSizing: 'border-box', outline: 'none', resize: 'vertical', fontFamily: 'inherit'
                      }}
                    />
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button type="submit" style={{
                      background: 'var(--primary-blue)', color: '#FFFFFF',
                      border: 'none', borderRadius: '8px', padding: '10px 20px',
                      fontSize: '13.5px', fontWeight: 700, cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: '6px'
                    }}>
                      <Save size={14} /> {editingAnn ? 'Save Changes' : 'Publish to Banner'}
                    </button>
                    <button type="button" onClick={() => { setEditingAnn(null); setShowAnnForm(false); setNewAnnText(''); setNewAnnBadge('NEW RELEASE'); }} style={{
                      background: 'transparent', color: '#64748B',
                      border: '1px solid #CBD5E1', borderRadius: '8px', padding: '10px 16px',
                      fontSize: '13.5px', fontWeight: 600, cursor: 'pointer'
                    }}>
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Announcement list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {announcements.length === 0 && (
                <div style={{ textAlign: 'center', padding: '40px', color: '#94A3B8' }}>
                  No announcements yet. Add one above!
                </div>
              )}
              {announcements.map(ann => (
                <div key={ann.id} style={{
                  background: '#FFFFFF', border: `1px solid ${ann.active ? 'var(--border-medium)' : '#E2E8F0'}`,
                  borderRadius: '12px', padding: '16px 20px',
                  display: 'flex', alignItems: 'center', gap: '14px',
                  opacity: ann.active ? 1 : 0.55
                }}>
                  {/* Active toggle */}
                  <button onClick={() => handleToggleAnn(ann)} title={ann.active ? 'Click to disable' : 'Click to enable'} style={{
                    background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0,
                    color: ann.active ? '#10B981' : '#94A3B8'
                  }}>
                    {ann.active ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
                  </button>

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{
                        background: '#FFF7ED', color: '#EA580C', border: '1px solid #FED7AA',
                        fontSize: '10px', fontWeight: 800, padding: '2px 8px', borderRadius: '4px',
                        textTransform: 'uppercase', letterSpacing: '0.05em', flexShrink: 0
                      }}>
                        {ann.badge || 'ANNOUNCEMENT'}
                      </span>
                      {!ann.active && (
                        <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 600 }}>HIDDEN</span>
                      )}
                    </div>
                    <p style={{ margin: 0, fontSize: '13.5px', color: '#1E293B', fontWeight: 500 }}>
                      {ann.text}
                    </p>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                    <button onClick={() => { setEditingAnn({ ...ann }); setShowAnnForm(false); }} style={{
                      background: '#EFF6FF', color: 'var(--primary-blue)',
                      border: '1px solid var(--primary-blue-border)', borderRadius: '7px',
                      padding: '6px 12px', fontSize: '12px', fontWeight: 700, cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: '5px'
                    }}>
                      <Edit size={13} /> Edit
                    </button>
                    <button onClick={() => handleDeleteAnn(ann.id)} style={{
                      background: '#FEF2F2', color: '#DC2626',
                      border: '1px solid #FECACA', borderRadius: '7px',
                      padding: '6px 12px', fontSize: '12px', fontWeight: 700, cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: '5px'
                    }}>
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB: ERP LITE CONTENT CMS                                      */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'lite-cms' && (
          <div>
            {/* Sub-nav toggle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '8px', background: '#FFFFFF', padding: '6px', borderRadius: '12px', border: '1px solid var(--border-medium)' }}>
                <button
                  type="button"
                  onClick={() => setLiteSubTab('features')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                    background: liteSubTab === 'features' ? 'var(--primary-blue)' : 'transparent',
                    color: liteSubTab === 'features' ? '#FFFFFF' : '#64748B'
                  }}
                >
                  <Sparkles size={14} /> Top Features Customers Love ({liteFeaturesList.length})
                </button>
                <button
                  type="button"
                  onClick={() => setLiteSubTab('industries')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                    background: liteSubTab === 'industries' ? 'var(--primary-blue)' : 'transparent',
                    color: liteSubTab === 'industries' ? '#FFFFFF' : '#64748B'
                  }}
                >
                  <Layers size={14} /> Industries Thriving on ERP Lite ({liteIndustriesList.length})
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleOpenNewLite(liteSubTab === 'features' ? 'feature' : 'industry')}
                style={{
                  background: 'var(--primary-blue)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '10px 18px',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 12px rgba(29, 78, 216, 0.25)'
                }}
              >
                <Plus size={16} /> Add New {liteSubTab === 'features' ? 'Feature' : 'Industry'}
              </button>
            </div>

            {/* Content List */}
            {liteSubTab === 'features' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
                {liteFeaturesList.map((feat) => (
                  <div
                    key={feat.id}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1px solid var(--border-medium)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)'
                    }}
                  >
                    {feat.img && (
                      <div style={{ height: '140px', position: 'relative', overflow: 'hidden', background: '#0F172A' }}>
                        <img src={feat.img} alt={feat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <span style={{
                          position: 'absolute',
                          bottom: '10px',
                          left: '12px',
                          fontSize: '10.5px',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          background: 'rgba(15, 23, 42, 0.85)',
                          padding: '2px 8px',
                          borderRadius: '5px'
                        }}>
                          {feat.tag}
                        </span>
                      </div>
                    )}
                    <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <h4 style={{ fontSize: '16px', fontWeight: 800, margin: '0 0 8px', color: 'var(--text-main)' }}>
                        {feat.title}
                      </h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0, flex: 1 }}>
                        {feat.desc}
                      </p>
                      <div style={{ display: 'flex', gap: '8px', marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
                        <button
                          type="button"
                          onClick={() => handleOpenEditLite(feat, 'feature')}
                          style={{
                            background: '#EFF6FF',
                            color: 'var(--primary-blue)',
                            border: '1px solid var(--primary-blue-border)',
                            borderRadius: '8px',
                            padding: '6px 14px',
                            fontSize: '12.5px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            flex: 1,
                            justifyContent: 'center'
                          }}
                        >
                          <Edit size={13} /> Edit Feature
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteLiteItem(feat.id, 'feature')}
                          style={{
                            background: '#FEF2F2',
                            color: '#DC2626',
                            border: '1px solid #FECACA',
                            borderRadius: '8px',
                            padding: '6px 12px',
                            fontSize: '12.5px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {liteSubTab === 'industries' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                {liteIndustriesList.map((ind) => (
                  <div
                    key={ind.id}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1px solid var(--border-medium)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)'
                    }}
                  >
                    {ind.img && (
                      <div style={{ height: '130px', position: 'relative', overflow: 'hidden', background: '#0F172A' }}>
                        <img src={ind.img} alt={ind.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <span style={{
                          position: 'absolute',
                          bottom: '10px',
                          left: '12px',
                          fontSize: '10.5px',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          background: 'rgba(15, 23, 42, 0.85)',
                          padding: '2px 8px',
                          borderRadius: '5px'
                        }}>
                          {ind.tag}
                        </span>
                      </div>
                    )}
                    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <h4 style={{ fontSize: '15.5px', fontWeight: 800, margin: '0 0 6px', color: 'var(--text-main)' }}>
                        {ind.name}
                      </h4>
                      <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: 1.45, margin: 0, flex: 1 }}>
                        {ind.desc}
                      </p>
                      <div style={{ display: 'flex', gap: '8px', marginTop: '14px', paddingTop: '10px', borderTop: '1px solid #F1F5F9' }}>
                        <button
                          type="button"
                          onClick={() => handleOpenEditLite(ind, 'industry')}
                          style={{
                            background: '#EFF6FF',
                            color: 'var(--primary-blue)',
                            border: '1px solid var(--primary-blue-border)',
                            borderRadius: '8px',
                            padding: '6px 12px',
                            fontSize: '12px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            flex: 1,
                            justifyContent: 'center'
                          }}
                        >
                          <Edit size={13} /> Edit Industry
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteLiteItem(ind.id, 'industry')}
                          style={{
                            background: '#FEF2F2',
                            color: '#DC2626',
                            border: '1px solid #FECACA',
                            borderRadius: '8px',
                            padding: '6px 12px',
                            fontSize: '12px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB: AWM MODULES & LEADERS CMS                                 */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'awm-cms' && (
          <div>
            {/* Sub-nav toggle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '8px', background: '#FFFFFF', padding: '6px', borderRadius: '12px', border: '1px solid var(--border-medium)' }}>
                <button
                  type="button"
                  onClick={() => setAwmSubTab('modules')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                    background: awmSubTab === 'modules' ? 'var(--primary-blue)' : 'transparent',
                    color: awmSubTab === 'modules' ? '#FFFFFF' : '#64748B'
                  }}
                >
                  <Layers size={14} /> Core Modules Built in AWM ({awmModulesList.length})
                </button>
                <button
                  type="button"
                  onClick={() => setAwmSubTab('clients')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                    background: awmSubTab === 'clients' ? 'var(--primary-blue)' : 'transparent',
                    color: awmSubTab === 'clients' ? '#FFFFFF' : '#64748B'
                  }}
                >
                  <Award size={14} /> Trusted by World Leaders / Case Studies ({awmClientsList.length})
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleOpenNewAwm(awmSubTab === 'modules' ? 'module' : 'client')}
                style={{
                  background: 'var(--primary-blue)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '10px 18px',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 12px rgba(29, 78, 216, 0.25)'
                }}
              >
                <Plus size={16} /> Add New {awmSubTab === 'modules' ? 'Module' : 'Leader Profile'}
              </button>
            </div>

            {/* Modules List */}
            {awmSubTab === 'modules' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
                {awmModulesList.map((mod) => (
                  <div
                    key={mod.id}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1px solid var(--border-medium)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)'
                    }}
                  >
                    {mod.img && (
                      <div style={{ height: '140px', position: 'relative', overflow: 'hidden', background: '#0F172A' }}>
                        <img src={mod.img} alt={mod.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <span style={{
                          position: 'absolute',
                          bottom: '10px',
                          left: '12px',
                          fontSize: '10.5px',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          background: 'rgba(15, 23, 42, 0.85)',
                          padding: '2px 8px',
                          borderRadius: '5px'
                        }}>
                          {mod.tag}
                        </span>
                      </div>
                    )}
                    <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <h4 style={{ fontSize: '16px', fontWeight: 800, margin: '0 0 8px', color: 'var(--text-main)' }}>
                        {mod.title}
                      </h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0, flex: 1 }}>
                        {mod.desc}
                      </p>
                      <div style={{ display: 'flex', gap: '8px', marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
                        <button
                          type="button"
                          onClick={() => handleOpenEditAwm(mod, 'module')}
                          style={{
                            background: '#EFF6FF',
                            color: 'var(--primary-blue)',
                            border: '1px solid var(--primary-blue-border)',
                            borderRadius: '8px',
                            padding: '6px 14px',
                            fontSize: '12.5px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            flex: 1,
                            justifyContent: 'center'
                          }}
                        >
                          <Edit size={13} /> Edit Module
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteAwmItem(mod.id, 'module')}
                          style={{
                            background: '#FEF2F2',
                            color: '#DC2626',
                            border: '1px solid #FECACA',
                            borderRadius: '8px',
                            padding: '6px 12px',
                            fontSize: '12.5px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Clients List */}
            {awmSubTab === 'clients' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
                {awmClientsList.map((cli) => (
                  <div
                    key={cli.id}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1.5px solid var(--border-medium)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 4px 14px rgba(15, 23, 42, 0.05)'
                    }}
                  >
                    {cli.img && (
                      <div style={{ height: '140px', position: 'relative', overflow: 'hidden', background: '#0F172A' }}>
                        <img src={cli.img} alt={cli.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <span style={{
                          position: 'absolute',
                          bottom: '10px',
                          left: '12px',
                          fontSize: '11px',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          background: 'var(--primary-blue)',
                          padding: '3px 8px',
                          borderRadius: '6px'
                        }}>
                          {cli.type}
                        </span>
                      </div>
                    )}
                    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <h4 style={{ fontSize: '18px', fontWeight: 800, margin: '0 0 8px', color: 'var(--text-main)' }}>
                        {cli.name}
                      </h4>
                      <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0, flex: 1 }}>
                        {cli.desc}
                      </p>
                      {cli.metric && (
                        <div className="mono" style={{ fontSize: '12px', color: 'var(--primary-blue)', fontWeight: 700, marginTop: '12px', background: '#EFF6FF', padding: '6px 10px', borderRadius: '6px' }}>
                          ✓ {cli.metric}
                        </div>
                      )}
                      <div style={{ display: 'flex', gap: '8px', marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
                        <button
                          type="button"
                          onClick={() => handleOpenEditAwm(cli, 'client')}
                          style={{
                            background: '#EFF6FF',
                            color: 'var(--primary-blue)',
                            border: '1px solid var(--primary-blue-border)',
                            borderRadius: '8px',
                            padding: '6px 14px',
                            fontSize: '12.5px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            flex: 1,
                            justifyContent: 'center'
                          }}
                        >
                          <Edit size={13} /> Edit Leader Profile
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteAwmItem(cli.id, 'client')}
                          style={{
                            background: '#FEF2F2',
                            color: '#DC2626',
                            border: '1px solid #FECACA',
                            borderRadius: '8px',
                            padding: '6px 12px',
                            fontSize: '12.5px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 4: PORTAL SETTINGS & CREDENTIALS                          */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'settings' && (
          <div style={{ maxWidth: '680px' }}>
            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '16px', border: '1px solid var(--border-medium)', marginBottom: '24px' }}>
              <h3 style={{ margin: '0 0 6px', fontSize: '18px', fontWeight: 800 }}>Change Admin Password</h3>
              <p style={{ margin: '0 0 20px', fontSize: '13.5px', color: '#64748B' }}>
                Update the password required to access this administration portal.
              </p>

              {pwdMsg && (
                <div style={{
                  background: '#ECFDF5',
                  color: '#065F46',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 600,
                  marginBottom: '16px'
                }}>
                  {pwdMsg}
                </div>
              )}

              <form onSubmit={handleUpdatePassword} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new admin password"
                  style={{
                    flex: 1,
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: 'var(--primary-blue)',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '10px 18px',
                    borderRadius: '8px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Update Password
                </button>
              </form>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '16px', border: '1px solid var(--border-medium)' }}>
              <h3 style={{ margin: '0 0 6px', fontSize: '18px', fontWeight: 800 }}>Java Spring Boot Backend Architecture</h3>
              <p style={{ margin: '0 0 16px', fontSize: '13.5px', color: '#64748B' }}>
                Aasaan ERP includes a complete Java 17 + Spring Boot 3.2 enterprise backend located at <code>backend-springboot/</code>.
              </p>

              <div style={{
                background: '#F8FAFC',
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                fontSize: '13px',
                lineHeight: 1.6
              }}>
                <div><strong>Server status:</strong> {isServerLive ? '🟢 Running on ' + (serverInfo.url || 'http://localhost:8080') : '🟡 Standalone Browser Storage (Safe for GitHub Pages)'}</div>
                <div style={{ marginTop: '10px', color: '#475569' }}>
                  <strong>How to run Java Spring Boot server:</strong><br />
                  Double click <code>backend-springboot\run-backend.bat</code> or run in terminal:<br />
                  <code style={{ background: '#0F172A', color: '#38BDF8', padding: '4px 8px', borderRadius: '6px', display: 'inline-block', marginTop: '4px' }}>
                    npm run server
                  </code>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* BLOG EDIT / CREATE MODAL                                      */}
      {/* ------------------------------------------------------------- */}
      {editingBlog && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(6px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#FFFFFF',
            width: '100%',
            maxWidth: '780px',
            maxHeight: '90vh',
            borderRadius: '20px',
            border: '1px solid var(--border-medium)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>
            {/* Modal Header */}
            <div style={{
              background: '#0B1329',
              color: '#FFFFFF',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800 }}>
                  {isNewBlogModal ? 'Create New Industry Article' : `Editing: ${editingBlog.title}`}
                </h3>
                <span style={{ fontSize: '12px', color: '#93C5FD' }}>
                  Slug: {editingBlog.slug || '(Auto-generated)'}
                </span>
              </div>
              <button
                onClick={() => setEditingBlog(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Form Scrollable */}
            <form onSubmit={handleSaveBlog} style={{ padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, marginBottom: '6px' }}>
                  Article Title *
                </label>
                <input
                  type="text"
                  required
                  value={editingBlog.title || ''}
                  onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                  placeholder="e.g. Dairy Industry ERP: End-to-End Cold Chain..."
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '14px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, marginBottom: '6px' }}>
                    Industry Tag / Badge
                  </label>
                  <input
                    type="text"
                    value={editingBlog.tag || ''}
                    onChange={(e) => setEditingBlog({ ...editingBlog, tag: e.target.value })}
                    placeholder="e.g. Fat/SNF & Chilling"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-medium)',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, marginBottom: '6px' }}>
                    URL Slug
                  </label>
                  <input
                    type="text"
                    value={editingBlog.slug || ''}
                    onChange={(e) => setEditingBlog({ ...editingBlog, slug: e.target.value })}
                    placeholder="e.g. dairy-industry"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-medium)',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, marginBottom: '6px' }}>
                  Banner Image URL (Unsplash or direct image link)
                </label>
                <input
                  type="url"
                  value={editingBlog.img || ''}
                  onChange={(e) => setEditingBlog({ ...editingBlog, img: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '13.5px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, marginBottom: '6px' }}>
                  Summary / Excerpt
                </label>
                <textarea
                  rows={2}
                  value={editingBlog.excerpt || ''}
                  onChange={(e) => setEditingBlog({ ...editingBlog, excerpt: e.target.value })}
                  placeholder="Brief 1-2 sentence summary displayed on card previews..."
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '13.5px',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, marginBottom: '6px' }}>
                  Article Content (Supports Markdown & Headings)
                </label>
                <textarea
                  rows={10}
                  required
                  value={editingBlog.content || ''}
                  onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                  placeholder="Write full article here..."
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '13.5px',
                    boxSizing: 'border-box',
                    fontFamily: 'monospace',
                    lineHeight: 1.5
                  }}
                />
              </div>

              {/* Modal Actions */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px', marginTop: '12px' }}>
                <button
                  type="button"
                  onClick={() => setEditingBlog(null)}
                  style={{
                    background: '#F1F5F9',
                    border: '1px solid #CBD5E1',
                    color: '#475569',
                    padding: '10px 18px',
                    borderRadius: '8px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  style={{
                    background: 'var(--primary-blue)',
                    border: 'none',
                    color: '#FFFFFF',
                    padding: '10px 22px',
                    borderRadius: '8px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 12px rgba(29, 78, 216, 0.3)'
                  }}
                >
                  <Save size={15} /> Save & Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* ERP LITE EDIT / CREATE MODAL                                  */}
      {/* ------------------------------------------------------------- */}
      {isLiteModalOpen && editingLiteItem && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(6px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#FFFFFF',
            width: '100%',
            maxWidth: '620px',
            maxHeight: '90vh',
            borderRadius: '20px',
            border: '1px solid var(--border-medium)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>
            <div style={{
              background: '#0B1329',
              color: '#FFFFFF',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800 }}>
                  {editingLiteItem.id ? 'Edit' : 'Add New'} {liteModalType === 'feature' ? 'ERP Lite Feature' : 'ERP Lite Industry'}
                </h3>
                <span style={{ fontSize: '12px', color: '#93C5FD' }}>
                  Changes reflect instantly on the live website
                </span>
              </div>
              <button
                type="button"
                onClick={() => { setIsLiteModalOpen(false); setEditingLiteItem(null); }}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveLiteItem} style={{ padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, marginBottom: '6px' }}>
                  {liteModalType === 'feature' ? 'Feature Title *' : 'Industry Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={liteModalType === 'feature' ? (editingLiteItem.title || '') : (editingLiteItem.name || '')}
                  onChange={(e) => {
                    if (liteModalType === 'feature') {
                      setEditingLiteItem({ ...editingLiteItem, title: e.target.value });
                    } else {
                      setEditingLiteItem({ ...editingLiteItem, name: e.target.value });
                    }
                  }}
                  placeholder={liteModalType === 'feature' ? 'e.g. Instant Quotes & GST Invoices' : 'e.g. Small-Scale Manufacturing'}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '14px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, marginBottom: '6px' }}>
                  Tag / Badge (shown on image)
                </label>
                <input
                  type="text"
                  value={editingLiteItem.tag || ''}
                  onChange={(e) => setEditingLiteItem({ ...editingLiteItem, tag: e.target.value })}
                  placeholder={liteModalType === 'feature' ? 'e.g. 1-Click E-Invoicing' : 'e.g. BOM & Job Cards'}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '13.5px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, marginBottom: '6px' }}>
                  Image URL (Unsplash or direct image link)
                </label>
                <input
                  type="url"
                  value={editingLiteItem.img || ''}
                  onChange={(e) => setEditingLiteItem({ ...editingLiteItem, img: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '13.5px',
                    boxSizing: 'border-box'
                  }}
                />
                {editingLiteItem.img && (
                  <div style={{ marginTop: '10px', height: '110px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #E2E8F0' }}>
                    <img src={editingLiteItem.img} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, marginBottom: '6px' }}>
                  Description *
                </label>
                <textarea
                  required
                  rows={3}
                  value={editingLiteItem.desc || ''}
                  onChange={(e) => setEditingLiteItem({ ...editingLiteItem, desc: e.target.value })}
                  placeholder="Detailed description for this item..."
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '13.5px',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                <button
                  type="button"
                  onClick={() => { setIsLiteModalOpen(false); setEditingLiteItem(null); }}
                  style={{
                    background: '#F1F5F9',
                    border: '1px solid #CBD5E1',
                    color: '#475569',
                    padding: '10px 18px',
                    borderRadius: '8px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    background: 'var(--primary-blue)',
                    border: 'none',
                    color: '#FFFFFF',
                    padding: '10px 22px',
                    borderRadius: '8px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Save size={15} /> Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* AWM MODULE / CLIENT EDIT / CREATE MODAL                       */}
      {/* ------------------------------------------------------------- */}
      {isAwmModalOpen && editingAwmItem && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(6px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#FFFFFF',
            width: '100%',
            maxWidth: '620px',
            maxHeight: '90vh',
            borderRadius: '20px',
            border: '1px solid var(--border-medium)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>
            <div style={{
              background: '#0B1329',
              color: '#FFFFFF',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800 }}>
                  {editingAwmItem.id ? 'Edit' : 'Add New'} {awmModalType === 'module' ? 'AWM Core Module' : 'Waste Leader Profile'}
                </h3>
                <span style={{ fontSize: '12px', color: '#93C5FD' }}>
                  Live updates applied automatically
                </span>
              </div>
              <button
                type="button"
                onClick={() => { setIsAwmModalOpen(false); setEditingAwmItem(null); }}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveAwmItem} style={{ padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, marginBottom: '6px' }}>
                  {awmModalType === 'module' ? 'Module Title *' : 'Client / Leader Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={awmModalType === 'module' ? (editingAwmItem.title || '') : (editingAwmItem.name || '')}
                  onChange={(e) => {
                    if (awmModalType === 'module') {
                      setEditingAwmItem({ ...editingAwmItem, title: e.target.value });
                    } else {
                      setEditingAwmItem({ ...editingAwmItem, name: e.target.value });
                    }
                  }}
                  placeholder={awmModalType === 'module' ? 'e.g. Weighbridge & Scale Automation' : 'e.g. Tadweeer'}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '14px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, marginBottom: '6px' }}>
                  {awmModalType === 'module' ? 'Module Tag / Protocol' : 'Operational Category / Badge'}
                </label>
                <input
                  type="text"
                  value={awmModalType === 'module' ? (editingAwmItem.tag || '') : (editingAwmItem.type || '')}
                  onChange={(e) => {
                    if (awmModalType === 'module') {
                      setEditingAwmItem({ ...editingAwmItem, tag: e.target.value });
                    } else {
                      setEditingAwmItem({ ...editingAwmItem, type: e.target.value });
                    }
                  }}
                  placeholder={awmModalType === 'module' ? 'e.g. Zero-Tamper RS232 / TCP-IP' : 'e.g. Recycling Operations'}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '13.5px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {awmModalType === 'client' && (
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, marginBottom: '6px' }}>
                    Key Metric / Achievement Highlight
                  </label>
                  <input
                    type="text"
                    value={editingAwmItem.metric || ''}
                    onChange={(e) => setEditingAwmItem({ ...editingAwmItem, metric: e.target.value })}
                    placeholder="e.g. Weighbridge Ticket Time: <45s • 100% Audit Compliance"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-medium)',
                      fontSize: '13.5px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              )}

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, marginBottom: '6px' }}>
                  Image URL (Unsplash or direct image link)
                </label>
                <input
                  type="url"
                  value={editingAwmItem.img || ''}
                  onChange={(e) => setEditingAwmItem({ ...editingAwmItem, img: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '13.5px',
                    boxSizing: 'border-box'
                  }}
                />
                {editingAwmItem.img && (
                  <div style={{ marginTop: '10px', height: '110px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #E2E8F0' }}>
                    <img src={editingAwmItem.img} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, marginBottom: '6px' }}>
                  Description *
                </label>
                <textarea
                  required
                  rows={3}
                  value={editingAwmItem.desc || ''}
                  onChange={(e) => setEditingAwmItem({ ...editingAwmItem, desc: e.target.value })}
                  placeholder="Detailed operational breakdown..."
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '13.5px',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                <button
                  type="button"
                  onClick={() => { setIsAwmModalOpen(false); setEditingAwmItem(null); }}
                  style={{
                    background: '#F1F5F9',
                    border: '1px solid #CBD5E1',
                    color: '#475569',
                    padding: '10px 18px',
                    borderRadius: '8px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    background: 'var(--primary-blue)',
                    border: 'none',
                    color: '#FFFFFF',
                    padding: '10px 22px',
                    borderRadius: '8px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Save size={15} /> Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
