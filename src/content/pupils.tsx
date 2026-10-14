import type { ReactNode } from 'react';
import AppPanel, { Chip, Row } from '@/components/fragments/AppPanel';

export type Pupil = {
  slug: string;
  name: string;
  year: string;
  phase: 'Primary' | 'Secondary';
  // Typical height in centimetres, so the line-up rises the way a real one does.
  height: number;
  // Pixel width of the cut-out at 1300px tall, for next/image.
  width: number;
  alt: string;
  // Shown on phones and small tablets, where only four fit side by side.
  onPhone?: boolean;
  record: ReactNode;
};

export const pupils: Pupil[] = [
  {
    slug: 'ecd-girl',
    onPhone: true,
    width: 428,
    name: 'Rudo',
    year: 'ECD B',
    phase: 'Primary',
    height: 112,
    alt: 'A young girl in a sky-blue school dress holding a yellow lunch box',
    record: (
      <AppPanel title="Attendance" meta="Term 3">
        <Row label="Days present" value="41 of 43" />
        <Row label="Today" value={<Chip tone="green">Present, 07:34</Chip>} />
        <Row label="Marked by" value="Mrs Ncube" />
      </AppPanel>
    ),
  },
  {
    slug: 'grade-3-boy',
    width: 426,
    name: 'Tinashe',
    year: 'Grade 3',
    phase: 'Primary',
    height: 128,
    alt: 'A boy in a khaki primary school uniform wearing a navy backpack',
    record: (
      <AppPanel title="Counting in fives" meta="Mathematics">
        <Row label="Opens" value="Mon 20 Oct, 08:00" />
        <Row
          label="Questions"
          value={<Chip tone="gray">Hidden until it opens</Chip>}
        />
        <Row label="Attached" value={<Chip tone="sky">number-line.mp4</Chip>} />
      </AppPanel>
    ),
  },
  {
    slug: 'grade-5-boy',
    width: 515,
    name: 'Kudzai',
    year: 'Grade 5',
    phase: 'Primary',
    height: 139,
    alt: 'A boy in a khaki uniform and navy jersey holding a football',
    record: (
      <AppPanel title="Fee statement" meta="Term 3 · USD">
        <Row label="Tuition" value="$150.00" />
        <Row label="Sports levy" value="$20.00" />
        <Row label="Paid, mobile money" value="−$120.00" />
        <Row label="Balance" value="$50.00" strong />
      </AppPanel>
    ),
  },
  {
    slug: 'grade-7-girl',
    onPhone: true,
    width: 386,
    name: 'Chipo',
    year: 'Grade 7',
    phase: 'Primary',
    height: 151,
    alt: 'A girl in a sky-blue dress and navy jersey holding a maths textbook',
    record: (
      <AppPanel title="Report card" meta="Term 2">
        <Row label="English" value="74" />
        <Row label="Mathematics" value="81" />
        <Row label="Shona" value="88" />
        <Row label="Science and Technology" value="69" />
        <p className="mt-2 text-xs text-gray-600">
          “Chipo reads widely and it shows in her writing.”
        </p>
      </AppPanel>
    ),
  },
  {
    slug: 'form-1-boy',
    width: 432,
    name: 'Tafadzwa',
    year: 'Form 1',
    phase: 'Secondary',
    height: 157,
    alt: 'A boy in a bottle-green blazer with a backpack over one shoulder',
    record: (
      <AppPanel title="Today" meta="Form 1 Blue">
        <Row label="07:30" value="Mathematics" />
        <Row label="08:40" value="English Language" />
        <Row label="10:20" value="Geography" />
        <Row label="11:30" value="Combined Science" />
      </AppPanel>
    ),
  },
  {
    slug: 'form-4-girl',
    onPhone: true,
    width: 409,
    name: 'Tariro',
    year: 'Form 4',
    phase: 'Secondary',
    height: 162,
    alt: 'A girl in a bottle-green blazer holding exercise books',
    record: (
      <AppPanel title="Mathematics term mark" meta="ZIMSEC O Level">
        <Row label="Coursework 90 × 30%" value="27.0" />
        <Row label="Exam 50 × 70%" value="35.0" />
        <Row label="Term mark" value="62" strong />
      </AppPanel>
    ),
  },
  {
    slug: 'lower-6-girl',
    width: 412,
    name: 'Nyasha',
    year: 'Lower 6',
    phase: 'Secondary',
    height: 166,
    alt: 'A girl in a maroon blazer holding a closed laptop',
    record: (
      <AppPanel title="Subject combination" meta="Cambridge AS">
        <Row label="Mathematics" value="L6 Maths A" />
        <Row label="Physics" value="L6 Physics" />
        <Row label="Chemistry" value="L6 Chem B" />
      </AppPanel>
    ),
  },
  {
    slug: 'upper-6-boy',
    onPhone: true,
    width: 421,
    name: 'Tatenda',
    year: 'Upper 6',
    phase: 'Secondary',
    height: 176,
    alt: 'A tall young man in a maroon blazer carrying a lever-arch file',
    record: (
      <AppPanel title="Pupil at risk" meta="Chemistry Paper 2">
        <Row label="Last two terms" value="44, 41" />
        <Row label="Action taken" value="Extra lesson, Tuesdays" />
        <Row label="Logged" value="14 Oct, Mr Banda" />
      </AppPanel>
    ),
  },
];
