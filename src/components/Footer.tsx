import { footers } from "@/data/FooterData";
import Border from "@/components/Border";
import Link from "next/link";
import Image from "next/image";
import footerImage from "@/public/assets/HSAlogo.svg";

const Footer = () => {
  return (
    <>
      <Border />
      <div className="flex items-center justify-between bg-hsa-gray-200 p-2">
        <Image
          src={footerImage}
          alt="Image2"
          className="ml-2 flex w-[10%] justify-items-start p-1 md:w-14"
        />

        <div className="mr-2 flex place-content-center font-openSans text-lg font-semibold text-white md:mr-4 md:text-xl">
          <p className="mr-3 flex">Contact Us!</p>

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
    </>
  );
};

export default Footer;
