'use client'

import CardOffert from '@/app/components/CardOffert'
import Header from '../app/components/Header'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'
import Footer from '@/app/components/Footer'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const OfertaBgContent = () => {
	return (
		<>
			<Image
				src='/svg/boxes/boxes-open.svg'
				width={200}
				height={200}
				className='absolute z-[-20] top-0 right-0 blur-sm'></Image>
			<Image
				src='/svg/boxes/box-open-flat.svg'
				width={200}
				height={200}
				className='absolute z-[-10] top-0 left-0 blur-sm'></Image>
			<Image
				src='/svg/boxes/boxes-closed.svg'
				width={200}
				height={200}
				className='absolute z-[-5] top-0 right-1/2 translate-x-1/2 blur-[1px]'></Image>
		</>
	)
}

const Oferta = () => {
	const [expandedCard, setExpandedCard] = useState(null)

	const handleCardClick = index => {
		if (expandedCard === index) {
			setExpandedCard(null)
		} else {
			setExpandedCard(index)
		}
	}
	const offersArr = [
		{
			cardTitle: 'doradztwo',
			cardText:
				'Nasze zdobyte doświadczenie daje możliwość w intuicyjny sposób wybrać najkorzystniejsze opcje. Stała kontrola przebiegu transportu pozwala przewidzieć i uniknąć błędów, które mogłyby się pojawić.',
		},
		{
			cardTitle: 'odprawy',
			cardText:
				'Praca z transportami poza UE jest dla nas codziennością, w związku z tym mamy podpisaną umowę z agencją celną, dzięki której przebieg takiej relacji jest bezpieczny i krótszy. Nasi spedytorzy wciąż monitorują sytuację na rynku prawa, dzięki czemu mamy możliwość bieżących zmian jeśli wystąpi taka konieczność.',
		},
		{
			cardTitle: 'spedycja',
			cardText:
				'Działalność spedycyjna daje nam możliwość szybkiej realizacji importu/exportu z dowolnego miejsca. Stała współpraca z przewoźnikami oferuję nam pewność bezpiecznej i terminowej realizacji.',
		},
		{
			cardTitle: 'transport',
			cardText:
				'Nasze realizacje są obsługiwane 24h/7, jeśli załadunki występują wieczorową porą są również przez nas kontrolowane, terminowe realizacje to dla nas priorytet. Posiadamy niezbędne uprawnienia do przewozu towarów niebezpiecznych, w związku z tym mogą nam Państwo powierzyć kontrolę nad realizacją ładunku.',
		},
		{
			cardTitle: 'ubezpieczenia',
			cardText:
				'Wszystkie nasze realizacje są ubezpieczone, począwszy od transportów naszą flotą, skończywszy na realizacji transportów spedycyjnych. Dodatkowo, na prośbę klienta jesteśmy w stanie zorganizować ubezpieczenie cargo, dzięki wyłączności agenta takie tematy jesteśmy w stanie zrealizować na bieżąco.',
		},
	]
	return (
		<div className='min-h-screen w-screen relative '>
			<Header
				logoWidth={30}
				logoHeight={30}
				titleName={'Oferta'}
				subtitleName={'Kompleksowo obsługujemy firmy z różnych gałęzi handlu i przemysłu.'}
				headerBgContent={<OfertaBgContent />}
			/>
			<div className='flex flex-col items-center  gap-3 '>
				<div className='w-full  md:hidden'>
					<Swiper
						centeredSlides={true}
						loop={true}
						spaceBetween={800}
						modules={[Autoplay, Pagination]}
						autoplay={{ delay: 6000 }}
						pagination={{
							dynamicBullets: true,
						}}
						style={{
							'--swiper-pagination-color': '#4C7FBE',
							'--swiper-pagination-bullet-inactive-color': '#999999',
							'--swiper-pagination-bullet-inactive-opacity': '1',
							'--swiper-pagination-bullet-size': '6px',
							'--swiper-pagination-bullet-horizontal-gap': '6px',
						}}
						className='aspect-square md:aspect-[3/2] md:max-w-[600px] h-full px-4'>
						{offersArr.map(x => {
							return (
								<SwiperSlide
									key={x.cardTitle}
									className='text-black font-solid flex flex-col items-space justify-evenly overflow-hidden rounded-xl bg-gradient-to-r from-yellow-light to-green-light p-6'>
									<CardOffert key={x.cardTitle} cardTitle={x.cardTitle} cardText={x.cardText} />
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
				<div className='hidden aspect-[4/2] w-full md:block md:w-[70vw] overflow-hidden lg:aspect-[4/1]'>
					<div className='flex flex-row items-center justify-center h-full bg-gradient-to-r from-yellow-light to-green-light overflow-hidden rounded-xl'>
						{offersArr.map((x, index) => (
							<motion.div
								key={index}
								className={`h-full ${
									expandedCard === index ? 'w-full' : 'w-1/5'
								} flex flex-col items-center justify-center text-black font-solid flex flex-col items-space justify-evenly overflow-hidden rounded-xl p-6 cursor-pointer border overflow-hidden`}
								onClick={() => handleCardClick(index)}
								whileTap={{ scale: 0.95 }}
								animate={{ width: expandedCard === index ? '100%' : '20%' }}
								transition={{ duration: 0.3 }}>
								<div>
									{expandedCard === index ? (
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.2, delay: 0.3 }}
											className='flex flex-col items-center'>
											<div>
												<h2 className='font-bold uppercase text-lg'>{x.cardTitle}</h2>
												<p className='self-stretch text-left py-6'>{x.cardText}</p>
												<Link
													href={`/oferta/${x.cardTitle}`}
													className='w-full  bg-black-100 pointer-events-auto text-right'>
													kliknij po więcej
												</Link>
											</div>
										</motion.div>
									) : (
										<p className='rotate-90 uppercase font-bold'>{x.cardTitle}</p>
									)}
								</div>
							</motion.div>
						))}
					</div>
				</div>
				<div className='px-4 md:w-[70vw]'>
					<ul className='[&>li]:pb-2'>
						<li>
							Oferujemy nasze sprawdzone rozwiązania z zakresu logistyki oraz spedycji, dopasujemy
							najlepsze oferty transportowe, usprawnimy proces logistyczny, dostarczymy towar na czas.
						</li>
						<li>
							{' '}
							Każdy transport traktujemy indywidualnie, nasze stawki zawsze są konkurencyjne, ponieważ
							korzystamy z różnych przewoźników, aby zoptymalizować koszty transportu.
						</li>
						<li>Przewozy realizujemy zgodnie z wymogami konwencji CMR oraz instrukcji zleceniodawcy. </li>
						<li>
							Współpracujemy z wiarygodnymi podwykonawcami na zasadach umów stałych lub pojedynczych
							zleceń co zapewnia bezpieczeństwo przewożonych towarów oraz wysoką jakość obsługi.
						</li>
						<li>
							Działając w głównej mierze jako spedycja, możemy w dogodnym terminie podstawić auto, przy
							czym nie ma konieczności zgłaszania z wyprzedzeniem gotowości towaru do odbioru.
						</li>
					</ul>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Oferta
