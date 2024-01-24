import '@/app/globals.css'
import Image from 'next/image'
import Header from '../../app/components/Header'

const Transport = () => {
	return (
		<div className='min-h-screen'>
			<Header logoWidth={30} logoHeight={30} titleName={'Transport'} />

			<div className='mx-8 rounded-lg bg-gradient-to-r from-yellow-light to-green-light -translate-y-px group-hover:my-rotate-y-180 w-full h-full duration-1000'>
				<div className='flex'>
					<div className='h-full flex flex-col items-center my-12 gap-8 text-center px-1'>
						<h3 className='my-4 text-2xl font-bold uppercase'>transport lokalny</h3>
						<p className='text-sm'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste tempore ipsam commodi beatae
							voluptas inventore fugiat repellat consequuntur! Excepturi voluptate fuga veniam iusto?
							Sequi aperiam exercitationem debitis ad quod assumenda?
						</p>
						<ul className='list-none font-medium'>
							<li className='hover:text-sky-400'>Lorem ipsum dolor sit.</li>
							<li className='hover:text-sky-400'>Lorem ipsum dolor sit.</li>
							<li className='hover:text-sky-400'>Lorem ipsum dolor sit.</li>
							<li className='hover:text-sky-400'>Lorem ipsum dolor sit.</li>
						</ul>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Transport
