import '../app/globals.css'

import Header from '../app/components/Header'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
const Flota = () => {
	return (
		<div className='min-h-screen'>
			<Header logoWidth={30} logoHeight={30} titleName={'Flota'} />
			<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
				<ExclamationTriangleIcon className='h-10 text-red-500' />
				<p>GitHub</p>
				<p>Branch error 500</p>
			</div>
		</div>
	)
}

export default Flota
