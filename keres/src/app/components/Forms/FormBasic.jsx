import Link from 'next/link'

const FormBasic = () => {
	return (
		<div className='mb-auto w-full max-w-[500px]'>
			<div className=' mt-2 rounded-md shadow-sm"'>
				<label htmlFor='name' className='block text-sm font-medium leading-6 text-gray-900'>
					Imię
				</label>
				<input
					required
					maxLength={30}
					autoComplete='name'
					name='name'
					type='text'
					id='name'
					className='block w-full rounded-md border-0 p-2 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-light sm:text-sm sm:leading-6'
					placeholder=''
				/>

				<label htmlFor='tel' className='block text-sm font-medium leading-6 text-gray-900'>
					Telefon
				</label>
				<div className='flex overflow-hidden rounded-md focus-within:ring-2 focus-within:ring-inset focus-within:ring-yellow-light sm:max-w-md'>
					<span className='flex select-none items-center px-1 text-gray-500 bg-gray-200 sm:text-sm'>+48</span>
					<input
						maxLength={9}
						autoComplete='tel'
						name='tel'
						type='tel'
						id='tel'
						className='block flex-1 border-0 py-1.5 pl-1 text-gray-900  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
						placeholder=''
					/>
				</div>
				<label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
					Email
				</label>
				<input
					required
					maxLength={50}
					autoComplete='email'
					name='email'
					type='email'
					id='email'
					className='block w-full rounded-md border-0 p-2 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-light sm:text-sm sm:leading-6'
					placeholder=''
				/>
				<label htmlFor='text' className='block text-sm font-medium leading-6 text-gray-900'>
					Treść wiadomości
				</label>
				<textarea
					required
					autoComplete='off'
					name='text'
					id='text'
					maxLength={200}
					className='block w-full rounded-md border-0 p-2 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-light sm:text-sm sm:leading-6 max-h-[200px]'
					placeholder=''
				/>
				<div className='flex gap-2 mt-2 text-pretty'>
					<input required type='checkbox' name='agreement' id='agreement' />
					<label className='block text-sm font-medium leading-6 text-gray-900' htmlFor='agreement'>
						Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{' '}
						<Link href='/policy' className='font-bold underline'>
							polityką prywatności
						</Link>
						.
					</label>
				</div>
			</div>
		</div>
	)
}

export default FormBasic
