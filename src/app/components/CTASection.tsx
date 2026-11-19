import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { LocationCard } from './info/LocationCard';
import { InquiryButton } from './inquiry/InquiryButton';
import { Phone, BedDouble, Trees, Activity, Utensils, FileText, Home } from 'lucide-react';

const MotionLink = motion.create(Link);

export function CTASection() {
  const [hasAnimated, setHasAnimated] = useState(false);
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
      route: '/room-detail'
    },
    {
      icon: Trees,
      text: '자연환경 둘러보기',
      route: '/environment-detail'
    },
    {
      icon: Activity,
      text: '치료와 재활 프로그램',
      route: '/medical-detail'
    },
    {
      icon: Utensils,
      text: '건강한 식사와 텃밭보기',
      route: '/food-detail'
    },
    {
      icon: FileText,
      text: '비급여 안내',
      route: '/non-reimbursable'
    }
  ];

  // 이미 해당 페이지에 있으면 맨 위로 올린다
  const handleSamePageClick = (route: string) => {
    if (location.pathname === route) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
              <MotionLink
                key={index}
                to={item.route}
                onClick={() => handleSamePageClick(item.route)}
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
              </MotionLink>
            );
          })}
        </div>

        {/* 온라인 문의: 문자 발송이 연결되면 켜진다 */}
        <div className="mb-4">
          <InquiryButton direct />
        </div>

        {/* 전화 상담 CTA 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <a
            href="tel:1522-0288"
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
          </a>
        </motion.div>

        {/* 처음으로 가기 버튼 */}
        {location.pathname !== '/' && (
          <motion.div
            className="mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <Link
              to="/"
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
            </Link>
          </motion.div>
        )}

        {/* 오시는 길: 카카오맵 연결 */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2
            className="text-center text-[#111111] mb-6 tracking-[-0.01em]"
            style={{ fontSize: '22px', fontWeight: '600' }}
          >
            오시는 길
          </h2>
          <LocationCard />
        </motion.div>
      </div>

      {/* 푸터 영역 - 네이비 배경 */}
      <footer className="bg-[#1A2332] px-7 py-16">
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
              <address className="not-italic">주소 : 강원도 춘천시 남면 박암관천길 821</address>
            </div>

            <p 
              className="text-white tracking-[-0.01em]"
              style={{ fontSize: '14px', opacity: 0.7 }}
            >
              © 2026 춘천태동요양병원. All rights reserved.
            </p>
            <p className="mt-4">
              <Link to="/privacy" className="text-white tracking-[-0.01em] underline" style={{ fontSize: '14px', opacity: 0.85 }}>
                개인정보 처리방침
              </Link>
            </p>
          </motion.div>
        </div>
      </footer>
    </section>
  );
}
