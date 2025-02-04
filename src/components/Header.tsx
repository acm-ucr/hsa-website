import Image from "next/image";
import hsa5 from "@/public/assets/hsa5.svg";

type props = {
  title: string;
};

const Header = ({ title }: props) => {
  return (
    <div className="flex flex-row justify-between bg-hsa-gray-100">
      <div className="mt-12 flex flex-row justify-center">
        <Image src={hsa5} alt="HSA5" className="w-1/2" />
      </div>
      <div className="ml-5 flex flex-col justify-center">
        <div className="mb-5 h-5 w-full pr-10 text-4xl">{title}</div>
      </div>
      <div className="mb-12 flex flex-row justify-center">
        <Image src={hsa5} alt="HSA5" className="w-1/2" />
      </div>
    </div>
  );
};

export default Header;
