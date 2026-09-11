import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import NavContainer from "@/components/Navbar/NavContainer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const albertSans = Albert_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-albert-sans",
});

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Underdevelopment",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${font.className} ${albertSans.variable} h-full antialiased`}>
      <body className="flex flex-col">
        <NavContainer />
        {children}
        <div className="h-50 bg-black text-brand-accent text-center text-2xl">Footer</div>
      </body>
    </html>
  );
}
