import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

const Error = () => {
	return (
		<div className='h-screen w-sceen relative'>
			<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
				<div className='flex flex-col items-center'>
					<DevicePhoneMobileIcon height={120} width={120} strokeWidth={1} strokeOpacity={0.2} />
					<p className='text-2xl uppercase'>otwórz na urządzeniu </p>
					<p className='text-2xl'>mobilnym </p>
					<p className='text font-light'>(website in progress)</p>
				</div>
			</div>
		</div>
	)
}

export default Error
