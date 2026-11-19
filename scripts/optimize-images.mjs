// 원본 사진(assets-original/)을 웹용 WebP(src/assets/)로 변환한다.
// 사용: npm run optimize-images   (cwebp 필요: brew install webp)
import { execFileSync } from 'node:child_process';
import { readdirSync, mkdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'assets-original');
const outDir = path.join(root, 'src/assets');
const MAX_WIDTH = 1280; // 본문 최대 폭 640px의 2배(레티나)
const WIDE = new Set(["room-hero-window.png"]); // 전체 화면 배경은 더 크게 둔다
const QUALITY = '80';

mkdirSync(outDir, { recursive: true });

let before = 0;
let after = 0;
// 하위 폴더(unused/ 등)는 변환하지 않는다
for (const file of readdirSync(srcDir)) {
  if (!/\.(png|jpe?g)$/i.test(file)) continue;
  const input = path.join(srcDir, file);
  const output = path.join(outDir, file.replace(/\.(png|jpe?g)$/i, '.webp'));
  const width = Number(
    execFileSync('sips', ['-g', 'pixelWidth', input]).toString().match(/pixelWidth: (\d+)/)?.[1] ?? 0,
  );
  const args = ['-quiet', '-q', QUALITY];
  const limit = WIDE.has(file) ? 1440 : MAX_WIDTH;
  if (width > limit) args.push("-resize", String(limit), "0");
  execFileSync('cwebp', [...args, input, '-o', output]);
  before += statSync(input).size;
  after += statSync(output).size;
}
console.log(`원본 ${(before / 1e6).toFixed(1)}MB → WebP ${(after / 1e6).toFixed(1)}MB`);
