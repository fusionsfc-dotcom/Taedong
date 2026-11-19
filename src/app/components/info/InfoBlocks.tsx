// 메뉴 하단 "정보 구간"을 이루는 그래픽 부품 모음.
// 글은 최소로 하고 아이콘·도식·사진으로 보여 준다. 내용은 src/app/data/menuInfo.ts에서 온다.
import { useState, type ReactNode } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { InquiryButton } from '../inquiry/InquiryButton';

const GREEN = '#3F6B4F';
const TEXT = '#111111';
const SUB = '#555555';
const LINE = '#E8E6E0';

function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      // 내용은 처음부터 보이게 두고, 살짝 올라오는 움직임만 준다
      initial={{ y: 16 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

function BlockTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="tracking-[-0.01em] mb-4" style={{ fontSize: '20px', fontWeight: 'bold', color: TEXT }}>
      {children}
    </h3>
  );
}

/** 정보 구간 전체를 감싸는 틀 */
export function InfoSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="w-full bg-[#F7F6F3]" style={{ marginTop: '100px' }} aria-label={title}>
      <div className="max-w-[640px] mx-auto px-6" style={{ paddingTop: '72px', paddingBottom: '72px' }}>
        <Reveal>
          <div className="flex items-center justify-center gap-3 mb-10">
            <span style={{ width: '28px', height: '2px', backgroundColor: GREEN }} />
            <h2 className="tracking-[-0.01em]" style={{ fontSize: '24px', fontWeight: 'bold', color: TEXT }}>
              {title}
            </h2>
            <span style={{ width: '28px', height: '2px', backgroundColor: GREEN }} />
          </div>
        </Reveal>
        <div className="space-y-12">{children}</div>
        <div style={{ marginTop: '40px' }}>
          <InquiryButton label="궁금한 점 문의하기" variant="outline" />
        </div>
      </div>
    </section>
  );
}

/** 썸네일 카드 격자: 사진 + 한 줄 라벨 */
export interface ThumbItem {
  src: string;
  alt: string;
  label: string;
  caption?: string;
  /** 순서가 있을 때 사진 위에 얹는 짧은 표시 (예: "아침") */
  badge?: string;
}

