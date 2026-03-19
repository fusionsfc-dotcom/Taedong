# 춘천태동요양병원 프로젝트 구조 분석 문서

> 이 문서는 Figma Make로 제작된 춘천태동요양병원 웹사이트의 전체 폴더 구조와 파일 정보를 정리한 문서입니다.
> 
> **도메인:** taedonghp.co.kr  
> **생성일:** 2026년 3월 14일  
> **프레임워크:** React 18.3.1 + Vite 6.3.5 + React Router 7.13.0  
> **스타일링:** Tailwind CSS 4.1.12

---

## 📁 프로젝트 루트 구조

```
/
├── public/                    # 정적 파일 (SEO 관련)
├── src/                       # 소스 코드
├── guidelines/                # 프로젝트 가이드라인
├── package.json               # 패키지 의존성 관리
├── vercel.json               # Vercel 배포 설정
├── vite.config.ts            # Vite 빌드 설정
├── postcss.config.mjs        # PostCSS 설정
└── ATTRIBUTIONS.md           # 라이선스 정보
```

---

## 🗂️ 전체 폴더 구조 트리

```
춘천태동요양병원 프로젝트/
│
├── 📂 public/
│   ├── robots.txt                    # 검색엔진 크롤링 정책
│   └── sitemap.xml                   # XML 사이트맵 (검색엔진용)
│
├── 📂 src/
│   ├── 📂 app/
│   │   ├── App.tsx                   # 메인 앱 진입점 (RouterProvider)
│   │   ├── routes.ts                 # React Router 라우팅 설정
│   │   │
│   │   ├── 📂 pages/                 # 페이지 컴포넌트 (7개)
│   │   │   ├── LandingPage.tsx       # 메인 홈페이지 (/)
│   │   │   ├── RoomDetailPage.tsx    # 입원실 안내 (/room-detail)
│   │   │   ├── EnvironmentDetailPage.tsx  # 자연환경 (/environment-detail)
│   │   │   ├── MedicalDetailPage.tsx # 치료재활 (/medical-detail)
│   │   │   ├── FoodDetailPage.tsx    # 식사메뉴 (/food-detail)
│   │   │   ├── NonReimbursablePage.tsx   # 비급여안내 (/non-reimbursable)
│   │   │   └── SitemapPage.tsx       # 사이트맵 페이지 (/sitemap) ✨ NEW
│   │   │
│   │   ├── 📂 components/            # 재사용 컴포넌트
│   │   │   ├── Layout.tsx            # 전체 레이아웃 (TopNav + 페이지 + BottomNav)
│   │   │   ├── TopNav.tsx            # 상단 네비게이션
│   │   │   ├── BottomNav.tsx         # 하단 네비게이션
│   │   │   │
│   │   │   ├── HeroSection.tsx       # 랜딩 페이지 섹션들
│   │   │   ├── RealitySection.tsx
│   │   │   ├── NotSection.tsx
│   │   │   ├── GuardianSection.tsx
│   │   │   ├── NatureRecoverySection.tsx
│   │   │   ├── EnvironmentSection.tsx
│   │   │   ├── MedicalBalanceSection.tsx
│   │   │   ├── RoomSection.tsx
│   │   │   ├── DailyFlowSection.tsx
│   │   │   ├── QASection.tsx
│   │   │   ├── ConclusionSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   │
│   │   │   ├── 📂 figma/
│   │   │   │   └── ImageWithFallback.tsx  # 이미지 폴백 컴포넌트 (보호파일)
│   │   │   │
│   │   │   └── 📂 ui/                # shadcn/ui 기반 UI 컴포넌트 (50개+)
│   │   │       ├── accordion.tsx
│   │   │       ├── alert-dialog.tsx
│   │   │       ├── alert.tsx
│   │   │       ├── aspect-ratio.tsx
│   │   │       ├── avatar.tsx
│   │   │       ├── badge.tsx
│   │   │       ├── breadcrumb.tsx
│   │   │       ├── button.tsx
│   │   │       ├── calendar.tsx
│   │   │       ├── card.tsx
│   │   │       ├── carousel.tsx
│   │   │       ├── chart.tsx
│   │   │       ├── checkbox.tsx
│   │   │       ├── collapsible.tsx
│   │   │       ├── command.tsx
│   │   │       ├── context-menu.tsx
│   │   │       ├── dialog.tsx
│   │   │       ├── drawer.tsx
│   │   │       ├── dropdown-menu.tsx
│   │   │       ├── form.tsx
│   │   │       ├── hover-card.tsx
│   │   │       ├── input-otp.tsx
│   │   │       ├── input.tsx
│   │   │       ├── label.tsx
│   │   │       ├── menubar.tsx
│   │   │       ├── navigation-menu.tsx
│   │   │       ├── pagination.tsx
│   │   │       ├── popover.tsx
│   │   │       ├── progress.tsx
│   │   │       ├── radio-group.tsx
│   │   │       ├── resizable.tsx
│   │   │       ├── scroll-area.tsx
│   │   │       ├── select.tsx
│   │   │       ├── separator.tsx
│   │   │       ├── sheet.tsx
│   │   │       ├── sidebar.tsx
│   │   │       ├── skeleton.tsx
│   │   │       ├── slider.tsx
│   │   │       ├── sonner.tsx
│   │   │       ├── switch.tsx
│   │   │       ├── table.tsx
│   │   │       ├── tabs.tsx
│   │   │       ├── textarea.tsx
│   │   │       ├── toggle-group.tsx
│   │   │       ├── toggle.tsx
│   │   │       ├── tooltip.tsx
│   │   │       ├── use-mobile.ts
│   │   │       └── utils.ts
│   │   │
│   │   └── 📂 hooks/
│   │       └── useSEO.ts             # SEO 메타태그 관리 커스텀 훅
│   │
│   └── 📂 styles/
│       ├── fonts.css                 # 폰트 임포트 설정
│       ├── index.css                 # 메인 CSS 진입점
│       ├── tailwind.css              # Tailwind CSS 설정
│       └── theme.css                 # 디자인 토큰 (색상, 타이포그래피)
│
├── 📂 guidelines/
│   └── Guidelines.md                 # 프로젝트 개발 가이드라인
│
├── package.json                      # npm 패키지 의존성
├── vercel.json                       # Vercel 배포 라우팅 설정
├── vite.config.ts                    # Vite 빌드 도구 설정
├── postcss.config.mjs                # PostCSS 설정
└── ATTRIBUTIONS.md                   # 오픈소스 라이선스 정보
```

