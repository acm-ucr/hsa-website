import "./globals.css";
import { Song_Myung, Open_Sans } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const songMyung = Song_Myung({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--song-myung-font",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--open-sans-font",
});

export const metadata = {
  title: "HSA Website",
  description:
    "Spreading knowledge of our history & culture, and building a safe & uplifting Hmong community @ UCR",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen w-screen flex-col overflow-x-hidden bg-hsa-tan-100 ${openSans.variable} ${songMyung.variable}`}
      >
        <ReactQueryClientProvider>
          <Navigation />
          {children}
          <Footer />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
