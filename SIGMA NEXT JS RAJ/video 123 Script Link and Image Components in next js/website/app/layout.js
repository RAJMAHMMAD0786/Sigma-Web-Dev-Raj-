import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Navbar and Footer ko import kiya gya hai.
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CFacebook - Connect with the world",
  description: "This is facebook and we can connect with the world using facebook",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        <div className="container min-h-[85vh]">
          {children}
        </div>
        
        <Footer />
      </body>
    </html>
  );
}
