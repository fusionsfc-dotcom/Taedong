import { useEffect } from 'react';
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


  useEffect(() => {
    window.scrollTo(0, 0);
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