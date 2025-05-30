"use client";
import React from "react";
// import { SparklesCore } from "./sparkles";

export function SparklesPreview() {
  return (
    <div className="h-[20rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-[60px] font-[800] text-center dark:text-slate-300 text-white relative z-20">
        Latest Portfolios
      </h1>

      {/* Gradient underline block */}
      <div className="relative w-full flex justify-center items-center h-40 mt-4">
        <div className="w-[80%] sm:w-[40rem] relative h-full">
          {/* Gradients */}
          <div className="absolute top-0 left-0 right-0 mx-auto bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute top-0 left-0 right-0 mx-auto bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute top-0 left-0 right-0 mx-auto bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute top-0 left-0 right-0 mx-auto bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Radial mask for smooth fade */}
          <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
        </div>
      </div>
    </div>
  );
}
