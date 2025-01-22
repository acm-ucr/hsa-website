import Image from "next/image";
import hsa5 from "@/public/hsa5.svg";

type props = {
  title: string;
};

const Header = ({ title }: props) => {
  return (
    <div className="pt-y flex flex-row justify-between border-t-4 border-indigo-600 bg-hsa-gray-100">
      <div className="flex flex-col justify-end">
        <div className="flex flex-row justify-center">
          <Image src={hsa5} alt="HSA5" className="w-1/2" />
        </div>
      </div>
      <div className="flex flex-col self-center">
        <div className="h-5 w-full pr-10 text-4xl">{title}</div>
      </div>
      <div className="flex flex-col justify-start">
        <div className="flex flex-row justify-center">
          <Image src={hsa5} alt="HSA5" className="w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Header;
