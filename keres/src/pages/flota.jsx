import React, { useState } from 'react'
import Header from '@/app/components/Header'
import { BeakerIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import styles from '../app/globals.css'

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
		<div className='min-h-screen w-screen relative'>
			{/* Header component */}
			<Header titleName={'nasza flota'} />
			<div className='flex flex-col items-center'>
				<div className='relative w-4/5 overflow-hidden '>
					<div className={'animation animation-layer1 '} />
					<div className={'animation animation-back animation-layer2 '} />
					<div className={'animation animation-back animation-layer3 '} />
					<div className={'animation animation-face animation-layer4 '} />
					<h2 className='text-center text-2xl capitalize font-black uppercase tracking-tighter text-green-dark drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,366)]'>
						{activeTruck.CarType}
					</h2>
					<div className='flex flex-col items-center border-2 border-black mt-8'>
						<p>Ładowność: {activeTruck.Capacity} T</p>
						<p>Ładowność palet: {activeTruck.PalletsCapacity}</p>
						<p>Wymiary: {activeTruck.Dimensions.join(' x ')} mm</p>
						<p>
							Sposób załadunku:{' '}
							{Array.isArray(activeTruck.LoadType)
								? activeTruck.LoadType.join(', ')
								: Object.keys(activeTruck.LoadType).join(', ')}
						</p>
						<p>Typ zabudowy: {activeTruck.ConstructionType}</p>
						<p>Dodatkowe informacje: {activeTruck.AdditionalInformations}</p>
					</div>
					<Swiper
						centeredSlides={true}
						loop={true}
						spaceBetween={50}
						modules={[Autoplay]}
						autoplay={{ delay: 4000 }}
						className='h-[300px] flex flex-col justify-center items-center'
						onSlideChange={swiper => handleSlideChange(swiper)}>
						{trucksTypes.map((truck, index) => (
							<SwiperSlide
								key={index} // Use a unique key for each slide
								className='text-black font-solid flex flex-col items-space justify-evenly justify-center overflow-hidden px-8'>
								{/* Truck image */}
								<div className='relative h-24'>
									<Image
										src={`/svg/trucks/${truck.ImageAlias}.svg`} // Provide correct src
										alt={truck.CarType}
										fill
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
