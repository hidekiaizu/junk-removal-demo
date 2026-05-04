import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { TopBar } from "@/components/top-bar";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Got A Guy",
  description:
    "Got A Guy is a local junk removal company offering free estimates, fast scheduling, and dependable residential and commercial haul-away service.",
  metadataBase: new URL("https://www.gotaguydemo.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCtaBar />
        <Analytics />
      </body>
    </html>
  );
}
