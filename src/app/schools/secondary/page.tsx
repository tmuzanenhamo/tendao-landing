import Image from 'next/image';
import AppPanel, { Row } from '@/components/fragments/AppPanel';
import Block, { Blocks } from '@/components/page/Block';
import Faqs from '@/components/page/Faqs';
import PageHero from '@/components/page/PageHero';
import PageShell from '@/components/page/PageShell';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata(
  '/schools/secondary',
  'Secondary schools, Form 1 to Upper 6',
  'Subject teachers, teaching groups, A Level combinations, ZIMSEC and Cambridge grading, report cards, fees and AI tutors for Zimbabwean secondary schools.'
);

export default function SecondaryPage() {
  return (
    <PageShell>
      <PageHero
        title="Subject teachers, teaching groups and pupils, connected."
        visual={
          <div className="flex items-end gap-6">
            <Image
              src="/people/upper-6-boy.webp"
              alt="An Upper 6 student in a maroon blazer carrying a file"
              width={421}
              height={1300}
              className="h-64 w-auto shrink-0"
            />
            <AppPanel
              title="Tatenda Banda"
              meta="Upper 6 · Example"
              className="mb-2 w-full max-w-[15rem]"
            >
              <Row label="Mathematics" value="U6 Maths set A" />
              <Row label="Physics" value="U6 Physics" />
              <Row label="Chemistry" value="U6 Chem set B" />
            </AppPanel>
          </div>
        }
      >
        <p>
          From Form 1 to Upper 6, each subject is taught to its own group.
          Marks, homework and the register follow the group, so they reach the
          right pupils.
        </p>
      </PageHero>

      <Blocks>
        <Block title="Teaching groups and A Level sets.">
          <p>
            A teaching group can draw pupils from several classes, as A Level
            sets do. Set up the subject combinations your sixth form offers
            alongside them.
          </p>
        </Block>

        <Block title="Each teacher, their own groups.">
          <p>
            Subject teachers take the register, set work and enter marks for the
            groups they teach, and only those. Administrators can see across the
            school.
          </p>
        </Block>

        <Block
          title="ZIMSEC and Cambridge, side by side."
          more={{
            href: '/platform/marks-and-reports',
            label: 'Marks and reports',
          }}
        >
          <p>
            Set up a ZIMSEC scale for O Level and a Cambridge scale for A Level
            in the same school, each with its own bands, points and pass rules.
            Weight the exam, practical and coursework the way your school does.
          </p>
        </Block>

        <Block title="Pass rates by subject and paper.">
          <p>
            Compare two sets of the same subject, find the pupils who are
            falling behind and record what the school did about each one.
          </p>
        </Block>

        <Block
          title="A tutor for every subject they take."
          more={{ href: '/ai', label: 'How the tutors work' }}
        >
          <p>
            When the school switches the AI on, each teaching group gets a tutor
            that knows the subject, this term’s scheme of work and the teacher’s
            materials. Pupils can send a photo of their working.
          </p>
          <p>
            The group’s teacher and the school’s administrators can read every
            conversation, and pupils are told so.
          </p>
        </Block>
      </Blocks>

      <Faqs
        items={[
          {
            question: 'Does Tendao send results to ZIMSEC or Cambridge?',
            answer: (
              <p>
                No. Tendao keeps your school’s own marks and grades. Exam
                entries and results still go through the boards’ own systems.
              </p>
            ),
          },
          {
            question: 'Will Lower 6 and Upper 6 show by those names?',
            answer: <p>Inside Tendao they show as Form 5 and Form 6.</p>,
          },
        ]}
      />
    </PageShell>
  );
}
