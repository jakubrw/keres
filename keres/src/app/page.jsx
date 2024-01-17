'use client'

import React, { useEffect, useState } from 'react'
import TitlePage from './components/Titlepage'
import Navbar from './components/Navigation'

const Home = () => {
	const [windowWidth, setWindowWidth] = useState(0)

	useEffect(() => {
		const setupBeforeRender = () => {
			console.log('Operacje przed renderem')
		}

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
		<main className='h-screen'>
			{windowWidth > 700 ? (
				<p>otwórz na urządzeniu mobilnym</p>
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
