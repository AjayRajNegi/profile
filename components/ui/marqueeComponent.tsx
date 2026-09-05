import { Marquee } from "./marquee";

export default function MarqueeComponent() {
  return (
    <>
      <Marquee className="[--duration:20s] p-0 border border-x-0" pauseOnHover>
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-[90px] font-semibold tracking-tighter">
              Let's Talk
            </span>
            <div className="h-2.5 w-2.5 bg-muted-foreground rotate-45" />
          </div>
        ))}
      </Marquee>
    </>
  );
}
