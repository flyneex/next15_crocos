import Image from 'next/image'

const Footer = () => {
	return (
		<div className='bg-[#FAFCFD] pt-[60px] pb-[40px]'>
			<div className='max-w-[1720px] m-auto flex justify-between items-center gap-[176px]'>
				<div className='flex-[0_0_calc(60%_-_176px)]'>
					<div className='flex mb-[70px] gap-[120px] sm:flex-col'>
						<div>
							<Image
								src='/_2172106763472.png'
								alt='Logo'
								width={175}
								height={58}
							/>
						</div>
						<div className='flex gap-5 md:flex-col'>
							<div className='flex items-center gap-7'>
								<Image
									src='/Emblem_of_Astana_(latin).png'
									alt='Logo'
									width={57}
									height={57}
								/>
								<p className='max-w-[167px]'>
									Управление жилья и жилищной инспекции города Астаны
								</p>
							</div>
							<div className='flex items-center gap-7'>
								<Image
									src='/Emblem_of_Astana_(latin).png'
									alt='Logo'
									width={57}
									height={57}
								/>
								<p>
									Акимат города <br />
									Астаны
								</p>
							</div>
						</div>
					</div>
					<div className='flex gap-[145px] mb-[58px]'>
						<div>
							<ul>
								<li className='flex gap-2.5 mb-2.5'>
									<Image
										src='/compass.svg'
										alt='Address'
										width={24}
										height={24}
									/>
									г. Астана, пр.Республики,32
								</li>
								<li className='flex gap-2.5 mb-2.5'>
									<Image src='/Phone1.svg' alt='Phone' width={24} height={24} />
									+7 (7172) 28-09-59
								</li>
								<li className='flex gap-2.5 mb-2.5'>
									<div className='flex bg-[#48C95F] rounded-[50%] w-[24px] h-[24px] p-[6px]'>
										<Image
											src='/whatsapp.svg'
											alt='WhatsApp'
											width={15}
											height={15}
										/>
									</div>
									+7 (7172) 28-09-59
								</li>
							</ul>
						</div>
						<div className='flex gap-2.5'>
							<div>
								<Image src='/Clock.svg' alt='Schedule' width={24} height={24} />
							</div>
							<div>
								<ul>
									<li className='mb-2.5'>
										График приема документов: Пн-Пт 08:30-17:00
									</li>
									<li className='mb-2.5'>Перерыв: 13:00-14:30</li>
									<li className='mb-2.5'>График работы: Пн-Пт 08:30-18:00</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='flex gap-2.5'>
						<div className='bg-custom-radial rounded-[50%] w-[32px] h-[32px] p-[8px]'>
							<Image
								src='/instagram.svg'
								alt='Instagram'
								width={16}
								height={16}
							/>
						</div>
						<div className='bg-[#0B84EE] rounded-[50%] w-[32px] h-[32px] pt-[6px] pl-[11px] pr-[11px] pb-[7px]'>
							<Image
								src='/facebook.svg'
								alt='Facebook'
								width={10}
								height={17}
							/>
						</div>
					</div>
				</div>
				<div>
					<Image src='/Rectangle 30.jpg' alt='Map' width={1200} height={312} />
				</div>
			</div>
		</div>
	)
}

export default Footer
