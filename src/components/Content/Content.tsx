import React, { FC, useContext } from 'react'
import './Content.scss'
import { Context } from 'App'
import About from 'components/About/About'
import Section from 'components/Common/Section/Section'
import Experience from 'components/Experience/Experience'
import Education from 'components/Education/Education'
import Projects from 'components/Projects/Projects'
import Media from 'components/Media/Media'
import Contact from 'components/Contact/Contact'
import FunFacts from 'components/FunFacts/FunFacts'

interface ContentProps {}

const Content: FC<ContentProps> = () => {
	const { controls, isMobile } = useContext(Context)

	return (
		<div
			className={`Content ${isMobile && 'mobile'}`}
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
			{!controls.music && !controls.software && (
				<Section id='fun-facts'>
					<FunFacts />
				</Section>
			)}
			{(controls.music || controls.software) && (
				<Section id='education'>
					<Education />
				</Section>
			)}
			{(controls.music || controls.software) && (
				<Section id='experience'>
					<Experience />
				</Section>
			)}
			{controls.software && (
				<Section id='projects'>
					<Projects />
				</Section>
			)}
			{controls.music && (
				<Section id='media'>
					<Media />
				</Section>
			)}
			<Section id='contact'>
				<Contact />
			</Section>
		</div>
	)
}

export default Content
