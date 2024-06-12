'use client'

import Link from 'next/link'

CardOffert.defaultProps = {
	cardURL: 'https://flowbite.com/docs/images/examples/image-1@2x.jpg',
	cardTitle: 'Domyślny tytuł karty',
	cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, alias.',
}

function CardOffert({ cardTitle, cardText }) {
	return (
		<>
			<h2 className='font-bold uppercase text-2xl'>{cardTitle}</h2>
			<p className='self-stretch text-left text-lg'>{cardText}</p>
			<Link href={`/oferta/${cardTitle}`} className='h-auto w-auto p-1 bg-black-100 pointer-events-auto text-right'>
				zapytaj o więcej
			</Link>
		</>
	)
}

export default CardOffert
