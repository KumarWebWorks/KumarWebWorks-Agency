// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.kumarwebworks.com', // 🔁 Replace with your domain
  generateRobotsTxt: true, // ✅ Will also generate robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
};
