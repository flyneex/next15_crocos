import React from 'react';
import ArrowBig from "@/components/icons/ArrowBig";

const Online = () => {
    interface ServicesItem {
        id: number,
        image: string,
        title: string
    }

    const items: ServicesItem[] = [
        {
            id: 1,
            image: '/pencil-right-side-with-white-background-Photoroom1.png',
            title: 'Написать обращение'
        },
        {
            id: 2,
            image: '/pencil-right-side-with-white-background-Photoroom2.png',
            title: 'Запись на прием к руководству'
        },
        {
            id: 3,
            image: '/pencil-right-side-with-white-background-Photoroom3.png',
            title: 'Постановка в очередь на жилье'
        },
        {
            id: 4,
            image: '/pencil-right-side-with-white-background-Photoroom4.png',
            title: 'Приватизация жилища'
        },
        {
            id: 5,
            image: '/pencil-right-side-with-white-background-Photoroom5.png',
            title: 'Выдача жилищных сертификатов'
        }
    ]
    return (
        <div className='max-w-[1720px] m-auto mb-[110px]'>
            <div className='text-5xl font-normal mb-[66px]'>Онлайн сервисы</div>
            <div className='flex justify-between items-center'>
                {items.map(item => {
                    return (
                        <div key={item.id} className='text-[#E7EFEF] relative w-[340px] h-[320px] overflow-hidden group flex flex-col justify-between items-center p-10' style={{ background: 'linear-gradient(to bottom, transparent 50%, #FAFCFD 50%)' }}>
                            <div className="absolute bottom-0 left-0 w-full h-0 bg-main transition-all duration-300 group-hover:h-[160px]"></div>
                            <ArrowBig className='self-end'/>
                            <img className='z-10' src={item.image} alt={item.title}/>
                            <p className='text-[#CAA44D] z-10'>{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Online;