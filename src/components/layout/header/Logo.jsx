import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from '../../../assets/images/logo_bubble.png'

const Logo = () => {
	return (
		<Link to='/'>
			<img alt='' src={LogoImage} width='90' draggable={false} />
		</Link>
	)
}

export default Logo
