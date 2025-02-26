import Image from "next/image";
import hsa5 from "@/public/assets/hsa5.svg";

type props = {
  title: string;
};

const Header = ({ title }: props) => {
  return (
    <div className="flex flex-row justify-between bg-hsa-gray-100 drop-shadow-xl">
      <div className="flex flex-row justify-center overflow-hidden">
        <Image src={hsa5} alt="HSA5" className="relative top-1/3 w-2/3" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="w-full whitespace-nowrap font-songMyung text-3xl text-hsa-gray-300 md:text-6xl">
          {title}
        </div>
      </div>
      <div className="flex flex-row justify-center overflow-hidden">
        <Image src={hsa5} alt="HSA5" className="relative bottom-1/3 w-2/3" />
      </div>
    </div>
  );
};

export default Header;
