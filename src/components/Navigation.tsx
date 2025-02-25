"use client";
import { tags } from "@/data/NavBarData";
import Link from "next/link";
import Image from "next/image";
import HSAlogo from "@/public/assets/HSAlogo.svg";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathName = usePathname();

  return (
    <nav className="bg-hsa-pink-200 font-serif">
      <div className="flex justify-between py-4 text-hsa-tan-100">
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
      <div className="h-4 bg-hsa-blue-100" />
    </nav>
  );
};

export default Navigation;
