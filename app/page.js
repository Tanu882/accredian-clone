import Partners from "../components/Partners";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Edge from "../components/Edge";
import Domain from "../components/Domain";




export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Partners />
      <Edge />
      <Domain />
    </div>
  );
}