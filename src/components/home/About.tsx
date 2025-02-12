import Image from "next/image";
import hsa6 from "@/public/assets/hsa6.svg";

const About = () => {
  return (
    <div>
      <div className="jus flex px-10 pb-5">
        <div className="flex flex-col gap-7 pl-10">
          <div className="flex justify-center">
            <Image src={hsa6} alt="HSA6" className="w-[200%]" />
          </div>

          <Image src={hsa6} alt="HSA6" className="scale-y-[-1] transform" />
        </div>
        <div></div>
      </div>
      <div className="mb-5 max-w-full bg-hsa-pink-400 p-4 shadow-md"></div>
    </div>
  );
};

export default About;
