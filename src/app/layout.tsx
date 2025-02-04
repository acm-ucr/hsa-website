import "./globals.css";
import { Source_Serif_4, Open_Sans } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const srcSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
  variable: "--source-serif-4-font",
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
        className={`flex min-h-screen w-screen flex-col overflow-x-hidden bg-hsa-tan-100 ${openSans.variable} ${srcSerif.variable}`}
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
