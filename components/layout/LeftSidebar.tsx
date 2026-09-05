import { Bird, FileText, Link, WandSparkles } from "lucide-react";
import type { ReactNode } from "react";

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
  { label: "Brand Identity", isActive: true },
  { label: "Visual Systems", isActive: false },
  { label: "Creative Direction", isActive: false },
  { label: "Photography", isActive: false },
];

const LeftSidebar = () => {
  return (
    <aside className="flex h-full w-[280px] shrink-0 flex-col justify-between overflow-hidden border-r border-neutral-200 px-8 py-8">
      <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-neutral-900">
        Hello!
        <br />
        I&apos;m Aditya.
      </h1>

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
                ? "border-t border-neutral-200 py-3 text-sm font-medium text-neutral-900"
                : "border-t border-neutral-200 py-3 text-sm text-neutral-400"
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
