import fs from 'fs';

const buf = fs.readFileSync('public/aasaan-logo.png');
const base64 = buf.toString('base64');
const dataUri = `data:image/png;base64,${base64}`;

const content = `// Official Aasaan Brand Logo (High-resolution PNG base64)
export const AASAAN_LOGO = "${dataUri}";
export default AASAAN_LOGO;
`;

fs.writeFileSync('src/assets/logoData.js', content, 'utf8');
console.log('Successfully written src/assets/logoData.js! Size:', content.length);
