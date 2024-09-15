import "../globals.css";
import localFont from "next/font/local";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { NextIntlClientProvider } from 'next-intl';
import { 
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server';
import { routing } from "@/app/i18n/routing";


const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string },
}>) {
  unstable_setRequestLocale(locale)
  const messages = await getMessages();  

  return (
    <html lang={locale}  >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased 
        bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-400
        flex flex-col justify-start items-center min-h-screen
      `} >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex justify-center items-center lg:w-3/5 w-full mb-auto">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
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
  };
}