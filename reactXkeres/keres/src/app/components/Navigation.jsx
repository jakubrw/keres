'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleMenuClick = () => {
		setIsOpen(!isOpen)
	}

	return (
		<nav className='navbar fixed top-0 bg-gradient-to-b from-slate-200 w-full z-20'>
			<div className={`menu-icon  m-2 ${isOpen ? 'open' : ''}`} onClick={handleMenuClick}>
				<Image
					className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
					src='/hamburger.svg'
					alt='menu image'
					width={30}
					height={30}
					priority
				/>
			</div>
			{isOpen && (
				<div className='fixed top-0 left-0 h-auto w-full bg-yellow-300 '>
					<div className='flex flex-row justify-between'>
						<Image
							className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert m-2'
							src='/x.svg'
							alt='exit image'
							width={30}
							height={30}
							priority
							onClick={handleMenuClick}
						/>
					</div>
					<nav className='grid justify-items-center m-0' onClick={handleMenuClick}>
						<div>
							<Link href='/'>
								<Image
									className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert m-5'
									src='/keresik.svg'
									alt='keres logo'
									width={80}
									height={80}
									priority
									onClick={handleMenuClick}
								/>
							</Link>
						</div>
						<div className='my-1 px-10 py-12 border-2 border-amber-900 rounded '>
							<ul className='space-y-2 text-2xl font-bold text-center uppercase'>
								<li className='hover:bg-white w-60 h-16 py-4 border-b-2 border-amber-900'>
									<Link href={`/`} onClick={handleMenuClick}>
										Home
									</Link>
								</li>
								<li className='hover:bg-white w-60 h-16 py-4 border-b-2 border-amber-900'>
									<Link href={`/about`} onClick={handleMenuClick}>
										O nas
									</Link>
								</li>
								<li className='hover:bg-white w-60 h-16 py-4 border-b-2 border-amber-900'>
									<Link href={`/oferta`} onClick={handleMenuClick}>
										Oferta
									</Link>
								</li>
								<li className='hover:bg-white w-60 h-16 py-4'>
									<Link href={`/oferta`} onClick={handleMenuClick}>
										Kontakt
									</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			)}
		</nav>
	)
}

export default Navbar
