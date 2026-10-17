import AppPanel, { Row } from '@/components/fragments/AppPanel';
import Block, { Blocks } from '@/components/page/Block';
import Faqs from '@/components/page/Faqs';
import PageHero from '@/components/page/PageHero';
import PageShell from '@/components/page/PageShell';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata(
  '/platform/marks-and-reports',
  'Marks and report cards',
  'Weighted term marks, your own ZIMSEC and Cambridge grading scales, aggregates, report cards, pass rates and pupils at risk in Tendao.'
);

export default function MarksPage() {
  return (
    <PageShell>
      <PageHero
        title="Bring the marks together before the reports go home."
        visual={
          <AppPanel title="Mathematics term mark" meta="Form 4 Blue · Example">
            <Row label="Coursework 90 × 30%" value="27.0" />
            <Row label="Exam 50 × 70%" value="35.0" />
            <Row label="Term mark" value="62" strong />
          </AppPanel>
        }
      >
        <p>
          Teachers enter marks for the groups they teach. Tendao weighs them the
          way your school does, grades them on your scales and puts them on the
          report card.
        </p>
      </PageHero>

      <Blocks>
        <Block title="Weights your school sets.">
          <p>
            For each subject, set out how the term mark is made: exam,
            practical, coursework and continuous assessment, with weights that
            must add up to 100. Tendao will not save a syllabus whose weights do
            not.
          </p>
          <p>
            The example above uses made-up weights. They are not ZIMSEC’s or
            Cambridge’s rules.
          </p>
        </Block>

        <Block title="Grading scales that match yours.">
          <p>
            Build the scales your school grades on, with letter bands, points
            and pass marks. Tie a scale to ZIMSEC or Cambridge, or keep it as
            your own, and choose which years it covers.
          </p>
          <p>
            Aggregates work the way you count them: the best six units at Grade
            7, five passes including English and Mathematics, or a points total
            at A Level.
          </p>
        </Block>

        <Block
          title="Report cards, one pupil to a page."
          visual={
            <AppPanel title="Report card" meta="Grade 7 · Term 2 · Example">
              <Row label="Average" value="78%" />
              <Row label="Position in class" value="3rd of 28" />
              <Row label="Aggregate" value="8 units" strong />
            </AppPanel>
          }
        >
          <p>
            Report cards show each subject, the average, the position in class
            and the aggregate. The office adds the form teacher’s comment while
            the card is a draft, then publishes it to the family.
          </p>
          <p>
            Print the whole class at once, one card per page. A correction is
            drafted beside the published card, so nothing changes in front of a
            parent until it is ready.
          </p>
        </Block>

        <Block title="See who needs help, and record what you did.">
          <p>
            Heads and teachers see pass rates by subject and paper, and can
            compare two sets of the same subject.
          </p>
          <p>
            Tendao lists the pupils who are falling behind: marks below the pass
            band, or attendance below the line your school sets. Staff note what
            the school did about each one. Families do not see those notes.
          </p>
        </Block>

        <Block title="Take the term’s marks with you.">
          <p>
            An administrator can download a whole term’s marks as a spreadsheet:
            every pupil, subject, component, weight and mark.
          </p>
        </Block>
      </Blocks>

      <Faqs
        items={[
          {
            question: 'Does Tendao come with the ZIMSEC and Cambridge scales?',
            answer: (
              <p>
                You set up the scales your school uses, and we can help you do
                it during setup. Tendao is not endorsed by ZIMSEC or Cambridge.
              </p>
            ),
          },
          {
            question: 'Can teachers write a comment for each subject?',
            answer: (
              <p>
                Not yet. Each report card has one form-teacher comment, added by
                the office before the card is published.
              </p>
            ),
          },
          {
            question: 'Do primary and secondary report cards look different?',
            answer: (
              <p>
                They share one layout, built from the subjects, scales and
                aggregate your school sets up.
              </p>
            ),
          },
        ]}
      />
    </PageShell>
  );
}
