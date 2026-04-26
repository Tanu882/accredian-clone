import Partners from "../components/Partners";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";



export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Partners />
    </div>
  );
}