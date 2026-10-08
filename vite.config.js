import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

function oneDriveSyncPlugin() {
  return {
    name: 'onedrive-sync-plugin',
    configureServer(server) {
      server.middlewares.use('/api/save-demo-query', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

              const newRecord = {
                'Timestamp': timestamp,
                'Full Name': data.name || '',
                'Company Name': data.company || '',
                'Work Email': data.email || '',
                'Phone / WhatsApp': data.phone || '',
                'Primary Solution': data.solution || 'ERP Global',
                'Country': data.country || 'India',
                'Specific Requirements / Pain Points': data.message || '',
                'Status': 'New Demo Lead'
              };

              const xlsxPaths = [
                'C:\\Users\\adity\\OneDrive\\Aasaan_ERP_Demo_Queries.xlsx',
                'C:\\Users\\adity\\OneDrive\\Desktop\\AasaanERPWebsite\\Aasaan_ERP_Demo_Queries.xlsx'
              ];

              const csvPaths = [
                'C:\\Users\\adity\\OneDrive\\Aasaan_ERP_Demo_Queries.csv',
                'C:\\Users\\adity\\OneDrive\\Desktop\\AasaanERPWebsite\\Aasaan_ERP_Demo_Queries.csv'
              ];

              const saved = [];

              // 1. Update XLSX files
              for (const p of xlsxPaths) {
                try {
                  const dir = path.dirname(p);
                  if (fs.existsSync(dir)) {
                    let existingData = [];
                    if (fs.existsSync(p)) {
                      try {
                        const wbOld = XLSX.readFile(p);
                        const firstSheet = wbOld.Sheets[wbOld.SheetNames[0]];
                        existingData = XLSX.utils.sheet_to_json(firstSheet) || [];
                      } catch (readErr) {
                        existingData = [];
                      }
                    }
                    existingData.push(newRecord);
                    const wb = XLSX.utils.book_new();
                    const ws = XLSX.utils.json_to_sheet(existingData);
                    ws['!cols'] = [
                      { wch: 22 },
                      { wch: 22 },
                      { wch: 28 },
                      { wch: 26 },
                      { wch: 18 },
                      { wch: 20 },
                      { wch: 14 },
                      { wch: 45 },
                      { wch: 15 }
                    ];
                    XLSX.utils.book_append_sheet(wb, ws, 'Demo Queries');
                    XLSX.writeFile(wb, p);
                    saved.push(p);
                  }
                } catch (err) {
                  console.error('Failed to write XLSX to', p, err.message);
                }
              }

              // 2. Also write CSV files (UTF-8 BOM) for maximum compatibility
              for (const cp of csvPaths) {
                try {
                  const dir = path.dirname(cp);
                  if (fs.existsSync(dir)) {
                    let existingRows = [];
                    if (fs.existsSync(cp)) {
                      const content = fs.readFileSync(cp, 'utf8');
                      existingRows = content.split('\r\n').filter(Boolean);
                    } else {
                      existingRows.push('"Timestamp","Full Name","Company Name","Work Email","Phone / WhatsApp","Primary Solution","Country","Specific Requirements / Pain Points","Status"');
                    }
                    const row = `"${timestamp}","${(data.name || '').replace(/"/g, '""')}","${(data.company || '').replace(/"/g, '""')}","${(data.email || '').replace(/"/g, '""')}","${(data.phone || '').replace(/"/g, '""')}","${(data.solution || '').replace(/"/g, '""')}","${(data.country || '').replace(/"/g, '""')}","${(data.message || '').replace(/"/g, '""')}","New Demo Lead"`;
                    existingRows.push(row);
                    fs.writeFileSync(cp, '\uFEFF' + existingRows.join('\r\n'), 'utf8');
                    saved.push(cp);
                  }
                } catch (err) {
                  console.error('Failed to write CSV to', cp, err.message);
                }
              }

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, savedPaths: saved }));
            } catch (err) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else {
          res.statusCode = 405;
          res.end('Method Not Allowed');
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), viteSingleFile(), oneDriveSyncPlugin()],
  base: './',
  server: {
    port: 3000,
    open: true
  }
});
