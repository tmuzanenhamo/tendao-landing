import Image from 'next/image';
import AppPanel, { Row } from '@/components/fragments/AppPanel';
import Block, { Blocks } from '@/components/page/Block';
import Faqs from '@/components/page/Faqs';
import PageHero from '@/components/page/PageHero';
import PageShell from '@/components/page/PageShell';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata(
  '/schools/primary',
  'Primary schools, ECD to Grade 7',
  'Registers, homework, marks, Grade 7 aggregates, report cards and fees for Zimbabwean primary schools, from ECD to Grade 7.'
);

export default function PrimaryPage() {
  return (
    <PageShell>
      <PageHero
        title="A clearer school day, from ECD to Grade 7."
        visual={
          <div className="flex items-end gap-6">
            <Image
              src="/people/grade-7-girl.webp"
              alt="A Grade 7 girl in a sky-blue dress and navy jersey"
              width={386}
              height={1300}
              className="h-64 w-auto shrink-0"
            />
            <AppPanel
              title="Chipo Mutasa"
              meta="Grade 7 · Example"
              className="mb-2 w-full max-w-[15rem]"
            >
              <Row label="English" value="74" />
              <Row label="Mathematics" value="81" />
              <Row label="Shona" value="88" />
            </AppPanel>
          </div>
        }
      >
        <p>
          Primary teachers teach their own class. Tendao is set up the same way,
          so the class teacher keeps the register, sets the homework and enters
          every subject’s marks from one class list.
        </p>
      </PageHero>

      <Blocks>
        <Block title="The class teacher’s class.">
          <p>
            Each class has its class teacher, and the class is taught as one
            group. Nobody rebuilds the same list of names for each subject.
          </p>
        </Block>

        <Block title="The register, from a phone.">
          <p>
            Mark the class present or absent from a phone or a laptop. The
            office and parents see the same register.
          </p>
        </Block>

        <Block title="Homework that opens on time.">
          <p>
            Set work with a worksheet or a short video and choose when it opens.
            Parents can see each child’s work exactly as the child sees it.
          </p>
        </Block>

        <Block
          title="Grade 7 aggregates, worked out for you."
          more={{
            href: '/platform/marks-and-reports',
            label: 'Marks and reports',
          }}
        >
          <p>
            Set up your grading scale and Tendao works out the aggregate the way
            you count it, such as the best six units. Report cards show the
            average, the position in class and the aggregate, and print one
            pupil to a page.
          </p>
        </Block>

        <Block
          title="Fees, receipts and balances."
          more={{ href: '/platform/fees', label: 'Fees and receipts' }}
        >
          <p>
            Fees for each grade and term, invoices in one go, a receipt for
            every payment, and a statement parents can check themselves.
          </p>
        </Block>
      </Blocks>

      <Faqs
        items={[
          {
            question: 'Do primary pupils get the AI tutor?',
            answer: (
              <p>
                No. Tutors are for secondary pupils only, from Form 1. A primary
                school’s teachers can still use the AI help for teachers, if the
                school switches it on.
              </p>
            ),
          },
          {
            question: 'We have ECD and Grade 1 to 7. Is that one school?',
            answer: (
              <p>
                Yes. ECD A and B and Grades 1 to 7 are all part of a primary
                school in Tendao. A school with both primary and secondary
                sections is set up as two, one for each.
              </p>
            ),
          },
        ]}
      />
    </PageShell>
  );
}
