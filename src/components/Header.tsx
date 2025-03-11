import Image from "next/image";
import * as motion from "motion/react-client";
import hsa5 from "@/public/assets/hsa5.svg";

interface HeaderProps {
  title: string;
}

const fadeInFromTop = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const fadeInFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.75 } },
};

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="relative flex flex-row justify-between overflow-hidden bg-hsa-gray-100 drop-shadow-xl">
      <motion.div
        className="relative z-0 flex flex-row justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInFromBottom}
      >
        <Image src={hsa5} alt="HSA5" className="relative top-1/3 w-2/3" />
      </motion.div>

      <motion.div
        className="flex flex-col justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 0.3 }}
      >
        <div className="w-full whitespace-nowrap font-songMyung text-3xl text-hsa-gray-300 md:text-6xl">
          {title}
        </div>
      </motion.div>

      <motion.div
        className="flex flex-row justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInFromTop}
        transition={{ delay: 0.6 }}
      >
        <Image src={hsa5} alt="HSA5" className="relative bottom-1/3 w-2/3" />
      </motion.div>
    </div>
  );
};

export default Header;
