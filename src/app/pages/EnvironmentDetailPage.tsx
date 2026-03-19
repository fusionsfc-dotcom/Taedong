import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Home } from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useSEO } from '../hooks/useSEO';
import heroImage from 'figma:asset/de085577584befc0705b880c3a6a10b1b239c5fd.png';
import kayakImage from 'figma:asset/3c1fb678279020752aaedca707b526ad6401c68b.png';
import riverImage from 'figma:asset/b8c085515302c38289639798812f351a4d19dbdc.png';
import forestPathImage from 'figma:asset/8f5c0b2ada3a6df4acbc5d2619faca5eaa5098ae.png';
import yellowLeafRoadImage from 'figma:asset/e882b84f5e4df95eec097fec5d30b57879114a1c.png';
import lakeViewImage from 'figma:asset/6c816032ee166fa906a86e235a18a07eea7651eb.png';

export default function EnvironmentDetailPage() {
  // SEO 설정
  useSEO({
    title: '자연환경 - 춘천태동요양병원',
    description: '홍천강과 북한강이 만나는 자연 속에서 치유하는 환경. 산책로, 강변, 숲길이 있는 요양병원.',
    canonical: 'https://taedonghp.co.kr/environment',
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
      {/* 1. HERO - 홍천강과 북한강이 만나는 장면 */}
      <section 
        data-section 
        className="relative w-full overflow-hidden"
        style={{ 
          height: '100vh',
          margin: 0,
          padding: 0,
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)'
        }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <ImageWithFallback
            src={heroImage}
            alt="홍천강과 북한강의 합류"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60"></div>
        </motion.div>

        <motion.div
          className="absolute left-0 right-0 px-7"
          style={{ bottom: '370px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeInOut" }}
        >
          <h1 
            className="text-white leading-[160%] tracking-[-0.01em]"
            style={{ 
              fontSize: '28px', 
              fontWeight: '600',
              textShadow: '0 2px 8px rgba(0,0,0,0.3)'
            }}
          >
            홍천강과 북한강이 만나는 곳.<br />
            회복도 여기서 시작됩니다.
          </h1>
        </motion.div>
      </section>

      {/* 2. 수상레저 관광지 – 살아있는 공간 */}
      <section data-section className="w-full" style={{ marginTop: '100px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <ImageWithFallback
            src={kayakImage}
            alt="수상레저 카약 활동"
            className="w-full h-auto"
            style={{ aspectRatio: '4/3' }}
          />
          <div className="px-7 mt-8">
            <h2 
              className="text-[#111111] leading-[160%] tracking-[-0.01em]"
              style={{ fontSize: '24px', fontWeight: '600' }}
            >
              조용하기만 한 곳이 아닙니다.<br />
              자연은 살아 있고, 움직입니다.
            </h2>
            <p 
              className="text-[#111111] leading-[160%] tracking-[-0.01em] mt-3"
              style={{ fontSize: '22px', fontWeight: '500' }}
            >
              몸도 다시 움직이기 시작합니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 3. 황토길 – 맨발 걷기 */}
      <section data-section className="w-full" style={{ marginTop: '100px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <ImageWithFallback
            src={yellowLeafRoadImage}
            alt="황토길 맨발 걷기"
            className="w-full h-auto"
            style={{ aspectRatio: '4/3' }}
          />
          <div className="px-7 mt-8">
            <h2 
              className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-4"
              style={{ fontSize: '24px', fontWeight: '600' }}
            >
              차가 다니지 않는 길.<br />
              황토를 맨발로 걷습니다.
            </h2>
            <p 
              className="text-[#111111] leading-[160%] tracking-[-0.01em]"
              style={{ fontSize: '22px' }}
            >
              걷는 것은<br />
              <span style={{ fontWeight: '600' }}>가장 안전한 재활입니다.</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* 4. 소나무 숲길 – 피톤치드 */}
      <section data-section className="w-full" style={{ marginTop: '100px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <ImageWithFallback
            src={forestPathImage}
            alt="소나무 숲길"
            className="w-full h-auto"
            style={{ aspectRatio: '4/3' }}
          />
          <div className="px-7 mt-8">
            <h2 
              className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-4"
              style={{ fontSize: '24px', fontWeight: '600' }}
            >
              피톤치드가 가득한 숲.<br />
              천천히 걷고,<br />
              천천히 숨을 쉽니다.
            </h2>
            <p 
              className="text-[#111111] leading-[160%] tracking-[-0.01em]"
              style={{ fontSize: '22px', fontWeight: '500' }}
            >
              호흡이 깊어질수록<br />
              몸은 안정됩니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 5. 차가 없는 길 – 슬로우조깅 */}
      <section data-section className="w-full" style={{ marginTop: '100px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <ImageWithFallback
            src={lakeViewImage}
            alt="한적한 호수 전망"
            className="w-full h-auto"
            style={{ aspectRatio: '4/3' }}
          />
          <div className="px-7 mt-8">
            <h2 
              className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-4"
              style={{ fontSize: '24px', fontWeight: '600' }}
            >
              도심과 멀어질수록<br />
              몸은 편안해집니다.
            </h2>
            <p 
              className="text-[#111111] leading-[160%] tracking-[-0.01em]"
              style={{ fontSize: '22px', fontWeight: '500' }}
            >
              천천히 걷고,<br />
              천천히 조깅합니다.
            </p>
            <p 
              className="text-[#111111] leading-[160%] tracking-[-0.01em] mt-4"
              style={{ fontSize: '22px', fontWeight: '500' }}
            >
              무리하지 않는 움직임이<br />
              회복을 만듭니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 6. 철학 정리 – 마지막 장면 */}
      <section data-section className="w-full" style={{ marginTop: '120px', marginBottom: '100px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <ImageWithFallback
            src={riverImage}
            alt="홍천강 자연 풍경"
            className="w-full h-auto"
            style={{ aspectRatio: '4/3' }}
          />
          <motion.div 
            className="px-7 mt-12 text-center"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h2 
              className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-6"
              style={{ fontSize: '24px', fontWeight: '600' }}
            >
              이곳은<br />
              단순히 쉬는 병원이 아닙니다.
            </h2>
            <p 
              className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-6"
              style={{ fontSize: '24px', fontWeight: '600' }}
            >
              요양과 레저,<br />
              산림치유가 함께 이루어지는 곳.
            </p>
            <p 
              className="text-[#111111] leading-[160%] tracking-[-0.01em]"
              style={{ fontSize: '28px', fontWeight: '600' }}
            >
              자연 속에서<br />
              다시 움직이고,<br />
              다시 살아가는 병원입니다.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 공통 CTA 섹션 */}
      <CTASection />
    </div>
  );
}