"use client";
import { tags } from "@/data/NavBarData";
import Link from "next/link";
import Image from "next/image";
import hsaImage from "@/public/hsaImage.webp";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathName = usePathname();

  return (
    <nav className="bg-hsa-pink-200 font-serif">
      <div className="flex justify-between py-4 text-hsa-tan-100">
        <Link href="/" className="ml-[4%] flex items-center gap-[1vw]">
          <Image src={hsaImage} alt="logo" className="w-12" />
          <div className="text-[3vw] sm:text-[2vw]"> HSA</div>
        </Link>

        <ul className="mr-[5%] flex items-center gap-[2vw] text-[3vw] sm:text-[2vw]">
          {tags.map((tag) => (
            <li key={tag.link}>
              <Link
                href={tag.link}
                className={`${
                  pathName === tag.link
                    ? "text-hsa-pink-300 underline decoration-[10px] underline-offset-[12px]"
                    : "hover:text-hsa-pink-300"
                }`}
              >
                {tag.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-4 bg-hsa-blue-100"></div>
    </nav>
  );
};

export default Navigation;
