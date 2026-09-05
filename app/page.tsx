import LeftSidebar from "@/components/layout/LeftSidebar";
import MainContent from "@/components/layout/MainContent";
import RightSidebar from "@/components/layout/RightSidebar";
import TopBar from "@/components/layout/TopBar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function PortfolioPage() {
  return (
    <div
      className={`${inter.className} flex h-screen w-full flex-col lg:overflow-hidden bg-white text-neutral-900`}
    >
      <TopBar />
      <div className="overflow-hidden hidden lg:flex-1 lg:flex">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
      <div className="flex flex-col lg:hidden">
        <LeftSidebar />
        <RightSidebar />
        <MainContent />
      </div>
    </div>
  );
}
