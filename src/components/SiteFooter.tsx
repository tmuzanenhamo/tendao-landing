import Image from 'next/image';
import Link from 'next/link';
import { footerNav, site } from '@/site.config';

export default function SiteFooter() {
  return (
    <footer className="bg-blazer-deep text-white/75">
      <div className="mx-auto grid max-w-page gap-10 px-4 py-12 text-sm sm:px-6 md:grid-cols-[1.2fr_repeat(3,1fr)]">
        <div>
          <p className="flex items-center gap-2">
            <Image src="/logo.png" alt="" width={22} height={22} />
            <span className="font-display text-base font-bold text-white">
              Tendao
            </span>
          </p>
          <p className="mt-2 max-w-[18rem]">
            School management for Zimbabwean primary and secondary schools.
          </p>
          <p className="mt-4">
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-white underline decoration-khaki underline-offset-4"
            >
              {site.email}
            </a>
          </p>
        </div>
        {footerNav.map((group) => (
          <div key={group.heading}>
            <h2 className="font-semibold text-white">{group.heading}</h2>
            <ul className="mt-3 space-y-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-page border-t border-white/10 px-4 py-6 text-sm sm:px-6">
        <p>© 2026 Tendao</p>
      </div>
    </footer>
  );
}
