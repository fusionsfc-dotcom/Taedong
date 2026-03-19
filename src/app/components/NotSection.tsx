import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function NotSection() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('not-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.7 && rect.bottom > 0;
        setIsInView(inView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="not-section"
      className="min-h-screen bg-white px-7 py-20"
      style={{ paddingTop: '140px', paddingBottom: '140px' }}
    >
      <div className="max-w-[640px] mx-auto">
        {/* 첫 번째 블록 */}
        <motion.p
          className="text-[#111111] leading-[170%] tracking-[-0.01em] mb-2"
          style={{ fontSize: '24px' }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, delay: 0, ease: [0.4, 0, 0.2, 1] }}
        >
          면역을 관리합니다.
        </motion.p>

        <motion.p
          className="text-[#111111] leading-[170%] tracking-[-0.01em] mb-2"
          style={{ fontSize: '24px' }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          무너진 체력을 다시 세웁니다.
        </motion.p>

        <motion.p
          className="text-[#111111] leading-[170%] tracking-[-0.01em] mb-2"
          style={{ fontSize: '24px' }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          먹는 것을 바로 잡습니다.
        </motion.p>

        <motion.p
          className="text-[#111111] leading-[170%] tracking-[-0.01em]"
          style={{ fontSize: '24px' }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          몸의 리듬을 되찾습니다.
        </motion.p>

        {/* 여백 (의도적 침묵 구간) */}
        <div style={{ height: '80px' }}></div>

        {/* 두 번째 블록 */}
        <motion.p
          className="text-[#111111] leading-[170%] tracking-[-0.01em] mb-2"
          style={{ fontSize: '24px' }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          도심에서 벗어나<br />
          자연 속에서
        </motion.p>

        <div style={{ height: '40px' }}></div>

        <motion.p
          className="text-[#111111] leading-[170%] tracking-[-0.01em]"
          style={{ fontSize: '24px' }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, delay: 1.0, ease: [0.4, 0, 0.2, 1] }}
        >
          <span style={{ fontWeight: '600' }}>다시</span> 걷고,<br />
          <span style={{ fontWeight: '600' }}>다시</span> 먹고,<br />
          <span style={{ fontWeight: '600' }}>다시</span> 잠듭니다.
        </motion.p>

        {/* 전환 구간 */}
        <motion.p
          className="text-[#111111] text-center leading-[170%] tracking-[-0.01em]"
          style={{ fontSize: '24px', margin: '60px 0' }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
        >
          그리고
        </motion.p>

        {/* 마지막 클라이맥스 */}
        <motion.div
          className="text-[#111111] leading-[170%] tracking-[-0.01em]"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.98 }}
          transition={{ duration: 0.9, delay: 1.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <p style={{ fontSize: '24px', marginBottom: '20px' }}>
            암 이후의 인생 2막은
          </p>
          <p style={{ fontSize: '32px', fontWeight: '600', lineHeight: '170%' }}>
            버티는 시간이 아니라
          </p>
          <p style={{ fontSize: '32px', fontWeight: '600', lineHeight: '170%' }}>
            더 건강하고, 더 단단하고,<br />
            더 행복한 시간이어야 합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
