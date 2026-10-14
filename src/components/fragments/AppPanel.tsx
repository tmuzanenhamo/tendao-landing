import type { ReactNode } from 'react';

// A piece of the real app's interface, drawn with its own tokens (Roboto,
// Tailwind gray and sky, white on a gray-200 border) so that what the page
// shows is what a school will see after signing in.
export default function AppPanel({
  title,
  meta,
  children,
  className = '',
}: {
  title: string;
  meta?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white p-4 font-app text-sm text-gray-800 shadow-[0_1px_0_rgba(22,36,30,0.04)] ${className}`}
    >
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-[15px] font-semibold">{title}</p>
        {meta && <p className="shrink-0 text-xs text-gray-500">{meta}</p>}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export function Row({
  label,
  value,
  strong = false,
}: {
  label: ReactNode;
  value: ReactNode;
  strong?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline justify-between gap-4 border-t border-gray-100 py-1.5 first:border-t-0 ${strong ? 'font-semibold' : ''}`}
    >
      <span className={strong ? '' : 'text-gray-600'}>{label}</span>
      <span className="tabular-nums">{value}</span>
    </div>
  );
}

export function Chip({
  tone,
  children,
}: {
  tone: 'sky' | 'amber' | 'green' | 'gray';
  children: ReactNode;
}) {
  const tones = {
    sky: 'bg-sky-50 text-sky-700',
    amber: 'bg-amber-50 text-amber-800',
    green: 'bg-green-50 text-green-800',
    gray: 'bg-gray-100 text-gray-700',
  };
  return (
    <span
      className={`inline-flex rounded-md px-2 py-0.5 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
