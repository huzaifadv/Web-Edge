"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import Mission from "/src/assets/images/mission.jpg"
import Vision from "/src/assets/images/vision.jpg"
import Value from "/src/assets/images/value.jpg"

export function ThreeDCardDemo() {
    return (
        <>
            <div className="container grid lg:grid-cols-3 mb-[80px] sm:mb-[0px] mx-auto sm:px-[0px] px-[20px]"  data-aos="fade-up" data-aos-duration="2000">

                {/*------------Card 01------------*/}
                <CardContainer className="inter-var">
                    <CardBody
                        className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  maincard border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">


                        <CardItem translateZ="100" className="w-full mt-4 px-2">
                            <img
                                src={Mission}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail" />
                        </CardItem>
                        <CardItem
                            translateZ="50"
                            className="text-[25px] font-bold text-neutral-600 dark:text-white mt-[25px] px-2">
                            Our Mission
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-[13px] max-w-sm mt-2 dark:text-neutral-300 px-2">
                            To empower businesses to achieve their full potential through innovative technology solutions and exceptional service.
                        </CardItem>
                        <div className="flex justify-between items-center mt-13">
                            <CardItem
                                translateZ={20}
                                as="a"
                                href="#"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                                See portfolio →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-[#531ec7] text-white text-xs font-bold cursor-pointer">
                                Let's Talk
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>


                {/*------------Card 02------------*/}
                <CardContainer className="inter-var">
                    <CardBody
                        className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  maincard border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">

                        <CardItem translateZ="100" className="w-full mt-4 px-2">
                            <img
                                src={Vision}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail" />
                        </CardItem>
                        <CardItem
                            translateZ="50"
                            className="text-[25px] font-bold text-neutral-600 dark:text-white mt-[25px] px-2">
                            Our Vision
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-[13px] max-w-sm mt-2 dark:text-neutral-300 px-2">
                            To be the leading provider of innovative technology solutions, driving business growth and success through exceptional service and cutting-edge expertise.
                        </CardItem>
                        <div className="flex justify-between items-center mt-13">
                            <CardItem
                                translateZ={20}
                                as="a"
                                href="#"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                                See portfolio →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-[#531ec7] text-white text-xs font-bold cursor-pointer">
                                Let's Talk
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>


                {/*------------Card 03------------*/}
                <CardContainer className="inter-var">
                    <CardBody
                        className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  maincard border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">


                        <CardItem translateZ="100" className="w-full mt-4 px-2">
                            <img
                                src={Value}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail" />
                        </CardItem>
                        <CardItem
                            translateZ="50"
                            className="text-[25px] font-bold text-neutral-600 dark:text-white mt-[25px] px-2">
                            Our Values
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-[13px] max-w-sm mt-2 dark:text-neutral-300 px-2">
                            This image highlights values like collaboration, integrity, innovation, excellence, client-centricity, and social responsibility, and quality-driven success.
                        </CardItem>
                        <div className="flex justify-between items-center mt-13">
                            <CardItem
                                translateZ={20}
                                as="a"
                                href="#"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                                See portfolio →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-[#531ec7] text-white text-xs font-bold cursor-pointer">
                                Let's Talk
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
                

            </div>
                
              
        </>
    );
}
