import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Phone, BedDouble, Trees, Activity, Utensils, FileText, Newspaper, Home } from 'lucide-react';

export function CTASection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated) {
        const section = document.getElementById('cta-section');
        if (section) {
          const rect = section.getBoundingClientRect();
          const inView = rect.top < window.innerHeight * 0.7;
          if (inView) {
            setHasAnimated(true);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const menuItems = [
    {
      icon: BedDouble,
      text: '입원실과 시설보기',
      targetId: 'room-section',
      route: '/room-detail'
    },
    {
      icon: Trees,
      text: '자연환경 둘러보기',
      targetId: 'environment-section',
      route: '/environment-detail'
    },
    {
      icon: Activity,
      text: '치료와 재활 프로그램',
      targetId: 'medical-balance-section',
      route: '/medical-detail'
    },
    {
      icon: Utensils,
      text: '건강한 식사와 텃밭보기',
      targetId: 'daily-flow-section',
      route: '/food-detail'
    },
    {
      icon: FileText,
      text: '비급여 안내',
      targetId: 'cost-section',
      route: '/non-reimbursable'
    },
    {
      icon: Newspaper,
      text: '병원소식',
      targetId: 'news-section'
    }
  ];

  const handleMenuClick = (item: typeof menuItems[0]) => {
    // 상세 페이지가 있는 메뉴는 해당 페이지로 이동
    if (item.route) {
      if (location.pathname === item.route) {
        // 이미 해당 상세 페이지에 있으면 맨 위로 스크롤
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // 다른 페이지에서는 상세 페이지로 이동
        navigate(item.route);
      }
    } else {
      // 다른 메뉴들은 랜딩 페이지로 이동 후 스크롤
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          scrollToSection(item.targetId);
        }, 100);
      } else {
        scrollToSection(item.targetId);
      }
    }
  };

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:1522-0288';
  };

  return (
    <section 
      id="cta-section"
      className="bg-[#F6F3EF]"
    >
      <div className="px-7 py-20 max-w-[640px] mx-auto" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
        {/* 빠른 메뉴 제목 */}
        <motion.h2
          className="text-center text-[#111111] mb-8 tracking-[-0.01em]"
          style={{ fontSize: '22px', fontWeight: '600' }}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          궁금하신 내용을 다시 확인해보세요
        </motion.h2>

        {/* 빠른 메뉴 버튼들 */}
        <div className="space-y-[18px] mb-10">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <motion.button
                key={index}
                onClick={() => handleMenuClick(item)}
                className="w-full bg-white rounded-2xl px-6 flex items-center gap-[18px] transition-all duration-300 hover:shadow-md active:scale-[0.98]"
                style={{
                  minHeight: '64px',
                  padding: '22px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + index * 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <Icon className="w-[22px] h-[22px] text-[#3F6B4F] flex-shrink-0" />
                <span 
                  className="text-[#111111] tracking-[-0.01em]"
                  style={{ fontSize: '20px' }}
                >
                  {item.text}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* 전화 상담 CTA 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <button
            onClick={handlePhoneCall}
            className="w-full bg-[#1F4B36] text-white rounded-[18px] flex items-center justify-center gap-[14px] transition-all duration-300 hover:bg-[#2A5D47] active:scale-[0.98]"
            style={{
              minHeight: '72px',
              padding: '26px',
              fontSize: '22px',
              fontWeight: 'bold'
            }}
          >
            <Phone className="w-6 h-6" />
            <span>전화 상담하기</span>
          </button>
        </motion.div>

        {/* 처음으로 가기 버튼 */}
        {location.pathname !== '/' && (
          <motion.div
            className="mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <button
              onClick={() => navigate('/')}
              className="w-full bg-white border-2 border-[#3F6B4F] text-[#3F6B4F] rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[#3F6B4F] hover:text-white active:scale-[0.98]"
              style={{
                minHeight: '64px',
                padding: '20px',
                fontSize: '20px',
                fontWeight: '600'
              }}
            >
              <Home className="w-6 h-6" />
              <span>처음으로 가기</span>
            </button>
          </motion.div>
        )}

        {/* 구글 지도 */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=강원도+춘천시+남면+박암관천길+821&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="춘천태동요양병원 위치"
            />
          </div>
        </motion.div>
      </div>

      {/* 푸터 영역 - 네이비 배경 */}
      <div className="bg-[#1A2332] px-7 py-16">
        <div className="max-w-[640px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {/* 병원 상세 정보 */}
            <div 
              className="text-white tracking-[-0.01em] space-y-1 mb-6"
              style={{ fontSize: '14px', lineHeight: '160%', opacity: 0.9 }}
            >
              <p>춘천태동요양병원_태동의료법인</p>
              <p>대표 : 유영순 이사장</p>
              <p>대표번호 : 1522-0288 | 033-263-8110</p>
              <p>사업자등록번호 : 519-82-00500</p>
              <p>주소 : 강원도 춘천시 남면 박암관천길 821</p>
            </div>

            <p 
              className="text-white tracking-[-0.01em]"
              style={{ fontSize: '14px', opacity: 0.7 }}
            >
              © 2026 춘천태동요양병원. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}