import '../../app/globals.css'
import Navigation from './Navigation'
import Link from 'next/link'
import Image from 'next/image'



const Header = ({ titleName, subtitleName, headerBgContent }) => {
	return (
		<>
			<header className='w-full '>
				<Navigation />
				<div className='flex flex-col items-center relative pt-2 md:pt-20  '>
					<Link href='/' className='md:hidden'>
						<Image
							className='relative z-0'
							src='/logo.svg'
							alt='keres logo'
							width={60}
							height={60}
							priority
						/>
					</Link>
					<h2 className='m-2 text-5xl font-black uppercase tracking-tighter text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,366)] text-transparent  bg-clip-text bg-gradient-to-b from-green-light to-green-dark  md:m-0'>
						{titleName}
					</h2>
					<h3 className={`text-center italic text-xl font-bold text-blue-dark mx-4 `}>{subtitleName}</h3>
					<div className='md:hidden'>{headerBgContent}</div>
				</div>
			</header>
		</>
	)
}

export default Header
