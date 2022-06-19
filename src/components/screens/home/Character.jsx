import React from 'react'
import CharacterImg from '../../../assets/images/MayorGrom.png'

const Character = () => {
	return (
		<div
			className='absolute -bottom-12
		-right-1 w-1/2'
		>
			<img
				draggable={false}
				alt=''
				src={CharacterImg}
				style={{ maxHeight: 750 }}
			/>
		</div>
	)
}

export default Character
