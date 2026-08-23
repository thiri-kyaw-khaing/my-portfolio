"use client";

import { Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const channels = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: LinkedinIcon, label: "LinkedIn", value: "Connect with me", href: siteConfig.linkedin },
  { icon: GithubIcon, label: "GitHub", value: "See my code", href: siteConfig.github },
];

const inputStyles =
  "w-full rounded-2xl border border-primary-200 bg-white/80 px-5 py-3 text-sm outline-none transition-all placeholder:text-neutral-400 focus:border-primary-400 focus:ring-4 focus:ring-primary-500/15 dark:border-primary-500/25 dark:bg-white/5 dark:placeholder:text-neutral-500";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio contact from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let's build something together"
        subtitle="Have a role, a project, or just an idea? My inbox is always open."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-5">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={0.1 * i}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glow-hover flex items-center gap-5 rounded-3xl border border-primary-100 bg-white/80 p-6 backdrop-blur transition-transform hover:-translate-y-1 dark:border-primary-500/15 dark:bg-white/[0.04]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-orange-400 text-white shadow-lg shadow-primary-500/30">
                  <c.icon size={20} />
                </div>
                <div>
                  <p className="font-heading font-bold">{c.label}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{c.value}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="glow-hover flex flex-col gap-4 rounded-3xl border border-primary-100 bg-white/80 p-8 backdrop-blur dark:border-primary-500/15 dark:bg-white/[0.04]"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-semibold">Name</span>
                <input name="name" required placeholder="Your name" className={inputStyles} />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-semibold">Email</span>
                <input name="email" type="email" required placeholder="you@example.com" className={inputStyles} />
              </label>
            </div>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className={`${inputStyles} resize-none`}
              />
            </label>
            <div className="mt-2">
              <MagneticButton type="submit" ariaLabel="Send message">
                <Send size={17} /> Send Message
              </MagneticButton>
              {sent && (
                <p role="status" className="mt-3 text-sm font-medium text-primary-600 dark:text-primary-300">
                  Opening your email app — thank you for reaching out! 💌
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
