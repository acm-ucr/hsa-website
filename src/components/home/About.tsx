import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col my-10 md:ml-12 items-center">
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

        <div className="my-5 flex flex-col w-full md:w-1/2 justify-center px-4 md:px-24 text-center md:text-right max-w-full">
          <h1 className="font-songMyung md:text-5xl text-hsa-blue-100">
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
