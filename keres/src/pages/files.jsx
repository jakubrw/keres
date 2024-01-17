import '../app/globals.css'

import Header from '../app/components/Header'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
const Files = () => {
	return (
		<div className='min-h-screen'>
			<Header logoWidth={30} logoHeight={30} titleName={'Pliki'} />
			<img src='svg/files.svg' alt='' className='px-10 my-2' />
			<div className='flex flex-col items-center my-10 gap-10'>
				<div className='flex gap-2 items-center'>
					<p>plik 1</p>
					<ArrowDownTrayIcon className='h-4' />
				</div>
				<div className='flex gap-2 items-center'>
					<p>plik 2</p>
					<ArrowDownTrayIcon className='h-4' />
				</div>
				<div className='flex gap-2 items-center'>
					<p>plik 3</p>
					<ArrowDownTrayIcon className='h-4' />
				</div>
			</div>
		</div>
	)
}

export default Files
