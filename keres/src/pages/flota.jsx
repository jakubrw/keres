import React, { useState } from 'react'
import Header from '@/app/components/Header'
import { BeakerIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] })

const FlotaBgContent = () => {
	return (
		<>
			<Image
				src='/graphics/flota-bg.svg'
				width={300}
				height={300}
				className='absolute z-[-5] top-0 right-1/2 translate-x-1/2 blur-[1px]'></Image>
			<Image
				src='/svg/car-left.svg'
				width={100}
				height={100}
				className='absolute z-[-10] top-0 right-0  blur-[2px]'></Image>
			<Image
				src='/svg/car-right.svg'
				width={100}
				height={100}
				className='absolute z-[-10] top-0 left-0  blur-[2px]'></Image>
		</>
	)
}

const trucksTypes = [
	{
		CarName: '',
		CarType: 'samochód ciężarowy',
		Capacity: 14.2,
		PalletsCapacity: 18,
		Dimensions: [730, 248, 295],
		LoadType: ['bok', 'tył', 'góra'],
		ConstructionType: '',
		AdditionalInformations: '',
		ImageAlias: 'tir',
	},
	{
		CarName: '',
		CarType: 'bus firanka',
		Capacity: 1.5,
		PalletsCapacity: 12,
		Dimensions: [490, 245, 285],
		LoadType: ['bok', 'tył', 'góra'],
		ConstructionType: 'firanka',
		AdditionalInformations: '',
		ImageAlias: 'firanka',
	},
	{
		CarName: '',
		CarType: 'bus firanka + winda',
		Capacity: 1.2,
		PalletsCapacity: 10,
		Dimensions: [420, 245, 250],
		LoadType: ['bok', 'tył'],
		ConstructionType: 'firanka',
		AdditionalInformations: 'Winda - udźwig 750kg',
		ImageAlias: 'firanka',
	},
	{
		CarName: '',
		CarType: 'blaszak',
		Capacity: 1.2,
		PalletsCapacity: 8,
		Dimensions: [460, 170, 210],
		LoadType: { 'drzwi bok': [120, 179], 'drzwi tył': [151, 195] },
		ConstructionType: 'blaszak',
		AdditionalInformations: '',
		ImageAlias: 'blaszak',
	},
	{
		CarName: '',
		CarType: 'blaszak',
		Capacity: 1,
		PalletsCapacity: 6,
		Dimensions: [437, 170, 190],
		LoadType: { 'drzwi bok': [120, 178], 'drzwi tył': [143, 177] },
		ConstructionType: 'blaszak',
		AdditionalInformations: '',
		ImageAlias: 'blaszak',
	},
	{
		CarName: '',
		CarType: 'furgon',
		Capacity: 0.5,
		PalletsCapacity: '',
		Dimensions: [140, 90, 130],
		LoadType: { 'drzwi tył': '' },
		ConstructionType: 'blaszak',
		AdditionalInformations: '',
		ImageAlias: 'furgon',
	},
	{
		CarName: '',
		CarType: 'blaszak',
		Capacity: 0.5,
		PalletsCapacity: 2,
		Dimensions: [300, 120, 128],
		LoadType: { 'drzwi tył': '' },
		ConstructionType: 'blaszak',
		AdditionalInformations: '',
		ImageAlias: 'blaszak',
	},
	{
		CarName: '',
		CarType: 'TIR',
		Capacity: 13.6,
		PalletsCapacity: 33,
		Dimensions: [1360, 245, 300],
		LoadType: ['bok', 'tył', 'góra'],
		ConstructionType: 'plandeka',
		AdditionalInformations: '',
		ImageAlias: 'tir',
	},
]

const Flota = () => {
	const [activeTruck, setActiveTruck] = useState(trucksTypes[0])

	const handleSlideChange = swiper => {
		const currentSlide = swiper.realIndex // Use realIndex instead of activeIndex
		setActiveTruck(trucksTypes[currentSlide])
	}

	return (
		<div className='min-h-screen w-screen relative '>
			<Header titleName={'nasza flota'} headerBgContent={<FlotaBgContent />} />
			<div className='flex flex-col items-center'>
				<h2
					className={` ${pacifico.className} text-center text-3xl capitalize font-black uppercase tracking-tighter text-green-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,366)] mb-5`}>
					{activeTruck.CarType}
				</h2>
				<div className='relative aspect-[2/3] w-4/5 overflow-hidden rounded-lg border border-black'>
					<div className='animation animation-face animation-layer4 blur-[2px] ' />
					<div className=' absolute flex flex-col items-center justify-evenly top w-full py-5 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-40 border-b border-gray-300 [&>p>:nth-child(1)]:font-bold'>
						{activeTruck.Capacity && (
							<p>
								<span>Ładowność:</span> <span>{activeTruck.Capacity} T</span>
							</p>
						)}
						{activeTruck.PalletsCapacity && (
							<p>
								<span>Ładowność palet:</span> <span>{activeTruck.PalletsCapacity}</span>
							</p>
						)}
						{activeTruck.Dimensions && activeTruck.Dimensions.length > 0 && (
							<p>
								<span>Wymiary:</span> <span>{activeTruck.Dimensions.join(' x ')} mm</span>
							</p>
						)}
						{activeTruck.LoadType &&
							(Array.isArray(activeTruck.LoadType)
								? activeTruck.LoadType.length > 0 && (
										<p>
											<span>Sposób załadunku:</span>{' '}
											<span>{activeTruck.LoadType.join(', ')}</span>
										</p>
								  )
								: Object.keys(activeTruck.LoadType).length > 0 && (
										<p>
											<span>Sposób załadunku:</span>{' '}
											<span>{Object.keys(activeTruck.LoadType).join(', ')}</span>
										</p>
								  ))}
						{activeTruck.ConstructionType && (
							<p>
								<span>Typ zabudowy:</span> <span>{activeTruck.ConstructionType}</span>
							</p>
						)}
						{activeTruck.AdditionalInformations && (
							<>
								<p>
									<span>Dodatkowe informacje:</span>
								</p>
								<p>{activeTruck.AdditionalInformations}</p>
							</>
						)}
					</div>
					<Swiper
						centeredSlides={true}
						loop={true}
						spaceBetween={50}
						modules={[Autoplay]}
						autoplay={{ delay: 4000 }}
						className='h-full overflow-hidden bottom'
						onSlideChange={swiper => handleSlideChange(swiper)}>
						{trucksTypes.map((truck, index) => (
							<SwiperSlide
								key={index}
								className='text-black font-solid flex flex-col items-space justify-evenly justify-center'>
								<div className='h-1/3 '>
									<Image
										src={`/svg/trucks/${truck.ImageAlias}.svg`}
										alt={truck.CarType}
										height={200}
										width={200}
										className='absolute bottom-[40px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 '
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default Flota
