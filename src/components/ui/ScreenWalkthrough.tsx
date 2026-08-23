import Image from "next/image";
import type { CaseStudyScreen } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

type ScreenWalkthroughProps = {
  frame: "mobile" | "browser";
  screens: CaseStudyScreen[];
};

/** Numbered grid of real product screens with a caption under each, framed as a phone or browser window. */
export default function ScreenWalkthrough({ frame, screens }: ScreenWalkthroughProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {screens.map((screen, i) => (
        <Reveal key={screen.image} delay={0.1 * i} className="h-full">
          <div className="flex h-full flex-col">
            <div className="glow-hover relative overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-lg shadow-primary-500/10 dark:border-primary-500/15">
              <span className="absolute top-3 left-3 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-orange-400 text-xs font-bold text-white shadow">
                {i + 1}
              </span>
              {frame === "browser" ? (
                <div className="flex h-56 flex-col bg-neutral-100 dark:bg-neutral-900">
                  <div className="flex shrink-0 items-center gap-1.5 border-b border-black/5 bg-white/80 px-3 py-2 dark:border-white/10 dark:bg-white/5">
                    <span className="h-2 w-2 rounded-full bg-red-300" />
                    <span className="h-2 w-2 rounded-full bg-yellow-300" />
                    <span className="h-2 w-2 rounded-full bg-green-300" />
                  </div>
                  <div className="relative flex-1">
                    <Image
                      src={screen.image}
                      alt={screen.alt}
                      fill
                      sizes="(min-width: 1024px) 15rem, (min-width: 640px) 45vw, 90vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              ) : (
                <Image src={screen.image} alt={screen.alt} width={402} height={874} className="w-full" />
              )}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              {screen.caption}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
