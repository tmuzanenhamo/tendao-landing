import type { ReactNode } from 'react';
import AppPanel, { Chip, Row } from './fragments/AppPanel';

type Beat = {
  time: string;
  who: string;
  title: string;
  body: string;
  shows: ReactNode;
};

const beats: Beat[] = [
  {
    time: '07:30',
    who: 'Class teacher',
    title: 'The register is taken',
    body: 'Mark the class present or absent from a phone or a laptop. The office sees the same register straight away.',
    shows: (
      <AppPanel title="Register" meta="Form 1 Blue · Tue 14 Oct">
        <Row
          label="Chikore, Tafadzwa"
          value={<Chip tone="green">Present</Chip>}
        />
        <Row
          label="Dube, Rumbidzai"
          value={<Chip tone="green">Present</Chip>}
        />
        <Row label="Moyo, Farai" value={<Chip tone="amber">Absent</Chip>} />
        <Row
          label="Ndlovu, Thandiwe"
          value={<Chip tone="green">Present</Chip>}
        />
      </AppPanel>
    ),
  },
  {
    time: '10:00',
    who: 'Pupils',
    title: 'Homework opens on time',
    body: 'Set work in advance with its questions, worksheets and short video clips. Pupils cannot see the questions until the start time.',
    shows: (
      <AppPanel title="Quadratic equations" meta="Opens 10:00">
        <p className="text-gray-600">Form 4 Blue · Mrs Ncube</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <Chip tone="sky">worked-examples.pdf</Chip>
          <Chip tone="sky">factorising.mp4</Chip>
        </div>
        <span className="mt-3 inline-flex rounded-md bg-amber-300 px-3 py-1 font-semibold">
          Hand in
        </span>
      </AppPanel>
    ),
  },
  {
    time: '13:00',
    who: 'Subject teacher',
    title: 'Marks go in once',
    body: 'Download the mark sheet as a spreadsheet, fill it in, and upload it back. Coursework and exams combine into the term mark using the weights your school sets.',
    shows: (
      <AppPanel title="Mark sheet" meta="Mathematics · Form 4 Blue">
        <div className="grid grid-cols-[1fr_auto_auto_auto] gap-x-4 gap-y-1.5 tabular-nums">
          <span className="text-xs text-gray-500">Pupil</span>
          <span className="text-xs text-gray-500">CA 30%</span>
          <span className="text-xs text-gray-500">Exam 70%</span>
          <span className="text-xs text-gray-500">Term</span>
          <span>Moyo, Tariro</span>
          <span>90</span>
          <span>50</span>
          <span className="font-semibold">62</span>
          <span>Banda, Kuda</span>
          <span>72</span>
          <span>68</span>
          <span className="font-semibold">69</span>
        </div>
      </AppPanel>
    ),
  },
  {
    time: '15:00',
    who: 'Bursar',
    title: 'Fees are paid and receipted',
    body: 'Record a payment by cash, bank transfer, mobile money or card. The receipt prints at once, and the balance updates for the bursar and the parent.',
    shows: (
      <AppPanel title="Receipt R-0412" meta="14 Oct 2026">
        <Row label="Pupil" value="Kudzai Mutasa, Grade 5" />
        <Row label="Method" value="Mobile money" />
        <Row label="Amount" value="$120.00" strong />
        <Row label="Balance for Term 3" value="$50.00" />
      </AppPanel>
    ),
  },
  {
    time: '18:00',
    who: 'Parents',
    title: 'Home hears about it',
    body: 'School messages and announcements reach parents by SMS and WhatsApp. A parent can open each child’s work and fee statement whenever they like.',
    shows: (
      <div className="font-app text-sm">
        <div className="max-w-[19rem] rounded-2xl rounded-bl-sm bg-green-50 px-4 py-3 text-gray-800">
          Form 4 parents’ evening is on Thursday 23 October at 14:00 in the
          school hall. You can see Tariro’s work in Tendao before you come.
          <p className="mt-1 text-right text-[11px] text-gray-500">18:02</p>
        </div>
        <p className="mt-2 text-xs text-white/60">Sent by SMS and WhatsApp</p>
      </div>
    ),
  },
];

export default function SchoolDay() {
  return (
    <section
      id="day"
      className="scroll-mt-8 bg-blazer-deep py-20 text-white sm:py-28"
    >
      <div className="mx-auto grid max-w-page gap-12 px-4 sm:px-6 lg:grid-cols-[18rem_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-12 lg:self-start">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-[-0.01em] sm:text-5xl">
            One school day, one system.
          </h2>
          <p className="mt-4 text-white/75">
            The register, the homework, the marks and the money all go into the
            same place, so nobody types the same pupil twice.
          </p>
        </div>

        <ol className="relative border-l-2 border-khaki pl-8 sm:pl-12">
          {beats.map((beat) => (
            <li
              key={beat.time}
              className="relative grid gap-6 pb-14 last:pb-0 md:grid-cols-[minmax(0,1fr)_20rem] md:gap-10"
            >
              <span
                aria-hidden
                className="absolute -left-[calc(2rem+7px)] top-3 h-3 w-3 rounded-full border-2 border-khaki bg-blazer-deep sm:-left-[calc(3rem+7px)]"
              />
              <div>
                <p className="font-display text-3xl font-bold tabular-nums text-khaki">
                  <time>{beat.time}</time>
                </p>
                <h3 className="mt-2 text-xl font-bold">{beat.title}</h3>
                <p className="text-sm font-semibold text-white/60">
                  {beat.who}
                </p>
                <p className="mt-3 max-w-prose text-white/80">{beat.body}</p>
              </div>
              <div>{beat.shows}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
