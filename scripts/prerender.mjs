// 빌드 후 각 경로를 정적 HTML로 저장하고 sitemap.xml을 생성한다.
// 검색 로봇이 자바스크립트 실행 없이도 본문과 메타 정보를 읽을 수 있게 하기 위함이다.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const { render, PAGES, headTagsFor, canonicalFor } = await import(
  pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href
);

const template = readFileSync(path.join(dist, 'index.html'), 'utf8');
const HEAD_RE = /<!--seo-head-->[\s\S]*?<!--\/seo-head-->/;
if (!HEAD_RE.test(template) || !template.includes('<!--app-html-->')) {
  throw new Error('index.html에 seo-head / app-html 자리표시가 없습니다.');
}

async function build(pathname, outFile) {
  const appHtml = await render(pathname);
  const html = template
    .replace(HEAD_RE, () => headTagsFor(pathname))
    .replace('<!--app-html-->', () => appHtml);
  writeFileSync(path.join(dist, outFile), html);
  console.log(`  ${pathname.padEnd(22)} → dist/${outFile} (${(html.length / 1024).toFixed(0)}KB)`);
}

console.log('사전 렌더링:');
for (const page of PAGES) {
  await build(page.path, page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`);
}
await build('/404', '404.html');

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const urls = PAGES.filter((page) => page.inSitemap)
  .map(
    (page) =>
      `  <url>\n    <loc>${canonicalFor(page)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${page.priority ?? '0.5'}</priority>\n  </url>`,
  )
  .join('\n');
writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log('  sitemap.xml 생성');

rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
