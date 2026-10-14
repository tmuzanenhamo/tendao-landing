'use client';

import Image from 'next/image';
import { useState } from 'react';
import { pupils } from '@/content/pupils';

const TALLEST = Math.max(...pupils.map((pupil) => pupil.height));

export default function PupilLineup() {
  const [selected, setSelected] = useState('form-4-girl');
  const pupil = pupils.find((each) => each.slug === selected) ?? pupils[0];

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-end">
      <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
        <ul
          className="flex min-w-[46rem] items-end justify-between gap-1 border-b-2 border-ink/80"
          aria-label="Pupils from ECD to Upper 6"
        >
          {pupils.map((each, index) => {
            const active = each.slug === selected;
            return (
              <li
                key={each.slug}
                className="step-in flex h-[16rem] flex-1 items-end justify-center sm:h-[19rem] lg:h-[21rem]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <button
                  type="button"
                  aria-pressed={active}
                  aria-controls="pupil-record"
                  onClick={() => setSelected(each.slug)}
                  onMouseEnter={() => setSelected(each.slug)}
                  onFocus={() => setSelected(each.slug)}
                  className="group relative flex h-full w-full cursor-pointer items-end justify-center rounded-t-md focus-visible:outline-offset-[-2px]"
                >
                  <Image
                    src={`/people/${each.slug}.webp`}
                    alt={each.alt}
                    width={each.width}
                    height={1300}
                    sizes="(min-width: 1024px) 140px, 110px"
                    style={{ height: `${(each.height / TALLEST) * 100}%` }}
                    className={`w-auto max-w-none transition duration-200 ${active ? '' : 'opacity-80 saturate-[.55] group-hover:opacity-100 group-hover:saturate-100'}`}
                  />
                  <span className="sr-only">
                    {each.name}, {each.year}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <ol className="mt-2 flex min-w-[46rem] justify-between gap-1">
          {pupils.map((each) => (
            <li
              key={each.slug}
              aria-hidden
              className={`flex-1 text-center text-sm ${each.slug === selected ? 'font-semibold text-blazer' : 'text-ink-muted'}`}
            >
              {each.year}
            </li>
          ))}
        </ol>
      </div>

      <div id="pupil-record" aria-live="polite" className="lg:pb-8">
        <p className="font-display text-2xl font-bold">
          {pupil.name}, {pupil.year}
        </p>
        <p className="mb-4 text-ink-muted">
          {pupil.phase === 'Primary' ? 'Primary school' : 'Secondary school'}
        </p>
        {pupil.record}
      </div>
    </div>
  );
}
