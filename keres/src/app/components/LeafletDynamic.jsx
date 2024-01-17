import dynamic from 'next/dynamic'

const DynamicLeaflet = dynamic(() => import('@/app/components/Leaflet'), {
	ssr: false,
	loading: () => <p>Loading...</p>,
})

const LeafletDynamic = () => {
	return <DynamicLeaflet className='' />
}

export default LeafletDynamic
