import {Syne} from "next/font/google"
import {Analytics} from "@vercel/analytics/next"
import "../../app/globals.css"
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-display",
  display: "swap",
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  setRequestLocale(locale);

  try {
    const t = await getTranslations({locale, namespace: 'Metadata'});
    return {
      title: t('title'),
      description: t('description'),
    };
  } catch (error) {
    return {
      title: "Martin Lehocký - Fullstack Developer",
      description: "Building polished fullstack products - from first commit to final deployment."
    }
  }
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  setRequestLocale(locale);

  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning className="overflow-x-clip">
      <body className={`${syne.variable} font-body antialiased bg-[--color-bg] text-[--color-text] overflow-x-clip`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
