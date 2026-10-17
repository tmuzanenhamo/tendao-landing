import Block, { Blocks } from '@/components/page/Block';
import { pageMetadata } from '@/lib/page-metadata';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { site, walkthroughHref } from '@/site.config';

export const metadata = pageMetadata(
  '/book-a-walkthrough',
  'Book a walkthrough',
  'See Tendao with your school in mind. Ask for a walkthrough for your head, bursar and teachers on WhatsApp or by email.'
);

const emailHref = `mailto:${site.email}?subject=${encodeURIComponent('A Tendao walkthrough for our school')}`;

// This page is where every "Book a walkthrough" lands, so it ends with the
// footer alone rather than another invitation to book.
export default function BookPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="bg-blazer py-16 text-white sm:py-24">
          <div className="mx-auto max-w-page px-4 sm:px-6">
            <h1 className="max-w-[20ch] font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-6xl">
              See Tendao with your school in mind.
            </h1>
            <p className="mt-6 max-w-[38rem] text-lg text-white/85 sm:text-xl">
              Tell us about your school and what you want to see. We’ll reply to
              find a time, and walk your team through Tendao with example
              records.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={walkthroughHref}
                className="inline-flex min-h-12 items-center rounded-md bg-white px-6 font-semibold text-blazer transition-colors hover:bg-blazer-soft"
              >
                Ask on WhatsApp
              </a>
              <a
                href={emailHref}
                className="inline-flex min-h-12 items-center font-semibold underline decoration-khaki decoration-2 underline-offset-[6px] hover:decoration-white"
              >
                Or email {site.email}
              </a>
            </div>
            <p className="mt-6 max-w-[38rem] text-sm text-white/70">
              Sending a message asks for a walkthrough. We’ll confirm the time
              with you before it is booked.
            </p>
          </div>
        </section>

        <Blocks>
          <Block title="Tell us three things.">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Your school’s name, and whether it is primary, secondary or
                both.
              </li>
              <li>Roughly how many pupils you have.</li>
              <li>
                What you most want to sort out: marks, fees, homework, the
                register, or the AI help.
              </li>
            </ul>
            <p>
              Please don’t send pupils’ names, marks or fee records. We don’t
              need them to show you Tendao.
            </p>
          </Block>

          <Block title="Bring the people who will use it.">
            <p>
              A head, a bursar and a teacher each see a different part of
              Tendao. Bring whoever runs the work you want to change.
            </p>
          </Block>

          <Block title="What we can cover.">
            <ul className="list-disc space-y-2 pl-5">
              <li>The register and pupil records.</li>
              <li>Marks, grading scales and report cards.</li>
              <li>Homework, marking and schemes of work.</li>
              <li>Fees, receipts and balances.</li>
              <li>What parents see.</li>
              <li>The AI help, and the controls the school keeps.</li>
              <li>Getting started, and your quote.</li>
            </ul>
          </Block>

          <Block title="Bring an example if you have one.">
            <p>
              A blank mark sheet, your fee structure or last term’s report card
              helps us show you how your own school would look in Tendao.
            </p>
          </Block>
        </Blocks>
      </main>
      <SiteFooter />
    </>
  );
}
