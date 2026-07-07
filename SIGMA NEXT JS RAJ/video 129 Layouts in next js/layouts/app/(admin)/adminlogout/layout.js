import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin page of this Application",
  description: "This is the Admin page of this application and here there was s many folder and file are available",
};

export default function AdminLayout({ children }) {
  return (
    <>
      <span>Adminlogout Navbar</span>
      {children}
      <span>Adminlogout Footer</span>
    </>
  );
}