import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import ar from '@/messages/ar.json';
import en from '@/messages/en.json';
import { Sidebar } from '@/components/layout/sidebar';
import { Topbar } from '@/components/layout/topbar';

export default function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const messages = params.locale === 'ar' ? ar : en;

  return (
    <NextIntlClientProvider messages={messages} locale={params.locale}>
      <div dir={params.locale === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50">
        <div className="flex min-h-screen">
          <Sidebar locale={params.locale} />
          <div className="flex-1">
            <Topbar />
            <main className="p-6">{children}</main>
          </div>
        </div>
      </div>
    </NextIntlClientProvider>
  );
}
