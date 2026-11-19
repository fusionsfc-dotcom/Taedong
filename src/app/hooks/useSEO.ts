import { useEffect } from 'react';
import { headTagsFor, getPageSeo } from '../seo';

/**
 * 현재 경로에 맞는 제목·메타·구조화 데이터를 <head>에 반영한다.
 * 사전 렌더링된 HTML에는 같은 태그가 이미 들어 있으므로, 페이지 이동 시에만 실제로 바뀐다.
 */
export function useSEO(pathname: string) {
  useEffect(() => {
    document.title = getPageSeo(pathname).title;

    document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove());

    const template = document.createElement('template');
    template.innerHTML = headTagsFor(pathname);
    template.content.querySelectorAll('[data-seo]').forEach((el) => {
      if (el.tagName === 'SCRIPT') {
        // template으로 만든 script는 그대로 옮겨도 되지만, 명시적으로 새로 만든다.
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo', '');
        script.textContent = el.textContent;
        document.head.appendChild(script);
      } else {
        document.head.appendChild(el);
      }
    });
  }, [pathname]);
}
