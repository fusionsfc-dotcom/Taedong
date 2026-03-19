import { useEffect } from 'react';
import { useSEO } from '../hooks/useSEO';

export default function SitemapPage() {
  // SEO 설정
  useSEO({
    title: 'Sitemap',
    description: '춘천태동요양병원 홈페이지 전체 페이지 목록입니다.',
    canonical: 'https://www.taedonghp.co.kr/sitemap',
    robots: 'index,follow'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const urls = `https://www.taedonghp.co.kr/

https://www.taedonghp.co.kr/room-detail

https://www.taedonghp.co.kr/environment-detail

https://www.taedonghp.co.kr/medical-detail

https://www.taedonghp.co.kr/food-detail

https://www.taedonghp.co.kr/non-reimbursable`;

  return (
    <div className="w-full bg-white min-h-screen" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="max-w-4xl mx-auto px-5">
        {/* 제목 */}
        <h1 
          className="text-[#111111] mb-4"
          style={{ fontSize: '28px', fontWeight: 'bold' }}
        >
          Sitemap
        </h1>

        {/* 설명 문구 */}
        <p 
          className="text-[#555555] mb-6"
          style={{ fontSize: '16px' }}
        >
          춘천태동요양병원 홈페이지 전체 페이지 목록입니다.
        </p>

        {/* URL 목록 코드 블록 */}
        <div 
          className="bg-[#F5F5F5] rounded-lg p-5 overflow-x-auto"
          style={{ 
            fontFamily: 'monospace',
            fontSize: '14px',
            lineHeight: '1.8'
          }}
        >
          <pre className="text-left whitespace-pre-wrap break-all">
            <code>{urls}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
