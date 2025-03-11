import HeroCard from "./HeroCard";
import Link from "next/link";
import * as motion from "motion/react-client";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center py-[7%]">
        <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
        <HeroCard />
        <motion.div
        className="mx-auto mb-12 max-w-44 rounded-full bg-hsa-green-100 pb-3 pt-2 text-center font-openSans text-2xl font-semibold text-hsa-tan-100 hover:bg-green-900 hover:font-bold hover:text-hsa-tan-200 hover:drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link href="https://discord.gg/BMx92Z2bsY">Join us!</Link>
      </motion.div>
          </motion.div>
      </div>
      <div className="mb-5 max-w-full bg-hsa-yellow-100 p-4 shadow-md" />
    </div>
  );
};

export default Hero;
