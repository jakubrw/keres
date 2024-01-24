import LeafletDynamic from './LeafletDynamic'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

const Footer = () => {
	return (
		<div className='py-2 bg-gray-200 flex flex-col items-center text-sm w-full'>
			<div className='h-8'>
				<p className='text-lg font-bold uppercase font-mono'>Znajdź nas</p>
			</div>
			<div className='flex gap-10'>
				<div className='border-2 border-black rounded-full h-auto w-auto'>
					<GlobeAltIcon height={50} width={50}></GlobeAltIcon>
				</div>
				<div className='border-2 border-black rounded-full h-auto w-auto'>
					<GlobeAltIcon height={50} width={50}></GlobeAltIcon>
				</div>
				<div className='border-2 border-black rounded-full h-auto w-auto'>
					<GlobeAltIcon height={50} width={50}></GlobeAltIcon>
				</div>
				<div className='border-2 border-black rounded-full h-auto w-auto'>
					<GlobeAltIcon height={50} width={50}></GlobeAltIcon>
				</div>
				<div className='border-2 border-black rounded-full h-auto w-auto'>
					<GlobeAltIcon height={50} width={50}></GlobeAltIcon>
				</div>
			</div>
			<div className='p-2 w-full rounded-xl overflow-hidden'>
				<LeafletDynamic />
			</div>
			<div className='h-[45px]'>
				<p className='text-center text-xs text-gray-500'>© KERES.PL 2023 X JRW</p>
			</div>
		</div>
	)
}

export default Footer
