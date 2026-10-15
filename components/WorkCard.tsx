"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useId } from "react";

export type WorkImage = {
  src: string;
  alt: string;
};

export type WorkItem = {
  title: string;
  subTitle: string;
  desc: string;
  year: string;
  url: string;
  link: string;
  problem?: string;
  solution?: string;
  result?: string;
  images?: WorkImage[];
};

type WorkCardProps = WorkItem & {
  index: number;
  isOpen?: boolean;
  onToggle?: () => void;
};

export function hasWorkDetails(
  item: Pick<WorkItem, "desc" | "problem" | "solution" | "result" | "images">,
) {
  return Boolean(
    item.desc ||
      item.problem ||
      item.solution ||
      item.result ||
      item.images?.length,
  );
}

export default function WorkCard({
  title,
  subTitle,
  desc,
  year,
  url,
  link,
  problem,
  solution,
  result,
  images,
  index,
  isOpen = false,
  onToggle,
}: WorkCardProps) {
  const reduceMotion = useReducedMotion();
  const uid = useId();
  const panelId = `${uid}-details`;
  const buttonId = `${uid}-toggle`;

  const expandable =
    Boolean(onToggle) &&
    hasWorkDetails({ desc, problem, solution, result, images });

  const sections = [
    { label: "Problem", text: problem },
    { label: "Solution", text: solution },
    { label: "Result", text: result },
  ].filter((section) => Boolean(section.text));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      }}
    >
      {/** biome-ignore lint/a11y/noInteractiveElementToNoninteractiveRole: <explanation> */}
      {/** biome-ignore lint/a11y/useSemanticElements: <explanation> */}
      <a
        rel="external"
        target="_blank"
        href={link}
        role="group"
        aria-label={`${title} project preview`}
        className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-none border"
      >
        <Image
          src={url}
          alt={title}
          fill
          className="aspect-video object-cover object-top hover:scale-105 transition-transform duration-300"
        />
      </a>

      <div className="mt-1.5 flex flex-row justify-between gap-4">
        <div className="flex min-w-0 flex-wrap items-center gap-y-0.5 text-sm font-medium tracking-tight">
          <span className="mr-2">{title}</span>

          <div className="h-1 w-1 shrink-0 rotate-45 bg-muted-foreground" />

          {/* <span className="ml-2 text-muted-foreground">{subTitle}</span> */}
        </div>

        <div className="flex shrink-0 items-center gap-3 text-sm font-medium tracking-tight text-muted-foreground">
          {expandable && (
            <button
              id={buttonId}
              type="button"
              onClick={onToggle}
              aria-expanded={isOpen}
              aria-controls={isOpen ? panelId : undefined}
              className="group flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-neutral-900 focus-visible:text-neutral-900 focus-visible:outline-none focus-visible:underline focus-visible:underline-offset-4"
            >
              <span>Details</span>
              <span
                aria-hidden="true"
                className={`inline-block text-base leading-none transition-transform duration-300 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>
          )}
          <span>{year}</span>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {expandable && isOpen && (
          <motion.div
            key="details"
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
            }
            className="overflow-hidden border border-neutral-200 mt-3 w-full"
          >
            <div className="px-2 flex flex-col gap-6 border-t mt-[2px] border-neutral-200 pt-4 pb-2">
              {desc && (
                <p className="max-w-prose text-sm tracking-tight text-muted-foreground">
                  {desc}
                </p>
              )}

              {sections.length > 0 && (
                <div className="grid gap-6 lg:auto-cols-fr ">
                  {sections.map((section) => (
                    <div key={section.label}>
                      <h4 className="text-[12px] text-neutral-400">
                        {section.label}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed tracking-tight text-neutral-900 text-justify">
                        {"- "}
                        {section.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {images && images.length > 0 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {images.map((image) => (
                    <div
                      key={image.src}
                      className="relative aspect-video w-full overflow-hidden rounded-none border"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover object-left"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
