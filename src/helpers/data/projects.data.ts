import { CardData } from 'models/card-data.interface'
import SKSS from 'assets/images/SKSS.png'
import Azelo from 'assets/images/Azelo.png'
import Tim from 'assets/images/timothy-anderson-trombone-homepage.png'
import GW from 'assets/images/GW_Motorsports_Website_Thumbnail.png'
import SyntropiLogo from 'assets/images/SyntropiLogo.png'

import { ProjectData } from 'models/project-data.interface'

export const projectsData: ProjectData[] = [
	{
		dataType: 'project',
		imageSrc: SyntropiLogo,
		title: 'Syntropi',
		org: '',
		description: `A gig economy platform where users record and submit videos for compensation. 
			These videos are then purchased in bulk by companies to enhance and train video-generative AI models. 
			The platform includes a mobile app for seamless user interaction, an admin website for managing users 
			and data, and a CLI tool for customers to download eligible video data directly from a GCP bucket.`,
		type: 'software',
		link: 'https://syntropi.ai',
		index: 1.0,
	},
	{
		dataType: 'project',
		imageSrc: SKSS,
		title: 'SentriLock',
		org: '',
		description: `A real-estate showing service integrated with electronic 
      lockboxes, SentriLock’s primary product. Built primarily with PHP, 
			NestJS, and Angular.`,
		type: 'software',
		link: 'https://sentrilock.com',
		index: 2.0,
	},
	{
		dataType: 'project',
		imageSrc: Azelo,
		title: 'Azelo',
		org: '',
		description: `A HIPAA compliant, all-in-one tool for healthcare providers to manage and communicate with their clients`,
		type: 'software',
		link: 'https://azeloapp.com',
		index: 3.0,
	},
	{
		dataType: 'project',
		imageSrc: Tim,
		title: 'Timtothy Anderson Trombone',
		org: '',
		description: `Portfolio for Cincinnati based professional trombonist, Timothy Anderson.`,
		type: 'software',
		link: 'https://timothyandersontrombone.com',
		index: 4.0,
	},
	{
		dataType: 'project',
		imageSrc: GW,
		title: 'GW Motorsports LLC',
		org: '',
		description: `Website for DFW area motorsports shop demonstrating 
			specializations and allowing for easy contact.`,
		type: 'software',
		link: 'https://gwmotorsportsllc.com',
		index: 5.0,
	},
]
