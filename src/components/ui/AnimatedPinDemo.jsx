"use client";
import React from "react";
import { PinContainer } from "./3d-pin";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import Web1 from '/src/assets/images/Web1.png'
import Web2 from '/src/assets/images/Web2.png'
import Web3 from '/src/assets/images/Web3.png'

export function AnimatedPinDemo() {
  return (
    <div className="grid lg:grid-cols-4 gap-14 mt-[30px] container mx-auto h-[40rem] w-full items-center justify-center" data-aos="fade-up" data-aos-duration="2000">

      <PinContainer title="/webedge.com" href="#">
        <div
          className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            WebEdge Solution
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              WebEdge was born out of a passion for creating digital solutions.
            </span>
          </div>
          <div
            className="flex flex-1 w-full rounded-lg  mb-[-30px]" />
          <img className="h-[300px]" src={Web1} />
        </div>
      </PinContainer>

      <PinContainer title="/webedge.com" href="#">
        <div
          className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            WebEdge Solution
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              WebEdge was born out of a passion for creating digital solutions.
            </span>
          </div>
          <div
            className="flex flex-1 w-full rounded-lg  mb-[-30px]" />
          <img className="h-[300px]" src={Web2} />
        </div>
      </PinContainer>

      <PinContainer title="/webedge.com" href="#">
        <div
          className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            WebEdge Solution
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              WebEdge was born out of a passion for creating digital solutions.
            </span>
          </div>
          <div
            className="flex flex-1 w-full rounded-lg  mb-[-30px]" />
          <img className="h-[300px]" src={Web3} />
        </div>
      </PinContainer>

      <PinContainer title="/webedge.com" href="#">
        <div
          className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            WebEdge Solution
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              WebEdge was born out of a passion for creating digital solutions.
            </span>
          </div>
          <div
            className="flex flex-1 w-full rounded-lg  mb-[-30px]" />
          <img className="h-[300px]" src={Web1} />
        </div>
      </PinContainer>

    </div>
  );
}
