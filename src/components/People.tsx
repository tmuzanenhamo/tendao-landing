import Image from 'next/image';

const people = [
  {
    slug: 'head',
    width: 378,
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
    width: 418,
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
    width: 390,
    role: 'Teachers',
    alt: 'A teacher in a mustard blouse holding an open mark book',
    points: [
      'Write the term’s scheme of work and tick topics off as you teach them.',
      'Set work with attachments and short videos, and mark what comes back.',
      'Enter marks for your groups, and the term mark works itself out.',
    ],
  },
  {
    slug: 'parent',
    width: 418,
    role: 'Parents',
    alt: 'A father in a checked shirt smiling at his phone',
    points: [
      'See each child’s work exactly as the child sees it.',
      'Check the fee statement without phoning the office.',
      'Get a text by SMS or WhatsApp when work is marked.',
    ],
  },
];

export default function People() {
  return (
    <section id="people" className="scroll-mt-8 bg-chalk py-14 sm:py-28">
      <div className="mx-auto max-w-page px-4 sm:px-6">
        <h2 className="max-w-[20ch] font-display text-4xl font-bold leading-tight tracking-[-0.01em] sm:text-5xl">
          Each person gets their own view of the school day.
        </h2>

        {/* On a phone each person sits beside their own points, so four
            tall portraits stacked one above the next do not read as four
            screens of empty space. */}
        <ul className="mt-8 grid gap-x-8 gap-y-8 sm:mt-14 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-4">
          {people.map((person) => (
            <li
              key={person.slug}
              className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-start gap-x-4 sm:block"
            >
              <div className="row-span-2 flex h-40 items-end justify-center border-b-2 border-ink/80 sm:h-80">
                <Image
                  src={`/people/${person.slug}.webp`}
                  alt={person.alt}
                  width={person.width}
                  height={1300}
                  sizes="(min-width: 640px) 110px, 60px"
                  className="h-full w-auto"
                />
              </div>
              <h3 className="font-display text-2xl font-bold sm:mt-5">
                {person.role}
              </h3>
              <ul className="mt-2 space-y-2 text-ink-muted sm:mt-3">
                {person.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
