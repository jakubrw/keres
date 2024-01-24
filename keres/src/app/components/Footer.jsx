import LeafletDynamic from './LeafletDynamic'
import { MapPinIcon, AtSymbolIcon } from '@heroicons/react/24/outline'
const Footer = () => {
	return (
		<div className='py-2 bg-gray-200 flex flex-col items-center text-sm w-full'>
			<div className='h-8'>
				<p className='text-lg font-bold uppercase font-mono'>Znajdź nas</p>
			</div>
			<div className='grid grid-cols-6 grid-rows-3'>
				<MapPinIcon className='h-4 w-4 col-span-1' />
				<div className='col-span-5'>
					<p>Gdańsk</p>
					<p>Grunwaldzka 219/9</p>
				</div>
				<AtSymbolIcon className='h-4 w-4 col-span-1' />
				<p className='col-span-5'>keres@keres.pl</p>
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
