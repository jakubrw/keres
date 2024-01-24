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
			<img src='svg/offer.svg' alt='' className='px-10 my-2' />
			<img src='svg/contact.svg' alt='' className='px-10 my-2' />
			<img src='svg/files.svg' alt='' className='px-10 my-2' />
			<img src='svg/main.svg' alt='' className='px-10 my-2' />
			<img src='svg/team.svg' alt='' className='px-10 my-2' />
			<img src='svg/trolley.svg' alt='' className='px-10 my-2' />

			

			{/* <div>
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
				<div>
					<h3 className='font-bold text-center'>Nasza oferta</h3>
				</div>
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
					spaceBetween={0}
					slidesPerView={1}
					loop={true}
					effect='coverflow'
					centeredSlides={'true'}
					className='h-auto w-3/4'>
					<SwiperSlide>
						<CardOffert
							cardTitle={'Doradztwo transportowe'}
							cardText={
								'Nasze usługi doradztwa transportowego to klucz do optymalizacji i efektywności Twojego łańcucha dostaw. Dzięki doświadczonym ekspertom, oferujemy spersonalizowane strategie transportowe, które pomagają zminimalizować koszty, zoptymalizować trasę i zwiększyć ogólną wydajność logistyczną Twojego biznesu.'
							}
							cardLink={'oferta/doradztwo'}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CardOffert
							cardTitle={'Odprawy Celne'}
							cardText={
								'Zapewniamy profesjonalne usługi odpraw celnych, eliminując wszelkie trudności związane z procedurami celno-skarbowymi. Nasz zespół specjalistów dba o sprawną i zgodną z przepisami odprawę, gwarantując, że Twoje przesyłki bezpiecznie i szybko przekraczają granice.'
							}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CardOffert
							cardTitle={'Spedycja Międzynarodowa'}
							cardText={
								'Jako ekspert w dziedzinie spedycji, oferujemy kompleksowe rozwiązania logistyczne dla Twojej firmy. Niezależnie od skali działalności, nasze usługi spedycji obejmują solidne partnerstwa i globalne sieci, co zapewnia nie tylko bezpieczny, ale również punktualny transport Twoich towarów.'
							}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CardOffert
							cardTitle={'Transport'}
							cardText='Nasza firma transportowa dostarcza nie tylko towary, ale także spokój umysłu. Dzięki nowoczesnej flocie pojazdów i profesjonalnej obsłudze, zapewniamy bezpieczne i terminowe dostawy. Nasze usługi transportowe obejmują zarówno krajowe, jak i międzynarodowe trasy, dostosowując się do indywidualnych potrzeb klientów.'
							cardLink={'oferta/transport'}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CardOffert
							cardTitle={'Ubezpieczenia'}
							cardText='Bezpieczeństwo to nasz priorytet. Oferujemy kompleksowe rozwiązania ubezpieczeniowe dla Twoich przesyłek. Nasze polisy transportowe chronią przed różnymi ryzykami, gwarantując, że Twoje towary są zabezpieczone na każdym etapie podróży, co pozwala Ci skupić się na rozwoju swojego biznesu.'
						/>
					</SwiperSlide>
				</Swiper>
			</div> */}
		</div>
	)
}

export default Oferta
