import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300 sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
