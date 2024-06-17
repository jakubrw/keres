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
						absolute='true'
						src={'/svg/parallax/bg.svg'}
						className='z-30 
						'
						loading='eager'
						alt='part of landscape graphic'></Image>
				</ParallaxBannerLayer>
				<ParallaxBannerLayer speed={-50}>
					<Image
						fill
						absolute='true'
						src={'/svg/parallax/5.svg'}
						className='z-30 parallax parallax-5'
						loading='lazy'
						alt='part of landscape graphic'></Image>
				</ParallaxBannerLayer>
				<ParallaxBannerLayer speed={-50}>
					<Image
						fill
						absolute='true'
						src={'/svg/parallax/4.svg'}
						className='z-10 parallax parallax-4'
						alt='part of landscape graphic'></Image>
				</ParallaxBannerLayer>
				<ParallaxBannerLayer speed={-30} className='parallax'>
					<div className='relative parallax-logo-container' alt='part of landscape graphic'></div>
				</ParallaxBannerLayer>
				<ParallaxBannerLayer speed={-50}>
					<Image
						fill
						absolute='true'
						src={'/svg/parallax/3.svg'}
						className='z-10 parallax parallax-3'
						alt='part of landscape graphic'></Image>
				</ParallaxBannerLayer>
				<ParallaxBannerLayer speed={-30}>
					<Image
						fill
						absolute='true'
						src={'/svg/parallax/2.svg'}
						className='z-10 parallax parallax-2'
						alt='part of landscape graphic'></Image>
				</ParallaxBannerLayer>
				<ParallaxBannerLayer speed={-50}>
					<Image
						fill
						absolute='true'
						src={'/svg/parallax/1.svg'}
						className='z-10 parallax parallax-1'
						alt='part of landscape graphic'></Image>
				</ParallaxBannerLayer>
			</ParallaxBanner>
		</ParallaxProvider>
	)
}

export default Parallax
