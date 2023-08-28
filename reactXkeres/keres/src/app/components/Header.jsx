import '../../app/globals.css'
import Navigation from './Navigation'
import Link from 'next/link'
import Image from 'next/image'

const Header = ({ logoWidth, logoHeight }) => {
	return (
		<header>
			<Navigation />
			<div className='flex flex-col items-center pt-2 pb-2'>
				<Link href='/'>
					<Image
						className='relative  z-0'
						src='/keresik.svg'
						alt='keres logo'
						width={logoWidth}
						height={logoHeight}
						priority
					/>
				</Link>
			</div>
		</header>
	)
}

export default Header
