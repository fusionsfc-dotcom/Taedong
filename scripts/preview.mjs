// dist/를 Vercel과 같은 규칙(확장자 없는 주소, 404.html)으로 띄워 배포 전 확인한다.
// 사용: npm run build && npm run preview
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const port = Number(process.env.PORT ?? process.argv[2] ?? 4173);
const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml',
  '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8',
};

createServer(async (req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const candidates = pathname === '/' ? ['index.html'] : [pathname.slice(1), `${pathname.slice(1)}.html`];
  for (const candidate of candidates) {
    const file = path.join(dist, candidate);
    if (!file.startsWith(dist)) break;
    try {
      const body = await readFile(file);
      res.writeHead(200, { 'Content-Type': types[path.extname(file)] ?? 'application/octet-stream' });
      return res.end(body);
    } catch {}
  }
  res.writeHead(404, { 'Content-Type': types['.html'] });
  res.end(await readFile(path.join(dist, '404.html')));
}).listen(port, () => console.log(`http://localhost:${port}`));
