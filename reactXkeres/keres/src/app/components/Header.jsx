import '../../app/globals.css'
import Navigation from './Navigation'
import Link from 'next/link'
import Image from 'next/image'

const Header = ({ logoWidth, logoHeight }) => {
	return (
		<header>
			<Navigation />
			<icon className='flex flex-col items-center pt-10 pb-2'>
				<Link href='/'>
					<Image
						className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert z-0'
						src='/keresik.svg'
						alt='keres logo'
						width={logoWidth}
						height={logoHeight}
						priority
					/>
				</Link>
			</icon>
		</header>
	)
}

export default Header
