import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'

import '../app/parallax.css'
import Image from 'next/image'

function Parallax() {
	return (
		<ParallaxProvider className=''>
			<ParallaxBanner style={{}} className='h-[120vh] w-[100vh] '>
				<ParallaxBannerLayer speed={-50} className='h-screen parallax parallax-bg '>
					<Image
						style={{ objectFit: 'cover' }}
						fill
						absolute
						src={'/svg/test/bg.svg'}
						className='z-30 '></Image>
				</ParallaxBannerLayer>
				<ParallaxBannerLayer speed={-50}>
					<Image fill absolute src={'/svg/test/5.svg'} className='z-30 parallax parallax-5'></Image>
				</ParallaxBannerLayer>
				<ParallaxBannerLayer speed={-50}>
					<Image fill absolute src={'/svg/test/4.svg'} className='z-10 parallax parallax-4'></Image>
				</ParallaxBannerLayer>
				<ParallaxBannerLayer speed={-30} className='parallax'>
					<div className='relative parallax-logo-container'>
						
					</div>
				</ParallaxBannerLayer>
				<ParallaxBannerLayer speed={-50}>
					<Image fill absolute src={'/svg/test/3.svg'} className='z-10 parallax parallax-3'></Image>
				</ParallaxBannerLayer>
				<ParallaxBannerLayer speed={-30}>
					<Image fill absolute src={'/svg/test/2.svg'} className='z-10 parallax parallax-2'></Image>
				</ParallaxBannerLayer>
				<ParallaxBannerLayer speed={-50}>
					<Image fill absolute src={'/svg/test/1.svg'} className='z-10 parallax parallax-1'></Image>
				</ParallaxBannerLayer>
			</ParallaxBanner>
		</ParallaxProvider>
	)
}

export default Parallax
