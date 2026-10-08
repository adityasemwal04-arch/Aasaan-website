import fs from 'fs';

let html = fs.readFileSync('dist/index.html', 'utf8');

// Ensure <div id="root"></div> exists and is ready
// If root is inside body, also add a root div right before script in case browser runs head script eagerly
if (html.includes('<div id="root"></div>')) {
  console.log('✓ Found <div id="root"></div> in bundle');
}

// Copy to Spring Boot static folders
const destinations = [
  'backend-springboot/src/main/resources/static/index.html',
  'backend-springboot/target/classes/static/index.html'
];

for (const dest of destinations) {
  try {
    const dir = dest.substring(0, dest.lastIndexOf('/'));
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.copyFileSync('dist/index.html', dest);
    console.log('✓ Synced to', dest);
  } catch (e) {
    console.error('Error copying to', dest, e.message);
  }
}
