import Block, { Blocks } from '@/components/page/Block';
import PageHero from '@/components/page/PageHero';
import PageShell from '@/components/page/PageShell';
import { pageMetadata } from '@/lib/page-metadata';
import { site } from '@/site.config';

export const metadata = pageMetadata(
  '/trust',
  'Your school’s data',
  'How Tendao keeps each school’s records separate, who can see what, how sign-in works, what the activity log records, and how the AI uses school data.'
);

export default function TrustPage() {
  return (
    <PageShell>
      <PageHero
        title="How your school’s records are kept."
        action={{ href: `mailto:${site.email}`, label: 'Ask us a question' }}
      >
        <p>
          Before your school moves its records into Tendao, you should know who
          can see them, how they are kept apart from other schools’, and what
          happens when the AI is switched on.
        </p>
      </PageHero>

      <Blocks>
        <Block title="Your school’s records stay your school’s.">
          <p>
            Each school has its own Tendao address. The database itself keeps
            every school’s records apart, not just the app, so a request made
            for one school cannot read another school’s rows.
          </p>
        </Block>

        <Block title="Each person sees what their role needs.">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Administrators run the school’s setup: grading, report cards,
              imports, settings and the activity log.
            </li>
            <li>Bursars work with fees, invoices and payments.</li>
            <li>
              Teachers work with the groups they teach: registers, homework,
              marks and schemes of work.
            </li>
            <li>Pupils see their own work, marks and fees.</li>
            <li>Parents see their own children’s.</li>
          </ul>
        </Block>

        <Block title="Signing in.">
          <p>
            Passwords are stored scrambled, never as written. Too many wrong
            passwords lock the account. A password reset code lasts thirty
            minutes.
          </p>
        </Block>

        <Block title="A record of who changed what.">
          <p>
            The activity log records sign-ins, payments and reversals, invoices,
            mark changes, grading changes, published report cards, password
            resets and imported people. Only the school’s administrators can
            read it.
          </p>
        </Block>

        <Block title="Mistakes are corrected, not erased.">
          <p>
            A payment is reversed rather than deleted, an invoice is cancelled
            with a reason, and a report card is corrected beside the published
            one. The history stays.
          </p>
        </Block>

        <Block
          title="When the AI is switched on."
          more={{ href: '/ai', label: 'How the AI help works' }}
        >
          <p>
            The AI is off until an administrator turns it on. When it is on, the
            question and the class information needed to answer it are sent to
            Anthropic, which makes Claude.
          </p>
          <p>
            The AI can only read what the person asking could already see.
            Pupils’ tutor conversations can be read by their teacher and the
            school’s administrators, and pupils are told so.
          </p>
        </Block>

        <Block title="Questions to ask us.">
          <p>
            We’ll answer these in writing for your school: where your records
            are kept, how they are backed up, how you can take them with you if
            you leave, and how long they are kept.
          </p>
        </Block>
      </Blocks>
    </PageShell>
  );
}
