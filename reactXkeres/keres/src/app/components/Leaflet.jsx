'use client'
import 'leaflet/dist/leaflet.css'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
const position = [54.38917, 18.589]

const customIcon = new Icon({
	iconUrl: '/keresik.svg',
	iconSize: [24, 24],
})

const Leaflet = () => {
	return (
		<MapContainer center={position} zoom={16} scrollWheelZoom={false} className='h-full w-full z-0'>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker position={position} icon={customIcon}>
				<Popup className='text-xs'>
					<p className='uppercase font-bold'>keres</p>
					<p>Grunwaldzka 219/9</p>
					<p className='font-bold'>80-266 Gdańsk</p>
				</Popup>
			</Marker>
		</MapContainer>
	)
}

export default Leaflet
