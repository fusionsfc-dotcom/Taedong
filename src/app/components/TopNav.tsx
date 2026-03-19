import { useNavigate, useLocation } from 'react-router';
import { Home } from 'lucide-react';

export function TopNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  // 홈 페이지에서는 상단 네비게이션 숨김
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav 
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-[#E8E6E0] z-40"
      style={{ 
        paddingTop: 'env(safe-area-inset-top)'
      }}
    >
      <div className="max-w-[640px] mx-auto px-5 py-3 flex items-center justify-between">
        <h1 
          className="text-[#111111]"
          style={{
            fontSize: '16px',
            fontWeight: '700',
            letterSpacing: '-0.02em'
          }}
        >
          춘천태동요양병원
        </h1>
        
        <button
          onClick={handleHomeClick}
          className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 hover:bg-[#F7F6F3] active:scale-95"
          style={{
            color: '#3F6B4F'
          }}
        >
          <Home 
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
        </button>
      </div>
    </nav>
  );
}