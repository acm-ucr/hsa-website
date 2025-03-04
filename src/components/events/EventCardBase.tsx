import Image from "next/image";

// React
import * as motion from "motion/react-client";

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
      viewport={{ once: false, amount: 0.35 }}
    >
      <motion.div
        className="mb-6 mt-2 text-center font-songMyung text-3xl font-medium text-hsa-blue-100 md:text-6xl"
        variants={titleAnimation}
        transition={{ ...transition, delay: 0.5 }}
      >
        {title}
      </motion.div>
      <div className="flex flex-wrap items-center">
        <motion.div
          className="flex items-center md:mr-5"
          variants={imageAnimation}
          transition={{ ...transition, delay: 0.5 }}
        >
          <Image src={imageURL} width={width} height={height} alt="" />
        </motion.div>
        <motion.p
          className="flex-1 pt-2 font-openSans text-base font-medium text-gray-700 md:text-xl"
          variants={shortTextAnimation}
          transition={{ ...transition, delay: 0.5 }}
        >
          {shortDescription}
        </motion.p>
      </div>
      <motion.p
        className="mt-6 font-openSans text-base font-medium text-gray-700 md:ml-2 md:mr-16 md:text-xl"
        variants={longTextAnimation}
        transition={{ ...transition, delay: 0.5 }}
      >
        {longDescription}
      </motion.p>
    </motion.div>
  );
};

export default EventCardBase;
