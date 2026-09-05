import WorkCard from "../WorkCard";

type WorkItem = {
  title: string;
  gradient?: string;
  subTitle: string;
  desc: string;
  year: string;
  url: string;
  link: string;
};

const workItems: WorkItem[] = [
  {
    title: "Cnipbotics",
    subTitle: "CBSE Robotics LMS",
    desc: "",
    year: "'26",
    url: "/works/cnip.png",
    link: "https://www.cnipbotics.com",
  },
  {
    title: "Gaiaspace",
    subTitle: "Building sustainable space technologies.",
    desc: "",
    year: "'24",
    url: "/works/gaia1.png",
    link: "https://www.gaiaspace.co.in",
  },
  {
    title: "XDesign",
    subTitle: "I am lazzzy at making designs",
    desc: "",
    year: "'25",
    url: "/works/design.png",
    link: "https://design.ajayhtml.online",
  },
  {
    title: "Griya",
    subTitle: "Real estate platform",
    desc: "",
    year: "'24",
    url: "/works/grihya.png",
    link: "https://grihya.in",
  },
  {
    title: "Cnippet",
    subTitle: "Making developers life less stressful.",
    desc: "",
    year: "'26",
    url: "/works/cnippet.png",
    link: "https://cnippet.dev",
  },
  {
    title: "Cnippet.Stack",
    subTitle: "Developers CLI tool.",
    desc: "",
    year: "'26",
    url: "/works/stack.png",
    link: "https://stack.cnippet.dev",
  },
];

export default function () {
  return (
    <main className="h-full flex-1 overflow-y-auto border-r border-neutral-200 scrollbar-none [&::-webkit-scrollbar]:hidden">
      <div className="p-4 pt-0">
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
              subTitle={item.subTitle}
              desc={item.desc}
              year={item.year}
              url={item.url}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
