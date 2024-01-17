import '../../app/globals.css'
import Navigation from './Navigation'
import Link from 'next/link'
import Image from 'next/image'

const Header = ({ logoWidth, logoHeight, titleName }) => {
	return (
		<header>
			<Navigation />
			<div className='flex flex-col items-center pt-2 '>
				<Link href='/'>
					<Image
						className='relative  z-0'
						src='/logo.svg'
						alt='keres logo'
						width={logoWidth}
						height={logoHeight}
						priority
					/>
				</Link>
				<h2 className='text-4xl font-bold uppercase '>{titleName}</h2>
			</div>
		</header>
	)
}

export default Header
