import type { MetadataRoute } from 'next';
import { site } from '@/site.config';

const paths = [
  '/',
  '/platform',
  '/platform/fees',
  '/platform/marks-and-reports',
  '/schools/primary',
  '/schools/secondary',
  '/for-teachers',
  '/for-parents',
  '/ai',
  '/pricing',
  '/getting-started',
  '/getting-started/pupil-roll',
  '/compare/spreadsheets-and-whatsapp',
  '/trust',
  '/book-a-walkthrough',
  '/terms',
  '/privacy',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path === '/' ? '' : path}`,
  }));
}
