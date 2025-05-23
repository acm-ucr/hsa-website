import * as motion from "motion/react-client";

const Do = () => {
  return (
    <div className="mb-2 mt-14 flex w-full flex-col justify-center rounded-lg">
      <div className="text-center font-songMyung text-5xl text-hsa-blue-100 md:pl-9 md:text-left md:text-4xl lg:text-5xl">
        <motion.div
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          What We Do
        </motion.div>
      </div>
      <div className="pb-8 pl-10 pr-10 pt-5 text-center font-openSans text-2xl font-semibold text-hsa-gray-300 md:text-left md:text-xl">
        <motion.div
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          We are the Hmong Student Association (HSA) at the University of
          California, Riverside (UCR), and we need your support! As an
          organization committed to empowering and uniting Hmong students on
          campus, we strive to create an inclusive, educational, and culturally
          enriching space for students to learn, grow, and connect.
        </motion.div>
      </div>
    </div>
  );
};

export default Do;
