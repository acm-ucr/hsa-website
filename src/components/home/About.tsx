import Image from "next/image";

const About = () => {
  return (
    <div className="mx-auto p-10">
      <div className="mt-10 flex">
        <div className="flex w-2/5 flex-col items-center">
          <div className="mb-6">
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

          <div className="mb-10 rotate-180">
            <Image
              src="/assets/hsa6.svg"
              width={320}
              height={320}
              alt="asset image"
            />
          </div>
        </div>

        <div className="flex w-3/5 flex-col justify-center text-right">
          <div className="justify-between align-middle">
            <h1 className="ml-5 p-5 font-serif text-6xl text-blue-800">
              About Us
            </h1>
            <p className="ml-5 p-5 text-2xl text-gray-800">
              HSA @ UCR is one of the few Hmong Student Associations in Southern
              California. We strive to be a "home away from home" for all
              students, whatever their background or identity.
            </p>
          </div>
        </div>
      </div>

      <div className="h-10 bg-hsa-pink-200 shadow-md"></div>
    </div>
  );
};

export default About;
