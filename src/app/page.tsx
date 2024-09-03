import Image from "next/image";
import Hero from "./components/Hero";
import About from "./about/page";
import Projects from "./components/Projects";
import Indroductory from "./components/Indroductory";
import Services from "./services/page";
export default function Home() {
  return (
   <div className="dark:bg-gray-950 bg-white">
    <Hero/>
    <About/>
    <Indroductory/>
    <Projects/>
    <Services/>
    </div>
  );
}
