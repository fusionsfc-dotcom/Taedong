import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function RealitySection() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('reality-section');
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

  const sentences = [
    '항암을 마치고 집으로 돌아왔습니다.',
    '그런데 기운이 없습니다.',
    '잠이 오지 않습니다.',
    '재발이 두렵습니다.'
  ];

  return (
    <section 
      id="reality-section"
      className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20"
    >
      <div className="max-w-2xl w-full space-y-12">
        {sentences.map((sentence, index) => (
          <motion.p
            key={index}
            className="text-[#555555] text-center leading-[160%] tracking-[-0.01em]"
            style={{ fontSize: '18px' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          >
            {sentence}
          </motion.p>
        ))}

        <motion.p
          className="text-[#111111] text-center leading-[160%] tracking-[-0.01em] pt-8"
          style={{ fontSize: '28px', fontWeight: '600' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.8,
            delay: sentences.length * 0.2 + 0.3,
            ease: "easeInOut"
          }}
        >
          지금, 어디에서 회복하고 계신가요?
        </motion.p>
      </div>
    </section>
  );
}