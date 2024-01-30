import { PhotoIcon } from '@heroicons/react/24/outline'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'


const DynamicLeaflet = dynamic(() => import('@/app/components/Leaflet'), {
	ssr: false,
	loading: () => <div className='h-full animate-pulse grid place-items-center'><PhotoIcon className='h-20 text-neutral-600' /></div>,
})

const LeafletDynamic = () => {
	// useEffect(() => { const parentWidth = document.getElementByName('').parentElement.offsetWidth;})
	return <DynamicLeaflet />
}

export default LeafletDynamic