---

## 🎯 라우팅 구조 (React Router)

### 📍 전체 페이지 경로

| 경로 | 컴포넌트 | 설명 |
|------|----------|------|
| `/` | `LandingPage.tsx` | 메인 랜딩 페이지 (13개 섹션 스토리텔링) |
| `/room-detail` | `RoomDetailPage.tsx` | 입원실 안내 상세 페이지 |
| `/environment-detail` | `EnvironmentDetailPage.tsx` | 자연환경 소개 페이지 |
| `/medical-detail` | `MedicalDetailPage.tsx` | 치료/재활 프로그램 안내 |
| `/food-detail` | `FoodDetailPage.tsx` | 식사 메뉴 안내 |
| `/non-reimbursable` | `NonReimbursablePage.tsx` | 비급여 항목 안내 (50-70대 타겟) |
| `/sitemap` | `SitemapPage.tsx` | 검색엔진 제출용 사이트맵 페이지 ✨ |

### 🔗 라우팅 설정 코드 (`/src/app/routes.ts`)

```typescript
import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import RoomDetailPage from "./pages/RoomDetailPage";
import EnvironmentDetailPage from "./pages/EnvironmentDetailPage";
import MedicalDetailPage from "./pages/MedicalDetailPage";
import FoodDetailPage from "./pages/FoodDetailPage";
import NonReimbursablePage from "./pages/NonReimbursablePage";
import SitemapPage from "./pages/SitemapPage";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: LandingPage },
      { path: "room-detail", Component: RoomDetailPage },
      { path: "environment-detail", Component: EnvironmentDetailPage },
      { path: "medical-detail", Component: MedicalDetailPage },
      { path: "food-detail", Component: FoodDetailPage },
      { path: "non-reimbursable", Component: NonReimbursablePage },
      { path: "sitemap", Component: SitemapPage },
    ],
  },
]);
```

