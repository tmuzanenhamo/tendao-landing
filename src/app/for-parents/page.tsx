import AppPanel, { Row } from '@/components/fragments/AppPanel';
import Block, { Blocks } from '@/components/page/Block';
import Faqs from '@/components/page/Faqs';
import PageHero from '@/components/page/PageHero';
import PageShell from '@/components/page/PageShell';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata(
  '/for-parents',
  'For parents',
  'How parents use Tendao to see each child’s schoolwork, report cards, attendance and fee statement.'
);

export default function ParentsPage() {
  return (
    <PageShell>
      <PageHero
        title="Know what is happening in your child’s school day."
        action={null}
        visual={
          <AppPanel title="Fee statement" meta="Term 3 · Example">
            <Row label="Tuition" value="$150.00" />
            <Row label="Sports levy" value="$20.00" />
            <Row label="Paid, mobile money" value="−$120.00" />
            <Row label="Balance" value="$50.00" strong />
          </AppPanel>
        }
      >
        <p>
          If your child’s school uses Tendao, you can see their work, their
          report cards and the fee statement from your phone, for every child
          you have there.
        </p>
      </PageHero>

      <Blocks>
        <Block title="See the work.">
          <p>
            Open each child’s homework exactly as they see it, with the mark and
            the teacher’s feedback once it has been marked.
          </p>
        </Block>

        <Block title="Check the fee statement.">
          <p>
            See each child’s invoices and payments and what is still owed,
            without waiting for the office. Print a receipt for any payment.
          </p>
        </Block>

        <Block title="Reports, attendance and the term’s plan.">
          <p>
            Read report cards once the school publishes them, check attendance,
            and see what each class will cover this term.
          </p>
        </Block>

        <Block title="Hear from the school.">
          <p>
            Announcements and messages from the school wait for you in Tendao.
            If the school has switched it on, you also get a text by SMS or
            WhatsApp when your child’s work is marked.
          </p>
        </Block>
      </Blocks>

      <Faqs
        title="Questions parents ask"
        items={[
          {
            question: 'How do I sign in?',
            answer: (
              <p>
                Your school gives you your sign-in. If you forget your password,
                the school office can give you a new code, or, if your school
                sends texts, you can ask for one by SMS.
              </p>
            ),
          },
          {
            question: 'Can I reply to a message from the school?',
            answer: (
              <p>Not in Tendao. Contact the school the way you usually do.</p>
            ),
          },
          {
            question: 'Something on my statement looks wrong.',
            answer: (
              <p>
                Talk to the school office. Your school keeps its own records in
                Tendao, and only the school can correct them.
              </p>
            ),
          },
          {
            question: 'Can I pay fees in Tendao?',
            answer: (
              <p>
                No. Pay the school as you do now. The bursar records your
                payment, and it appears on your statement.
              </p>
            ),
          },
        ]}
      />
    </PageShell>
  );
}
