import React, { useState } from 'react'
import Header from '@/app/components/Header'
import { BeakerIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

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
	return (
		<div className='min-h-screen w-screen relative'>
			<Header titleName={'nasza flota'} />
			<div className='flex flex-col items-center'>
				<div className='relative w-4/5 '>
					<Swiper
						centeredSlides={true}
						loop={true}
						spaceBetween={50}
						modules={[Autoplay]}
						autoplay={{ delay: 4000 }}
						className='h-[300px] flex flex-col justify-center items-center'>
						{trucksTypes.map(x => {
							return (
								<SwiperSlide
									key={x.CarType}
									className='text-black font-solid flex flex-col items-space justify-evenly justify-center overflow-hidden px-8'>
									<div className='relative h-24'>
										<Image></Image>
										<Image src={`./svg/trucks/${x.ImageAlias}.svg`} alt={x.CarType} fill={true} />
									</div>
									<h2 className='text-2xl capitalize font-bold text-center'>{x.CarType}</h2>

									<div className='flex flex-col items-center border-2 border-black'>
										<p>{x.Capacity}</p>
										<p>{x.PalletsCapacity}</p>
										<p>{x.Dimensions}</p>
										<p>
											{x.LoadType[0]} {x.LoadType[1]} {x.LoadType[2]}
										</p>
										<p>{x.ConstructionType}</p>
									</div>
								</SwiperSlide>
							)
						})}
					</Swiper>
					{trucksTypes.map(x => {
						return (
							<>
								<Swiper>
									<SwiperSlide
										key={x.CarType}
										className='text-black font-solid flex flex-col items-space justify-evenly justify-center overflow-hidden px-8'>
										<div className='relative h-24'>
											<Image></Image>
											<Image
												src={`./svg/trucks/${x.ImageAlias}.svg`}
												alt={x.CarType}
												fill={true}
											/>
										</div>
										<h2 className='text-2xl capitalize font-bold text-center'>{x.CarType}</h2>
									</SwiperSlide>
								</Swiper>

								<div className='flex flex-col items-center border border-black'>
									<p>{x.Capacity}</p>
									<p>{x.PalletsCapacity}</p>
									<p>{x.Dimensions}</p>
									<p>
										{x.LoadType[0]} {x.LoadType[1]} {x.LoadType[2]}
									</p>
									<p>{x.ConstructionType}</p>
								</div>
							</>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Flota
