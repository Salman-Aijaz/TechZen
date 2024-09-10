import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Indroductory from "./components/Indroductory";
import AboutUs from "./components/AboutUs";
import Team from "./components/Team";
import OurServices from "./components/OurServices";
import ReachOut from "./components/ReachOut";
export default function Home() {
  return (
   <div className="bg-gray-50">
    <Hero/>
    <AboutUs/>
    <Indroductory/>
    <Projects/>
    <Team/>
    <OurServices/>
    <ReachOut/>
    </div>
  );
}
