import AppPanel, { Chip } from '@/components/fragments/AppPanel';
import Block, { Blocks } from '@/components/page/Block';
import Faqs from '@/components/page/Faqs';
import PageHero from '@/components/page/PageHero';
import PageShell from '@/components/page/PageShell';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata(
  '/ai',
  'AI help for teachers and pupils',
  'Ask Tendao about your classes, draft assignments, get suggested marks, and give Form 1 to Upper 6 pupils a tutor for each subject, with teachers in charge.'
);

function Bubble({
  who,
  asking,
  children,
}: {
  who: string;
  asking: boolean;
  children: string;
}) {
  return (
    <p
      className={
        asking
          ? 'ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-sky-700 px-3 py-2 text-white'
          : 'w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-gray-100 px-3 py-2'
      }
    >
      <span className="sr-only">{who}: </span>
      {children}
    </p>
  );
}

export default function AiPage() {
  return (
    <PageShell>
      <PageHero
        title="A second pair of hands for teachers. A patient tutor for pupils."
        visual={
          <figure>
            <AppPanel title="Ask Tendao">
              <div className="space-y-2">
                <Bubble who="Teacher" asking>
                  Who in Form 4 Blue hasn’t handed in the quadratics homework?
                </Bubble>
                <Bubble who="Tendao" asking={false}>
                  Three pupils: Farai Moyo, Rudo Chari and Simba Gumbo. The work
                  closed on Monday.
                </Bubble>
              </div>
            </AppPanel>
            <figcaption className="mt-2 text-xs text-ink-muted">
              An example conversation.
            </figcaption>
          </figure>
        }
      >
        <p>
          Tendao already holds your classes: the marks, the hand-ins, the scheme
          of work. So the AI can answer from your school’s own records, and a
          pupil can get help the moment they are stuck.
        </p>
        <p>It stays off until your school switches it on.</p>
      </PageHero>

      <Blocks>
        <Block title="For teachers: ask in plain words.">
          <p>
            Who has not handed in? Which pupils are at risk? How far behind is
            the scheme of work? What are the pass rates? Tendao answers from the
            classes you teach, and only those.
          </p>
        </Block>

        <Block title="A first draft, never a final copy.">
          <p>
            Ask for a revision assignment and it opens in the usual assignment
            form, ready to change. Ask for help marking a photographed hand-in
            and you get a suggested mark and feedback.
          </p>
          <p>
            Nothing is saved until the teacher checks it and saves it. The mark
            is always the teacher’s.
          </p>
        </Block>

        <Block
          title="For pupils: a tutor for each subject."
          visual={
            <figure>
              <AppPanel
                title="Mathematics tutor"
                notice="Your teacher and the school’s administrators can read these conversations."
              >
                <div className="space-y-2">
                  <p className="ml-auto w-fit">
                    <Chip tone="sky">Photo of my working</Chip>
                  </p>
                  <Bubble who="Pupil" asking>
                    I moved the 5 across but now I’m stuck.
                  </Bubble>
                  <Bubble who="Tutor" asking={false}>
                    Your first line is right. What could you do to both sides to
                    leave x on its own?
                  </Bubble>
                </div>
              </AppPanel>
              <figcaption className="mt-2 text-xs text-ink-muted">
                An example conversation.
              </figcaption>
            </figure>
          }
        >
          <p>
            Pupils from Form 1 to Upper 6 get a tutor for each subject group
            they are in. It knows the subject, this term’s scheme of work, the
            topics covered so far and the teacher’s materials.
          </p>
          <p>
            Pupils can type a question or send a photo of their working. The
            tutor is told to coach them through it, one step at a time, and not
            to do their homework for them.
          </p>
        </Block>

        <Block title="Teachers stay in charge.">
          <p>
            A teacher can add instructions for a group’s tutor, or switch it off
            for the whole group or for one assignment.
          </p>
          <p>
            The group’s teacher and the school’s administrators can read every
            conversation, and pupils are told this on the screen. Parents cannot
            read them.
          </p>
        </Block>

        <Block title="What it cannot promise.">
          <p>
            AI can be wrong. The tutor is told to flag a conversation that
            worries it, and flagged conversations are listed first for teachers
            to read. That is an instruction to the AI, not a guarantee: it can
            miss things, and it does not alert anybody by itself.
          </p>
          <p>Primary and ECD pupils do not get a tutor.</p>
        </Block>

        <Block title="Limits that keep the cost fixed.">
          <p>
            The AI help is part of the per-pupil price. To keep it that way,
            each school has a monthly limit and each person a daily one, with a
            smaller one for pupils. An administrator can see how much the school
            has used this month.
          </p>
        </Block>
      </Blocks>

      <Faqs
        items={[
          {
            question: 'Who provides the AI?',
            answer: (
              <p>
                Tendao uses Claude, made by Anthropic. When the AI is switched
                on, the question and the class information needed to answer it
                are sent to Anthropic. The school’s settings page says so before
                an administrator turns it on.
              </p>
            ),
          },
          {
            question:
              'Can a pupil see another pupil’s marks through the tutor?',
            answer: (
              <p>
                No. The AI can only read what the person asking could already
                see in Tendao.
              </p>
            ),
          },
          {
            question: 'What happens when the limit is reached?',
            answer: (
              <p>
                The person sees a plain message saying they have reached the
                limit, and can ask again the next day, or next month for the
                school’s limit.
              </p>
            ),
          },
        ]}
      />
    </PageShell>
  );
}
