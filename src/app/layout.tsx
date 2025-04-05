import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { Header, Providers } from "@/components";
import { colors } from "@/styles/variables";

import styles from "./layout.styles.module.scss";
import "@/styles/main.scss";

export const metadata: Metadata = {
  title: "Ranking da arena 2v2",
  description: "Confira os melhores jogadores da arena 2v2",
  other: {
    "google-adsense-account": "ca-pub-4995163006274668",
  },
};

export const viewport: Viewport = {
  themeColor: colors.colorNeutralDarkest,
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} ${styles.body}`}>
        <Providers>
          <Header />
          {children}
          <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4995163006274668" />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-ESWS6Y2YWF"
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ESWS6Y2YWF');
          `}
          </Script>
        </Providers>
      </body>
    </html>
  );
}
