import '@/app/globals.css'

import Header from '../../app/components/Header'
import Footer from '@/app/components/Footer'

const Transport = () => {
	return (
		<div className='min-h-screen'>
			<Header
				logoWidth={30}
				logoHeight={30}
				titleName={'Transport'}
				subtitleName={'niezawodność i efektywność Twoich przewozów'}
			/>

			<div className='flex flex-col justify-center items-center mx-6'>
				<div className='m-2'>
					<div>
						<h2 className=''>
							Transport to kluczowy element każdej działalności logistycznej, zapewniający szybki i
							bezpieczny przewóz towarów od nadawcy do odbiorcy.
						</h2>
						<p>Nasze usługi transportowe obejmują:</p>
					</div>
					<div className='mx-4'>
						<ol className='list-decimal [&>li>p>span]:font-bold'>
							<li>
								<p>
									<span>Transport Krajowy: </span>Zapewniamy niezawodne i terminowe dostawy na terenie
									kraju, obsługując różnorodne rodzaje towarów. Dodatkowo, jako lokalni przewoźnicy,
									oferujemy kompleksową obsługę logistyczną na najwyższym poziomie.
								</p>
							</li>
							<li>
								<p>
									<span>Transport Międzynarodowy: </span>Specjalizujemy się w przewozie towarów na
									obszarze międzynarodowym, zapewniając efektywną i bezpieczną logistykę na każdej
									trasie.
								</p>
							</li>
							<li>
								<p>
									<span>Transport Specjalistyczny: </span>Realizujemy przewozy towarów wymagających
									specjalistycznych rozwiązań, takich jak ładunki ponadgabarytowe czy transport
									chłodniczy.
								</p>
							</li>
							<li>
								<p>
									<span>Usługi Dodatkowe: </span>Nasza oferta obejmuje także dodatkowe usługi, takie
									jak wyposażenie naszej floty w windy, platformy i inne specjalistyczne rozwiązania,
									które pozwalają nam sprostać różnorodnym potrzebom naszych klientów podczas
									transportu.
								</p>
							</li>
							<li>
								<p>
									<span>Monitoring Przesyłek: </span>Zapewniamy system monitorowania przesyłek,
									umożliwiający śledzenie towarów na każdym etapie podróży, dla pełnej przejrzystości
									i kontroli.
								</p>
							</li>
						</ol>
					</div>
				</div>
				<div className='m-2'>
					<p>Z naszymi usługami transportowymi, Twoja firma zyska:</p>
					<ul className='list-disc mx-4'>
						<li>Niezawodne i terminowe dostawy</li>
						<li>Elastyczność dzięki różnorodnym opcjom transportu</li>
						<li>Efektywność kosztową dzięki optymalizacji tras i floty pojazdów</li>
						<li>Pełną transparentność i kontrolę nad przesyłkami</li>
						<li>Transport lokalny</li>
					</ul>
				</div>
				<div className='my-4'>
					<p className='italic text-center'>
						Skontaktuj się z nami już dziś, aby dowiedzieć się, jak nasze usługi transportowe mogą usprawnić
						przewóz Twoich towarów i zapewnić Ci pełne wsparcie na każdym etapie logistycznym!
					</p>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Transport
