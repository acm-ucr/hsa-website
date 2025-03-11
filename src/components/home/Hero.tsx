import HeroCard from "./HeroCard";
import Link from "next/link";
import * as motion from "motion/react-client";

const Hero = () => {
  return (
    <div>
      <motion.div
        className="flex flex-col items-center py-[7%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <HeroCard />
        <motion.div
          className="mt-[3vw] w-[13vw] rounded-full bg-hsa-green-100 pb-3 pt-2 text-center text-[2vw] font-semibold text-white hover:bg-green-900 md:w-[10vw] md:text-[1.5vw]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="https://discord.gg/BMx92Z2bsY">Join us!</Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="mb-5 max-w-full bg-hsa-yellow-100 p-4 shadow-md"
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />
    </div>
  );
};

export default Hero;
