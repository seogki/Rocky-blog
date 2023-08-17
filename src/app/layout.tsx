import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MyHeader from "./header";
import MyFooter from "./footer";
import "@/style/globals.scss";
import { ThemeProvider } from "./theme-provider";
import { ReduxProvider } from "./redux/redux-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rocky Blog",
  description: "Rocky Blog Main"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ReduxProvider>
            <div className="w-full h-full overflow-auto">
              {/* @ts-expect-error Async Server Component */}
              <MyHeader />
              <main className="w-full h-[calc(100%-4rem)] p-4 pb-6 max-w-screen-xl mx-auto relative">
                {children}
              </main>
              <MyFooter />
            </div>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
