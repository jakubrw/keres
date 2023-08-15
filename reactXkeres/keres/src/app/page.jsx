import Image from 'next/image'
import Link from 'next/link'
import TitlePage from './components/titlepage'

import Header from './components/Header'
import Footer from './components/Footer'
import Counter from './components/Counter'

export default function Home() {
	return (
		<main className='min-h-screen'>
			<Header logoWidth={160} logoHeight={160} />
			<div className='text-center text-lg font-black uppercase text-7xl '>Keres</div>
			<div className='bg-white mx-10 my-5 px-2 py-8 rounded text-center border-2 border-gray-600'>
				<div className='text-xl uppercase font-bold pb-4'>O FIRMIE</div>
				<div className='text-sm pb-4 px-6 text-center'>
					Realizujemy zlecenia spedycji i transportu drogowego każdego typu. Naszą flagową ofertą są
					transporty ekspresowe, dostawy oraz doładunki i transporty nienormatywne. Naszym celem jest stały
					rozwój oferty i podnoszenie jakości usług oferowanych klientom. Rozwijamy zaplecze
					spedycyjno-logistyczne, stale powiększamy również naszą flotę samochodową oraz zespół pracowników.
				</div>
				<div className='text-xs font-bold'>Więcej o nas</div>
			</div>
			<div className='bg-white mx-10 my-5 px-2 py-8 rounded text-center border-2 border-gray-600'>
				<div className='text-xl uppercase font-bold pb-4'>OFERTA</div>
				<div className='text-sm pb-4 px-6 text-center'>
					Zajmujemy się organizacją transportów międzynarodowych, krajowych, całopojazdowych, drobnicowych
					oraz ponadgabarytowych. Kompleksowo obsługujemy firmy z różnych gałęzi handlu i przemysłu. Oferujemy
					nasze sprawdzone rozwiązania z zakresu logistyki oraz spedycji, dopasujemy najlepsze oferty
					transportowe, usprawnimy proces logistyczny, dostarczymy towar na czas.
				</div>
				<div className='text-xs font-bold'>Więcej o naszej ofercie</div>
			</div>
			<Counter/>
			<Footer />
		</main>
	)
}
