import { Link, useLocation } from 'react-router';
import { Home, MessageCircle } from 'lucide-react';
import { INQUIRY_ENABLED } from '../data/inquiry';
import { useInquiry } from './inquiry/InquiryContext';

export function TopNav() {
  const location = useLocation();
  const { open } = useInquiry();

  const inquiryButton = INQUIRY_ENABLED ? (
    <button
      type="button"
      onClick={() => open()}
      className="flex items-center gap-2 px-4 py-2 rounded-full text-white transition-all duration-200 active:scale-95"
      style={{ backgroundColor: '#1F4B36', boxShadow: '0 2px 8px rgba(31,75,54,0.3)' }}
    >
      <MessageCircle aria-hidden="true" style={{ width: '18px', height: '18px' }} />
      <span style={{ fontSize: '15px', fontWeight: '700' }}>문의</span>
    </button>
  ) : null;

  // 홈에서는 상단 바 없이 문의 버튼만 오른쪽 위에 띄운다
  if (location.pathname === '/') {
    return inquiryButton ? (
      <div className="fixed right-0 z-40" style={{ top: 'env(safe-area-inset-top)', padding: '12px 20px' }}>
        {inquiryButton}
      </div>
    ) : null;
  }

  return (
    <header 
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-[#E8E6E0] z-40"
      style={{ 
        paddingTop: 'env(safe-area-inset-top)'
      }}
    >
      <div className="max-w-[640px] mx-auto px-5 py-3 flex items-center justify-between">
        <Link 
          to="/"
          className="text-[#111111]"
          style={{
            fontSize: '16px',
            fontWeight: '700',
            letterSpacing: '-0.02em'
          }}
        >
          춘천태동요양병원
        </Link>
        
        <div className="flex items-center gap-1">
        <Link
          to="/"
          className="flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200 hover:bg-[#F7F6F3] active:scale-95"
          style={{
            color: '#3F6B4F'
          }}
        >
          <Home 
            aria-hidden="true"
            style={{
              width: '20px',
              height: '20px'
            }}
          />
          <span 
            style={{
              fontSize: '15px',
              fontWeight: '600'
            }}
          >
            홈
          </span>
        </Link>
        {inquiryButton}
        </div>
      </div>
    </header>
  );
}
