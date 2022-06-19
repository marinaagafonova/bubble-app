import React from 'react'
import CharacterImg from '../../../assets/images/MayorGrom.png'
import LazyLoad from 'react-lazyload'

const Character = () => {
	return (
		<div
			className='absolute -bottom-12
		-right-1 w-1/2'
		>
			<LazyLoad once>
				<img
					draggable={false}
					alt=''
					src={CharacterImg}
					style={{ maxHeight: 750 }}
				/>
			</LazyLoad>
		</div>
	)
}

export default Character
