import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check } from "lucide-react";
import { EASE } from "./reveal";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function DemoModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const onOpen = () => {
      setStatus("idle");
      setError("");
      setOpen(true);
      setTimeout(() => inputRef.current?.focus(), 250);
    };
    window.addEventListener("demo-modal:open", onOpen);
    return () => window.removeEventListener("demo-modal:open", onOpen);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const submit = async (e) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      setError("Enter a valid work email.");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/demo-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong — please try again.");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          data-testid="demo-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="relative w-full max-w-md border border-line bg-paper shadow-[0_40px_80px_rgba(0,0,0,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              data-testid="demo-modal-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 cursor-pointer border border-transparent p-2 text-zinc-400 transition-colors hover:border-line hover:text-ink"
            >
              <X size={16} />
            </button>

            <div className="border-b border-line px-7 py-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                Pragmr <span className="text-zinc-300">/</span>{" "}
                <span className="text-brand">Book a Demo</span>
              </p>
            </div>

            {status === "success" ? (
              <div className="px-7 py-10 text-center" data-testid="demo-success">
                <span className="mx-auto flex h-12 w-12 items-center justify-center bg-brand text-white">
                  <Check size={22} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-ink">
                  Request received
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  We&rsquo;ll reach out to{" "}
                  <span className="font-medium text-ink">{email.trim()}</span> to schedule your
                  OnTime demo.
                </p>
                <button
                  data-testid="demo-success-close-button"
                  onClick={() => setOpen(false)}
                  className="mt-8 w-full cursor-pointer bg-brand px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-brand-dark"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="px-7 py-8" data-testid="demo-form">
                <h3 className="font-display text-3xl font-medium tracking-tighter leading-tight text-ink">
                  See OnTime with your own delivery data
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  Leave your work email and we&rsquo;ll schedule a walkthrough of delivery
                  prediction, capacity intelligence and dependency tracking.
                </p>

                <label
                  htmlFor="demo-email"
                  className="mt-7 block font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400"
                >
                  Work email
                </label>
                <input
                  ref={inputRef}
                  id="demo-email"
                  data-testid="demo-email-input"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="you@company.com"
                  className="mt-2 w-full border border-line bg-white px-4 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-zinc-300 focus:border-brand"
                />
                {status === "error" && (
                  <p data-testid="demo-error" className="mt-2 font-mono text-[11px] text-red-500">
                    {error}
                  </p>
                )}

                <button
                  data-testid="demo-submit-button"
                  type="submit"
                  disabled={status === "loading"}
                  className="group mt-6 flex w-full cursor-pointer items-center justify-center gap-3 bg-brand px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-brand-dark disabled:cursor-wait disabled:opacity-70"
                >
                  {status === "loading" ? "Sending…" : "Request Demo"}
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
                <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                  No commitment — quick walkthrough
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
