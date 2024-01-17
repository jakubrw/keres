'use client'

import Link from 'next/link'

CardOffert.defaultProps = {
	cardURL: 'https://flowbite.com/docs/images/examples/image-1@2x.jpg',
	cardTitle: 'Domyślny tytuł karty',
	cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, alias.',
}

function CardOffert({ cardURL, cardTitle, cardText, cardLink }) {
	return (
		<div className=''>
			<div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
				<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{cardTitle}</h5>

				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{cardText}</p>
				<Link
					href={`/${cardLink}`}
					className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-lime-800'>
					Więcej
				</Link>
			</div>
		</div>
	)
}

export default CardOffert
