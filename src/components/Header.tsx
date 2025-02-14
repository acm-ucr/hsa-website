import Image from "next/image";
import hsa5 from "@/public/assets/hsa5.svg";

type props = {
  title: string;
};

const Header = ({ title }: props) => {
  return (
    <div className="flex flex-row justify-between bg-hsa-gray-100 drop-shadow-2xl">
      <div className="flex flex-row justify-center overflow-hidden">
        <Image src={hsa5} alt="HSA5" className="relative top-1/3 w-3/4" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="w-full pr-10 font-songMyung text-3xl text-gray-700 md:text-5xl lg:text-7xl">
          {title}
        </div>
      </div>
      <div className="flex flex-row justify-center overflow-hidden">
        <Image src={hsa5} alt="HSA5" className="relative bottom-1/3 w-3/4" />
      </div>
    </div>
  );
};

export default Header;
