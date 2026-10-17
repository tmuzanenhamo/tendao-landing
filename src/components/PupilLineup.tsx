'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { pupils } from '@/content/pupils';

const TALLEST = Math.max(...pupils.map((pupil) => pupil.height));
// The chosen pupil grows by this much from their feet.
const ACTIVE_SCALE = 1.04;
// The tallest pupil fills only this share of the row, so when chosen they
// still fit with a little room above: the row scrolls sideways from md up,
// and a scroll box clips whatever rises above it too, which cut off the
// Upper 6 pupil's head.
const ROW_SHARE = 98 / ACTIVE_SCALE;
const STEP_MS = 3000;
// How long the line-up waits after somebody stops pointing before it carries on.
const RESUME_MS = 4000;

function randomOther(current: string, phone: boolean) {
  const others = pupils.filter(
    (pupil) => pupil.slug !== current && (!phone || pupil.onPhone)
  );
  return others[Math.floor(Math.random() * others.length)].slug;
}

export default function PupilLineup() {
  const [selected, setSelected] = useState('form-4-girl');
  const [userControlled, setUserControlled] = useState(false);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [phone, setPhone] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout>>();

  const pupil = pupils.find((each) => each.slug === selected) ?? pupils[0];

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(query.matches);
    const onChange = () => setReducedMotion(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px)');
    setPhone(query.matches);
    const onChange = () => setPhone(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  // Only cycle while the line-up is on screen.
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !visible || reducedMotion) return;
    const timer = setInterval(() => {
      setUserControlled(false);
      setSelected((current) => randomOther(current, phone));
    }, STEP_MS);
    return () => clearInterval(timer);
  }, [paused, visible, reducedMotion, phone]);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  function pause() {
    clearTimeout(resumeTimer.current);
    setPaused(true);
  }

  function resumeSoon() {
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_MS);
  }

  function choose(slug: string) {
    pause();
    setUserControlled(true);
    setSelected(slug);
  }

  return (
    <div
      ref={root}
      onMouseLeave={resumeSoon}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) resumeSoon();
      }}
      className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-end"
    >
      <div className="pb-2 md:overflow-x-auto">
        <ul
          className="flex items-end justify-between gap-1 border-b-2 border-ink/80 md:min-w-[46rem]"
          aria-label="Pupils from ECD to Upper 6"
        >
          {pupils.map((each) => {
            const active = each.slug === selected;
            return (
              <li
                key={each.slug}
                className={`h-[16rem] flex-1 items-end justify-center sm:h-[19rem] md:flex lg:h-[21rem] ${each.onPhone ? 'flex' : 'hidden'}`}
              >
                <button
                  type="button"
                  aria-pressed={active}
                  aria-controls="pupil-record"
                  onClick={() => choose(each.slug)}
                  onMouseEnter={() => choose(each.slug)}
                  onFocus={() => choose(each.slug)}
                  className="group relative flex h-full w-full cursor-pointer items-end justify-center rounded-t-md focus-visible:outline-offset-[-2px]"
                >
                  <Image
                    src={`/people/${each.slug}.webp`}
                    alt={each.alt}
                    width={each.width}
                    height={1300}
                    sizes="(min-width: 1024px) 140px, 110px"
                    style={{
                      height: `${(each.height / TALLEST) * ROW_SHARE}%`,
                      transform: active ? `scale(${ACTIVE_SCALE})` : undefined,
                    }}
                    className={`w-auto max-w-none origin-bottom transition duration-500 ease-out ${active ? '' : 'opacity-80 saturate-[.55] group-hover:opacity-100 group-hover:saturate-100'}`}
                  />
                  <span className="sr-only">
                    {each.name}, {each.year}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <ol className="mt-2 flex justify-between gap-1 md:min-w-[46rem]">
          {pupils.map((each) => (
            <li
              key={each.slug}
              aria-hidden
              className={`flex-1 text-center text-sm transition-colors duration-500 md:block ${each.onPhone ? '' : 'hidden'} ${each.slug === selected ? 'font-semibold text-blazer' : 'text-ink-muted'}`}
            >
              {each.year}
            </li>
          ))}
        </ol>
      </div>

      {/* Announced only when somebody chose the pupil; the automatic
          changes every few seconds would otherwise talk over everything. */}
      <div
        id="pupil-record"
        aria-live={userControlled ? 'polite' : 'off'}
        className="lg:pb-8"
      >
        <div key={pupil.slug} className="record-in">
          <p className="font-display text-2xl font-bold">
            {pupil.name}, {pupil.year}
          </p>
          <p className="mb-4 text-ink-muted">
            {pupil.phase === 'Primary' ? 'Primary school' : 'Secondary school'}
          </p>
          {pupil.record}
        </div>
      </div>
    </div>
  );
}
