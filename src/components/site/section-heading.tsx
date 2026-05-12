import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto grid max-w-6xl grid-cols-12 gap-y-6", className)}>
      {eyebrow ? (
        <aside className="col-span-12 lg:col-span-4 lg:pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ceria-ink/60">
            {eyebrow}
          </p>
          <p className="mt-3 font-display text-base italic text-ceria-ink/80">
            “Ruang aman, tapi tetap santai.”
          </p>
          <div className="mt-5 h-px w-12 bg-ceria-ink" />
        </aside>
      ) : null}
      <div className={cn("col-span-12", eyebrow ? "lg:col-span-8" : "")}>
        <h1 className="text-balance font-display text-[clamp(2.4rem,8vw,5.5rem)] font-light leading-[0.95] tracking-[-0.02em] text-ceria-ink">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-ceria-ink/80 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
