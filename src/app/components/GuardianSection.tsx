import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import gardenImg from 'figma:asset/fbbe6dabd49360fc23b2ea65e062e60b73b904bd.png';
import mealImg1 from 'figma:asset/b2a79e4297ee9b3ed7a5eff75c783f57cde45aa3.png';
import mealImg2 from 'figma:asset/407e4495a5b1bc4c7fc3f056626a356d38c25df8.png';

export function GuardianSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const gardenScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.08]);
  const mealScale1 = useTransform(scrollYProgress, [0.3, 0.7, 1], [1, 1.04, 1.06]);
  const mealScale2 = useTransform(scrollYProgress, [0.4, 0.8, 1], [1, 1.04, 1.06]);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('guardian-section');
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

  const mealPoints = [
    {
      title: '춘천 남면의 제철 채소',
      desc: '병원이 위치한 남면에서 자란\n신선한 농산물을 사용합니다.'
    },
    {
      title: '유기농 텃밭 운영',
      desc: '직접 가꾸는 텃밭에서\n식재료를 수확합니다.'
    },
    {
      title: '개인 상태에 맞춘 식단',
      desc: '소화력과 치료 단계에 따라\n부담을 줄인 식사를 제공합니다.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="guardian-section"
      className="min-h-screen bg-white px-6 py-20"
    >
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-[#111111] text-center mb-10 leading-[160%] tracking-[-0.01em]"
          style={{ fontSize: '30px', fontWeight: 'bold', marginTop: '80px', marginBottom: '40px' }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
        >
          회복은 식사에서 완성됩니다.
        </motion.h2>

        {/* Intro Copy */}
        <motion.div
          className="text-center mb-12 space-y-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p 
            className="text-[#111111] leading-[160%] tracking-[-0.01em]"
            style={{ fontSize: '18px' }}
          >
            항암 이후,<br />
            입맛이 변하고<br />
            소화가 예전 같지 않습니다.
          </p>
          <p 
            className="text-[#111111] leading-[160%] tracking-[-0.01em] mt-4"
            style={{ fontSize: '18px' }}
          >
            이제는 많이가 아니라<br />
            맞게 먹어야 합니다.
          </p>
        </motion.div>

        {/* Garden Image */}
        <motion.div
          className="my-12 overflow-hidden rounded-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <motion.img
            src={gardenImg}
            alt="유기농 텃밭"
            className="w-full h-auto object-cover"
            style={{ scale: gardenScale }}
          />
        </motion.div>

        {/* Meal Points */}
        <div className="space-y-8 mt-12">
          {mealPoints.map((point, index) => (
            <motion.div
              key={index}
              className="text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.9,
                delay: 0.45 + index * 0.12,
                ease: [0.22, 0.61, 0.36, 1]
              }}
            >
              <h3 
                className="text-[#3F6B4F] mb-2 leading-[160%] tracking-[-0.01em]"
                style={{ fontSize: '18px', fontWeight: '600' }}
              >
                {point.title}
              </h3>
              <p 
                className="text-[#555555] leading-[160%] tracking-[-0.01em] whitespace-pre-line"
                style={{ fontSize: '18px' }}
              >
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Meal Images */}
        <div className="grid grid-cols-1 gap-6 mt-12">
          <motion.div
            className="overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 0.85, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <motion.img
              src={mealImg1}
              alt="건강한 한식 식단"
              className="w-full h-auto object-cover"
              style={{ scale: mealScale1 }}
            />
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <motion.img
              src={mealImg2}
              alt="개인 맞춤 식사"
              className="w-full h-auto object-cover"
              style={{ scale: mealScale2 }}
            />
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.p
          className="text-center text-[#111111] leading-[160%] tracking-[-0.01em] mt-16 mb-12"
          style={{ fontSize: '30px', fontWeight: '600' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1.15, ease: [0.22, 0.61, 0.36, 1] }}
        >
          건강한 식사는<br />
          치료만큼 중요합니다!
        </motion.p>
      </div>
    </section>
  );
}