import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import LeafletDynamic from '@/app/components/LeafletDynamic'
import Counter from './Counter'
import {PhotoIcon} from '@heroicons/react/24/outline'

const TitlePage = () => {
	return (
		<div className=''>
			<section className='h-screen flex flex-col place-items-center justify-between pt-10'>
				<Image className='relative' src='/logo.svg' alt='keres logo' width={200} height={200} priority />
				<div className='h-1/2 w-3/4 ring-1 ring-slate-900/5 rounded-lg bg-white bg-opacity-20 backdrop-blur-lg rounded flex justify-center place-items-center'>
					<PhotoIcon className='h-20 text-neutral-600'/>
				</div>
				<div className='flex justify-center px-8 py-2  text-center'>
					Naszą misją jest Państwa zadowolenie ze współpracy z nami a zaufanie, którym nas Państwo obdarzają
					jest dla nas siłą napędzającą do jeszcze doskonalszego wykonywania zleceń
				</div>
				<div className='w-full h-1/3 bg-[url(/waves.svg)] bg-no-repeat bg-bottom flex flex-col place-items-center pt-20'>
					<Typewriter
						className='text-xl text-red-700'
						options={{
							strings: ['Dobry interes z firmą <strong>KERES!</strong>', 'Zobacz więcej!'],
							autoStart: true,
							loop: true,
						}}
					/>
					<Image
						className='relative z-0'
						src='/chevron-double-down.svg'
						alt='keres logo'
						width='30'
						height='30'
					/>
				</div>
			</section>
			<section className='h-screen bg-gradient-to-r from-yellow-light to-green-light -translate-y-px'>
				<div className='flex min-h-screen flex-col items-center rounded-lg p-10 px-5 pb-12'>
					<div className=''>
						<div className='text-center mb-5'>
							Realizujemy zlecenia spedycji i transportu drogowego każdego typu. Naszą flagową ofertą są
							transporty ekspresowe, dostawy oraz doładunki i transporty nienormatywne. Naszym celem jest
							stały rozwój oferty i podnoszenie jakości usług oferowanych klientom. Rozwijamy zaplecze
							spedycyjno-logistyczne, stale powiększamy naszą flotę samochodową oraz zespół pracowników.
						</div>

						<div className='ring-1 ring-slate-900/5 rounded-lg bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg space-y-3 text-lg px-8 py-6 text-center '>
							<Counter valueCounter={10000} idCounter={1} />
							<p>Przejechanych kilometrów </p>
							<Counter valueCounter={3000} idCounter={2} />
							<p>Zleceń</p>
							<Counter valueCounter={2190} idCounter={3} />
							<p>Dni razem</p>
						</div>
						<div className='text-center mt-10 text-sm'>
							Wyróżniamy się naszym indywidualnym podejściem do powierzonych nam zleceń i stałym
							zaangażowaniem. W związku z tym jeśli są sytuacje niespodziewane działamy ekspresowo,
							ponieważ wiemy o tym od razu!
						</div>
					</div>
				</div>
			</section>
			<section className='border-t-2 flex flex-col items-center p-10'>
				<h3 className='text-lg font-semibold'>Znajdź nas!</h3>
				<LeafletDynamic className='h-20 w-20' />
			</section>
		</div>
	)
}

export default TitlePage
