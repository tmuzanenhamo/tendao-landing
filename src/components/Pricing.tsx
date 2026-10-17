import Link from 'next/link';
import { bookHref } from '@/site.config';
import ShimmerOnView from './ShimmerOnView';

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-8 bg-khaki-soft py-14 sm:py-24">
      <div className="mx-auto grid max-w-page items-center gap-10 px-4 sm:px-6 lg:grid-cols-[auto_1fr] lg:gap-20">
        <p className="font-display text-ink">
          <span className="block text-xl font-bold text-khaki-deep">
            From as little as
          </span>
          <span className="block text-[6.5rem] font-extrabold tabular-nums leading-none tracking-[-0.03em] sm:text-[8.5rem]">
            <ShimmerOnView>$3</ShimmerOnView>
          </span>
          <span className="mt-2 block text-2xl font-bold">
            per pupil, per term
          </span>
        </p>
        <div className="max-w-[34rem]">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            Pricing that fits your school.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Larger schools get a price built around them. Talk to us and we’ll
            find what works for yours.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={bookHref} className="btn-primary">
              Book a walkthrough
            </Link>
            <Link href="/pricing" className="btn-quiet">
              How pricing works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
