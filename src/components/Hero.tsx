import Image from 'next/image';
import { walkthroughHref } from '@/site.config';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#ECECEA] pt-24 lg:flex lg:min-h-[44rem] lg:items-center lg:pt-0">
      <div className="absolute inset-y-0 right-0 hidden w-[62%] lg:block">
        <Image
          src="/hero-classroom.jpg"
          alt="A Form 4 pupil in a green blazer works on his assignments in Tendao while a teacher helps two classmates behind him"
          fill
          priority
          sizes="62vw"
          className="object-cover object-[78%_center]"
        />
        {/* The photo's own wall is close to the page's grey, so a short fade
            joins them without a visible edge. */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#ECECEA] to-transparent"
        />
      </div>

      <div className="relative mx-auto w-full max-w-page px-4 sm:px-6">
        <div className="max-w-[34rem] pb-10 lg:max-w-[31rem] lg:py-32">
          <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-[4rem]">
            Every pupil, from ECD to Upper&nbsp;6, in one register.
          </h1>
          <p className="mt-6 max-w-[30rem] text-lg leading-relaxed text-ink-muted sm:text-xl">
            Tendao keeps marks, fees, attendance and homework for the whole
            school in one place, and parents hear from the school by SMS and
            WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={walkthroughHref} className="btn-primary">
              Book a walkthrough
            </a>
            <a href="#day" className="btn-quiet">
              See a school day
            </a>
          </div>
          <p className="mt-5 text-ink-muted">
            From as little as{' '}
            <a
              href="#pricing"
              className="font-semibold text-ink underline decoration-khaki decoration-2 underline-offset-4 hover:decoration-blazer"
            >
              $5 per pupil, per term
            </a>
            .
          </p>
        </div>
      </div>

      <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:hidden">
        <Image
          src="/hero-classroom.jpg"
          alt="A Form 4 pupil in a green blazer works on his assignments in Tendao while a teacher helps two classmates behind him"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center]"
        />
      </div>
    </section>
  );
}
