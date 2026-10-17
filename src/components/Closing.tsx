import Image from 'next/image';
import { site, walkthroughHref } from '@/site.config';
import SiteFooter from './SiteFooter';

export default function Closing() {
  return (
    <>
      <section className="relative overflow-hidden bg-blazer text-white">
        <div className="mx-auto grid max-w-page items-end gap-10 px-4 pt-20 sm:px-6 lg:grid-cols-[1fr_auto]">
          <div className="pb-20">
            <h2 className="max-w-[16ch] font-display text-4xl font-bold leading-tight tracking-[-0.01em] sm:text-5xl">
              See Tendao with your own school in mind.
            </h2>
            <p className="mt-4 max-w-[34rem] text-lg text-white/85">
              We’ll walk your head, bursar and a teacher through a school day in
              Tendao, and answer questions about your classes, fees and exams.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={walkthroughHref}
                className="inline-flex min-h-12 items-center rounded-md bg-white px-6 font-semibold text-blazer transition-colors hover:bg-blazer-soft"
              >
                Book a walkthrough on WhatsApp
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-12 items-center font-semibold underline decoration-khaki decoration-2 underline-offset-[6px] hover:decoration-white"
              >
                Or email {site.email}
              </a>
            </div>
          </div>
          <div aria-hidden className="hidden items-end gap-1 lg:flex">
            {['grade-3-boy', 'teacher', 'form-1-boy'].map((slug, index) => (
              <Image
                key={slug}
                src={`/people/${slug}.webp`}
                alt=""
                width={420}
                height={1300}
                className={`w-auto ${['h-56', 'h-[19rem]', 'h-[17rem]'][index]}`}
              />
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
