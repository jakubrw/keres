import Header from '@/app/components/Header'
import Image from 'next/image'


const Contact = () => {
	return (
		<div className='min-h-screen'>
			<Header logoWidth={30} logoHeight={30} />
			<div>
				<h1>Kontakt</h1>
				<div className='flex flex-col items-center mx-12 gap-0.2 text-center'>
					Keres Serafin Majchrzak
					<Image className='relative' src='/icons/marker.svg' alt='keres logo' width={30} height={30} />
					<div>
						Grunwaldzka 219/9
						<br />
						80-266 Gdańsk
						<br />
					</div>
					<Image className='relative' src='/icons/at.svg' alt='keres logo' width={30} height={30} />
					keres@keres.pl
					<Image className='relative' src='/icons/city.svg' alt='keres logo' width={30} height={30} />
					<div>
						NIP: 839-292-43-40
						<br />
						Regon: 221008128
					</div>
					<Image className='relative' src='/icons/phone-call.svg' alt='keres logo' width={30} height={30} />
					<div>
						Księgowość
						<br />
						tel. +48 58 345 43 04
						<br />
						tel. +48 667 701 046
					</div>
					<Image className='relative' src='/icons/clock-nine.svg' alt='keres logo' width={30} height={30} />
					<div>
						Godziny otwarcia
						<br />
						Pn-Pt: 7.00 - 18.00
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
