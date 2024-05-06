import Header from '../app/components/Header'
import ContactForm from '@/app/components/Forms/ContactForm'

const Files = () => {
	return (
		<div className='min-h-screen'>
			<Header logoWidth={30} logoHeight={30} titleName={'contact form'} />
			<ContactForm />
		</div>
	)
}

export default Files
