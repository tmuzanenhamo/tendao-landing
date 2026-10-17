import Link from 'next/link';
import AppPanel, { Chip } from './fragments/AppPanel';

// Only what is on Tendao's main branch (#406): the teacher assistant, marking
// help on the marking page, and the pupils' tutors. Tutors are for secondary
// pupils, at a school that has switched the AI on, one for each subject group
// whose tutor the school or its teacher has not switched off. What the tutor is told to do is
// worded as what it is told, not as a promise. Nothing here may claim more
// than the app does.

// Who is speaking is said in words as well as by colour and side, so a
// screen reader can tell the question from the answer.
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

export default function Educator() {
  return (
    <section id="educator" className="scroll-mt-8 bg-chalk py-14 sm:py-28">
      <div className="mx-auto max-w-page px-4 sm:px-6">
        <h2 className="max-w-[22ch] font-display text-4xl font-bold leading-tight tracking-[-0.01em] sm:text-5xl">
          A second pair of hands for teachers. A patient tutor for pupils.
        </h2>
        <p className="mt-4 max-w-prose text-ink-muted">
          Tendao already holds your classes: the marks, the hand-ins, the scheme
          of work. So teachers can simply ask, and pupils get help the moment
          they are stuck, not at the next lesson.
        </p>
        <Link href="/ai" className="btn-quiet mt-2 px-0">
          How the AI help works, and its limits
        </Link>

        <div className="mt-8 grid gap-px overflow-hidden rounded-xl bg-ink/10 sm:mt-14 lg:grid-cols-2">
          <article className="bg-blazer-soft px-6 pb-10 pt-8 sm:px-10">
            <p className="font-display text-lg font-bold text-blazer">
              For teachers
            </p>
            <h3 className="mt-1 font-display text-3xl font-bold">
              Ask Tendao. Get a straight answer.
            </h3>
            <ul className="mt-5 max-w-[30rem] space-y-2 text-ink-muted">
              <li>
                Who has not handed in? Who is slipping? How far behind is the
                scheme of work? Ask in plain words, and get the answer from your
                own classes.
              </li>
              <li>
                Turn a gap into a revision assignment in seconds. It opens in
                your usual form, ready to change and set.
              </li>
              <li>
                Marking a pile of photographed work? Get a suggested mark and
                feedback for each one, then check it and save it yourself.
              </li>
            </ul>
            <figure className="mt-8 w-full max-w-[24rem]">
              <AppPanel title="Ask Tendao">
                <div className="space-y-2">
                  <Bubble who="Teacher" asking>
                    Who is falling behind in Form 4 Blue maths?
                  </Bubble>
                  <Bubble who="Tendao" asking={false}>
                    Two pupils have been below the pass mark two terms running:
                    Chiedza Sibanda (44, then 41) and Tapiwa Gumbo (47, then
                    39).
                  </Bubble>
                  <Bubble who="Teacher" asking>
                    Draft a revision assignment on simultaneous equations.
                  </Bubble>
                  <Bubble who="Tendao" asking={false}>
                    Here is a draft with six questions, easiest first.
                  </Bubble>
                  <p className="pt-1">
                    <span className="inline-flex rounded-md bg-amber-300 px-3 py-1 font-semibold">
                      Open in the assignment form
                    </span>
                  </p>
                </div>
              </AppPanel>
              <figcaption className="mt-2 text-xs text-ink-muted">
                An example conversation.
              </figcaption>
            </figure>
          </article>

          <article className="bg-maroon-soft px-6 pb-10 pt-8 sm:px-10">
            <p className="font-display text-lg font-bold text-maroon">
              For pupils, Form 1 to Upper 6
            </p>
            <h3 className="mt-1 font-display text-3xl font-bold">
              A tutor that knows what they are learning this week.
            </h3>
            <ul className="mt-5 max-w-[30rem] space-y-2 text-ink-muted">
              <li>
                One for every subject they take, briefed on the class’s scheme
                of work and on anything their teacher adds.
              </li>
              <li>
                Stuck on a question? Send a photo of the working, and it points
                to the first line that went wrong.
              </li>
              <li>
                It coaches. It is told never to do their homework for them.
              </li>
              <li>
                Teachers and school administrators can read every conversation,
                and the tutor is told to flag a pupil who seems unsafe.
              </li>
            </ul>
            <figure className="mt-8 w-full max-w-[24rem]">
              <AppPanel
                title="Mathematics tutor"
                notice="Your teacher and the school’s administrators can read these conversations."
              >
                <div className="space-y-2">
                  <p className="ml-auto w-fit">
                    <Chip tone="sky">Photo of my working</Chip>
                  </p>
                  <Bubble who="Pupil" asking>
                    I keep getting y = 7 but the answer says 3.
                  </Bubble>
                  <Bubble who="Tutor" asking={false}>
                    Your first two lines are right. On line 3 you took 2y away
                    instead of adding it. Try that line again: what do you get?
                  </Bubble>
                </div>
              </AppPanel>
              <figcaption className="mt-2 text-xs text-ink-muted">
                An example conversation.
              </figcaption>
            </figure>
          </article>
        </div>
      </div>
    </section>
  );
}
