import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative flex items-start justify-center overflow-hidden bg-[#111111]" style={{ height: '85vh' }}>
      {/* Background Image with slow zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.03 }}
        transition={{ duration: 20, ease: "easeInOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1724078715426-4655c0087e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGtvcmVhbiUyMGZvcmVzdCUyMG1vcm5pbmclMjBtaXN0fGVufDF8fHx8MTc3MTgzNjU1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="평화로운 아침 숲"
          className="w-full h-full object-cover opacity-70"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-2xl"
        style={{ marginTop: '120px' }}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <motion.h1 
          className="text-white mb-6 leading-[160%] tracking-[-0.01em]"
          style={{ fontSize: '34px', fontWeight: 'bold' }}
        >
          도심과 멀어질수록,<br />
          건강에 더 가까워집니다.
        </motion.h1>
        
        <motion.p 
          className="text-white/90 leading-[160%] tracking-[-0.01em]"
          style={{ fontSize: '17px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
        >
          암이 생긴 일상에서 잠시 벗어나<br />
          나를 다시 세우는 시간.
        </motion.p>
      </motion.div>

      {/* Hospital Name */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ bottom: '140px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
      >
        <p 
          className="text-white/80 leading-[160%] tracking-[-0.01em]"
          style={{ fontSize: '18px', fontWeight: '500' }}
        >
          춘천태동요양병원
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ bottom: '90px' }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <ChevronDown className="w-8 h-8 text-white/70" strokeWidth={2} />
        <ChevronDown className="w-8 h-8 text-white/50 -mt-6" strokeWidth={2} />
      </motion.div>
    </section>
  );
}