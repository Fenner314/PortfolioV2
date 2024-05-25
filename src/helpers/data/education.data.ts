import { CardData } from 'models/card-data.interface'

export const educationData: CardData[] = [
	{
		startYear: 2015,
		endYear: 2019,
		title: 'Bachelor of Arts in Music Education',
		org: 'Augustana University',
		description: `Studied with Vance Shoemaker, Peter Folliard, and Jason Roseth. 
      Received training in music education and all-grades education. Heavily 
      performance focused - participated in lead roles in the Augustana Band, 
      Orchestra, Jazz Band, Trombone Choir, Trombone Quartet, and Brass Choir. 
      Winner of the 2018 Concerto/Aria competition to perform the Grondahl Trombone 
      Concerto with the orchestra. Performed Carnival of Venice with the band 
      throughout a tour of China.  `,
		technical: ['Tenor Trombone', 'Euphonium', 'Alto Trombone'],
		type: 'music',
		index: 1.0,
		link: 'https://www.augie.edu/school-music',
	},
	{
		startYear: 2019,
		endYear: 2021,
		title: 'Master of Music in Trombone Performance',
		org: 'University of Cincinnati College-Conservatory of Music',
		description: `Received nearly a full ride scholarship to attend and acted as Music 
      Library Teaching Assistant for the CCM Wind Symphony. Participated in the CCM Wind 
      Symphony, Symphony Orchestra, Brass Choir, Trombone Choir, and Trombone Quartet. 
      Performed in the American Trombone Workshop with the Trombone Choir and Quartet. `,
		technical: ['Tenor Trombone', 'Alto Trombone'],
		type: 'music',
		index: 2.0,
		link: 'https://ccm.uc.edu/',
	},
]
