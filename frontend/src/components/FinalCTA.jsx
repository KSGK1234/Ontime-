import { ArrowRight, ArrowDown } from "lucide-react";
import { MaskedLines, Eyebrow, FadeUp } from "./reveal";
import OrbitGraphic from "./OrbitGraphic";
import { scrollToId } from "../lib/scroll";

export default function FinalCTA() {
  return (
    <section id="demo" className="relative overflow-hidden border-t border-white/[0.07] px-5 py-16 md:px-10 md:py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-brand-dark via-brand to-brand-dark shadow-[0_40px_120px_rgba(67,64,143,0.4)]">
        <div className="dot-grid absolute inset-0 opacity-30" />
        <div className="relative grid items-center gap-10 p-8 md:p-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FadeUp y={14}>
              <Eyebrow num="05" className="text-indigo-200/70">
                Get Started
              </Eyebrow>
            </FadeUp>

            <MaskedLines
              mode="view"
              delay={0.15}
              className="mt-7 flex flex-col gap-2 font-display text-4xl font-semibold tracking-tight leading-[1.12] text-white sm:text-5xl lg:text-6xl"
              lines={[
                <span className="font-medium">
                  Make delivery decisions with <span className="font-semibold text-white">data,</span>
                </span>,
                <span className="font-medium">
                  not <span className="text-amber-300">guesswork.</span>
                </span>,
              ]}
            />

            <FadeUp delay={0.45}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-indigo-100/90 md:text-lg">
                See how Pragmr OnTime can help your team build a more predictable delivery process.
              </p>
            </FadeUp>

            <FadeUp delay={0.6}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  data-testid="final-explore-ontime-button"
                  onClick={() => scrollToId("features")}
                  className="group flex cursor-pointer items-center gap-3 rounded-full bg-white px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:shadow-[0_0_36px_rgba(255,255,255,0.35)]"
                >
                  Explore OnTime
                  <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-1" />
                </button>
                <button
                  data-testid="final-book-demo-button"
                  onClick={() => window.dispatchEvent(new CustomEvent("demo-modal:open"))}
                  className="group flex cursor-pointer items-center gap-3 rounded-full border border-white/40 px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white/10"
                >
                  Book a Demo
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </FadeUp>

            <FadeUp delay={0.75}>
              <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-200/70">
                Capacity <span className="mx-2 text-indigo-200/40">/</span> Pace{" "}
                <span className="mx-2 text-indigo-200/40">/</span> Dependencies{" "}
                <span className="mx-2 text-indigo-200/40">/</span> Rework
              </p>
            </FadeUp>
          </div>

          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <FadeUp delay={0.35} y={40} className="w-full max-w-[440px]">
              <OrbitGraphic />
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
