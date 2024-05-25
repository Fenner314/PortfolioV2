import { Control } from './controls.interface'

export interface CardData {
	startYear?: number
	endYear?: number | string
	imageSrc?: string
	title: string
	org?: string
	description: string
	technical?: string[]
	type: Control
	index: number
	link?: string
}
