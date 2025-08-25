import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import "../globals.css";
import Script from "next/script";
import { ReactNode } from "react";


import BBorder from "./bborder";
import Footer from "./navigation/footer";
import Header from "./navigation/header";

const inter = Inter({ subsets: ["latin"] });


interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}


export const metadata: Metadata = {
  title: "UIX developer | Rubene Honfovou Portfolio",
  description: "Hi, I'm Rubene Honfovou, a UIX developer. Here is a chance to discover my work and know how helpful I can be to you !",
};


export default async function LocaleLayout({ children, params }: LayoutProps) {

  const { locale } = await Promise.resolve(params); // Ensure params is awaited if required by Next.js
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T9MMWLWS');`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Sora:wght@100..800&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T9MMWLWS"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <NextIntlClientProvider messages={messages}>          
      <BBorder >
        <Header title="UIX dev" />
          {children}
        
        <Footer />
      </BBorder>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
