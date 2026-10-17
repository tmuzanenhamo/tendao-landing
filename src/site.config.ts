// TODO(owner): replace with the real number and address before this goes live.
// The WhatsApp number is international format without the plus.
export const site = {
  name: 'Tendao',
  url: 'https://tendao-landing.vercel.app',
  whatsapp: '263770000000',
  email: 'hello@tendao.co.zw',
  walkthroughMessage:
    "Hello, I'd like to book a Tendao walkthrough for our school.",
};

/** Opens a WhatsApp chat with the message filled in. */
export const walkthroughHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.walkthroughMessage)}`;

/** The page that explains the walkthrough and how to ask for one. */
export const bookHref = '/book-a-walkthrough';

export type NavLink = { href: string; label: string };

export const mainNav: NavLink[] = [
  { href: '/platform', label: 'Platform' },
  { href: '/schools/primary', label: 'Primary' },
  { href: '/schools/secondary', label: 'Secondary' },
  { href: '/ai', label: 'AI help' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/getting-started', label: 'Getting started' },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Platform',
    links: [
      { href: '/platform', label: 'Overview' },
      { href: '/platform/fees', label: 'Fees and receipts' },
      { href: '/platform/marks-and-reports', label: 'Marks and reports' },
      { href: '/ai', label: 'AI help' },
    ],
  },
  {
    heading: 'Schools',
    links: [
      { href: '/schools/primary', label: 'Primary schools' },
      { href: '/schools/secondary', label: 'Secondary schools' },
      { href: '/for-teachers', label: 'For teachers' },
      { href: '/for-parents', label: 'For parents' },
    ],
  },
  {
    heading: 'Choosing Tendao',
    links: [
      { href: '/pricing', label: 'Pricing' },
      { href: '/getting-started', label: 'Getting started' },
      {
        href: '/compare/spreadsheets-and-whatsapp',
        label: 'Tendao or spreadsheets',
      },
      { href: '/trust', label: 'Your school’s data' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: bookHref, label: 'Book a walkthrough' },
    ],
  },
];
