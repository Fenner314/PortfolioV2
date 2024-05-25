import React, { FC, useContext } from 'react'
import './Content.scss'
import { Context } from 'App'
import About from 'components/About/About'
import Section from 'components/Common/Section/Section'
import Experience from 'components/Experience/Experience'
import Education from 'components/Education/Education'
import Projects from 'components/Projects/Projects'

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
			{controls.music && (
				<Section id='education'>
					<Education />
				</Section>
			)}
			<Section id='experience'>
				<Experience />
			</Section>
			{controls.software && (
				<Section id='projects'>
					<Projects />
				</Section>
			)}
			{controls.music ? <div id='media'>Media</div> : null}
			<div id='contact'>Contact</div>
		</div>
	)
}

export default Content
