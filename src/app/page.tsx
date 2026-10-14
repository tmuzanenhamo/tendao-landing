import Closing from '@/components/Closing';
import GettingStarted from '@/components/GettingStarted';
import Hero from '@/components/Hero';
import People from '@/components/People';
import Pricing from '@/components/Pricing';
import Phases from '@/components/Phases';
import PupilLineup from '@/components/PupilLineup';
import SchoolDay from '@/components/SchoolDay';
import SiteHeader from '@/components/SiteHeader';

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-30 rounded-md bg-white px-4 py-2 font-semibold focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />

        <section id="pupils" className="scroll-mt-8 py-20 sm:py-28">
          <div className="mx-auto max-w-page px-4 sm:px-6">
            <h2 className="max-w-[22ch] font-display text-4xl font-bold leading-tight tracking-[-0.01em] sm:text-5xl">
              The four-year-old with a lunch box and the A Level student with a
              file.
            </h2>
            <p className="mb-12 mt-4 max-w-[38rem] text-ink-muted">
              Point at a pupil to see a piece of what Tendao keeps for them.
              Each one is something Tendao does today.
            </p>
            <PupilLineup />
          </div>
        </section>

        <SchoolDay />
        <Phases />
        <People />
        <GettingStarted />
        <Pricing />
      </main>
      <Closing />
    </>
  );
}
