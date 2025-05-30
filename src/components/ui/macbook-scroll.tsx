"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Key from '/src/assets/images/keyboard.png'
import { cn } from "../../lib/utils";


export const MacbookScroll = ({
    src,
    showGradient,
    title,
    badge
}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window && window.innerWidth < 768) {
            setIsMobile(true);
        }
    }, []);

    const scaleX = useTransform(
        scrollYProgress,
        [0, 0.3],
        isMobile ? [1.2, 1.2] : [1.2, 1.5]
    );

    const scaleY = useTransform(
        scrollYProgress,
        [0, 0.3],
        isMobile ?  [1.2, 1.2] : [0.6, 1.5]
    );

    const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
    const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
    const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div
            ref={ref}
            className="flex min-h-[200vh] shrink-0 scale-[0.35] transform flex-col items-center justify-start py-0 [perspective:800px] sm:scale-50 md:scale-100 md:py-80">
            <motion.h2
                style={{
                    translateY: textTransform,
                    opacity: textOpacity,
                }}
                className="mb-20 text-center text-3xl font-bold text-neutral-800 dark:text-white">

            </motion.h2>
            {/* Lid */}
            <Lid
                src={src}
                scaleX={scaleX}
                scaleY={scaleY}
                rotate={rotate}
                translate={translate} />
            {/* Base area */}
            <div
                className="relative -z-10 h-[30rem] sm:w-[60rem] w-[50rem] px-[20px] overflow-hidden rounded-2xl bg-gray-200 dark:bg-[#272729]">
                {/* above keyboard bar */}
                <div className="relative h-10 w-full px-[20px]">
                    <div className="absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]" />
                </div>
                <div className="relative flex">
                    <div className="mx-auto h-full w-[10%] overflow-hidden">
                        <SpeakerGrid />
                    </div>
                    <div className="mx-auto h-full w-[80%]">
                        <Keypad />
                    </div>
                    <div className="mx-auto h-full w-[10%] overflow-hidden">
                        <SpeakerGrid />
                    </div>
                </div>
                <Trackpad />
                <div
                    className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" />
                {showGradient && (
                    <div
                        className="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black"></div>
                )}
                {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
            </div>
        </div>
    );
};

export const Lid = ({
    scaleX,
    scaleY,
    rotate,
    translate,
    src
}) => {
    return (
        <div className="relative [perspective:800px]">
            <div
                style={{
                    transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
                    transformOrigin: "bottom",
                    transformStyle: "preserve-3d",
                }}
                className="relative h-[12rem] sm:w-[60rem] w-[50rem] px-[20px] rounded-2xl bg-[#010101] p-2">
                <div
                    style={{
                        boxShadow: "0px 2px 0px 2px #171717 inset",
                    }}
                    className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]">
                    <span className="text-white">
                        <AceternityLogo />
                    </span>
                </div>
            </div>
            <motion.div
                style={{
                    scaleX: scaleX,
                    scaleY: scaleY,
                    rotateX: rotate,
                    translateY: translate,
                    transformStyle: "preserve-3d",
                    transformOrigin: "top",
                }}
                className="absolute inset-0 h-96 sm:w-[60rem] w-[50rem]  rounded-2xl bg-[#010101] p-2">
                <div className="absolute inset-0 rounded-lg bg-[#272729]" />
                <img
                    src={src}
                    alt="aceternity logo"
                    className="absolute inset-0 h-full w-full rounded-lg object-cover object-left-top" />
            </motion.div>
        </div>
    );
};

export const Trackpad = () => {
    return (
        <div
            className="mx-auto my-1 h-full w-[40%]  rounded-xl"
            style={{
                boxShadow: "0px 0px 1px 1px #00000020 inset",
            }}></div>
    );
};


export const Keypad = () => {
    return (
        <div className="mx-auto w-full h-[60% sm:mt-[0px] mt-[150px] relative flex flex-col justify-start">
            <img
                src={Key}
                alt="keyboard"
                className="w-full h-auto max-h-[80%] rounded-md mx-auto block"
            />
            {/* Add empty div to create some spacing below the image */}
            <div className="flex-grow" />
        </div>
    );
};



export const SpeakerGrid = () => {
    return (
        <div
            className="mt-2 flex h-40 gap-[2px] px-[0.5px]"
            style={{
                backgroundImage:
                    "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
                backgroundSize: "3px 3px",
            }}></div>
    );
};


const AceternityLogo = () => {
    return (
        <svg
            width="66"
            height="65"
            viewBox="0 0 66 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-white">
            <path
                d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                stroke="currentColor"
                strokeWidth="15"
                strokeMiterlimit="3.86874"
                strokeLinecap="round" />
        </svg>
    );
};
