'use client'
import api from '@/utils/api'
import moment from 'moment'
import {notFound, useParams} from 'next/navigation'
import {useEffect, useState} from 'react'

const NewsSingle = () => {
	const {id} = useParams()

	const [news, setNews] = useState<{
		id: number
		title: {ru: string}
		uploads: {path: string}[]
		created_at: string
		description: {ru: string}
	} | null>(null)
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		if (!id) return
		const loadNews = async () => {
			// setLoading(true)
			try {
				const res = await api.get(`/news/${id}`)
				setNews(res.data?.data)
			} catch (error) {
				console.error('Ошибка загрузки новости', error)
			}
			setLoading(false)
		}
		loadNews()
	}, [id])
	if (loading) return <p className='text-center'>Загрузка новости...</p>
	if (!news) return notFound()

	const formattedDate = moment(news.created_at).format('DD.MM.YYYY')
	return (
		<>
			<div className='max-w-[1126px] ml-auto mr-auto mt-[70px] mb-[130px]'>
				<h3 className='text-[48px] mb-[30px] leading-[57.6px]'>
					{news.title.ru}
				</h3>
				<div className='text-[#3B3E4F] text-[16px] mb-[50px]'>
					{formattedDate}
				</div>
				<div className='mb-[70px]'>
					<img
						className='h-[624px] object-cover'
						src={news.uploads[0]?.path}
						alt=''
					/>
				</div>
				<div className='text-[16px] leading-[25.6px]'>
					{news.description.ru}
				</div>
			</div>
		</>
	)
}

export default NewsSingle
