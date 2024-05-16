import React, { FC } from 'react'
import './Header.scss'
import Navigation from 'components/Navigation/Navigation'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
	<div className='Header'>
		<div className='inner'>
			<div className='controls'>
				<label htmlFor='software' className='control'>
					<input type='checkbox' name='software' id='software' />
					Software Development
				</label>
				<label htmlFor='music' className='control'>
					<input type='checkbox' name='music' id='music' />
					Music
				</label>
			</div>
			<div className='header'>
				<h1 className='title'>Jacob Fenner</h1>
				<div className='sub-titles'>
					<h3>Software Developer | Consultant</h3>
				</div>
				<p className='tag'>
					I help businesses grow by building engaging and inspiring digital products.
				</p>
			</div>
			<Navigation></Navigation>
		</div>
	</div>
)

export default Header
