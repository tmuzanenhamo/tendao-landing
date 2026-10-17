import Image from 'next/image';
import Link from 'next/link';
import { walkthroughHref } from '@/site.config';

const links = [
  { href: '#pupils', label: 'Every pupil' },
  { href: '#day', label: 'A school day' },
  { href: '#phases', label: 'Primary and secondary' },
  { href: '#people', label: 'Who uses it' },
  { href: '#educator', label: 'Ask Tendao' },
  { href: '#pricing', label: 'Pricing' },
];

export default function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-page items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 rounded-md">
          <Image src="/logo.png" alt="" width={32} height={32} priority />
          <span className="font-display text-2xl font-extrabold tracking-tight">
            Tendao
          </span>
        </Link>
        <nav
          aria-label="Sections"
          className="hidden rounded-full bg-white/90 px-6 py-2.5 shadow-[0_1px_2px_rgba(22,36,30,0.08)] backdrop-blur lg:block"
        >
          <ul className="flex gap-5 whitespace-nowrap text-[15px] font-semibold text-ink-muted xl:gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={walkthroughHref}
          className="btn-primary min-h-11 px-4 text-[15px]"
        >
          Book a walkthrough
        </a>
      </div>
    </header>
  );
}
