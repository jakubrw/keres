'use client'

import { useState } from 'react'

import CardOffert from '@/app/components/CardOffert'
import Header from '../app/components/Header'
import { redirect } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs } from 'swiper/modules'
import 'swiper/css'

const Oferta = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	return (
		<div className='min-h-screen w-screen'>
			<Header logoWidth={30} logoHeight={30} titleName={'Oferta'} />
			<div className=' flex flex-col items-center mx-5 gap-3'>
				<div className='w-full  rounded-xl '>
					<div className='h-[30vh] text-center '>
						<Swiper centeredSlides={true} loop={true} className='h-full rounded-3xl'>
							<SwiperSlide>
								<CardOffert
									cardTitle={'doradztwo'}
									cardText='Nasze doświadczenie pozwala analizować i wybierać najlepsze opcje przewozu.
									Spedytorzy są zawsze gotowi pomóc w nietypowych sytuacjach, trzymając rękę na pulsie
									transportu'
								/>
							</SwiperSlide>
							<SwiperSlide>
								<CardOffert
									cardTitle={'odprawy'}
									cardText='Realizujemy transport poza UE, mając podpisaną umowę z agencją celną. Nasi eksperci
									monitorują zmiany w kodeksach prawa, gwarantując bieżącą reakcję na ewentualne
									modyfikacje.'
								/>
							</SwiperSlide>
							<SwiperSlide>
								<CardOffert
									cardTitle={'spedycja'}
									cardText='Działalność spedycyjna umożliwia załadunek z importu i exportu. Dzięki współpracy z
										przewoźnikami zapewnimy dowolność dostępności aut, także dla niestandardowych
										wymiarów czy tiefbett.'
								/>
							</SwiperSlide>
							<SwiperSlide>
								<CardOffert
									cardTitle={'transport'}
									cardText='Realizujemy transporty krajowe 24/7, obsługując różne rodzaje przesyłek. Posiadamy
										niezbędne ADRy do przewozu towarów niebezpiecznych. Terminowość i bezpieczeństwo to
										nasze priorytety.'
								/>
							</SwiperSlide>
							<SwiperSlide>
								<CardOffert
									cardTitle={'transport'}
									cardText='Zapewniamy profesjonalny transport międzynarodowy, obejmujący kraje takie jak
										Austria, Niemcy, Francja czy Włochy. Nasza pewność i zaangażowanie gwarantują
										satysfakcję klientów.'
								/>
							</SwiperSlide>
							<SwiperSlide>
								<CardOffert
									cardTitle={'ubezpieczenia'}
									cardText='Oferujemy ubezpieczenia cargo zapewniające bezpieczeństwo mienia w transporcie.
										Polisy są dostosowane do różnych ładunków, chroniąc towary przed ryzykiem utraty czy
										uszkodzenia.'
								/>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
				<div className='text-center rounded-xl shadow-lg p-8 bg-gradient-to-r from-yellow-light to-green-light'>
					<p>Kompleksowo obsługujemy firmy z różnych gałęzi handlu i przemysłu. </p>
					<p>
						Oferujemy nasze sprawdzone rozwiązania z zakresu logistyki oraz spedycji, dopasujemy najlepsze
						oferty transportowe, usprawnimy proces logistyczny, dostarczymy towar na czas.
					</p>
					<p>
						Współpracujemy z wiarygodnymi podwykonawcami na zasadach umów stałych lub pojedynczych zleceń co
						zapewnia bezpieczeństwo przewożonych towarów oraz wysoką jakość obsługi.
					</p>
					<p>
						Działając w głównej mierze jako spedycja, możemy w dogodnym terminie podstawić auto, przy czym
						nie ma konieczności zgłaszania z wyprzedzeniem gotowości towaru do odbioru.
					</p>
					<p>
						Każdy transport traktujemy indywidualnie, nasze stawki zawsze są konkurencyjne, ponieważ
						korzystamy z różnych przewoźników znajdujących się możliwie najbliżej załadunku, by pominąć
						koszty dojazdu i powrotu co daje nam zoptymalizować koszty samego transportu.
					</p>
					<p>Przewozy realizujemy zgodnie z wymogami konwencji CMR oraz instrukcji zleceniodawcy.</p>
				</div>
			</div>
		</div>
	)
}

export default Oferta
