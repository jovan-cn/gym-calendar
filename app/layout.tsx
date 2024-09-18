import "./globals.css";
import localFont from "next/font/local";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased 
        bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-400
        flex flex-col justify-start items-center min-h-screen
      `} >
        {children}
      </body>
    </html>
  );
}

 