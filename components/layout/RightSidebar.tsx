type ContactLink = {
  label: string;
  href: string;
};

const contactLinks: ContactLink[] = [
  {
    label: "adityakrsing94@gmail.com",
    href: "mailto:adityakrsing94@gmail.com",
  },
  { label: "+91 8130 103415", href: "tel:+918130103415" },
];

const RightSidebar = () => {
  return (
    <aside className="flex h-full w-70 shrink-0 flex-col justify-between overflow-hidden px-8 py-8">
      <span className="flex w-fit items-center gap-2 text-xs text-neutral-500">
        <span
          className="h-1.5 w-1.5 rounded-full bg-green-500"
          aria-hidden="true"
        />
        Available for work
      </span>

      <div className="flex flex-col items-end gap-4">
        <div className="h-32 w-28 overflow-hidden rounded-2xl bg-neutral-100">
          {/* Swap for next/image with a real portrait, e.g.
                <Image src="/profile.jpg" alt="Aditya" width={112} height={128} className="object-cover" /> */}
        </div>

        <div className="text-right text-sm leading-relaxed">
          <p className="text-neutral-900">Visual Designer</p>
          <p className="text-neutral-900">Based in India</p>
          <p className="text-neutral-400">Since 2022</p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-3 text-right text-xs text-neutral-500">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:text-neutral-900"
          >
            {link.label}
          </a>
        ))}
        <span>© {new Date().getFullYear()}</span>
      </div>
    </aside>
  );
};

export default RightSidebar;
