import HeroCard from "./HeroCard";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center py-[7%]">
        <HeroCard />
        <Link
          className="mt-[3vw] w-[13vw] rounded-full bg-hsa-green-100 pb-3 pt-2 text-center text-[2vw] font-semibold text-white hover:bg-green-900 md:w-[10vw] md:text-[1.5vw]"
          href="https://discord.gg/BMx92Z2bsY"
        >
          Join us!
        </Link>
      </div>
      <div className="mb-5 max-w-full bg-hsa-yellow-100 p-4 shadow-md" />
  );
};

export default Hero;
