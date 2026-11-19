// 온라인 문의 창. 화면 아래에서 올라오며, 한 번에 하나씩 세 단계로 받는다.
//   1) 무엇이 궁금한지  2) 문자/전화 중 어떻게 답할지  3) 휴대폰 번호(질문은 선택)
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, X } from 'lucide-react';
import {
  CALL_TIMES, INQUIRY_MOCK, INQUIRY_TOPICS, formatPhone, isValidPhone, type InquiryTopic,
} from '../../data/inquiry';

const GREEN = '#1F4B36';
const TEXT = '#111111';
const SUB = '#555555';
const LINE = '#E8E6E0';

type Way = '문자' | '전화';
type Status = 'idle' | 'sending' | 'done' | 'failed';

function Choice({ selected, onClick, children, center }: { selected?: boolean; onClick: () => void; children: React.ReactNode; center?: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className="w-full rounded-2xl tracking-[-0.02em] transition-all duration-150 active:scale-[0.98]"
      style={{
        minHeight: '64px',
        padding: '16px 18px',
        textAlign: center ? 'center' : 'left',
        fontSize: '19px',
        fontWeight: 600,
        color: selected ? '#FFFFFF' : TEXT,
        backgroundColor: selected ? GREEN : '#FFFFFF',
        border: `2px solid ${selected ? GREEN : LINE}`,
      }}
    >
      {children}
    </button>
  );
}

