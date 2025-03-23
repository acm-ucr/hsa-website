import HeroCard from "./HeroCard";
import Image from "next/image";
import hero from "@/public/assets/hero.svg";
import Button from "@/components/Button";
import * as motion from "motion/react-client";

const Hero = () => {
  return (
    <div>
      <motion.div
        className="flex flex-col items-center pb-[4%] pt-[7%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <HeroCard />
        <Button
          label="Join us!"
          target="_blank"
          link="https://discord.gg/BMx92Z2bsY"
        />
      </motion.div>
      <div className="max-w-full bg-hsa-yellow-100 p-4 shadow-md" />
    </div>
  );
};

export default Hero;
