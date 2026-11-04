import type { Metadata } from 'next';
import { Bitter, Roboto, Source_Sans_3 } from 'next/font/google';
import { homeDescription, homeTitle, sharePreview } from '@/lib/page-metadata';
import { site } from '@/site.config';
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: homeTitle, template: '%s | Tendao' },
  description: homeDescription,
  openGraph: sharePreview(homeTitle, homeDescription),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-ZW"
      className={`${bitter.variable} ${sourceSans.variable} ${roboto.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only z-30 rounded-md bg-white px-4 py-2 font-semibold focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
