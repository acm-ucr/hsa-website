import Border from "@/public/assets/border.svg";
import Image from "next/image";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import footerImage from "@/public/assets/footerImg.webp";
import Linktree from "@/public/assets/tree.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <Image src={Border} alt="border" className="pb-10 pr-8" />
      <div className="bg-hsa-gray-200 py-6">
        <div className="sm:px-15 flex justify-between px-8">
          <div className="flex justify-start">
            <Image src={footerImage} alt="Image2" className="w-10 sm:w-14" />
          </div>
          <div className="flex w-[50%] justify-end gap-3 pb-1 pt-3 font-semibold text-white">
            <div className="pb-4 text-xl duration-300">Contact us!</div>
            <Link
              href="https://www.instagram.com/hsa.ucr/"
              target="_blank"
              className="duration-300 hover:scale-110"
            >
              <Instagram />
            </Link>
            <Link
              href="https://www.facebook.com/hsa.ucriverside"
              target="_blank"
              className="duration-300 hover:scale-110"
            >
              <Facebook />
            </Link>
            <Link
              href="linktr.ee/hsaucr"
              target="_blank"
              className="w-5 duration-300 hover:scale-110"
            >
              <Image src={Linktree} alt="Linktree" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
