import { CardData } from './card-data.interface'

export interface ExperienceData extends CardData {
	startYear?: number
	endYear?: number | string
}
