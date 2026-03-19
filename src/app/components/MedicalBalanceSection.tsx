import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function MedicalBalanceSection() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('medical-balance-section');
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

  const treatments = [
    '양·한방 협진',
    '고주파 온열치료',
    '물리치료',
    '면역 강화 프로그램',
    '24시간 간호'
  ];

  return (
    <section 
      id="medical-balance-section"
      className="min-h-screen bg-white px-6 py-20 flex items-center"
    >
      <div className="max-w-xl mx-auto w-full">
        {/* Main Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 
            className="text-[#111111] mb-8 leading-[160%] tracking-[-0.01em]"
            style={{ fontSize: '28px', fontWeight: '600' }}
          >
            자연 속이라고,<br />
            의료가 약해지면 안 됩니다.
          </h2>
        </motion.div>

        {/* Treatment Buttons */}
        <div className="space-y-4">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl px-6 py-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + (index * 0.1),
                ease: "easeOut"
              }}
            >
              <p 
                className="text-[#111111] leading-[160%] tracking-[-0.01em]"
                style={{ fontSize: '18px', fontWeight: '500' }}
              >
                {treatment}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}