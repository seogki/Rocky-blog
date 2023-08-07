import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MyHeader from "./ui/header";
import MyFooter from "./ui/footer";
import "@/style/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rocky Blog",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-full flex flex-row flex-wrap">
          <MyHeader />
          <main className="w-full h-full max-w-screen-2xl px-6 mx-auto mt-4 mb-12">
            {children}
          </main>
          <MyFooter />
        </div>
      </body>
    </html>
  );
}
