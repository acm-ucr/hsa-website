import Border from "./Border";
import Image from "next/image";
import Facebook from "@/public/assets/Facebook.webp";
import Instagram from "@/public/assets/insta.webp";
import Image2 from "@/public/assets/image2.webp";
import Linktree from "@/public/assets/Linktree.webp";
import Contact from "@/public/assets/contact.webp";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <Border />
      <div className="bg-hsa-gray-200 pb-6 pt-6">
        <div className="sm:px-15 flex flex-row justify-between px-8">
          <div className="flex flex-row justify-start">
            <Image src={Image2} alt="Image2" className="w-10 sm:w-14" />
          </div>
          <div className="flex w-[50%] flex-row justify-end gap-3 pb-1 pt-2">
            <Image src={Contact} alt="Contact" className="pb-1" />
            <Link href="https://www.instagram.com/hsa.ucr/" target="_blank">
              <Image src={Instagram} alt="Instagram" className="pt-1" />
            </Link>
            <Link
              href="https://www.facebook.com/hsa.ucriverside"
              target="_blank"
            >
              <Image src={Facebook} alt="Facebook" />
            </Link>
            <Link href="linktr.ee/hsaucr" target="_blank">
              <Image src={Linktree} alt="Facebook" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
