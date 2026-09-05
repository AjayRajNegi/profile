import { ChevronLeft, ChevronRight } from "lucide-react";

type WorkCardProps = {
  title: string;
  gradient: string;
};

const WorkCard = ({ title, gradient }: WorkCardProps) => {
  return (
    <div
      role="group"
      aria-label={`${title} project preview`}
      className={`relative flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} transition-transform duration-300 hover:scale-[1.01]`}
    >
      {/* Swap this gradient for next/image once real project photography is ready, e.g.
          <Image src={`/work/${slug}.jpg`} alt={title} fill className="object-cover" /> */}
      <button
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
      </button>
    </div>
  );
};

export default WorkCard;
