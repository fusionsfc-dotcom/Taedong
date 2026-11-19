import { INQUIRY_ENABLED, type InquiryTopic } from '../../data/inquiry';
import { useInquiry } from './InquiryContext';

/** 문의 창을 여는 버튼. 문의 기능이 꺼져 있으면 아무것도 그리지 않는다 */
export function InquiryButton({ label = '문자로 문의하기', topic, variant = 'solid' }: { label?: string; topic?: InquiryTopic; variant?: 'solid' | 'outline' }) {
  const { open } = useInquiry();
  if (!INQUIRY_ENABLED) return null;
  const solid = variant === 'solid';
  return (
    <button
      type="button"
      onClick={() => open(topic)}
      className="w-full rounded-[18px] tracking-[-0.02em] transition-all duration-200 active:scale-[0.98]"
      style={{
        minHeight: solid ? '72px' : '64px',
        fontSize: solid ? '22px' : '19px',
        fontWeight: 'bold',
        color: solid ? '#FFFFFF' : '#1F4B36',
        backgroundColor: solid ? '#1F4B36' : '#FFFFFF',
        border: solid ? 'none' : '2px solid #1F4B36',
      }}
    >
      {label}
    </button>
  );
}
