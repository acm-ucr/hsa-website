import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-hsa-pink-200 font-serif">
      <div className="mx-auto flex py-8 text-white">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/hsaImage.webp"
              alt="logo"
              className="ml-12 mr-8 h-20 w-20"
            />
          </Link>
          <div className="text-6xl"> HSA</div>
        </div>
        <ul className="ml-60 flex items-center space-x-36 text-4xl">
          <li
            className="hover:text-hsa-pink-300 hover:underline"
            style={{
              textDecorationThickness: "10px",
              textUnderlineOffset: "12px",
            }}
          >
            <Link href="/home">Home</Link>
          </li>
          <li
            className="hover:text-hsa-pink-300 hover:underline"
            style={{
              textDecorationThickness: "10px",
              textUnderlineOffset: "12px",
            }}
          >
            <Link href="/board">Board</Link>
          </li>
          <li
            className="hover:text-hsa-pink-300 hover:underline"
            style={{
              textDecorationThickness: "10px",
              textUnderlineOffset: "12px",
            }}
          >
            <Link href="/events">Events</Link>
          </li>
          <li
            className="hover:text-hsa-pink-300 hover:underline"
            style={{
              textDecorationThickness: "10px",
              textUnderlineOffset: "12px",
            }}
          >
            <Link href="/calendar">Calendar</Link>
          </li>
          <li
            className="hover:text-hsa-pink-300 hover:underline"
            style={{
              textDecorationThickness: "10px",
              textUnderlineOffset: "12px",
            }}
          >
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
      </div>
      <div className="h-4 bg-hsa-blue-100"></div>
    </nav>
  );
};

export default Navigation;
