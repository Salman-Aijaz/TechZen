import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Indroductory from "./components/Indroductory";
export default function Home() {
  return (
   <div>
    <Hero/>
    <About/>
    <Indroductory/>
    <Team/>
    </div>
  );
}
