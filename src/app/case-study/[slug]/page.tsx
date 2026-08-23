import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ExternalLink, Lightbulb, Target } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CaseStudyPreviewCard from "@/components/ui/CaseStudyPreviewCard";
import Reveal from "@/components/ui/Reveal";
import ScreenWalkthrough from "@/components/ui/ScreenWalkthrough";
import { projectCaseStudies, projects } from "@/lib/data";

export function generateStaticParams() {
  return projectCaseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = projectCaseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.projectTitle} — Case Study`,
    description: study.overview,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = projectCaseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const project = projects.find((p) => p.title === study.projectTitle);
  const figmaLink = project?.links.find((l) => l.icon === "design");

  return (
    <>
      <Navbar />
      <main className="relative z-10 flex-1">
        <section className="relative mx-auto max-w-4xl px-6 pt-32 pb-16">
          <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-20 -left-32 h-96 w-96 rounded-full bg-primary-300/30 blur-3xl dark:bg-primary-600/15" />
            <div className="absolute top-10 -right-32 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl dark:bg-orange-600/10" />
          </div>

          <Reveal>
            <Link
              href="/#projects"
              className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-300 dark:hover:text-primary-200"
            >
              <ArrowLeft size={16} /> Back to Projects
            </Link>

            {study.walkthrough && (
              <CaseStudyPreviewCard
                role={study.role}
                frame={study.walkthrough.frame}
                screens={study.walkthrough.screens}
              />
            )}

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">
              Case Study
            </p>
            <h1 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
              <span className="gradient-text">{study.projectTitle}</span>
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-gradient-to-r from-primary-500 to-orange-400 px-3.5 py-1 text-xs font-bold text-white shadow-md shadow-primary-500/25">
                {study.role}
              </span>
              <span className="rounded-full border border-primary-200 bg-primary-50 px-3.5 py-1 text-xs font-semibold text-primary-600 dark:border-primary-500/25 dark:bg-primary-500/10 dark:text-primary-300">
                {study.year}
              </span>
            </div>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg">
              {study.overview}
            </p>
          </Reveal>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-10">
          <Reveal>
            <div className="glow-hover rounded-3xl border border-primary-100 bg-white/80 p-8 backdrop-blur dark:border-primary-500/15 dark:bg-white/[0.04]">
              <h2 className="font-heading mb-4 flex items-center gap-2.5 text-xl font-bold">
                <Target size={22} className="shrink-0 text-primary-500" />
                The Problem
              </h2>
              <p className="leading-relaxed text-neutral-600 dark:text-neutral-300">{study.problem}</p>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-10">
          <Reveal>
            <h2 className="font-heading mb-6 text-xl font-bold">Key Features</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {study.features.map((feature, i) => (
              <Reveal key={feature} delay={0.06 * i}>
                <div className="glow-hover flex h-full items-start gap-3 rounded-2xl border border-primary-100 bg-white/70 p-5 backdrop-blur dark:border-primary-500/15 dark:bg-white/[0.04]">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-primary-500" />
                  <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">{feature}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-10">
          <Reveal>
            <h2 className="font-heading mb-6 flex items-center gap-2.5 text-xl font-bold">
              <Lightbulb size={22} className="shrink-0 text-primary-500" />
              Design Decisions
            </h2>
          </Reveal>
          <div className="flex flex-col gap-5">
            {study.decisions.map((decision, i) => (
              <Reveal key={decision.title} delay={0.08 * i}>
                <div className="glow-hover rounded-2xl border border-primary-100 bg-white/70 p-6 backdrop-blur dark:border-primary-500/15 dark:bg-white/[0.04]">
                  <h3 className="font-heading mb-2 font-bold text-primary-600 dark:text-primary-300">
                    {decision.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {decision.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {study.walkthrough && (
          <section className="mx-auto max-w-6xl px-6 py-10">
            <Reveal className="mb-10">
              <h2 className="font-heading mb-3 text-xl font-bold">Design Walkthrough</h2>
              <p className="max-w-2xl text-sm text-neutral-600 dark:text-neutral-300">
                {study.walkthrough.intro}
              </p>
            </Reveal>
            <ScreenWalkthrough frame={study.walkthrough.frame} screens={study.walkthrough.screens} />
          </section>
        )}

        <section className="mx-auto max-w-4xl px-6 py-16">
          <Reveal className="flex flex-wrap items-center justify-center gap-4">
            {figmaLink && (
              <a
                href={figmaLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary-500/25 transition-all hover:shadow-lg hover:shadow-primary-500/40 hover:brightness-110"
              >
                <ExternalLink size={16} /> Open Figma Prototype
              </a>
            )}
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 rounded-full border border-primary-300 px-6 py-3 text-sm font-semibold text-primary-600 transition-colors hover:bg-primary-50 dark:border-primary-500/30 dark:text-primary-300 dark:hover:bg-primary-500/10"
            >
              <ArrowLeft size={16} /> Back to All Projects
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
