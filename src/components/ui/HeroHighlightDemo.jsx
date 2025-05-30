"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "./hero-highlight";
import HeroImages from "./HeroImages";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export function HeroHighlightDemo() {
    return (
        <HeroHighlight>

            <div className="grid lg:grid-cols-2 mt-[70px]">
                <div className="sm:pl-[170px] pl-[15px] sm:pr-[80px] pr-[15px] my-auto hero-text">
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}

                        className="text-2xl md:text-4xl lg:text-[52px] text-[25px] font-[800] text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug my-auto ">
                        Build Your Presence With{" "}
                        <Highlight className="text-black dark:text-white px-[10px] ">
                            WebEdge Solution
                        </Highlight>
                    </motion.h1>
                    <p className="mt-[25px] sm:text-[16px] text-[13px]">At WebEdge, we design and develop high-performing websites that don’t just look great — they work. From sleek landing pages to full-scale eCommerce stores, we build responsive, user-focused solutions that help your business stand out online.</p>
                    <button className="mt-[30px] bg-[#531ec7] px-[50px] py-[10px] sm:text-[18px] text-[15px] font-[600] rounded-3xl"><a href="#">Let's Talk</a></button>
                </div>

                <div className="mx-auto" data-aos="fade-left" data-aos-duration="2000">
                    <HeroImages />
                </div>

            </div>
        </HeroHighlight>
    );
}
