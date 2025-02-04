import Border from "@/public/assets/border.svg";
import Image from "next/image";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import Image2 from "@/public/assets/Image2.svg";
import Linktree from "@/public/assets/Linktree.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <Image src={Border} alt="border" className="pb-10 pr-8" />
      <div className="bg-hsa-gray-200 py-6">
        <div className="sm:px-15 flex justify-between px-8">
          <div className="flex justify-start">
            <Image src={Image2} alt="Image2" className="w-10 sm:w-14" />
          </div>
          <div className="flex w-[50%] justify-end gap-3 pb-1 pt-3 font-semibold text-white">
            <div className="pb-4 text-xl duration-300 hover:scale-110">
              Contact us!
            </div>
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
            <Link href="linktr.ee/hsaucr" target="_blank" className="w-5">
              <Image
                src={Linktree}
                alt="Facebook"
                className="duration-300 hover:scale-110"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
