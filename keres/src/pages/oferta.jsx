'use client'
import CardOffert from '@/app/components/CardOffert'
import Header from '../app/components/Header'
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const Oferta = () => {
	return (
		<div className='min-h-screen w-screen'>
			<Header logoWidth={30} logoHeight={30} titleName={'Oferta'} />
			<div className=' flex flex-col items-center mx-2'>
				<div className='text-center'>
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
				<div className='w-full border-2 rounded-2xl border-zinc-900'>
					<div className='grid grid-cols-5 w-full h-5  divide-x divide-zinc-900 text-xs'>
						<div className='w-full text-center'>doradztwo</div>
						<div className='w-full text-center'>odprawy</div>
						<div className='w-full text-center'>spedycja</div>
						<div className='w-full text-center'>transport</div>
						<div className='w-full text-center'>ubezpieczenia</div>
					</div>
					<div className='h-52 text-center flex flex-col items-center justify-center'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolores obcaecati odio,
						aliquid soluta perferendis dicta autem unde quibusdam quasi?
					</div>
				</div>
			</div>
		</div>
	)
}

export default Oferta
