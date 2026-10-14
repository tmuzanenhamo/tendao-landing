import { walkthroughHref } from '@/site.config';

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-8 bg-khaki-soft py-20 sm:py-24">
      <div className="mx-auto grid max-w-page items-center gap-10 px-4 sm:px-6 lg:grid-cols-[auto_1fr] lg:gap-20">
        <p className="font-display text-ink">
          <span className="block text-xl font-bold text-khaki-deep">
            From as little as
          </span>
          <span className="block text-[6.5rem] font-extrabold tabular-nums leading-none tracking-[-0.03em] sm:text-[8.5rem]">
            $5
          </span>
          <span className="mt-2 block text-2xl font-bold">
            per pupil, per term
          </span>
        </p>
        <div className="max-w-[34rem]">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            Priced per pupil, so it fits the size of your school.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            For a primary school of 400 pupils, that’s from $2,000 a term. Book
            a walkthrough and we’ll give you the price for your school.
          </p>
          <a href={walkthroughHref} className="btn-primary mt-8">
            Book a walkthrough
          </a>
        </div>
      </div>
    </section>
  );
}
