import React, { FC } from 'react'
import './Education.scss'
import { educationData } from 'helpers/data/education.data'
import Card from 'components/Common/Card/Card'

interface EducationProps {}

const Education: FC<EducationProps> = () => {
	const renderEducation = () =>
		educationData.map((ed, index) => <Card key={index} data={ed} />)

	return <div className='Experience'>{renderEducation()}</div>
}

export default Education
