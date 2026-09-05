"use client";

import { motion } from "motion/react";
import Image from "next/image";

type WorkCardProps = {
  title: string;
  subTitle: string;
  desc: string;
  year: string;
  url: string;
  link: string;
  index: number;
};

export default function WorkCard({
  title,
  subTitle,
  desc,
  year,
  url,
  link,
  index,
}: WorkCardProps) {
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
          className="aspect-video object-cover object-top"
        />
      </a>

      <div className="mt-1.5 flex flex-row justify-between">
        <div className="flex items-center text-sm font-medium tracking-tight">
          <span className="mr-2">{title}</span>

          <div className="h-1 w-1 rotate-45 bg-muted-foreground" />

          <span className="ml-2 text-muted-foreground">{subTitle}</span>
        </div>

        <div className="text-sm font-medium tracking-tight text-muted-foreground">
          {year}
        </div>
      </div>
    </motion.div>
  );
}
