import https from 'https';
import fs from 'fs';

const url = 'https://remita.net/';

https.get(url, (res) => {
  let data = '';
  res.on('data', (d) => {
    data += d;
  });
  
  res.on('end', () => {
    // Basic regex to find SVG tags or image URLs
    const svgRegex = /<svg[^>]*>[\s\S]*?<\/svg>/g;
    const svgs = data.match(svgRegex) || [];
    
    fs.mkdirSync('src/components/icons', { recursive: true });
    
    // Attempt to extract img src that might be icons
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const images = [];
    while ((match = imgRegex.exec(data)) !== null) {
      if (match[1].includes('.svg') || match[1].includes('icon')) {
        images.push(match[1]);
      }
    }
    
    console.log(`Found ${svgs.length} inline SVGs and ${images.length} icon images.`);
    fs.writeFileSync('remita_extraction.json', JSON.stringify({ svgs: svgs.slice(0, 10), images: images.slice(0, 10) }, null, 2));
  });
}).on('error', (e) => {
  console.error(e);
});
