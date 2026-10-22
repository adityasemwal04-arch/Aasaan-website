export const SEO_DATA = {
  home: {
    title: 'Aasaan ERP - AI-Powered Cloud ERP Software for Growing Enterprises',
    description: 'Aasaan ERP is a next-generation business management platform integrating Finance, HR, Supply Chain, Operations, and CRM powered by AWS cloud. Scalable, secure, and intuitive.',
    keywords: 'ERP software, cloud ERP India, enterprise resource planning, business management software, GST invoicing, supply chain ERP',
    canonical: 'https://www.aasaanerp.com/'
  },
  global: {
    title: 'Aasaan Enterprises ERP - Scalable Enterprise Resource Planning for Large Scale Operations',
    description: 'Designed for mid to large enterprises. Advanced supply chain, multi-entity financial consolidation, compliance and real-time operational analytics.',
    keywords: 'enterprise ERP, large enterprise software, multi-company ERP, supply chain ERP, corporate management system',
    canonical: 'https://www.aasaanerp.com/global/'
  },
  lite: {
    title: 'Aasaan ERP Lite - Agile, Cost-Effective Cloud ERP for Small & Medium Businesses',
    description: 'Deploy ERP in days. Streamline billing, GST invoicing, inventory tracking, and payroll with zero IT overhead for fast-growing SMEs.',
    keywords: 'ERP for SMEs, small business ERP, affordable ERP, GST billing software, easy ERP',
    canonical: 'https://www.aasaanerp.com/lite/'
  },
  awm: {
    title: 'AWM Waste Management ERP - Solid, Liquid & Biomedical Waste Operations Software',
    description: 'Specialized waste management ERP by Aasaan. GPS fleet tracking, manifest compliance, CPCB regulatory reporting, weighbridge integration & automated billing.',
    keywords: 'waste management software, AWM ERP, biomedical waste tracking, CPCB compliance, weighbridge ERP',
    canonical: 'https://www.aasaanerp.com/awm/'
  },
  partners: {
    title: 'Partner Program - Grow Your Revenue with Aasaan ERP Ecosystem',
    description: 'Join the Aasaan ERP partner network. High recurring margins, co-marketing support, enterprise training, and certified technical implementation support.',
    keywords: 'ERP reseller program, ERP partner, business software franchise, software distributor',
    canonical: 'https://www.aasaanerp.com/partners/'
  },
  login: {
    title: 'Admin Portal Login - Aasaan ERP',
    description: 'Secure administrative access to Aasaan ERP CMS, demo queries, and announcements console.',
    keywords: 'Aasaan ERP login, admin portal',
    canonical: 'https://www.aasaanerp.com/login/'
  },
  admin: {
    title: 'Admin Dashboard - Aasaan ERP Management Console',
    description: 'Manage demo leads, customer queries, active announcements, and publication of ERP industry blogs.',
    keywords: 'ERP dashboard, CMS admin',
    canonical: 'https://www.aasaanerp.com/admin/'
  },
  services: {
    title: 'ERP Services - Implementation, Cloud, AI & Support | Aasaan ERP',
    description: 'Full lifecycle ERP services: implementation, custom development, cloud infrastructure, AI consulting, training, and 24/7 managed support. Enterprise go-live in 7 days.',
    keywords: 'ERP implementation services, ERP consulting, cloud ERP services, AI ERP, ERP training, managed ERP support',
    canonical: 'https://www.aasaanerp.com/services/'
  },
  about: {
    title: 'About Us - The Aasaan ERP Story, Mission & Team | Aasaan ERP',
    description: 'Learn about Aasaan ERP — founded in 2014 to make enterprise software genuinely simple. Meet our leadership team, discover our values, and explore our decade of innovation.',
    keywords: 'about Aasaan ERP, ERP company India, enterprise software company, ERP team, Aasaan mission',
    canonical: 'https://www.aasaanerp.com/about/'
  }
};

export function updateMetaTags(pageId, blogData = null) {
  let title = 'Aasaan ERP - AI-Powered Cloud ERP Software for Growing Enterprises';
  let description = 'Next-generation cloud ERP software for growing and enterprise businesses.';
  let keywords = 'ERP software, cloud ERP India, enterprise resource planning, business management software';
  let canonicalUrl = 'https://www.aasaanerp.com/';

  if (pageId === 'blog' && blogData) {
    title = `${blogData.title} | Aasaan ERP`;
    description = blogData.excerpt || blogData.title;
    canonicalUrl = `https://www.aasaanerp.com/blog/${blogData.slug || ''}`;
  } else if (SEO_DATA[pageId]) {
    title = SEO_DATA[pageId].title;
    description = SEO_DATA[pageId].description;
    keywords = SEO_DATA[pageId].keywords || keywords;
    canonicalUrl = SEO_DATA[pageId].canonical || canonicalUrl;
  }

  // Update Page Title
  document.title = title;

  // Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // Meta Keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', keywords);

  // Canonical Link Tag
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);

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
  ogUrl.setAttribute('content', canonicalUrl);

  // Twitter Title
  let twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (!twitterTitle) {
    twitterTitle = document.createElement('meta');
    twitterTitle.name = 'twitter:title';
    document.head.appendChild(twitterTitle);
  }
  twitterTitle.setAttribute('content', title);

  // Twitter Description
  let twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (!twitterDesc) {
    twitterDesc = document.createElement('meta');
    twitterDesc.name = 'twitter:description';
    document.head.appendChild(twitterDesc);
  }
  twitterDesc.setAttribute('content', description);

  // Ensure Tab Favicon is always set to the orange Aasaan Mart logo mark across all routes
  try {
    const isGh = window.location.pathname.startsWith('/Aasaan-website');
    const prefix = isGh ? '/Aasaan-website' : '';
    const faviconUrl = prefix + '/favicon.png';
    let favLink = document.querySelector("link[rel='shortcut icon']") || document.querySelector("link[rel='icon']");
    if (!favLink) {
      favLink = document.createElement('link');
      favLink.rel = 'shortcut icon';
      document.head.appendChild(favLink);
    }
    favLink.type = 'image/png';
    favLink.href = faviconUrl;
  } catch (e) {}
}
