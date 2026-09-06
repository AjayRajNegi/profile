"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  isActive: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", isActive: true },
  // { label: "Work", href: "/work", isActive: false },
  // { label: "Info", href: "/info", isActive: false },
];

const formatDateTime = (date: Date): string => {
  const datePart = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
  }).format(date);
  const timePart = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
    .format(date)
    .toLowerCase();
  return `${datePart}, ${timePart}`;
};

const TopBar = () => {
  const [now, setNow] = useState<Date | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setNow(new Date());
    const intervalId = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="w-full fixed top-0 z-20 shrink-0 border-b border-neutral-200 text-sm bg-background">
      <div className="flex h-14 w-full items-center justify-between px-4">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          href="/"
          className="font-medium tracking-tight text-base text-neutral-900 lg:w-[26%]"
          aria-label="Ajay home"
        >
          Ajay.Raj.Negi
        </motion.a>

        {/* Desktop nav */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          aria-label="Primary"
          className="hidden lg:flex items-start w-[46%] gap-2"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={
                item.isActive
                  ? "font-medium text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-900"
              }
            >
              {item.label}
            </a>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-between text-sm font-medium tracking-tight w-[26%]"
        >
          <span className="text-muted-foreground">
            {now ? formatDateTime(now) : ""}
          </span>
          <a
            type="link"
            href="https://wa.me/+918433038283?text=Hi%20Ajay"
            aria-label="Book a call"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:underline"
          >
            Text me Here!
          </a>
        </motion.div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-label={expanded ? "Close menu" : "Open menu"}
          aria-expanded={expanded}
          className="flex lg:hidden h-8 w-8 items-center justify-center rounded-full text-neutral-900"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ rotate: expanded ? 45 : 0, opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            {expanded ? (
              <X size={22} className="text-neutral-400" />
            ) : (
              <Plus size={24} className="text-neutral-400" />
            )}
          </motion.span>
        </button>
      </div>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="mobile-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-0 top-full w-full overflow-hidden border-t border-neutral-200 bg-background lg:hidden border"
          >
            <div className="flex flex-col gap-4 px-4 py-4">
              <nav aria-label="Primary" className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setExpanded(false)}
                    className={
                      item.isActive
                        ? "font-medium text-neutral-900"
                        : "text-neutral-400 hover:text-neutral-900"
                    }
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center justify-between text-sm font-medium tracking-tight">
                <span className="text-muted-foreground">
                  {now ? formatDateTime(now) : ""}
                </span>
                <a
                  type="link"
                  href="https://wa.me/+918433038283?text=Hi%20Ajay"
                  aria-label="Book a call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:underline"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default TopBar;
