"use client";
import { tags } from "@/data/NavBarData";
import Link from "next/link";
import Image from "next/image";
import HSAlogo from "@/public/assets/HSAlogo.svg";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navigation = () => {
  const pathName = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-hsa-pink-200 font-serif">
      <div className="flex items-center justify-between px-4 py-4 lg:hidden">
        <Link href="/" className="flex items-center gap-[1vw]">
          <Image src={HSAlogo} alt="logo" className="w-12" />
          <div className="text-[3vw] sm:text-[2vw]">HSA</div>
        </Link>
        <div className="py-4 text-hsa-gray-100" onClick={toggleMobileMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </div>
      </div>

      <div className="hidden justify-between py-4 text-hsa-tan-100 lg:flex">
        <Link href="/" className="ml-[4%] flex items-center gap-[1vw]">
          <Image src={HSAlogo} alt="logo" className="w-12" />
          <div className="text-[3vw] sm:text-[2vw]">HSA</div>
        </Link>

        <div className="mr-[5%] flex items-center gap-[4vw] text-[3vw] sm:text-[2vw]">
          {tags.map(({ link, name }) => (
            <div key={link}>
              <Link
                href={link}
                className={`${
                  pathName === link
                    ? "underline decoration-[6px] underline-offset-[10px]"
                    : "hover:text-hsa-blue-200"
                }`}
              >
                {name}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-hsa-pink-200 px-6 py-4 text-hsa-tan-100`}
      >
        {tags.map(({ link, name }) => (
          <div key={link} className="py-2 text-center">
            <Link
              href={link}
              className={`${
                pathName === link
                  ? "underline decoration-[6px] underline-offset-[10px]"
                  : "hover:text-hsa-blue-200"
              }`}
            >
              {name}
            </Link>
          </div>
        ))}
      </div>

      <div className="h-4 bg-hsa-blue-100" />
    </nav>
  );
};

export default Navigation;
