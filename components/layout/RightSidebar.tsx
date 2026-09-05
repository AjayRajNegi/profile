"use client";

import Image from "next/image";
import { TextReveal } from "../motion/text-reveal";
import { motion } from "motion/react";

type ContactLink = {
  label: string;
  href: string;
};

const contactLinks: ContactLink[] = [
  {
    label: "ajayrajnegi1608@gmail.com",
    href: "mailto:ajayrajnegi1608@gmail.com",
  },
  { label: "+91 8433 038283", href: "tel:+918433038283" },
];

export default function RightSidebar() {
  return (
    <aside className="flex h-full w-[27%] shrink-0 flex-col justify-between overflow-hidden p-4 py-0 pt-20">
      <div className="flex flex-row items-start justify-between">
        <span className="flex w-fit items-center gap-2 text-sm font-medium tracking-tight">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="h-1 w-1 rotate-45 bg-muted-foreground"
          />

          <div className="flex items-start justify-start">
            <TextReveal
              as="h1"
              className=""
              per="word"
              preset="fade-in-blur"
              speedReveal={0.2}
            >
              Available for work
            </TextReveal>
          </div>
        </span>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0,
            ease: "easeOut",
          }}
          className="flex flex-col items-end gap-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Aditya"
              width={170}
              height={220}
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="text-right text-sm font-medium leading-5 tracking-tight"
          >
            <p>Software Developer</p>
            <p>Based in India</p>
            <p className="text-muted-foreground">Since 2022</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: "easeOut",
        }}
        className="flex flex-row items-end justify-between gap-3 text-right text-xs"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.6,
                staggerChildren: 0.07,
              },
            },
          }}
          className="flex flex-col items-start text-base font-semibold tracking-tight"
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              variants={{
                hidden: {
                  opacity: 0,
                  x: -6,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.35,
                    ease: "easeOut",
                  },
                },
              }}
              className="hover:text-neutral-900"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.35,
            ease: "easeOut",
          }}
          className="text-base font-medium tracking-tight text-muted-foreground"
        >
          © {new Date().getFullYear()}
        </motion.span>
      </motion.div>
    </aside>
  );
}
