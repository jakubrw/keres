import '@/app/globals.css'

import Header from '../../app/components/Header'
import Footer from '@/app/components/Footer'

const Doradztwo = () => {
	return (
		<div className='min-h-screen'>
			<Header logoWidth={30} logoHeight={30} titleName={'Doradztwo Transportowe'} subtitleName={'Twoja Droga do Sukcesu'}/>
			
			<div className='flex flex-col justify-center items-center mx-6'>
				<div className='m-2'>
					<div>
						<h2 className=''>
							Jako firma spedycyjno-transportowa, oferujemy kompleksowe doradztwo transportowe, które
							pomoże Ci zoptymalizować operacje logistyczne i zwiększyć efektywność Twojej działalności.
						</h2>
						<p>Nasze usługi obejmują:</p>
					</div>
					<div className='mx-4'>
						<ol className='list-decimal [&>li>p>span]:font-bold'>
							<li>
								<p>
									<span>Optymalizacja tras: </span>Dzięki analizie i planowaniu tras dostaw, skracamy
									czas przejazdów i obniżamy koszty paliwa.
								</p>
							</li>
							<li>
								<p>
									<span>Zarządzanie flotą: </span>Pomagamy w zarządzaniu flotą pojazdów, dbając o
									konserwację, efektywność paliwową i monitorowanie stanu technicznego.
								</p>
							</li>
							<li>
								<p>
									<span>Przestrzeganie przepisów: </span>Zapewniamy wsparcie w spełnianiu wszelkich
									wymogów prawnych, w tym norm dotyczących czasu pracy kierowców i bezpieczeństwa
									transportu.
								</p>
							</li>
							<li>
								<p>
									<span>Nowoczesne technologie: </span>Wdrażamy zaawansowane systemy zarządzania
									transportem (TMS), telematykę i GPS, co umożliwia lepsze monitorowanie i kontrolę
									operacji.
								</p>
							</li>
							<li>
								<p>
									<span>Zarządzanie Przywozem i Odbiorem: </span>Dbamy o kompleksową kontrolę nad
									procesem przywozu i odbioru towarów, śledząc i koordynując każdy etap, aby zapewnić,
									że towar jest gotowy do odbioru w odpowiednim czasie.
								</p>
							</li>
						</ol>
					</div>
				</div>
				<div className='m-2'>
					<p>Z naszym doradztwem transportowym, Twoja firma zyska:</p>
					<ul className='list-disc mx-4'>
						<li>Lepszą wydajność operacyjną</li>
						<li>Niższe koszty transportu</li>
						<li>Wyższy poziom zgodności z przepisami</li>
						<li>Wyższą konkurencyjność na rynku</li>
					</ul>
				</div>
				<div className='my-4'>
					<p className='italic text-center'>
						Skontaktuj się z nami już dziś i odkryj, jak nasze doradztwo transportowe może pomóc Ci osiągnąć
						sukces!
					</p>
				</div>
			</div>
			<Footer/>
		</div>
	)
}

export default Doradztwo
