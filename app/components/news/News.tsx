import {ArrowIcon} from '@/components/icons'
import {fetchNews} from '@/utils/api'
import moment from 'moment/moment'
import Link from 'next/link'

const News = async () => {
	const {data} = await fetchNews(2, 3)
	return (
		<div className='max-w-[1720px] m-auto pt-28 mb-[110px]'>
			<div className='flex justify-between items-center pb-[91px]'>
				<h3 className='text-5xl font-normal leading-[43px] text-[#3B3E4F]'>
					Новости
				</h3>
				<Link href='/news'>
					<button className='bg-[#5BC4CB] text-white text-base font-normal flex gap-2.5 py-9 px-8 rounded-xl'>
						Все новости
						<ArrowIcon />
					</button>
				</Link>
			</div>
			<div className='flex gap-[60px] justify-between'>
				{data.map((el: any) => {
					const formattedDate = moment(el.created_at).format('DD.MM.YYYY')
					return (
						<div key={el.id}>
							<div className='mb-[50px]'>
								<img
									src={el.uploads[0].path}
									alt=''
									className='w-full h-[500px] object-cover'
								/>
							</div>
							<div>
								<p className='mb-[20px]'>{formattedDate}</p>
								<p className='text-xl'>{el.title.ru}</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default News
