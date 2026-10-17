import Link from 'next/link';
import Block, { Blocks } from '@/components/page/Block';
import Faqs from '@/components/page/Faqs';
import PageShell from '@/components/page/PageShell';
import { pageMetadata } from '@/lib/page-metadata';
import { bookHref } from '@/site.config';

export const metadata = pageMetadata(
  '/pricing',
  'Pricing',
  'Tendao costs from $3 per pupil, per term. See what the price covers and what to ask about in your school’s quote.'
);

export default function PricingPage() {
  return (
    <PageShell>
      <section className="bg-khaki-soft py-12 sm:py-24">
        <div className="mx-auto grid max-w-page items-center gap-10 px-4 sm:px-6 lg:grid-cols-[auto_1fr] lg:gap-20">
          <p className="font-display text-ink">
            <span className="block text-xl font-bold text-khaki-deep">
              From as little as
            </span>
            <span className="block text-[6.5rem] font-extrabold tabular-nums leading-none tracking-[-0.03em] sm:text-[8.5rem]">
              $3
            </span>
            <span className="mt-2 block text-2xl font-bold">
              per pupil, per term
            </span>
          </p>
          <div className="max-w-[34rem]">
            <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Pricing around the school you run.
            </h1>
            <p className="mt-4 text-lg text-ink-muted">
              You pay for the pupils you have, term by term. Larger schools get
              a price built around them. Tell us about yours and we’ll write you
              a quote.
            </p>
            <Link href={bookHref} className="btn-primary mt-8">
              Ask for a quote
            </Link>
          </div>
        </div>
      </section>

      <Blocks>
        <Block title="What the price covers.">
          <p>
            Every part of Tendao for every member of your school: registers,
            homework, marks, report cards, fees and receipts, and parent access.
          </p>
          <p>
            The AI help for teachers and pupils is included too, within the
            daily and monthly limits that keep the price fixed.
          </p>
        </Block>

        <Block title="What to ask about in your quote.">
          <ul className="list-disc space-y-2 pl-5">
            <li>How pupils are counted, and when the invoice is raised.</li>
            <li>Help with setting up and bringing in your roll.</li>
            <li>
              Texts by SMS and WhatsApp, which are off until your school turns
              them on, and what they cost.
            </li>
            <li>What happens when pupils join or leave during a term.</li>
            <li>Support, and how to reach us.</li>
          </ul>
          <p>Your written quote should answer each of these.</p>
        </Block>
      </Blocks>

      <Faqs
        items={[
          {
            question: 'Is $3 the price for every school?',
            answer: (
              <p>
                It is where prices start. Your quote sets the price for your
                school.
              </p>
            ),
          },
          {
            question: 'Is the AI extra?',
            answer: (
              <p>
                No. It is part of the per-pupil price, with usage limits. It
                stays off until your school switches it on.
              </p>
            ),
          },
          {
            question: 'Can we try it first?',
            answer: (
              <p>
                Book a walkthrough and we’ll show you Tendao with example
                records. Ask us then about starting with your school.
              </p>
            ),
          },
        ]}
      />
    </PageShell>
  );
}
