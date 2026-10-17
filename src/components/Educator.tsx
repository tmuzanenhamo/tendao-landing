import type { ReactNode } from 'react';
import AppPanel from './fragments/AppPanel';

// Only what is on Tendao's main branch (#406): the teacher assistant, marking
// help, and the pupils' tutors, which are for secondary pupils only. Nothing
// here may claim more than the app does.

function Asked({ children }: { children: ReactNode }) {
  return (
    <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-sky-600 px-3 py-2 text-white">
      {children}
    </p>
  );
}

function Answered({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-[85%] rounded-2xl rounded-bl-sm bg-gray-100 px-3 py-2">
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
                Get a suggested mark and feedback for a photo of handed-in work.
                You check it and save the mark yourself.
              </li>
            </ul>
            <AppPanel title="Ask Tendao" className="mt-8 w-full max-w-[22rem]">
              <div className="space-y-2">
                <Asked>
                  Who in Form 4 Blue has not handed in Quadratic equations?
                </Asked>
                <Answered>
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
              A tutor set up by their teacher
            </h3>
            <ul className="mt-5 max-w-[30rem] space-y-2 text-ink-muted">
              <li>
                A teacher sets up a tutor for a class’s subject, or for one
                piece of work.
              </li>
              <li>
                It works through a problem step by step, and does not give away
                the answers to work that is marked.
              </li>
              <li>Pupils can send a photo of their working.</li>
              <li>
                Their teacher can read every conversation, and anything worrying
                is marked for them.
              </li>
            </ul>
            <AppPanel
              title="Mathematics tutor"
              meta="Form 2 Blue"
              className="mt-8 w-full max-w-[22rem]"
            >
              <div className="space-y-2">
                <Asked>How do I start 3x + 5 = 20?</Asked>
                <Answered>
                  Start by taking 5 from both sides. What does that leave you
                  with?
                </Answered>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Your teacher can read these conversations.
              </p>
            </AppPanel>
          </article>
        </div>
      </div>
    </section>
  );
}
