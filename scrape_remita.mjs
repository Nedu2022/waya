import puppeteer from "puppeteer";
import fs from "fs";

(async () => {
  console.log("Launching puppeteer...");
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  console.log("Navigating to remita.net...");
  await page.goto("https://remita.net/", { waitUntil: "networkidle2" });

  console.log("Evaluating page for icons...");
  const icons = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll("img"))
      .map((img) => img.src)
      .filter(
        (src) =>
          src.includes("icon") ||
          src.includes(".svg") ||
          src.includes("feature"),
      );
    const svgs = Array.from(document.querySelectorAll("svg")).map(
      (svg) => svg.outerHTML,
    );
    return { images: [...new Set(images)], svgs: [...new Set(svgs)] };
  });

  console.log(
    `Found ${icons.images.length} images and ${icons.svgs.length} SVGs`,
  );
  fs.writeFileSync("remita_icons.json", JSON.stringify(icons, null, 2));

  await browser.close();
  console.log("Done.");
})();
