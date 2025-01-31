"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const images = [
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
        image: "/high-view-toy-model-house-keys2.jpg",
        title: "Второй слайд",
        description: "Описание второго слайда. Здесь еще больше информации.",
        buttonText: "Читать",
        buttonLink: "/news",
    },
    {
        id: 3,
        image: "/high-view-toy-model-house-keys3.jpg",
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
        image: "/high-view-toy-model-house-keys2.jpg",
        title: "Второй слайд",
        description: "Описание второго слайда. Здесь еще больше информации.",
        buttonText: "Читать",
        buttonLink: "/news",
    },
    {
        id: 6,
        image: "/high-view-toy-model-house-keys3.jpg",
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
            <div className="relative w-full max-w-[1200px] mx-auto">
                {/* Кастомные кнопки */}
                <button
                    ref={prevRef}
                    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 p-3 bg-gray-800/50 text-white rounded-full hover:bg-gray-900"
                >
                    <ChevronLeft size={30}/>
                </button>
                <button
                    ref={nextRef}
                    className="absolute right-4 top-1/2 z-10 -translate-y-1/2 p-3 bg-gray-800/50 text-white rounded-full hover:bg-gray-900"
                >
                    <ChevronRight size={30}/>
                </button>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    navigation={{prevEl: prevRef.current, nextEl: nextRef.current}}
                    pagination={{clickable: true}}
                    effect="fade"
                    autoplay={{delay: 4000}}
                    slidesPerView={1}
                    loop
                    onInit={(swiper) => {
                        // Привязка кастомных кнопок
                        if (prevRef.current && nextRef.current) {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    }}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id} className="relative">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-[500px]"
                            />
                            {/* Текстовое описание */}
                            <div
                                className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6">
                                <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                                <p className="text-lg mb-4">{slide.description}</p>
                                <Link href={slide.buttonLink}>
                                    <button
                                        className="bg-[#5BC4CB] px-6 py-3 rounded-lg text-white font-semibold hover:bg-[#4aa3a8]">
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
