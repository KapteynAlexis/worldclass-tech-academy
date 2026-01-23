import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'WorldClass Tech Academy',
  description: 'Building world-class digital solutions for the modern world',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-blue-primary text-white ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />

        {/* Offset for fixed header */}
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}