import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryProvider from "./_provider/provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Pokemon Dictionary",
  description: "Find your Pokemon here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>{children} </QueryProvider>
      </body>
    </html>
  );
}
