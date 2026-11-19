// 사이트 전체의 검색엔진용 정보(제목·설명·구조화 데이터)를 한곳에서 관리한다.
// 빌드 시 사전 렌더링(scripts/prerender.mjs)과 브라우저의 useSEO 훅이 같은 값을 쓴다.
import { faqItems } from './data/faq';

export const SITE = {
  name: '춘천태동요양병원',
  legalName: '태동의료법인',
  url: 'https://www.taedonghp.co.kr',
  ogImage: 'https://www.taedonghp.co.kr/og-image.jpg',
  telephone: '+82-1522-0288',
  telephoneLocal: '+82-33-263-8110',
  // 카카오맵에 등록된 병원 장소
  kakaoMapUrl: 'https://place.map.kakao.com/635333515',
  kakaoDirectionsUrl: 'https://map.kakao.com/link/to/635333515',
  geo: { latitude: 37.72447551, longitude: 127.51721658 },
  address: {
    streetAddress: '남면 박암관천길 821',
    addressLocality: '춘천시',
    addressRegion: '강원도',
    addressCountry: 'KR',
  },
};

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  /** 탐색 경로(BreadcrumbList)에 쓰는 짧은 이름 */
  label: string;
  robots?: string;
  /** sitemap.xml 포함 여부 */
  inSitemap?: boolean;
  priority?: string;
}

export const PAGES: PageSeo[] = [
  {
    path: '/',
    label: '홈',
    title: '춘천태동요양병원 | 춘천 암요양병원 · 암재활 면역 관리',
    description:
      '강원도 춘천, 홍천강과 북한강이 만나는 자연 속 암요양병원입니다. 항암·수술 후 회복을 돕는 치료와 재활, 면역 관리, 맞춤 식사, 온돌 입원실을 안내합니다.',
    inSitemap: true,
    priority: '1.0',
  },
  {
    path: '/room-detail',
    label: '입원실 안내',
    title: '입원실 안내 | 춘천태동요양병원',
    description:
      '홍천강이 보이는 온돌 입원실, 병실 안 화장실과 싱크대, 친환경 소독 관리, 라운지 카페와 찜질방까지 춘천태동요양병원의 입원 시설을 안내합니다.',
    inSitemap: true,
    priority: '0.8',
  },
  {
    path: '/environment-detail',
    label: '자연환경',
    title: '자연환경 | 춘천태동요양병원',
    description:
      '홍천강과 북한강이 만나는 곳에 자리한 요양병원입니다. 강변 카약, 황토길 맨발 걷기, 소나무 숲길, 호수 전망 등 회복을 돕는 자연환경을 소개합니다.',
    inSitemap: true,
    priority: '0.8',
  },
  {
    path: '/medical-detail',
    label: '치료·재활 프로그램',
    title: '치료·재활 프로그램 | 춘천태동요양병원',
    description:
      '의료진 상담, 고주파 온열치료, 물리치료와 재활, 면역 관리, 암 특강과 생활재활 프로그램 등 춘천태동요양병원의 치료·재활 과정을 안내합니다.',
    inSitemap: true,
    priority: '0.8',
  },
  {
    path: '/food-detail',
    label: '식사 안내',
    title: '식사 안내 | 춘천태동요양병원',
    description:
      '병원 텃밭에서 기른 채소와 제철 식재료로 차리는 식사를 소개합니다. 영양죽, 고단백 식단 등 개인 상태에 맞춘 식사를 제공합니다.',
    inSitemap: true,
    priority: '0.8',
  },
  {
    path: '/non-reimbursable',
    label: '비급여 안내',
    title: '비급여 진료비 안내 | 춘천태동요양병원',
    description:
      '춘천태동요양병원의 비급여 항목과 비용을 안내합니다. 1인실 병실료, 면역·영양 주사, 비타민 주사, 재활 치료, 증명서 발급 비용을 확인할 수 있습니다.',
    inSitemap: true,
    priority: '0.7',
  },
  {
    path: '/sitemap',
    label: '사이트맵',
    title: '사이트맵 | 춘천태동요양병원',
    description: '춘천태동요양병원 홈페이지 전체 페이지 목록입니다.',
    robots: 'noindex,follow',
  },
  {
    path: '/privacy',
    label: '개인정보 처리방침',
    title: '개인정보 처리방침 | 춘천태동요양병원',
    description: '춘천태동요양병원 홈페이지 온라인 문의에서 수집하는 개인정보의 항목, 이용 목적, 보유 기간을 안내합니다.',
  },
];

