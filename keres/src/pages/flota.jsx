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
		CarName: 'Maja',
		Capacity: 14.2,
		PalletsCapacity: 18,
		Dimensions: [730, 248, 295],
		LoadType: ['bok', 'tył', 'góra'],
		ConstructionType: '',
		AdditionalInformations: '',
		ImageAlias: 'maja',
	},
	{
		CarName: 'zestaw Maja',
		Capacity: 1.5,
		PalletsCapacity: 12,
		Dimensions: [490, 245, 285],
		LoadType: ['bok', 'tył', 'góra'],
		ConstructionType: 'firanka',
		AdditionalInformations: '',
		ImageAlias: 'zestaw-maja',
	},
	{
		CarName: 'Gośka',
		Capacity: 1.2,
		PalletsCapacity: 10,
		Dimensions: [420, 245, 250],
		LoadType: ['bok', 'tył'],
		ConstructionType: 'firanka',
		AdditionalInformations: 'Winda - udźwig 750kg',
		ImageAlias: 'goska',
	},
	{
		CarName: 'Iwonka',
		Capacity: 1.2,
		PalletsCapacity: 8,
		Dimensions: [460, 170, 210],
		LoadType: { 'drzwi bok': [120, 179], 'drzwi tył': [151, 195] },
		ConstructionType: 'blaszak',
		AdditionalInformations: '',
		ImageAlias: 'iwonka',
	},
	{
		CarName: 'Szaraczek',
		Capacity: 1,
		PalletsCapacity: 6,
		Dimensions: [437, 170, 190],
		LoadType: { 'drzwi bok': [120, 178], 'drzwi tył': [143, 177] },
		ConstructionType: 'blaszak',
		AdditionalInformations: '',
		ImageAlias: 'szarak',
	},
	{
		CarName: 'Szprota',
		Capacity: 0.5,
		PalletsCapacity: '',
		Dimensions: [140, 90, 130],
		LoadType: { 'drzwi tył': '' },
		ConstructionType: 'blaszak',
		AdditionalInformations: '',
		ImageAlias: 'szprota',
	},
	{
		CarName: 'Caddy',
		Capacity: 0.5,
		PalletsCapacity: 2,
		Dimensions: [300, 120, 128],
		LoadType: { 'drzwi tył': '' },
		ConstructionType: 'blaszak',
		AdditionalInformations: '',
		ImageAlias: 'caddy',
	},
	{
		CarName: 'Zośka',
		Capacity: 13.6,
		PalletsCapacity: 33,
		Dimensions: [1360, 245, 300],
		LoadType: ['bok', 'tył', 'góra'],
		ConstructionType: 'plandeka',
		AdditionalInformations: '',
		ImageAlias: 'zoska',
	},
	{
		CarName: 'Gośka + Lora',
		Capacity: 0.5,
		PalletsCapacity: '',
		Dimensions: [140, 90, 130],
		LoadType: ['drzwi tył'],
		TrailerCapacity: 2.4,
		TrailerDimensions: [800, 225, 60],
		ConstructionType: 'blaszak',
		AdditionalInformations: '',
		ImageAlias: 'lora-goska',
	},
	{
		CarName: 'Szarak + Lora',
		Capacity: 1,
		PalletsCapacity: 12,
		Dimensions: [460, 170, 210],
		ConstructionType: 'blaszak',
		LoadType: ['drzwi tył'],
		TrailerCapacity: 2.4,
		TrailerDimensions: [800, 225, 60],
		AdditionalInformations: '',
		ImageAlias: 'lora-szarak',
	},
	{
		CarName: 'Gośka + Plandeka',
		Capacity: 1,
		PalletsCapacity: 12,
		Dimensions: [490, 245, 265],
		ConstructionType: 'blaszak',
		LoadType: ['drzwi tył'],
		TrailerCapacity: 2.4,
		TrailerPalletsCapacity: 10,
		TrailerDimensions: [520, 220, 250],
		TrailerLoadType: ['drzwi tył'],
		TrailerConstructionType: 'plandeka',
		AdditionalInformations: '',
		ImageAlias: 'lora-goska',
	},
	{
		CarName: 'Szarak + Plandeka',
		Capacity: 1,
		PalletsCapacity: 8,
		Dimensions: [460, 270, 210],
		ConstructionType: 'blaszak',
		LoadType: ['drzwi tył'],
		TrailerCapacity: 2.4,
		TrailerPalletsCapacity: 10,
		TrailerDimensions: [520, 220, 250],
		TrailerLoadType: ['drzwi tył'],
		TrailerConstructionType: 'plandeka',
		AdditionalInformations: '',
		ImageAlias: 'zestaw-szarak',
	},
	{
		CarName: 'Bogusia',
		Capacity: 24,
		PalletsCapacity: 33,
		Dimensions: [1360, 245, 300],
		LoadType: ['bok', 'tył', 'góra'],
		ConstructionType: 'blaszak',
		AdditionalInformations: '',
		ImageAlias: 'bogusia',
	},
]

const Flota = () => {
	const [activeTruck, setActiveTruck] = useState(trucksTypes[0])

	const handleSlideChange = swiper => {
		const currentSlide = swiper.realIndex // Use realIndex instead of activeIndex
		setActiveTruck(trucksTypes[currentSlide])
	}

	return (
		<div className='h-screen w-screen relative '>
			<Header titleName={'nasza flota'} headerBgContent={<FlotaBgContent />} />
			<div className='flex flex-col items-center backdrop-filter backdrop-blur-xs mt-8'>
				<h2
					className={` ${pacifico.className} text-center text-3xl capitalize font-bolder uppercase tracking-tighter text-blue-light  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,366)] my-5`}>
					{activeTruck.CarName}
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
								<span>Wymiary:</span> <span>{activeTruck.Dimensions.join(' x ')} cm</span>
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
						{activeTruck.TrailerCapacity && (
							<>
								<p>
									<span>Ładowność przyczepy: </span>
									{activeTruck.TrailerCapacity} T
								</p>
							</>
						)}
						{activeTruck.TrailerPalletsCapacity && (
							<>
								<p>
									<span>Ładowność palet: </span>
									{activeTruck.TrailerPalletsCapacity}
								</p>
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
										height={500}
										width={750}
										className='absolute bottom-[0px] left-1/2 transform -translate-x-1/2  '
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
