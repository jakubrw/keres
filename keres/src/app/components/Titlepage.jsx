'use client'
import Image from 'next/image'

import Counter from './Counters/Counter'
import Footer from './Footer'

import Typewriter from 'typewriter-effect'
import { motion, useInView } from 'framer-motion'
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import { useRef, useEffect, useState } from 'react'

import entrySvg from '../../../public/graphics/Company.svg'

const TitlePage = () => {
	const container = useRef(null)
	const ref = useRef(null)
	const counter = useRef(null)
	const isInView = useInView(ref, { once: true })
	const counterInView = useInView(counter, { once: true })

	useEffect(() => {
		console.log('Element is in view: ', isInView)
	}, [isInView])
	return (
		<div className='h-auto flex flex-col place-items-center'>
			<motion.div
				initial={{ height: '100vh' }}
				animate={{ height: '10vh' }}
				transition={{ type: 'circIn', delay: 1, duration: 4 }}
				className='w-screen mt-3 z-20'>
				<motion.div
					initial={{ height: '20%' }}
					animate={{ height: '3vh' }}
					className='relative  w-full'
					transition={{ type: 'circIn', delay: 0.1, duration: 4 }}>
					<Image src='/keres name.svg' alt='comapny name in logo' fill />
				</motion.div>
				<motion.div
					initial={{ height: '60%' }}
					animate={{ height: '7vh' }}
					className='relative  w-full'
					transition={{ type: 'circIn', delay: 0.2, duration: 4 }}>
					<Image src='/keres.svg' alt='company logo' fill />
				</motion.div>
			</motion.div>
			<motion.div
				initial={{ display: 'none' }}
				animate={{ display: 'block' }}
				transition={{ delay: 3.2, duration: 2 }}>
				<section className='h-[92vh] flex flex-col place-items-center  '>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 3.2, duration: 2 }}
						className='h-2/5 w-full flex flex-col justify-end relative top-0'>
						<Image alt='graphic image of company' src={entrySvg} fill className='-translate-y-20' />
						<div className='z-10'>
							<h2 className='text-center text-xl font-medium '>
								Naszą misją jest Państwa zadowolenie ze współpracy z nami a zaufanie, którym nas Państwo
								obdarzają jest dla nas siłą napędzającą do jeszcze doskonalszego wykonywania zleceń
							</h2>
						</div>
					</motion.div>
					<div className='justify-self-center px-6 py-1 text-center text-xl'></div>

					<div className='w-screen h-2/3 bg-[url(/waves.svg)]  bg-no-repeat bg-bottom flex flex-col place-items-center justify-center justify-self-end'>
						<Typewriter
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
					ref={container}
					className='min-h-screen bg-gradient-to-r from-yellow-light to-green-light -translate-y-px'>
					<motion.div className='flex min-h-screen flex-col items-center rounded-lg p-10 px-5 pb-12'>
						<div className=''>
							<div className='text-center mb-5 antialiased'>
								Realizujemy zlecenia spedycji i transportu drogowego każdego typu. Naszą flagową ofertą
								są transporty ekspresowe, dostawy oraz doładunki i transporty nienormatywne. Naszym
								celem jest stały rozwój oferty i podnoszenie jakości usług oferowanych klientom.
								Rozwijamy zaplecze spedycyjno-logistyczne, stale powiększamy naszą flotę samochodową
								oraz zespół pracowników.
							</div>
							<div className='ring-1 ring-slate-900/5 h-auto bg-white bg-opacity-40  w-full overflow-hidden  rounded-lg'>
								<div
									ref={ref}
									style={{
										opacity: isInView ? 1 : 0,
										transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
									}}
									className='space-y-3 px-8 py-6 text-center text-5xl overflow-hidden flex flex-col'>
									<Counter valueCounter={1000} state={isInView} delay={1} />
									<p ref={counter} className='text-lg uppercase font-bold'>
										Przejechanych kilometrów{' '}
									</p>
									<Counter valueCounter={3000} state={isInView} delay={100} />
									<p className='text-lg uppercase font-bold'>wykonanych zleceń</p>
									<Counter valueCounter={2190} state={isInView} delay={200} />
									<p className='text-lg font-bold uppercase'>dni współpracy</p>

									<Counter id={4} valueCounter={26} state={isInView} delay={300} />
									<p className='text-lg uppercase font-bold'>odwiedzonych krajów</p>
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
			</motion.div>
		</div>
	)
}

export default TitlePage
