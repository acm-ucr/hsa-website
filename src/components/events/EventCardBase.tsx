import Image from "next/image";
import * as motion from "motion/react-client";

const titleAnimation = {
  hidden: { opacity: 0.1, y: -25 },
  show: {
    opacity: 1,
    y: 0,
  },
};
const imageAnimation = {
  hidden: { opacity: 0.1, x: -25 },
  show: {
    opacity: 1,
    x: 0,
  },
};
const shortTextAnimation = {
  hidden: { opacity: 0.1, x: 25 },
  show: {
    opacity: 1,
    x: 0,
  },
};
const longTextAnimation = {
  hidden: { opacity: 0.1, y: 25 },
  show: {
    opacity: 1,
    y: 0,
  },
};
const transition = {
  duration: 0.25,
};

interface EventCardBaseProps {
  title: string;
  shortDescription: string;
  longDescription: string;
  imageURL: string;
  width: number;
  height: number;
}

const EventCardBase = ({
  title,
  shortDescription,
  longDescription,
  imageURL,
  width,
  height,
}: EventCardBaseProps) => {
  return (
    <motion.div
      className="h-200 mx-8 my-10 max-w-4xl rounded-2xl bg-white p-10 shadow-lg md:mx-auto"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        className="mb-6 mt-2 text-center font-songMyung text-3xl font-medium text-hsa-blue-100 md:text-6xl"
        variants={titleAnimation}
        transition={{ ...transition, delay: 0.2 }}
      >
        {title}
      </motion.div>
      <div className="flex flex-wrap items-center">
        <motion.div
          className="flex items-center md:mr-5"
          variants={imageAnimation}
          transition={{ ...transition, delay: 0.2 }}
        >
          <Image src={imageURL} width={width} height={height} alt="" />
        </motion.div>
        <motion.p
          className="flex-1 pt-2 text-center font-openSans text-base font-medium text-gray-700 md:text-left md:text-xl"
          variants={shortTextAnimation}
          transition={{ ...transition, delay: 0.2 }}
        >
          {shortDescription}
        </motion.p>
      </div>
      <motion.p
        className="mt-6 text-center font-openSans text-base font-medium text-gray-700 md:ml-2 md:mr-16 md:text-left md:text-xl"
        variants={longTextAnimation}
        transition={{ ...transition, delay: 0.2 }}
      >
        {longDescription}
      </motion.p>
    </motion.div>
  );
};

export default EventCardBase;
