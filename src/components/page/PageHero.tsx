import Link from 'next/link';
import type { ReactNode } from 'react';
import { bookHref } from '@/site.config';

export default function PageHero({
  title,
  children,
  visual,
  action = { href: bookHref, label: 'Book a walkthrough' },
}: {
  title: string;
  /** The paragraph or two under the headline. */
  children: ReactNode;
  /** Shown beside the text from the desktop width, and under it on a phone. */
  visual?: ReactNode;
  action?: { href: string; label: string } | null;
}) {
  return (
    <section className="bg-chalk py-16 sm:py-24">
      <div
        className={`mx-auto grid max-w-page gap-12 px-4 sm:px-6 ${visual ? 'lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center lg:gap-16' : ''}`}
      >
        <div>
          <h1 className="max-w-[20ch] font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-6xl">
            {title}
          </h1>
          <div className="mt-6 max-w-[38rem] space-y-4 text-lg leading-relaxed text-ink-muted sm:text-xl">
            {children}
          </div>
          {action && (
            <Link href={action.href} className="btn-primary mt-8">
              {action.label}
            </Link>
          )}
        </div>
        {visual && <div>{visual}</div>}
      </div>
    </section>
  );
}
