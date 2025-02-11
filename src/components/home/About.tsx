import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="flex items-start">
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
      </div>

      <div className="h-8 w-full bg-hsa-pink-200 shadow-md"></div>
    </>
  );
};

export default About;
