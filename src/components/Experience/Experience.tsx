import React, { FC, useCallback, useContext, useEffect, useState } from 'react'
import './Experience.scss'

import { Context } from 'App'
import {
	musicExperience,
	softwareExperience,
} from 'helpers/data/experience.data'
import Card from 'components/Common/Card/Card'
import { CardData } from 'models/card-data.interface'

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = () => {
	const { controls } = useContext(Context)
	const [experienceData, setExperienceData] = useState<CardData[]>([])

	const calculateExperience = useCallback(() => {
		let data: CardData[] = []

		if (controls.software) data = data.concat(softwareExperience)
		if (controls.music) data = data.concat(musicExperience)

		setExperienceData(data)
	}, [controls])

	useEffect(() => {
		calculateExperience()
	}, [controls, calculateExperience])

	const renderExperience = () =>
		experienceData.map((experience, index) => (
			<Card key={index} data={experience} />
		))

	return <div className='Experience'>{renderExperience()}</div>
}

export default Experience
