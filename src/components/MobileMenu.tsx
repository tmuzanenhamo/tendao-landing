'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { bookHref, mainNav } from '@/site.config';

// The menu below the desktop width: a hamburger that slides a panel in from
// the right. The panel stays in the page while closed so it can slide back
// out, and `inert` keeps it out of reach of the keyboard and screen readers
// until it is open.
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const button = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  // Choosing a page closes the menu.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const panelElement = panel.current;
    const opener = button.current;
    // The page behind stays still while the menu is open.
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelElement?.querySelector<HTMLElement>('a, button')?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        return;
      }
      // Tab goes round the panel rather than out of it into the page behind.
      if (event.key !== 'Tab' || !panelElement) return;
      const focusable = [
        ...panelElement.querySelectorAll<HTMLElement>('a, button'),
      ];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      opener?.focus();
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-md border border-ink/20 bg-white"
      >
        <Menu aria-hidden className="h-5 w-5" />
        <span className="sr-only">Open menu</span>
      </button>

      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-ink/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      />

      <div
        ref={panel}
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(20rem,85vw)] flex-col bg-white transition-[transform,box-shadow] duration-300 ease-out ${open ? 'translate-x-0 shadow-2xl' : 'translate-x-full shadow-none'}`}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-4 py-4">
          <span className="font-display text-xl font-extrabold">Tendao</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-md hover:bg-chalk"
          >
            <X aria-hidden className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <nav aria-label="Main" className="flex-1 overflow-y-auto p-2">
          <ul>
            {mainNav.map((link, index) => (
              <li
                key={link.href}
                // Each link follows the panel in a moment after the one
                // above it, so the list arrives rather than appears.
                style={{
                  transitionDelay: open ? `${80 + index * 35}ms` : '0ms',
                }}
                className={`transition duration-300 ease-out ${open ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
              >
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-md px-3 text-lg font-semibold hover:bg-chalk aria-[current=page]:text-blazer"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t border-ink/10 p-4">
          <Link
            href={bookHref}
            onClick={() => setOpen(false)}
            className="btn-primary w-full"
          >
            Book a walkthrough
          </Link>
        </div>
      </div>
    </div>
  );
}
