import React, { FC } from 'react'
import './Content.scss'

interface ContentProps {}

const Content: FC<ContentProps> = () => (
	<div className='Content' style={{ display: 'flex', flexDirection: 'column' }}>
		<div style={{ display: 'block', width: '100%', height: '100vh' }} id='about'>
			About
		</div>
		<div
			style={{ display: 'block', width: '100%', height: '100vh' }}
			id='experience'
		>
			Experience
		</div>
		<div
			style={{ display: 'block', width: '100%', height: '100vh' }}
			id='projects'
		>
			Projects
		</div>
		<div
			style={{ display: 'block', width: '100%', height: '100vh' }}
			id='contact'
		>
			Contact
		</div>
	</div>
)

export default Content
