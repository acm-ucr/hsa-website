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
            Here at HSA @UCR, our mission is to spread knowledge of our history
            & culture, and to build a safe & uplifting Hmong community
          </div>
        </div>
        <div className="relative flex">
          <Image src={hsa4} alt="HSA" className="w-3/4" />
        </div>
      </div>
      <motion.div
        className="mb-5 h-10 max-w-full bg-hsa-green-100 p-4"
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "100%" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </>
  );
};

export default Mission;
