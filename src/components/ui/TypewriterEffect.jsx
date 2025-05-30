"use client";
import { TypewriterEffectSmooth } from "./typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Elevate Your Brand with",
      className: "sm:text-[60px] text-[18px] font-[800] dark:text-slate-300"
    },
   
    {
      text: "Web Edge.",
      className: "text-blue-500 dark:text-[#531ec7] text-[18px] sm:text-[60px] font-[800]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center py-[100px]">
      <p className="sm:text-neutral-600 sm:dark:text-neutral-200 sm:text-[16px] text-[11px]">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
         <button className="sm:mt-[20px] mt-[10px] bg-[#531ec7] text-[#ffffff] sm:px-[90px] px-[70px] sm:py-[20px] py-[15px] sm:text-[16px] text-[12px] font-[600] rounded-3xl"><a href="#">Let's Talk</a></button>
      </div>
    </div>
  );
}
