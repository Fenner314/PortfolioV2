import React, { FC, useContext } from 'react'
import './Projects.scss'
import { projectsData } from 'helpers/data/projects.data'
import Card from 'components/Common/Card/Card'
import MobileNavItem from 'components/Navigation/MobileNavItem'
import { Context } from 'App'

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
	const { isMobile } = useContext(Context)
	const renderProjects = () =>
		projectsData.map((project, index) => {
			return <Card key={index} data={project} />
		})

	return (
		<div className='Projects'>
			{isMobile && <MobileNavItem id='projects' label='Project' />}
			{renderProjects()}
		</div>
	)
}

export default Projects
