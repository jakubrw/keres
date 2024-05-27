'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, PaperAirplaneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import ContactForm from './Forms/ContactForm'

const Navbar = () => {
	async function onSubmit(event) {
		event.preventDefault()
		const formData = new FormData(event.target)
		const response = await fetch('/api/submit', {
			method: 'POST',
			body: formData,
		})
	}
	const LeftNavButton = ' left-0  rounded-tr-full'
	const RightNavButton = ' right-0  rounded-tl-full'
	const NavButton = 'absolute bottom-0 h-16 w-16'

	const [navStatus, setNavStatus] = useState(null)
	const [navOpen, setNavOpen] = useState(0)

	const handleNavClick = (isOn, contentType) => {
		setNavOpen(isOn)
		setNavStatus(contentType)
	}

	const NavContainer = (
		<div className='max-h-screen w-screen p-5 bg-yellow-light absolute z-[200] bottom-0 '>
			{navStatus == 'menu' ? (
				<div className=''>
					<div
						onClick={() => {
							handleNavClick(0, null)
						}}
						className=' flex flex-col justify-center items-center uppercase text-4xl gap-8 bold mb-20 '>
						<Link href='/'>home</Link>
						<Link href='/oferta'>oferta</Link>
						<Link href='/flota'>flota</Link>
						<Link href='/contact'>kontakt</Link>
					</div>
					<div className='h-full w-full flex items-center justify-center'>
						<div
							className='relative h-16 w-16 rounded-full bg-red-400'
							onClick={() => {
								handleNavClick(0, null)
							}}>
							<XMarkIcon className='h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' />
						</div>
					</div>
				</div>
			) : (
				''
			)}
			{navStatus == 'form' ? (
				<form onSubmit={onSubmit} className='min-h-[60vh] grid auto-rows-max'>
					<ContactForm />
					<div className='self-end flex items-center justify-evenly'>
						<button
							className='relative h-16 w-16 rounded-full bg-red-400'
							onClick={() => {
								handleNavClick(0, null)
							}}>
							<XMarkIcon className='h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' />
						</button>
						<button type='submit' className='relative h-16 w-16 rounded-full bg-green-dark '>
							<PaperAirplaneIcon className='h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' />
						</button>
					</div>
				</form>
			) : (
				''
			)}
		</div>
	)

	return (
		<nav id='nav' className='navbar fixed bottom-0 w-full z-[150] '>
			{navOpen == 1 ? NavContainer : ''}
			<div className='menu-icon flex justify-between h-[20px] '>
				<div
					className={`${NavButton + LeftNavButton} bg-yellow-light  `}
					onClick={() => {
						handleNavClick(1, 'menu')
					}}>
					<Bars3Icon className='h-10 absolute bottom-0 left-0 m-1' />
				</div>

				<div
					className={`${NavButton + RightNavButton} bg-green-light `}
					onClick={() => {
						handleNavClick(1, 'form')
					}}>
					<PaperAirplaneIcon className='h-10 absolute bottom-0 right-0 m-1' />
				</div>
			</div>
		</nav>
	)
}

export default Navbar

// {isOpenForm && (
// 	<div className='fixed bottom-0 h-5/6 w-full z-3'>
// 		<nav className='fixed pt-5 0 mt-[100px] ml-[-50%] w-[200%] rounded-t-[100%] bg-gray-400 h-5/6'>
// 			<div className='flex flex-col items-center justify-between gap-y-2 m-0 h-auto'>
// 				<div className='uppercase font-black text-2xl pt-5'>Napisz do nas!</div>
// 				<div className=''>
// 					<ContactForm />
// 				</div>

// 				<div className='relative h-16 w-screen'>
// 					<div
// 						className='absolute bottom-0 left-0 h-16 w-16 bg-red-500 rounded-tr-full'
// 						onClick={}>

// 					</div>
// 					<div className='absolute bottom-0 right-0 h-16 w-16 bg-lime-500 rounded-tl-full'>

// 					</div>
// 				</div>
// 			</div>
// 		</nav>
// 	</div>
// )}
