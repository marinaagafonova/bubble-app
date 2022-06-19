import React from 'react'
import logoImg from '../../../assets/images/mayor_grom_Doc_Logo.png'

const Content = () => {
	return (
		<div className='mt-7 ml-14 w-1/2'>
			<img
				alt=''
				src={logoImg}
				className='mb-10 ml-14'
				draggable={false}
				style={{ maxHeight: 350 }}
			/>
			<div className='flex ml-5'>
				<p
					className='text-white opacity-70 leading-8 text-lg'
					style={{ maxWidth: '80%' }}
				>
					Майор полиции Игорь Гром известен всему Санкт-Петербургу пробивным
					характером и непримиримой позицией по отношению к преступникам всех
					мастей. Неимоверная сила, аналитический склад ума и неподкупность —
					всё это делает майора Грома идеальным полицейским. Но всё резко
					меняется с появлением человека в маске Чумного Доктора.
				</p>
			</div>
		</div>
	)
}

export default Content
