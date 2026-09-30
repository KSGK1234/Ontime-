import { motion } from "framer-motion";
import { MaskedLines, Eyebrow, FadeUp } from "./reveal";
import OrbitGraphic from "./OrbitGraphic";

export default function IntelligenceHero() {
  return (
    <section id="intelligence" className="relative overflow-hidden border-t border-line bg-ink">
      <div className="grid grid-cols-1 items-center lg:grid-cols-12">
        <div className="px-5 py-20 md:px-10 md:py-28 lg:col-span-7">
          <FadeUp y={16}>
            <Eyebrow num="03" className="text-zinc-500">
              Delivery Intelligence
            </Eyebrow>
          </FadeUp>
          <MaskedLines
            mode="view"
            delay={0.1}
            className="mt-6 flex flex-col gap-2 font-display text-4xl tracking-tighter leading-[1.12] text-white sm:text-5xl lg:text-6xl"
            lines={[
              <span className="font-light">From project activity</span>,
              <span className="font-bold">
                to <span className="text-brand-light">delivery intelligence.</span>
              </span>,
            ]}
          />
          <FadeUp delay={0.5}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
              OnTime turns everyday execution data into signals that help teams make better
              delivery decisions.
            </p>
          </FadeUp>
          <FadeUp delay={0.65}>
            <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Signals <span className="mx-2 text-zinc-700">/</span> Patterns{" "}
              <span className="mx-2 text-zinc-700">/</span> Decisions
            </p>
          </FadeUp>
        </div>

        <div className="px-5 pb-20 md:px-10 lg:col-span-5 lg:py-20">
          <FadeUp delay={0.3} y={40}>
            <OrbitGraphic />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