export const NOT_FOUND_SEO: PageSeo = {
  path: '/404',
  label: '페이지 없음',
  title: '페이지를 찾을 수 없습니다 | 춘천태동요양병원',
  description: '요청하신 페이지를 찾을 수 없습니다.',
  robots: 'noindex,follow',
};

function normalize(pathname: string) {
  const p = pathname.replace(/\/+$/, '');
  return p === '' ? '/' : p;
}

export function getPageSeo(pathname: string): PageSeo {
  const p = normalize(pathname);
  return PAGES.find((page) => page.path === p) ?? NOT_FOUND_SEO;
}

export function canonicalFor(page: PageSeo) {
  return page.path === '/' ? `${SITE.url}/` : `${SITE.url}${page.path}`;
}

/** 페이지별 구조화 데이터(JSON-LD) 목록 */
export function jsonLdFor(page: PageSeo): object[] {
  if (page === NOT_FOUND_SEO) return [];

  const hospital = {
    '@context': 'https://schema.org',
    '@type': 'Hospital',
    '@id': `${SITE.url}/#hospital`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: `${SITE.url}/`,
    image: SITE.ogImage,
    telephone: [SITE.telephone, SITE.telephoneLocal],
    address: { '@type': 'PostalAddress', ...SITE.address },
    geo: { '@type': 'GeoCoordinates', ...SITE.geo },
    hasMap: SITE.kakaoMapUrl,
  };

  const list: object[] = [hospital];

  if (page.path === '/') {
    list.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      name: SITE.name,
      url: `${SITE.url}/`,
      inLanguage: 'ko-KR',
    });
    list.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer.replace(/\n/g, ' ') },
      })),
    });
  } else {
    list.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: page.label, item: canonicalFor(page) },
      ],
    });
  }

  return list;
}

function esc(value: string) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** 사전 렌더링 시 <head>에 넣을 태그 문자열. data-seo 표시가 있어 브라우저에서 교체할 수 있다. */
export function headTagsFor(pathname: string): string {
  const page = getPageSeo(pathname);
  const canonical = canonicalFor(page);
  const tags = [
    `<title>${esc(page.title)}</title>`,
    `<meta data-seo name="description" content="${esc(page.description)}" />`,
    `<meta data-seo name="robots" content="${page.robots ?? 'index,follow'}" />`,
    `<link data-seo rel="canonical" href="${canonical}" />`,
    `<meta data-seo property="og:type" content="website" />`,
    `<meta data-seo property="og:site_name" content="${esc(SITE.name)}" />`,
    `<meta data-seo property="og:locale" content="ko_KR" />`,
    `<meta data-seo property="og:title" content="${esc(page.title)}" />`,
    `<meta data-seo property="og:description" content="${esc(page.description)}" />`,
    `<meta data-seo property="og:url" content="${canonical}" />`,
    `<meta data-seo property="og:image" content="${SITE.ogImage}" />`,
    `<meta data-seo property="og:image:width" content="1200" />`,
    `<meta data-seo property="og:image:height" content="630" />`,
    `<meta data-seo name="twitter:card" content="summary_large_image" />`,
    `<meta data-seo name="twitter:title" content="${esc(page.title)}" />`,
    `<meta data-seo name="twitter:description" content="${esc(page.description)}" />`,
    `<meta data-seo name="twitter:image" content="${SITE.ogImage}" />`,
    ...jsonLdFor(page).map(
      (data) => `<script data-seo type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`,
    ),
  ];
  return tags.join('\n    ');
}
