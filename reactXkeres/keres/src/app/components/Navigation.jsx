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
				<nav className='fixed top-0 left-0 h-4/6 w-full bg-yellow-300 '>
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
					<div className='grid justify-items-center m-0'>
						<div>
							<Link href='/'>
								<Image
									className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert m-5'
									src='/image2vector.svg'
									alt='keres logo'
									width={80}
									height={80}
									priority
								/>
							</Link>
						</div>
						<div>
							<ul className='text-2xl font-bold text-center uppercase'>
								<li>
									<Link href={`/oferta`}>Oferta</Link>
								</li>
								<li>
									<Link href={`/about`}>O nas</Link>
								</li>
								<li>Lorem</li>
								<li>ipsum</li>
								<li>dolor</li>
							</ul>
						</div>
					</div>
				</nav>
			)}
		</nav>
	)
}

export default Navbar
