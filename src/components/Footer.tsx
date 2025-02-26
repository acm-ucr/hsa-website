import { footers } from "../data/FooterData";
import Link from "next/link";
import Image from "next/image";
import Border from "@/public/assets/border.svg";
import footerImage from "@/public/assets/HSAlogo.svg";

const Footer = () => {
  return (
    <div>
      <Image src={Border} alt="border" className="pb-10 pr-8" />
      <div className="flex items-center justify-between bg-hsa-gray-200 p-2">
        <Image
          src={footerImage}
          alt="Image2"
          className="ml-2 flex w-[10%] justify-items-start p-1 md:w-14"
        />

        <div className="flex place-content-center font-openSans text-xl font-semibold text-white md:w-1/6">
          <p className="mr-3">Contact Us!</p>
          {footers.map(({ link, icon }, index) => (
            <Link
              key={index}
              href={link}
              target="_blank"
              className="mr-2 flex duration-300 hover:scale-110"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