export function ThumbGrid({ title, items, columns = 2 }: { title?: string; items: ThumbItem[]; columns?: 2 | 3 }) {
  const compact = columns === 3;
  return (
    <Reveal>
      {title && <BlockTitle>{title}</BlockTitle>}
      <ul className={`grid gap-3 ${compact ? 'grid-cols-3' : 'grid-cols-2'}`}>
        {items.map((item) => (
          <li key={item.label} className="bg-white rounded-[20px] overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div className="relative">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="w-full object-cover"
                style={{ height: compact ? '96px' : '124px' }}
              />
              {item.badge && (
                <span
                  className="absolute tracking-[-0.02em] text-white rounded-full"
                  style={{ top: '8px', left: '8px', padding: '3px 10px', fontSize: '13px', fontWeight: 600, backgroundColor: 'rgba(30,58,46,0.85)' }}
                >
                  {item.badge}
                </span>
              )}
            </div>
            <div style={{ padding: compact ? '10px 8px 12px' : '14px 14px 16px', textAlign: compact ? 'center' : 'left' }}>
              <p className="tracking-[-0.02em]" style={{ fontSize: compact ? '15px' : '17px', fontWeight: 600, color: TEXT, lineHeight: 1.3 }}>
                {item.label}
              </p>
              {item.caption && (
                <p className="tracking-[-0.02em] mt-1" style={{ fontSize: compact ? '13px' : '14px', color: SUB, lineHeight: 1.4 }}>
                  {item.caption}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

/** 글자 태그: 맞는 사진이 없는 짧은 항목 나열 */
export function TagList({ title, items }: { title?: string; items: string[] }) {
  return (
    <Reveal>
      {title && <BlockTitle>{title}</BlockTitle>}
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="bg-white rounded-full tracking-[-0.02em]"
            style={{ padding: '10px 18px', fontSize: '17px', fontWeight: 600, color: TEXT, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

/** 번호 단계: 순서가 있는 짧은 안내 */
export function NumberSteps({ title, items }: { title?: string; items: { label: string; value?: string }[] }) {
  return (
    <Reveal>
      {title && <BlockTitle>{title}</BlockTitle>}
      <ol className="bg-white rounded-[20px]" style={{ padding: '6px 22px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-4" style={{ padding: '16px 0', borderTop: index === 0 ? 'none' : `1px solid ${LINE}` }}>
            <span className="tracking-[-0.02em]" style={{ fontSize: '24px', fontWeight: 'bold', color: GREEN, width: '28px' }}>
              {index + 1}
            </span>
            <span className="tracking-[-0.02em] flex-1" style={{ fontSize: '18px', fontWeight: 600, color: TEXT }}>{item.label}</span>
            {item.value && <span className="tracking-[-0.02em]" style={{ fontSize: '15px', color: SUB }}>{item.value}</span>}
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

/** 좌우 대비 도식 */
export interface CompareSide {
  label: string;
  points: string[];
}

export function CompareCards({ title, left, right }: { title?: string; left: CompareSide; right: CompareSide }) {
  return (
    <Reveal>
      {title && <BlockTitle>{title}</BlockTitle>}
      <div className="grid grid-cols-2 gap-3">
        {[left, right].map((side, index) => {
          const strong = index === 1;
          return (
            <div
              key={side.label}
              className="rounded-[20px] text-center"
              style={{
                padding: '22px 12px',
                backgroundColor: strong ? '#1E3A2E' : '#FFFFFF',
                color: strong ? '#FFFFFF' : TEXT,
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              <p className="tracking-[-0.02em]" style={{ fontSize: '22px', fontWeight: 'bold' }}>{side.label}</p>
              <ul className="mt-3 space-y-1">
                {side.points.map((point) => (
                  <li key={point} className="tracking-[-0.02em]" style={{ fontSize: '15px', opacity: strong ? 0.9 : 1, color: strong ? '#FFFFFF' : SUB, lineHeight: 1.4 }}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}

/** 접이식 질문: 평소에는 접혀 있다 */
export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqList({ title = '자주 묻는 질문', items }: { title?: string; items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <Reveal>
      <BlockTitle>{title}</BlockTitle>
      <div className="bg-white rounded-[20px]" style={{ padding: '2px 20px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        {items.map((item, index) => {
          const open = openIndex === index;
          return (
            <div key={item.question} style={{ borderTop: index === 0 ? 'none' : `1px solid ${LINE}` }}>
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
                className="w-full flex items-center justify-between gap-3 text-left"
                style={{ padding: '18px 0', minHeight: '60px' }}
              >
                <span className="tracking-[-0.02em]" style={{ fontSize: '17px', fontWeight: 600, color: TEXT, lineHeight: 1.4 }}>
                  {item.question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{ width: '22px', height: '22px', color: GREEN, transform: open ? 'rotate(180deg)' : 'none' }}
                />
              </button>
              {/* 접혀 있어도 검색 로봇이 읽을 수 있도록 내용은 항상 HTML에 둔다 */}
              <p
                className="tracking-[-0.01em] whitespace-pre-line"
                style={{ display: open ? 'block' : 'none', fontSize: '17px', color: SUB, lineHeight: 1.6, paddingBottom: '18px' }}
              >
                {item.answer}
              </p>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}

/** 다음에 볼 메뉴 */
export interface NextItem {
  to: string;
  label: string;
  src?: string;
}

export function NextMenus({ items }: { items: NextItem[] }) {
  return (
    <Reveal>
      <BlockTitle>함께 보면 좋습니다</BlockTitle>
      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => {
          return (
            <Link
              key={item.to}
              to={item.to}
              className="relative block rounded-[20px] overflow-hidden active:scale-[0.98] transition-transform duration-200"
              style={{ height: '120px', backgroundColor: '#1E3A2E' }}
            >
              {item.src && <img src={item.src} alt="" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.45 }} />}
              <span className="absolute flex items-center gap-1 text-white tracking-[-0.02em]" style={{ left: '18px', bottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>
                {item.label}
                <ArrowRight aria-hidden="true" style={{ width: '18px', height: '18px' }} />
              </span>
            </Link>
          );
        })}
      </div>
    </Reveal>
  );
}
