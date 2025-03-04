import Image from "next/image";
import * as motion from "motion/react-client";

const Page = (props: {
  position: string;
  name: string;
  image: string;
  badge: string;
}) => {
  const slidedownanimation = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className="flex flex-col items-center p-4">
      <motion.div
        variants={slidedownanimation}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        initial="hidden"
        whileInView="show"
      >
        <div className="relative flex h-36 w-36 md:h-60 md:w-60 lg:h-72 lg:w-72">
          <Image
            src={props.image}
            alt="boardmember"
            width={144}
            height={144}
            className="h-full w-full rounded-full object-cover"
          />
          <Image
            src={props.badge}
            alt="badge"
            width={52}
            height={52}
            className="absolute bottom-3 w-1/4"
          />
        </div>
        <div className="mt-2 text-center">
          <div className="whitespace-nowrap font-songMyung text-2xl text-hsa-blue-100 md:text-4xl lg:text-3xl">
            {props.name}
          </div>
          <div className="font-openSans text-base text-hsa-gray-300 md:text-xl lg:text-xl">
            {props.position}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
