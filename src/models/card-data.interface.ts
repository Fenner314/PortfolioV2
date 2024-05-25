import { Control } from './controls.interface'

export interface CardData {
	dataType: 'experience' | 'education' | 'project' | 'media'
	imageSrc?: string
	title: string
	org?: string
	description: string
	technical?: string[]
	type: Control
	index: number
	link?: string
}
