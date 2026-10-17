import type { Metadata } from 'next';
import { Bitter, Roboto, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const bitter = Bitter({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-bitter',
});
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-source-sans',
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

const title = 'Tendao — your whole school day, in one place';
const description =
  'Marks, fees, attendance and homework for Zimbabwean primary and secondary schools, in one place. Parents hear about it by SMS and WhatsApp.';

export const metadata: Metadata = {
  metadataBase: new URL('https://tendao-landing.vercel.app'),
  title,
  description,
  // What a link shared on WhatsApp or by email shows.
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_ZW',
    siteName: 'Tendao',
    images: [
      {
        url: '/hero-classroom.jpg',
        alt: 'A Form 4 pupil in a green blazer works in Tendao while a teacher helps two classmates',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-ZW"
      className={`${bitter.variable} ${sourceSans.variable} ${roboto.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
