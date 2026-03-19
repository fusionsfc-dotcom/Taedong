import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  robots?: string; // 기본값: "index,follow"
}

export function useSEO({ title, description, canonical, robots = 'index,follow' }: SEOProps) {
  useEffect(() => {
    // 페이지 제목 설정
    document.title = title;

    // 기존 메타 태그 제거 (중복 방지)
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    const existingDescription = document.querySelector('meta[name="description"]');
    const existingRobots = document.querySelector('meta[name="robots"]');

    if (existingCanonical) existingCanonical.remove();
    if (existingDescription) existingDescription.remove();
    if (existingRobots) existingRobots.remove();

    // Canonical URL 추가
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = canonical;
    document.head.appendChild(canonicalLink);

    // Description 메타 태그 추가
    const descriptionMeta = document.createElement('meta');
    descriptionMeta.name = 'description';
    descriptionMeta.content = description;
    document.head.appendChild(descriptionMeta);

    // Robots 메타 태그 추가
    const robotsMeta = document.createElement('meta');
    robotsMeta.name = 'robots';
    robotsMeta.content = robots;
    document.head.appendChild(robotsMeta);

    // 클린업
    return () => {
      canonicalLink.remove();
      descriptionMeta.remove();
      robotsMeta.remove();
    };
  }, [title, description, canonical, robots]);
}
