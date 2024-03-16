import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/pages/Navbar";
import Logo from "@/pages/components/main/Logo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="mx-5 mt-6">
      <Logo />
    </div>
  );
}
