import Image from "next/image";
import type { CaseStudyScreen } from "@/lib/data";

type CaseStudyPreviewCardProps = {
  role: string;
  frame: "mobile" | "browser";
  screens: CaseStudyScreen[];
  /** "page" = full case-study hero (3 tiles, role badge). "card" = compact banner for a project grid card (2 tiles, no badge). */
  variant?: "page" | "card";
};

const TILE_SIZE = {
  page: {
    mobile: "w-24 h-48 sm:w-36 sm:h-72",
    browser: "w-40 h-32 sm:w-72 sm:h-56",
  },
  card: {
    mobile: "w-16 h-32 sm:w-20 sm:h-40",
    browser: "w-28 h-20 sm:w-40 sm:h-32",
  },
};

const TILE_POSITION = {
  page: {
    mobile: [
      "left-0 top-2 rotate-[-7deg]",
      "left-10 -top-2 sm:left-[70px] sm:-top-2.5 rotate-6",
      "left-20 top-4 sm:left-[140px] sm:top-4 rotate-[-4deg]",
    ],
    browser: [
      "left-0 top-2 rotate-[-7deg]",
      "left-14 -top-2 sm:left-[130px] sm:-top-2.5 rotate-6",
      "left-28 top-4 sm:left-[260px] sm:top-4 rotate-[-4deg]",
    ],
  },
  card: {
    mobile: [
      "left-0 top-2 rotate-[-6deg]",
      "left-[26px] -top-2 rotate-[5deg] sm:left-[34px]",
      "left-[52px] top-4 rotate-[-4deg] sm:left-[68px]",
    ],
    browser: [
      "left-0 top-2 rotate-[-6deg]",
      "left-11 -top-2 rotate-[5deg] sm:left-16",
      "left-[88px] top-4 rotate-[-4deg] sm:left-32",
    ],
  },
};

const COLLAGE_SIZE = {
  page: {
    mobile: "w-44 h-52 sm:w-[19rem] sm:h-80",
    browser: "w-[17rem] h-36 sm:w-[34.5rem] sm:h-64",
  },
  card: {
    mobile: "w-36 h-40 sm:w-44 sm:h-48",
    browser: "w-52 h-28 sm:w-80 sm:h-40",
  },
};

/** Tilted collage of a project's real screens, used as a case-study hero or a compact project-card banner. */
export default function CaseStudyPreviewCard({
  role,
  frame,
  screens,
  variant = "page",
}: CaseStudyPreviewCardProps) {
  const tiles = screens.slice(0, 3);
  const isCard = variant === "card";

  return (
    <div
      className={
        isCard
          ? "relative overflow-hidden bg-gradient-to-br from-primary-100 via-orange-50 to-amber-100 dark:from-primary-500/10 dark:via-orange-500/5 dark:to-amber-500/10"
          : "relative mb-10 overflow-hidden rounded-3xl border border-primary-100 bg-gradient-to-br from-primary-100 via-orange-50 to-amber-100 px-6 py-10 dark:border-primary-500/15 dark:from-primary-500/10 dark:via-orange-500/5 dark:to-amber-500/10 sm:px-12 sm:py-12"
      }
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #b45309 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />
      {!isCard && (
        <span className="relative z-10 inline-flex items-center rounded-full bg-white/80 px-3.5 py-1 text-xs font-bold text-primary-700 shadow-sm backdrop-blur dark:bg-black/30 dark:text-primary-200">
          {role}
        </span>
      )}

      <div
        className={`relative mx-auto max-w-full ${COLLAGE_SIZE[variant][frame]} ${isCard ? "" : "mt-8"}`}
      >
        {tiles.map((screen, i) => (
          <div
            key={screen.image}
            className={`absolute overflow-hidden rounded-2xl border-4 border-white shadow-2xl dark:border-neutral-800 ${TILE_SIZE[variant][frame]} ${TILE_POSITION[variant][frame][i]}`}
            style={{ zIndex: 10 + i }}
          >
            <Image
              src={screen.image}
              alt={screen.alt}
              fill
              sizes={isCard ? "12rem" : "(min-width: 640px) 18rem, 10rem"}
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
