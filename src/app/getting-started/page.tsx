import Block, { Blocks } from '@/components/page/Block';
import PageHero from '@/components/page/PageHero';
import PageShell from '@/components/page/PageShell';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata(
  '/getting-started',
  'Getting started',
  'What to prepare before your school starts with Tendao: your roll, your year, your grading and the people who will use it.'
);

const steps = [
  {
    title: 'Bring the right people.',
    body: 'A head, a bursar and a teacher each run a different part of the school day. Bring the people whose work you want to move into Tendao first.',
  },
  {
    title: 'Get your roll ready.',
    body: 'Pupils, guardians and staff come in from a spreadsheet, guardians first so each pupil can be linked to theirs. You see a preview before anything is saved.',
  },
  {
    title: 'Set up your year.',
    body: 'Add your terms, classes, subjects and teaching groups, then your grading scales and the weights for each subject. Changes go into the activity log.',
  },
  {
    title: 'Give everyone a way in.',
    body: 'Your school gets its own Tendao address with its name in it. An administrator gives each teacher, bursar and parent their sign-in.',
  },
  {
    title: 'Set up your fees.',
    body: 'Enter each year group’s fees for the term and raise the invoices. Opening balances do not come in with the roll, so agree how to bring them in with your bursar.',
  },
  {
    title: 'Run one real week.',
    body: 'Take the register, set some homework and record a few payments, then check what a parent sees. Fix anything that looks wrong before the whole school starts.',
  },
];

export default function GettingStartedPage() {
  return (
    <PageShell>
      <PageHero title="Starting is a few steps, not a term of data entry.">
        <p>
          Bring the records you already keep. This is what to prepare, in the
          order that works.
        </p>
      </PageHero>

      <Blocks>
        <ol className="grid gap-10 py-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t-4 border-blazer pt-5">
              <p className="font-display text-5xl font-extrabold text-blazer/25">
                {index + 1}
              </p>
              <h2 className="mt-2 text-xl font-bold">{step.title}</h2>
              <p className="mt-2 text-ink-muted">{step.body}</p>
            </li>
          ))}
        </ol>

        <Block
          title="Before you import a spreadsheet."
          more={{
            href: '/getting-started/pupil-roll',
            label: 'Getting your pupil roll ready',
          }}
        >
          <p>
            A clean roll saves the most time. Our guide lists the columns Tendao
            reads and the mistakes worth fixing first.
          </p>
        </Block>
      </Blocks>
    </PageShell>
  );
}
