import HeroCard from "./HeroCard";
import JoinButton from "./JoinButton";
import Image from "next/image";
import hero from "@/public/assets/hero.svg";

const Hero = () => {
  return (
    <div className="">
      <div className="relative mx-auto w-2/5">
        <Image
          className="absolute -bottom-56 -left-36 z-10 transform"
          src={hero}
          alt="hero border component"
        />
        <Image
          className="absolute -right-36 top-8 z-10 scale-x-[-1] scale-y-[-1] transform"
          src={hero}
          alt="hero border component"
        />
      </div>
      <HeroCard />
      <JoinButton />
      <div className="mb-5 max-w-full bg-hsa-yellow-100 p-4 shadow-md"></div>
    </div>
  );
};

export default Hero;
