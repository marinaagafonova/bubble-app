import React from 'react'
import { Link } from 'react-router-dom'
import { list } from './list'
import bubbleLogoImage from '../../../../assets/images/main-logo.png'

const Navigation = () => {
	return (
		<ul className='list-none flex items-center'>
			{list.map((title, idx) => (
				<li key={title} className='inline-block px-4'>
					{idx !== 2 ? (
						<Link
							to={`/${title.toLowerCase()}`}
							className='block text-white opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out'
						>
							{title}
						</Link>
					) : (
						<img
							src={bubbleLogoImage}
							alt=''
							width={50}
							draggable={false}
							className='block mx-5'
						/>
					)}
				</li>
			))}
		</ul>
	)
}

export default Navigation
