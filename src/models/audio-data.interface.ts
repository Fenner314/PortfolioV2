import { CardData } from './card-data.interface'

export interface MediaData extends CardData {
	media: {
		type: 'audio' | 'video'
		src: string
		format: 'audio/mpeg'
		active?: boolean
		playing?: boolean
	}
}
