import React from 'react'
import BgImage from '../../assets/images/backimage.jpg'
import Header from './header/Header'
import SocialMedia from './SocialMedia'

const Layout = ({ children }) => {
	return (
		<div
			className='p-12 relative bg-cover bg-no-repeat'
			style={{
				backgroundImage: `url(${BgImage})`,
			}}
		>
			<div className='gradient' />
			<div className='relative z-1'>
				<Header />
				<SocialMedia />
				{children}
			</div>
		</div>
	)
}

export default Layout
