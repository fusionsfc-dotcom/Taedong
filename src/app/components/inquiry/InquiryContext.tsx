import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router';
import { topicForPath, type InquiryTopic } from '../../data/inquiry';
import { InquirySheet } from './InquirySheet';

interface InquiryContextValue {
  /**
   * 문의 창을 연다. 주제를 주지 않으면 현재 메뉴에 맞는 주제가 미리 선택된다.
   * direct가 true면 주제·답변 방법 단계를 건너뛰고 문자 답변으로 바로 번호 입력 화면을 연다.
   */
  open: (topic?: InquiryTopic, direct?: boolean) => void;
}

const InquiryContext = createContext<InquiryContextValue>({ open: () => {} });

export function useInquiry() {
  return useContext(InquiryContext);
}

export function InquiryProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [state, setState] = useState<{ open: boolean; topic: InquiryTopic; direct: boolean }>({ open: false, topic: '입원 상담', direct: false });

  const open = useCallback(
    (topic?: InquiryTopic, direct = false) => setState({ open: true, topic: topic ?? topicForPath(location.pathname), direct }),
    [location.pathname],
  );
  const value = useMemo(() => ({ open }), [open]);

  return (
    <InquiryContext.Provider value={value}>
      {children}
      {state.open && (
        <InquirySheet
          initialTopic={state.topic}
          direct={state.direct}
          page={location.pathname}
          onClose={() => setState((current) => ({ ...current, open: false }))}
        />
      )}
    </InquiryContext.Provider>
  );
}
