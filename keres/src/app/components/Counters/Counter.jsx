'use client'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import 'odometer/themes/odometer-theme-default.css'
import 'odometer/themes/odometer-theme-car.css'

let loadedCallback = null
let loaded = false

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

const Counter = ({ valueCounter, state, delay }) => {
	const [odometerLoaded, setOdometerLoaded] = useState(loaded)
	const [odometerValue, setOdometerValue] = useState(0)

	loadedCallback = () => {
		if (state == true) {
			setOdometerLoaded(true)
		}
	}

	useEffect(() => {
		setOdometerValue(parseInt('0'.repeat(String(valueCounter).length)))
	}, [odometerLoaded])

	if (state == true) {
		setTimeout(() => {
			setOdometerValue(valueCounter)
		}, delay)
	}

	return (
		<div>
			<Odometer value={odometerValue} theme={'car'} auto='true' />
		</div>
	)
}
export default Counter
