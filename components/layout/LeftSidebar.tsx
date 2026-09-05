import { Bird, FileText, Link, WandSparkles } from "lucide-react";
import type { ReactNode } from "react";
import { TextReveal } from "../motion/text-reveal";

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
  { label: "Resume", href: "#", icon: <FileText size={16} /> },
  { label: "LinkedIn", href: "#", icon: <Link size={16} /> },
  { label: "Behance", href: "#", icon: <WandSparkles size={16} /> },
  { label: "X", href: "#", icon: <Bird size={16} /> },
];

const specialties: Specialty[] = [
  { label: "Full-Stack Developer", isActive: true },
  { label: "Devops Engineer", isActive: true },
  { label: "React Native Developer", isActive: true },
  { label: "Video Editor", isActive: true },
];

const LeftSidebar = () => {
  const text = "Hello! \n I'm Ajay.";
  return (
    <aside className="flex h-full w-[27%] shrink-0 flex-col justify-between overflow-hidden border-r border-neutral-200 p-4 py-0 pt-20">
      {/* <h1 className="text-[56px] font-medium leading-[1.05] tracking-tighter text-neutral-900">
        Hello!
        <br />
        I&apos;m Ajay.
      </h1> */}
      <div>
        <div className="flex items-start justify-start">
          <TextReveal
            as="h1"
            className="text-left text-[56px] font-medium leading-[1.05] tracking-tighter "
            per="word"
            preset="fade-in-blur"
            speedReveal={0.2}
          >
            Hello
          </TextReveal>
        </div>
        <div className="flex items-center justify-start">
          <TextReveal
            as="h1"
            className="text-left text-[56px] font-medium leading-[1.05] tracking-tighter"
            per="word"
            preset="fade-in-blur"
            speedReveal={1.2}
          >
            I'm Ajay
          </TextReveal>
        </div>
      </div>

      <nav aria-label="Social links" className="flex flex-col gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            className="w-fit text-neutral-500 transition-colors hover:text-neutral-900"
          >
            {link.icon}
          </a>
        ))}
      </nav>

      <nav aria-label="Specialties" className="flex flex-col">
        {specialties.map((specialty) => (
          <div
            key={specialty.label}
            className={
              specialty.isActive
                ? "border-b border-neutral-200 py-1 text-[15px] font-medium text-neutral-900 tracking-tight"
                : "border-b border-neutral-200 py-1 text-[15px] text-neutral-400 tracking-tight"
            }
          >
            {specialty.label}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default LeftSidebar;
