import { useEffect } from 'react';
import { useSEO } from '../hooks/useSEO';
import { HeroSection } from '../components/HeroSection';
import { RealitySection } from '../components/RealitySection';
import { EnvironmentSection } from '../components/EnvironmentSection';
import { NatureRecoverySection } from '../components/NatureRecoverySection';
import { MedicalBalanceSection } from '../components/MedicalBalanceSection';
import { RoomSection } from '../components/RoomSection';
import { DailyFlowSection } from '../components/DailyFlowSection';
import { GuardianSection } from '../components/GuardianSection';
import { QASection } from '../components/QASection';
import { NotSection } from '../components/NotSection';
import { ConclusionSection } from '../components/ConclusionSection';
import { CTASection } from '../components/CTASection';

export default function LandingPage() {

  // SEO 설정
  useSEO({
    title: '춘천태동요양병원 - 자연 속에서 치유하는 곳',
    description: '암 전문 요양병원. 자연환경 속에서 치료와 재활, 영양관리까지 토탈 케어를 제공합니다. 입원실, 치료재활, 식사 프로그램 안내.',
    canonical: 'https://www.taedonghp.co.kr/',
    robots: 'index,follow'
  });

  useEffect(() => {

    window.scrollTo(0, 0);

    // JSON-LD 구조화 데이터 삽입 (SEO)
    const script = document.createElement('script');
    script.type = 'application/ld+json';

    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Hospital",
      "name": "춘천태동요양병원",
      "url": "https://www.taedonghp.co.kr",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "춘천",
        "addressCountry": "KR"
      }
    });

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };

  }, []);

  return (
    <div className="w-full bg-white" style={{ paddingBottom: '80px' }}>
      <HeroSection />
      <RealitySection />
      <EnvironmentSection />
      <NatureRecoverySection />
      <MedicalBalanceSection />
      <RoomSection />
      <DailyFlowSection />
      <GuardianSection />
      <QASection />
      <NotSection />
      <ConclusionSection />
      <CTASection />
    </div>
  );
}