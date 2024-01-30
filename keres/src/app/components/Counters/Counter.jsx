'use client'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import 'odometer/themes/odometer-theme-default.css'
import 'odometer/themes/odometer-theme-car.css'

let loadedCallback = null
let loaded = false
const ArrayCounter = [2000, 3000, 2190]

const Odometer = dynamic(
	async () => {
		const mod = await import('react-odometerjs')
		loaded = true
		if (loadedCallback != null) {
			loadedCallback()
		}
		return mod
	},
	{
		ssr: false,
		loading: () => 0,
	}
)

const Counter = ({ before, valueCounter, after }) => {
	const [odometerLoaded, setOdometerLoaded] = useState(loaded)
	const [odometerValue, setOdometerValue] = useState(0)

	loadedCallback = () => {
		setOdometerLoaded(true)
	}

	useEffect(() => {
		if (odometerLoaded) {
			setOdometerValue(1)
		}
	}, [odometerLoaded])

	useEffect(() => {
		setOdometerValue(valueCounter)
	}, [odometerValue])

	return (
		<div>
			<div>{before}</div>
			<Odometer value={odometerValue} theme={'car'} auto='true' />
			<div>{after}</div>
		</div>
	)
}
export default Counter
