// 메뉴별 하단 정보 구간. 이미 사이트에 공개된 사실만 담는다.
// 표현은 실제 사진 썸네일을 기본으로 한다. 맞는 사진이 없는 항목은 아이콘으로 대체하지 않고 글자 태그로 둔다.
// 병원 확인이 필요한 항목(면회 시간, 코스 거리, 식사 시간 등)은 확인 후 여기에 블록을 추가한다.
import { faqItems } from '../../data/faq';
import {
  InfoSection, ThumbGrid, TagList, NumberSteps, CompareCards, FaqList, NextMenus,
  type NextItem,
} from './InfoBlocks';
import roomHero from 'figma:asset/room-hero-window.png';
import ondolRoom from 'figma:asset/34e234de8a31b52abcd6829bf1b05b6d31cab4a6.png';
import bathroom from 'figma:asset/d4f14a30963b379635a393f46bd5d002d26130d9.png';
import disinfection from 'figma:asset/d108d1249ec41ad5f4f74487e6b29b657518e027.png';
import lounge from 'figma:asset/0559af899e98b6b55a0bb78f4ddf151fa6e47d5e.png';
import terrace from 'figma:asset/f16bf1c866c4d96b754b3c0a1cad1b281f74ca80.png';
import sauna from 'figma:asset/34fd600ddc05a670c299d40d2ba07149548be1bf.png';
import environmentHero from 'figma:asset/de085577584befc0705b880c3a6a10b1b239c5fd.png';
import kayak from 'figma:asset/3c1fb678279020752aaedca707b526ad6401c68b.png';
import loessRoad from 'figma:asset/e882b84f5e4df95eec097fec5d30b57879114a1c.png';
import forestPath from 'figma:asset/8f5c0b2ada3a6df4acbc5d2619faca5eaa5098ae.png';
import medicalHero from 'figma:asset/35cf1d72329f19af95fc3cd29863112d9c086529.png';
import doctorCare from 'figma:asset/f252d37152409f7ff5d06222e4d561e030d3eeb9.png';
import nurseCare from 'figma:asset/f6e350b70ff06c3f363254a4575cbdad14df1486.png';
import thermalTherapy from 'figma:asset/48ec84fd20d04a4c6c75f964ec04e932f4e4d933.png';
import physicalTherapy from 'figma:asset/e0c49c8a8b7d60bda2ffa73659ae418f16a652da.png';
import foodHero from 'figma:asset/711b4a85cbbf1110dc13ae946f878fd9b725f38c.png';
import mealTray from 'figma:asset/29b108547c094712ccafd7934c0b9ddcfb4015bf.png';
import proteinMeal from 'figma:asset/f264b4675ff417ded364543c3b50fd9d0ab0a72f.png';
import koreanMeal from 'figma:asset/b2a79e4297ee9b3ed7a5eff75c783f57cde45aa3.png';
import personalMeal from 'figma:asset/407e4495a5b1bc4c7fc3f056626a356d38c25df8.png';
import garden from 'figma:asset/fbbe6dabd49360fc23b2ea65e062e60b73b904bd.png';

const NEXT: Record<string, NextItem> = {
  room: { to: '/room-detail', label: '입원실', src: roomHero },
  environment: { to: '/environment-detail', label: '자연환경', src: environmentHero },
  medical: { to: '/medical-detail', label: '치료재활', src: medicalHero },
  food: { to: '/food-detail', label: '식사', src: foodHero },
};

/** 랜딩 Q&A에서 해당 메뉴와 관련된 질문만 골라 쓴다 */
const pickFaq = (...indexes: number[]) => indexes.map((index) => faqItems[index]);

export function RoomInfo() {
  return (
    <InfoSection title="입원 생활 한눈에">
      <ThumbGrid
        title="병실과 시설"
        items={[
          { src: ondolRoom, alt: '온돌 입원실', label: '온돌 입원실', caption: '1~3인실' },
          { src: bathroom, alt: '병실 안 화장실과 싱크대', label: '화장실 · 싱크대', caption: '병실 안' },
          { src: disinfection, alt: '친환경 소독 관리', label: '친환경 소독', caption: '정기 관리' },
          { src: lounge, alt: '라운지 카페', label: '라운지 카페', caption: '포켓볼' },
          { src: sauna, alt: '편백나무 찜질방', label: '찜질방', caption: '마사지 기기' },
          { src: terrace, alt: '홍천강이 내려다보이는 테라스', label: '테라스', caption: '홍천강 전망' },
        ]}
      />
      <FaqList items={pickFaq(5, 0, 10)} />
      <NextMenus items={[NEXT.food, NEXT.medical]} />
    </InfoSection>
  );
}

