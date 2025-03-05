import type { Metadata } from "next";
import { Roboto , Kanit , Tangerine } from "next/font/google";
import "./globals.css"; 


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
        className={`${roboto.variable} ${kanit.variable} ${tangerine.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
