import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import "../globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "White dev Portfolio",
  description: "Hi, I'm Ruben White. Frontend developer, though keep in mind I got a divine way to code !",
};


type LayoutProps = {
  children: ReactNode,
  params: Promise<{ locale:string }>
}

export default async function LocaleLayout({ children, params }:LayoutProps) {
  
  const paramsResponse = await params 
  const locale = paramsResponse.locale

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}