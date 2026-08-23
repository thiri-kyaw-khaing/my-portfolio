import Image from "next/image";
import { Award, BadgeCheck, Briefcase, GraduationCap } from "lucide-react";
import { certifications, timeline } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="My Journey"
        title="Experience & Education"
        subtitle="The path that shaped how I think, design, and build."
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Vertical line */}
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-5 w-px bg-gradient-to-b from-primary-400 via-amber-200 to-transparent sm:left-1/2"
        />

        <ol className="flex flex-col gap-12">
          {timeline.map((item, i) => {
            const Icon = item.type === "education" ? GraduationCap : Briefcase;
            const isLeft = i % 2 === 0;
            return (
              <li key={item.title} className="relative">
                {/* Node */}
                <div className="absolute left-5 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-orange-400 text-white shadow-lg shadow-primary-500/40 sm:left-1/2">
                  <Icon size={17} />
                </div>

                <Reveal
                  delay={0.1}
                  className={`ml-14 sm:ml-0 sm:w-[calc(50%-2.5rem)] ${
                    isLeft ? "sm:mr-auto sm:text-right" : "sm:ml-auto"
                  }`}
                >
                  <div className="glow-hover rounded-3xl border border-primary-100 bg-white/80 p-6 backdrop-blur dark:border-primary-500/15 dark:bg-white/[0.04]">
                    <span className="mb-2 inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-600 dark:bg-primary-500/10 dark:text-primary-300">
                      {item.period}
                    </span>
                    <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                    <p className="mb-2 text-sm font-semibold text-primary-500 dark:text-primary-300">
                      {item.org}
                    </p>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Certifications */}
      <div className="mt-24">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">
            Certifications
          </p>
          <h3 className="font-heading text-2xl font-bold sm:text-3xl">
            <span className="gradient-text">Credentials that back the craft</span>
          </h3>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={0.1 * i} className="h-full">
              <article className="glow-hover group flex h-full flex-col overflow-hidden rounded-3xl border border-primary-100 bg-white/80 backdrop-blur transition-transform duration-300 hover:-translate-y-2 dark:border-primary-500/15 dark:bg-white/[0.04]">
                <div className="relative h-48 overflow-hidden bg-primary-50 dark:bg-primary-500/10">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate issued by ${cert.issuer}`}
                    fill
                    sizes="(min-width: 1280px) 24rem, (min-width: 768px) 34rem, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-gradient-to-r from-primary-500 to-orange-400 px-3.5 py-1 text-xs font-bold text-white shadow-md shadow-primary-500/25">
                    {cert.issuer}
                  </span>
                  <span className="absolute top-4 right-4 rounded-full bg-white/90 px-3.5 py-1 text-xs font-semibold text-primary-600 shadow backdrop-blur dark:bg-black/50 dark:text-primary-300">
                    {cert.year}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h4 className="font-heading mb-2 flex items-start gap-2 text-lg font-bold transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-300">
                    <Award size={20} className="mt-0.5 shrink-0 text-primary-500" />
                    {cert.title}
                  </h4>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {cert.description}
                  </p>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 self-start rounded-full border border-primary-300 px-5 py-2 text-sm font-semibold text-primary-600 transition-colors hover:bg-primary-50 dark:border-primary-500/30 dark:text-primary-300 dark:hover:bg-primary-500/10"
                    >
                      <BadgeCheck size={15} /> Verify Credential
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
