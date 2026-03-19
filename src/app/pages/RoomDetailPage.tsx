import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Home } from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useSEO } from '../hooks/useSEO';
import heroImage from 'figma:asset/4183a1a969a5bbe91563ee74ee944285949bb613.png';
import roomImage from 'figma:asset/34e234de8a31b52abcd6829bf1b05b6d31cab4a6.png';
import bathroomImage from 'figma:asset/d4f14a30963b379635a393f46bd5d002d26130d9.png';
import disinfectionImage from 'figma:asset/d108d1249ec41ad5f4f74487e6b29b657518e027.png';
import loungeImage from 'figma:asset/0559af899e98b6b55a0bb78f4ddf151fa6e47d5e.png';
import recreationImage from 'figma:asset/f16bf1c866c4d96b754b3c0a1cad1b281f74ca80.png';
import finalImage from 'figma:asset/de085577584befc0705b880c3a6a10b1b239c5fd.png';

export default function RoomDetailPage() {
  // SEO 설정
  useSEO({
    title: '입원실 안내 - 춘천태동요양병원',
    description: '1-4인실 입원실, 개별 화장실, 소독실, 휴게실 등 편안한 입원 환경을 제공합니다.',
    canonical: 'https://taedonghp.co.kr/rooms',
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
      {/* 1. HERO - 홍천강과 일출 */}
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
            alt="홍천강과 북한강"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>

        <motion.div
          className="absolute left-0 right-0 px-6"
          style={{ bottom: '370px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeInOut" }}
        >
          <h1 
            className="text-white leading-[160%] tracking-[-0.01em]"
            style={{ fontSize: '28px', fontWeight: '600' }}
          >
            홍천강과 북한강이 만나는 곳.<br />
            회복도 여기서 시작됩니다.
          </h1>
        </motion.div>
      </section>

      {/* 2. 온돌 1~3인실 */}
      <section data-section className="w-full" style={{ marginTop: '100px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <ImageWithFallback
            src={roomImage}
            alt="온돌 병실"
            className="w-full h-auto"
            style={{ aspectRatio: '4/3' }}
          />
          <div className="px-7 mt-8">
            <h2 
              className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-6"
              style={{ fontSize: '24px', fontWeight: '600' }}
            >
              홍천강이 보이는 온돌 입원실.
            </h2>
            <p 
              className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-6"
              style={{ fontSize: '20px', fontWeight: '400' }}
            >
              아침이면 강 위로 빛이 올라오고,<br />
              따뜻한 바닥 위에서 하루를 시작합니다.
            </p>
            <p 
              className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-6"
              style={{ fontSize: '20px', fontWeight: '400' }}
            >
              집처럼 편안하지만<br />
              집보다 더 건강하게 관리되는 공간.
            </p>
            <p 
              className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-6"
              style={{ fontSize: '20px', fontWeight: '400' }}
            >
              혼자 머물 수 있지만<br />
              혼자가 아닌 의료진의 돌봄 속에서
            </p>
            <p 
              className="text-[#111111] leading-[160%] tracking-[-0.01em]"
              style={{ fontSize: '20px', fontWeight: '600' }}
            >
              몸의 리듬을 다시 세웁니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 3. 병실 내 화장실 & 싱크대 */}
      <section data-section className="w-full" style={{ marginTop: '100px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <ImageWithFallback
            src={bathroomImage}
            alt="병실 화장실과 싱크대"
            className="w-full h-auto"
            style={{ aspectRatio: '4/3' }}
          />
          <div className="px-7 mt-8">
            <p 
              className="text-[#111111] leading-[160%] tracking-[-0.01em] text-center"
              style={{ fontSize: '20px', fontWeight: '400' }}
            >
              실내 화장실과 싱크대가 갖춰진<br />
              독립된 구조 속에서<br />
              혼자서도 충분히 일상을 이어갈 수 있습니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 4. 친환경 소독 관리 */}
      <section data-section className="w-full" style={{ marginTop: '100px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <ImageWithFallback
            src={disinfectionImage}
            alt="친환경 소독 관리"
            className="w-full h-auto"
            style={{ aspectRatio: '4/3' }}
          />
          <div className="px-7 mt-8 text-center">
            <p 
              className="text-[#111111] leading-[160%] tracking-[-0.01em]"
              style={{ fontSize: '20px', fontWeight: '400' }}
            >
              눈에 보이지 않는 부분까지<br />
              정기적으로 관리합니다.<br />
              머무는 동안 안심하셔도 됩니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 5. 라운지 카페 & 포켓볼 */}
      <section data-section className="w-full" style={{ marginTop: '100px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <ImageWithFallback
            src={loungeImage}
            alt="라운지 카페"
            className="w-full h-auto"
            style={{ aspectRatio: '4/3' }}
          />
          <div className="px-7 mt-8">
            <h2 
              className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-3"
              style={{ fontSize: '24px', fontWeight: '600' }}
            >
              조용히 혼자 쉬고,<br />
              따뜻하게 함께 어울립니다.
            </h2>
            <p 
              className="text-[#111111] leading-[160%] tracking-[-0.01em]"
              style={{ fontSize: '20px', fontWeight: '600' }}
            >
              회복은 혼자가 아니라<br />
              함께하는 시간입니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 6. 찜질방 & 마사지 기기 */}
      <section data-section className="w-full" style={{ marginTop: '100px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <ImageWithFallback
            src={recreationImage}
            alt="찜질방과 마사지"
            className="w-full h-auto"
            style={{ aspectRatio: '4/3' }}
          />
          <div className="px-7 mt-8">
            <p 
              className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-6"
              style={{ fontSize: '22px', fontWeight: '500' }}
            >
              홍천강이 내려다보이는 테라스.<br />
              햇빛 아래 앉아<br />
              그저 숨을 고르는 시간.
            </p>
            <p 
              className="text-[#111111] leading-[160%] tracking-[-0.01em]"
              style={{ fontSize: '22px', fontWeight: '600' }}
            >
              회복은 이렇게<br />
              천천히 이루어집니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 7. 마지막 장면 - 밤의 병실 */}
      <section 
        data-section 
        className="relative w-full overflow-hidden"
        style={{ 
          height: '100vh', 
          marginTop: '120px',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)'
        }}
      >
        <motion.div
          className="absolute inset-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <ImageWithFallback
            src={finalImage}
            alt="병원 전경"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>

        <motion.div 
          className="absolute bottom-16 left-0 right-0 px-7 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
        >
          <h2 
            className="text-white leading-[160%] tracking-[-0.01em] mb-6"
            style={{ fontSize: '24px', fontWeight: '600' }}
          >
            조용히 잠들고<br />
            자연의 빛으로 눈을 뜹니다.
          </h2>
          <p 
            className="text-white leading-[160%] tracking-[-0.01em]"
            style={{ fontSize: '28px', fontWeight: '600' }}
          >
            집보다 편안하고,<br />
            집보다 건강한 공간.
          </p>
        </motion.div>
      </section>

      {/* 공통 CTA 섹션 */}
      <CTASection />
    </div>
  );
}