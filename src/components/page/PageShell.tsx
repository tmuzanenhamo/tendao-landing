import type { ReactNode } from 'react';
import Closing from '@/components/Closing';
import SiteHeader from '@/components/SiteHeader';

// Every page past the home page: the header, the page, then the same
// invitation and footer the home page ends with.
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main">{children}</main>
      <Closing />
    </>
  );
}
