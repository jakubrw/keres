import '@/app/globals.css'

import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const Ubezpieczenia = () => {
	return (
		<div className='min-h-screen'>
			<Header
				logoWidth={30}
				logoHeight={30}
				titleName={'Ubezpieczenia'}
				subtitleName={'Bezpieczeństwo i Ochrona Twojego Biznesu'}
			/>

			<div className='flex flex-col justify-center items-center mx-6'>
				<div className='m-2'>
					<div>
						<h2 className=''>
							Ubezpieczenia są kluczowym elementem ochrony Twojego biznesu przed ryzykiem i
							nieprzewidywalnymi sytuacjami.
						</h2>
						<p>Nasze usługi ubezpieczeniowe obejmują:</p>
					</div>
					<div className='mx-4'>
						<ol className='list-decimal [&>li>p>span]:font-bold'>
							<li>
								<p>
									<span>Doradztwo ubezpieczeniowe: </span>Oferujemy kompleksowe doradztwo w zakresie
									doboru odpowiednich polis ubezpieczeniowych, dostosowanych do specyfiki Twojego
									biznesu i potrzeb.
								</p>
							</li>
							<li>
								<p>
									<span>Polisy ubezpieczeniowe: </span>Zapewniamy szeroki zakres polis
									ubezpieczeniowych, obejmujących m.in. ubezpieczenia mienia, odpowiedzialności
									cywilnej, transportu towarów i floty pojazdów.
								</p>
							</li>
							<li>
								<p>
									<span>Ubezpieczenia dla firm transportowych: </span>Specjalizujemy się w
									ubezpieczeniach dla firm transportowych, oferując ochronę przed ryzykiem związanym z
									działalnością logistyczną i transportową.
								</p>
							</li>
							<li>
								<p>
									<span>Szybka likwidacja szkód: </span>Gwarantujemy szybką i profesjonalną likwidację
									szkód, zapewniając Ci spokój i bezpieczeństwo w przypadku nieprzewidzianych zdarzeń.
								</p>
							</li>
							<li>
								<p>
									<span>Dostosowanie oferty do potrzeb: </span>Dostosowujemy naszą ofertę ubezpieczeń
									do indywidualnych potrzeb i wymagań Twojego biznesu, zapewniając kompleksową ochronę
									na każdym etapie działalności.
								</p>
							</li>
						</ol>
					</div>
				</div>
				<div className='m-2'>
					<p>Z naszymi usługami ubezpieczeniowymi, Twój biznes zyska:</p>
					<ul className='list-disc mx-4'>
						<li>Bezpieczeństwo i ochronę przed ryzykiem</li>
						<li>Spokój w przypadku nieprzewidzianych zdarzeń</li>
						<li>Dostosowane polisy do specyfiki działalności</li>
						<li>Profesjonalną obsługę i szybką likwidację szkód</li>
					</ul>
				</div>
				<div className='my-4'>
					<p className='italic text-center'>
						Skontaktuj się z nami już dziś, aby dowiedzieć się, jak nasze usługi ubezpieczeniowe mogą
						zapewnić ochronę Twojego biznesu i zminimalizować ryzyko finansowe!
					</p>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Ubezpieczenia
