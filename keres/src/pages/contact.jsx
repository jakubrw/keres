import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'

const Contact = () => {
	return (
		<div>
			<div className='h-screen'>
				<Header logoWidth={30} logoHeight={30} titleName={'Kontakt'} />

				<div className='text-center m-6 mb-24'>
					<p className='font-bold text-xl'>Keres Serafin Majchrzak</p> <p>Grunwaldzka 219/9, 80-266 Gdańsk</p>
					<p>keres@keres.pl</p>
					<p>NIP: 839-292-43-40</p>
					<p>Regon: 221008128</p>
					<p>tel. +48 667 701 046</p>
					<p className='font-semibold'>Księgowość:</p>
					<p>tel. +48 58 345 43 04</p>
				</div>
				<Footer className='w-full' />
			</div>
		</div>
	)
}

export default Contact
