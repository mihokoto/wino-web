import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { LiveToast } from "@/components/ui/LiveToast";
import { WaitlistProvider } from "@/context/WaitlistContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wino | Visual Search Intelligence",
  description: "Don't lose that viral product. Scan it, Detect it, Coupon it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <WaitlistProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <LiveToast />
        </WaitlistProvider>
      </body>
    </html>
  );
}
