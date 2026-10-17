import FaqItem from './FaqItem';
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
            <FaqItem key={item.question} question={item.question}>
              {item.answer}
            </FaqItem>
          ))}
        </div>
      </div>
    </section>
  );
}
