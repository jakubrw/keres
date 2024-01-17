import '../app/globals.css'

import Header from '../app/components/Header'


const Team = () => {
	return (
		<div className='min-h-screen'>
			<Header logoWidth={30} logoHeight={30} titleName={'Zespół'} />
			<img src='svg/team.svg' alt='' className='px-10 my-2' />
		</div>
	)
}

export default Team
