import type { Metadata } from "next";
import {
  Roboto,
  Kanit,
  Tangerine,
  Scope_One,
  Bree_Serif,
} from "next/font/google";
import "./globals.css";

import LayoutClientWrapper from "@/components/LayoutClientWrapper"; // adjust path if needed

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const tangerine = Tangerine({
  variable: "--font-tangerine",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const scope_one = Scope_One({
  variable: "--font-scope_one",
  weight: ["400"],
  subsets: ["latin"],
});

const bree_serif = Bree_Serif({
  variable: "--font-bree_serif",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trihood Films",
  description: "Trihood Films is a film production company based in Delhi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${kanit.variable} ${tangerine.variable} ${scope_one.variable} ${bree_serif.variable} antialiased`}
      >
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </body>
    </html>
  );
}
