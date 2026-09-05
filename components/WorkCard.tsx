import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type WorkCardProps = {
  title: string;
  gradient: string;
  subTitle: string;
  desc: string;
  year: string;
  url: string;
  link: string;
};

export default function WorkCard({
  title,
  gradient,
  subTitle,
  desc,
  year,
  url,
  link,
}: WorkCardProps) {
  return (
    <div>
      <div
        role="group"
        aria-label={`${title} project preview`}
        className={`relative flex h-100 items-center justify-center overflow-hidden rounded-none bg-linear-to-br ${gradient}`}
      >
        <Image src={url} alt={title} fill className="object-cover" />
        {/* <button
          type="button"
          aria-label="Previous project"
          className="absolute left-6 text-white/70 transition-colors hover:text-white"
        >
          <ChevronLeft size={18} />
        </button>

        <span className="text-3xl font-semibold uppercase tracking-wide text-white">
          {title}
        </span>

        <button
          type="button"
          aria-label="Next project"
          className="absolute right-6 text-white/70 transition-colors hover:text-white"
        >
          <ChevronRight size={18} />
        </button> */}
      </div>
      <div className="flex flex-row justify-between mt-1.5">
        <div className="text-sm font-medium tracking-tight flex items-center">
          <span className="mr-2">{title}</span>
          <div className="h-1 w-1 bg-muted-foreground rotate-45" />
          <span className="text-muted-foreground ml-2">{subTitle}</span>
        </div>
        <div className="text-sm font-medium tracking-tight text-muted-foreground">
          {year}
        </div>
      </div>
    </div>
  );
}
