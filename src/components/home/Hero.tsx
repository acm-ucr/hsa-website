import HeroCard from "./HeroCard";
import Image from "next/image";
import hero from "@/public/assets/hero.svg";
import Link from "next/link";

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
      <div className="mx-auto mb-12 max-w-44 transform rounded-full bg-hsa-green-100 pb-3 pt-2 text-center font-openSans text-2xl font-semibold text-white duration-300 hover:scale-110 hover:bg-green-900 hover:text-white hover:drop-shadow-lg">
        <Link href="https://discord.gg/BMx92Z2bsY">Join us!</Link>
      </div>
      <div className="mb-5 max-w-full bg-hsa-yellow-100 p-4 shadow-md" />
    </div>
  );
};

export default Hero;
