import { ArrowRight, ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MaskedLines, Eyebrow, FadeUp } from "./reveal";
import OrbitGraphic from "./OrbitGraphic";
import { openDemoModal } from "../lib/ui";

export default function FinalCTA() {
  const navigate = useNavigate();
  return (
    <section id="demo" className="border-t border-line bg-ink px-5 py-16 md:px-10 md:py-24">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <FadeUp y={14}>
            <Eyebrow num="05" className="text-zinc-500">
              Get Started
            </Eyebrow>
          </FadeUp>

          <MaskedLines
            mode="view"
            delay={0.15}
            className="mt-8 flex flex-col gap-2 font-display text-4xl tracking-tighter leading-[1.12] text-white sm:text-5xl lg:text-6xl"
            lines={[
              <span className="font-light">
                Make delivery decisions with <span className="font-bold text-brand-light">data,</span>
              </span>,
              <span className="font-light">
                not <span className="font-bold text-amber-400">guesswork.</span>
              </span>,
            ]}
          />

          <FadeUp delay={0.45}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
              See how Pragmr OnTime can help your team build a more predictable delivery process.
            </p>
          </FadeUp>

          <FadeUp delay={0.6}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <button
                data-testid="final-explore-ontime-button"
                onClick={() => navigate("/", { state: { scrollTo: "features" } })}
                className="group flex cursor-pointer items-center gap-3 bg-white px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-brand hover:text-white"
              >
                Explore OnTime
                <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-1" />
              </button>
              <button
                data-testid="final-book-demo-button"
                onClick={openDemoModal}
                className="group flex cursor-pointer items-center gap-3 border border-zinc-600 px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-brand hover:bg-brand"
              >
                Book a Demo
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </FadeUp>

          <FadeUp delay={0.75}>
            <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Capacity <span className="mx-2 text-zinc-700">/</span> Pace{" "}
              <span className="mx-2 text-zinc-700">/</span> Dependencies{" "}
              <span className="mx-2 text-zinc-700">/</span> Rework
            </p>
          </FadeUp>
        </div>

        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <FadeUp delay={0.35} y={40} className="w-full max-w-[480px]">
            <OrbitGraphic />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
