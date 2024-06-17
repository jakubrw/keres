import { PhotoIcon } from '@heroicons/react/24/outline'
import dynamic from 'next/dynamic'


const DynamicLeaflet = dynamic(() => import('@/app/components/Leaflet'), {
	ssr: false,
	loading: () => <div className='h-full grid place-items-center'><PhotoIcon className='h-20 text-neutral-600' /></div>,
})

const LeafletDynamic = () => {
	return <DynamicLeaflet />
}

export default LeafletDynamic
