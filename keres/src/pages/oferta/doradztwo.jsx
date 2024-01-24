import '@/app/globals.css'

import Header from '../../app/components/Header'

const Doradztwo = () => {
	return (
		<div className='min-h-screen'>
			<Header logoWidth={30} logoHeight={30} titleName={'Doradztwo'} />
			<div className='flex justify-center'>
				<div className='w-1/2 flex flex-col items-center'>
					<p className='font-bold w-1/3 text-2xl'>
						Nasza działalność w zakresie spedycji obejmuje kompleksową organizację transportu, zarządzanie
						łańcuchem dostaw oraz monitorowanie przesyłek. Zaufaj nam, abyś mógł skoncentrować się na swoim
						biznesie, a my zajmiemy się sprawnym i bezpiecznym przemieszczaniem Twoich towarów.
					</p>
				</div>
				<div className='flex flex-col items-center  w-1/2 text-4xl'>
					<ul>
						<li>elastyczność</li>
						<li>elastyczność</li>
						<li>elastyczność</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Doradztwo
