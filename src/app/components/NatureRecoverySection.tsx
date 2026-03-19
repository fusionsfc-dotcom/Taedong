import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import natureImage from 'figma:asset/e882b84f5e4df95eec097fec5d30b57879114a1c.png';

export function NatureRecoverySection() {
  const [isInView, setIsInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('nature-recovery-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.7 && rect.bottom > 0;
        setIsInView(inView);
        
        // Calculate parallax
        if (inView && rect.top < window.innerHeight) {
          const progress = 1 - (rect.top / window.innerHeight);
          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const elements = [
    '조용한 공기',
    '햇빛',
    '흙의 감각',
    '걷는 리듬'
  ];

  const poemLines = [
    { text: '일상에서 잠시 멀어져야 합니다', size: '24px', weight: '600', delay: 0 },
    { text: '깨끗한 공기,', size: '22px', weight: '400', delay: 0.6 },
    { text: '새소리만 들리는 조용한 숲길,', size: '22px', weight: '400', delay: 1.0 },
    { text: '맨발로 걷는 황토의 감각.', size: '22px', weight: '400', delay: 1.4 },
    { text: '생명이 다시 태동하는 루틴을', size: '24px', weight: '600', delay: 2.6 },
    { text: '찾아야 합니다', size: '24px', weight: '600', delay: 3.0 }
  ];

  return (
    <section 
      id="nature-recovery-section"
      className="min-h-screen bg-white relative overflow-hidden"
    >
      {/* Background Image with subtle parallax */}
      <div className="absolute inset-0">
        <motion.img
          src={natureImage}
          alt="자연 속 산책"
          className="w-full h-full object-cover"
          style={{ 
            transform: `translateY(${scrollProgress * 10}%)`,
            willChange: 'transform'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      {/* Text Content - Left Aligned */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 py-20">
        {/* Upper text group */}
        <div className="max-w-md space-y-6 pt-20">
          {poemLines.slice(0, 4).map((line, index) => (
            <motion.p
              key={index}
              className="text-white leading-[160%] tracking-[-0.01em]"
              style={{ 
                fontSize: line.size, 
                fontWeight: line.weight,
                marginBottom: (index === 0 || index === 3) ? '32px' : '8px'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.8,
                delay: line.delay,
                ease: "easeOut"
              }}
            >
              {line.text}
            </motion.p>
          ))}
        </div>

        {/* Lower text group */}
        <div className="max-w-md space-y-2 pb-20">
          {poemLines.slice(4).map((line, index) => (
            <motion.p
              key={index + 4}
              className="text-white leading-[160%] tracking-[-0.01em]"
              style={{ 
                fontSize: line.size, 
                fontWeight: line.weight
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.8,
                delay: line.delay,
                ease: "easeOut"
              }}
            >
              {line.text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}