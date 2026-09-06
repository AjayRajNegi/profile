"use client";

import { Bird, FileText, GitMerge, Link, WandSparkles } from "lucide-react";
import type { ReactNode } from "react";
import { TextReveal } from "../motion/text-reveal";
import { motion } from "motion/react";

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

type Specialty = {
  label: string;
  isActive: boolean;
};

const socialLinks: SocialLink[] = [
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1a8IIX_DBw5PXjrfawo74Tf3AnQwf90aI/view",
    icon: <FileText size={16} />,
  },
  {
    label: "Github",
    href: "https://github.com/AjayRajNegi",
    icon: <GitMerge size={16} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ajay-raj-negi-a3713a262/",
    icon: <Link size={16} />,
  },

  {
    label: "Twitter",
    href: "https://x.com/AjayRajNegi1608",
    icon: <Bird size={16} />,
  },
];

const specialties: Specialty[] = [
  { label: "Full-Stack Developer", isActive: true },
  { label: "Devops Engineer", isActive: true },
  { label: "React Native Developer", isActive: true },
  { label: "Video Editor", isActive: true },
];

const LeftSidebar = () => {
  return (
    <aside className="flex h-fit lg:h-full w-full lg:w-[27%] shrink-0 flex-col justify-between overflow-hidden border-r border-neutral-200 p-4 py-0 pt-30 lg:pt-40 gap-4 lg:gap-0">
      <div>
        <div className="flex items-start justify-start">
          <TextReveal
            as="h1"
            className="text-left text-[40px] font-medium leading-[1.05] tracking-tighter"
            per="word"
            preset="fade-in-blur"
            speedReveal={0.2}
          >
            Hello!
          </TextReveal>
        </div>

        {/* TextReveal stays untouched */}
        <div className="flex items-center justify-start">
          <TextReveal
            as="h1"
            className="text-left text-[40px] font-medium leading-[1.05] tracking-tighter"
            per="word"
            preset="fade-in-blur"
            speedReveal={1.2}
          >
            I'm Ajay
          </TextReveal>
        </div>
      </div>

      <motion.nav
        aria-label="Social links"
        className="flex flex-row lg:flex-col gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0,
          ease: "easeOut",
        }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            className="w-fit text-neutral-500 transition-colors hover:text-neutral-900"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.nav>

      <motion.nav
        aria-label="Specialties"
        className="flex flex-col mt-8 lg:mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0,
          ease: "easeOut",
        }}
      >
        {specialties.map((specialty, index) => (
          <motion.div
            key={specialty.label}
            className={
              specialty.isActive
                ? "border-b border-neutral-200 py-1 text-[15px] font-medium tracking-tight text-neutral-900"
                : "border-b border-neutral-200 py-1 text-[15px] tracking-tight text-neutral-400"
            }
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.5 + index * 0.06,
              ease: "easeOut",
            }}
          >
            {specialty.label}
          </motion.div>
        ))}
      </motion.nav>
    </aside>
  );
};

export default LeftSidebar;
