import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Home } from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useSEO } from '../hooks/useSEO';
import heroImage from 'figma:asset/35cf1d72329f19af95fc3cd29863112d9c086529.png';
import consultationImage from 'figma:asset/f6e350b70ff06c3f363254a4575cbdad14df1486.png';
import educationImage from 'figma:asset/db3f53ece0ab2692c10480c0757e80915a558acf.png';
import thermalTherapyImage from 'figma:asset/48ec84fd20d04a4c6c75f964ec04e932f4e4d933.png';
import physicalTherapyImage from 'figma:asset/e0c49c8a8b7d60bda2ffa73659ae418f16a652da.png';
import nursingStationImage from 'figma:asset/ee19cda0cd4dcfa2c32c0b8b4ed4d647e9c4cfe6.png';
import outdoorExerciseImage from 'figma:asset/3832ad13e7cfe24363ea66b9a31aaa004d95015b.png';
import relaxationImage from 'figma:asset/34fd600ddc05a670c299d40d2ba07149548be1bf.png';
import educationProgramImage from 'figma:asset/eff3a23f613b98b22e8f8709fe2489227645264a.png';
import patientCareImage from 'figma:asset/e1d70aa32f68afe0af7b00d11e9f3f6df56a2736.png';

export default function MedicalDetailPage() {
  // SEO 설정
  useSEO({
    title: '치료재활 프로그램 - 춘천태동요양병원',
    description: '온열치료, 물리치료, 재활운동, 교육프로그램 등 암환자 맞춤형 치료재활 프로그램을 제공합니다.',
    canonical: 'https://taedonghp.co.kr/medical',
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
      {/* 1. HERO - 통합 케어 선언 */}
      <section 
        data-section 
        className="relative w-full overflow-hidden"
        style={{ height: '100vh', width: '100vw' }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <ImageWithFallback
            src={heroImage}
            alt="자연과 의료의 통합"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-7 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeInOut" }}
        >
          <h1 
            className="text-white leading-[150%] tracking-[-0.01em] mb-6"
            style={{ fontSize: '30px', fontWeight: 'bold' }}
          >
            통합 케어로 완성되는<br />
            치유의 과정
          </h1>
          <p 
            className="text-white leading-[160%] tracking-[-0.01em]"
            style={{ fontSize: '20px', fontWeight: '500' }}
          >
            의학적 치료, 영양 관리, 심리적 안정.<br />
            세 가지가 균형을 이룰 때<br />
            회복은 완성됩니다.
          </p>
        </motion.div>
      </section>

      {/* 2. 몸과 마음의 통합 케어 */}
      <section data-section className="w-full px-7" style={{ marginTop: '100px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="max-w-[640px] mx-auto">
            <ImageWithFallback
              src={consultationImage}
              alt="의료진 상담"
              className="w-full h-auto rounded-2xl"
              style={{ aspectRatio: '16/10' }}
            />
            <div className="mt-8">
              <h2 
                className="text-[#111111] leading-[150%] tracking-[-0.01em] mb-5"
                style={{ fontSize: '26px', fontWeight: 'bold' }}
              >
                몸과 마음을 함께 돌봅니다.
              </h2>
              <p 
                className="text-[#555555] leading-[170%] tracking-[-0.01em]"
                style={{ fontSize: '18px' }}
              >
                양·한방 협진 시스템 아래<br />
                통증, 피로, 수면, 소화 상태를<br />
                종합적으로 관리합니다.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. 첨단 의료 장비 & 재활 시스템 */}
      <section data-section className="w-full px-7" style={{ marginTop: '100px' }}>
        <motion.div
          className="max-w-[640px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* 고주파 온열치료 */}
          <div className="mb-12">
            <ImageWithFallback
              src={thermalTherapyImage}
              alt="고주파 온열치료 장비"
              className="w-full h-auto rounded-2xl"
              style={{ aspectRatio: '16/10' }}
            />
            <div className="mt-6">
              <h3 
                className="text-[#2E5D46] leading-[150%] tracking-[-0.01em] mb-2"
                style={{ fontSize: '22px', fontWeight: '600' }}
              >
                고주파온열치료
              </h3>
              <p 
                className="text-[#555555] leading-[170%] tracking-[-0.01em]"
                style={{ fontSize: '18px' }}
              >
                체내 깊숙이 열을 전달해 암세포를 선택적으로 공격하고, 면역력 강화와 혈액순환 개선에 도움을 주는 비침습적 치료법입니다.
              </p>
              <p 
                className="text-[#555555] leading-[170%] tracking-[-0.01em] mt-4"
                style={{ fontSize: '18px' }}
              >
                특히, 항암치료 중 병행치료 할 경우 항암치료의 효율성을 높인다는 논문들이 발표되고 있습니다.
              </p>
            </div>
          </div>

          {/* 물리치료 및 재활 */}
          <div>
            <ImageWithFallback
              src={physicalTherapyImage}
              alt="물리치료 재활"
              className="w-full h-auto rounded-2xl"
              style={{ aspectRatio: '16/10' }}
            />
            <div className="mt-6">
              <h3 
                className="text-[#2E5D46] leading-[150%] tracking-[-0.01em] mb-2"
                style={{ fontSize: '22px', fontWeight: '600' }}
              >
                물리치료와 재활 프로그램
              </h3>
              <p 
                className="text-[#555555] leading-[170%] tracking-[-0.01em]"
                style={{ fontSize: '18px' }}
              >
                약해진 근력을 다시 세웁니다.
              </p>
              <p 
                className="text-[#111111] leading-[170%] tracking-[-0.01em] mt-3"
                style={{ fontSize: '18px', fontWeight: '600' }}
              >
                몸을 다시 움직이는 치료.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. 과학적인 면역 강화 프로그램 */}
      <section data-section className="w-full px-7" style={{ marginTop: '100px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="max-w-[640px] mx-auto">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1606619353143-8e11b4bdf76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW11bmUlMjB0aGVyYXB5JTIwbWVkaWNhbCUyMGluamVjdGlvbiUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzE5MjU0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="면역 강화 치료"
              className="w-full h-auto rounded-2xl"
              style={{ aspectRatio: '16/10' }}
            />
            <div className="mt-8">
              <h2 
                className="text-[#111111] leading-[150%] tracking-[-0.01em] mb-5"
                style={{ fontSize: '26px', fontWeight: 'bold' }}
              >
                면역은 감각이 아니라<br />
                관리입니다.
              </h2>
              <p 
                className="text-[#555555] leading-[170%] tracking-[-0.01em] mb-4"
                style={{ fontSize: '18px' }}
              >
                면역세포 활성화 주사요법,<br />
                고농도 비타민 요법 등<br />
                개인 상태에 맞춘 면역 관리.
              </p>
              <p 
                className="text-[#111111] leading-[170%] tracking-[-0.01em]"
                style={{ fontSize: '18px', fontWeight: '600' }}
              >
                삶의 질을 높이는 치료 시너지.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. 24시간 밀착 간호 시스템 */}
      <section data-section className="w-full px-7" style={{ marginTop: '100px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="max-w-[640px] mx-auto">
            <ImageWithFallback
              src={nursingStationImage}
              alt="간호 스테이션"
              className="w-full h-auto rounded-2xl"
              style={{ aspectRatio: '16/10' }}
            />
            <div className="mt-8">
              <h2 
                className="text-[#111111] leading-[150%] tracking-[-0.01em] mb-5"
                style={{ fontSize: '26px', fontWeight: 'bold' }}
              >
                자연 속이지만<br />
                의료는 빈틈이 없습니다.
              </h2>
              <p 
                className="text-[#555555] leading-[170%] tracking-[-0.01em] mb-4"
                style={{ fontSize: '18px' }}
              >
                숙련된 의료진과 간호팀이<br />
                24시간 상주합니다.
              </p>
              <p 
                className="text-[#111111] leading-[170%] tracking-[-0.01em]"
                style={{ fontSize: '18px', fontWeight: '600' }}
              >
                실시간 상태 확인과<br />
                즉각 대응 시스템.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. 치유의 연장 – 투병 특강 & 생활 재활 - 카드 슬라이더 */}
      <section data-section className="w-full" style={{ marginTop: '100px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="max-w-[640px] mx-auto px-7 mb-8">
            <h2 
              className="text-[#111111] leading-[150%] tracking-[-0.01em] mb-5"
              style={{ fontSize: '26px', fontWeight: 'bold' }}
            >
              회복은 병실 안에서만<br />
              이루어지지 않습니다.
            </h2>
            <p 
              className="text-[#555555] leading-[170%] tracking-[-0.01em] mb-4"
              style={{ fontSize: '18px' }}
            >
              암 투병 특강,<br />
              생활 재활 프로그램을 통해<br />
              일상 복귀를 준비합니다.
            </p>
            <p 
              className="text-[#111111] leading-[170%] tracking-[-0.01em]"
              style={{ fontSize: '18px', fontWeight: '600' }}
            >
              몸과 삶을 함께 회복합니다.
            </p>
          </div>
          
          {/* 카드 슬라이더 */}
          <div className="overflow-x-auto scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className="flex gap-5 px-7 pb-2" style={{ width: 'max-content' }}>
              {/* 카드 1: 야외 운동 프로그램 */}
              <div className="flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg" style={{ width: '320px' }}>
                <ImageWithFallback
                  src={outdoorExerciseImage}
                  alt="암특강 프로그램"
                  className="w-full h-auto"
                  style={{ aspectRatio: '16/11' }}
                />
                <div className="p-6">
                  <h3 
                    className="text-[#2E5D46] leading-[150%] tracking-[-0.01em] mb-3"
                    style={{ fontSize: '20px', fontWeight: '600' }}
                  >
                    암특강 프로그램
                  </h3>
                  <p 
                    className="text-[#555555] leading-[170%] tracking-[-0.01em]"
                    style={{ fontSize: '16px' }}
                  >
                    최신 암 정보와 치료 경험을 공유해 환자와 가족이 올바른 치료 방향을 찾고 희망을 되찾을 수 있도록 돕습니다.
                  </p>
                </div>
              </div>

              {/* 카드 2: 명상 및 휴식 */}
              <div className="flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg" style={{ width: '320px' }}>
                <ImageWithFallback
                  src={relaxationImage}
                  alt="편백나무 찜질방"
                  className="w-full h-auto"
                  style={{ aspectRatio: '16/11' }}
                />
                <div className="p-6">
                  <h3 
                    className="text-[#2E5D46] leading-[150%] tracking-[-0.01em] mb-3"
                    style={{ fontSize: '20px', fontWeight: '600' }}
                  >
                    편백나무 찜질방
                  </h3>
                  <p 
                    className="text-[#555555] leading-[170%] tracking-[-0.01em]"
                    style={{ fontSize: '16px' }}
                  >
                    천연 피톤치드 향으로 스트레스를 해소하고, 혈액순환 촉진과 피부 미용에 탁월한 효과가 있습니다
                  </p>
                </div>
              </div>

              {/* 카드 3: 한방 교육 프로그램 */}
              <div className="flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg" style={{ width: '320px' }}>
                <ImageWithFallback
                  src={educationProgramImage}
                  alt="생활재활프로그램"
                  className="w-full h-auto"
                  style={{ aspectRatio: '16/11' }}
                />
                <div className="p-6">
                  <h3 
                    className="text-[#2E5D46] leading-[150%] tracking-[-0.01em] mb-3"
                    style={{ fontSize: '20px', fontWeight: '600' }}
                  >
                    생활재활프로그램
                  </h3>
                  <p 
                    className="text-[#555555] leading-[170%] tracking-[-0.01em]"
                    style={{ fontSize: '16px' }}
                  >
                    일상 동작 회복을 목표로 맞춤형 훈련을 제공해 환자 스스로 건강한 독립생활을 영위할 수 있도록 지원합니다
                  </p>
                </div>
              </div>

              {/* 카드 4: 환자 맞춤 케어 */}
              <div className="flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg" style={{ width: '320px' }}>
                <ImageWithFallback
                  src={patientCareImage}
                  alt="환자 멘토링 프로그램"
                  className="w-full h-auto"
                  style={{ aspectRatio: '16/11' }}
                />
                <div className="p-6">
                  <h3 
                    className="text-[#2E5D46] leading-[150%] tracking-[-0.01em] mb-3"
                    style={{ fontSize: '20px', fontWeight: '600' }}
                  >
                    환자 멘토링 프로그램
                  </h3>
                  <p 
                    className="text-[#555555] leading-[170%] tracking-[-0.01em]"
                    style={{ fontSize: '16px' }}
                  >
                    같은 질병을 극복한 선배 환자의 생생한 경험과 공감을 바탕으로 치료 과정의 두려움을 줄이고, 정서적 안정과 치료 의지를 높여 회복의 희망을 함께 만들어 갑니다
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 7. 철학 정리 – 마지막 선언 */}
      <section 
        data-section 
        className="w-full px-7 bg-white" 
        style={{ marginTop: '120px', marginBottom: '100px', paddingTop: '60px', paddingBottom: '60px' }}
      >
        <motion.div
          className="max-w-[580px] mx-auto text-center"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 
            className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-8"
            style={{ fontSize: '26px', fontWeight: 'bold' }}
          >
            춘천태동요양병원은<br />
            치료를 이어가는 병원이 아닙니다.
          </h2>
          <p 
            className="text-[#2E5D46] leading-[160%] tracking-[-0.01em]"
            style={{ fontSize: '28px', fontWeight: 'bold' }}
          >
            치유를 완성하는 병원입니다.
          </p>
          <div className="mt-8 pt-8 border-t border-[#E5E5E5]">
            <p 
              className="text-[#555555] leading-[170%] tracking-[-0.01em]"
              style={{ fontSize: '18px' }}
            >
              의학, 영양, 심리, 자연, 재활, 면역.<br />
              모든 요소가 하나의 흐름으로<br />
              연결됩니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 공통 CTA 섹션 */}
      <CTASection />
    </div>
  );
}