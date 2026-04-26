import Partners from "../components/Partners";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Edge from "../components/Edge";
import Domain from "../components/Domain";
import Courses from "../components/Courses";
import WhoShouldJoin from "@/components/WhoShouldJoin";
import CATFramework from "@/components/CATFramework";
import Results from "@/components/Results";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";




export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Partners />
      <Edge />
      <Domain />
      <Courses />
      <WhoShouldJoin/>
      <CATFramework/>
      <Results/>
      <FAQ/>
      <CTA/>
      <Footer/>
      <Chatbot/>
    </div>
  );
}