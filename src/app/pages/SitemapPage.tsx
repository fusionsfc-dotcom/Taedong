import { useEffect } from 'react';
import { Link } from 'react-router';
import { PAGES } from '../seo';

export default function SitemapPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pages = PAGES.filter((page) => page.inSitemap);

  return (
    <div className="w-full bg-white min-h-screen" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="max-w-[640px] mx-auto px-5">
        <h1 
          className="text-[#111111] mb-4"
          style={{ fontSize: '28px', fontWeight: 'bold' }}
        >
          사이트맵
        </h1>

        <p 
          className="text-[#555555] mb-6"
          style={{ fontSize: '16px' }}
        >
          춘천태동요양병원 홈페이지 전체 페이지 목록입니다.
        </p>

        <ul className="space-y-3">
          {pages.map((page) => (
            <li key={page.path}>
              <Link
                to={page.path}
                className="block bg-[#F7F6F3] rounded-2xl px-6 py-5 text-[#111111]"
                style={{ fontSize: '18px' }}
              >
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
