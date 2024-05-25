import { CardData } from './card-data.interface'

export interface MediaData extends CardData {
	mediaType: 'audio' | 'video'
	audioSrc?: string
	videoSrc?: string
}
