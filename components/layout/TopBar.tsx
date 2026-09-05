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
    <header className="flex h-14 w-full shrink-0 items-center justify-between border-b border-neutral-200 px-8 text-sm">
      <a
        href="/"
        className="font-semibold tracking-tight text-neutral-900"
        aria-label="Aditya.S home"
      >
        Aditya.S
      </a>

      <nav aria-label="Primary" className="flex items-center gap-6">
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

      <div className="flex items-center gap-6">
        <span className="text-neutral-500">
          {now ? formatDateTime(now) : ""}
        </span>
        <button
          type="button"
          onClick={handleBookCall}
          aria-label="Book a call"
          className="font-medium text-neutral-900 hover:underline"
        >
          Book a Call
        </button>
      </div>
    </header>
  );
};

export default TopBar;
