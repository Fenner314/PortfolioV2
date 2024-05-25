import { CardData } from 'models/card-data.interface'
import SKSS from 'assets/images/SKSS.png'
import Tim from 'assets/images/timothy-anderson-trombone-homepage.png'
import GW from 'assets/images/GW_Motorsports_Website_Thumbnail.png'

export const projectsData: CardData[] = [
	{
		imageSrc: SKSS,
		title: 'SentriLock',
		description: `A real-estate showing service integrated with electronic 
      lockboxes, SentriLock’s primary product. Built primarily with PHP, 
			NestJS, and Angular.`,
		type: 'software',
		link: 'https://sentrilock.com',
		index: 1.0,
	},
	{
		imageSrc: Tim,
		title: 'Timtothy Anderson Trombone',
		description: `Portfolio for professional trombonist, Timothy Anderson.`,
		type: 'software',
		link: 'https://timothyandersontrombone.com',
		index: 2.0,
	},
	{
		imageSrc: GW,
		title: 'GW Motorsports LLC',
		description: `Website for DFW area motorsports shop demonstrating 
			specializations and allowing for easy contact.`,
		type: 'software',
		link: 'https://gwmotorsportsllc.com',
		index: 3.0,
	},
]
