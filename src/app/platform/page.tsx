import AppPanel, { Chip, Row } from '@/components/fragments/AppPanel';
import Block, { Blocks } from '@/components/page/Block';
import PageHero from '@/components/page/PageHero';
import PageShell from '@/components/page/PageShell';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata(
  '/platform',
  'The platform',
  'Attendance, homework, marks, report cards, fees and parent access for Zimbabwean primary and secondary schools, all from the same pupil records.'
);

export default function PlatformPage() {
  return (
    <PageShell>
      <PageHero title="One place for the records your school uses every day.">
        <p>
          Tendao is built around the pupil. Enter them once, and the register,
          the homework, the marks, the report card and the fee statement all
          know who they are.
        </p>
      </PageHero>

      <Blocks>
        <Block title="Start with your roll.">
          <p>
            Bring pupils, guardians and staff in from a spreadsheet. Tendao
            shows you what it found before anything is saved, so you can fix a
            duplicate or a full class first.
          </p>
          <p>
            Then set up your terms, classes, subjects and teaching groups. A
            class teacher can teach the whole class, and secondary subjects can
            be taught in groups that mix classes.
          </p>
        </Block>

        <Block
          title="Take the register where the lesson is."
          visual={
            <AppPanel title="Register" meta="Form 2 Green · Wed 14 Oct">
              <Row
                label="Chari, Rufaro"
                value={<Chip tone="green">Present</Chip>}
              />
              <Row
                label="Gumbo, Simba"
                value={<Chip tone="amber">Absent</Chip>}
              />
              <Row
                label="Mpofu, Ruvimbo"
                value={<Chip tone="green">Present</Chip>}
              />
            </AppPanel>
          }
        >
          <p>
            A teacher marks their group present or absent from a phone or a
            laptop. The office sees the same register, and so do parents.
          </p>
          <p>
            Teachers can only mark the groups they teach. Administrators can
            mark any.
          </p>
        </Block>

        <Block title="Set work, and see what comes back.">
          <p>
            Write the questions, attach worksheets, slides or a short video, and
            choose when the work opens. Pupils cannot see the questions before
            then.
          </p>
          <p>
            Pupils hand in a photo or a file. Late hand-ins are marked as late.
            When the teacher marks the work, the pupil and their parent are
            told.
          </p>
        </Block>

        <Block
          title="Marks that add up the way your school adds them."
          more={{
            href: '/platform/marks-and-reports',
            label: 'Marks and reports',
          }}
        >
          <p>
            Coursework, practicals and exams combine into the term mark using
            the weights your school sets. Grading scales, aggregates and pass
            rules are yours to set up, ZIMSEC and Cambridge side by side.
          </p>
          <p>
            Report cards show the average, the position in class and the
            aggregate, and print one pupil to a page.
          </p>
        </Block>

        <Block
          title="The bursar’s records, connected to the pupil."
          more={{ href: '/platform/fees', label: 'Fees and receipts' }}
        >
          <p>
            Set fees for each year group and term, raise the invoices in one go,
            record payments and print receipts. Every balance is worked out from
            the payments themselves.
          </p>
        </Block>

        <Block
          title="Parents see what their child sees."
          more={{ href: '/for-parents', label: 'Tendao for parents' }}
        >
          <p>
            A parent signs in to see each child’s work, published report cards,
            attendance and fee statement. When the school switches it on, they
            also get a text by SMS or WhatsApp when work is marked.
          </p>
        </Block>

        <Block
          title="AI help, when your school switches it on."
          more={{ href: '/ai', label: 'How the AI help works' }}
        >
          <p>
            Teachers can ask about their classes, draft an assignment and get a
            suggested mark for photographed work. Secondary pupils get a tutor
            for each subject. It is off until the school turns it on.
          </p>
        </Block>

        <Block
          title="A record of who changed what."
          more={{ href: '/trust', label: 'Your school’s data' }}
        >
          <p>
            Sign-ins, payments, mark changes, grading changes and published
            report cards are kept in an activity log that the school’s
            administrators can read.
          </p>
        </Block>
      </Blocks>
    </PageShell>
  );
}
