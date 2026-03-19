import { useLocation } from 'react-router';

export default function NotFoundPage() {
  const location = useLocation();

  // robots.txt 요청인지 확인
  if (location.pathname === '/robots.txt') {
    const robotsContent = `User-agent: *
Allow: /

Sitemap: https://www.taedonghp.co.kr/sitemap.xml`;

    return (
      <pre style={{ 
        margin: 0, 
        padding: '20px',
        fontFamily: 'monospace',
        fontSize: '14px',
        lineHeight: '1.6',
        whiteSpace: 'pre-wrap',
        backgroundColor: '#ffffff',
        color: '#000000'
      }}>
        {robotsContent}
      </pre>
    );
  }

  // sitemap.xml 요청인지 확인
  if (location.pathname === '/sitemap.xml') {
    const urls = `https://www.taedonghp.co.kr/

https://www.taedonghp.co.kr/room-detail

https://www.taedonghp.co.kr/environment-detail

https://www.taedonghp.co.kr/medical-detail

https://www.taedonghp.co.kr/food-detail

https://www.taedonghp.co.kr/non-reimbursable`;

    return (
      <pre style={{ 
        margin: 0, 
        padding: '20px',
        fontFamily: 'monospace',
        fontSize: '14px',
        lineHeight: '1.6',
        whiteSpace: 'pre-wrap',
        backgroundColor: '#ffffff',
        color: '#000000'
      }}>
        {urls}
      </pre>
    );
  }

  // 일반 404 페이지
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      backgroundColor: '#FFFFFF',
      color: '#111111',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px', fontWeight: 'bold' }}>404</h1>
      <p style={{ fontSize: '18px', marginBottom: '30px' }}>페이지를 찾을 수 없습니다</p>
      <a 
        href="/"
        style={{
          fontSize: '16px',
          padding: '12px 24px',
          backgroundColor: '#1E3A2E',
          color: '#FFFFFF',
          textDecoration: 'none',
          borderRadius: '8px'
        }}
      >
        홈으로 돌아가기
      </a>
    </div>
  );
}
