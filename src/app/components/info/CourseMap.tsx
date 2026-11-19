// 병원 주변 운동 코스 지도.
// 실제 위성사진 위에 코스를 선으로 그리고, 코스를 누르면 그 길만 강조되어 점이 길을 따라 움직인다.
import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { COURSES, HOSPITAL_POINT, MAP_SIZE, type Course } from '../../data/courseMap';
import baseMap from '../../../assets/course-map-base.webp';

function CourseLine({ course, state, animate }: { course: Course; state: 'normal' | 'active' | 'dim'; animate: boolean }) {
  const active = state === 'active';
  const dim = state === 'dim';
  return (
    <g style={{ opacity: dim ? 0.25 : 1, transition: 'opacity 0.4s ease' }}>
      {/* 사진 위에서 선이 또렷하게 보이도록 어두운 테두리를 먼저 깐다 */}
      <path d={course.path} fill="none" stroke="rgba(0,0,0,0.45)" strokeWidth={active ? 30 : 22} strokeLinecap="round" strokeLinejoin="round" />
      <motion.path
        key={`${course.id}-${state}`}
        d={course.path}
        fill="none"
        stroke={course.color}
        strokeWidth={active ? 18 : 12}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={animate ? { pathLength: 0 } : false}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: active ? 1.6 : 2.2, ease: 'easeInOut' }}
      />
      {active && animate && (
        <circle r="17" fill="#FFFFFF" stroke={course.color} strokeWidth="9">
          {course.roundTrip ? (
            <animateMotion dur="12s" repeatCount="indefinite" path={course.path} keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear" />
          ) : (
            <animateMotion dur="10s" repeatCount="indefinite" path={course.path} />
          )}
        </circle>
      )}
    </g>
  );
}

function CourseLabel({ course, dim }: { course: Course; dim: boolean }) {
  const width = course.name.length * 50 + 56;
  return (
    <g transform={`translate(${course.label.x} ${course.label.y})`} style={{ opacity: dim ? 0.25 : 1, transition: 'opacity 0.4s ease' }}>
      <rect x={-width / 2} y={-44} width={width} height={84} rx={42} fill="rgba(15,30,22,0.82)" stroke={course.color} strokeWidth="5" />
      <text x="0" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="48" fontWeight="700" letterSpacing="-1">
        {course.name}
      </text>
    </g>
  );
}

export function CourseMap() {
  const [selected, setSelected] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const animate = !reduceMotion;
  const current = COURSES.find((course) => course.id === selected) ?? null;

  const stateOf = (course: Course) => (selected === null ? 'normal' : selected === course.id ? 'active' : 'dim');

  return (
    <figure className="w-full">
      <div className="relative w-full overflow-hidden bg-[#1E3A2E]" style={{ aspectRatio: `${MAP_SIZE.width} / ${MAP_SIZE.height}` }}>
        <img
          src={baseMap}
          alt="홍천강과 북한강이 만나는 곳에 자리한 병원과 주변 운동 코스 위성 지도"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,25,18,0.22)' }} />

        <svg
          viewBox={`0 0 ${MAP_SIZE.width} ${MAP_SIZE.height}`}
          className="absolute inset-0 w-full h-full"
          role="img"
          aria-label="운동 코스 세 개가 표시된 지도. 관천리길 왕복 1시간, 동산길 40분 코스, 다산 정약용길."
        >
          {/* 강 이름 */}
          <text x="262" y="930" fill="rgba(255,255,255,0.75)" fontSize="44" fontWeight="600" letterSpacing="10" transform="rotate(-88 262 930)">북한강</text>
          <text x="1010" y="905" fill="rgba(255,255,255,0.75)" fontSize="44" fontWeight="600" letterSpacing="10" transform="rotate(-34 1010 905)">홍천강</text>

          {COURSES.map((course) => (
            <CourseLine key={course.id} course={course} state={stateOf(course)} animate={animate} />
          ))}
          {COURSES.map((course) => (
            <CourseLabel key={course.id} course={course} dim={stateOf(course) === 'dim'} />
          ))}

          {/* 병원 위치 */}
          <g transform={`translate(${HOSPITAL_POINT.x} ${HOSPITAL_POINT.y})`}>
            {animate && (
              <circle r="26" fill="none" stroke="#FFFFFF" strokeWidth="6">
                <animate attributeName="r" values="26;70" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.9;0" dur="2s" repeatCount="indefinite" />
              </circle>
            )}
            <circle r="26" fill="#FFFFFF" />
            <circle r="14" fill="#1E3A2E" />
            <rect x="-74" y="40" width="148" height="76" rx="38" fill="#FFFFFF" />
            <text x="0" y="95" textAnchor="middle" fill="#1E3A2E" fontSize="48" fontWeight="700">병원</text>
          </g>
        </svg>
      </div>

      {/* 코스 선택 */}
      <div className="px-5" style={{ marginTop: '16px' }}>
        <div className="grid grid-cols-3 gap-2">
          {COURSES.map((course) => {
            const pressed = selected === course.id;
            return (
              <button
                key={course.id}
                type="button"
                aria-pressed={pressed}
                onClick={() => setSelected(pressed ? null : course.id)}
                className="rounded-2xl text-center transition-all duration-200 active:scale-[0.97]"
                style={{
                  padding: '12px 4px',
                  minHeight: '76px',
                  backgroundColor: pressed ? '#1E3A2E' : '#FFFFFF',
                  color: pressed ? '#FFFFFF' : '#111111',
                  border: `2px solid ${pressed ? '#1E3A2E' : '#E8E6E0'}`,
                }}
              >
                <span className="block mx-auto rounded-full" style={{ width: '34px', height: '6px', backgroundColor: course.color, marginBottom: '8px' }} />
                <span className="block tracking-[-0.03em]" style={{ fontSize: '16px', fontWeight: 700, lineHeight: 1.25 }}>{course.name}</span>
                {course.time && (
                  <span className="block tracking-[-0.03em]" style={{ fontSize: '14px', marginTop: '2px', opacity: 0.75 }}>{course.time}</span>
                )}
              </button>
            );
          })}
        </div>

        <p
          aria-live="polite"
          className="text-center tracking-[-0.02em]"
          style={{ marginTop: '14px', minHeight: '28px', fontSize: '17px', color: '#555555' }}
        >
          {current ? current.note : '코스를 누르면 길이 표시됩니다'}
        </p>
      </div>
      <figcaption className="sr-only">
        병원에서 출발하는 운동 코스 지도. 관천리길은 왕복 1시간, 동산길은 40분 코스이며, 다산 정약용길은 북한강 물가를 따라 이어진다.
      </figcaption>
    </figure>
  );
}
