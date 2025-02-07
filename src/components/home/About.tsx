import Image from "next/image";

const About = () => {
  return (
    <div className="mx-auto">
      <div className="mb-6 flex justify-center">
        <Image
          src="/assets/hsa6.svg"
          width={320}
          height={320}
          alt="asset image"
          className="ml-32 mr-auto"
        />
      </div>

      <div className="mb-6 flex justify-center">
        <Image
          src="/hsaPeople.webp"
          width={450}
          height={280}
          alt="hsa people image"
          className="ml-20 mr-auto"
        />
      </div>

      <div className="mb-10 flex rotate-180 justify-center">
        <Image
          src="/assets/hsa6.svg"
          width={320}
          height={320}
          alt="asset image"
          className="ml-auto mr-32"
        />
      </div>
      <div className="h-10 bg-hsa-pink-200 shadow-md"> </div>
    </div>
  );
};

export default About;
