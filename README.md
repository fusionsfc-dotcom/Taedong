# 춘천태동요양병원 홈페이지

도메인: https://www.taedonghp.co.kr

Vite + React 18 + React Router 7 + Tailwind CSS 4로 만든 사이트다. 빌드할 때 모든 페이지를 정적 HTML로 미리 그려 두므로, 검색 로봇이 자바스크립트를 실행하지 않아도 본문과 메타 정보를 읽을 수 있다.

## 명령어

```bash
npm install
npm run dev              # 개발 서버
npm run build            # dist/ 생성 (페이지별 HTML + sitemap.xml 포함)
npm run preview          # dist/를 배포 환경과 같은 주소 규칙으로 확인
npm run optimize-images  # assets-original/ 원본 사진 → src/assets/ WebP 변환 (cwebp 필요)
```

## 폴더 구조

```
index.html                 HTML 뼈대. <!--seo-head-->, <!--app-html--> 자리에 빌드 결과가 들어간다
vercel.json                배포 설정 (확장자 없는 주소, www 통일, 자산 캐시)
public/                    robots.txt, og-image.jpg, favicon.svg
assets-original/           병원 사진 원본 (PNG/JPEG)
scripts/
  optimize-images.mjs      사진 WebP 변환
  prerender.mjs            페이지별 정적 HTML과 sitemap.xml 생성
  preview.mjs              dist/ 확인용 서버
src/
  main.tsx                 브라우저 진입점
  entry-server.tsx         사전 렌더링용 진입점
  assets/                  변환된 WebP 사진 (코드에서는 figma:asset/…png 로 참조)
  styles/                  Tailwind, 테마 변수
  app/
    routes.ts              라우트 정의
    seo.ts                 페이지별 제목·설명·구조화 데이터 (검색 관련 정보는 여기서만 고친다)
    data/faq.ts            자주 묻는 질문
    hooks/useSEO.ts        페이지 이동 시 <head> 갱신
    components/            Layout, TopNav, BottomNav, 랜딩 섹션들, CTASection(연락처·푸터)
    pages/                 랜딩, 상세 4종, 비급여, 사이트맵, 404
```

## 자주 하는 수정

| 바꿀 것 | 파일 |
|---|---|
| 검색 결과 제목·설명 | `src/app/seo.ts`의 `PAGES` |
| 전화번호·주소 | `src/app/components/CTASection.tsx`, `src/app/seo.ts`의 `SITE` |
| 하단 탭 메뉴 | `src/app/components/BottomNav.tsx`, `CTASection.tsx`의 메뉴 배열 |
| 자주 묻는 질문 | `src/app/data/faq.ts` (화면과 FAQ 구조화 데이터에 함께 반영) |
| 비급여 가격 | `src/app/pages/NonReimbursablePage.tsx` |
| 새 페이지 추가 | `routes.ts`에 라우트, `seo.ts`의 `PAGES`에 항목 추가 → 정적 HTML과 sitemap.xml에 자동 포함 |
| 사진 교체 | 원본을 `assets-original/`에 넣고 `npm run optimize-images` |

## 배포

`npm run build` 결과인 `dist/`를 정적 호스팅에 올린다. `vercel.json`은 Vercel 기준이다. 다른 호스팅을 쓸 때는 `/room-detail` 요청에 `room-detail.html`을, 없는 주소에 `404.html`을 돌려주도록 설정한다.
