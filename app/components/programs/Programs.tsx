import React from 'react';
import Link from "next/link";
import ArrowIcon from "@/components/icons/ArrowIcon";
import Slider from "@/components/Slider/Slider";

const Programs = () => {
    return (
        <>
            <div className='max-w-[1720px] m-auto'>
                <div className='flex justify-between items-center pb-[91px]'>
                    <h3 className='text-5xl font-normal leading-[43px] text-[#3B3E4F]'>Жилищные программы</h3>
                    <Link href='#'>
                        <button
                            className='bg-[#5BC4CB] text-white text-base font-normal flex gap-2.5 py-9 px-8 rounded-xl'>
                            Текущие программы
                            <ArrowIcon/>
                        </button>
                    </Link>
                </div>
                <Slider/>
            </div>
        </>
    );
};

export default Programs;