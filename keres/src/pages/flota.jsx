import React, { useState } from 'react'
import Header from '@/app/components/Header'
import { BeakerIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

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
	const renderDimensions = dimensions => {
		return dimensions.join(' x ')
	}

	const renderLoadType = loadType => {
		if (Array.isArray(loadType)) {
			return loadType.join(', ')
		} else if (typeof loadType === 'object') {
			return Object.entries(loadType)
				.map(([key, value]) => {
					if (Array.isArray(value)) {
						return `${key}: ${value.join(' x ')}`
					} else {
						return `${key}: ${value}`
					}
				})
				.join(', ')
		}
		return ''
	}

	const renderCarName = carName => {
		if (typeof carName === 'object' && carName.hasOwnProperty('pl')) {
			return carName.pl
		}
		return carName
	}

	const [expandedRows, setExpandedRows] = useState([])

	const handleToggleRow = index => {
		const newExpandedRows = [...expandedRows]
		if (newExpandedRows.includes(index)) {
			newExpandedRows.splice(newExpandedRows.indexOf(index), 1)
		} else {
			newExpandedRows.push(index)
		}
		setExpandedRows(newExpandedRows)
	}

	return (
		<div>
			<Header titleName={'nasza flota'} />
			<h2></h2>
			<div>
				<div>
					{trucksTypes.map((truck, index) => (
						<React.Fragment key={index}>
							<div className=''>
								<div>
									<div className='flex justify-between' onClick={() => handleToggleRow(index)}>
										<div className='text-lg capitalize shadow-inner	'>{truck.CarType}</div>
										{expandedRows.includes(index) ? (
											<ChevronUpIcon className='h-6 w-6 text-blue-500' />
										) : (
											<ChevronDownIcon className='h-6 w-6 text-blue-500' />
										)}
									</div>
									{expandedRows.includes(index) && (
										<div className='flex flex-col items-center'>
											<div className='h-40 w-full relative'>
												<Image
													src={`./svg/trucks/${truck.ImageAlias}.svg`}
													alt={truck.CarType}
													fill={true}
												/>
											</div>
											<div className='flex my-2 mx-10 gap-2'>
												<div className='flex flex-col w-1/2'>
													<div>
														<p>Ładowność</p>
													</div>
													<div>
														<p>Ilość europalet</p>
													</div>
													<div>
														<p>Wymiary ładowności</p>
													</div>
													<div>
														<p>Sposob załadunku</p>
													</div>
													<div></div>
												</div>
												<div className='flex flex-col w-1/2'>
													<div>{renderCarName(truck.CarName)}</div>
													<div>{truck.Capacity}T</div>
													<div>{truck.PalletsCapacity}</div>
													<div>{truck.Dimensions.map(x => x + 'cm ')}</div>
													<div>{renderLoadType(truck.LoadType)}</div>
												</div>
											</div>
										</div>
									)}
								</div>
							</div>
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	)
}

export default Flota
