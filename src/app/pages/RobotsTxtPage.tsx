export default function RobotsTxtPage() {
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://www.taedonghp.co.kr/sitemap`;

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
