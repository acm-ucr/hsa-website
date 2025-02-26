import Image from "next/image";
import * as motion from "motion/react-client";

// const animationY = {
//   hidden: { opacity: 0, y: -50 },
//   show: {
//     opacity: 1,
//     y: 0,
//   },
// };
// const animationScale = {
//   hidden: {
//     opacity: 0,
//     scale: 0.5,
//   },
//   show: {
//     opacity: 1,
//     scale: 1,
//   },
// };
const animationX = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
  },
};
const transition = {
  duration: 0.7,
};

const About = () => {
  return (
    <div>
      <div className="flex items-center">
        <motion.div
          className="my-10 ml-12 flex flex-col items-center"
          variants={animationX}
          transition={{ ...transition, delay: 0.2 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-6 items-center">
            <Image
              src="/assets/hsa6.svg"
              width={320}
              height={320}
              alt="asset image"
            />
          </div>

          <div className="mb-6">
            <Image
              src="/hsaPeople.webp"
              width={450}
              height={280}
              alt="hsa people image"
            />
          </div>

          <div className="rotate-180">
            <Image
              src="/assets/hsa6.svg"
              width={320}
              height={320}
              alt="asset image"
            />
          </div>
        </motion.div>

        <div className="my-5 flex w-3/4 flex-col justify-center pl-12 pr-12 text-right">
          <div className="font-songMyung text-5xl text-hsa-blue-100">
            About Us
          </div>
          <p className="mt-4 font-openSans text-xl font-semibold text-hsa-gray-300">
            HSA @ UCR is one of the few Hmong Student Associations in Southern
            California. We strive to be a "home away from home" for all
            students, whatever their background or identity.
          </p>
        </div>
      </div>

      <div className="h-10 bg-hsa-pink-200 shadow-md" />
    </div>
  );
};

export default About;
