import '../app/globals.css'

import Header from '../app/components/Header'

const Team = () => {
	return (
		<div className='min-h-screen'>
			<Header logoWidth={30} logoHeight={30} titleName={'Kariera'} />
			<img src='svg/team.svg' alt='' className='px-10 my-2' />
			<div>
				<div>Aktualne oferty pracy</div>
				<p>opis oferty pracy</p>
				<p>formularz zgłoszeniowy</p>
				<p>wgraj plik</p>
			</div>
		</div>
	)
}

export default Team
