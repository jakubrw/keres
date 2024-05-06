import '../../app/globals.css'
import Navigation from './Navigation'
import Link from 'next/link'
import Image from 'next/image'

const Header = ({ titleName }) => {
	return (
		<header>
			<Navigation />
			<div className='flex flex-col items-center pt-2 '>
				<Link href='/'>
					<Image className='relative  z-0' src='/logo.svg' alt='keres logo' width={60} height={60} priority />
				</Link>
				<h2 className='m-2 text-5xl font-black uppercase tracking-tighter text-green-dark drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,366)] ' >
					{titleName}
				</h2>
			</div>
		</header>
	)
}

export default Header
