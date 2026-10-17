import AppPanel from './fragments/AppPanel';

// Only what is on Tendao's main branch (#406): the teacher assistant, marking
// help on the marking page, and the pupils' tutors. Tutors are for secondary
// pupils, at a school that has switched the AI on, one for each subject group
// whose teacher has not switched it off. What the tutor is told to do is
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
          ? 'ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-sky-700 px-3 py-2 text-white'
          : 'max-w-[85%] rounded-2xl rounded-bl-sm bg-gray-100 px-3 py-2'
      }
    >
      <span className="sr-only">{who}: </span>
      {children}
    </p>
  );
}

export default function Educator() {
  return (
    <section id="educator" className="scroll-mt-8 bg-chalk py-20 sm:py-28">
      <div className="mx-auto max-w-page px-4 sm:px-6">
        <h2 className="max-w-[20ch] font-display text-4xl font-bold leading-tight tracking-[-0.01em] sm:text-5xl">
          AI help for teachers, and an AI tutor pupils can ask.
        </h2>
        <p className="mt-4 max-w-prose text-ink-muted">
          Each school decides whether to switch it on.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-ink/10 lg:grid-cols-2">
          <article className="bg-blazer-soft px-6 pb-10 pt-8 sm:px-10">
            <p className="font-display text-lg font-bold text-blazer">
              For teachers
            </p>
            <h3 className="mt-1 font-display text-3xl font-bold">Ask Tendao</h3>
            <ul className="mt-5 max-w-[30rem] space-y-2 text-ink-muted">
              <li>
                Ask about your own classes: who has not handed in, who is
                falling behind, how a group did this term, and how far the
                scheme of work has got.
              </li>
              <li>
                Ask for an assignment to be drafted. It opens in the usual form
                for you to change and set.
              </li>
              <li>
                On the marking page, get a suggested mark and feedback for a
                photo of handed-in work. You check it and save the mark
                yourself.
              </li>
            </ul>
            <figure className="mt-8 w-full max-w-[22rem]">
              <AppPanel title="Ask Tendao">
                <div className="space-y-2">
                  <Bubble who="Teacher" asking>
                    Who in Form 4 Blue has not handed in Quadratic equations?
                  </Bubble>
                  <Bubble who="Tendao" asking={false}>
                    Two pupils have not handed it in yet: Farai Moyo and Kuda
                    Banda.
                  </Bubble>
                </div>
              </AppPanel>
              <figcaption className="mt-2 text-xs text-ink-muted">
                An example question.
              </figcaption>
            </figure>
          </article>

          <article className="bg-maroon-soft px-6 pb-10 pt-8 sm:px-10">
            <p className="font-display text-lg font-bold text-maroon">
              For pupils, Form 1 to Upper 6
            </p>
            <h3 className="mt-1 font-display text-3xl font-bold">
              An AI tutor for their subjects
            </h3>
            <ul className="mt-5 max-w-[30rem] space-y-2 text-ink-muted">
              <li>
                A tutor for each subject they take, unless their teacher
                switches it off. The teacher can also add their own
                instructions.
              </li>
              <li>
                It follows the class’s scheme of work for the term, where the
                teacher has written one.
              </li>
              <li>
                It is told to help pupils find the answer one step at a time,
                not to give it to them.
              </li>
              <li>Pupils can send a photo of their working.</li>
              <li>
                Their teacher and the school’s administrators can read every
                conversation. The tutor is told to flag a conversation for the
                teacher if a pupil seems unsafe.
              </li>
            </ul>
            <figure className="mt-8 w-full max-w-[22rem]">
              <AppPanel
                title="Mathematics tutor"
                notice="Your teacher can read these conversations."
              >
                <div className="space-y-2">
                  <Bubble who="Pupil" asking>
                    How do I solve 3x + 5 = 20?
                  </Bubble>
                  <Bubble who="Tutor" asking={false}>
                    Show me what you have tried so far, and we will check it one
                    step at a time.
                  </Bubble>
                </div>
              </AppPanel>
              <figcaption className="mt-2 text-xs text-ink-muted">
                An example question.
              </figcaption>
            </figure>
          </article>
        </div>
      </div>
    </section>
  );
}
