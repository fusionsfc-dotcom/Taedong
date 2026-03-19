import { useEffect } from 'react';
import { useSEO } from '../hooks/useSEO';

export default function RobotsPage() {
  // SEO 설정
  useSEO({
    title: 'Robots',
    description: '춘천태동요양병원 robots 설정 페이지입니다.',
    canonical: 'https://www.taedonghp.co.kr/sitemap',
    robots: 'index,follow'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://www.taedonghp.co.kr/sitemap`;

  return (
    <div className="w-full bg-white min-h-screen" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="max-w-4xl mx-auto px-5">
        {/* 제목 */}
        <h1 
          className="text-[#111111] mb-6"
          style={{ fontSize: '28px', fontWeight: 'bold' }}
        >
          Robots
        </h1>

        {/* Robots 내용 코드 블록 */}
        <div 
          className="bg-[#F5F5F5] rounded-lg p-5 overflow-x-auto"
          style={{ 
            fontFamily: 'monospace',
            fontSize: '14px',
            lineHeight: '1.8'
          }}
        >
          <pre className="text-left whitespace-pre-wrap break-all">
            <code>{robotsContent}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
