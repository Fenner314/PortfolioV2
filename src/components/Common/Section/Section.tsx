import React, { FC, ReactNode, useContext } from 'react'
import './Section.scss'
import { Context } from 'App'

interface SectionProps {
	children: ReactNode
	id: string
}

const Section: FC<SectionProps> = ({ children, id }) => {
	const { isMobile } = useContext(Context)
	return (
		<div className={`Section ${isMobile && 'mobile'}`} id={id}>
			{children}
		</div>
	)
}

export default Section
