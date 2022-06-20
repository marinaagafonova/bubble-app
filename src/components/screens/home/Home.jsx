import React from 'react'
import Layout from '../../layout/Layout'
import Content from './Content'
import Details from './Details'
import Character from './Character'
import Carousel from './carousel/Carousel'
import moize from 'moize'

const Home = () => {
	return (
		<Layout>
			<Content />
			<Carousel />
			<Character />
			<Details />
		</Layout>
	)
}

export default moize(Home, { isReact: true })
