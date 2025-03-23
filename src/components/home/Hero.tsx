import HeroCard from "./HeroCard";
import Image from "next/image";
import hero from "@/public/assets/hero.svg";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <div className="">
      <div className="relative mx-auto w-2/5">
        <Image
          className="absolute -bottom-60 -left-40 z-10 transform"
          src={hero}
          alt="hero border component"
        />
        <Image
          className="absolute -right-44 top-4 z-10 scale-x-[-1] scale-y-[-1] transform"
          src={hero}
          alt="hero border component"
        />
      </div>
      <HeroCard />
      <Button
        label="Join Us!"
        link="https://discord.gg/BMx92Z2bsY"
        tab="_blank"
      />
      <div className="mt-10 max-w-full bg-hsa-yellow-100 p-4 shadow-md" />
    </div>
  );
};

export default Hero;
