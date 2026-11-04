import type { Metadata } from 'next';

export const homeTitle =
  'Tendao — school management system for Zimbabwean schools';
export const homeDescription =
  'Marks, fees, attendance and homework for Zimbabwean primary and secondary schools, in one place. Parents follow their child’s work and fees from their phone.';

/** What a link shared on WhatsApp or by email shows. */
export function sharePreview(
  title: string,
  description: string,
  path?: string
): NonNullable<Metadata['openGraph']> {
  return {
    title,
    description,
    ...(path ? { url: path } : {}),
    type: 'website',
    locale: 'en_ZW',
    siteName: 'Tendao',
    images: [
      {
        url: '/hero-classroom.jpg',
        width: 2400,
        height: 1340,
        alt: 'A Form 4 pupil in a green blazer works in Tendao while a teacher helps two classmates',
      },
    ],
  };
}

/**
 * A page's title, description, canonical address and shared-link preview. A
 * page that sets its own Open Graph replaces the layout's rather than adding
 * to it, so the whole preview is given again here.
 */
export function pageMetadata(
  path: string,
  title: string,
  description: string
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: sharePreview(`${title} | Tendao`, description, path),
  };
}
