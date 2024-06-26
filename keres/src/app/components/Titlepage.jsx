'use client'
import Image from 'next/image'
import Counter from './Counters/Counter'
import Footer from './Footer'
import Typewriter from 'typewriter-effect'
import { useInView } from 'framer-motion'
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import Parallax from '@/pages/Parallax'

const TitlePage = () => {
	const container = useRef(null)
	const ref = useRef(null)
	const counter = useRef(null)
	const isInView = useInView(ref, { once: true })

	const handleScroll = () => {
		container.current.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<div className='flex flex-col items-center'>
			<motion.div
				className='h-[120vh] w-full relative overflow-hidden'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				<div className='absolute'>
					<motion.div
						className='h-screen w-screen relative'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1.2 }}>
						<div className='h-[60vh] w-auto aspect-[3/4] absolute-center z-[100]'>
							<motion.div
								className='w-[40vw] aspect-square relative m-auto md:w-[30vw] lg:w-[20vw] xl:w-[15vw]'
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 1.5 }}>
								<Image
									src='/keres.svg'
									fill
									className='z-0 parallax-logo'
									alt='keres logo'
									priority={true}
								/>
							</motion.div>
							<div className='absolute top-1/2 transform -translate-y-1/2 w-full z-0'>
								<motion.div
									className='flex flex-col items-center text-blue-dark'
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1 }}>
									<h1 className='text-6xl uppercase font-black lg:text-7xl xl:text-8xl'>keres</h1>
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
									<ChevronDoubleDownIcon
										onClick={handleScroll}
										className='h-8 text-neutral-600 animate-bounce mt-4 cursor-pointer'
										aria-label='Scroll down'
									/>
								</motion.div>
							</div>
						</div>
						<Parallax />
					</motion.div>
				</div>
			</motion.div>

			<motion.section
				ref={container}
				className='min-h-screen -translate-y-px text-lg flex flex-col items-center px-4 md:min-h-full md:mx-[10%] md:w-1/2 '
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 1.2 }}>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='my-4 p-8 text-center text-xl italic bg-gradient-to-r from-yellow-light to-green-light rounded-lg shadow-lg'>
					<p>
						Naszą misją jest Państwa zadowolenie z wykonywanych przez nas usług i utrzymywanie stałych
						współprac. Zaufanie którym nas obdarzacie jest siłą napędową do stałego doskonalenia i
						podnoszenia kwalifikacji.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className='flex h-full flex-col items-center rounded-lg p-8 md:h-full lg:h-full xl:h-full bg-white bg-opacity-80 shadow-xl  md:mb-4'>
					<div className=''>
						<motion.div
							className='mb-5 antialiased'
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}>
							<p>
								Realizujemy zlecenia spedycji i transportu drogowego każdego typu. Naszą flagową ofertą
								są transporty ekspresowe, dostawy oraz doładunki i transporty nienormatywne. Naszym
								celem jest stały rozwój oferty i podnoszenie jakości usług oferowanych klientom.
								Rozwijamy zaplecze spedycyjno-logistyczne, stale powiększamy naszą flotę samochodową
								oraz zespół pracowników.
							</p>
						</motion.div>
						<motion.div
							className='ring-1 ring-slate-900/5 h-auto bg-white bg-opacity-40 w-full overflow-hidden rounded-lg bg-gradient-to-r from-yellow-light to-green-light shadow-md'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.5, duration: 1 }}>
							<div
								ref={ref}
								style={{
									opacity: isInView ? 1 : 0,
									transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
								}}
								className='px-8 py-6 text-center text-5xl overflow-hidden flex flex-col [&>*]:p-2 
								xl:px-2 xl:flex-row xl:[&>*]:w-1/2 zl:[&>*]:p-4 xl:flex-wrap '>
								<div>
									<Counter valueCounter={12000} state={isInView} delay={1} />
									<p ref={counter} className='text-lg uppercase font-bold'>
										tyś. przejechanych kilometrów
									</p>
								</div>
								<div>
									<Counter valueCounter={7200} state={isInView} delay={100} />
									<p className='text-lg uppercase font-bold'>wykonanych zleceń</p>
								</div>
								<div>
									<Counter valueCounter={2190} state={isInView} delay={200} />
									<p className='text-lg font-bold uppercase'>dni współpracy</p>
								</div>
								<div>
									<Counter id={4} valueCounter={26} state={isInView} delay={300} />
									<p className='text-lg uppercase font-bold'>odwiedzonych krajów</p>
								</div>
							</div>
						</motion.div>
						<motion.div
							className='mt-4 p-4 bg-gradient-to-r from-yellow-light to-green-dark rounded-lg italic shadow-lg'
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}>
							<p className='text-center'>
								Wyróżniamy się naszym indywidualnym podejściem do powierzonych nam zleceń i stałym
								zaangażowaniem. W związku z tym jeśli są sytuacje niespodziewane działamy ekspresowo,
								ponieważ wiemy o tym od razu!
							</p>
						</motion.div>
					</div>
				</motion.div>
			</motion.section>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.1, duration: 0.6 }}
				className='w-full flex flex-col items-center'>
				<Footer />
			</motion.div>
		</div>
	)
}

export default TitlePage
