import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import { Header } from "@/components";
import styles from "./layout.styles.module.scss";
import "@/styles/main.scss";

export const metadata: Metadata = {
  title: "Ranking da arena 2v2",
  description: "Confira os melhores jogadores da arena 2v2",
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
        <Header />
        {children}
      </body>
    </html>
  );
}
