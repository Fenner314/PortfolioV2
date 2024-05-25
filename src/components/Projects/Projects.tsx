import React, { FC } from 'react'
import './Projects.scss'
import { projectsData } from 'helpers/data/projects.data'
import Card from 'components/Common/Card/Card'

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
	const renderProjects = () =>
		projectsData.map((project, index) => <Card key={index} data={project} />)

	return <div className='Experience'>{renderProjects()}</div>
}

export default Projects
