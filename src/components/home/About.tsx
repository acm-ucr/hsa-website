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
      <div className="flex items-center">
        <div className="my-10 ml-12 flex flex-col items-center">
          <div className="mb-6 items-center">
            <Image
              src="/assets/hsa6.svg"
              width={320}
              height={320}
              alt="asset image"
            />
          </div>

          <div className="mb-6">
            <Image
              src="/hsaPeople.webp"
              width={450}
              height={280}
              alt="hsa people image"
            />
          </div>

          <div className="rotate-180">
            <Image
              src="/assets/hsa6.svg"
              width={320}
              height={320}
              alt="asset image"
            />
          </div>
        </div>

        <div className="my-5 flex w-3/4 flex-col justify-center pl-12 pr-12 text-right">
          <h1 className="font-songMyung text-5xl text-hsa-blue-100">
            About Us
          </h1>
          <p className="mt-4 font-openSans text-xl font-semibold text-hsa-gray-300">
            HSA @ UCR is one of the few Hmong Student Associations in Southern
            California. We strive to be a "home away from home" for all
            students, whatever their background or identity.
          </p>
        </div>
      </div>

      <div className="h-10 bg-hsa-pink-200 shadow-md"></div>
   </div>
  );
};

export default About;
