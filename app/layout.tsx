import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "White dev Portfolio",
  description: "Hi, I'm Alban Honfovou. Glad to meet you !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XTLMQZ4GV3"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-XTLMQZ4GV3');
      </script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
