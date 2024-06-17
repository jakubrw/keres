import '@/app/globals.css'
import Header from '../../app/components/Header'
import Footer from '@/app/components/Footer'

const Odprawy = () => {
	return (
		<div className='min-h-screen flex flex-col'>
			<Header
				logoWidth={30}
				logoHeight={30}
				titleName='Odprawy'
				subtitleName='Efektywność i Przejrzystość w Twojej Firmie'
			/>
			<main className='flex-grow flex flex-col items-center justify-center mx-6 md:mx-12 lg:mx-24'>
				<div className='w-full md:w-3/5 rounded-lg p-8 bg-white bg-opacity-90 shadow-2xl my-6'>
					<div className='text-center mb-6'>
						<h2 className='text-2xl font-semibold text-gray-800'>
							Odprawy to kluczowy element w zarządzaniu operacjami spedycyjno-transportowymi, zapewniający
							płynność i zgodność z przepisami.
						</h2>
					</div>
					<div className='p-6 bg-gradient-to-r from-yellow-light to-green-dark rounded-lg shadow-lg lg:px-10'>
						<p className='text-center text-xl font-bold mb-4'>Nasze usługi w zakresie odpraw obejmują:</p>
						<ol className='list-decimal space-y-4 text-lg'>
							<li>
								<p>
									<span className='font-bold'>Odprawy celne:</span> Pomagamy w przeprowadzaniu odpraw
									celnych, wypełniając wszelkie formalności i zapewniając zgodność z międzynarodowymi
									przepisami. Dzięki temu Twoje towary szybko i sprawnie przekraczają granice.
								</p>
							</li>
							<li>
								<p>
									<span className='font-bold'>Dokumentacja transportowa:</span> Zajmujemy się
									przygotowaniem i weryfikacją niezbędnej dokumentacji, w tym listów przewozowych,
									faktur handlowych i certyfikatów pochodzenia, co minimalizuje ryzyko opóźnień i
									błędów.
								</p>
							</li>
							<li>
								<p>
									<span className='font-bold'>Doradztwo prawne:</span> Oferujemy wsparcie w zakresie
									przepisów celnych i handlowych, pomagając uniknąć potencjalnych problemów prawnych
									oraz zapewniając płynność operacji.
								</p>
							</li>
							<li>
								<p>
									<span className='font-bold'>Obsługa celno-skarbowa:</span> Zapewniamy kompleksową
									obsługę celno-skarbową, w tym płatności cła i podatków, co pozwala na szybkie i
									sprawne przeprowadzanie transakcji międzynarodowych.
								</p>
							</li>
							<li>
								<p>
									<span className='font-bold'>Zarządzanie ryzykiem:</span> Identyfikujemy i
									minimalizujemy ryzyka związane z odprawami, takie jak opóźnienia, dodatkowe koszty
									czy problemy prawne, co zapewnia większe bezpieczeństwo i przewidywalność operacji.
								</p>
							</li>
						</ol>
					</div>
					<div className='m-4 text-center'>
						<p className='text-lg mb-2'>Z naszymi usługami odpraw, Twoja firma zyska:</p>
						<ul className='list-disc list-inside space-y-2 text-lg'>
							<li>Szybsze przeprowadzanie odpraw celnych</li>
							<li>Precyzyjnie przygotowaną dokumentację</li>
							<li>Sprawne kontrole i inspekcje</li>
							<li>Pełne wsparcie prawne</li>
							<li>Skuteczne zarządzanie ryzykiem</li>
						</ul>
					</div>
					<div className='mt-6'>
						<p className='italic text-center text-lg'>
							Skontaktuj się z nami już dziś, aby dowiedzieć się, jak możemy usprawnić proces odpraw w
							Twojej firmie i zapewnić Ci pełne wsparcie na każdym etapie transportu towarów!
						</p>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default Odprawy
