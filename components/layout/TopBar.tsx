"use client";

import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
  isActive: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", isActive: true },
  { label: "Work", href: "/work", isActive: false },
  { label: "Info", href: "/info", isActive: false },
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

  useEffect(() => {
    setNow(new Date());
    const intervalId = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(intervalId);
  }, []);

  const handleBookCall = () => {
    window.open("#", "_blank");
  };

  return (
    <header className="flex h-14 w-full shrink-0 items-center justify-between border-b border-neutral-200 px-4 text-sm">
      <a
        href="/"
        className="font-semibold tracking-tight text-neutral-900 w-[26%]"
        aria-label="Ajay home"
      >
        Ajay.Raj.Negi
      </a>

      <nav aria-label="Primary" className="flex items-start w-[46%] gap-2">
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
      </nav>

      <div className="flex items-center justify-between text-sm font-medium tracking-tight w-[26%]">
        <span className="text-muted-foreground">
          {now ? formatDateTime(now) : ""}
        </span>
        <button
          type="button"
          onClick={handleBookCall}
          aria-label="Book a call"
          className="font-medium text-foreground hover:underline"
        >
          Book a Call
        </button>
      </div>
    </header>
  );
};

export default TopBar;
