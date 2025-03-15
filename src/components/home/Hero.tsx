import HeroCard from "./HeroCard";
import Button from "@/components/Button";

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
        <Button
          label="Join us!"
          target="_blank"
          link="https://discord.gg/BMx92Z2bsY"
        />
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
