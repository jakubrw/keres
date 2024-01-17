'use client'

import React from 'react'

import TitlePage from './components/Titlepage'

import Navbar from './components/Navigation'

export default function Home() {
	return (
		<main className='h-screen'>
			<Navbar />
			<TitlePage />
		</main>
	)
}
