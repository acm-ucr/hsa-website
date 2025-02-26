import { footers } from "../data/FooterData";
import Link from "next/link";
import Image from "next/image";
import Border from "@/public/assets/border.svg";
import footerImage from "@/public/assets/footerImg.webp";
import {Facebook} from "lucide-react";

const Footer = () => {
  return (
    <div>
      <Image src={Border} alt="border" className="pb-10 pr-8" />
      <div className=" flex items-center justify-between bg-hsa-gray-200">
          <Image src={footerImage} alt="Image2" className="flex w-full justify-items-start ml-8 sm:w-14 bg-red-300"/>

          <div className="flex w-1/4 font-semibold text-white bg-slate-600">
            <div className="pb-4 text-xl duration-300">Contact us!</div>
          <Link
              href= "https://www.instagram.com/hsa.ucr/" 
              target="_blank"
              className="duration-300 hover:scale-110"
            ></Link>
          <Facebook/>
            {footers.map((link, index) => (
              <Link
              key = {index}
              href= {link.link}  
              target="_blank"
              className="duration-300 hover:scale-110"
            >
              {link.icon}
            </Link>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Footer;
