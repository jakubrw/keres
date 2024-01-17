import '../app/globals.css'

import Header from '../app/components/Header'

const About = () => {
	return (
		<card className='min-h-screen'>
			<Header logoWidth={30} logoHeight={30} />
			<div className='bg-white mx-10 my-5 px-2 py-8 rounded text-center border-2 border-gray-600'>
				<div className='text-xl uppercase font-bold pb-4'>O FIRMIE</div>
				<div className='text-lg italic'>Dobry interes z firmą KERES!</div>
				<div className='text-sm py-4 px-6 text-center'>
					Realizujemy zlecenia spedycji i transportu drogowego każdego typu. Naszą flagową ofertą są
					transporty ekspresowe, dostawy oraz doładunki i transporty nienormatywne. Naszym celem jest stały
					rozwój oferty i podnoszenie jakości usług oferowanych klientom. Rozwijamy zaplecze
					spedycyjno-logistyczne, stale powiększamy również naszą flotę samochodową oraz zespół pracowników.
				</div>
			</div>
			<div className='bg-white mx-10 my-5 px-2 py-8 rounded text-center border-2 border-gray-600'>
				<div className='text-xl uppercase font-bold pb-4'>Title</div>
				<div className='text-lg'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, similique?
				</div>
				<div className='text-sm py-4 px-6 text-center'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid obcaecati voluptatem rem minima
					quis hic repellendus sunt. Placeat, reprehenderit est?
				</div>
				<div className='text-xs font-bold'>Lorem ipsum dolor sit amet.</div>
			</div>
			<div className='bg-white mx-10 my-5 px-2 py-8 rounded text-center border-2 border-gray-600'>
				<div className='text-xl uppercase font-bold pb-4'>Title</div>
				<div className='text-lg'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, similique?
				</div>
				<div className='text-sm py-4 px-6 text-center'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid obcaecati voluptatem rem minima
					quis hic repellendus sunt. Placeat, reprehenderit est?
				</div>
				<div className='text-xs font-bold'>Lorem ipsum dolor sit amet.</div>
			</div>
		</card>
	)
}

export default About
