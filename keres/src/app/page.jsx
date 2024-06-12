'use client'

import React, { useEffect, useState } from 'react'
import TitlePage from './components/Titlepage'
import Navbar from './components/Navigation'
import { redirect } from 'next/navigation'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

const Home = () => {
	return (
		<main className={`min-h-screen ${roboto.className} w-screen md:w-full`}>
			<>
				<Navbar className='z-[150]' />
				<TitlePage />
			</>
		</main>
	)
}

export default Home
