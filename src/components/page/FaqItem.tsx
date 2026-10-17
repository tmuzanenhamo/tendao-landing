'use client';

import { Plus } from 'lucide-react';
import { useId, useState, type ReactNode } from 'react';

// One question and its answer. The answer's height animates by moving its
// grid row between 0fr and 1fr, which needs no measuring and follows the
// content when the text wraps differently. The answer stays in the page
// while closed so it can animate shut, and `inert` keeps it out of reach
// until it is open.
export default function FaqItem({
  question,
  children,
}: {
  question: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="py-1">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-answer`}
          onClick={() => setOpen((was) => !was)}
          className="flex min-h-12 w-full items-center justify-between gap-4 py-3 text-left text-lg font-semibold"
        >
          {question}
          <Plus
            aria-hidden
            className={`h-6 w-6 shrink-0 text-blazer transition-transform duration-300 ease-out ${open ? 'rotate-45' : ''}`}
          />
        </button>
      </h3>
      <div
        id={`${id}-answer`}
        role="region"
        aria-label={question}
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="max-w-prose space-y-3 pb-5 text-ink-muted">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
