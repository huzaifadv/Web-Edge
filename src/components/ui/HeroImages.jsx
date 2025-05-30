import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import Web1 from '/src/assets/images/Web1.png'
import Web2 from '/src/assets/images/Web2.png'
import Web3 from '/src/assets/images/Web3.png'

import { EffectCube, Pagination, Autoplay } from 'swiper/modules';

export default function HeroImages() {
    return (
        <>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: false,
                    slideShadows: false,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={true}
                autoplay={{
                    delay: 2000, // Change slide every 3 seconds
                    disableOnInteraction: false,
                }}
                modules={[EffectCube, Autoplay]}
                className="relative z-0 mySwiper w-full h-[400px] max-w-3xl mx-auto rounded-lg overflow-hidden"
            >
                <SwiperSlide>
                    <img src={Web1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Web2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Web3} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
