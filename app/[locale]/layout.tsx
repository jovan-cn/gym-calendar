import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { NextIntlClientProvider } from 'next-intl';
import { 
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server';
import { routing } from "@/app/i18n/routing";
import { SidebarOpenProvider } from "../hooks/useSidebarOpen";


export default async function LocaleLaytout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string },
}>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
    <SidebarOpenProvider> {/* for Mobile sidebar */ }
      <Header />
      <main className="flex justify-center items-center lg:w-3/5 w-full mb-auto">
        {children}
      </main>
      <Footer />
    </SidebarOpenProvider>
    </NextIntlClientProvider>
  );
}

 
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
 
export async function generateMetadata({ 
  params: { locale } 
}: Readonly<{
  params: { locale: string } 
}>) {
  const t = await getTranslations({locale, namespace: 'header'});
 
  return {
    title: t('title'),
    icons: {
      icon: 'favicon.svg',
      apple: 'favicon.svg',
      manifest: 'site.webmanifest',
    },
  };
}