import type { ReactNode } from 'react';
import AppPanel from './fragments/AppPanel';

// Only what is on Tendao's main branch (#406): the teacher assistant, marking
// help on the marking page, and the pupils' tutors, which every secondary
// pupil has for each subject group and nobody has to create. Nothing here may
// claim more than the app does.

// Who is speaking is said in words as well as by colour and side, so a
// screen reader can tell the question from the answer.
function Asked({ who, children }: { who: string; children: ReactNode }) {
  return (
    <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-sky-700 px-3 py-2 text-white">
      <span className="sr-only">{who}: </span>
      {children}
    </p>
  );
}

function Answered({ who, children }: { who: string; children: ReactNode }) {
  return (
    <p className="max-w-[85%] rounded-2xl rounded-bl-sm bg-gray-100 px-3 py-2">
      <span className="sr-only">{who}: </span>
      {children}
    </p>
  );
}

export default function Educator() {
  return (
    <section id="educator" className="scroll-mt-8 py-20 sm:py-28">
      <div className="mx-auto max-w-page px-4 sm:px-6">
        <h2 className="max-w-[20ch] font-display text-4xl font-bold leading-tight tracking-[-0.01em] sm:text-5xl">
          Help for teachers, and a tutor pupils can ask.
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
            <AppPanel title="Ask Tendao" className="mt-8 w-full max-w-[22rem]">
              <div className="space-y-2">
                <Asked who="Teacher">
                  Who in Form 4 Blue has not handed in Quadratic equations?
                </Asked>
                <Answered who="Tendao">
                  Two pupils have not handed it in yet: Farai Moyo and Kuda
                  Banda.
                </Answered>
              </div>
            </AppPanel>
          </article>

          <article className="bg-maroon-soft px-6 pb-10 pt-8 sm:px-10">
            <p className="font-display text-lg font-bold text-maroon">
              For pupils, Form 1 to Upper 6
            </p>
            <h3 className="mt-1 font-display text-3xl font-bold">
              A tutor for every subject they take
            </h3>
            <ul className="mt-5 max-w-[30rem] space-y-2 text-ink-muted">
              <li>
                Each tutor knows what the class is learning this term. The
                teacher can add their own instructions, or switch it off.
              </li>
              <li>
                It is told to help pupils find the answer one step at a time,
                not to give it to them.
              </li>
              <li>Pupils can send a photo of their working.</li>
              <li>
                Their teacher and the school office can read every conversation.
                If a pupil seems unsafe, the conversation is flagged for their
                teacher.
              </li>
            </ul>
            <div className="mt-8 w-full max-w-[22rem] overflow-hidden rounded-lg border border-gray-200 bg-white font-app text-sm text-gray-800 shadow-[0_1px_0_rgba(22,36,30,0.04)]">
              <p className="px-4 pt-4 text-[15px] font-semibold">
                Mathematics tutor
              </p>
              <p className="mt-3 border-y border-gray-100 bg-amber-50 px-4 py-2 text-xs text-amber-800">
                Your teacher can read these conversations.
              </p>
              <div className="space-y-2 p-4">
                <Asked who="Pupil">How do I solve 3x + 5 = 20?</Asked>
                <Answered who="Tutor">
                  Show me what you have tried so far, and we will check it one
                  step at a time.
                </Answered>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
