"use client";

import { Tabs } from "./tabs";


export function TabsDemo() {
    const tabs = [
        {
            title: "Academy",
            value: "product",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl sm:pt-[50px] sm:p-10 p-3 pt-[25px] text-xl md:text-4xl font-bold text-white bg-[#531ec7]">

                    <img
                        src="https://www.aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png"
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[90%] md:h-[100%] w-[100%] rounded-xl mx-auto" />
                </div>
            ),
        },
        {
            title: "Tailwind",
            value: "webapp",
            content: (
                <div
                   className="w-full overflow-hidden relative h-full rounded-2xl sm:pt-[50px] sm:p-10 p-3 pt-[25px] text-xl md:text-4xl font-bold text-white bg-[#531ec7]">

                    <img
                        src="https://www.aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png"
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[90%]  md:h-[100%] w-[100%] rounded-xl mx-auto" />
                </div>
            ),
        },
        {
            title: "Moonbeam",
            value: "playground",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl sm:pt-[50px] sm:p-10 p-3 pt-[25px] text-xl md:text-4xl font-bold text-white bg-[#531ec7]">

                    <img
                        src="https://www.aceternity.com/images/products/thumbnails/new/moonbeam.png"
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[90%]  md:h-[100%] w-[100%] rounded-xl mx-auto" />
                </div>
            ),
        },
        {
            title: "Aceternity",
            value: "content",
            content: (
                <div
                  className="w-full overflow-hidden relative h-full rounded-2xl sm:pt-[50px] sm:p-10 p-3 pt-[25px] text-xl md:text-4xl font-bold text-white bg-[#531ec7]">

                    <img
                        src="https://www.aceternity.com/images/products/thumbnails/new/aceternityui.png"
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[90%]  md:h-[100%] w-[100%] rounded-xl mx-auto" />
                </div>
            ),
        },
        {
            title: "Coding",
            value: "random",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl sm:pt-[50px] sm:p-10 p-3 pt-[25px] text-xl md:text-4xl font-bold text-white bg-[#531ec7]">

                    <img
                        src="https://aceternity.com/images/products/thumbnails/new/algochurn.png"
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[90%]  md:h-[100%] w-[100%] rounded-xl mx-auto" />
                </div>
            ),
        },
    ];

    return (
        <div
            className="h-[20rem] md:h-[35rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full  items-start justify-start sm:mt-[50px] mb-[200px]">
            <Tabs tabs={tabs} />
        </div>
    );
}


