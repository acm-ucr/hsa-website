import * as motion from "motion/react-client";
import Link from "next/link";

interface HeaderProps {
  label: string;
  target: string;
  link: string;
}

const Button = ({ label, target, link }: HeaderProps) => {
  return (
    <Link href={link} target={target} className="block">
      <motion.div
        className="mt-[3vw] w-[13vw] rounded-full bg-hsa-green-100 pb-3 pt-2 text-center text-[2vw] font-semibold text-white hover:bg-green-900 md:w-[10vw] md:text-[1.5vw]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
        whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
      >
        {label}
      </motion.div>
    </Link>
  );
};

export default Button;
