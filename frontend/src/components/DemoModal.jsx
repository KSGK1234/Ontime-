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
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="relative w-full max-w-md rounded-3xl border border-white/10 bg-panel shadow-[0_40px_90px_rgba(0,0,0,0.7)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -top-20 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-brand/40 blur-3xl" />
            <button
              data-testid="demo-modal-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 cursor-pointer rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              <X size={16} />
            </button>

            <div className="relative border-b border-white/[0.08] px-7 py-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">
                Pragmr <span className="text-slate-600">/</span>{" "}
                <span className="text-indigo-300">Book a Demo</span>
              </p>
            </div>

            {status === "success" ? (
              <div className="relative px-7 py-10 text-center" data-testid="demo-success">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-[0_0_28px_rgba(99,96,212,0.6)]">
                  <Check size={22} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-white">
                  Request received
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  We&rsquo;ll reach out to{" "}
                  <span className="font-medium text-white">{email.trim()}</span> to schedule your
                  OnTime demo.
                </p>
                <button
                  data-testid="demo-success-close-button"
                  onClick={() => setOpen(false)}
                  className="mt-8 w-full cursor-pointer rounded-full bg-brand px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-brand-hi"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="relative px-7 py-8" data-testid="demo-form">
                <h3 className="font-display text-3xl font-semibold tracking-tight leading-tight text-white">
                  See OnTime with your own delivery data
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Leave your work email and we&rsquo;ll schedule a walkthrough of delivery
                  prediction, capacity intelligence and dependency tracking.
                </p>

                <label
                  htmlFor="demo-email"
                  className="mt-7 block font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400"
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
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-brand-hi"
                />
                {status === "error" && (
                  <p data-testid="demo-error" className="mt-2 font-mono text-[11px] text-red-400">
                    {error}
                  </p>
                )}

                <button
                  data-testid="demo-submit-button"
                  type="submit"
                  disabled={status === "loading"}
                  className="group mt-6 flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-brand px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white shadow-[0_0_28px_rgba(81,78,179,0.5)] transition-all duration-300 hover:bg-brand-hi disabled:cursor-wait disabled:opacity-70"
                >
                  {status === "loading" ? "Sending…" : "Request Demo"}
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
                <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
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
