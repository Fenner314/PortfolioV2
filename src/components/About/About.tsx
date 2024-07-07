import React, { FC, useContext } from 'react'
import './About.scss'
import SoftwareAbout from './TextOptions/SoftwareAbout'
import MusicAbout from './TextOptions/MusicAbout'
import SoftwareMusicAbout from './TextOptions/SoftwareMusicAbout'
import { Context } from 'App'
import SelfAbout from './TextOptions/SelfAbout'

interface AboutProps {}

const About: FC<AboutProps> = () => {
	const { controls } = useContext(Context)
	const renderAboutSection = () => {
		if (controls.music && controls.software) {
			return <SoftwareMusicAbout />
		} else if (controls.software) {
			return <SoftwareAbout />
		} else if (controls.music) {
			return <MusicAbout />
		} else {
			return <SelfAbout />
		}
	}

	return <div className='About'>{renderAboutSection()}</div>
}

export default About
