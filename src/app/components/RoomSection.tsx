import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import roomImage1 from 'figma:asset/fd12f3857c86a68e8e99b8d30e12507e627f8ba8.png';
import roomImage2 from 'figma:asset/a1c7038d3b857dc10dd5fd76fa03d32048dd99fd.png';
import roomImage3 from 'figma:asset/e3693d9de55095774e3663fb5d130ae46fb6cbdb.png';

export function RoomSection() {
  const [isInView, setIsInView] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    roomImage1,
    roomImage2,
    roomImage3
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('room-section');
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

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInView, images.length]);

  return (
    <section 
      id="room-section"
      className="min-h-screen bg-white relative overflow-hidden"
    >
      {/* Image Slideshow */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`병실 환경 ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === index ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <motion.div
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h2 
            className="text-white mb-12 leading-[160%] tracking-[-0.01em]"
            style={{ fontSize: '28px', fontWeight: '600' }}
          >
            혼자 있고 싶지만,<br />
            혼자이고 싶지는 않습니다.
          </h2>

          <div className="space-y-4">
            <p 
              className="text-white/90 leading-[160%] tracking-[-0.01em]"
              style={{ fontSize: '18px' }}
            >
              1·2인실 중심의 프라이빗 병실
            </p>
            <p 
              className="text-white/90 leading-[160%] tracking-[-0.01em]"
              style={{ fontSize: '18px' }}
            >
              집처럼 편안하지만, 집보다 건강한 공간
            </p>
          </div>
        </motion.div>

        {/* Image Indicators */}
        <motion.div
          className="flex gap-2 mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentImage === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}