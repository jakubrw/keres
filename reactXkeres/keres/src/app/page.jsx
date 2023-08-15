import Image from 'next/image'
import Navigation from './components/Navigation'
import Link from 'next/link'
import TitlePage from './components/titlepage'

export default function Home() {
	return (
		<main className='min-h-screen'>
			<Navigation />
			<TitlePage />
		</main>
	)
}
