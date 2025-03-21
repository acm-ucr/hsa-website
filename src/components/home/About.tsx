import Image from "next/image";
import * as motion from "motion/react-client";

const animationX = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
  },
};
const animationFade = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0 },
};

const transition = {
  duration: 0.7,
};

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <motion.div
          className="my-10 flex flex-col items-center text-center md:ml-12"
          variants={animationX}
          transition={{ ...transition, delay: 0.2 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-6">
            <Image
              className="mx-auto w-3/4 md:w-full"
              src="/assets/hsa6.svg"
              width={320}
              height={320}
              alt="asset image"
            />
          </div>

          <div className="mb-6">
            <Image
              className="mx-auto w-3/4"
              src="/hsaPeople.webp"
              width={450}
              height={280}
              alt="hsa people image"
            />
          </div>

          <div className="rotate-180">
            <Image
              className="mx-auto w-3/4 md:w-full"
              src="/assets/hsa6.svg"
              width={320}
              height={320}
              alt="asset image"
            />
          </div>
        </motion.div>
        <motion.div
          className="my-5 flex w-full max-w-full flex-col justify-center px-4 text-center md:w-1/2 md:px-24 md:text-right"
          variants={animationFade}
          transition={{ ...transition, delay: 0.3 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="font-songMyung text-5xl text-hsa-blue-100">
            About Us
          </div>
          <p className="flex p-5 font-openSans text-2xl font-semibold text-hsa-gray-300 md:mt-4 md:p-0 md:text-xl">
            HSA @ UCR is one of the few Hmong Student Associations in Southern
            California. We strive to be a "home away from home" for all
            students, whatever their background or identity.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="mb-5 ml-auto h-10 max-w-full bg-hsa-pink-200 p-4"
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "100%" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </>
  );
};

export default About;
