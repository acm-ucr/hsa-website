import HeroCard from "./HeroCard";
import Image from "next/image";
import hero from "@/public/assets/hero.svg";
import Link from "next/link";
import * as motion from "motion/react-client";

const Hero = () => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
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
      <motion.div
        className="mx-auto mb-12 max-w-44 rounded-full bg-hsa-green-100 pb-3 pt-2 text-center font-openSans text-2xl font-semibold text-hsa-tan-100 hover:bg-green-900 hover:font-bold hover:text-hsa-tan-200 hover:drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link href="https://discord.gg/BMx92Z2bsY">Join us!</Link>
      </motion.div>
      <motion.div
        className="mb-5 h-10 max-w-full bg-hsa-yellow-100 p-4"
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />
    </motion.div>
  );
};

export default Hero;
