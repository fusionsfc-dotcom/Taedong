// 온라인 문의 접수 (Vercel 서버 함수).
// 홈페이지의 문의 창이 보낸 내용을 확인한 뒤 병원 담당자에게 메일로 알린다.
//
// 필요한 환경 변수 (Vercel 프로젝트 설정에 등록, 저장소에는 넣지 않는다):
//   RESEND_API_KEY      메일 발송 서비스(Resend)의 API 키
//   INQUIRY_EMAIL_TO    문의를 받을 메일 주소 (쉼표로 여러 개)
//   INQUIRY_EMAIL_FROM  보내는 주소. 비우면 Resend 기본 주소(onboarding@resend.dev)를 쓴다.
//                       기본 주소로는 Resend 계정의 가입 메일로만 보낼 수 있다.
// 값이 없으면 503을 돌려주고, 화면은 "전화로 문의해 주세요"로 안내한다.

const TOPICS = ['입원 상담', '입원실 · 시설', '치료 · 재활', '식사', '비용', '기타'];
const WAYS = ['문자', '전화'];
const CALL_TIMES = ['오전', '오후', '저녁'];

function isConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.INQUIRY_EMAIL_TO);
}

function validate(body) {
  if (!body || typeof body !== 'object') return null;
  const phone = String(body.phone ?? '').replace(/\D/g, '');
  const topic = String(body.topic ?? '');
  const way = String(body.way ?? '');
  const callTime = String(body.callTime ?? '');
  const question = String(body.question ?? '').slice(0, 500);
  const page = String(body.page ?? '').slice(0, 100);
  if (!/^01[016789]\d{7,8}$/.test(phone)) return null;
  if (!TOPICS.includes(topic) || !WAYS.includes(way)) return null;
  if (way === '전화' && !CALL_TIMES.includes(callTime)) return null;
  return { phone, topic, way, callTime, question, page };
}

function formatPhone(digits) {
  return digits.length === 11
    ? `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`
    : `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** 담당자가 받는 메일 내용 */
export function buildEmail(inquiry, receivedAt) {
  const phone = formatPhone(inquiry.phone);
  const answer = inquiry.way === '전화' ? `전화 요청 (${inquiry.callTime})` : '문자 답변 요청';
  const rows = [
    ['주제', inquiry.topic],
    ['답변 방법', answer],
    ['휴대폰 번호', phone],
    ['질문', inquiry.question || '(남기지 않음)'],
    ['보던 페이지', inquiry.page || '-'],
    ['접수 시각', receivedAt],
  ];
  const subject = `[홈페이지 문의] ${inquiry.topic} · ${answer} · ${phone}`;
  const text = rows.map(([label, value]) => `${label}: ${value}`).join('\n');
  const html =
    '<table style="border-collapse:collapse;font-size:16px;line-height:1.6">' +
    rows
      .map(
        ([label, value]) =>
          `<tr><th style="text-align:left;padding:6px 16px 6px 0;color:#555;white-space:nowrap;vertical-align:top">${label}</th>` +
          `<td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
      )
      .join('') +
    '</table>' +
    `<p style="margin-top:20px"><a href="tel:${inquiry.phone}" style="font-size:18px;font-weight:bold">${phone} 전화 걸기</a>` +
    ` · <a href="sms:${inquiry.phone}" style="font-size:18px;font-weight:bold">문자 보내기</a></p>`;
  return { subject, text, html };
}

async function sendEmail({ subject, text, html }) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.INQUIRY_EMAIL_FROM || '춘천태동요양병원 홈페이지 <onboarding@resend.dev>',
      to: process.env.INQUIRY_EMAIL_TO.split(',').map((value) => value.trim()).filter(Boolean),
      subject,
      text,
      html,
    }),
  });
  if (!response.ok) throw new Error(`email send failed: ${response.status}`);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body;

  // 사람에게 보이지 않는 칸이 채워져 있으면 자동 프로그램이다. 접수된 것처럼 응답하고 버린다.
  if (body && body.website) return res.status(200).json({ ok: true });

  const inquiry = validate(body);
  if (!inquiry) return res.status(400).json({ error: 'invalid_input' });

  if (!isConfigured()) return res.status(503).json({ error: 'not_configured' });

  const receivedAt = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul', dateStyle: 'medium', timeStyle: 'short', hour12: false });

  try {
    await sendEmail(buildEmail(inquiry, receivedAt));
  } catch (error) {
    // 문의 내용(전화번호 등)은 로그에 남기지 않는다
    console.error('inquiry:', error instanceof Error ? error.message : 'send failed');
    return res.status(502).json({ error: 'send_failed' });
  }

  return res.status(200).json({ ok: true });
}

function safeParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}
