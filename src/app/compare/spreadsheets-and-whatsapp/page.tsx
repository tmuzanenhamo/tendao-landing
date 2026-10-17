import Block, { Blocks } from '@/components/page/Block';
import PageHero from '@/components/page/PageHero';
import PageShell from '@/components/page/PageShell';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata(
  '/compare/spreadsheets-and-whatsapp',
  'Tendao or spreadsheets and WhatsApp?',
  'An honest comparison of running a school on spreadsheets and WhatsApp groups with running it on Tendao, including what Tendao does not do.'
);

const rows = [
  {
    task: 'The pupil list',
    before:
      'A copy for the office, one per teacher, and one for the bursar, each kept up to date by hand.',
    tendao: 'One roll. The register, marks, homework and fees all use it.',
  },
  {
    task: 'The register',
    before: 'Paper or a sheet per class, collected by the office.',
    tendao: 'Taken on a phone. The office and parents see it straight away.',
  },
  {
    task: 'Term marks',
    before: 'Formulas in a workbook, copied between versions.',
    tendao:
      'Weights and grading scales set once, and term marks worked out the same way for everybody.',
  },
  {
    task: 'Fees',
    before: 'A receipt book and a ledger that have to agree.',
    tendao:
      'Invoices, payments and receipts in one place, with balances worked out from the payments.',
  },
  {
    task: 'Telling parents',
    before:
      'Class WhatsApp groups. Quick, but notices get lost in the chatter.',
    tendao:
      'Announcements in Tendao, and a text when work is marked. Parents cannot reply in Tendao.',
  },
  {
    task: 'Without internet',
    before: 'A spreadsheet works offline.',
    tendao: 'Tendao needs a connection. It does not work offline.',
  },
  {
    task: 'Cost',
    before: 'Already paid for, plus the staff time it takes.',
    tendao: 'From $3 per pupil, per term.',
  },
];

export default function ComparePage() {
  return (
    <PageShell>
      <PageHero title="When separate lists start making extra work.">
        <p>
          Spreadsheets and WhatsApp are familiar, quick and already paid for.
          Plenty of schools run well on them. The trouble starts when the same
          pupil is typed into five places and the copies stop agreeing.
        </p>
      </PageHero>

      <Blocks>
        <div className="overflow-x-auto py-6">
          <table className="w-full min-w-[40rem] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-ink/80">
                <th scope="col" className="w-40 py-3 pr-6">
                  Task
                </th>
                <th scope="col" className="py-3 pr-6">
                  Spreadsheets and WhatsApp
                </th>
                <th scope="col" className="py-3">
                  Tendao
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.task} className="border-b border-ink/10 align-top">
                  <th scope="row" className="py-3 pr-6 font-semibold">
                    {row.task}
                  </th>
                  <td className="py-3 pr-6 text-ink-muted">{row.before}</td>
                  <td className="py-3">{row.tendao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Block title="Keep what works.">
          <p>
            You don’t have to give up everything at once. Bring the task that
            causes the most trouble today to your walkthrough, and compare it in
            Tendao before you decide.
          </p>
        </Block>
      </Blocks>
    </PageShell>
  );
}
