import { Outlet } from 'react-router';
import { TopNav } from './TopNav';
import { BottomNav } from './BottomNav';

export function Layout() {
  return (
    <>
      <TopNav />
      <Outlet />
      <BottomNav />
    </>
  );
}
