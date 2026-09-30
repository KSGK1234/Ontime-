import { useEffect } from "react";
import Lenis from "lenis";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Manage from "./components/Manage";
import Features from "./components/Features";
import IntelligenceHero from "./components/IntelligenceHero";
import Problem from "./components/Problem";
import Outcomes from "./components/Outcomes";
import IntelligenceLayer from "./components/IntelligenceLayer";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="grain min-h-screen bg-paper text-ink">
      <Nav />
      <div className="relative mx-auto max-w-[1440px] border-x border-line">
        <main>
          <Hero />
          <Marquee />
          <Manage />
          <Features />
          <IntelligenceHero />
          <Problem />
          <Outcomes />
          <IntelligenceLayer />
          <FinalCTA />
        </main>
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
}

export default App;
