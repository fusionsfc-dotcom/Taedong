import { Outlet, useLocation } from 'react-router';
import { TopNav } from './TopNav';
import { BottomNav } from './BottomNav';
import { useSEO } from '../hooks/useSEO';

export function Layout() {
  const location = useLocation();
  useSEO(location.pathname);

  return (
    <>
      <TopNav />
      <main>
        <Outlet />
      </main>
      <BottomNav />
    </>
  );
}
