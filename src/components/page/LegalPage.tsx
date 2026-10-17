import Link from 'next/link';
import type { ReactNode } from 'react';
import { company, Field, isDraft } from '@/legal/details';
import PageShell from './PageShell';

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <PageShell>
      <article className="mx-auto max-w-page px-4 py-16 sm:px-6 sm:py-20">
        <h1 className="font-display text-4xl font-extrabold leading-tight tracking-[-0.02em] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-ink-muted">
          Effective date: <Field name="EFFECTIVE_DATE" />
          <br />
          Version: <Field name="POLICY_VERSION" />
        </p>
        {isDraft ? (
          <p
            role="note"
            className="mt-6 max-w-prose rounded-md border border-khaki bg-khaki-soft px-4 py-3 text-ink"
          >
            This is a draft and is not yet in force. Details marked “to be
            confirmed” are still being settled.
          </p>
        ) : (
          <p className="mt-6 max-w-prose text-sm text-ink-muted">
            We are reviewing this document with Zimbabwean legal advisers. Any
            changes will be published here with a new version number and
            effective date, with notice where it is required.
          </p>
        )}
        <div className="legal mt-10 max-w-[44rem] text-ink-muted">
          {children}
        </div>
        <p className="mt-12 max-w-prose text-sm text-ink-muted">
          Tendao is provided by {company.name}, company number {company.number},{' '}
          {company.address}. See also our{' '}
          <Link href="/terms" className="underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>
          .
        </p>
      </article>
    </PageShell>
  );
}
