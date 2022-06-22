import React from 'react'
import PropTypes from 'prop-types'
import VideoItem from './VideoItem'
import { useModal } from '../../../../ModalProvider'

const VideosLine = ({ slides, currentIndex, setCurrentIndex }) => {
	
	const {setVideoUrl} = useModal()

	const playHandler = (idx, videoUrl) => {
		setCurrentIndex(idx)
		setVideoUrl(videoUrl)
	}

	const count = currentIndex * 192

	return (
		<div
			className='flex items-end h-32 transition-all duration-300 ease-linear'
			style={{ transform: currentIndex ? `translateX(-${count}px)` : '' }}
		>
			{slides.map((slide, idx) => {
				const isActive = currentIndex === idx
				return (
					<VideoItem
						key={slide._id}
						slide={slide}
						clickHandler={() => playHandler(idx, slide.videoUrl)}
						isActive={isActive}
					/>
				)
			})}
		</div>
	)
}

VideosLine.propTypes = {
	slides: PropTypes.array.isRequired,
	currentIndex: PropTypes.number.isRequired,
	setCurrentIndex: PropTypes.func.isRequired,
}

export default VideosLine
