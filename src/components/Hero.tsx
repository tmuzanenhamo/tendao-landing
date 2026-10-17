import Image from 'next/image';
import Link from 'next/link';
import { bookHref } from '@/site.config';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#ECECEA] pt-28 lg:flex lg:min-h-[44rem] lg:items-center lg:pt-0">
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
        <div className="max-w-[34rem] pb-16 lg:max-w-[31rem] lg:py-32">
          <h1 className="shimmer-once font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-[4rem]">
            Your whole school day, in one place.
          </h1>
          <p className="mt-6 max-w-[30rem] text-lg leading-relaxed text-ink-muted sm:text-xl">
            From ECD to Upper&nbsp;6, Tendao brings marks, fees, attendance and
            homework together, and parents can follow their child’s work and
            fees from their phone.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={bookHref} className="btn-primary">
              Book a walkthrough
            </Link>
            <a href="#day" className="btn-quiet px-1 sm:px-4">
              See a school day
            </a>
          </div>
          <p className="mt-5 text-ink-muted">
            From as little as{' '}
            <Link
              href="/pricing"
              className="font-semibold text-ink underline decoration-khaki decoration-2 underline-offset-4 hover:decoration-blazer"
            >
              $3 per pupil, per term
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
