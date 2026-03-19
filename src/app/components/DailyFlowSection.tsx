import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Sunrise, Sun, Moon } from 'lucide-react';
import bgImage from 'figma:asset/f252d37152409f7ff5d06222e4d561e030d3eeb9.png';

export function DailyFlowSection() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('daily-flow-section');
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

  const schedule = [
    {
      icon: Sunrise,
      time: '아침',
      description: '햇빛과 함께 천천히 몸을 깨웁니다.',
      activities: ['가벼운 산책', '체력에 맞춘 스트레칭', '컨디션 체크'],
      subtext: '밤새 회복한 몸의 리듬을 여는 시간입니다.'
    },
    {
      icon: Sun,
      time: '오후',
      description: '치료와 재활에 집중하는 시간',
      activities: ['고주파 온열치료', '물리치료 및 재활', '의료진 상태 점검'],
      subtext: '회복은 계획적으로 진행합니다.'
    },
    {
      icon: Moon,
      time: '저녁',
      description: '몸을 쉬게 하는 시간',
      activities: ['가벼운 휴식', '조용한 산책', '안정된 수면 환경'],
      subtext: '깊은 잠은 회복의 중요한 요소입니다.'
    }
  ];

  return (
    <section 
      id="daily-flow-section"
      className="min-h-screen relative overflow-hidden px-6 py-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={bgImage} 
          alt="의료진 치료 모습" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#F4F1EC]/85"></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Title */}
        <motion.h2
          className="text-[#111111] text-center mb-16 leading-[160%] tracking-[-0.01em]"
          style={{ fontSize: '30px', fontWeight: '700' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          다시 살아나는 하루의 흐름
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-[#3F6B4F]/20"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {schedule.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  <div className="flex items-start gap-5">
                    {/* Icon Circle */}
                    <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-[#3F6B4F] flex items-center justify-center shadow-md">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 
                        className="text-[#111111] mb-3 leading-[160%] tracking-[-0.01em]"
                        style={{ fontSize: '22px', fontWeight: '600' }}
                      >
                        {item.time}
                      </h3>
                      <p 
                        className="text-[#111111] mb-4 leading-[160%] tracking-[-0.01em]"
                        style={{ fontSize: '18px' }}
                      >
                        {item.description}
                      </p>
                      
                      {/* Activities */}
                      <div className="space-y-2 mb-4">
                        {item.activities.map((activity, i) => (
                          <div 
                            key={i} 
                            className="text-[#555555] leading-[160%] tracking-[-0.01em] pl-4"
                            style={{ fontSize: '18px' }}
                          >
                            • {activity}
                          </div>
                        ))}
                      </div>

                      {/* Subtext */}
                      <p 
                        className="text-[#3F6B4F] leading-[160%] tracking-[-0.01em] italic mt-4"
                        style={{ fontSize: '16px' }}
                      >
                        {item.subtext}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}