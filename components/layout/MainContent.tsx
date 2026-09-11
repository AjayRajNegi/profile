"use client";

import { motion } from "motion/react";
import { TextReveal } from "../motion/text-reveal";
import MarqueeComponent from "../ui/marqueeComponent";
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
    title: "Cnippet.Stack",
    subTitle: "Developers CLI tool.",
    desc: "",
    year: "'26",
    url: "/works/stack.png",
    link: "https://stack.cnippet.dev",
  },
  {
    title: "Gaiaspace",
    subTitle: "Building sustainable space technologies.",
    desc: "",
    year: "'24",
    url: "/works/gaia.png",
    link: "https://www.gaiaspace.co.in",
  },
  {
    title: "Griya",
    subTitle: "Real estate platform",
    desc: "",
    year: "'24",
    url: "/works/grihya2.png",
    link: "https://grihya.in",
  },
  {
    title: "Seahawk",
    subTitle: "Following trails of The Great Ganges",
    desc: "",
    year: "'26",
    url: "/works/sea.png",
    link: "https://www.seahawkadventures.com/",
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
    title: "Cnippet",
    subTitle: "Making developers life less stressful.",
    desc: "",
    year: "'26",
    url: "/works/cnippet.png",
    link: "https://cnippet.dev",
  },
];

export default function MainContent() {
  const firstText =
    "An expert in building end-to-end web/app products which lasts way longer than your claude session.";

  const secondText =
    " - putting extra thought(not inference) at every step to make software better.";
  return (
    <main className="h-full flex-1 overflow-y-auto border-r border-neutral-200 scrollbar-none [&::-webkit-scrollbar]:hidden lg:pt-20">
      <div className="pt-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="sticky top-0 z-0 px-2 lg:px-4 pt-20"
        >
          <div className="gap-16">
            <div className="min-w-full">
              <TextReveal
                as="span"
                className="text-center text-[18px] lg:text-[26px] font-medium leading-px lg:leading-[1.05] tracking-tighter"
                per="word"
                preset="fade-in-blur"
                speedReveal={1.8}
              >
                {firstText}
              </TextReveal>

              <TextReveal
                as="span"
                className="text-center text-[18px] lg:text-[26px] font-medium leading-px lg:leading-[1.05] tracking-tighter text-muted-foreground"
                per="word"
                delay={0.6}
                preset="fade-in-blur"
                speedReveal={1.8}
              >
                {secondText}
              </TextReveal>
            </div>

            <div className="flex items-end justify-between text-sm mt-20 lg:mt-40">
              <h3 className="text-lg tracking-tight font-medium text-neutral-900">
                Selected work
              </h3>

              <span className="text-[12px] text-neutral-400">
                ({String(workItems.length).padStart(2, "0")})
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="relative z-10 -mt-px flex flex-col gap-6 pb-16 px-4 bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0,
            ease: "easeOut",
          }}
        >
          {workItems.map((item, index) => (
            <WorkCard
              key={item.title}
              title={item.title}
              subTitle={item.subTitle}
              desc={item.desc}
              year={item.year}
              url={item.url}
              link={item.link}
              index={index}
            />
          ))}
        </motion.div>
        <MarqueeComponent />
      </div>
    </main>
  );
}