export function InquirySheet({ initialTopic, direct = false, page, onClose }: { initialTopic: InquiryTopic; direct?: boolean; page: string; onClose: () => void }) {
  // direct: "문자로 문의하기"로 들어온 경우. 문자 답변으로 정해 두고 번호 입력부터 시작한다
  const [step, setStep] = useState(direct ? 3 : 1);
  const [topic, setTopic] = useState<InquiryTopic>(initialTopic);
  const [way, setWay] = useState<Way | null>(direct ? '문자' : null);
  const [callTime, setCallTime] = useState<string>('');
  const [phone, setPhone] = useState('');
  const [question, setQuestion] = useState('');
  const [website, setWebsite] = useState(''); // 사람에게는 보이지 않는 칸. 자동 프로그램만 채운다
  const [error, setError] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const headingRef = useRef<HTMLHeadingElement>(null);

  // 배경 스크롤을 막고, Esc로 닫을 수 있게 한다
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  useEffect(() => {
    headingRef.current?.focus();
  }, [step, status]);

  const submit = async () => {
    if (!isValidPhone(phone)) {
      setError('휴대폰 번호를 확인해 주세요');
      return;
    }
    setStatus('sending');
    try {
      if (INQUIRY_MOCK) {
        await new Promise((resolve) => setTimeout(resolve, 600));
      } else {
        const response = await fetch('/api/inquiry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ topic, way, callTime, phone: phone.replace(/\D/g, ''), question: question.trim(), page, website }),
        });
        if (!response.ok) throw new Error(String(response.status));
      }
      setStatus('done');
    } catch {
      setStatus('failed');
    }
  };

  const finished = status === 'done' || status === 'failed';
  const title =
    status === 'done' ? '접수됐습니다'
    : status === 'failed' ? '지금은 접수가 어렵습니다'
    : step === 1 ? '무엇이 궁금하세요?'
    : step === 2 ? '어떻게 답해 드릴까요?'
    : direct ? '문자로 문의하기'
    : '휴대폰 번호를 알려 주세요';
  const sub =
    status === 'done' ? (way === '전화' ? `${callTime}에 전화드리겠습니다.` : '문자로 답변드리겠습니다.')
    : status === 'failed' ? '전화로 문의해 주시면 바로 안내해 드립니다.'
    : step === 1 ? '하나만 눌러 주세요.'
    : step === 2 ? `${topic} 문의`
    : way === '전화' ? `${callTime}에 이 번호로 전화드립니다.`
    : direct ? '번호와 질문을 남기시면 문자로 답변드립니다.'
    : '이 번호로 문자를 보내드립니다.';

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center" role="dialog" aria-modal="true" aria-label="온라인 문의">
      <button type="button" aria-label="문의 창 닫기" onClick={onClose} className="absolute inset-0 w-full h-full" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} />

      <div
        className="relative w-full bg-[#F7F6F3] overflow-y-auto"
        style={{ maxWidth: '640px', maxHeight: '92vh', borderRadius: '24px 24px 0 0', paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 20px)' }}
      >
        {/* 머리: 이전, 진행 표시, 닫기 */}
        <div className="flex items-center justify-between" style={{ padding: '14px 12px 6px' }}>
          <button
            type="button"
            aria-label="이전 단계"
            onClick={() => setStep((current) => Math.max(1, current - 1))}
            className="flex items-center justify-center rounded-full"
            style={{ width: '44px', height: '44px', color: SUB, visibility: step > 1 && !finished && !direct ? 'visible' : 'hidden' }}
          >
            <ChevronLeft aria-hidden="true" style={{ width: '26px', height: '26px' }} />
          </button>
          <div className="flex gap-2" aria-hidden="true" style={{ visibility: direct ? 'hidden' : 'visible' }}>
            {[1, 2, 3].map((index) => (
              <span key={index} style={{ width: '32px', height: '5px', borderRadius: '3px', backgroundColor: finished || index <= step ? GREEN : '#D9D6CF' }} />
            ))}
          </div>
          <button type="button" aria-label="닫기" onClick={onClose} className="flex items-center justify-center rounded-full" style={{ width: '44px', height: '44px', color: SUB }}>
            <X aria-hidden="true" style={{ width: '24px', height: '24px' }} />
          </button>
        </div>

        <div style={{ padding: '10px 22px 8px' }}>
          <h2 ref={headingRef} tabIndex={-1} className="tracking-[-0.02em] outline-none" style={{ fontSize: '25px', fontWeight: 'bold', color: TEXT, lineHeight: 1.35 }}>
            {title}
          </h2>
          <p className="tracking-[-0.02em]" style={{ fontSize: '17px', color: SUB, marginTop: '6px', marginBottom: '20px' }}>
            {sub}
          </p>

          {/* 1단계: 주제. 누르면 바로 다음 단계로 간다 */}
          {!finished && step === 1 && (
            <div className="grid grid-cols-2 gap-3">
              {INQUIRY_TOPICS.map((item) => (
                <Choice key={item} selected={item === topic} onClick={() => { setTopic(item); setStep(2); }} center>
                  {item}
                </Choice>
              ))}
            </div>
          )}

          {/* 2단계: 답변 방법 */}
          {!finished && step === 2 && (
            <div className="space-y-3">
              <Choice selected={way === '문자'} onClick={() => { setWay('문자'); setCallTime(''); setStep(3); }}>
                문자로 받기
                <span className="block" style={{ fontSize: '15px', fontWeight: 400, opacity: 0.75, marginTop: '2px' }}>편한 시간에 확인하세요</span>
              </Choice>
              <Choice selected={way === '전화'} onClick={() => setWay('전화')}>
                전화로 받기
                <span className="block" style={{ fontSize: '15px', fontWeight: 400, opacity: 0.75, marginTop: '2px' }}>병원에서 전화를 드립니다</span>
              </Choice>
              {way === '전화' && (
                <div style={{ paddingTop: '10px' }}>
                  <p className="tracking-[-0.02em]" style={{ fontSize: '17px', fontWeight: 600, color: TEXT, marginBottom: '10px' }}>통화가 편한 시간</p>
                  <div className="grid grid-cols-3 gap-2">
                    {CALL_TIMES.map((time) => (
                      <Choice key={time} selected={callTime === time} onClick={() => { setCallTime(time); setStep(3); }} center>
                        {time}
                      </Choice>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 3단계: 번호와 질문 */}
          {!finished && step === 3 && (
            <form onSubmit={(event) => { event.preventDefault(); void submit(); }} noValidate>
              <label htmlFor="inquiry-phone" className="sr-only">휴대폰 번호</label>
              <input
                id="inquiry-phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="010-1234-5678"
                value={phone}
                onChange={(event) => { setPhone(formatPhone(event.target.value)); setError(''); }}
                aria-invalid={Boolean(error)}
                aria-describedby="inquiry-phone-error"
                className="w-full bg-white rounded-2xl text-center outline-none"
                style={{ height: '68px', fontSize: '26px', fontWeight: 600, letterSpacing: '1px', color: TEXT, border: `2px solid ${error ? '#C0392B' : LINE}` }}
              />
              <p id="inquiry-phone-error" role="alert" style={{ minHeight: '24px', fontSize: '15px', color: '#C0392B', marginTop: '6px' }}>{error}</p>

              <label htmlFor="inquiry-question" className="sr-only">질문 (선택)</label>
              <textarea
                id="inquiry-question"
                rows={3}
                maxLength={500}
                placeholder="질문을 적어 주세요 (선택)"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                className="w-full bg-white rounded-2xl outline-none resize-none"
                style={{ padding: '14px 16px', fontSize: '18px', lineHeight: 1.5, color: TEXT, border: `2px solid ${LINE}` }}
              />
              <p style={{ fontSize: '15px', color: '#888888', marginTop: '6px', marginBottom: '16px' }}>병명 등 건강 정보는 적지 않으셔도 됩니다.</p>

              {/* 자동 프로그램 차단용. 화면과 보조기기에서 모두 숨긴다 */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={website} onChange={(event) => setWebsite(event.target.value)} style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }} />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full text-white rounded-[18px] transition-all duration-200 active:scale-[0.98]"
                style={{ minHeight: '68px', fontSize: '21px', fontWeight: 'bold', backgroundColor: GREEN, opacity: status === 'sending' ? 0.6 : 1 }}
              >
                {status === 'sending' ? '보내는 중…' : '문의 남기기'}
              </button>
              <p className="text-center" style={{ fontSize: '14px', color: '#888888', lineHeight: 1.5, marginTop: '12px' }}>
                번호는 문의 답변에만 사용합니다.<br />남기시면 수집·이용에 동의하게 됩니다.
              </p>
            </form>
          )}

          {status === 'done' && (
            <div>
              <p className="bg-white rounded-2xl text-center tracking-[-0.01em]" style={{ padding: '18px', fontSize: '22px', fontWeight: 'bold', color: TEXT }}>{phone}</p>
              {INQUIRY_MOCK && <p className="text-center" style={{ fontSize: '14px', color: '#C0392B', marginTop: '10px' }}>시험 모드입니다. 실제로 전달되지 않았습니다.</p>}
              <p className="text-center" style={{ fontSize: '15px', color: '#888888', lineHeight: 1.5, marginTop: '14px' }}>진단과 치료 판단은 내원 상담으로 안내드립니다.</p>
            </div>
          )}

          {status === 'failed' && (
            <a
              href="tel:1522-0288"
              className="flex items-center justify-center w-full text-white rounded-[18px]"
              style={{ minHeight: '68px', fontSize: '21px', fontWeight: 'bold', backgroundColor: GREEN }}
            >
              1522-0288 전화하기
            </a>
          )}

          {finished && (
            <button type="button" onClick={onClose} className="w-full rounded-[18px]" style={{ minHeight: '60px', marginTop: '12px', fontSize: '19px', fontWeight: 600, color: GREEN, border: `2px solid ${LINE}`, backgroundColor: '#FFFFFF' }}>
              닫기
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
