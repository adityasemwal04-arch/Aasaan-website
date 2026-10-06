// Utility for syncing demo queries to an online cloud spreadsheet (Excel Online / Google Sheets / OneDrive)

/**
 * Configure your Cloud Spreadsheet Webhook URL here or via .env (VITE_SHEET_WEBHOOK_URL).
 * When someone submits the form from ANYWHERE in the world (mobile, remote laptop, live deployment),
 * the website posts the query to this webhook, appending a new row to your cloud Excel / Google sheet in real-time.
 */
export const CLOUD_WEBHOOK_URL = import.meta.env.VITE_SHEET_WEBHOOK_URL || 'https://script.google.com/macros/s/AKfycbzkJ8DcO5JsyIqGKjIrljot8Eovnbe7_XElT7bYLcXU3XgAUTLjdlEb_38hXNP4Xeo3uQ/exec';

export const LOCAL_ONEDRIVE_PATHS = [
  'C:\\Users\\adity\\OneDrive\\Aasaan_ERP_Demo_Queries.xlsx',
  'C:\\Users\\adity\\OneDrive\\Desktop\\AasaanERPWebsite\\Aasaan_ERP_Demo_Queries.xlsx'
];

/**
 * Retrieves all stored demo queries from localStorage
 */
export function getStoredQueries() {
  try {
    const raw = localStorage.getItem('aasaan_demo_queries');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to read demo queries from localStorage:', e);
    return [];
  }
}

/**
 * Saves a new query to localStorage (local backup store)
 */
export function saveQueryToStorage(leadData) {
  try {
    const existing = getStoredQueries();
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const newEntry = {
      id: Date.now(),
      timestamp,
      name: leadData.name || '',
      company: leadData.company || '',
      email: leadData.email || '',
      phone: leadData.phone || '',
      solution: leadData.solution || 'ERP Global',
      country: leadData.country || 'India',
      message: leadData.message || '',
      status: 'New Demo Lead'
    };
    const updated = [newEntry, ...existing];
    localStorage.setItem('aasaan_demo_queries', JSON.stringify(updated));
    return { entry: newEntry, all: updated };
  } catch (e) {
    console.error('Failed to save demo query to localStorage:', e);
    return { entry: leadData, all: [leadData] };
  }
}

/**
 * Sends lead to Cloud Spreadsheet Webhook (works globally from any device)
 * and falls back to local dev server endpoint if running on localhost.
 */
export async function syncLeadToBackend(leadData) {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const payload = {
    ...leadData,
    timestamp,
    status: 'New Demo Lead'
  };

  let syncedCloud = false;
  let syncedLocal = false;

  // 1. Send to Cloud Webhook (Accessible globally from any browser / mobile device)
  if (CLOUD_WEBHOOK_URL && CLOUD_WEBHOOK_URL.trim() !== '') {
    try {
      // mode: 'no-cors' allows sending to Google Apps Script / Power Automate without CORS issues
      await fetch(CLOUD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload),
        mode: 'no-cors'
      });
      syncedCloud = true;
    } catch (err) {
      console.warn('Cloud webhook submission error:', err.message);
    }
  }

  // 2. Also try local Vite server (if running locally on dev server, updates local OneDrive Excel file)
  try {
    const res = await fetch('/api/save-demo-query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      syncedLocal = true;
    }
  } catch (err) {
    // Expected when running purely on client without local dev server
  }

  return {
    success: syncedCloud || syncedLocal,
    syncedCloud,
    syncedLocal
  };
}

/**
 * Optional Admin helper to export stored queries to Excel (CSV with UTF-8 BOM)
 * Note: Never triggered automatically for visitors.
 */
export function adminExportToExcel(queriesList) {
  const queries = queriesList && queriesList.length > 0 ? queriesList : getStoredQueries();
  if (queries.length === 0) return;

  const headers = [
    'Timestamp',
    'Full Name',
    'Company Name',
    'Work Email',
    'Phone / WhatsApp',
    'Primary Solution',
    'Country',
    'Specific Requirements / Pain Points',
    'Status'
  ];

  const rows = queries.map((q) => [
    `"${(q.timestamp || '').replace(/"/g, '""')}"`,
    `"${(q.name || '').replace(/"/g, '""')}"`,
    `"${(q.company || '').replace(/"/g, '""')}"`,
    `"${(q.email || '').replace(/"/g, '""')}"`,
    `"${(q.phone || '').replace(/"/g, '""')}"`,
    `"${(q.solution || '').replace(/"/g, '""')}"`,
    `"${(q.country || '').replace(/"/g, '""')}"`,
    `"${(q.message || '').replace(/"/g, '""')}"`,
    `"${(q.status || 'New Demo Lead').replace(/"/g, '""')}"`
  ]);

  const csvContent = '\uFEFF' + [headers.map(h => `"${h}"`).join(','), ...rows.map(r => r.join(','))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'Aasaan_ERP_Demo_Queries.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
