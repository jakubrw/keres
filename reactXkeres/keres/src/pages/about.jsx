import '../app/globals.css'
import Navigation from '../app/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'

const Oferta = () => {
	return (
		<card>
			<Navigation />
			<div className='flex min-h-screen flex-col items-center  p-24'>
				<Link href='/'>
					<Image
						className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
						src='/logo.png'
						alt='keres logo'
						width={120}
						height={120}
						priority
					/>
					
				</Link>
				O nas
			</div>
		</card>
	)
}

export default Oferta
