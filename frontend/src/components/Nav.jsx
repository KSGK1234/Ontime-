import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { openDemoModal } from "../lib/ui";

const LINKS = [
  { label: "Product", to: "/" },
  { label: "Intelligence", to: "/intelligence" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goPage = (to) => {
    setOpen(false);
    if (pathname !== to) navigate(to);
    else window.scrollTo({ top: 0 });
  };

  const goDemo = () => {
    setOpen(false);
    openDemoModal();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-void/70 backdrop-blur-xl">
      <nav
        className={`mx-auto grid max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-5 transition-all duration-300 md:px-10 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        <div className="flex items-center">
          <button
            data-testid="nav-mobile-toggle"
            className="cursor-pointer rounded-lg border border-white/10 p-2 text-slate-300 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
          <div className="hidden items-center gap-9 md:flex">
            {LINKS.map((l) => {
              const active = pathname === l.to;
              return (
                <button
                  key={l.to}
                  data-testid={`nav-link-${l.label.toLowerCase()}`}
                  onClick={() => goPage(l.to)}
                  className={`group relative cursor-pointer font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-white ${
                    active ? "text-white" : "text-slate-400"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-brand-hi transition-all duration-300 group-hover:w-full ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <button
          data-testid="nav-logo-button"
          onClick={() => goPage("/")}
          className="cursor-pointer justify-self-center"
          aria-label="Pragmr OnTime — home"
        >
          <Logo className={`w-auto transition-all duration-300 ${scrolled ? "h-5 md:h-6" : "h-7"}`} />
        </button>

        <div className="flex items-center justify-end">
          <button
            data-testid="nav-book-demo-button"
            onClick={goDemo}
            className="hidden cursor-pointer rounded-full bg-brand px-6 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_0_24px_rgba(81,78,179,0.45)] transition-all duration-300 hover:bg-brand-hi hover:shadow-[0_0_36px_rgba(99,96,212,0.6)] sm:block"
          >
            Book a Demo
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="glass mx-4 mt-2 rounded-2xl p-4 md:hidden"
          >
            {LINKS.map((l) => (
              <button
                key={l.to}
                data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                onClick={() => goPage(l.to)}
                className="block w-full cursor-pointer rounded-lg px-3 py-3 text-left font-mono text-[11px] uppercase tracking-[0.2em] text-slate-300 hover:bg-white/5"
              >
                {l.label}
              </button>
            ))}
            <button
              data-testid="nav-mobile-book-demo-button"
              onClick={goDemo}
              className="mt-3 w-full cursor-pointer rounded-full bg-brand px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white"
            >
              Book a Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
