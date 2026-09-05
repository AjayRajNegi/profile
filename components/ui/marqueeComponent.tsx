import { Marquee } from "./marquee";

export default function MarqueeComponent() {
  return (
    <>
      <div className="py-40 relative z-10 bg-background">
        <Marquee
          className="[--duration:20s] p-0 border border-x-0 cursor-pointer group hover:bg-black duration-300"
          pauseOnHover
        >
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-[80px] group-hover:text-background font-semibold tracking-tighter">
                Let's Talk
              </span>
              <div className="h-2.5 w-2.5 bg-muted-foreground rotate-45" />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
}
