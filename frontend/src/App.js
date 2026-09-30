import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import DemoModal from "./components/DemoModal";
import Home from "./pages/Home";
import IntelligencePage from "./pages/IntelligencePage";
import { scrollToId } from "./lib/scroll";

function ScrollManager() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (state?.scrollTo) {
      const t = setTimeout(() => scrollToId(state.scrollTo), 400);
      return () => clearTimeout(t);
    }
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

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
    <BrowserRouter>
      <ScrollManager />
      <div className="grain min-h-screen bg-paper text-ink">
        <Nav />
        <div className="relative mx-auto max-w-[1440px] border-x border-line">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/intelligence" element={<IntelligencePage />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <BackToTop />
        <DemoModal />
      </div>
    </BrowserRouter>
  );
}

export default App;
