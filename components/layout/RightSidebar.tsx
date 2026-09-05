import Image from "next/image";

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
    <aside className="flex h-full w-[27%] shrink-0 flex-col justify-between overflow-hidden p-4 pt-20 py-0">
      <div className="flex flex-row justify-between items-start">
        <span className="flex w-fit items-center gap-2 text-sm font-medium tracking-tight">
          <div className="h-1 w-1 bg-muted-foreground rotate-45" />
          Available for work
        </span>

        <div className="flex flex-col items-end gap-4">
          {/* <div className="h-32 w-28 overflow-hidden rounded-none bg-neutral-100"> */}
          {/* Swap for next/image with a real portrait, e.g. */}
          <Image
            src="/profile.jpg"
            alt="Aditya"
            width={170}
            height={220}
            className="object-cover"
          />
          {/* </div> */}

          <div className="text-right text-sm font-medium tracking-tight leading-5">
            <p>Software Developer</p>
            <p>Based in India</p>
            <p className="text-muted-foreground">Since 2022</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-end gap-3 text-right text-xs ">
        <div className="flex text-base font-semibold tracking-tight flex-col items-start">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-neutral-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        <span className="text-base font-medium tracking-tight text-muted-foreground">
          © {new Date().getFullYear()}
        </span>
      </div>
    </aside>
  );
}
