'use client'
import CardOffert from '@/app/components/CardOffert'
import Header from '../app/components/Header'
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const Oferta = () => {
	return (
		<div className='min-h-screen w-screen '>
			<Header logoWidth={30} logoHeight={30} titleName={'Oferta'} />

			<div>
				Kompleksowo obsługujemy firmy z różnych gałęzi handlu i przemysłu. Oferujemy nasze sprawdzone
				rozwiązania z zakresu logistyki oraz spedycji, dopasujemy najlepsze oferty transportowe, usprawnimy
				proces logistyczny, dostarczymy towar na czas. Współpracujemy z wiarygodnymi podwykonawcami na zasadach
				umów stałych lub pojedynczych zleceń co zapewnia bezpieczeństwo przewożonych towarów oraz wysoką jakość
				obsługi. Działając w głównej mierze jako spedycja, możemy w dogodnym terminie podstawić auto, przy czym
				nie ma konieczności zgłaszania z wyprzedzeniem (np. miesięcznym) gotowości towaru do odbioru. Każdy
				transport traktujemy indywidualnie, nasze stawki zawsze są konkurencyjne, ponieważ korzystamy z różnych
				przewoźników znajdujących się możliwie najbliżej załadunku, by pominąć koszty dojazdu i powrotu co daje
				nam zoptymalizować koszty samego transportu. Przewozy realizujemy zgodnie z wymogami konwencji CMR oraz
				instrukcji zleceniodawcy.
			</div>
			<div className='py-10 px-2 '>
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
					spaceBetween={0}
					slidesPerView={1}
					loop={true}
					effect='coverflow'
					centeredSlides={'true'}
					className='h-auto w-full'>
					<SwiperSlide>
						<CardOffert
							cardTitle={'Doradztwo transportowe'}
							cardText={
								'Nasze doświadczenie pozwala analizować i wybierać najlepsze opcje przewozu. Spedytorzy są zawsze gotowi pomóc w nietypowych sytuacjach, trzymając rękę na pulsie transportu.'
							}
							cardLink={'oferta/doradztwo'}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CardOffert
							cardTitle={'Odprawy Celne'}
							cardText={
								'Realizujemy transport poza UE, mając podpisaną umowę z agencją celną. Nasi eksperci monitorują zmiany w kodeksach prawa, gwarantując bieżącą reakcję na ewentualne modyfikacje.'
							}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CardOffert
							cardTitle={'Spedycja Międzynarodowa'}
							cardText={
								'Działalność spedycyjna umożliwia załadunek z importu i exportu. Dzięki współpracy z przewoźnikami zapewnimy dowolność dostępności aut, także dla niestandardowych wymiarów czy tiefbett.'
							}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CardOffert
							cardTitle={'Transport'}
							cardText='Realizujemy transporty krajowe i międzynarodowe 24/7, obsługując różne rodzaje przesyłek. Posiadamy niezbędne ADRy do przewozu towarów niebezpiecznych. Terminowość i bezpieczeństwo to nasze priorytety.'
							cardLink={'oferta/transport'}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CardOffert
							cardTitle={'Ubezpieczenia'}
							cardText=' Oferujemy ubezpieczenia cargo zapewniające bezpieczeństwo mienia w transporcie. Polisy są dostosowane do różnych ładunków, chroniąc towary przed ryzykiem utraty czy uszkodzenia.'
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default Oferta
