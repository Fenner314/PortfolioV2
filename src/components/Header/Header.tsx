import React, { FC, useContext } from 'react'
import './Header.scss'
import Navigation from 'components/Navigation/Navigation'
import { Context } from 'App'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
	const { controls, setControls } = useContext(Context)

	return (
		<div className='Header'>
			<div className='inner'>
				<div className='controls'>
					<label htmlFor='software' className='control'>
						<input
							type='checkbox'
							defaultChecked={controls.software}
							onChange={(e) =>
								setControls((prev: any) => ({ ...prev, software: e.target.checked }))
							}
							name='software'
							id='software'
						/>
						Software Development
					</label>
					<label htmlFor='music' className='control'>
						<input
							type='checkbox'
							defaultChecked={controls.music}
							onChange={(e) =>
								setControls((prev: any) => ({ ...prev, music: e.target.checked }))
							}
							name='music'
							id='music'
						/>
						Music
					</label>
				</div>
				<div className='header'>
					<h1 className='title'>Jacob Fenner</h1>
					<div className='sub-titles'>
						<h3>Software Developer | Consultant</h3>
					</div>
					<p className='tag'>
						I help businesses grow by building engaging and inspiring digital
						products.
					</p>
				</div>
				<Navigation></Navigation>
			</div>
		</div>
	)
}

export default Header
