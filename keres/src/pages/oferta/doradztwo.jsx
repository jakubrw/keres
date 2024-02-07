import '@/app/globals.css'

import Header from '../../app/components/Header'

const Doradztwo = () => {
	return (
		<div className='min-h-screen'>
			<Header logoWidth={30} logoHeight={30} titleName={'Doradztwo'} />
			<div className='flex justify-center mx-8'>
				<p className='text-ml'>
					Nasza działalność w zakresie spedycji obejmuje kompleksową organizację transportu, zarządzanie
					łańcuchem dostaw oraz monitorowanie przesyłek. Zaufaj nam, abyś mógł skoncentrować się na swoim
					biznesie, a my zajmiemy się sprawnym i bezpiecznym przemieszczaniem Twoich towarów.
				</p>
			</div>
		</div>
	)
}

export default Doradztwo
