import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NoticeProvider from "./provider/notices-provider";
import { clientApi } from "@/lib/client-api/notices";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await clientApi.getNotices();
  return (
    <html lang="en">
      <body className={inter.className}>
        <NoticeProvider initialNotices={data.notices}>
          {children}
        </NoticeProvider>
      </body>
    </html>
  );
}