---

## 🎨 디자인 시스템

### 컬러 팔레트

| 용도 | 색상 코드 | 설명 |
|------|----------|------|
| **배경** | `#FFFFFF` | 메인 배경색 (흰색) |
| **소프트 배경** | `#F4F1EC` | 부드러운 베이지 배경 |
| **비급여 페이지 배경** | `#F7F6F3` | 연한 베이지 배경 |
| **주요 텍스트** | `#111111` | 본문 텍스트 (검정) |
| **액센트 컬러** | `#3F6B4F` | 브랜드 그린 |
| **CTA 버튼** | `#1E3A2E` | 다크 그린 버튼 |

### 타이포그래피 가이드

| 요소 | 폰트 크기 | 줄간격 | 비고 |
|------|-----------|--------|------|
| **랜딩 페이지 타이틀** | 32-40px | 160% | 50-60대 타겟 |
| **본문** | 18-20px | 160% | 가독성 최우선 |
| **비급여 페이지 타이틀** | 28px | - | 40-70대 타겟 |
| **비급여 섹션 제목** | 22px | - | 카드형 UI |
| **비급여 본문** | 18px | - | 큰 글자 |

### UI 컴포넌트 스타일

- **카드 모서리:** 20px 둥근 모서리
- **여백:** 충분한 여백 (시니어 친화적 UX)
- **애니메이션:** Motion 라이브러리 기반
  - `opacity: 0 → 1`
  - `translateY: 40px → 0px`
  - `duration: 0.6s`
  - 과한 모션 금지

---

## 🛠️ 기술 스택

### 코어 프레임워크
- **React:** 18.3.1
- **React Router:** 7.13.0
- **Vite:** 6.3.5
- **TypeScript:** (타입 지원)

### 스타일링
- **Tailwind CSS:** 4.1.12
- **@tailwindcss/vite:** 4.1.12
- **PostCSS**

### UI 라이브러리
- **Radix UI:** 다양한 컴포넌트 (accordion, dialog, popover 등)
- **shadcn/ui:** UI 컴포넌트 시스템
- **Lucide React:** 아이콘 (0.487.0)
- **Material-UI:** 7.3.5 (@mui/material, @mui/icons-material)

### 애니메이션
- **Motion:** 12.23.24 (구 Framer Motion)
  - `import { motion } from 'motion/react'`

### 폼 & 인터랙션
- **React Hook Form:** 7.55.0
- **React DnD:** 16.0.1 (드래그앤드롭)
- **React Slick:** 0.31.0 (캐러셀)
- **Embla Carousel:** 8.6.0

### 차트 & 데이터 시각화
- **Recharts:** 2.15.2

### 유틸리티
- **date-fns:** 3.6.0 (날짜 처리)
- **clsx:** 2.1.1 (클래스네임 조합)
- **class-variance-authority:** 0.7.1
- **tailwind-merge:** 3.2.0

---

## 🔍 SEO 최적화 구조

### 1. `useSEO` 커스텀 훅 (`/src/app/hooks/useSEO.ts`)

모든 페이지에서 SEO 메타태그를 동적으로 관리하는 React Hook

```typescript
interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  robots?: string; // 기본값: "index,follow"
}
```

**주요 기능:**
- `<title>` 태그 설정
- `<link rel="canonical">` 설정
- `<meta name="description">` 설정
- `<meta name="robots">` 설정
- 페이지 전환 시 이전 태그 자동 제거 (클린업)

