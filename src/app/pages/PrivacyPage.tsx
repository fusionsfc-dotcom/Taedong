import { useEffect } from 'react';

const sections: { title: string; items: string[] }[] = [
  {
    title: '1. 수집하는 항목',
    items: [
      '필수: 휴대폰 번호',
      '선택: 질문 내용',
      '문의 과정에서 함께 전달되는 정보: 문의 주제, 답변 방법(전화를 고른 경우 희망 시간대), 문의할 때 보던 페이지 주소',
    ],
  },
  {
    title: '2. 이용 목적',
    items: ['홈페이지 온라인 문의에 대한 답변(문자 또는 전화)에만 사용합니다.', '광고나 홍보 목적의 문자·전화에는 사용하지 않습니다.'],
  },
  {
    title: '3. 보유 기간',
    items: ['문의에 대한 답변을 마친 날부터 3개월 동안 보관한 뒤 지체 없이 삭제합니다.'],
  },
  {
    title: '4. 제3자 제공',
    items: ['수집한 개인정보를 제3자에게 제공하지 않습니다.'],
  },
  {
    title: '5. 처리 위탁과 국외 이전',
    items: [
      '문의 내용을 담당자에게 전달하기 위해 아래 업체의 서비스를 이용하며, 이 과정에서 정보가 국외(미국) 서버로 전송됩니다.',
      'Resend, Inc. (미국): 문의 알림 메일 발송. 이전 항목은 휴대폰 번호와 문의 내용입니다.',
      'Vercel Inc. (미국): 홈페이지 운영과 문의 접수 처리. 이전 항목은 휴대폰 번호와 문의 내용입니다.',
      '이전 시점과 방법: 문의를 남기는 즉시 암호화된 통신망으로 전송됩니다.',
      '이전을 원하지 않으시면 온라인 문의 대신 전화(1522-0288)로 문의하실 수 있습니다.',
    ],
  },
  {
    title: '6. 건강 정보에 대한 안내',
    items: [
      '질문란에 병명, 병기 등 건강에 관한 정보는 적지 않으셔도 됩니다.',
      '적어 주신 경우에도 문의 답변 외의 목적으로 사용하지 않습니다.',
    ],
  },
  {
    title: '7. 동의를 거부할 권리',
    items: ['개인정보 수집·이용에 동의하지 않으실 수 있습니다. 이 경우 온라인 문의는 이용하실 수 없으며, 전화로 문의하실 수 있습니다.'],
  },
  {
    title: '8. 이용자의 권리',
    items: ['언제든지 본인 정보의 열람, 정정, 삭제, 처리 정지를 요청하실 수 있습니다. 아래 연락처로 요청하시면 지체 없이 처리합니다.'],
  },
  {
    title: '9. 개인정보 보호책임자',
    items: ['춘천태동요양병원 원무과', '전화: 1522-0288'],
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white min-h-screen" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
      <div className="max-w-[640px] mx-auto px-6">
        <h1 className="text-[#111111] tracking-[-0.01em]" style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '12px' }}>
          개인정보 처리방침
        </h1>
        <p className="text-[#555555] tracking-[-0.01em]" style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '36px' }}>
          춘천태동요양병원(태동의료법인)은 홈페이지 온라인 문의를 통해 수집하는 개인정보를 아래와 같이 처리합니다.
        </p>

        {sections.map((section) => (
          <section key={section.title} style={{ marginBottom: '32px' }}>
            <h2 className="text-[#111111] tracking-[-0.01em]" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item} className="text-[#333333] tracking-[-0.01em]" style={{ fontSize: '17px', lineHeight: 1.7 }}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <p className="text-[#888888]" style={{ fontSize: '15px' }}>시행일: 2026년 11월 19일</p>
      </div>
    </div>
  );
}
