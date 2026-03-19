import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

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

  const questions = [
    {
      question: '얼마나 입원해야 합니까?',
      answer: '입원 기간은 개인의 상태와 목적에 따라 다릅니다.\n상담 후 현재 몸 상태를 확인하고 적절한 기간을 안내해드립니다.'
    },
    {
      question: '항암 중에도 입원이 가능합니까?',
      answer: '네, 가능합니다.\n항암 일정에 맞춰 체력 회복과 영양 관리를 병행합니다.'
    },
    {
      question: '수술 후 바로 입원이 가능합니까?',
      answer: '수술 후 회복 상태를 확인한 뒤 안전하게 입원 일정을 조율합니다.'
    },
    {
      question: '체력이 많이 떨어진 상태도 입원이 가능합니까?',
      answer: '네, 가능합니다.\n상태에 맞춘 재활과 영양 관리로 회복을 돕습니다.'
    },
    {
      question: '개인 소화력에 맞춘 식사가 제공되나요?',
      answer: '네.\n춘천 남면의 제철 채소와 유기농 텃밭 식재료를 활용하여\n개인 상태에 맞춘 식단을 제공합니다.'
    },
    {
      question: '보호자가 상주할 수 있나요?',
      answer: '1인실 이용 시 보호자 상주가 가능합니다.\n보호자 식사는 별도 비용이 추가됩니다.'
    },
    {
      question: '응급 상황 발생 시 어떻게 대응합니까?',
      answer: '24시간 의료 대응 체계를 갖추고 있습니다.'
    },
    {
      question: '말기 호스피스 병원인가요?',
      answer: '아닙니다.\n암 치료 중·후 회복과 면역 재활을 돕는 병원입니다.'
    },
    {
      question: '재발 방지를 위한 관리도 해주나요?',
      answer: '면역 관리와 생활 리듬 관리를 함께 진행합니다.'
    },
    {
      question: '하루 일정은 어떻게 운영됩니까?',
      answer: '아침 산책, 오후 재활, 저녁 휴식을 중심으로 운영됩니다.'
    },
    {
      question: '비용은 어느 정도입니까?',
      answer: '입원 기간과 병실 유형에 따라 달라집니다.\n상담을 통해 안내해드립니다.'
    }
  ];

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