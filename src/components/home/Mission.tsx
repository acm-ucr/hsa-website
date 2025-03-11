import hsa4 from "@/public/assets/hsa4.svg";
import Image from "next/image";
import * as motion from "motion/react-client";

const Mission = () => {
  return (
    <>
      <div className="my-5 flex w-full flex-col justify-between p-12 md:flex-row">
        <div className="text-center font-songMyung text-5xl text-hsa-blue-100 md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -75 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Our Mission
          </motion.div>
          <div className="-ml-4 p-5 text-center font-openSans text-xl font-semibold text-hsa-gray-300 md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -75 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Here at HSA @UCR, our mission is to spread knowledge of our
              history & culture, and to build a safe & uplifting Hmong community
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center"
        >
          <Image src={hsa4} alt="HSA" className="w-1/4 md:w-3/4" />
        </motion.div>
      </div>
      <div className="h-8 max-w-full bg-hsa-green-100 shadow-md" />
    </>
  );
};

export default Mission;
