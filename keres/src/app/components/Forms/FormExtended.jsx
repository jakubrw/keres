import { useState } from 'react'
import Link from 'next/link'

const FormExtended = () => {
	const [formExtendedTransportType, setFormExtendedTransportType] = useState('local')
	const handleExtendedTransportButton = x => {
		setFormExtendedTransportType(x)
	}
	const [formExtendedTransportFill, setFormExtendedTransportFill] = useState('FTL')
	const handleExtendedTransportFillButton = x => {
		setFormExtendedTransportFill(x)
	}
	return (
		<div className='overflow-y-auto h-screen self-start max-h-[60vh] w-full max-w-[500px] '>
			<div className='mt-2 '>
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
					className='block w-full rounded-md border-0 p-2 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					placeholder=''
				/>
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
					className='block w-full rounded-md border-0 p-2 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					placeholder=''
				/>
				<label htmlFor='car-type' className='block text-sm font-medium leading-6 text-gray-900'>
					Typ samochodu
				</label>
				<input
					maxLength={30}
					autoComplete='off'
					name='car-type'
					type='text'
					list='car-types'
					id='car-type'
					className='block w-full rounded-md border-0 p-2 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					placeholder=''
				/>
				<datalist id='car-types'>
					<option value='bus' />
					<option value='solówka' />
					<option value='naczepa' />
					<option value='niskopodwozie' />
					<option value='inne' />
				</datalist>
				<div className='block text-sm font-medium leading-6 text-gray-900'>
					<p className='block text-sm font-medium leading-6 text-gray-900'>Transport</p>
					<div className='overflow-hidden flex justify-between rounded-md  mb-4 shadow-inner shadow-stone-500 ring-inset ring-stone-500 placeholder:text-stone-200 focus:ring-2 focus:ring-inset focus:ring-green-dark sm:text-sm sm:leading-6'>
						<button
							type='button'
							onClick={() => {
								handleExtendedTransportButton('local')
							}}
							className={`w-1/2 p-1 ${
								formExtendedTransportType == 'local' ? 'bg-green-dark light 600' : ''
							}`}>
							krajowy
						</button>

						<button
							type='button'
							onClick={() => {
								handleExtendedTransportButton('international')
							}}
							className={`w-1/2 p-1 ${
								formExtendedTransportType == 'international' ? 'bg-green-dark light 600' : ''
							}`}>
							międzynarodowy
						</button>
					</div>
				</div>

				{formExtendedTransportType == 'international' ? (
					<>
						<label htmlFor='country' className='block text-sm font-medium leading-6 text-gray-900'>
							Kraj
						</label>
						<input
							required
							maxLength={20}
							autoComplete='off'
							name='country'
							type='text'
							id='country'
							className='block w-full rounded-md border-0 p-2 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-dark light 600 sm:text-sm sm:leading-6'
						/>
					</>
				) : (
					''
				)}
				<div className='block text-sm font-medium leading-6 text-gray-900'>
					<p className='block text-sm font-medium leading-6 text-gray-900'>Załadunek</p>
					<div
						name='cargo'
						className='overflow-hidden flex justify-between rounded-md  mb-4 shadow-inner shadow-stone-500 ring-inset ring-stone-500 placeholder:text-stone-200 focus:ring-2 focus:ring-inset focus:ring-green-dark sm:text-sm sm:leading-6'>
						<button
							type='button'
							onClick={() => {
								handleExtendedTransportFillButton('FTL')
							}}
							className={`w-1/2 p-1 ${
								formExtendedTransportFill == 'FTL' ? 'bg-green-dark light 600' : ''
							}`}>
							Cały pojazd (FTL)
						</button>

						<button
							type='button'
							onClick={() => {
								handleExtendedTransportFillButton('LTL')
							}}
							className={`w-1/2 p-1 ${
								formExtendedTransportFill == 'LTL' ? 'bg-green-dark light 600' : ''
							}`}>
							Doładunek (LTL)
						</button>
					</div>
				</div>

				{formExtendedTransportFill == 'LTL' ? (
					<>
						<p className='block text-sm font-medium leading-6 text-gray-900'>Wymiary</p>
						<input
							required
							maxLength={50}
							autoComplete='off'
							name='extension'
							type='text'
							id='ltlValue'
							className='block w-full rounded-md border-0 p-2 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-dark light 600 sm:text-sm sm:leading-6'
						/>
					</>
				) : (
					''
				)}

				<label htmlFor='message' className='block text-sm font-medium leading-6 text-gray-900'>
					Treść wiadomości
				</label>
				<textarea
					required
					maxLength={200}
					autoComplete='off'
					name='message'
					id='message'
					className='block w-full rounded-md border-0 p-2 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-dark light 600 sm:text-sm sm:leading-6'
					placeholder=''
					style={{ maxHeight: '120px' }}
				/>
				<div className='flex gap-2 mx-2 text-pretty'><input type='checkbox' name='agreement' id='agreement'/>
				<label className='block text-sm font-medium leading-6 text-gray-900' htmlFor='agreement' >Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z <Link href='/policy' className="font-bold underline" >polityką prywatności</Link>.</label></div>
			</div>
		</div>
	)
}

export default FormExtended
