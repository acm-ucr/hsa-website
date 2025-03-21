import Image from "next/image";
import * as motion from "motion/react-client";
import hsa8 from "@/public/assets/hsa8.svg";
import hsa9 from "@/public/assets/hsa9.svg";

import Button from "@/components/Button";

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.1 } },
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.1 } },
};

const NotFound = () => {
  return (
    <div className="grid flex-grow grid-cols-3">
      <motion.div initial="hidden" animate="visible" variants={fadeInFromLeft}>
        <Image
          src={hsa8}
          alt="Gallery 2"
          className="mt-[10%] object-scale-down"
        />
      </motion.div>

      <div className="flex flex-col items-center justify-center">
        <motion.p
          className="font-songMyung text-9xl font-semibold text-hsa-blue-100"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.p>
        <motion.p
          className="font-lightweight pt-3 font-sans text-hsa-gray-300 md:text-base lg:text-xl"
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          page not found!
        </motion.p>
        <Button label="Home" target="" link="/" />
      </div>

      <div className="flex items-end justify-end">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInFromRight}
        >
          <Image
            src={hsa9}
            alt="Gallery 2"
            className="mb-[10%] object-scale-down"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
