'use client'
import CardOffert from '@/app/components/CardOffert'
import Header from '../app/components/Header'
import { Navigation, Pagination, Scrollbar, A11y, EffectFlip, EffectCoverflow } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Oferta = () => {
	return (
		<div className='h-screen w-screen '>
			<Header logoWidth={30} logoHeight={30} titleName={'Oferta'} />
			<img src='svg/offer.svg' alt='' className='px-10 my-2' />

			<div className='py-10 px-2 '>
				<div>
					<h3 className='font-bold text-center'>Nasza oferta</h3>
				</div>
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
					spaceBetween={0}
					slidesPerView={1}
					loop={true}
					effect={'coverflow'}
					centeredSlides={'true'}
					className=''>
					<SwiperSlide className='h-auto w-auto'>
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
						/>
					</SwiperSlide>
					<SwiperSlide>
						<CardOffert
							cardTitle={'Ubezpieczenia'}
							cardText='Bezpieczeństwo to nasz priorytet. Oferujemy kompleksowe rozwiązania ubezpieczeniowe dla Twoich przesyłek. Nasze polisy transportowe chronią przed różnymi ryzykami, gwarantując, że Twoje towary są zabezpieczone na każdym etapie podróży, co pozwala Ci skupić się na rozwoju swojego biznesu.'
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default Oferta
