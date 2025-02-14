'use client'
import ArrowIcon from '@/components/icons/ArrowIcon'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
	return (
		<header>
			<div className='bg-[#5BC4CB]'>
				<div className='max-w-[1720px] m-auto flex justify-between pt-2.5 pb-2.5'>
					<div className='flex items-center gap-[25px]'>
						<div className='flex gap-[25px] md:flex-col'>
							<div className='flex gap-2.5 text-white'>
								<Image src='/Map_Pin.svg' alt='Map' width={24} height={24} />
								просп. Республики 32
							</div>
							<div className='flex gap-2.5 text-white'>
								<Image src='/Mail.svg' alt='Mail' width={24} height={24} />
								info@zhilfond.kz
							</div>
							<div className='flex gap-2.5 text-white'>
								<Image src='/Phone.svg' alt='Phone' width={24} height={24} />
								+7 (7172) 28-09-59
							</div>
						</div>
						<div className='flex items-center gap-2.5 md:flex-col'>
							<div className='bg-custom-radial rounded-[50%] w-[28px] h-[28px] p-[7px]'>
								<Image
									src='/instagram.svg'
									alt='Instagram'
									width={14}
									height={14}
								/>
							</div>
							<div className='bg-[#0B84EE] rounded-[50%] w-[28px] h-[28px] pt-[5px] pl-[10px] pr-[10px] pb-[6px]'>
								<Image
									src='/facebook.svg'
									alt='Facebook'
									width={10}
									height={17}
								/>
							</div>
							<div className='flex bg-[#48C95F] rounded-[50%] w-[28px] h-[28px] p-[7px]'>
								<Image
									src='/whatsapp.svg'
									alt='WhatsApp'
									width={15}
									height={15}
								/>
							</div>
							<a className='text-white' href='tel:+77172280959'>
								+7 (7172) 28-09-59
							</a>
						</div>
					</div>
					<div className='flex items-center gap-[30px] sm:flex-col'>
						<div className='flex gap-2.5 text-white'>
							<Image src='/Show.svg' alt='' width={24} height={24} />
							Для слабовидящих
						</div>
						<div className='flex gap-2.5 text-white'>
							<Image src='/Caret_Down_MD.svg' alt='' width={24} height={24} />
							Рус
						</div>
					</div>
				</div>
			</div>
			<div className='bg-white shadow-custom'>
				<div className='max-w-[1720px] m-auto flex justify-between items-center pt-[14px] pb-[20px] md:flex-col'>
					<div>
						<Link href='/'>
							<Image
								src='/_2172106763472.png'
								alt='Logo'
								width={175}
								height={58}
							/>
						</Link>
					</div>
					<div>
						<ul className='flex gap-[30px] text-[#3B3E4F]'>
							<li>
								<Link href='/news'>Новости</Link>
							</li>
							<li>
								<Link href='/about'>Об учреждении</Link>
							</li>
						</ul>
					</div>
					<div>
						<Image src='/search.svg' alt='Поиск' width={24} height={24} />
					</div>
					<div className='flex gap-5 md:flex-col'>
						<div className='flex gap-2.5 text-[#CAA44D] border border-[#CAA44D] p-5 rounded-xl hover:text-[#5BC4CB] hover:border-[#5BC4CB]'>
							Жилищные программы
							{/*<Image src='/Arrow_Up_Right_SM.svg' alt='' width={25} height={24}/>*/}
							<ArrowIcon />
						</div>
						<div className='flex gap-2.5 text-[#CAA44D] border border-[#CAA44D] p-5 rounded-xl hover:text-[#5BC4CB] hover:border-[#5BC4CB]'>
							Онлайн сервисы
							{/*<Image src='/Arrow_Up_Right_SM.svg' alt='' width={25} height={24}/>*/}
							<ArrowIcon />
						</div>
						<div className='flex gap-2.5 text-[#CAA44D] border border-[#CAA44D] p-5 rounded-xl hover:text-[#5BC4CB] hover:border-[#5BC4CB]'>
							Списки очередников
							{/*<Image src='/Arrow_Up_Right_SM.svg' alt='' width={25} height={24}/>*/}
							<ArrowIcon />
						</div>
						<div className='flex gap-2.5 text-[#CAA44D] border border-[#CAA44D] p-5 rounded-xl hover:text-[#5BC4CB] hover:border-[#5BC4CB]'>
							поиск номера очереди на жилье
							{/*<Image src='/Arrow_Up_Right_SM.svg' alt='' width={25} height={24}/>*/}
							<ArrowIcon />
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
