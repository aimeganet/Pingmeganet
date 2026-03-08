'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

const nav = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/pages', label: 'Pages' },
  { href: '/posts', label: 'Posts' },
  { href: '/ai-studio', label: 'AI Studio' },
  { href: '/scheduler', label: 'Scheduler' },
  { href: '/analytics', label: 'Analytics' },
  { href: '/settings', label: 'Settings' }
];

export function Sidebar({ locale }: { locale: string }) {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-e border-slate-200 bg-white p-4">
      <div className="mb-6 text-lg font-bold">PingMegaNet</div>
      <nav className="space-y-2">
        {nav.map((item) => {
          const target = `/${locale}${item.href}`;
          return (
            <Link
              key={item.href}
              href={target}
              className={clsx('block rounded-md px-3 py-2 text-sm', {
                'bg-brand-50 text-brand-600': pathname === target,
                'text-slate-600 hover:bg-slate-100': pathname !== target
              })}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
