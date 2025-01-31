'use client'
import React, {useEffect, useState} from 'react';
import {fetchNews} from "@/utils/api";
import Link from "next/link";
import Image from "next/image";
import moment from 'moment';

const News = () => {
    // const news = await fetchNews()
    const [newsData, setNewsData] = useState<any[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const per_page = 6;
    useEffect(() => {
        const loadNews = async () => {
            try {
                const {data, total} = await fetchNews(currentPage, per_page);
                setNewsData(data)
                setTotalPages(Math.ceil(total / per_page))
            } catch(error) {
                console.error("Ошибка загрузки новостей", error)
            }

        }
        loadNews()
    }, [currentPage])

    return (
        <>
            <div className='max-w-[1720px] m-auto pt-28'>
                <div className='flex justify-between items-center pb-[91px]'>
                    <h3 className='text-5xl font-normal leading-[43px] text-[#3B3E4F]'>Новости</h3>
                    <Link href='#'>
                        <button
                            className='border-1 border-[#5BC4CB] text-[#5BC4CB] text-base font-normal flex gap-2.5 py-9 px-8 rounded-xl'>
                            Архив новостей
                            <Image src='/Arrow_Up_Right_SM.svg' alt='' width={25} height={24}/>
                        </button>
                    </Link>
                </div>
            </div>
            <div className='max-w-[1720px] m-auto flex justify-between flex-wrap gap-[60px]'>
                {newsData.map((el: any) => {
                    // console.log("Картинка:", el.uploads?.path);
                    const formattedDate = moment(el.created_at).format('DD.MM.YYYY');
                    return (
                        <div key={el.id} className='flex-custom'>
                            <div className="mb-[50px]">
                                {/*<Image*/}
                                {/*    src={el.uploads[0].path}*/}
                                {/*    alt=''*/}
                                {/*    width={1000}*/}
                                {/*    height={300}*/}
                                {/*    // layout="responsive"*/}
                                {/*/>*/}
                                <img src={el.uploads[0].path} alt="" className='w-full h-[440px] object-cover'/>
                            </div>
                            <div>
                                <p className='mb-[20px]'>{formattedDate}</p>
                                <p className='text-xl'>{el.title.ru}</p>
                            </div>
                        </div>
                    )
                })
                }
                <div>
                    <div className="flex justify-center gap-2 mt-10">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="py-2 px-4 rounded-lg bg-gray-300 disabled:bg-gray-200"
                        >
                            Назад
                        </button>
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`py-2 px-4 rounded-lg ${
                                    currentPage === index + 1 ? "bg-[#5BC4CB] text-white" : "bg-gray-200"
                                }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="py-2 px-4 rounded-lg bg-gray-300 disabled:bg-gray-200"
                        >
                            Вперед
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;