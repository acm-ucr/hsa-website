import hsa4 from "@/public/assets/hsa4.svg";
import Image from "next/image";
import * as motion from "motion/react-client";

const Mission = () => {
  return (
    <>
      <div className="my-5 flex w-full max-w-full flex-col justify-center p-12 md:flex-row">
        <div className="text-center font-songMyung text-5xl text-hsa-blue-100 md:text-left">
          Our Mission
          <div className="-ml-4 p-5 text-center font-openSans text-xl font-semibold text-hsa-gray-300 md:text-left">
            Here at HSA @UCR, our mission is to spread knowledge of our history
            and culture while fostering a strong, supportive, and uplifting
            Hmong community. We strive to create a safe and welcoming space
            where individuals can learn, connect, and celebrate our rich
            heritage. Through cultural events, educational workshops, and
            community outreach, we aim to empower our members with a deeper
            understanding of Hmong traditions, language, and history. Our
            organization is dedicated to promoting unity, inclusivity, and pride
            in our identity while building lasting connections within the UCR
            campus and beyond.
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
