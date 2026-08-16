const SITE = process.env.SITE_URL || "https://www.elhubventures.com";
const sitemap = `${SITE.replace(/\/$/, "")}/sitemap.xml`;

const targets = [
  `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemap)}`,
  `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemap)}`,
];

for (const url of targets) {
  const res = await fetch(url);
  console.log(res.status, url);
}
