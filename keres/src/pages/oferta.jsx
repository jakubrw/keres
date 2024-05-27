'use client'

import CardOffert from '@/app/components/CardOffert'
import Header from '../app/components/Header'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'

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
	const offersArr = [
		{
			cardTitle: 'doradztwo',
			cardText:
				'Nasze doświadczenie pozwala analizować i wybierać najlepsze opcje przewozu. Spedytorzy są zawsze gotowi pomóc w nietypowych sytuacjach, trzymając rękę na pulsie transportu',
		},
		{
			cardTitle: 'odprawy',
			cardText:
				'Realizujemy transport poza UE, mając podpisaną umowę z agencją celną. Nasi eksperci monitorują zmiany w kodeksach prawa, gwarantując bieżącą reakcję na ewentualne modyfikacje.',
		},
		{
			cardTitle: 'spedycja',
			cardText:
				'Działalność spedycyjna umożliwia załadunek z importu i exportu. Dzięki współpracy zprzewoźnikami zapewnimy dowolność dostępności aut, także dla niestandardowych wymiarów czy tiefbett.',
		},
		{
			cardTitle: 'transport',
			cardText:
				'Realizujemy transporty krajowe 24/7, obsługując różne rodzaje przesyłek. Posiadamyniezbędne ADRy do przewozu towarów niebezpiecznych. Terminowość i bezpieczeństwo tonasze priorytety.',
		},
		{
			cardTitle: 'ubezpieczenia',
			cardText:
				'Oferujemy ubezpieczenia cargo zapewniające bezpieczeństwo mienia w transporcie. Polisy są dostosowane do różnych ładunków, chroniąc towary przed ryzykiem utraty czy uszkodzenia.',
		},
	]
	return (
		<div className='min-h-screen w-screen relative'>
			<Header logoWidth={30} logoHeight={30} titleName={'Oferta'} headerBgContent={<OfertaBgContent />} />
			<div className=' flex flex-col items-center mx-5 gap-3'>
				<div>
					<h2 className='text-2xl text-center font-bold'>
						Kompleksowo obsługujemy firmy z różnych gałęzi handlu i przemysłu.{' '}
					</h2>
				</div>
				<div className='w-full aspect-square '>
					<Swiper
						centeredSlides={true}
						loop={true}
						spaceBetween={50}
						modules={[Autoplay]}
						autoplay={{ delay: 6000 }}
						className='h-full'>
						{offersArr.map(x => {
							return (
								<SwiperSlide
									key={x.cardTitle}
									className='text-black font-solid flex flex-col items-space justify-evenly overflow-hidden rounded-xl bg-gradient-to-r from-yellow-light to-green-light px-8'>
									<CardOffert key={x.cardTitle} cardTitle={x.cardTitle} cardText={x.cardText} />
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
				<Swiper
					centeredSlides={true}
					loop={true}
					spaceBetween={50}
					modules={[Autoplay]}
					autoplay={{ delay: 10000 }}
					className='w-full mx-8 aspect-[3/2] text-center font-italic'>
					<SwiperSlide className='text-black font-solid flex flex-col items-space justify-evenly overflow-hidden rounded-xl border border-black p-8 ratio-square'>
						Oferujemy nasze sprawdzone rozwiązania z zakresu logistyki oraz spedycji, dopasujemy najlepsze
						oferty transportowe, usprawnimy proces logistyczny, dostarczymy towar na czas.
					</SwiperSlide>
					<SwiperSlide className='text-black font-solid flex flex-col items-space justify-evenly overflow-hidden rounded-xl border border-black p-8 '>
						Każdy transport traktujemy indywidualnie, nasze stawki zawsze są konkurencyjne, ponieważ
						korzystamy z różnych przewoźników znajdujących się możliwie najbliżej załadunku, by pominąć
						koszty dojazdu i powrotu co daje nam zoptymalizować koszty samego transportu.
					</SwiperSlide>

					<SwiperSlide className='text-black font-solid flex flex-col items-space justify-evenly overflow-hidden rounded-xl border border-black p-8 '>
						Przewozy realizujemy zgodnie z wymogami konwencji CMR oraz instrukcji zleceniodawcy.
					</SwiperSlide>
					<SwiperSlide className='text-black font-solid flex flex-col items-space justify-evenly overflow-hidden rounded-xl border border-black p-8 '>
						Współpracujemy z wiarygodnymi podwykonawcami na zasadach umów stałych lub pojedynczych zleceń co
						zapewnia bezpieczeństwo przewożonych towarów oraz wysoką jakość obsługi.
					</SwiperSlide>
					<SwiperSlide className='text-black font-solid flex flex-col items-space justify-evenly overflow-hidden rounded-xl border border-black p-8 '>
						Działając w głównej mierze jako spedycja, możemy w dogodnym terminie podstawić auto, przy czym
						nie ma konieczności zgłaszania z wyprzedzeniem gotowości towaru do odbioru.
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default Oferta
