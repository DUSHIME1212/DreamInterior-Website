import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Interior design",
  description: "Enjoy our beautifull designs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className={'w-full fixed top-0 z-50 bg-white py-4 px-8 md:px-16 lg:px-32'}>
          <Navbar/>
      </div>
      {children}
      </body>
    </html>
  );
}
