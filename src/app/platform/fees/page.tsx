import AppPanel, { Chip, Row } from '@/components/fragments/AppPanel';
import Block, { Blocks } from '@/components/page/Block';
import Faqs from '@/components/page/Faqs';
import PageHero from '@/components/page/PageHero';
import PageShell from '@/components/page/PageShell';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata(
  '/platform/fees',
  'Fees, receipts and balances',
  'Fee structures, invoices, recorded payments, receipts and balances for Zimbabwean schools, with collections and overdue lists for the bursar.'
);

export default function FeesPage() {
  return (
    <PageShell>
      <PageHero
        title="Know what was billed, what was paid and what is still owed."
        visual={
          <AppPanel title="Fee statement" meta="Kudzai Mutasa · Grade 5">
            <Row label="INV-000318 Tuition, Term 3" value="$150.00" />
            <Row label="INV-000318 Sports levy" value="$20.00" />
            <Row label="RCT-000412 Mobile money" value="−$120.00" />
            <Row label="Balance" value="$50.00" strong />
            <p className="pt-2">
              <Chip tone="amber">Partly paid</Chip>
            </p>
          </AppPanel>
        }
      >
        <p>
          Invoices, payments, receipts and balances stay with each pupil, so the
          bursar, the head and the parent are all looking at the same numbers.
        </p>
      </PageHero>

      <Blocks>
        <Block title="Set the fees once a term.">
          <p>
            Give each year group its fees for the term: tuition, levies,
            whatever your school charges. Then raise every pupil’s invoice in
            one go, or a one-off invoice for a single pupil.
          </p>
          <p>
            An invoice keeps the names and amounts it was issued with, so
            changing next term’s fees never rewrites this term’s bills.
          </p>
        </Block>

        <Block title="Record how the parent paid.">
          <p>
            Cash, bank transfer, mobile money, card or something else, with the
            bank reference when there is one. A payment in another currency is
            recorded at the exchange rate the bursar enters.
          </p>
          <p>
            Tendao records payments. It does not take money from parents itself.
          </p>
        </Block>

        <Block title="Print the receipt there and then.">
          <p>
            Every payment gets a numbered receipt you can print from the
            browser. Parents and pupils can print their own receipts too.
          </p>
        </Block>

        <Block title="Mistakes are corrected, not erased.">
          <p>
            A wrong payment is reversed with a reason, and the original stays on
            record. An invoice is cancelled with a reason, never deleted, and
            not while payments still stand against it. Discounts are recorded
            against the invoice.
          </p>
          <p>Payments, reversals and invoices all go into the activity log.</p>
        </Block>

        <Block title="See the term at a glance.">
          <p>
            The bursar sees what has been collected this term, what was billed
            against what came in for each year group, and who is overdue.
            Amounts in different currencies are never added together.
          </p>
        </Block>

        <Block title="Parents check the statement themselves.">
          <p>
            A parent signs in to see each child’s invoices and payments, so a
            balance question can start with the same record the office has.
          </p>
        </Block>
      </Blocks>

      <Faqs
        items={[
          {
            question: 'Can parents pay online through Tendao?',
            answer: (
              <p>
                No. Parents pay the school the way they do now, and the bursar
                records the payment in Tendao.
              </p>
            ),
          },
          {
            question: 'Which currency does Tendao use?',
            answer: (
              <p>
                Each school has one currency for its fees, US dollars unless you
                choose otherwise. A payment made in another currency is recorded
                at an exchange rate the bursar enters.
              </p>
            ),
          },
          {
            question: 'Can we bring in the balances parents already owe?',
            answer: (
              <p>
                The roll import brings in pupils and guardians, not fees. Talk
                to us about opening balances during your walkthrough.
              </p>
            ),
          },
          {
            question: 'Who can see the fee records?',
            answer: (
              <p>
                The bursar and the school’s administrators. Parents see their
                own children’s statements.
              </p>
            ),
          },
        ]}
      />
    </PageShell>
  );
}
