import React, { useState } from 'react'
import Controls from './Controls'
import VideosLine from './videosLine/VideosLine'

import t1Img from '../../../../assets/images/thumbnails/img1.jpeg'
import t2Img from '../../../../assets/images/thumbnails/img2.jpg'
import t3Img from '../../../../assets/images/thumbnails/img3.jpg'
import t4Img from '../../../../assets/images/thumbnails/img4.jpg'
import t5Img from '../../../../assets/images/thumbnails/img5.jpg'

const initialSlides = [
	{
		_id: 'wef2we',
		thumbnailPath: t1Img,
		videoUrl: 'https://youtu.be/aUi6fQRUP1o',
	},
	{
		_id: '124fqw',
		thumbnailPath: t2Img,
		videoUrl: 'https://youtu.be/RSwtAdKKekw',
	},
	{
		_id: '125fqw',
		thumbnailPath: t3Img,
		videoUrl: 'https://youtu.be/Cter-6KlOTs',
	},
	{
		_id: '53uyi5k',
		thumbnailPath: t4Img,
		videoUrl: 'https://youtu.be/_shFpVWbBLo',
	},
	{
		_id: 'w*xfgr',
		thumbnailPath: t5Img,
		videoUrl: 'https://youtu.be/KoNKWAp3gbk',
	},
]

const Carousel = () => {
	const [slides] = useState(initialSlides)
	const [currentIndex, setCurrentIndex] = useState(0)
	return (
		<div className='mt-24'>
			<div className='flex items-center mb-5'>
				<Controls
					slidesLength={slides.length}
					setCurrentIndex={setCurrentIndex}
					currentIndex={currentIndex}
				/>
			</div>
			<VideosLine
				slides={slides}
				setCurrentIndex={setCurrentIndex}
				currentIndex={currentIndex}
			/>
		</div>
	)
}

export default Carousel
