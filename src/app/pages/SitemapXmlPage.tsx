export default function SitemapXmlPage() {
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
