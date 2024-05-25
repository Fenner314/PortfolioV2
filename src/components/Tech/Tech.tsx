import React, { FC } from 'react'
import './Tech.scss'
import { Control } from 'models/controls.interface'

interface TechProps {
	text: string
	type: Control
}

const Tech: FC<TechProps> = ({ text, type }) => (
	<div className={`Tech ${type}`}>{text}</div>
)

export default Tech
