import { MediaData } from 'models/audio-data.interface'
import Clarke from 'assets/audio/clarke-carnival-of-venice.mp3'
import Malaguena from 'assets/audio/malaguena.mp3'
import SeniorRecital from 'assets/audio/senior-recital.mp3'
import Grondahl from 'assets/audio/grondahl-concerto.mp3'

export const mediaData: MediaData[] = [
	{
		dataType: 'media',
		media: {
			type: 'audio',
			src: Clarke,
			format: 'audio/mpeg',
			active: false,
			playing: false,
		},
		title: 'Carnival of Venice, Herbert L. Clarke',
		description: `After performing this work solo with the Augustana band, 
        I performed this multiple times during a tour throughout China.`,
		type: 'music',
		index: 1.0,
	},
	{
		dataType: 'media',
		media: {
			type: 'audio',
			src: Grondahl,
			format: 'audio/mpeg',
			active: false,
			playing: false,
		},
		title: 'Trombone Concerto, Launy Grondahl',
		description: `I performed this solo with the Augustana Orchestra as a 
			result of winning the Concerto/Aria competition in 2018. Four total 
			winners were chosen from the university.`,
		type: 'music',
		index: 2.0,
	},
	{
		dataType: 'media',
		media: {
			type: 'audio',
			src: Malaguena,
			format: 'audio/mpeg',
			active: false,
			playing: false,
		},
		title: 'Malaguena Extreme and Variations arr. Jerry Ascione',
		description: `A trombone quartet arrangement of a popular jazz tune played 
			with the Augustana Band. Originally arranged for the US Air Force Band, I 
			wrote a grant so our university could get the funding to perform this. Our 
			quartet performed it memorized.`,
		type: 'music',
		index: 3.0,
	},
	{
		dataType: 'media',
		media: {
			type: 'audio',
			src: SeniorRecital,
			format: 'audio/mpeg',
			active: false,
			playing: false,
		},
		title: 'Senior Degree Recital',
		description: `The culmination of my undergraduate studies at Augustana 
			University. Inluces works by Mozart, Rabe, Pryor, Adler, Cosma, and Sparke on 
			alto trombone, tenor trombone, and euphonium`,
		type: 'music',
		index: 4.0,
	},
]
