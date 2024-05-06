import { useState } from 'react'
import FormExtended from './FormExtended'
import FormBasic from './FormBasic'

const ContactForm = () => {
	const [formType, setFormType] = useState('simple')

	return (
		<>
			<div className='overflow-hidden  self-start justify-between rounded-md border-0 mb-4 text-gray-900 shadow-inner shadow-gray-900 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-dark sm:text-sm sm:leading-6'>
				<button
					type='button'
					onClick={() => {
						setFormType('simple')
					}}
					className={`w-1/2 p-1 ${formType == 'simple' ? 'bg-green-dark' : ''}`}>
					prosty
				</button>

				<button
					type='button'
					onClick={() => {
						setFormType('extended')
					}}
					className={`w-1/2 p-1 ${formType == 'extended' ? 'bg-green-dark' : ''}`}>
					zaaw.
				</button>
			</div>
			{formType == 'simple' ? <FormBasic /> : <FormExtended />}
			
		</>
	)
}

export default ContactForm
