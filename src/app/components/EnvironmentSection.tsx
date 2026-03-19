import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import cityImage from 'figma:asset/51b479dadb4ab9b0522d9f280babf6007d0dbffe.png';

export function EnvironmentSection() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('environment-section');
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
      id="environment-section"
      className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={cityImage}
          alt="도시 풍경"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 text-center max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2 
          className="text-white leading-[160%] tracking-[-0.01em] mb-12"
          style={{ fontSize: '28px', fontWeight: '600' }}
        >
          암이 생겼던 생활 속으로<br />
          아무런 준비없이 돌아 가셨나요?
        </h2>

        <motion.p
          className="text-white leading-[160%] tracking-[-0.01em]"
          style={{ fontSize: '20px', fontWeight: '400' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
        >
          도심은 여전히 바쁘고<br />
          몸은 준비가 되지 않았습니다
        </motion.p>
      </motion.div>
    </section>
  );
}