### 2. `robots.txt` (`/public/robots.txt`)

검색엔진 크롤링 정책 설정

```
User-agent: *
Allow: /

Sitemap: https://taedonghp.co.kr/sitemap.xml

# 네이버, 구글, 다음 검색봇 허용
User-agent: Yeti
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Daumoa
Allow: /
```

### 3. `sitemap.xml` (`/public/sitemap.xml`)

검색엔진 제출용 XML 사이트맵

**포함된 URL:**
- `/` (홈페이지) - priority 1.0
- `/rooms` (입원실 안내)
- `/environment` (자연환경)
- `/medical` (치료재활)
- `/food` (식사메뉴)
- `/non-reimbursable` (비급여안내)

**메타데이터:**
- `lastmod`: 2026-03-13
- `changefreq`: weekly / monthly
- `priority`: 1.0 ~ 0.7

### 4. `vercel.json` 배포 설정

SPA 라우팅 문제 해결을 위한 Vercel 라우팅 설정

```json
{
  "routes": [
    { "src": "^/robots.txt$", "dest": "/robots.txt" },
    { "src": "^/sitemap.xml$", "dest": "/sitemap.xml" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

**목적:**
- `robots.txt`와 `sitemap.xml`을 정적 파일로 직접 서빙
- SPA 라우팅으로 인한 404 방지

### 5. 사이트맵 페이지 (`/sitemap`)

**용도:** 네이버 검색엔진 웹마스터 도구 제출용

**구성:**
- 제목: "사이트맵 (Sitemap)"
- 설명: "춘천태동요양병원 홈페이지의 전체 페이지 구조입니다."
- XML 코드 블록 (고정폭 폰트, 스크롤 가능)
- 하단 안내: "이 페이지는 검색엔진 수집을 위한 사이트맵입니다."

---

## 📦 주요 패키지 의존성 (`package.json`)

### UI 컴포넌트
```json
"@radix-ui/react-*": "1.x ~ 2.x",
"lucide-react": "0.487.0",
"@mui/material": "7.3.5",
"@mui/icons-material": "7.3.5"
```

### 애니메이션
```json
"motion": "12.23.24"
```

### 폼 & 인터랙션
```json
"react-hook-form": "7.55.0",
"react-dnd": "16.0.1",
"react-slick": "0.31.0"
```

### 스타일링
```json
"tailwindcss": "4.1.12",
"@tailwindcss/vite": "4.1.12",
"class-variance-authority": "0.7.1",
"tailwind-merge": "3.2.0"
```

---

## 🚀 빌드 & 배포

### 빌드 스크립트
```bash
npm run build
# 또는
pnpm build
```

### 배포 플랫폼
- **Vercel** (vercel.json 설정 기반)

### 환경 설정
- **Node.js 18+** (권장)
- **pnpm** (패키지 매니저)

---

## 📝 페이지별 특징

### 1. **LandingPage** (`/`)
- **구조:** 13개 섹션 스토리텔링
- **타겟:** 50-60대
- **디자인:** 모바일 우선 (iPhone 390px 기준)
- **애니메이션:** Motion 라이브러리 기반 부드러운 스크롤

**섹션 구성:**
1. HeroSection
2. RealitySection
3. NotSection
4. GuardianSection
5. NatureRecoverySection
6. EnvironmentSection
7. MedicalBalanceSection
8. RoomSection
9. DailyFlowSection
10. QASection
11. ConclusionSection
12. CTASection

### 2. **NonReimbursablePage** (`/non-reimbursable`)
- **타겟:** 50-70대 암환자 + 40-60대 보호자
- **배경색:** #F7F6F3
- **디자인:** 카드형 UI (둥근 모서리 20px)
- **폰트:** 타이틀 28px, 섹션 22px, 본문 18px
- **애니메이션:** opacity 0→1, translateY 40px→0px, 0.6초

### 3. **SitemapPage** (`/sitemap`) ✨ NEW
- **용도:** 검색엔진 제출용
- **디자인:** 텍스트 중심, 최소 디자인
- **구성:** 제목 + 설명 + XML 코드 블록 + 안내 문구

### 4. **DetailPages** (4개)
- `RoomDetailPage`: 입원실 안내
- `EnvironmentDetailPage`: 자연환경
- `MedicalDetailPage`: 치료/재활
- `FoodDetailPage`: 식사 메뉴

---

## 🔒 보호된 파일 (수정 금지)

```
/src/app/components/figma/ImageWithFallback.tsx
/pnpm-lock.yaml
```

---

## 📌 디자인 가이드라인 요약

### 시니어 친화적 UX 원칙
1. ✅ **큰 폰트 크기** (18-40px)
2. ✅ **넉넉한 줄간격** (160%)
3. ✅ **충분한 여백**
4. ✅ **부드러운 애니메이션** (과한 모션 금지)
5. ✅ **높은 대비** (#111111 텍스트 on #FFFFFF 배경)
6. ✅ **카드형 UI** (둥근 모서리 20px)
7. ✅ **모바일 우선** (iPhone 390px 기준)

### 애니메이션 가이드라인
- **라이브러리:** Motion (`import { motion } from 'motion/react'`)
- **기본 애니메이션:**
  - `initial: { opacity: 0, y: 40 }`
  - `whileInView: { opacity: 1, y: 0 }`
  - `transition: { duration: 0.6 }`
- **과한 모션 금지:** 시니어 사용자 고려

---

## 🎯 프로젝트 목표

1. **50-60대 타겟 랜딩 페이지** (메인 홈페이지)
2. **40-70대 타겟 비급여 안내 페이지**
3. **네이버 검색 최적화** (SEO)
4. **시니어 친화적 UX**
5. **모바일 우선 반응형 디자인**

---

## 📞 도메인 & 배포 정보

- **도메인:** https://taedonghp.co.kr
- **www 도메인:** https://www.taedonghp.co.kr
- **배포 플랫폼:** Vercel
- **검색엔진:** 네이버 웹마스터 도구 제출 완료 예정

---

## 📚 추가 참고 사항

### 1. 이미지 관리
- **Unsplash 이미지** 사용 가능
- **ImageWithFallback 컴포넌트** 사용
- **figma:asset 스킴** 지원

### 2. 폰트 설정
- **폰트 임포트:** `/src/styles/fonts.css`에만 추가
- **시스템 폰트:** 한글 기본 폰트 사용 (가독성 우선)

### 3. Tailwind CSS v4
- **테마 설정:** `/src/styles/theme.css`
- **커스텀 토큰:** CSS 변수 기반
- **tailwind.config.js 사용 안 함** (Tailwind v4)

---

## ✅ 완료된 작업 체크리스트

- ✅ 메인 랜딩 페이지 (13개 섹션)
- ✅ 비급여 안내 페이지
- ✅ 입원실/환경/치료/식사 상세 페이지
- ✅ SEO 최적화 (useSEO 훅)
- ✅ robots.txt 생성
- ✅ sitemap.xml 생성
- ✅ vercel.json 라우팅 설정
- ✅ 사이트맵 페이지 생성 (/sitemap)
- ✅ React Router 라우팅 구조
- ✅ Layout 컴포넌트 (TopNav + BottomNav)
- ✅ Motion 애니메이션 적용

---

## 🔜 향후 개선 가능 항목

1. **성능 최적화**
   - 이미지 lazy loading
   - 코드 스플리팅 (React.lazy)

2. **접근성 (A11y)**
   - ARIA 라벨 추가
   - 키보드 네비게이션 개선

3. **Analytics**
   - Google Analytics 연동
   - 네이버 애널리틱스 연동

4. **다국어 지원**
   - i18n (한국어/영어)

---

**문서 작성일:** 2024년 3월 14일  
**버전:** 1.0.0  
**작성자:** Figma Make AI Assistant
