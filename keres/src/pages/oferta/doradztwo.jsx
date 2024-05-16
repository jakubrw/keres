import '@/app/globals.css'

import Header from '../../app/components/Header'
import Image from 'next/image'
import styles from '../../app/globals.css'

const Doradztwo = () => {
	return (
		<div className='min-h-screen'>
			<Header logoWidth={30} logoHeight={30} titleName={'Doradztwo'} />
			<div className={`${styles.animationContainer} relative h-[400px] w-[400px]`}>
				{/* Apply animation to each image */}
				<div className={'animation animation-layer1 '} />
				<div className={'animation animation-back animation-layer2 '} />
				<div className={'animation animation-back animation-layer3 '} />
				<div className={'animation animation-face animation-layer4 '} />
			</div>
		</div>
	)
}

export default Doradztwo
