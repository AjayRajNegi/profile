"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { TextReveal } from "../motion/text-reveal";
import MarqueeComponent from "../ui/marqueeComponent";
import WorkCard, { hasWorkDetails, type WorkItem } from "../WorkCard";

const workItems: WorkItem[] = [
  {
    title: "Cnippet",
    subTitle: "Making developers life less stressful.",
    desc: "An open-source toolkit and design studio. It turns the parts every website and app needs (buttons, logins, payments, admin screens) into ready-made tools for developers, and uses them to build products for businesses.",
    year: "'26",
    url: "/works/cnippet.png",
    link: "https://cnippet.dev",
    problem:
      "Every web project rebuilds the same logins, payments, tables and admin screens. It is slow, it breaks in the same places each time, and by the third project nothing matches.",
    solution:
      "A connected set of tools in one codebase: ready-made components, page sections and admin screens; a command that adds login, payments or email to an app you already have (in beta); and Helm, which builds a complete admin area straight from a database, with permissions and an activity log.",
    result:
      "97 components, 6 open-source products and 50+ client projects delivered. 500+ developers build with it every week, and its components and blocks have passed 2.6M views and 10.7K bookmarks on 21st.dev.",
    images: [
      {
        src: "/works/cnippet01.png",
        alt: "Cnippet ecosystem page showing UI, Blocks and Dashboard layers",
      },
    ],
  },
  {
    title: "Ui.Cnippet",
    subTitle: "Components library for developers.",
    desc: "A free, open-source React component library that helps developers ship polished, mobile-friendly interfaces faster.",
    year: "'26",
    url: "/works/ui.png",
    link: "https://ui.cnippet.dev",
    problem:
      "Developers lose hours adjusting component layouts to look right on phones, tablets and desktops. That is time that should go into the product itself.",
    solution:
      "I built Cnippet UI: 97 accessible components and 40+ original motion effects. Any of them installs with one command as readable source you own, and each is designed to adapt to different screen sizes out of the box.",
    result:
      "More than 100k visitors a month, with 25-30k active users. A companion site adds 40+ ready-made page sections. 2.3M and 10.4K boomarks on 21st.dev",
    images: [
      {
        src: "/works/ui01.png",
        alt: "Cnippet UI component catalog showing buttons, inputs and dialogs",
      },
    ],
  },
  {
    title: "Cnipbotics",
    subTitle: "CBSE Robotics LMS",
    desc: "A robotics learning platform for CBSE schools, Classes 7 to 10. Students build real Arduino and Raspberry Pi projects that match chapters in their science textbook, and teachers get lesson plans and training.",
    year: "'26",
    url: "/works/cnip.png",
    link: "https://www.cnipbotics.com",
    problem:
      "Schools wanted robotics that supports what is already taught in class instead of being an add-on, and teachers without a STEM background needed a way to run it with confidence.",
    solution:
      "With a cross-functional team, I built the learning platform: course and lesson pages with adaptive video, course content managed as documents, optimised images and secure course payments. I designed the caching layer that keeps pages loading quickly by avoiding repeated data fetching.",
    result:
      "Serving 1500+ across Uttarakhand with upcoming collaboration with Uttarkhand Govt. Students progress from Arduino basics to Raspberry Pi, IoT and AI projects across Classes 7 to 10.",
  },
  {
    title: "Seahawk",
    subTitle: "Following trails of The Great Ganges",
    desc: "Website and booking enquiries for a river rafting, kayaking and camping company in Rishikesh, built so travellers searching for rafting can find it and book easily.",
    year: "'26",
    url: "/works/sea.png",
    link: "https://www.seahawkadventures.com/",
    problem:
      "Many rafting operators in Rishikesh compete for the same searches, and most visitors choose from the first few Google results. A good local business stays invisible if its website can't be found.",
    solution:
      "Built with search visibility as the starting point: fast server-rendered pages, a dedicated page for each rafting route (12, 16, 26 and 36 km) with price, rapids, duration and difficulty, plus camping, kayak school and expedition pages. Visitors pick a package, date and group size, reach the team on WhatsApp or phone in one tap, and read real customer reviews before booking.",
    result:
      "Now visible in search for Rishikesh rafting, kayaking and camping terms, with four rafting routes listed from ₹599 to ₹2,999 per person.",
  },
  {
    title: "Airport Porter Service",
    subTitle: "Airport meet-and-assist across India",
    desc: "A booking platform for an airport meet-and-assist service at 20 Indian airports. Families abroad book and pay online, and a host meets their parents at the airport and helps them through it.",
    year: "'25",
    url: "/works/aps.png",
    link: "https://airportporterservice.com",
    problem:
      "The original site was built in Angular, which search engines struggled to read, so it was hard to find when travellers searched for airport porter and assistance services.",
    solution:
      "Migrated the site to Next.js so every page can be read by search engines. It now has a page for each of the 20 airports with its own plans and prices, pages for NRI families, senior citizens and first-time visitors, and a clear booking flow that shows the price up front and accepts international cards.",
    result:
      "Now ranks #1 on Google for “airport porter service”, and serves bookings from the UK, US, Australia, Singapore, Canada and the Gulf across 20 Indian airports.",
  },
  {
    title: "Gaiaspace",
    subTitle: "Building sustainable space technologies.",
    desc: "A frontend-only website for a space-technology startup, using interactive 3D objects and animation to explain satellites and rocket propulsion.",
    year: "'24",
    url: "/works/gaia.png",
    link: "https://www.gaiaspace.co.in",
    problem:
      "A deep-tech startup building satellite tracking and rocket propulsion needed a website that makes complex technology easy to grasp for investors, partners and students, and looks credible at first glance.",
    solution:
      "A frontend-only build with 3D objects and scroll-driven animation. It presents the ATLAS satellite system for tracking aircraft worldwide, four propulsion products, and a 2019 to 2037 roadmap of ten milestones, with separate pages for the mission, careers and training programme.",
    result:
      "Live at gaiaspace.co.in and used by the team to present its products and long-term roadmap to partners, universities and recruits.",
  },
  {
    title: "Grihya",
    subTitle: "Real estate platform",
    desc: "A property website where people can browse homes for sale and rent across India and contact owners directly.",
    year: "'24",
    url: "/works/grihya2.png",
    link: "https://grihya.in",
  },
];

export default function MainContent() {
  const firstText =
    "An expert in building end-to-end web/app products which lasts way longer than your claude session.";

  const secondText =
    " - putting extra thought(not inference) at every step to make software better.";

  const [openTitle, setOpenTitle] = useState<string | null>(
    () => workItems.find(hasWorkDetails)?.title ?? null,
  );

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
              {...item}
              index={index}
              isOpen={openTitle === item.title}
              onToggle={() =>
                setOpenTitle((current) =>
                  current === item.title ? null : item.title,
                )
              }
            />
          ))}
        </motion.div>
        <MarqueeComponent />
      </div>
    </main>
  );
}
