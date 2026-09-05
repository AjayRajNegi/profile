import WorkCard from "../WorkCard";

type WorkItem = {
  title: string;
  gradient: string;
  subTitle: string;
  desc: string;
  year: string;
};

const workItems: WorkItem[] = [
  {
    title: "Virsa",
    gradient: "from-amber-600 via-rose-700 to-rose-900",
    subTitle: "Festival Identity",
    desc: "",
    year: "'24",
  },
  {
    title: "Nimbus",
    gradient: "from-slate-700 via-slate-800 to-neutral-900",
    subTitle: "",
    desc: "",
    year: "'24",
  },
  {
    title: "Kavaa",
    gradient: "from-emerald-600 via-emerald-800 to-neutral-900",
    subTitle: "",
    desc: "",
    year: "'24",
  },
  {
    title: "Ember",
    gradient: "from-orange-500 via-red-700 to-neutral-900",
    subTitle: "",
    desc: "",
    year: "'24",
  },
  {
    title: "Loom",
    gradient: "from-indigo-600 via-indigo-800 to-neutral-900",
    subTitle: "",
    desc: "",
    year: "'24",
  },
  {
    title: "Terra",
    gradient: "from-stone-500 via-stone-700 to-neutral-900",
    subTitle: "",
    desc: "",
    year: "'24",
  },
];

export default function () {
  return (
    <main className="h-full flex-1 overflow-y-auto border-r border-neutral-200 scrollbar-none [&::-webkit-scrollbar]:hidden">
      <div className="p-4">
        <div className="sticky top-0 z-0 pt-20 mb-2">
          <div className="flex flex-col gap-16">
            <h2 className="text-[26px] text-pretty font-medium tracking-tight leading-7 text-neutral-900">
              A visual designer specializing in brand identity and visual
              communication{" "}
              <span className="text-neutral-400">
                — creating strategic visual systems that feel intentional,
                refined, and timeless.
              </span>
            </h2>

            <div className="flex items-end justify-between text-sm mt-40">
              <h3 className="text-lg tracking-tight font-medium text-neutral-900">
                Selected work
              </h3>

              <span className="text-[12px] text-neutral-400">
                ({String(workItems.length).padStart(2, "0")})
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10 -mt-px flex flex-col gap-6 pb-16 bg-background">
          {workItems.map((item) => (
            <WorkCard
              key={item.title}
              title={item.title}
              gradient={item.gradient}
              subTitle={item.subTitle}
              desc={item.desc}
              year={item.year}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
