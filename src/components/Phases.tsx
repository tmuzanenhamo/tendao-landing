import Image from 'next/image';
import AppPanel, { Row } from './fragments/AppPanel';

export default function Phases() {
  return (
    <section id="phases" className="scroll-mt-8 py-20 sm:py-28">
      <div className="mx-auto max-w-page px-4 sm:px-6">
        <h2 className="max-w-[18ch] font-display text-4xl font-bold leading-tight tracking-[-0.01em] sm:text-5xl">
          Built for how primary and secondary schools really run.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-ink/10 lg:grid-cols-2">
          <article className="relative bg-khaki-soft px-6 pb-10 pt-8 sm:px-10">
            <p className="font-display text-lg font-bold text-khaki-deep">
              Primary school
            </p>
            <h3 className="mt-1 font-display text-3xl font-bold">
              ECD to Grade 7
            </h3>
            <ul className="mt-5 max-w-[30rem] space-y-2 text-ink-muted">
              <li>
                A class is taught as one group, so the class teacher enters
                every subject from one list.
              </li>
              <li>
                Report cards print one page per pupil, ready to send home.
              </li>
              <li>Grade against ZIMSEC scales.</li>
            </ul>
            <div className="mt-8 flex items-end gap-6">
              <Image
                src="/people/grade-7-girl.webp"
                alt="A Grade 7 girl in a sky-blue dress and navy jersey"
                width={386}
                height={1300}
                className="h-56 w-auto shrink-0 sm:h-64"
              />
              <AppPanel
                title="Chipo Mutasa"
                meta="Grade 7 · Term 2"
                className="mb-2 w-full max-w-[17rem]"
              >
                <Row label="English" value="74" />
                <Row label="Mathematics" value="81" />
                <Row label="Shona" value="88" />
              </AppPanel>
            </div>
          </article>

          <article className="relative bg-maroon-soft px-6 pb-10 pt-8 sm:px-10">
            <p className="font-display text-lg font-bold text-maroon">
              Secondary school
            </p>
            <h3 className="mt-1 font-display text-3xl font-bold">
              Form 1 to Upper 6
            </h3>
            <ul className="mt-5 max-w-[30rem] space-y-2 text-ink-muted">
              <li>
                Teaching groups, A Level sets and subject combinations, so marks
                and work reach the right pupils.
              </li>
              <li>
                ZIMSEC and Cambridge grading scales side by side in one school.
              </li>
              <li>
                Mark sheets go out and come back as spreadsheets, with centre
                and candidate numbers.
              </li>
            </ul>
            <div className="mt-8 flex items-end gap-6">
              <Image
                src="/people/upper-6-boy.webp"
                alt="An Upper 6 student in a maroon blazer carrying a file"
                width={421}
                height={1300}
                className="h-56 w-auto shrink-0 sm:h-64"
              />
              <AppPanel
                title="Tatenda Banda"
                meta="Upper 6 · Cambridge A Level"
                className="mb-2 w-full max-w-[17rem]"
              >
                <Row label="Mathematics" value="U6 Maths A" />
                <Row label="Physics" value="U6 Physics" />
                <Row label="Chemistry" value="U6 Chem B" />
              </AppPanel>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
