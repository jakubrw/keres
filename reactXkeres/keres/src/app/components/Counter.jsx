'use client'
const Counter = () => {
	const counterNumber = (endingNumber, time, loop) => {
		let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
		for (let i = 0; i < numbers.length; i++) {
			const endingNumber = numbers[i]
		}
	}
	return (
		<div>
			<div className='bg-white mx-10 my-10 px-10 py-8 rounded text-center border-2 border-gray-600'>
				<div>Zaufało nam już</div>
				<div className='flex'>
					<div
						id='counter-1'
						className='border-2 border-gray-800 rounded-l w-full h-14 grid items-center text-3xl font-black'>
						1
					</div>
					<div
						id='counter-2'
						className='border-y-2 border-gray-800 w-full h-14 grid items-center text-3xl font-black'>
						2
					</div>
					<div
						id='counter-3'
						className='border-2 border-gray-800 w-full h-14 grid items-center text-3xl font-black'>
						3
					</div>
					<div
						id='counter-4'
						className='border-y-2 border-gray-800 w-full h-14 grid items-center text-3xl font-black'>
						4
					</div>
					<div
						id='counter-5'
						className='border-2 border-gray-800 rounded-r w-full h-14 grid items-center text-3xl font-black text-white bg-black'>
						5
					</div>
				</div>
				<div>klientów</div>
			</div>
		</div>
	)
}
export default Counter
