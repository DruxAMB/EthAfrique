import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ThemeProvider } from "./components/theme-provider";
import Afrique from '../../public/images/afrique.png'
import Weblines from '../../public/images/weblines.png'
import Image from "next/image";

const inter = Inter({ subsets : ["latin"] });

export const metadata: Metadata = {
  title: "Conference Ethereum Afrique Francophone",
  description: "Connecter les Écosystèmes Web3 Mondiaux pour un Impact Global",
  icons: {
    icon: [
      {
        url: '/images/logo.png',
        href: '/images/logo.png',
      }
    ],
    apple: '/images/logo.png',
  },
  manifest: '/images/logo.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#06286F]`}
      >
        <ThemeProvider
        attribute='class'
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main> 
          <Footer />

          {/* <Image 
            src={Afrique}
            alt="africa coonnected"
            height={100}
            width={100}
            className="w-[191px] h-[191px] md:w-[800px] md:h-[300px] lg:w-[644px] lg:h-[644px] absolute top-100 right-[200] transform -translate-x-1/2"
          /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
