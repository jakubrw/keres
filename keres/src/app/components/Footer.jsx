import Image from 'next/image'
import LeafletDynamic from './LeafletDynamic'

const Footer = () => {
	return (
		<div className='py-2 bg-gray-200 flex flex-col items-center text-sm w-full h-[50vh] '>
			<div className='h-8'>
				<p className='text-lg font-bold uppercase font-mono'>Znajdź nas</p>
			</div>
			<div className=' flex flex-col items-center w-full h-[50vh] md:flex-row md:justify-center'>
				<div className='h-4/5 w-[90vw] rounded-xl overflow-hidden m-2 border border-gray-500 md:w-[80%]'>
					<LeafletDynamic />
				</div>
				<div className='flex gap-x-2 md:flex-col md:gap-y-8 '>
					<a
						href='tel:+48663561601'
						target='_blank'
						className='h-10 w-10 flex-none rounded-full fill-gray-600 focus:outline-none !ring-transparent text-gray-800 border border-gray-500 border-b-gray-400 border-b-4 hover:border active:border  hover:text-gray-900  0 focus-visible:outline-gray-600 focus-visible:ring-gray-700  relative duration-200'>
						<Image src='/icons/ico/contact.svg' fill alt='contact icon' className='p-1 contrast-[0.2]' />
					</a>
					<a
						href='https://www.facebook.com/TransportKeres/'
						target='_blank'
						className='h-10 w-10 flex-none rounded-full fill-gray-600 focus:outline-none !ring-transparent text-gray-800 border border-gray-500 border-b-gray-400 border-b-4 hover:border active:border  hover:text-gray-900  0 focus-visible:outline-gray-600 focus-visible:ring-gray-700  relative duration-200'>
						<Image src='/icons/ico/facebook.svg' fill alt='contact icon' className='p-1 contrast-[0.2]' />
					</a>
					<a
						href='https://maps.app.goo.gl/UXaQbKrKYR425f3K9'
						target='_blank'
						className='h-10 w-10 flex-none rounded-full fill-gray-600 focus:outline-none !ring-transparent text-gray-800 border border-gray-500 border-b-gray-400 border-b-4 hover:border active:border  hover:text-gray-900  0 focus-visible:outline-gray-600 focus-visible:ring-gray-700  relative duration-200'>
						<Image
							src='/icons/ico/google-maps.svg'
							fill
							alt='contact icon'
							className='p-1 contrast-[0.2]'
						/>
					</a>

					<a
						href='skype:SERFAIN.MAJCHRZAK'
						target='_blank'
						className='h-10 w-10 flex-none rounded-full fill-gray-600 focus:outline-none !ring-transparent text-gray-800 border border-gray-500 border-b-gray-400 border-b-4 hover:border active:border  hover:text-gray-900  0 focus-visible:outline-gray-600 focus-visible:ring-gray-700  relative duration-200'>
						<Image src='/icons/ico/skype.svg' fill alt='contact icon' className='p-1 contrast-[0.2]' />
					</a>
				</div>
			</div>
			<div className='pt-8'>
				<p className='text-center text-xs text-gray-500 '>© KERES.PL 2023 X JRW</p>
				<p></p>
			</div>
		</div>
	)
}

export default Footer
