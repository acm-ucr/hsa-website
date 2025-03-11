import Image from "next/image";
import hero from "@/public/assets/hero.svg";

const HeroCard = () => {
  return (
    <div className="relative w-2/5 border-4 border-hsa-green-100 bg-white py-6">
      <Image
        className="absolute -left-[10vw] -top-[5vw] z-10 w-[24vw]"
        src={hero}
        alt="hero border component"
      />
      <div className="text-center font-songMyung text-[3vw] font-medium leading-tight text-hsa-red-100">
        Hmong Student <br /> Association <br /> est. 1996
      </div>
      <Image
        className="absolute -right-[10vw] top-[6vw] z-10 w-[24vw] scale-x-[-1] scale-y-[-1] sm:top-[4vw] md:top-[0vw]"
        src={hero}
        alt="hero border component"
      />
    </div>
  );
};

export default HeroCard;
