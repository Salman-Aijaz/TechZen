import Image from "next/image";
import Hero from "./components/Hero";
import About from "./about/page";
import Team from "./components/Team";
import Indroductory from "./components/Indroductory";
import Services from "./services/page";
export default function Home() {
  return (
   <div>
    <Hero/>
    <About/>
    <Indroductory/>
    <Team/>
    <Services/>
    </div>
  );
}
