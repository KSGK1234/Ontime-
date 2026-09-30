import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { scrollToId } from "../lib/scroll";

const LINKS = [
  { label: "Product", id: "manage" },
  { label: "Features", id: "features" },
  { label: "Intelligence", id: "intelligence" },
  { label: "Outcomes", id: "outcomes" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
        <button
          data-testid="nav-logo-button"
          onClick={() => go("hero")}
          className="cursor-pointer"
          aria-label="Pragmr OnTime — back to top"
        >
          <Logo />
        </button>

        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => go(l.id)}
              className="group relative cursor-pointer font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            data-testid="nav-book-demo-button"
            onClick={() => go("demo")}
            className="hidden cursor-pointer bg-brand px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-brand-dark sm:block"
          >
            Book a Demo
          </button>
          <button
            data-testid="nav-mobile-toggle"
            className="cursor-pointer border border-line p-2 text-ink md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
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
            className="border-b border-line bg-paper px-5 pb-5 pt-2 md:hidden"
          >
            {LINKS.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-mobile-link-${l.id}`}
                onClick={() => go(l.id)}
                className="block w-full cursor-pointer border-b border-line py-3.5 text-left font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600 hover:text-ink"
              >
                {l.label}
              </button>
            ))}
            <button
              data-testid="nav-mobile-book-demo-button"
              onClick={() => go("demo")}
              className="mt-4 w-full cursor-pointer bg-brand px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white"
            >
              Book a Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
