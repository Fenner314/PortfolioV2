import React, { FC, useContext, useEffect, useState } from 'react'
import './Education.scss'
import { educationData } from 'helpers/data/education.data'
import Card from 'components/Common/Card/Card'
import { Context } from 'App'
import { EducationData } from 'models/education-data.interface'
import { certificationData } from 'helpers/data/certifications.data'

interface EducationProps {}

const Education: FC<EducationProps> = () => {
	const { controls } = useContext(Context)

	const [data, setData] = useState<EducationData[]>([])

	useEffect(() => {
		let edData: EducationData[] = []

		if (controls.music) {
			edData = edData.concat(educationData)
		}
		if (controls.software) {
			edData = edData.concat(certificationData)
		}
		setData(edData)
	}, [controls])

	const renderEducation = () => {
		const testData = data.map((ed, index) => <Card key={ed.title} data={ed} />)
		return testData
	}

	return <div className='Experience'>{renderEducation()}</div>
}

export default Education
