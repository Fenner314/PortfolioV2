import React, { FC, ReactNode } from 'react'
import './Section.scss'

interface SectionProps {
	children: ReactNode
	id: string
}

const Section: FC<SectionProps> = ({ children, id }) => (
	<div className='Section' id={id}>
		{children}
	</div>
)

export default Section
