import type { Metadata } from 'next';

const shareImage = {
  url: '/hero-classroom.jpg',
  alt: 'A Form 4 pupil in a green blazer works in Tendao while a teacher helps two classmates',
};

/**
 * A page's title, description and shared-link preview. A page that sets its
 * own Open Graph replaces the layout's rather than adding to it, so the
 * image is given again here.
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
    openGraph: {
      title: `${title} | Tendao`,
      description,
      url: path,
      type: 'website',
      locale: 'en_ZW',
      siteName: 'Tendao',
      images: [shareImage],
    },
  };
}
