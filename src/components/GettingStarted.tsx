import Link from 'next/link';
const steps = [
  {
    title: 'Bring your roll',
    body: 'Add all your pupils and parents at once from a spreadsheet.',
  },
  {
    title: 'Make it yours',
    body: 'Your school gets its own Tendao, with your name on it. Your records stay private to your school.',
  },
  {
    title: 'Set up your year',
    body: 'Add your terms, classes, subjects and grading scales. Changes are kept in an activity log the head can read.',
  },
];

export default function GettingStarted() {
  return (
    <section className="py-14 sm:py-28">
      <div className="mx-auto max-w-page px-4 sm:px-6">
        <h2 className="max-w-[20ch] font-display text-4xl font-bold leading-tight tracking-[-0.01em] sm:text-5xl">
          Starting is three steps, not a term of data entry.
        </h2>
        <ol className="mt-8 grid gap-10 sm:mt-14 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t-4 border-blazer pt-5">
              <p className="font-display text-5xl font-extrabold text-blazer/25">
                {index + 1}
              </p>
              <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-ink-muted">{step.body}</p>
            </li>
          ))}
        </ol>
        <Link href="/getting-started" className="btn-quiet mt-10 px-0">
          What to prepare before you start
        </Link>
      </div>
    </section>
  );
}
