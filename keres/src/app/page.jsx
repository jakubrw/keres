'use client'

import React, { useEffect, useState } from 'react'
import TitlePage from './components/Titlepage'
import Navbar from './components/Navigation'
import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

const Home = () => {
	const [windowWidth, setWindowWidth] = useState(0)

	useEffect(() => {
		const setupBeforeRender = () => {}

		setupBeforeRender()
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		handleResize()
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<main className='min-h-screen'>
			{windowWidth > 700 ? (
				<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
					<div className='flex flex-col items-center'>
						<DevicePhoneMobileIcon height={120} width={120} strokeWidth={1} strokeOpacity={0.2} />
						<p className='text-2xl'>otwórz na urządzeniu </p>
						<p className='text-2xl'>mobilnym </p>
						<p className='text font-light'>(website in progress)</p>
						
					</div>
				</div>
			) : (
				<>
					<Navbar />
					<TitlePage />
				</>
			)}
		</main>
	)
}

export default Home
