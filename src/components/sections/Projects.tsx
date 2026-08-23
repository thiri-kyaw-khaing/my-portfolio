"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, ExternalLink, FileText, Palette } from "lucide-react";
import { useState } from "react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import CaseStudyPreviewCard from "@/components/ui/CaseStudyPreviewCard";
import { projectCaseStudies, projectCategories, projects, type ProjectCategory, type ProjectLink } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

function LinkIcon({ icon }: { icon: ProjectLink["icon"] }) {
  switch (icon) {
    case "github":
      return <GithubIcon size={15} />;
    case "case":
      return <FileText size={15} />;
    case "design":
      return <Palette size={15} />;
    case "walkthrough":
      return <BookOpen size={15} />;
    default:
      return <ExternalLink size={15} />;
  }
}

/** Sibling project titles that are really the same underlying app as a case study, just viewed from another role. */
const PREVIEW_SLUG_BY_TITLE: Record<string, string> = {
  "Doi Tung Training Plan Management System": "doi-tung-dashboard",
  "RateWise — Course & Professor Review Platform": "ratewise",
  "MFU International Student Election System": "mfu-election",
  "Training Plan Management System — BA Case Study": "doi-tung-dashboard",
};

function getPreview(projectTitle: string) {
  const slug = PREVIEW_SLUG_BY_TITLE[projectTitle];
  const study = slug
    ? projectCaseStudies.find((s) => s.slug === slug)
    : projectCaseStudies.find((s) => s.projectTitle === projectTitle);
  return study?.walkthrough;
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const visible = projects.filter((p) => filter === "all" || p.category === filter);
  const categoryLabel = (id: ProjectCategory) =>
    projectCategories.find((c) => c.id === id)?.label ?? id;

  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Work I'm proud of"
        subtitle="Full-stack builds, business analysis case studies, and Figma designs — filter by the role behind each project."
      />

      {/* Role filter tabs */}
      <div
        role="tablist"
        aria-label="Filter projects by role"
        className="mb-12 flex flex-wrap justify-center gap-2"
      >
        {projectCategories.map((cat) => {
          const active = filter === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(cat.id)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 ${
                active
                  ? "text-white"
                  : "border border-primary-200 bg-white/70 text-primary-600 hover:bg-primary-50 dark:border-primary-500/25 dark:bg-white/5 dark:text-primary-300 dark:hover:bg-primary-500/10"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="project-tab-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-orange-400 shadow-lg shadow-primary-500/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          );
        })}
      </div>

      <motion.div
        key={filter}
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid gap-8 md:grid-cols-2"
      >
          {visible.map((project) => {
            const preview = getPreview(project.title);
            return (
            <motion.article
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.96 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
              }}
              className="glow-hover group flex h-full flex-col overflow-hidden rounded-3xl border border-primary-100 bg-white/80 backdrop-blur dark:border-primary-500/15 dark:bg-white/[0.04]"
            >
              {preview && (
                <CaseStudyPreviewCard
                  variant="card"
                  role={project.category === "uiux" ? "UI/UX" : project.category === "ba" ? "Business Analyst" : "Full Stack"}
                  frame={preview.frame}
                  screens={preview.screens}
                />
              )}
              <div className="flex flex-1 flex-col p-7">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-gradient-to-r from-primary-500 to-orange-400 px-3.5 py-1 text-xs font-bold text-white shadow-md shadow-primary-500/25">
                    {categoryLabel(project.category)}
                  </span>
                  <span className="rounded-full border border-primary-200 bg-primary-50 px-3.5 py-1 text-xs font-semibold text-primary-600 dark:border-primary-500/25 dark:bg-primary-500/10 dark:text-primary-300">
                    {project.year}
                  </span>
                </div>
                <h3 className="font-heading mb-2 text-xl font-bold transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-300">
                  {project.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600 dark:border-primary-500/25 dark:bg-primary-500/10 dark:text-primary-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, li) => {
                    const className =
                      li === 0
                        ? "inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary-500 to-orange-400 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-primary-500/25 transition-all hover:shadow-lg hover:shadow-primary-500/40 hover:brightness-110"
                        : "inline-flex items-center gap-1.5 rounded-full border border-primary-300 px-5 py-2 text-sm font-semibold text-primary-600 transition-colors hover:bg-primary-50 dark:border-primary-500/30 dark:text-primary-300 dark:hover:bg-primary-500/10";
                    return link.href.startsWith("/") ? (
                      <Link key={link.label} href={link.href} className={className}>
                        <LinkIcon icon={link.icon} /> {link.label}
                      </Link>
                    ) : (
                      <a key={link.label} href={link.href} className={className}>
                        <LinkIcon icon={link.icon} /> {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.article>
            );
          })}
      </motion.div>
    </section>
  );
}
