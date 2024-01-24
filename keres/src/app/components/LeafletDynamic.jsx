import dynamic from 'next/dynamic'
import { useEffect } from 'react'

const DynamicLeaflet = dynamic(() => import('@/app/components/Leaflet'), {
	ssr: false,
	loading: () => <p>Loading...</p>,
})

const LeafletDynamic = () => {
	// useEffect(() => { const parentWidth = document.getElementByName('').parentElement.offsetWidth;})
	return <DynamicLeaflet />
}

export default LeafletDynamic
