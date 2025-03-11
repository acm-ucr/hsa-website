import hsa4 from "@/public/assets/hsa4.svg";
import Image from "next/image";
import * as motion from "motion/react-client";

const Mission = () => {
  return (
    <>
      <div className="flex w-full justify-between">
        <div className="my-5 w-3/4 flex-col p-12">
          <div className="text-left font-songMyung text-5xl text-hsa-blue-100">
            Our Mission
          </div>
          <div className="-ml-4 mr-5 p-5 text-left font-openSans text-xl font-semibold text-hsa-gray-300">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              Here at HSA @UCR, our mission is to spread knowledge of our
              history & culture, and to build a safe & uplifting Hmong community
            </motion.div>
          </div>
        </div>
        <div className="relative flex">
          <Image src={hsa4} alt="HSA" className="w-3/4" />
        </div>
      </div>
      <div className="h-8 max-w-full bg-hsa-green-100 shadow-md" />
    </>
  );
};

export default Mission;
