import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../data/faq';

export function QASection() {
  const [isInView, setIsInView] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('qa-section');
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

  const questions = faqItems;

  return (
    <section 
      id="qa-section"
      className="min-h-screen px-6 py-20"
      style={{ paddingTop: '100px', paddingBottom: '100px', backgroundColor: '#F4F1EC' }}
    >
      <div className="max-w-[640px] mx-auto">
        {/* Title */}
        <motion.h2
          className="text-[#111111] text-center mb-4 leading-[160%] tracking-[-0.01em]"
          style={{ fontSize: '32px', fontWeight: 'bold' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        >
          자주 하시는 질문들
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-[#555555] text-center leading-[160%] tracking-[-0.01em]"
          style={{ fontSize: '18px', marginBottom: '60px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
        >
          입원 전 궁금하신 내용을 미리 안내해드립니다.
        </motion.p>

        {/* Accordion */}
        <div className="space-y-5">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: '#F7F7F7',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + index * 0.05,
                  ease: [0.22, 0.61, 0.36, 1]
                }}
              >
                {/* Question Button */}
                <button
                  className="w-full px-6 py-6 flex items-center justify-between text-left transition-colors"
                  style={{ minHeight: '72px' }}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span 
                    className="text-[#111111] leading-[160%] tracking-[-0.01em] pr-4 flex-1"
                    style={{ fontSize: '20px', fontWeight: '600' }}
                  >
                    {item.question}
                  </span>
                  <ChevronDown 
                    className="flex-shrink-0 text-[#555555] transition-transform duration-300 ease-in-out"
                    style={{ 
                      width: '20px', 
                      height: '20px',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  />
                </button>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0">
                    <p 
                      className="text-[#444444] leading-[160%] tracking-[-0.01em] whitespace-pre-line"
                      style={{ fontSize: '18px', marginTop: '16px' }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}