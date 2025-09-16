import About from "@/components/layout/About";
import BeachInspiration from "@/components/layout/BeachInspiration";
import Designed from "@/components/layout/Designed";
import Footer from "@/components/layout/Footer";
import CountDown from "@/components/sections/CountDwon";
import FrequtlyQuestions from "@/components/sections/FrequtlyQuestions";

import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
     <Hero/>
     <About/>
     <BeachInspiration/>
     <Designed/>
     <FrequtlyQuestions/>
     <Testimonials/>
     <CountDown/>
     <Footer/>
    </main>
  );
}
