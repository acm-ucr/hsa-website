import Image from "next/image";
import * as motion from "motion/react-client";
import Button from "../Button";

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
      <div className="my-5 flex flex-col items-center justify-around md:flex-row">
        <motion.div
          className="flex w-[55%] flex-row items-center justify-center md:w-[30%] md:flex-col"
          variants={animationX}
          transition={{ ...transition, delay: 0.2 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src="/assets/hsa6.svg"
            width={320}
            height={320}
            alt="asset image"
            className="w-[50%] -rotate-90 md:w-[70%] md:rotate-0"
          />

          <Image
            src="/hsaPeople.webp"
            width={450}
            height={280}
            alt="hsa people image"
            className="my-6 w-full"
          />

          <Image
            src="/assets/hsa6.svg"
            width={320}
            height={320}
            alt="asset image"
            className="w-[50%] rotate-90 md:w-[70%] md:rotate-180"
          />
        </motion.div>

        <div className="w-[80%] text-center md:w-[40%] md:text-right items-right">
          <p className="font-songMyung text-5xl text-hsa-blue-100">About Us</p>
          <p className="text-md my-4 mb-6 font-openSans font-semibold text-hsa-gray-300 md:text-lg">
            HSA @ UCR is dedicated to preserving Hmong culture and fostering a
            welcoming, inclusive community. We strive to be a "home away from
            home," providing a welcoming environment for individuals from all
            backgrounds and identities.
            <br /> <br />
            We offer social events, cultural workshops, academic support, and
            outreach to create meaningful connections and lifelong friendships.
            Whether you're Hmong or simply interested in learning more, HSA @
            UCR is a place to grow, engage, and celebrate diversity. Join us as
            we continue to build a strong and vibrant community together!
          </p>
          <div className="flex justify-end">
            <Button
              label="Join Us!"
              link="https://discord.gg/BMx92Z2bsY"
              target="_blank"
            />
          </div>
        </div>
      </div>

      <motion.div
        className="mb-5 ml-auto h-10 max-w-full shadow-md bg-hsa-pink-200 p-4"
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "100%" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </>
  );
};

export default About;
