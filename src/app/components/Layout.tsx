import { Outlet, useLocation } from 'react-router';
import { TopNav } from './TopNav';
import { BottomNav } from './BottomNav';
import { useSEO } from '../hooks/useSEO';
import { InquiryProvider } from './inquiry/InquiryContext';

export function Layout() {
  const location = useLocation();
  useSEO(location.pathname);

  return (
    <InquiryProvider>
      <TopNav />
      <main>
        <Outlet />
      </main>
      <BottomNav />
    </InquiryProvider>
  );
}
