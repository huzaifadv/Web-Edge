import React from "react";
import { TextHoverEffect } from "./text-hover-effect";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export function TextHoverEffectDemo() {
    return (
        <div className="web-text sm:h-[40rem] h-[20rem] flex items-center justify-center" data-aos="fade-up" data-aos-duration="2000">
            <TextHoverEffect text="WEB EDGE" /> 
        </div>
    );
}
