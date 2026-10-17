import Block, { Blocks } from '@/components/page/Block';
import PageHero from '@/components/page/PageHero';
import PageShell from '@/components/page/PageShell';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata(
  '/getting-started/pupil-roll',
  'Getting your pupil roll ready',
  'A checklist for preparing your pupils, guardians and staff spreadsheets for import into Tendao: the columns, the order and the mistakes to fix first.'
);

const columns = [
  {
    kind: 'Guardians',
    required: 'First name, surname, address',
    optional: 'Phone',
  },
  {
    kind: 'Pupils',
    required:
      'First name, surname, address, blood type, sex, birthday, class, guardian first name, guardian surname',
    optional: 'Guardian phone',
  },
  {
    kind: 'Staff',
    required: 'First name, surname, address, blood type, sex, birthday',
    optional: '',
  },
];

export default function PupilRollGuide() {
  return (
    <PageShell>
      <PageHero title="Getting your pupil roll ready." action={null}>
        <p>
          A clean roll makes everything after it easier: classes, parents, fees.
          Here is what Tendao reads, and what to check before you import.
        </p>
      </PageHero>

      <Blocks>
        <Block title="Choose the list you will work from.">
          <p>
            Most schools have more than one copy of the roll. Agree which one is
            current, who checked it and when, and keep a copy of it before you
            change anything.
          </p>
        </Block>

        <Block title="Three spreadsheets, guardians first.">
          <p>
            Tendao reads Excel (.xlsx) or CSV files. Import guardians before
            pupils, because each pupil is linked to a guardian who is already in
            Tendao.
          </p>
          <div className="overflow-x-auto">
            <table className="mt-2 w-full min-w-[32rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-ink/80">
                  <th scope="col" className="py-2 pr-4">
                    File
                  </th>
                  <th scope="col" className="py-2 pr-4">
                    Columns it needs
                  </th>
                  <th scope="col" className="py-2">
                    Optional
                  </th>
                </tr>
              </thead>
              <tbody>
                {columns.map((row) => (
                  <tr
                    key={row.kind}
                    className="border-b border-ink/10 align-top"
                  >
                    <th
                      scope="row"
                      className="py-2 pr-4 font-semibold text-ink"
                    >
                      {row.kind}
                    </th>
                    <td className="py-2 pr-4">{row.required}</td>
                    <td className="py-2">{row.optional || 'None'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Block>

        <Block title="Write birthdays one way.">
          <p>
            Use year, month, day: 2014-03-27. A spreadsheet that shows dates
            some other way can change them when it saves.
          </p>
        </Block>

        <Block title="Use the class names you will keep.">
          <p>
            Write each class the same way every time, and check that every pupil
            is in the class they are in now. Tendao warns you about a class that
            would be over its size.
          </p>
        </Block>

        <Block title="Check guardians and their phone numbers.">
          <p>
            Make sure each pupil names the right guardian. When two guardians
            share a name, the phone number tells them apart, so include it.
          </p>
          <p>
            Store phone numbers as text so the spreadsheet does not drop the
            leading zero. A number without a country code is read as a
            Zimbabwean number.
          </p>
        </Block>

        <Block title="Look at the preview before you save.">
          <p>
            Tendao shows what it found before anything is saved, including
            duplicates. Check a few pupils you know well, then save.
          </p>
        </Block>

        <Block title="Fees come separately.">
          <p>
            The roll does not bring in fee balances. Agree the date and the
            amounts with your bursar, and enter them separately.
          </p>
        </Block>

        <Block title="Keep the roll private.">
          <p>
            Share it only through the channel your school has agreed with us. We
            do not need your roll to give you a walkthrough.
          </p>
        </Block>
      </Blocks>
    </PageShell>
  );
}
