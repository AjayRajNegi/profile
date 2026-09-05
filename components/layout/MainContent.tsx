import WorkCard from "../WorkCard";

type WorkItem = {
  title: string;
  gradient: string;
};

const workItems: WorkItem[] = [
  { title: "Virsa", gradient: "from-amber-600 via-rose-700 to-rose-900" },
  { title: "Nimbus", gradient: "from-slate-700 via-slate-800 to-neutral-900" },
  {
    title: "Kavaa",
    gradient: "from-emerald-600 via-emerald-800 to-neutral-900",
  },
  { title: "Ember", gradient: "from-orange-500 via-red-700 to-neutral-900" },
  { title: "Loom", gradient: "from-indigo-600 via-indigo-800 to-neutral-900" },
  { title: "Terra", gradient: "from-stone-500 via-stone-700 to-neutral-900" },
];

const MainContent = () => {
  return (
    <main className="h-full flex-1 overflow-y-auto border-r border-neutral-200 scrollbar-none [&::-webkit-scrollbar]:hidden">
      <div className="flex flex-col gap-16 px-10 py-10">
        <h2 className="max-w-md text-2xl font-medium leading-snug text-neutral-900">
          A visual designer specializing in brand identity and visual
          communication{" "}
          <span className="text-neutral-400">
            — creating strategic visual systems that feel intentional, refined,
            and timeless.
          </span>
        </h2>

        <section className="flex flex-col gap-6">
          <div className="flex items-baseline justify-between text-sm">
            <h3 className="font-medium text-neutral-900">Selected work</h3>
            <span className="text-neutral-400">
              ({String(workItems.length).padStart(2, "0")})
            </span>
          </div>

          <div className="flex flex-col gap-6 pb-16">
            {workItems.map((item) => (
              <WorkCard
                key={item.title}
                title={item.title}
                gradient={item.gradient}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainContent;
