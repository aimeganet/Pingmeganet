import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, locales, type Locale } from '@/i18n';

export default getRequestConfig(async ({ locale }) => {
  const resolved = locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;

  return {
    locale: resolved,
    messages: (await import(`@/messages/${resolved}.json`)).default
  };
});
