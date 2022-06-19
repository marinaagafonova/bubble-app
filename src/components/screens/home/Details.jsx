import React from 'react'

const Details = () => {
	return (
		<div className='absolute right-1 bottom-0 flex items-center text-white font-bold text-lg'>
			<div
				className='pr-2'
				style={{ borderRight: '2px solid rgba(255, 255, 255, .3)' }}
			>
				2021
			</div>
			<div
				className='px-2'
				style={{ borderRight: '2px solid rgba(255, 255, 255, .3)' }}
			>
				Bubble Studios
			</div>
			<div className='px-2'>
				<span className='bg-white text-black rounded-sm px-2 py-1 mr-2'>
					КиноПоиск
				</span>
				<span>7.1</span>
			</div>
		</div>
	)
}

export default Details