import Link from 'next/link';
import type { ReactNode } from 'react';

// One thing the page has to say: a heading and its explanation, with the
// part of the app it is about beside it when there is one to show.
export default function Block({
  title,
  children,
  visual,
  more,
}: {
  title: string;
  children: ReactNode;
  visual?: ReactNode;
  more?: { href: string; label: string };
}) {
  const body = (
    <>
      <div className="max-w-prose space-y-3 text-ink-muted">{children}</div>
      {more && (
        <Link href={more.href} className="btn-quiet mt-4 px-0">
          {more.label}
        </Link>
      )}
    </>
  );
  const heading = (
    <h2 className="max-w-[26ch] font-display text-3xl font-bold leading-tight tracking-[-0.01em] sm:text-4xl">
      {title}
    </h2>
  );

  // With a picture, the text and the picture share the row. Without one, the
  // heading takes the left column and the text the right, so a wide screen
  // is not half empty.
  return (
    <section className="grid grid-cols-1 gap-x-16 gap-y-4 border-t border-ink/10 py-12 first:border-t-0 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
      {visual ? (
        <>
          <div>
            {heading}
            <div className="mt-4">{body}</div>
          </div>
          <div className="mt-4 max-w-[26rem] lg:mt-0 lg:pt-2">{visual}</div>
        </>
      ) : (
        <>
          {heading}
          <div className="lg:pt-2">{body}</div>
        </>
      )}
    </section>
  );
}

/** The column the blocks of a page sit in. */
export function Blocks({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-page px-4 py-8 sm:px-6 sm:py-12">
      {children}
    </div>
  );
}
