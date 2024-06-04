import '@/app/globals.css'

import Header from '../../app/components/Header'
import Footer from '@/app/components/Footer'
const Odprawy = () => {
	return (
		<div className='min-h-screen'>
			<Header
				logoWidth={30}
				logoHeight={30}
				titleName={'Odprawy'}
				subtitleName={'Efektywność i Przejrzystość w Twojej Firmie'}
			/>

			<div className='flex flex-col justify-center items-center mx-6'>
				<div className='m-2'>
					<div>
						<h2 className=''>
							Odprawy to kluczowy element w zarządzaniu operacjami spedycyjno-transportowymi, zapewniający
							płynność i zgodność z przepisami.
						</h2>
						<p>Nasze usługi w zakresie odpraw obejmują:</p>
					</div>
					<div className='mx-4'>
						<ol className='list-decimal [&>li>p>span]:font-bold'>
							<li>
								<p>
									<span>Odprawy celne: </span>Pomagamy w przeprowadzaniu odpraw celnych, wypełniając
									wszelkie formalności i zapewniając zgodność z międzynarodowymi przepisami. Dzięki
									temu Twoje towary szybko i sprawnie przekraczają granice.
								</p>
							</li>
							<li>
								<p>
									<span>Dokumentacja transportowa: </span>Zajmujemy się przygotowaniem i weryfikacją
									niezbędnej dokumentacji, w tym listów przewozowych, faktur handlowych i certyfikatów
									pochodzenia, co minimalizuje ryzyko opóźnień i błędów.
								</p>
							</li>
							<li>
								<p>
									<span>Doradztwo prawne: </span>Oferujemy wsparcie w zakresie przepisów celnych i
									handlowych, pomagając uniknąć potencjalnych problemów prawnych oraz zapewniając
									płynność operacji.
								</p>
							</li>
							<li>
								<p>
									<span>Obsługa celno-skarbowa: </span>Zapewniamy kompleksową obsługę celno-skarbową,
									w tym płatności cła i podatków, co pozwala na szybkie i sprawne przeprowadzanie
									transakcji międzynarodowych.
								</p>
							</li>
							<li>
								<p>
									<span>Zarządzanie ryzykiem: </span>Identyfikujemy i minimalizujemy ryzyka związane z
									odprawami, takie jak opóźnienia, dodatkowe koszty czy problemy prawne, co zapewnia
									większe bezpieczeństwo i przewidywalność operacji.
								</p>
							</li>
						</ol>
					</div>
				</div>
				<div className='m-2'>
					<p>Z naszymi usługami odpraw, Twoja firma zyska:</p>
					<ul className='list-disc mx-4'>
						<li>Szybsze przeprowadzanie odpraw celnych</li>
						<li>Precyzyjnie przygotowaną dokumentację</li>
						<li>Sprawne kontrole i inspekcje</li>
						<li>Pełne wsparcie prawne</li>
						<li>Skuteczne zarządzanie ryzykiem</li>
					</ul>
				</div>
				<div className='my-4'>
					<p className='italic text-center'>
						Skontaktuj się z nami już dziś, aby dowiedzieć się, jak możemy usprawnić proces odpraw w Twojej
						firmie i zapewnić Ci pełne wsparcie na każdym etapie transportu towarów!
					</p>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Odprawy
