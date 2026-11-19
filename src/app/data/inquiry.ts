// 온라인 문의 설정. 화면(InquirySheet)과 서버 함수(api/inquiry.js)가 같은 값을 쓴다.

/** 문자 발송이 연결되기 전에는 문의 버튼을 화면에 내보내지 않는다 */
export const INQUIRY_ENABLED = import.meta.env.VITE_INQUIRY_ENABLED === 'true';
/** 서버 없이 화면 흐름만 확인하는 시험 모드. 실제로는 아무 데도 전달되지 않는다 */
export const INQUIRY_MOCK = import.meta.env.VITE_INQUIRY_MOCK === 'true';

export const INQUIRY_TOPICS = ['입원 상담', '입원실 · 시설', '치료 · 재활', '식사', '비용', '기타'] as const;
export type InquiryTopic = (typeof INQUIRY_TOPICS)[number];

export const CALL_TIMES = ['오전', '오후', '저녁'] as const;

/** 보고 있던 메뉴에 맞는 주제를 미리 골라 둔다 */
export function topicForPath(pathname: string): InquiryTopic {
  if (pathname.startsWith('/room-detail')) return '입원실 · 시설';
  if (pathname.startsWith('/environment-detail')) return '입원실 · 시설';
  if (pathname.startsWith('/medical-detail')) return '치료 · 재활';
  if (pathname.startsWith('/food-detail')) return '식사';
  if (pathname.startsWith('/non-reimbursable')) return '비용';
  return '입원 상담';
}

/** 숫자만 남겨 010-1234-5678 형태로 맞춘다 */
export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length > 7) return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  if (digits.length > 3) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return digits;
}

export function isValidPhone(value: string): boolean {
  return /^01[016789]\d{7,8}$/.test(value.replace(/\D/g, ''));
}
