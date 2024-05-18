import React, { FC, useContext } from 'react'
import './Header.scss'
import Navigation from 'components/Navigation/Navigation'
import { Context } from 'App'
import { ReactComponent as Github } from '../../assets/icons/github.svg'
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg'
import { ReactComponent as SHT } from '../../assets/icons/sht.svg'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
	const { controls, setControls } = useContext(Context)

	return (
		<div className='Header'>
			<div className='inner'>
				<div className='content'>
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
				<div className='footer'>
					<Github class='link-icon' width={24} alt='Github icon' />
					<LinkedIn class='link-icon' width={24} alt='LinkedIn icon' />
					<SHT
						class='link-icon'
						width={24}
						height={24}
						alt='Seven Hills Technology icon'
					/>
				</div>
			</div>
		</div>
	)
}

export default Header
