export default function NotFoundPage() {
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
