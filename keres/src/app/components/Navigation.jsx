'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bars3Icon, PaperAirplaneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import ContactForm from './Forms/ContactForm'

const Navbar = () => {
	const [navStatus, setNavStatus] = useState(null)
	const [navOpen, setNavOpen] = useState(false)

	async function onSubmit(event) {
		event.preventDefault()
		const formData = new FormData(event.target)
		await fetch('/api/submit', {
			method: 'POST',
			body: formData,
		})
		handleNavClick(false, null)
	}

	const handleNavClick = (isOpen, contentType) => {
		setNavOpen(isOpen)
		setNavStatus(contentType)
	}

	const NavButton = 'absolute bottom-0 h-16 w-16'
	const LeftNavButton = `${NavButton} left-0 rounded-tr-full`
	const RightNavButton = `${NavButton} right-0 rounded-tl-full`

	const NavContainer = (
		<>
			{navStatus === 'menu' && (
				<div className='max-h-screen w-screen p-5 bg-yellow-light absolute z-[200] bottom-0 md:hidden'>
					<div
						onClick={() => handleNavClick(false, null)}
						className='flex flex-col justify-center items-center uppercase text-4xl gap-8 bold mb-20'>
						<Link href='/' className='focus:outline-none focus:ring-2 focus:ring-yellow-600'>
							home
						</Link>
						<Link href='/oferta' className='focus:outline-none focus:ring-2 focus:ring-yellow-600'>
							oferta
						</Link>
						<Link href='/flota' className='focus:outline-none focus:ring-2 focus:ring-yellow-600'>
							flota
						</Link>
						<Link href='/contact' className='focus:outline-none focus:ring-2 focus:ring-yellow-600'>
							kontakt
						</Link>
					</div>
					<div className='h-full w-full flex items-center justify-center'>
						<button
							className='relative h-16 w-16 rounded-full bg-red-400'
							onClick={() => handleNavClick(false, null)}
							aria-label='Close Menu'>
							<XMarkIcon className='h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
						</button>
					</div>
				</div>
			)}
			{navStatus === 'form' && (
				<div className='fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-50'>
					<div className='bg-yellow-light p-5 rounded-lg w-full max-w-md mx-auto'>
						<form onSubmit={onSubmit} className='flex flex-col'>
							<ContactForm />
							<div className='self-end flex items-center justify-evenly mt-4 w-full'>
								<button
									className='relative h-16 w-16 rounded-full bg-red-400'
									onClick={() => handleNavClick(false, null)}
									aria-label='Close Form'>
									<XMarkIcon className='h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
								</button>
								<button
									type='submit'
									className='relative h-16 w-16 rounded-full bg-green-dark'
									aria-label='Submit Form'>
									<PaperAirplaneIcon className='h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	)

	return (
		<>
			{/* Mobile Navigation */}
			<nav id='nav' className='navbar fixed bottom-0 w-full z-[150] md:hidden'>
				{navOpen && NavContainer}
				<div className='menu-icon flex justify-between h-[20px]'>
					<button
						className={`${LeftNavButton} bg-yellow-light`}
						onClick={() => handleNavClick(true, 'menu')}
						aria-label='Open Menu'>
						<Bars3Icon className='h-10 absolute bottom-0 left-0 m-1' />
					</button>
					<button
						className={`${RightNavButton} bg-green-light`}
						onClick={() => handleNavClick(true, 'form')}
						aria-label='Open Form'>
						<PaperAirplaneIcon className='h-10 absolute bottom-0 right-0 m-1' />
					</button>
				</div>
			</nav>

			{/* Desktop Navigation */}
			<>
				{navOpen && NavContainer}
				<nav
					id='nav'
					className='hidden md:flex fixed w-full justify-between items-center bg-yellow-light p-2 z-[150] '>
					<div className='flex space-x-10  text-center px-2'>
						<Link href='/' className='text-2xl p-0'>
							<Image src={'/keres.svg'} height={50} width={50} alt='company logo' />
						</Link>
						<Link href='/oferta' className='text-2xl uppercase p-2'>
							Oferta
						</Link>
						<Link href='/flota' className='text-2xl uppercase p-2'>
							Flota
						</Link>
						<Link href='/contact' className='text-2xl uppercase p-2'>
							Kontakt
						</Link>
					</div>
					<button
						className='flex items-center space-x-2 bg-green-dark text-white py-2 px-4 rounded-full'
						onClick={() => handleNavClick(true, 'form')}
						aria-label='Open Form'>
						<PaperAirplaneIcon className='h-5 w-5' />
						<span>Napisz do nas</span>
					</button>
				</nav>
			</>
		</>
	)
}

export default Navbar