export function EnvironmentInfo() {
  return (
    <InfoSection title="자연을 걷는 방법">
      <ThumbGrid
        title="걷고 움직이는 길"
        columns={3}
        items={[
          { src: loessRoad, alt: '황토길', label: '황토길', caption: '맨발 걷기' },
          { src: forestPath, alt: '소나무 숲길', label: '소나무 숲길', caption: '피톤치드 숲' },
          { src: kayak, alt: '강변 수상레저', label: '강변', caption: '수상레저' },
        ]}
      />
      <ThumbGrid
        title="하루의 흐름"
        columns={3}
        items={[
          { src: loessRoad, alt: '아침 산책', label: '산책', badge: '아침' },
          { src: physicalTherapy, alt: '오후 재활', label: '재활', badge: '오후' },
          { src: terrace, alt: '테라스에서의 휴식', label: '휴식', badge: '저녁' },
        ]}
      />
      <FaqList items={pickFaq(9, 3)} />
      <NextMenus items={[NEXT.room, NEXT.medical]} />
    </InfoSection>
  );
}

export function MedicalInfo() {
  return (
    <InfoSection title="치료 한눈에">
      <ThumbGrid
        title="치료와 관리"
        items={[
          { src: doctorCare, alt: '의료진 진료 모습', label: '양·한방 협진' },
          { src: thermalTherapy, alt: '고주파 온열치료 장비', label: '고주파 온열치료' },
          { src: physicalTherapy, alt: '물리치료와 재활', label: '물리치료 · 재활' },
          { src: nurseCare, alt: '병실에서 환자를 살피는 간호사', label: '24시간 간호', caption: '의료진 상주' },
        ]}
      />
      <TagList title="면역 관리" items={['면역 주사요법', '고농도 비타민 요법']} />
      <TagList title="함께 살피는 증상" items={['통증', '피로', '수면', '소화']} />
      <FaqList items={pickFaq(1, 2, 6, 7)} />
      <NextMenus items={[NEXT.food, NEXT.room]} />
    </InfoSection>
  );
}

export function FoodInfo() {
  return (
    <InfoSection title="식사 한눈에">
      <ThumbGrid
        title="상차림"
        items={[
          { src: mealTray, alt: '부담 없는 한 끼 상차림', label: '부담 없는 한 끼' },
          { src: proteinMeal, alt: '고단백 식단 상차림', label: '고단백 식단' },
          { src: koreanMeal, alt: '건강한 한식 식단', label: '건강한 한식' },
          { src: personalMeal, alt: '개인 맞춤 식사', label: '개인 맞춤 식사' },
        ]}
      />
      <TagList title="맞춤 식단" items={['저염식', '고단백식', '영양죽', '소화 부담을 줄인 식사']} />
      <ThumbGrid
        title="텃밭에서 식탁까지"
        items={[
          { src: garden, alt: '병원 텃밭', label: '병원 텃밭', caption: '직접 재배 · 김장' },
          { src: foodHero, alt: '텃밭 채소로 차린 식탁', label: '식탁', caption: '제철 채소 반찬' },
        ]}
      />
      <FaqList items={pickFaq(4, 5)} />
      <NextMenus items={[NEXT.medical, NEXT.room]} />
    </InfoSection>
  );
}

export function CostInfo() {
  return (
    <InfoSection title="비용 이해하기">
      <CompareCards
        title="급여와 비급여"
        left={{ label: '급여', points: ['건강보험 적용', '일부만 본인 부담'] }}
        right={{ label: '비급여', points: ['건강보험 미적용', '전액 본인 부담'] }}
      />
      <NumberSteps
        title="비급여 진행 방식"
        items={[{ label: '상담' }, { label: '비용 안내', value: '치료 전' }, { label: '선택 진행' }]}
      />
      <FaqList items={pickFaq(10, 0)} />
      <NextMenus items={[NEXT.medical, NEXT.room]} />
    </InfoSection>
  );
}
