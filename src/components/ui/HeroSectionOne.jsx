"use client";

import { motion } from "motion/react";
import { TabsDemo } from "./TabsDemo";

export function HeroSectionOne() {
    return (
        <div className="relative mx-4 sm:mx-auto my-10 flex max-w-7xl flex-col items-center justify-center sm:mt-[-700px] mt-[30px]">
            <div className="px-4 sm:px-6 py-10 md:py-20 w-full">
                <h1 className="relative z-10 mx-auto text-center text-2xl font-bold text-slate-700 dark:text-slate-300 sm:text-4xl lg:text-[60px] max-w-3xl">
                    Power Up Your Brand with WebEdge!
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    className="relative z-10 mx-auto mt-4 max-w-xl text-center text-base font-normal text-neutral-600 dark:text-neutral-400 sm:text-lg"
                >
                    With our expert web development services, your stunning, high-converting website can go live in hours—not days!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1 }}
                    className="relative z-10 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="w-full sm:w-60 rounded-lg bg-[#531ec7] px-6 py-2 font-medium text-white transition-transform duration-300 hover:-translate-y-0.5">
                        Explore Now
                    </button>
                    <button className="w-full sm:w-60 rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-transform duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
                        Contact Support
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1.2 }}
                    className="relative z-10 mt-20 sm:rounded-3xl sm:border sm:border-neutral-200 sm:shadow-md sm:dark:border-neutral-800"
                >
                    <TabsDemo />
                </motion.div>
            </div>
        </div>
    );
}
