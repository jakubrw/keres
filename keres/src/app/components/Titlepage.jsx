'use client'
import Image from 'next/image'

import Counter from './Counters/Counter'
import Counter2 from './Counters/Counter2'
import Counter3 from './Counters/Counter3'
import Counter4 from './Counters/Counter4'
import Footer from './Footer'

import Typewriter from 'typewriter-effect'
import { motion, useInView } from 'framer-motion'
import { PhotoIcon, ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import { useRef, useEffect, useState } from 'react'

const TitlePage = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<div className='h-auto flex flex-col place-items-center'>
			<motion.div
				initial={{ height: '100vh' }}
				animate={{ height: '15vh' }}
				transition={{ type: 'circIn', delay: 1, duration: 3 }}
				className=' w-screen bg-r-700 relative mt-4 mb-[5vh]'>
				<Image className='relative' src='/logo.svg' alt='keres logo' fill />
			</motion.div>
			<section className='h-[80vh] flex flex-col place-items-center justify-end'>
				<div className='h-2/3 w-3/4 ring-1 ring-slate-900/5 rounded-lg bg-white bg-opacity-20 backdrop-blur-lg rounded flex justify-center place-items-center'>
					<PhotoIcon className='h-20 text-neutral-600' />
				</div>
				<div className='justify-self-center px-6 py-1 text-center text-xl'>
					Naszą misją jest Państwa zadowolenie ze współpracy z nami a zaufanie, którym nas Państwo obdarzają
					jest dla nas siłą napędzającą do jeszcze doskonalszego wykonywania zleceń
				</div>
				<div className='w-screen h-2/3 bg-[url(/waves.svg)]  bg-no-repeat bg-bottom flex flex-col place-items-center justify-center justify-self-end'>
					<Typewriter
						className='text-xl text-red-700'
						options={{
							strings: ['Dobry interes z firmą <strong>KERES!</strong>', 'Zobacz więcej!'],
							autoStart: true,
							loop: true,
						}}
					/>
					<ChevronDoubleDownIcon className='h-4 text-neutral-600 animate-bounce' />
				</div>
			</section>
			<section
				ref={ref}
				className='min-h-screen bg-gradient-to-r from-yellow-light to-green-light -translate-y-px'>
				<motion.div className='flex min-h-screen flex-col items-center rounded-lg p-10 px-5 pb-12'>
					<div className=''>
						<div className='text-center mb-5'>
							Realizujemy zlecenia spedycji i transportu drogowego każdego typu. Naszą flagową ofertą są
							transporty ekspresowe, dostawy oraz doładunki i transporty nienormatywne. Naszym celem jest
							stały rozwój oferty i podnoszenie jakości usług oferowanych klientom. Rozwijamy zaplecze
							spedycyjno-logistyczne, stale powiększamy naszą flotę samochodową oraz zespół pracowników.
						</div>

						<div className='space-y-3 px-8 py-6 text-center text-5xl overflow-hidden flex flex-col'>
							<Counter valueCounter={1000} />
							<p className='text-lg'>Przejechanych kilometrów </p>
							<Counter2 valueCounter={3000} />
							<p className='text-lg'>Zleceń</p>
							<Counter3 valueCounter={2190} />
							<p className='text-lg'>Dni razem</p>
						</div>

						<div className='ring-1 ring-slate-900/5 h-96 bg-white bg-opacity-40 backdrop-blur-xl w-full overflow-hidden relative rounded-lg'>
							<Image
								src='/svg/map.svg'
								fill={true}
								className='object-cover h-full w-full blur-[2px]'
								alt='Map of countries visited by company'></Image>
							<div className='h-full b-full backdropblur-xl'>
								<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-center'>
									<Counter4 id={4} valueCounter={26} />
									<p className='text-lg pt-2'>Odzwiedzonych krajów</p>
								</div>
							</div>
						</div>
						<div className='text-center mt-10 text-sm'>
							Wyróżniamy się naszym indywidualnym podejściem do powierzonych nam zleceń i stałym
							zaangażowaniem. W związku z tym jeśli są sytuacje niespodziewane działamy ekspresowo,
							ponieważ wiemy o tym od razu!
						</div>
					</div>
				</motion.div>
			</section>
			<Footer />
		</div>
	)
}

export default TitlePage
