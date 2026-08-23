import { Lightbulb, Target, Users } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const strengths = [
  {
    icon: Lightbulb,
    title: "Design-Driven Engineering",
    text: "I bridge the gap between beautiful design and clean code — turning Figma concepts into pixel-perfect, accessible interfaces.",
  },
  {
    icon: Users,
    title: "Stakeholder Communication",
    text: "As a business analyst, I translate business needs into clear user stories and requirements that keep teams aligned.",
  },
  {
    icon: Target,
    title: "User-Centered Thinking",
    text: "Every decision starts with the user. I validate ideas through wireframes, prototypes, and feedback loops before writing code.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="About Me"
        title="Strategy meets craft"
        subtitle="A Software Engineering student blending frontend development, UI/UX design, and business analysis into one toolkit."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="glow-hover h-full rounded-3xl border border-primary-100 bg-white/70 p-8 backdrop-blur dark:border-primary-500/15 dark:bg-white/[0.04]">
            <h3 className="font-heading mb-4 text-xl font-bold text-primary-600 dark:text-primary-300">
              Professional Summary
            </h3>
            <p className="leading-relaxed text-neutral-600 dark:text-neutral-300">
              I build digital experiences that are both visually engaging and strategically designed.
              My work spans the full product journey — eliciting requirements and modeling processes as a
              business analyst, shaping intuitive flows as a UI/UX designer, and shipping performant,
              scalable interfaces as a frontend developer with Next.js, React, and TypeScript.
            </p>
            <h3 className="font-heading mt-8 mb-4 text-xl font-bold text-primary-600 dark:text-primary-300">
              Career Goals
            </h3>
            <p className="leading-relaxed text-neutral-600 dark:text-neutral-300">
              My goal is to grow into a product-minded engineer who owns features end-to-end — from
              stakeholder conversations and wireframes to production code — and to build products that
              make technology feel effortless for the people who use it.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-5">
          {strengths.map((s, i) => (
            <Reveal key={s.title} delay={0.12 * i}>
              <div className="glow-hover flex gap-5 rounded-3xl border border-primary-100 bg-white/70 p-6 backdrop-blur dark:border-primary-500/15 dark:bg-white/[0.04]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-orange-400 text-white shadow-lg shadow-primary-500/30">
                  <s.icon size={22} />
                </div>
                <div>
                  <h4 className="font-heading mb-1 font-bold">{s.title}</h4>
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
