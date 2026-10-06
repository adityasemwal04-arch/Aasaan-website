import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

const TARGET_PATHS = [
  'C:\\Users\\adity\\OneDrive\\Aasaan_ERP_Demo_Queries.xlsx',
  'C:\\Users\\adity\\OneDrive\\Desktop\\AasaanERPWebsite\\Aasaan_ERP_Demo_Queries.xlsx'
];

console.log('--- Aasaan ERP Demo Queries OneDrive Status ---');

for (const p of TARGET_PATHS) {
  if (fs.existsSync(p)) {
    try {
      const wb = XLSX.readFile(p);
      const sheet = wb.Sheets[wb.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet);
      console.log(`\nLocation: ${p}`);
      console.log(`Status: ACTIVE`);
      console.log(`Total Leads Recorded: ${rows.length}`);
      if (rows.length > 0) {
        console.log('Most Recent Query:', rows[rows.length - 1]);
      }
    } catch (err) {
      console.error(`Error reading ${p}:`, err.message);
    }
  } else {
    console.log(`\nLocation: ${p}`);
    console.log('Status: Directory or file not yet initialized.');
  }
}
