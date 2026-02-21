const puppeteer = require('puppeteer');
(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://wayabank.ng/', { waitUntil: 'networkidle2' });
    const text = await page.evaluate(() => document.body.innerText);
    console.log("=== EXACT LIVE TEXT ===");
    console.log(text);
    await browser.close();
  } catch (e) {
    console.error("Puppeteer failed, trying without it...");
  }
})();
