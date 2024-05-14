'use client'

import React, { useEffect, useState } from 'react'
import TitlePage from './components/Titlepage'
import Navbar from './components/Navigation'
import { redirect } from 'next/navigation'
import {Roboto, Montserrat} from 'next/font/google'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })


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
		<main className={`min-h-screen ${roboto.className} `}>
			{windowWidth > 700 ? (
				redirect("/error")
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
