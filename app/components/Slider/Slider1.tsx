"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
    {
        id: 1,
        image: "/pencil-right-side-with-white-background-Photoroom6.png",
        title: "Список граждан, восстановленных в очереди за 2019-2023 г.г.",
    },
    {
        id: 2,
        image: "/pencil-right-side-with-white-background-Photoroom6.png",
        title: "Список очередников 2023 г.",
    },
    {
        id: 3,
        image: "/pencil-right-side-with-white-background-Photoroom6.png",
        title: "Списки состоящих в очереди на жилье",
    },
    {
        id: 4,
        image: "/pencil-right-side-with-white-background-Photoroom6.png",
        title: "Список граждан, восстановленных в очереди за 2019-2023 г.г.",
    },
];

const Slider= () => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    return (
        <>
            <div className="relative w-full mx-auto">
                <button
                    ref={prevRef}
                    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 p-3 bg-white text-black rounded-full hover:bg-[#4aa3a8]"
                >
                    <ChevronLeft size={30}/>
                </button>
                <button
                    ref={nextRef}
                    className="absolute right-4 top-1/2 z-10 -translate-y-1/2 p-3 bg-white text-black rounded-full hover:bg-[#4aa3a8]"
                >
                    <ChevronRight size={30}/>
                </button>

                <Swiper
                    className='overflow-visible'
                    modules={[Navigation, Autoplay]}
                    navigation={{prevEl: prevRef.current, nextEl: nextRef.current}}
                    pagination={{clickable: true}}
                    // autoplay={{delay: 4000}}
                    slidesPerView={3}
                    spaceBetween='60'
                    // onInit={(swiper) => {
                    //     if (prevRef.current && nextRef.current) {
                    //         swiper.params.navigation.prevEl = prevRef.current;
                    //         swiper.params.navigation.nextEl = nextRef.current;
                    //         swiper.navigation.init();
                    //         swiper.navigation.update();
                    //     }
                    // }}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id} className="relative h-[440px]">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                // layout="fill"
                                width={1200}
                                height={440}
                                objectFit="cover"
                                className="w-full"
                            />
                            <div className="text-[#E7EFEF] relative w-[340px] h-[320px] overflow-hidden group flex flex-col justify-between items-center p-10" style={{ background: 'linear-gradient(to bottom, transparent 50%, #FAFCFD 50%)' }}>
                                <p className="text-xl font-normal mb-[30px]">{slide.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Slider;
