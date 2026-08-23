import { Heart, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { navLinks, siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-primary-100 bg-white/60 backdrop-blur dark:border-primary-500/15 dark:bg-white/[0.03]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-12">
        <a href="#home" className="font-heading text-center text-2xl font-bold text-primary-600 dark:text-primary-300">
          Thiri Kyaw Khaing<span className="text-orange-400">.</span>
        </a>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-4">
          {[
            { icon: GithubIcon, href: siteConfig.github, label: "GitHub" },
            { icon: LinkedinIcon, href: siteConfig.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-200 text-primary-600 transition-all hover:-translate-y-1 hover:bg-primary-50 hover:shadow-lg hover:shadow-primary-500/20 dark:border-primary-500/25 dark:text-primary-300 dark:hover:bg-primary-500/10"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>

        <p className="flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} {siteConfig.name}. Built with
          <Heart size={14} className="fill-primary-500 text-primary-500" aria-label="love" />
          using Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
