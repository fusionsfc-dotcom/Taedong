// 오시는 길 카드. 카카오 지도를 화면에 직접 넣는다.
// 카카오 개발자 사이트의 JavaScript 키를 VITE_KAKAO_MAP_KEY 환경 변수로 넣어야 지도가 뜬다 (.env.example 참고).
// 키가 없거나 지도를 불러오지 못하면 병원 전경 사진을 대신 보여 준다.
import { useEffect, useRef, useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { SITE } from '../../seo';
import hospitalView from 'figma:asset/de085577584befc0705b880c3a6a10b1b239c5fd.png';

const ADDRESS = '강원도 춘천시 남면 박암관천길 821';
const KAKAO_KEY = import.meta.env.VITE_KAKAO_MAP_KEY as string | undefined;
const SDK_ID = 'kakao-map-sdk';

declare global {
  interface Window {
    // 카카오 지도 SDK가 넣는 전역 객체
    kakao?: any;
  }
}

/** 카카오 지도 SDK를 한 번만 불러온다 */
function loadKakaoSdk(key: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.kakao?.maps) {
      window.kakao.maps.load(() => resolve());
      return;
    }
    let script = document.getElementById(SDK_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = SDK_ID;
      script.async = true;
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(key)}&autoload=false`;
      document.head.appendChild(script);
    }
    script.addEventListener('load', () => {
      if (window.kakao?.maps) window.kakao.maps.load(() => resolve());
      else reject(new Error('kakao sdk unavailable'));
    });
    script.addEventListener('error', () => reject(new Error('kakao sdk load failed')));
  });
}

function KakaoMap() {
  const holder = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'idle' | 'ready' | 'failed'>(KAKAO_KEY ? 'idle' : 'failed');

  useEffect(() => {
    const element = holder.current;
    if (!KAKAO_KEY || !element) return;
    let cancelled = false;

    const start = () => {
      loadKakaoSdk(KAKAO_KEY)
        .then(() => {
          if (cancelled || !holder.current) return;
          const { maps } = window.kakao;
          const position = new maps.LatLng(SITE.geo.latitude, SITE.geo.longitude);
          const map = new maps.Map(holder.current, { center: position, level: 5 });
          map.addControl(new maps.ZoomControl(), maps.ControlPosition.RIGHT);
          new maps.Marker({ map, position, title: SITE.name });
          new maps.CustomOverlay({
            map,
            position,
            yAnchor: 2.3,
            content: `<div style="padding:8px 14px;border-radius:999px;background:#1E3A2E;color:#fff;font-size:15px;font-weight:700;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,0.25)">${SITE.name}</div>`,
          });
          setStatus('ready');
        })
        .catch(() => {
          if (!cancelled) setStatus('failed');
        });
    };

    // 화면 가까이 왔을 때만 지도를 불러와 첫 화면 속도에 영향을 주지 않는다
    if (!('IntersectionObserver' in window)) {
      start();
      return () => {
        cancelled = true;
      };
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          start();
        }
      },
      { rootMargin: '300px' },
    );
    observer.observe(element);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full" style={{ height: '300px', backgroundColor: '#EAF1EC' }}>
      {status !== 'ready' && (
        <img
          src={hospitalView}
          alt="홍천강 옆에 자리한 춘천태동요양병원 전경"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div ref={holder} role="application" aria-label={`${SITE.name} 위치 지도`} className="absolute inset-0 w-full h-full" />
    </div>
  );
}

export function LocationCard() {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 복사를 지원하지 않는 환경에서는 주소 텍스트를 직접 선택해 복사할 수 있다.
    }
  };

  return (
    <div className="bg-white rounded-[20px] overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
      <KakaoMap />

      <div className="flex items-center justify-between gap-3 text-left" style={{ padding: '18px 20px' }}>
        <div className="min-w-0">
          <p className="tracking-[-0.02em]" style={{ fontSize: '19px', fontWeight: 'bold', color: '#111111' }}>{SITE.name}</p>
          <address className="not-italic tracking-[-0.02em] mt-1" style={{ fontSize: '16px', color: '#555555', lineHeight: 1.4 }}>
            {ADDRESS}
          </address>
        </div>
        <button
          type="button"
          onClick={copyAddress}
          className="flex items-center gap-1 flex-shrink-0 rounded-full"
          aria-label="주소 복사"
          style={{ padding: '10px 14px', border: '1px solid #E8E6E0', color: '#3F6B4F', fontSize: '15px', fontWeight: 600 }}
        >
          {copied ? <Check aria-hidden="true" style={{ width: '16px', height: '16px' }} /> : <Copy aria-hidden="true" style={{ width: '16px', height: '16px' }} />}
          <span aria-live="polite">{copied ? '복사됨' : '복사'}</span>
        </button>
      </div>
    </div>
  );
}
