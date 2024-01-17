'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

import ContactForm from '@/app/components/ContactForm'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isOpenForm, setIsOpenForm] = useState(false)
	const [isOpenOffert, setIsOpenOffert] = useState(false)

	const handleMenuClick = () => {
		setIsOpen(!isOpen)
		
	}

	const handleFormClick = () => {
		setIsOpenForm(!isOpenForm)
	}

	const handleOffertClick = () => {
		setIsOpenOffert(!isOpenOffert)
	}

	return (
		<nav id='nav' className='navbar fixed bottom-0 w-full z-20 '>
			<div className='menu-icon flex justify-between h-20 '>
				<div
					className={`absolute bottom-0  h-16 w-16  bg-yellow-300 rounded-tr-full ${isOpen ? 'open' : ''}`}
					onClick={handleMenuClick}>
					<Image
						className='absolute bottom-0 left-0 m-3'
						src='/icons/menu-burger.svg'
						alt='menu image'
						width={25}
						height={25}
						priority
					/>
				</div>
				<div></div>
				<div
					className={`absolute bottom-0 right-0 h-16 w-16 bg-lime-500 rounded-tl-full ${
						isOpenForm ? 'open' : ''
					}`}
					onClick={handleFormClick}>
					<Image
						className='absolute bottom-0 right-0 m-3'
						src='/icons/attribution-pencil.svg'
						alt='menu image'
						width={25}
						height={25}
						priority
					/>
				</div>
			</div>
			{isOpen && (
				<div className='absolute z-3 bottom-0  bg-yellow-300  w-full'>
					<div className='flex flex-row justify-between'></div>
					<nav className='grid grid-rows-6 h-full justify-items-center m-0'>
						<div className='row-span-1 row-end-1'>
							<Link href='/'>
								<Image
									className='relative  m-5'
									src='/keresik.svg'
									alt='keres logo'
									width={80}
									height={80}
									priority
									onClick={handleMenuClick}
								/>
							</Link>
						</div>
						<div className='my-1 px-10 py-1 row-span-4'>
							<ul className='space-y-1 text-2xl font-bold text-center uppercase '>
								<li className='w-60 h-16 py-4 '>
									<Link href={`/team`} onClick={handleMenuClick}>
										zespół
									</Link>
								</li>
								<li className='w-60 h-10 py-4 flex flex-col items-center'>
									<Link href={`/oferta`}>Oferta</Link>
								</li>
								{isOpenOffert && (
									<li className='w-60 h-50 py-4 flex flex-col text-lg'>
										<Link href={`/oferta/transport`}>Transport</Link>

										<Link href={`/oferta/spedycja`}>Spedycja</Link>

										<Link href={`/oferta/odprawy`}>Odprawy celne</Link>

										<Link href={`/oferta/ubezpieczenia`}>Ubezpieczenia Cargo</Link>

										<Link href={`/oferta/doradztwo`}>Doradztwo</Link>
									</li>
								)}
								<li className='flex justify-center items-center'>
									<Image
										onClick={handleOffertClick}
										className='relative z-0 '
										src='/chevron-double-down.svg'
										alt='keres logo'
										width='30'
										height='30'
									/>
								</li>
								<li className='w-60 h-16 py-4'>
									<Link href={`/flota`} onClick={handleMenuClick}>
										flota
									</Link>
								</li>
								<li className='w-60 h-16 py-4'>
									<Link href={`/files`} onClick={handleMenuClick}>
										Pliki
									</Link>
								</li>
								<li className='w-60 h-16 py-4'>
									<Link href={`/contact`} onClick={handleMenuClick}>
										Kontakt
									</Link>
								</li>
							</ul>
						</div>
						<div className='row-span-1 row-start-6'>
							<Image
								className='relative m-2 '
								src='/x.svg'
								alt='exit image'
								width={30}
								height={30}
								priority
								onClick={handleMenuClick}
							/>
						</div>
					</nav>
				</div>
			)}
			{isOpenForm && (
				<div className='fixed bottom-0 h-5/6 w-full z-3'>
					<nav className='fixed pt-5 bottom-0 mt-[100px] ml-[-50%] w-[200%] rounded-t-[100%] bg-lime-400 h-5/6'>
						<div className='flex flex-col items-center justify-between gap-y-2 m-0 h-full'>
							<div className='uppercase font-black text-2xl pt-5'>Napisz do nas!</div>

							<div className='flex flex-col '>
								<div className='flex justify-between h-3/4 w-screen'>
									<div
										className='relative h-16 w-16 bg-red-500 rounded-tr-full'
										onClick={handleFormClick}>
										<Image
											className='absolute bottom-0 left-0 m-3'
											src='/icons/cross.svg'
											alt='exit image'
											width={27}
											height={27}
											priority
										/>
									</div>
									<div className='relative h-16 w-16 bg-lime-500 rounded-tl-full'>
										<Image
											className='absolute bottom-0 right-0 m-3'
											src='/icons/paper-plane.svg'
											alt='exit image'
											width={30}
											height={30}
											priority
										/>
									</div>
								</div>
							</div>
						</div>
					</nav>
				</div>
			)}
		</nav>
	)
}

export default Navbar