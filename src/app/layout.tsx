import { Inter } from "next/font/google";
import MyHeader from "@/components/root/header";
import MyFooter from "@/components/root/footer";
import "@/style/global.scss";
import { ThemeProvider } from "./theme-provider";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/google-analytics";
import { ReduxProvider } from "@/redux/redux-provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <GoogleAnalytics />
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
        {/* analytics for vercel */}
        <Analytics />
      </body>
    </html>
  );
}
