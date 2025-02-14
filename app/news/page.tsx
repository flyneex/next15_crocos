'use client'
import {ArrowIcon} from '@/components/icons'
import {fetchNews} from '@/utils/api'
import moment from 'moment'
import Link from 'next/link'
import {useEffect, useState} from 'react'

const News = () => {
	// const news = await fetchNews()
	const [newsData, setNewsData] = useState<any[]>([])
	const [totalPages, setTotalPages] = useState<number>(1)
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [loading, setLoading] = useState<boolean>(false)
	const per_page = 6
	useEffect(() => {
		const loadNews = async () => {
			setLoading(true)
			try {
				const {data, total} = await fetchNews(currentPage, per_page)
				setNewsData(data)
				setTotalPages(Math.ceil(total / per_page))
			} catch (error) {
				console.error('Ошибка загрузки новостей', error)
			}
			setLoading(false)
		}
		loadNews()
	}, [currentPage])

	return (
		<>
			<div className='max-w-[1720px] m-auto pt-28 xl:pl-5 xl:pr-5'>
				<div className='flex justify-between items-center pb-[91px]'>
					<h3 className='text-5xl font-normal leading-[43px] text-[#3B3E4F]'>
						Новости
					</h3>
					<Link href='#'>
						<button className='border-1 border-[#5BC4CB] text-[#5BC4CB] text-base font-normal flex gap-2.5 py-9 px-8 rounded-xl'>
							Архив новостей
							<ArrowIcon />
						</button>
					</Link>
				</div>
			</div>
			{loading && <p className='text-center'>Загрузка новостей...</p>}
			<div className='max-w-[1720px] m-auto flex justify-between flex-wrap gap-[60px] xl:pl-5 xl:pr-5'>
				{newsData.map((el: any) => {
					// console.log("Картинка:", el.uploads?.path);
					const formattedDate = moment(el.created_at).format('DD.MM.YYYY')
					return (
						<Link
							href={`/news/${el.id}`}
							key={el.id}
							className='flex-custom sm:!flex-[0_0_100%] md:flex-[0_0_calc(50%_-_30px)]'
						>
							<div className='mb-[50px]'>
								{/*<Image*/}
								{/*    src={el.uploads[0].path}*/}
								{/*    alt=''*/}
								{/*    width={1000}*/}
								{/*    height={300}*/}
								{/*    // layout="responsive"*/}
								{/*/>*/}
								<img
									src={el.uploads[0].path}
									alt={el.title.ru}
									className='w-full h-[440px] object-cover'
								/>
							</div>
							<div>
								<p className='mb-[20px]'>{formattedDate}</p>
								<p className='text-xl'>{el.title.ru}</p>
							</div>
						</Link>
					)
				})}

				<div className='flex justify-center gap-2 mt-10 sm:flex-col'>
					<button
						onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
						disabled={currentPage === 1}
						className='py-2 px-4 rounded-lg bg-gray-300 disabled:bg-gray-200'
					>
						Назад
					</button>
					{[...Array(totalPages)].map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentPage(index + 1)}
							className={`py-2 px-4 rounded-lg ${
								currentPage === index + 1
									? 'bg-[#5BC4CB] text-white'
									: 'bg-gray-200'
							}`}
						>
							{index + 1}
						</button>
					))}
					<button
						onClick={() =>
							setCurrentPage(prev => Math.min(prev + 1, totalPages))
						}
						disabled={currentPage === totalPages}
						className='py-2 px-4 rounded-lg bg-gray-300 disabled:bg-gray-200'
					>
						Вперед
					</button>
				</div>
			</div>
		</>
	)
}

export default News
