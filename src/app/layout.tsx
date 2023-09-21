import { Inter } from "next/font/google";
import MyHeader from "@/components/root/header";
import MyFooter from "@/components/root/footer";
import "@/style/global.scss";
import { ThemeProvider } from "./theme-provider";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/google-analytics";
import { ReduxProvider } from "@/redux/redux-provider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: process.env.NEXT_PUBLIC_BASE_URL
    ? new URL(process.env.NEXT_PUBLIC_BASE_URL)
    : null,
  authors: [
    {
      name: "Seogki Hong"
    }
  ],
  creator: "Seogki Hong",
  publisher: "Seogki Hong"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="w-full h-full">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ReduxProvider>
              <MyHeader />
              <main className="w-full min-h-[calc(100%-4rem)] p-4 pb-8 max-w-screen-xl mx-auto relative">
                {children}
              </main>
              <MyFooter />
            </ReduxProvider>
          </ThemeProvider>
        </div>
        {/* modal창 사용 */}
        <div
          id="backdrop-root"
          className="fixed left-0 top-0 z-40 overflow-hidden"
          data-testid="backdrop-root"
        />
        <div
          id="modal-root"
          className="fixed left-0 top-0 z-50 overflow-hidden"
          data-testid="modal-root"
        />
        <GoogleAnalytics />
        {/* analytics for vercel */}
        <Analytics />
      </body>
    </html>
  );
}
