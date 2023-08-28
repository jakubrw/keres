'use client'
import Image from 'next/image'
import Link from 'next/link'
import TitlePage from './components/Titlepage'

import Navbar from './components/Navigation'

export default function Home() {
	return (
		<main className='min-h-screen'>
			<Navbar />
			<div className='grid place-items-center h-screen'>
				<div>
					<Image className='relative' src='/keresik.svg' alt='keres logo' width={200} height={200} priority />
					<p className='text-center uppercase font-black text-6xl'>KERES</p>
				</div>
			</div>
		</main>
	)
}
