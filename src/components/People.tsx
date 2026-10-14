import Image from 'next/image';

const people = [
  {
    slug: 'head',
    role: 'Heads',
    alt: 'A headmistress in a charcoal suit',
    points: [
      'See pass rates by subject and paper, and compare two sets of the same subject.',
      'Find the pupils who are falling behind, and record what the school did about each one.',
      'See which schemes of work are behind.',
    ],
  },
  {
    slug: 'bursar',
    role: 'Bursars',
    alt: 'A bursar in a white shirt and tie holding a receipt book',
    points: [
      'Set fee structures and raise invoices in US dollars.',
      'Record cash, bank, mobile money and card payments, and print the receipt.',
      'See what has been collected this term, and what is still owed.',
    ],
  },
  {
    slug: 'teacher',
    role: 'Teachers',
    alt: 'A teacher in a mustard blouse holding an open mark book',
    points: [
      'Write the term’s scheme of work and tick topics off as you teach them.',
      'Set work with attachments and short videos, and mark what comes back.',
      'Download a mark sheet, fill it in, and upload it back.',
    ],
  },
  {
    slug: 'parent',
    role: 'Parents',
    alt: 'A father in a checked shirt smiling at his phone',
    points: [
      'See each child’s work exactly as the child sees it.',
      'Check the fee statement without phoning the office.',
      'Get school messages by SMS and WhatsApp.',
    ],
  },
];

export default function People() {
  return (
    <section id="people" className="scroll-mt-8 bg-chalk py-20 sm:py-28">
      <div className="mx-auto max-w-page px-4 sm:px-6">
        <h2 className="max-w-[20ch] font-display text-4xl font-bold leading-tight tracking-[-0.01em] sm:text-5xl">
          Everyone at the school signs in to the same place.
        </h2>
        <p className="mt-4 max-w-[36rem] text-ink-muted">
          Heads, bursars, teachers, parents and pupils each get the screens
          their role needs.
        </p>

        <ul className="mt-14 grid gap-x-14 lg:grid-cols-2">
          {people.map((person) => (
            <li
              key={person.slug}
              className="grid grid-cols-[6.5rem_1fr] gap-6 border-t border-ink/15 py-8 sm:grid-cols-[8rem_1fr]"
            >
              <div className="relative h-36 overflow-hidden rounded-md bg-white sm:h-44">
                <Image
                  src={`/people/${person.slug}.webp`}
                  alt={person.alt}
                  fill
                  sizes="8rem"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">
                  {person.role}
                </h3>
                <ul className="mt-3 space-y-2 text-ink-muted">
                  {person.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
