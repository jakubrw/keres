'use client'
import Image from 'next/image'

import Counter from './Counters/Counter'
import Footer from './Footer'

import Typewriter from 'typewriter-effect'
import { useInView } from 'framer-motion'
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import { useRef, useEffect, useState } from 'react'
import { useViewportScroll, motion, useTransform, useMotionValue } from 'framer-motion'
import Parallax from '@/pages/Parallax'

const TitlePage = () => {
	const container = useRef(null)
	const ref = useRef(null)
	const counter = useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<div className='flex flex-col '>
			<div className='h-[120vh] w-screen relative'>
				<div className='absolute '>
					<div className='h-screen w-screen  relative '>
						<div className='h-[60vh] w-auto aspect-[3/4] absolute-center z-[100]'>
							<div className='w-[50vw] h-[30vh] relative m-auto'>
								<Image fill absolute src={'/keres.svg'} className='z-0 parallax-logo'></Image>
							</div>
							<div className='top-[50] absolute w-full z-0'>
								<div className='flex flex-col items-center text-blue-dark'>
									<h1 className='text-8xl uppercase font-black'>keres</h1>

									<Typewriter
										options={{
											strings: [
												'Dobry interes z firmą <strong>KERES!</strong>',
												'Zobacz więcej!',
											],
											autoStart: true,
											loop: true,
											delay: 20,
											deleteSpeed: 35,
										}}
									/>
									<ChevronDoubleDownIcon className='h-4 text-neutral-600 animate-bounce' />
								</div>
							</div>
						</div>
						<Parallax></Parallax>
					</div>
				</div>
			</div>
			<section
				ref={container}
				className='min-h-screen bg-gradient-to-r from-yellow-light to-green-light -translate-y-px text-lg'>
				<motion.div className='flex min-h-screen flex-col items-center rounded-lg p-10 px-5 pb-12'>
					<div className=''>
						<div className='text-center  mb-5 antialiased'>
							Realizujemy zlecenia spedycji i transportu drogowego każdego typu. Naszą flagową ofertą są
							transporty ekspresowe, dostawy oraz doładunki i transporty nienormatywne. Naszym celem jest
							stały rozwój oferty i podnoszenie jakości usług oferowanych klientom. Rozwijamy zaplecze
							spedycyjno-logistyczne, stale powiększamy naszą flotę samochodową oraz zespół pracowników.
						</div>
						<div className='ring-1 ring-slate-900/5 h-auto bg-white bg-opacity-40  w-full overflow-hidden  rounded-lg'>
							<div
								ref={ref}
								style={{
									opacity: isInView ? 1 : 0,
									transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
								}}
								className='space-y-3 px-8 py-6 text-center text-5xl overflow-hidden flex flex-col'>
								<Counter valueCounter={12000} state={isInView} delay={1} />
								<p ref={counter} className='text-lg uppercase font-bold'>
									przejechanych kilometrów{' '}
								</p>
								<Counter valueCounter={7200} state={isInView} delay={100} />
								<p className='text-lg uppercase font-bold'>wykonanych zleceń</p>
								<Counter valueCounter={2190} state={isInView} delay={200} />
								<p className='text-lg font-bold uppercase'>dni współpracy</p>

								<Counter id={4} valueCounter={26} state={isInView} delay={300} />
								<p className='text-lg uppercase font-bold'>odwiedzonych krajów</p>
							</div>
						</div>
						<div className='text-center mt-10'>
							Wyróżniamy się naszym indywidualnym podejściem do powierzonych nam zleceń i stałym
							zaangażowaniem. W związku z tym jeśli są sytuacje niespodziewane działamy ekspresowo,
							ponieważ wiemy o tym od razu!
						</div>
					</div>
				</motion.div>
			</section>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.1, duration: 0.6 }}
				className='w-full'>
				<Footer />
			</motion.div>
		</div>
	)
}

export default TitlePage
