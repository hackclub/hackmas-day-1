import type { Metadata } from "next";
import { Ballet, Delius } from "next/font/google";
import "./globals.css";

const ballet = Ballet({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-ballet",
})

const delius = Delius({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-delius",
})


export const metadata: Metadata = {
  title: "🎄Christmas Clicker 🎄",
  description: "Christmas Clicker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ballet.variable} ${delius.variable}`}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
