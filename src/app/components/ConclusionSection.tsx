import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import backgroundImage from 'figma:asset/e8ef6f3ad0d958756738df523f14fb168b79a091.png';

export function ConclusionSection() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('conclusion-section');
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
      id="conclusion-section"
      className="min-h-screen bg-[#111111] relative overflow-hidden flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={backgroundImage}
          alt="평화로운 숲"
          className="w-full h-full object-cover opacity-50"
          initial={{ scale: 1 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 15, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          className="text-white mb-6 leading-[160%] tracking-[-0.01em]"
          style={{ fontSize: '28px', fontWeight: '600' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          도심과 가장 먼 곳,
        </motion.p>

        <motion.p
          className="text-white mb-16 leading-[160%] tracking-[-0.01em]"
          style={{ fontSize: '28px', fontWeight: '600' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
        >
          그래서 가장 건강한 곳
        </motion.p>

        <motion.h1
          className="text-white leading-[160%] tracking-[-0.01em]"
          style={{ fontSize: '40px', fontWeight: 'bold' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
        >
          춘천태동요양병원
        </motion.h1>
      </div>
    </section>
  );
}