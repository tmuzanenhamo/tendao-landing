import type { ReactNode } from 'react';

export default function Faqs({
  title = 'Questions schools ask',
  items,
}: {
  title?: string;
  items: { question: string; answer: ReactNode }[];
}) {
  return (
    <section className="bg-chalk py-16 sm:py-20">
      <div className="mx-auto max-w-page px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
          {title}
        </h2>
        <div className="mt-8 max-w-[48rem] divide-y divide-ink/10 border-y border-ink/10">
          {items.map((item) => (
            <details key={item.question} className="group py-1">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden
                  className="text-2xl leading-none text-blazer transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="max-w-prose space-y-3 pb-5 text-ink-muted">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
