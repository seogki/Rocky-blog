import { Inter } from "next/font/google";
import MyHeader from "./header";
import MyFooter from "./footer";
import "@/style/globals.scss";
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ReduxProvider>
            <div className="w-full h-full">
              {/* @ts-expect-error Async Server Component */}
              <MyHeader />
              <main className="w-full min-h-[calc(100%-4rem)] p-4 pb-8 max-w-screen-xl mx-auto relative">
                {children}
              </main>
              <MyFooter />
            </div>
          </ReduxProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
