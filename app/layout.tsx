import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Footer  from './components/Footer';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';

import BottomNavbar from './components/BottomNavbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      <body className={inter.className}>
        <header className="flex flex-col items-center">
        <Navbar/>
        <SearchBar/>
        </header>

        <main className="min-h-[70vh]">
        {children}
        </main>

        <BottomNavbar/>

        <Footer/>

      </body>
    </html>
  );
}
