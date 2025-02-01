import hsa4 from "@/public/assets/hsa4.svg";
import Image from "next/image";

const Mission = () => {
  return (
    <>
      <div className="flex w-full justify-between">
        <div className="w-3/4 flex-col p-10">
          <div className="ml-5 p-5 text-left font-serif text-6xl text-blue-800">
            Our Mission
          </div>
          <div className="ml-5 p-5 text-left text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <div className="relative left-6 flex justify-end">
          <Image src={hsa4} alt="HSA" className="w-3/4" />
        </div>
      </div>
      <div className="mb-5 max-w-full bg-hsa-green-100 p-4 shadow-md"></div>
    </>
  );
};

export default Mission;
