import React, { FC, ReactNode } from 'react'
import './Emphasis.scss'

interface EmphasisProps {
	children: ReactNode
}

const CommonEmphasis: FC<EmphasisProps> = ({ children }) => (
	<div className='Emphasis'>{children}</div>
)

export default CommonEmphasis
