"use client";
import { tags } from "@/data/NavBarData";
import Link from "next/link";
import Image from "next/image";
import HSAlogo from "@/public/assets/HSAlogo.svg";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import * as motion from "motion/react-client";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -100 },
};

const Navigation = () => {
  const pathName = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-hsa-pink-200 font-serif">
      <div className="flex items-center justify-between px-4 py-4 md:hidden lg:hidden">
        <Link href="/" className="flex items-center gap-[1vw]">
          <Image src={HSAlogo} alt="logo" className="w-12" />
          <div className="text-[3vw] text-white sm:text-[2vw]">HSA</div>
        </Link>
        <div
          className="my-2 p-2 text-hsa-gray-100 hover:cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <Menu />
        </div>
      </div>

      <div className="hidden justify-between py-4 text-hsa-tan-100 md:flex lg:flex">
        <Link href="/" className="ml-[4%] flex items-center gap-[1vw]">
          <Image src={HSAlogo} alt="logo" className="w-12" />
          <div className="text-[3vw] sm:text-[2vw]">HSA</div>
        </Link>

        <div className="mr-[5%] flex items-center gap-[4vw] text-[3vw] sm:text-[2vw]">
          {tags.map(({ link, name }) => (
            <div key={link}>
              <Link
                href={link}
                className={`decoration-4 underline-offset-4 transition-all hover:underline ${
                  pathName === link
                    ? "underline"
                    : "decoration-hsa-blue-200 hover:text-hsa-blue-200"
                }`}
              >
                {name}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.2 }}
        className={`absolute left-0 top-20 z-50 w-full bg-hsa-pink-200 px-6 py-10 text-2xl text-hsa-tan-100 shadow-lg md:hidden lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        {tags.map(({ link, name }) => (
          <div key={link} className="py-2 text-center">
            <Link
              href={link}
              className={`decoration-4 underline-offset-4 transition hover:underline ${
                pathName === link
                  ? "underline"
                  : "decoration-hsa-blue-200 hover:text-hsa-blue-200"
              }`}
            >
              {name}
            </Link>
          </div>
        ))}
      </motion.div>

      <div className="h-4 bg-hsa-blue-100" />
    </nav>
  );
};

export default Navigation;
