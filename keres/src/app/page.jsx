'use client'

import React from 'react'
import TitlePage from './components/Titlepage'
import Navbar from './components/Navigation'

const Home = () => {
	return (
		<main className='min-h-screen w-screen md:w-full'>
			<>
				<Navbar className='z-[150]' />
				<TitlePage />
			</>
		</main>
	)
}

export default Home
