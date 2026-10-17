import Block, { Blocks } from '@/components/page/Block';
import PageHero from '@/components/page/PageHero';
import PageShell from '@/components/page/PageShell';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata(
  '/for-teachers',
  'For teachers',
  'Schemes of work, homework with files and videos, marking, registers, pupils at risk and AI help that leaves the final say with the teacher.'
);

export default function TeachersPage() {
  return (
    <PageShell>
      <PageHero title="Keep the work around teaching in one place.">
        <p>
          Plan the term, set the work, mark what comes back and see who is
          falling behind, for the groups you teach.
        </p>
      </PageHero>

      <Blocks>
        <Block title="Plan the term.">
          <p>
            Write the scheme of work for each group and tick topics off as you
            teach them. Pupils and parents can see the plan too.
          </p>
        </Block>

        <Block title="Set the work.">
          <p>
            Write the questions, attach a PDF, a picture, a Word, Excel or
            PowerPoint file, or a short video. Choose when it opens: until then,
            pupils cannot see the questions.
          </p>
        </Block>

        <Block title="Mark what comes back.">
          <p>
            Pupils hand in a photo or a file, with a note. Late work is marked
            as late. Give a score and feedback, and the pupil and their parent
            are told it has been marked.
          </p>
        </Block>

        <Block title="Take the register.">
          <p>
            Mark your groups present or absent from a phone or a laptop. The
            office sees it straight away.
          </p>
        </Block>

        <Block title="See who is slipping.">
          <p>
            Pass rates by subject and paper, and a list of pupils whose marks or
            attendance have fallen. Note what you did about each one.
          </p>
        </Block>

        <Block
          title="Ask for a first draft."
          more={{ href: '/ai', label: 'How the AI help works' }}
        >
          <p>
            If your school switches the AI on, ask about your classes in plain
            words, draft a revision assignment, or get a suggested mark and
            feedback for photographed work.
          </p>
          <p>
            Nothing it writes is saved until you check it and save it yourself.
            The mark is always yours.
          </p>
        </Block>
      </Blocks>
    </PageShell>
  );
}
