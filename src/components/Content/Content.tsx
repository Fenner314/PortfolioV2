import React, { FC, useContext } from 'react'
import './Content.scss'
import { Context } from 'App'
import About from 'components/About/About'
import Section from 'components/Common/Section/Section'

interface ContentProps {}

const Content: FC<ContentProps> = () => {
	const { controls } = useContext(Context)

	return (
		<div
			className='Content'
			style={{
				display: 'flex',
				flexDirection: 'column',
				height: 'max-content',
				paddingTop: '4rem',
				paddingBottom: '6rem',
			}}
		>
			<Section id='about'>
				<About />
			</Section>
			{controls.music ? (
				<div
					style={{ display: 'block', width: '100%', height: '100vh' }}
					id='education'
				>
					Education
				</div>
			) : null}
			<div
				style={{ display: 'block', width: '100%', height: '100vh' }}
				id='experience'
			>
				Experience
			</div>
			{controls.software ? (
				<div
					style={{ display: 'block', width: '100%', height: '100vh' }}
					id='projects'
				>
					Projects
				</div>
			) : null}
			{controls.music ? (
				<div
					style={{ display: 'block', width: '100%', height: '100vh' }}
					id='media'
				>
					Media
				</div>
			) : null}
			<div
				style={{ display: 'block', width: '100%', height: '100vh' }}
				id='contact'
			>
				Contact
			</div>
		</div>
	)
}

export default Content
