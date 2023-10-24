import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { MainNav } from "@/components/main-nav";
import { dashboardConfig } from "@/config/dashboard";
import { SiteFooter } from "@/components/site-footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col space-y-6">
            <header className="sticky top-0 z-40 border-b bg-background">
              <div className="container flex h-16 items-center justify-between py-4">
                <MainNav items={dashboardConfig.mainNav} />
              </div>
            </header>
            <main className="flex w-full flex-1 flex-col overflow-hidden">
              {children}
            </main>
            <SiteFooter className="border-t" />
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
