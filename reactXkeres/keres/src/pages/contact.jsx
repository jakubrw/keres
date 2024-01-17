import Header from '@/app/components/Header'
import LeafletDynamic from '@/app/components/LeafletDynamic'
import { MapPinIcon, AtSymbolIcon, HomeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'

const Contact = () => {
	return (
		<div>
			<div className='h-screen'>
				<Header logoWidth={30} logoHeight={30} titleName={'Kontakt'} />
				<img src='svg/contact.svg' alt='' className='px-10 my-2' />

				<div>
					<div className='flex flex-col items-center gap-0.2 text-center '>
						<h3 className='font-bold my-2'> Keres Serafin Majchrzak</h3>
						<MapPinIcon className='h-6 w-6 ' />
						<div>
							<p>Grunwaldzka 219/9</p>
							<p>80-266 Gdańsk</p>
						</div>
						<AtSymbolIcon className='h-6 w-6' />
						keres@keres.pl
						<HomeIcon className='h-6 w-6' />
						<div>
							<p>NIP: 839-292-43-40</p>
							<p>Regon: 221008128</p>
						</div>
						<PhoneIcon className='h-6 w-6' />
						<div>
							<p>Księgowość</p>
							<p>tel. +48 58 345 43 04</p>
							<p>tel. +48 667 701 046</p>
						</div>
						<ClockIcon className='h-6 w-6' />
						<div>
							<p>Godziny otwarcia</p>
							<p>Pn-Pt: 7.00 - 18.00</p>
						</div>
					</div>
				</div>
				<div className='border-t-2 flex flex-col items-center mt-8 p-2 h-22'>
					<h3 className='text-lg font-semibold'>Znajdź nas!</h3>
					<LeafletDynamic />
				</div>
			</div>
		</div>
	)
}

export default Contact
