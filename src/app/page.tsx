import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Mission from "@/components/home/Mission";
import Do from "@/components/home/Do";
import Example from "../components/example";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="">
      <Header title="About" />
      <Hero />
      <About />
      <Mission />
      <Do />
      <Example text1="Adjust" text2="these" text3="Props" />
    </div>
  );
};

export default Home;
