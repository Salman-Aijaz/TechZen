import Image from "next/image";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Indroductory from "./components/Indroductory";
import Services from "./services/page";
import AboutUs from "./components/AboutUs";
import Team from "./components/Team";
export default function Home() {
  return (
   <div className="dark:bg-gray-950 bg-white">
    <Hero/>
    <AboutUs/>
    <Indroductory/>
    <Projects/>
    <Team/>
    <Services/>
    </div>
  );
}
