import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

const PAGE_LINKS = [
  { label: "Product", to: "/" },
  { label: "Intelligence", to: "/intelligence" },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-white/[0.07]">
      <div className="px-5 py-12 md:px-10 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <button
              data-testid="footer-logo-button"
              onClick={() => navigate("/")}
              className="cursor-pointer"
            >
              <Logo className="h-8" />
            </button>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Predict project delivery before delays become problems.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {PAGE_LINKS.map((l) => (
              <button
                key={l.to}
                data-testid={`footer-link-${l.label.toLowerCase()}`}
                onClick={() => navigate(l.to)}
                className="cursor-pointer font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-white"
              >
                {l.label}
              </button>
            ))}
            <a
              data-testid="footer-link-pragmr-site"
              href="https://www.pragmr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-300 transition-colors hover:text-indigo-200"
            >
              pragmr.com
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
            © {new Date().getFullYear()} Pragmr — OnTime
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">
            Delivery Intelligence
          </p>
        </div>
      </div>
    </footer>
  );
}
