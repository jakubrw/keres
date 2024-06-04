import '@/app/globals.css'

import Header from '../../app/components/Header'
import Footer from '@/app/components/Footer'

const Spedycja = () => {
	return (
		<div className='min-h-screen'>
			<Header
				logoWidth={30}
				logoHeight={30}
				titleName={'Spedycja'}
				subtitleName={'Kompleksowa Obsługa Twoich Przesyłek'}
			/>

			<div className='flex flex-col justify-center items-center mx-6'>
				<div className='m-2'>
					<div>
						<h2 className=''>
							Spedycja to serce działalności transportowej, zapewniające kompleksową obsługę przesyłek od
							nadawcy do odbiorcy.
						</h2>
						<p>Nasze usługi spedycyjne obejmują:</p>
					</div>
					<div className='mx-4'>
						<ol className='list-decimal [&>li>p>span]:font-bold'>
							<li>
								<p>
									<span>Planowanie transportu: </span>Tworzymy optymalne plany transportowe,
									uwzględniając najlepsze trasy, środki transportu i harmonogramy, aby Twoje towary
									dotarły na czas.
								</p>
							</li>
							<li>
								<p>
									<span>Monitorowanie przesyłek: </span>Śledzimy Twoje przesyłki na każdym etapie
									podróży, zapewniając pełną transparentność i możliwość bieżącej kontroli statusu
									transportu.
								</p>
							</li>
							<li>
								<p>
									<span>Obsługa formalności: </span>Zajmujemy się wszystkimi formalnościami związanymi
									z transportem, w tym dokumentacją celno-skarbową, umowami transportowymi i
									ubezpieczeniami.
								</p>
							</li>
							<li>
								<p>
									<span>Rozwiązania multimodalne: </span>Oferujemy rozwiązania multimodalne, łącząc
									różne środki transportu (drogowy, kolejowy, morski, lotniczy) dla
									najefektywniejszego przewozu towarów.
								</p>
							</li>
							<li>
								<p>
									<span>Doradztwo spedycyjne: </span>Zapewniamy fachowe doradztwo w zakresie spedycji,
									pomagając w wyborze najlepszych rozwiązań transportowych, optymalizacji kosztów oraz
									przestrzeganiu przepisów.
								</p>
							</li>
						</ol>
					</div>
				</div>
				<div className='m-2'>
					<p>Z naszymi usługami spedycyjnymi, Twoja firma zyska:</p>
					<ul className='list-disc mx-4'>
						<li>Skuteczne planowanie i realizację transportu</li>
						<li>Redukcję kosztów dzięki konsolidacji przesyłek</li>
						<li>Płynną i niezawodną koordynację logistyczną</li>
						<li>Pełną transparentność dzięki monitorowaniu przesyłek</li>
						<li>Bezproblemową obsługę formalności</li>
						<li>Najefektywniejsze rozwiązania multimodalne</li>
						<li>Profesjonalne doradztwo spedycyjne</li>
					</ul>
				</div>
				<div className='my-4'>
					<p className='italic text-center'>
						Skontaktuj się z nami już dziś, aby dowiedzieć się, jak nasze usługi spedycyjne mogą usprawnić
						transport Twoich towarów i zapewnić Ci pełne wsparcie na każdym etapie logistycznym.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Spedycja
