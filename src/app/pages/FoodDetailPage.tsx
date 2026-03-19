import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Home } from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useSEO } from '../hooks/useSEO';
import heroFoodImage from 'figma:asset/711b4a85cbbf1110dc13ae946f878fd9b725f38c.png';
import mealTrayImage from 'figma:asset/29b108547c094712ccafd7934c0b9ddcfb4015bf.png';
import foodPrepImage from 'figma:asset/f264b4675ff417ded364543c3b50fd9d0ab0a72f.png';

export default function FoodDetailPage() {
  // SEO 설정
  useSEO({
    title: '식사 메뉴 - 춘천태동요양병원',
    description: '영양사가 직접 설계한 암환자 맞춤 식단. 소화력, 면역력, 체력 회복을 위한 영양 관리 프로그램.',
    canonical: 'https://taedonghp.co.kr/food',
    robots: 'index,follow'
  });

  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.3) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const navigate = useNavigate();

  return (
    <div className="w-full bg-white" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
      {/* 1. HERO - 차림상 전면 이미지 */}
      <section 
        data-section 
        className="relative w-full overflow-hidden"
        style={{ height: '100vh' }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <ImageWithFallback
            src={heroFoodImage}
            alt="건강한 차림상"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/15"></div>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex flex-col items-start px-7"
          style={{ paddingBottom: '370px', justifyContent: 'flex-end' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeInOut" }}
        >
          <h1 
            className="text-white leading-[150%] tracking-[-0.01em] mb-5"
            style={{ fontSize: '30px', fontWeight: 'bold' }}
          >
            먹는 것이<br />
            치료가 되는 곳
          </h1>
          <p 
            className="text-white leading-[170%] tracking-[-0.01em]"
            style={{ fontSize: '19px', fontWeight: '500' }}
          >
            암 치료 이후<br />
            가장 많이 묻는 질문이 있습니다.<br />
            "식사는 잘 나오나요?"
          </p>
        </motion.div>
      </section>

      {/* 2. 식치 선언 */}
      <section 
        data-section 
        className="w-full bg-white px-7" 
        style={{ marginTop: '100px', paddingTop: '40px', paddingBottom: '40px' }}
      >
        <motion.div
          className="max-w-[600px] mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <h2 
            className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-6"
            style={{ fontSize: '26px', fontWeight: 'bold' }}
          >
            우리는 음식을<br />
            치료의 연장으로 생각합니다.
          </h2>
          <p 
            className="text-[#555555] leading-[180%] tracking-[-0.01em]"
            style={{ fontSize: '20px' }}
          >
            먹는 것으로<br />
            몸을 다시 세우는 일.
          </p>
          <p 
            className="text-[#2E5D46] leading-[160%] tracking-[-0.01em] mt-6"
            style={{ fontSize: '22px', fontWeight: '600' }}
          >
            '식치(食治)'를 실천합니다.
          </p>
        </motion.div>
      </section>

      {/* 3. 차림상 갤러리 1 */}
      <section data-section className="w-full" style={{ marginTop: '100px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col gap-5">
            {/* 이미지 1 */}
            <div>
              <ImageWithFallback
                src={mealTrayImage}
                alt="부담 없는 한 끼"
                className="w-full h-auto rounded-2xl"
                style={{ aspectRatio: '4/3' }}
              />
              <p 
                className="text-[#555555] leading-[170%] tracking-[-0.01em] mt-4 px-7"
                style={{ fontSize: '18px' }}
              >
                부담 없는 한 끼
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. 개인별 맞춤 영양 설계 */}
      <section data-section className="w-full px-7" style={{ marginTop: '120px' }}>
        <motion.div
          className="max-w-[640px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <h2 
            className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-7"
            style={{ fontSize: '26px', fontWeight: 'bold' }}
          >
            회복은 사람마다 다릅니다.
          </h2>
          <p 
            className="text-[#555555] leading-[170%] tracking-[-0.01em] mb-8"
            style={{ fontSize: '19px' }}
          >
            영양관리팀과 주치의가<br />
            치료 단계에 맞춰 식단을 설계합니다.
          </p>
          <div className="flex flex-col gap-3">
            <div 
              className="text-[#2E5D46] leading-[160%] tracking-[-0.01em]"
              style={{ fontSize: '20px', fontWeight: '600' }}
            >
              저염식
            </div>
            <div 
              className="text-[#2E5D46] leading-[160%] tracking-[-0.01em]"
              style={{ fontSize: '20px', fontWeight: '600' }}
            >
              고단백식
            </div>
            <div 
              className="text-[#2E5D46] leading-[160%] tracking-[-0.01em]"
              style={{ fontSize: '20px', fontWeight: '600' }}
            >
              영양죽
            </div>
            <div 
              className="text-[#2E5D46] leading-[160%] tracking-[-0.01em]"
              style={{ fontSize: '20px', fontWeight: '600' }}
            >
              소화 부담을 줄인 식사
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. 차림상 갤러리 2 (죽/고단백식) */}
      <section data-section className="w-full" style={{ marginTop: '100px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col gap-5">
            {/* 영양죽 */}
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1608684363982-d2d470f0b4bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JyaWRnZSUyMGNvbmdlZSUyMGhlYWx0aHklMjBwYXRpZW50JTIwbWVhbHxlbnwxfHx8fDE3NzE5MjU5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="영양죽"
                className="w-full h-auto rounded-2xl"
                style={{ aspectRatio: '4/3' }}
              />
            </div>

            {/* 고단백식 */}
            <div>
              <ImageWithFallback
                src={foodPrepImage}
                alt="고단백 식단"
                className="w-full h-auto rounded-2xl"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>

          <p 
            className="text-[#111111] leading-[180%] tracking-[-0.01em] mt-8 px-7 text-center"
            style={{ fontSize: '20px', fontWeight: '600' }}
          >
            많이 먹는 것이 아니라<br />
            맞게 먹는 것이 중요합니다.
          </p>
        </motion.div>
      </section>

      {/* 6. 텃밭 스토리 */}
      <section data-section className="w-full px-7" style={{ marginTop: '120px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="max-w-[640px] mx-auto">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1739444298567-b3f0fcc85503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwdmVnZXRhYmxlJTIwZ2FyZGVuJTIwb3JnYW5pYyUyMGdyb3dpbmd8ZW58MXx8fHwxNzcxOTI1OTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="병원 텃밭"
              className="w-full h-auto rounded-2xl"
              style={{ aspectRatio: '16/11' }}
            />
            <div className="mt-8">
              <h2 
                className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-6"
                style={{ fontSize: '26px', fontWeight: 'bold' }}
              >
                병원 내 텃밭에서<br />
                직접 채소를 기릅니다.
              </h2>
              <p 
                className="text-[#555555] leading-[180%] tracking-[-0.01em] mb-4"
                style={{ fontSize: '19px' }}
              >
                계절에 맞춰<br />
                씨를 뿌리고, 수확합니다.
              </p>
              <p 
                className="text-[#2E5D46] leading-[160%] tracking-[-0.01em]"
                style={{ fontSize: '20px', fontWeight: '600' }}
              >
                김장도 직접 합니다.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 7. 텃밭 + 식탁 연결 이미지 */}
      <section data-section className="w-full" style={{ marginTop: '100px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col gap-5">
            {/* 수확 */}
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1648090229186-6188eaefcc6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBpY2tlZCUyMHZlZ2V0YWJsZXMlMjBiYXNrZXQlMjBoYXJ2ZXN0fGVufDF8fHx8MTc3MTkyNTkwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="수확한 채소"
                className="w-full h-auto rounded-2xl"
                style={{ aspectRatio: '4/3' }}
              />
            </div>

            {/* 식탁 */}
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1624668430039-0175a0fbf006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBnYXJkZW4lMjBoYXJ2ZXN0JTIwZnJlc2glMjBwcm9kdWNlfGVufDF8fHx8MTc3MTkyNTkwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="신선한 채소"
                className="w-full h-auto rounded-2xl"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>

          <div className="px-7 mt-8">
            <p 
              className="text-[#111111] leading-[180%] tracking-[-0.01em] text-center max-w-[580px] mx-auto"
              style={{ fontSize: '20px', fontWeight: '600' }}
            >
              흙에서 시작해<br />
              식탁으로 이어집니다.
            </p>
            <p 
              className="text-[#555555] leading-[180%] tracking-[-0.01em] text-center mt-4 max-w-[580px] mx-auto"
              style={{ fontSize: '19px' }}
            >
              눈으로 보고<br />
              직접 기른 재료로 만드는 식사.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 8. 차림상 갤러리 3 (김치/반찬) */}
      <section data-section className="w-full" style={{ marginTop: '100px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col gap-5">
            {/* 김치 */}
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560100927-c32f29063ade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW1jaGklMjBmZXJtZW50ZWQlMjB2ZWdldGFibGVzJTIwa29yZWFuJTIwZm9vZHxlbnwxfHx8fDE3NzE5MjU5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="정성으로 담근 김치"
                className="w-full h-auto rounded-2xl"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>

          <div className="px-7 mt-8">
            <p 
              className="text-[#111111] leading-[180%] tracking-[-0.01em] text-center max-w-[580px] mx-auto"
              style={{ fontSize: '20px', fontWeight: '600' }}
            >
              정성으로 담근 김치.<br />
              제철 채소로 만든 반찬.
            </p>
            <p 
              className="text-[#2E5D46] leading-[170%] tracking-[-0.01em] text-center mt-4 max-w-[580px] mx-auto"
              style={{ fontSize: '20px', fontWeight: '600' }}
            >
              그래서 안심할 수 있습니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 9. 심리적 안정 메시지 */}
      <section 
        data-section 
        className="w-full bg-white px-7" 
        style={{ marginTop: '120px', paddingTop: '60px', paddingBottom: '60px' }}
      >
        <motion.div
          className="max-w-[600px] mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 
            className="text-[#111111] leading-[170%] tracking-[-0.01em] mb-7"
            style={{ fontSize: '24px', fontWeight: 'bold' }}
          >
            "먹을 수 있다"는 사실은<br />
            회복의 자신감입니다.
          </h2>
          <p 
            className="text-[#2E5D46] leading-[180%] tracking-[-0.01em]"
            style={{ fontSize: '26px', fontWeight: 'bold' }}
          >
            오늘도 한 끼를<br />
            편안하게 드셨다면<br />
            몸은 그만큼 앞으로 나아갑니다.
          </p>
        </motion.div>
      </section>

      {/* 10. 마지막 클로징 */}
      <section 
        data-section 
        className="w-full bg-white px-7" 
        style={{ marginTop: '80px', marginBottom: '100px', paddingTop: '40px', paddingBottom: '40px' }}
      >
        <motion.div
          className="max-w-[580px] mx-auto text-center"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 
            className="text-[#111111] leading-[170%] tracking-[-0.01em] mb-5"
            style={{ fontSize: '28px', fontWeight: 'bold' }}
          >
            먹는 것이<br />
            몸을 다시 세웁니다.
          </h2>
          <p 
            className="text-[#2E5D46] leading-[170%] tracking-[-0.01em]"
            style={{ fontSize: '24px', fontWeight: 'bold' }}
          >
            잘 먹는 하루가<br />
            회복을 만듭니다.
          </p>
        </motion.div>
      </section>

      {/* 공통 CTA 섹션 */}
      <CTASection />
    </div>
  );
}