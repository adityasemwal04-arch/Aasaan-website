export const SEO_DATA = {
  home: {
    title: 'Aasaan ERP - AI-Powered Cloud ERP Software for Growing Enterprises',
    description: 'Aasaan ERP is a next-generation business management platform integrating Finance, HR, Supply Chain, Operations, and CRM powered by AWS cloud. Scalable, secure, and intuitive.',
    keywords: 'ERP software, cloud ERP India, enterprise resource planning, business management software, GST invoicing, supply chain ERP'
  },
  global: {
    title: 'Aasaan Enterprises ERP - Scalable Enterprise Resource Planning for Large Scale Operations',
    description: 'Designed for mid to large enterprises. Advanced supply chain, multi-entity financial consolidation, compliance and real-time operational analytics.',
    keywords: 'enterprise ERP, large enterprise software, multi-company ERP, supply chain ERP, corporate management system'
  },
  lite: {
    title: 'Aasaan ERP Lite - Agile, Cost-Effective Cloud ERP for Small & Medium Businesses',
    description: 'Deploy ERP in days. Streamline billing, GST invoicing, inventory tracking, and payroll with zero IT overhead for fast-growing SMEs.',
    keywords: 'ERP for SMEs, small business ERP, affordable ERP, GST billing software, easy ERP'
  },
  awm: {
    title: 'AWM Waste Management ERP - Solid, Liquid & Biomedical Waste Operations Software',
    description: 'Specialized waste management ERP by Aasaan. GPS fleet tracking, manifest compliance, CPCB regulatory reporting, weighbridge integration & automated billing.',
    keywords: 'waste management software, AWM ERP, biomedical waste tracking, CPCB compliance, weighbridge ERP'
  },
  partners: {
    title: 'Partner Program - Grow Your Revenue with Aasaan ERP Ecosystem',
    description: 'Join the Aasaan ERP partner network. High recurring margins, co-marketing support, enterprise training, and certified technical implementation support.',
    keywords: 'ERP reseller program, ERP partner, business software franchise, software distributor'
  },
  login: {
    title: 'Admin Portal Login - Aasaan ERP',
    description: 'Secure administrative access to Aasaan ERP CMS, demo queries, and announcements console.',
    keywords: 'Aasaan ERP login, admin portal'
  },
  admin: {
    title: 'Admin Dashboard - Aasaan ERP Management Console',
    description: 'Manage demo leads, customer queries, active announcements, and publication of ERP industry blogs.',
    keywords: 'ERP dashboard, CMS admin'
  }
};

export function updateMetaTags(pageId, blogData = null) {
  let title = 'Aasaan ERP - Enterprise Business Software Solutions';
  let description = 'Next-generation cloud ERP software for growing and enterprise businesses.';

  if (pageId === 'blog' && blogData) {
    title = `${blogData.title} | Aasaan ERP`;
    description = blogData.excerpt || blogData.title;
  } else if (SEO_DATA[pageId]) {
    title = SEO_DATA[pageId].title;
    description = SEO_DATA[pageId].description;
  }

  document.title = title;

  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // Open Graph Title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', title);

  // Open Graph Description
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (!ogDesc) {
    ogDesc = document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    document.head.appendChild(ogDesc);
  }
  ogDesc.setAttribute('content', description);

  // Open Graph URL
  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (!ogUrl) {
    ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    document.head.appendChild(ogUrl);
  }
  ogUrl.setAttribute('content', window.location.href);
}
