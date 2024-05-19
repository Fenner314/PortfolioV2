import React, { FC, ReactNode } from 'react'
import './TextBlock.scss'

interface TextBlockProps {
	children: ReactNode
}

const CommonTextBlock: FC<TextBlockProps> = ({ children }) => (
	<p className='TextBlock'>{children}</p>
)

export default CommonTextBlock
