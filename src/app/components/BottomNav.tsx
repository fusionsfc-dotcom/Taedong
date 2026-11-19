import { Link, useLocation } from 'react-router';
import { BedDouble, Trees, Activity, Utensils, FileText } from 'lucide-react';

export function BottomNav() {
  const location = useLocation();

  const navItems = [
    {
      icon: BedDouble,
      label: '입원실',
      route: '/room-detail'
    },
    {
      icon: Trees,
      label: '자연환경',
      route: '/environment-detail'
    },
    {
      icon: Activity,
      label: '치료재활',
      route: '/medical-detail'
    },
    {
      icon: Utensils,
      label: '식사',
      route: '/food-detail'
    },
    {
      icon: FileText,
      label: '비급여',
      route: '/non-reimbursable'
    }
  ];

  // 이미 해당 페이지에 있으면 맨 위로 올린다
  const handleNavClick = (item: typeof navItems[0]) => {
    if (location.pathname === item.route) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isActive = (route: string) => {
    return location.pathname === route;
  };

  return (
    <nav 
      aria-label="주요 메뉴"
      className="fixed left-0 right-0 bg-white border-t border-[#E8E6E0] z-50"
      style={{ 
        bottom: '0',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)',
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 0px)'
      }}
    >
      <div className="grid grid-cols-5 max-w-[640px] mx-auto">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const active = isActive(item.route);
          
          return (
            <Link
              key={index}
              to={item.route}
              aria-current={active ? 'page' : undefined}
              onClick={() => handleNavClick(item)}
              className="flex flex-col items-center justify-center transition-all duration-200"
              style={{
                padding: '10px 4px 12px',
                minHeight: '64px'
              }}
            >
              <Icon 
                aria-hidden="true"
                className={`transition-colors duration-200 mb-1`}
                style={{
                  width: '22px',
                  height: '22px',
                  color: active ? '#3F6B4F' : '#888888',
                  strokeWidth: active ? 2.5 : 2
                }}
              />
              <span 
                className="transition-colors duration-200"
                style={{
                  fontSize: '11px',
                  fontWeight: active ? '600' : '400',
                  color: active ? '#3F6B4F' : '#888888',
                  lineHeight: '1.2'
                }}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
