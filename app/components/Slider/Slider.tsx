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
        image: "/high-view-toy-model-house-keys.jpg",
        title: "Первый слайд",
        description: "Описание первого слайда. Это текст для демонстрации.",
        buttonText: "Подробнее",
        buttonLink: "/about",
    },
    {
        id: 2,
        image: "/high-view-toy-model-house-keys1.jpg",
        title: "Второй слайд",
        description: "Описание второго слайда. Здесь еще больше информации.",
        buttonText: "Читать",
        buttonLink: "/news",
    },
    {
        id: 3,
        image: "/high-view-toy-model-house-keys2.jpg",
        title: "Третий слайд",
        description: "Заключительное описание слайда с важными деталями.",
        buttonText: "Узнать больше",
        buttonLink: "/contact",
    },
    {
        id: 4,
        image: "/high-view-toy-model-house-keys.jpg",
        title: "Первый слайд",
        description: "Описание первого слайда. Это текст для демонстрации.",
        buttonText: "Подробнее",
        buttonLink: "/about",
    },
    {
        id: 5,
        image: "/high-view-toy-model-house-keys1.jpg",
        title: "Второй слайд",
        description: "Описание второго слайда. Здесь еще больше информации.",
        buttonText: "Читать",
        buttonLink: "/news",
    },
    {
        id: 6,
        image: "/high-view-toy-model-house-keys2.jpg",
        title: "Третий слайд",
        description: "Заключительное описание слайда с важными деталями.",
        buttonText: "Узнать больше",
        buttonLink: "/contact",
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
                    slidesPerView={4}
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
                            <div
                                className="mt-[50px]">
                                <h2 className="text-xl font-normal mb-[30px]">{slide.title}</h2>
                                <p className="text-base mb-[30px]">{slide.description}</p>
                                <Link href={slide.buttonLink}>
                                    <button
                                        className="text-xl font-normal hover:text-[#4aa3a8] border-b border-[#3B3E4F] text-left pb-2.5 w-full">
                                        {slide.buttonText}
                                    </button>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Slider;
