'use client'

import Image from 'next/image'
import Link from 'next/link'

CardOffert.defaultProps = {
	cardURL: 'https://flowbite.com/docs/images/examples/image-1@2x.jpg',
	cardTitle: 'Domyślny tytuł karty',
	cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, alias.',
}

function CardOffert({ cardTitle, cardText }) {
	return (
		<>
			<h2
				style={{
					textShadow: `0px 0px 6px ${'black'}`,
				}}
				className='font-bold uppercase text-xl'>
				{cardTitle}
			</h2>
			<p
				style={{
					textShadow: `0px 0px 6px ${'black'}`,
				}}>
				{cardText}
			</p>
			<Link href={`/oferta/${cardTitle}`} className='h-auto w-auto p-1 bg-black-100 pointer-events-auto'>
				dowiedz się więcej
			</Link>
			<Image fill src={`/cards/${cardTitle}.jpg`} className='-z-10 blur-[2px]' alt='photo of cokolwiek' />
		</>
	)
}

export default CardOffert
