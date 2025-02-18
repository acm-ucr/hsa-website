import Image from "next/image";

const About = () => {
  return (
    <div>
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
