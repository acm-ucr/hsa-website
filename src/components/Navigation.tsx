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
      <div className="mx-auto flex py-8 text-white">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image src={hsaImage} alt="logo" className="ml-12 mr-10" />
          </Link>
          <div className="ml-[30%] text-5xl"> HSA</div>
        </div>
        <ul className="ml-auto flex items-center gap-14 pr-12 text-3xl">
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
