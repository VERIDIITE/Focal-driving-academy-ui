import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Focal Driving Academy | Leicester's Premium Driving School",
    template: "%s | Focal Driving Academy"
  },
  description: "Experience the refined way to drive. Focal Driving Academy offers premium, calm, and precision manual driving lessons in Leicester. Established since 1995.",
  openGraph: {
    title: "Focal Driving Academy",
    description: "Leicester's most refined driving experience. Specialist manual instruction and anxiety mentoring.",
    url: "https://focaldriving.com",
    siteName: "Focal Driving Academy",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Focal Driving Academy",
    description: "The refined way to earn your independence in Leicester.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-clay selection:bg-neon selection:text-clay">
        {children}
      </body>
    </html>
  );
}
