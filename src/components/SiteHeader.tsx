import Image from 'next/image';
import Link from 'next/link';
import { bookHref, mainNav } from '@/site.config';
import MobileMenu from './MobileMenu';

// On the home page the header sits over the hero's grey; everywhere else it
// is an ordinary band at the top of the page.
export default function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  return (
    <header
      className={
        overlay
          ? 'absolute inset-x-0 top-0 z-20'
          : 'relative z-20 border-b border-ink/10 bg-white'
      }
    >
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 rounded-md">
          <Image src="/logo.png" alt="" width={32} height={32} priority />
          <span className="font-display text-2xl font-extrabold tracking-tight">
            Tendao
          </span>
        </Link>
        <nav
          aria-label="Main"
          className={`hidden rounded-full px-6 py-2.5 lg:block ${overlay ? 'bg-white/90 shadow-[0_1px_2px_rgba(22,36,30,0.08)] backdrop-blur' : ''}`}
        >
          <ul className="flex gap-5 whitespace-nowrap text-[15px] font-semibold text-ink-muted xl:gap-7">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={bookHref}
            className="btn-primary min-h-11 px-4 text-[15px]"
          >
            Book a walkthrough
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
