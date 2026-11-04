import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/page/PageShell';
import { mainNav } from '@/site.config';

export const metadata: Metadata = {
  // Next.js marks its 404 responses noindex itself.
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <PageShell>
      <section className="bg-chalk py-16 sm:py-24">
        <div className="mx-auto max-w-page px-4 sm:px-6">
          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-[-0.02em] sm:text-5xl">
            We can’t find that page.
          </h1>
          <p className="mt-6 max-w-prose text-lg text-ink-muted">
            It may have moved, or the link may be mistyped. These pages might
            help:
          </p>
          <ul className="mt-6 space-y-2 font-semibold">
            <li>
              <Link href="/" className="underline underline-offset-4">
                Home
              </Link>
            </li>
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="underline underline-offset-4">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
