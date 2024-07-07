import React, { FC, ReactNode, useContext } from 'react'
import './Emphasis.scss'
import { getControlValue } from 'helpers/functions/get-control-value.helper'
import { Context } from 'App'

interface EmphasisProps {
	children: ReactNode
	onMouseEnter?: (e?: any) => any
	onMouseOut?: (e?: any) => any
}

const CommonEmphasis: FC<EmphasisProps> = ({
	children,
	onMouseEnter,
	onMouseOut,
}) => {
	const { controls } = useContext(Context)
	return (
		<div
			className={`Emphasis ${getControlValue(controls)}`}
			onMouseEnter={onMouseEnter}
			onMouseOut={onMouseOut}
		>
			{children}
		</div>
	)
}

export default CommonEmphasis
