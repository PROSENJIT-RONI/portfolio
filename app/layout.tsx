import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prosenjit Swarnakar | Software Developer",
  description:
    "Portfolio of Prosenjit Swarnakar, a software developer focused on Flutter, mobile product development, backend-aware apps, and practical engineering.",
  keywords: [
    "Prosenjit Swarnakar",
    "Software Developer",
    "Flutter Developer",
    "Mobile Developer",
    "Portfolio",
  ],
  applicationName: "Prosenjit Swarnakar Portfolio",
  openGraph: {
    title: "Prosenjit Swarnakar | Software Developer",
    description:
      "Flutter and product-focused software developer building practical mobile and digital experiences.",
    type: "website",
    siteName: "Prosenjit Swarnakar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosenjit Swarnakar | Software Developer",
    description:
      "Flutter and product-focused software developer building practical mobile and digital experiences.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
