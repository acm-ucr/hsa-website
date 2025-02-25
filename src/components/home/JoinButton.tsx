import Link from "next/link";
const JoinButton = () => {
  return (
    <div className="mx-auto mb-12 max-w-44 rounded-full bg-hsa-green-100 pb-3 pt-2 text-center font-openSans text-2xl font-semibold text-hsa-tan-100 hover:bg-green-900 hover:font-bold hover:text-hsa-tan-200 hover:drop-shadow-lg">
      <Link href="https://discord.gg/BMx92Z2bsY">Join us!</Link>
    </div>
  );
};

export default JoinButton;
