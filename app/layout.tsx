import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Footer  from './components/Footer';
import Navbar from './components/Navbar';
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
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </head>
      <body className={`${inter.className} max-w-full overflow-x-hidden`}>
        <header className="w-full max-w-full fixed top-0 z-50 overflow-x-hidden">
          <Navbar />
        </header>

      <main className="pt-16 pb-16 lg:pt-20 lg:pb-0 w-full max-w-full overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-full lg:px-8">
          {children}
        </div>
      </main>
      <Footer/>
      <BottomNavbar />
    </body>
  </html>
  );
}
