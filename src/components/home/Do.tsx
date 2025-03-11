import * as motion from "motion/react-client";

const Do = () => {
  return (
    <div className="bg-hsatan-100 w-full flex-row rounded-lg">
      <div className="mb-2 ml-12 mt-14 h-3/4 w-3/4 space-y-5">
        <div className="font-songMyung text-3xl text-hsa-blue-100 md:text-4xl lg:text-5xl">
          <motion.div
            initial={{ opacity: 0, x: -75 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            What We Do
          </motion.div>
        </div>
        <div className="ml-1 pb-8 font-openSans text-xs font-semibold text-hsa-gray-300 md:text-base lg:text-xl">
          <motion.div
            initial={{ opacity: 0, x: -75 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            We are the Hmong Student Association (HSA) at the University of
            California, Riverside (UCR), and we need your support! As an
            organization committed to empowering and uniting Hmong students on
            campus, we strive to create an inclusive, educational, and
            culturally enriching space for students to learn, grow, and connect.
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Do;
