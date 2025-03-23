import Link from "next/link";

interface ButtonProps {
  label: string;
  link: string;
  tab: string;
}

const Button = ({ label, link, tab }: ButtonProps) => {
  return (
    <Link href={link} target={tab}>
      <div className="mx-auto max-w-44 transform rounded-full bg-hsa-green-100 pb-3 pt-2 text-center font-openSans text-2xl font-semibold text-white duration-300 hover:scale-110 hover:bg-green-900 hover:text-white hover:drop-shadow-lg">
        {label}
      </div>
    </Link>
  );
};

export default Button;
