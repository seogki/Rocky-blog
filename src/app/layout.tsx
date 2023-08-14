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
            <div className="w-screen h-screen flex flex-col">
              {/* @ts-expect-error Async Server Component */}
              <MyHeader className="flex-none" />
              <div className="w-full mx-auto mt-4 flex-1">
                <main className="w-full min-h-full h-full max-w-screen-xl mx-auto">
                  {children}
                </main>
                <MyFooter className="flex-none" />
              </div>
            </div>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
