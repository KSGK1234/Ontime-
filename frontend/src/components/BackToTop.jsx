import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      data-testid="back-to-top"
      aria-label="Back to top"
      onClick={toTop}
      className={`glass fixed bottom-5 right-5 z-[70] flex h-11 w-11 items-center justify-center rounded-full text-slate-200 transition-all duration-300 hover:border-brand-hi/50 hover:text-indigo-300 md:bottom-8 md:right-8 ${
        show ? "pointer-events-auto opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <ArrowUp size={16} strokeWidth={1.5} />
    </button>
  );
}
