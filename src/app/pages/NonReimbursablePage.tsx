import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { CTASection } from '../components/CTASection';
import { useSEO } from '../hooks/useSEO';

export default function NonReimbursablePage() {
  // SEO 설정
  useSEO({
    title: '비급여 진료 안내 - 춘천태동요양병원',
    description: '암환자를 위한 비급여 진료 항목 안내. 입원료, 식대, 간병비 등 투명한 비용 정보 제공.',
    canonical: 'https://taedonghp.co.kr/non-reimbursable',
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

  return (
    <div className="w-full bg-[#F7F6F3]" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
      {/* 1. Hero 영역 */}
      <section 
        data-section 
        className="w-full px-7 pt-20 pb-12 text-center"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h1 
            className="text-[#111111] leading-[150%] tracking-[-0.01em] mb-6"
            style={{ fontSize: '28px', fontWeight: 'bold' }}
          >
            비급여 안내
          </h1>
          <p 
            className="text-[#555555] leading-[170%] tracking-[-0.01em]"
            style={{ fontSize: '18px' }}
          >
            치료와 회복에 필요한<br />
            선택 진료 항목과 비용을<br />
            투명하게 안내드립니다.
          </p>
          <p 
            className="text-[#2E5D46] leading-[170%] tracking-[-0.01em] mt-6"
            style={{ fontSize: '18px', fontWeight: '600' }}
          >
            춘천태동요양병원은<br />
            환자 상태에 맞는 치료만 권해드립니다.
          </p>
        </motion.div>
      </section>

      {/* 2. 안내 문구 카드 */}
      <section data-section className="w-full px-7 pb-8">
        <motion.div
          className="bg-white rounded-[20px] p-8 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <p 
            className="text-[#111111] leading-[180%] tracking-[-0.01em] mb-4"
            style={{ fontSize: '18px' }}
          >
            비급여 항목은<br />
            환자 상태와 치료 계획에 따라<br />
            선택적으로 진행됩니다.
          </p>
          <p 
            className="text-[#555555] leading-[180%] tracking-[-0.01em] mb-4"
            style={{ fontSize: '18px' }}
          >
            상담 후 진행 여부를 결정하실 수 있습니다.
          </p>
          <p 
            className="text-[#2E5D46] leading-[180%] tracking-[-0.01em]"
            style={{ fontSize: '18px', fontWeight: '600' }}
          >
            비용은 치료 전 충분히 안내드립니다.
          </p>
        </motion.div>
      </section>

      {/* 3. 병실료 안내 */}
      <section data-section className="w-full px-7 py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h2 
            className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-6"
            style={{ fontSize: '22px', fontWeight: 'bold' }}
          >
            병실 비용 안내
          </h2>
          <div className="bg-white rounded-[20px] p-7 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <span 
                className="text-[#111111] tracking-[-0.01em]"
                style={{ fontSize: '18px' }}
              >
                1인실
              </span>
              <span 
                className="text-[#111111] tracking-[-0.01em]"
                style={{ fontSize: '18px', fontWeight: 'bold' }}
              >
                150,000원 / 1일
              </span>
            </div>
            <p 
              className="text-[#555555] leading-[170%] tracking-[-0.01em] pt-4 border-t border-[#E8E6E0]"
              style={{ fontSize: '18px' }}
            >
              홍천강이 보이는 온돌 1인실은<br />
              집처럼 편안하게 회복하실 수 있는 공간입니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 4. 면역·영양 주사 프로그램 */}
      <section data-section className="w-full px-7 py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h2 
            className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-6"
            style={{ fontSize: '22px', fontWeight: 'bold' }}
          >
            면역 · 영양 주사 프로그램
          </h2>
          <div className="bg-white rounded-[20px] p-7 shadow-sm space-y-4">
            {[
              { name: '오메가벤주', price: '50,000원' },
              { name: '대한엘알기닌염산염주10%', price: '60,000원' },
              { name: '셀레뉴민주', price: '50,000원' },
              { name: '징코온주', price: '50,000원' },
              { name: '닥터라민주 / 새로나민주', price: '50,000원' },
              { name: '디펩티벤주', price: '60,000원' },
              { name: '콤비플렉스엠시티페리주375ml', price: '100,000원' },
              { name: '멀티트레이스', price: '100,000원' },
              { name: '마이어스칵테일주사', price: '100,000원' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between pb-4 border-b border-[#E8E6E0] last:border-b-0 last:pb-0"
              >
                <span 
                  className="text-[#111111] tracking-[-0.01em] flex-1 pr-4"
                  style={{ fontSize: '18px' }}
                >
                  {item.name}
                </span>
                <span 
                  className="text-[#111111] tracking-[-0.01em] text-right whitespace-nowrap"
                  style={{ fontSize: '18px', fontWeight: 'bold' }}
                >
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. 면역 치료 주사 */}
      <section data-section className="w-full px-7 py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h2 
            className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-6"
            style={{ fontSize: '22px', fontWeight: 'bold' }}
          >
            면역 치료 주사
          </h2>
          
          {/* 압노바 A.M */}
          <div className="bg-white rounded-[20px] p-7 shadow-sm mb-5">
            <h3 
              className="text-[#2E5D46] tracking-[-0.01em] mb-5"
              style={{ fontSize: '18px', fontWeight: 'bold' }}
            >
              압노바(A.M)
            </h3>
            <div className="space-y-3">
              {[
                { dose: '0.02', price: '30,000원' },
                { dose: '0.2', price: '35,000원' },
                { dose: '2', price: '40,000원' },
                { dose: '20', price: '45,000원' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span 
                    className="text-[#555555] tracking-[-0.01em]"
                    style={{ fontSize: '18px' }}
                  >
                    {item.dose}
                  </span>
                  <span 
                    className="text-[#111111] tracking-[-0.01em]"
                    style={{ fontSize: '18px', fontWeight: 'bold' }}
                  >
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 압노바 F,Q */}
          <div className="bg-white rounded-[20px] p-7 shadow-sm mb-5">
            <h3 
              className="text-[#2E5D46] tracking-[-0.01em] mb-5"
              style={{ fontSize: '18px', fontWeight: 'bold' }}
            >
              압노바(F,Q)
            </h3>
            <div className="space-y-3">
              {[
                { dose: '0.02', price: '35,000원' },
                { dose: '0.2', price: '40,000원' },
                { dose: '2', price: '45,000원' },
                { dose: '20', price: '50,000원' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span 
                    className="text-[#555555] tracking-[-0.01em]"
                    style={{ fontSize: '18px' }}
                  >
                    {item.dose}
                  </span>
                  <span 
                    className="text-[#111111] tracking-[-0.01em]"
                    style={{ fontSize: '18px', fontWeight: 'bold' }}
                  >
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 이스카도큐 */}
          <div className="bg-white rounded-[20px] p-7 shadow-sm">
            <h3 
              className="text-[#2E5D46] tracking-[-0.01em] mb-5"
              style={{ fontSize: '18px', fontWeight: 'bold' }}
            >
              이스카도큐
            </h3>
            <div className="space-y-3">
              {[
                { dose: '0.01mg', price: '50,000원' },
                { dose: '0.1mg', price: '60,000원' },
                { dose: '1mg', price: '70,000원' },
                { dose: '10mg', price: '80,000원' },
                { dose: '20mg', price: '90,000원' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span 
                    className="text-[#555555] tracking-[-0.01em]"
                    style={{ fontSize: '18px' }}
                  >
                    {item.dose}
                  </span>
                  <span 
                    className="text-[#111111] tracking-[-0.01em]"
                    style={{ fontSize: '18px', fontWeight: 'bold' }}
                  >
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. 비타민 주사 프로그램 */}
      <section data-section className="w-full px-7 py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h2 
            className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-6"
            style={{ fontSize: '22px', fontWeight: 'bold' }}
          >
            비타민 주사 프로그램
          </h2>
          <div className="bg-white rounded-[20px] p-7 shadow-sm space-y-3">
            {[
              { dose: '10g', price: '40,000원' },
              { dose: '20g', price: '45,000원' },
              { dose: '30g', price: '50,000원' },
              { dose: '40g', price: '55,000원' },
              { dose: '50g', price: '60,000원' },
              { dose: '60g', price: '65,000원' },
              { dose: '70g', price: '70,000원' },
              { dose: '80g', price: '75,000원' },
              { dose: '90g', price: '80,000원' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between pb-3 border-b border-[#E8E6E0] last:border-b-0 last:pb-0"
              >
                <span 
                  className="text-[#111111] tracking-[-0.01em]"
                  style={{ fontSize: '18px' }}
                >
                  메리트C {item.dose}
                </span>
                <span 
                  className="text-[#111111] tracking-[-0.01em]"
                  style={{ fontSize: '18px', fontWeight: 'bold' }}
                >
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 7. 기타 주사 프로그램 */}
      <section data-section className="w-full px-7 py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h2 
            className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-6"
            style={{ fontSize: '22px', fontWeight: 'bold' }}
          >
            기타 주사 프로그램
          </h2>
          <div className="bg-white rounded-[20px] p-7 shadow-sm space-y-4">
            {[
              { name: '자닥신주', price: '350,000원' },
              { name: '싸이알파주', price: '250,000원' },
              { name: '이뮤코텔주7mg', price: '350,000원' },
              { name: '바이온주', price: '60,000원' },
              { name: '바이온주', price: '120,000원' },
              { name: '에치메드티옥트산25mg', price: '50,000원' },
              { name: '아세트아미노펜주', price: '20,000원' },
              { name: '염화마그네슘주', price: '10,000원' },
              { name: '헤파린나트륨주사', price: '20,000원' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between pb-4 border-b border-[#E8E6E0] last:border-b-0 last:pb-0"
              >
                <span 
                  className="text-[#111111] tracking-[-0.01em] flex-1 pr-4"
                  style={{ fontSize: '18px' }}
                >
                  {item.name}
                </span>
                <span 
                  className="text-[#111111] tracking-[-0.01em] text-right whitespace-nowrap"
                  style={{ fontSize: '18px', fontWeight: 'bold' }}
                >
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 8. 내복약 및 보조요법 */}
      <section data-section className="w-full px-7 py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h2 
            className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-6"
            style={{ fontSize: '22px', fontWeight: 'bold' }}
          >
            내복약 및 보조요법
          </h2>
          <div className="bg-white rounded-[20px] p-7 shadow-sm space-y-4">
            {[
              { name: '한신메시마-F액20ml', price: '15,000원' },
              { name: '한신메시마-F액20ml(90포)', price: '1,350,000원' },
              { name: '알기닉액20ml', price: '10,000원' },
              { name: '알기닉액20ml(14포)', price: '140,000원' },
              { name: '셀레나제100마이크로그램퍼오랄액', price: '120,000원' },
              { name: '글루타틴정100T', price: '220,000원' },
              { name: '셀레나제티퍼오랄액', price: '250,000원' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between pb-4 border-b border-[#E8E6E0] last:border-b-0 last:pb-0"
              >
                <span 
                  className="text-[#111111] tracking-[-0.01em] flex-1 pr-4"
                  style={{ fontSize: '18px' }}
                >
                  {item.name}
                </span>
                <span 
                  className="text-[#111111] tracking-[-0.01em] text-right whitespace-nowrap"
                  style={{ fontSize: '18px', fontWeight: 'bold' }}
                >
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 9. 재활 치료 프로그램 */}
      <section data-section className="w-full px-7 py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h2 
            className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-6"
            style={{ fontSize: '22px', fontWeight: 'bold' }}
          >
            재활 치료 프로그램
          </h2>
          <div className="bg-white rounded-[20px] p-7 shadow-sm space-y-4">
            {[
              { name: 'Pain Scrambler', price: '150,000원' },
              { name: '도수치료 (1일당)', price: '150,000원' },
              { name: '고주파 온열치료', price: '350,000원' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between pb-4 border-b border-[#E8E6E0] last:border-b-0 last:pb-0"
              >
                <span 
                  className="text-[#111111] tracking-[-0.01em]"
                  style={{ fontSize: '18px' }}
                >
                  {item.name}
                </span>
                <span 
                  className="text-[#111111] tracking-[-0.01em]"
                  style={{ fontSize: '18px', fontWeight: 'bold' }}
                >
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 10. 증명서 발급 비용 */}
      <section data-section className="w-full px-7 py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h2 
            className="text-[#111111] leading-[160%] tracking-[-0.01em] mb-6"
            style={{ fontSize: '22px', fontWeight: 'bold' }}
          >
            증명서 발급 비용
          </h2>
          <div className="bg-white rounded-[20px] p-7 shadow-sm space-y-4">
            {[
              { name: '의무기록복사 6매 이상', price: '100원' },
              { name: '의무기록복사 1~5매', price: '1,000원' },
              { name: '진료확인서', price: '3,000원' },
              { name: '입퇴원확인서', price: '3,000원' },
              { name: '일반진단서', price: '10,000원' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between pb-4 border-b border-[#E8E6E0] last:border-b-0 last:pb-0"
              >
                <span 
                  className="text-[#111111] tracking-[-0.01em]"
                  style={{ fontSize: '18px' }}
                >
                  {item.name}
                </span>
                <span 
                  className="text-[#111111] tracking-[-0.01em]"
                  style={{ fontSize: '18px', fontWeight: 'bold' }}
                >
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 11. 하단 안내문 */}
      <section data-section className="w-full px-7 pt-8 pb-16 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <p 
            className="text-[#888888] leading-[170%] tracking-[-0.01em]"
            style={{ fontSize: '16px' }}
          >
            비급여 항목과 비용은 변동될 수 있습니다.<br />
            정확한 비용은 상담 시 안내드립니다.
          </p>
        </motion.div>
      </section>

      {/* 공통 CTA 섹션 */}
      <CTASection />
    </div>
  );
}