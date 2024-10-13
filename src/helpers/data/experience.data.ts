import { ExperienceData } from 'models/experience-data.interface'

export const softwareExperience: ExperienceData[] = [
	{
		dataType: 'experience',
		startYear: 2021,
		endYear: 'present',
		title: 'Software Developer',
		org: 'SentriLock',
		description: `Build and maintain critical web, api, and mobile components of SentriKey Showing Service™, 
      aid in production support for discovered defects and incoming customer support tickets, help define 
      new feature work, mentor junior developers, and work with other internal teams to ensure all company 
      products coordinate with one another.`,
		technical: [
			'PHP/Laravel',
			'Angular',
			'NestJS',
			'HTML/SCSS',
			'Typescript',
			'SQL',
			'Elasticsearch',
			'SendGrid',
			'Bootstrap',
			'GitLab',
			'node.js',
			'Firebase',
			'GCP',
		],
		type: 'software',
		index: 1.0,
		link: 'https://www.sentrilock.com/',
	},
	{
		dataType: 'experience',
		startYear: 2021,
		endYear: 'present',
		title: 'Software Developer II',
		org: 'Seven Hills Technology',
		description: `Improve clients’ businesses by building creative, impactful technology, 
      learn the ins and outs of their domain in order to effectively coach 
      them on best practices and how to provide the best possible product, and maintain 
      positive relationships with clients and internal team. Collaborate with internal 
      team on all client projects, obtain Azure certifications, and continuously work on 
      professional development.`,
		technical: ['C#', '.NET', 'Azure'],
		type: 'software',
		index: 2.0,
		link: 'https://sevenhillstechnology.com/',
	},
	{
		dataType: 'experience',
		startYear: 2020,
		endYear: 2021,
		title: 'Junior Developer',
		org: 'Booth or Table',
		description: `Worked on innovative restaurant check-in software tailored towards new 
      business developing UI of dashboard and reusable components and connecting front 
      end to the api resources.`,
		technical: ['React', 'node.js', 'redux', 'HTML/CSS', 'Javascript'],
		type: 'software',
		index: 3.0,
		link:
			'https://siouxfalls.business/entrepreneur-strives-to-cut-time-spent-waiting-for-table/',
	},
	{
		dataType: 'experience',
		startYear: 2020,
		endYear: 'present',
		title: 'Freelance Software Developer',
		description: `I’m always looking for opportunities to help small business grow through 
      state-of-the-art websites or web applications. I specialize in helping artists 
      effectively find and communicate with their audience.`,
		technical: [
			'React',
			'node.js',
			'SQL',
			'HTML/SCSS',
			'Firebase',
			'Next.js',
			'React Native',
		],
		type: 'software',
		index: 4.0,
	},
]

export const musicExperience: ExperienceData[] = [
	{
		dataType: 'experience',
		startYear: 2017,
		endYear: 'present',
		title: 'Alternate Trombonist',
		org: 'Sioux City Symphony Orchestra',
		description: `Considered as an alternate player for works that require extra players or 
      for when full time members are unavailable. Performed as 3rd trombone in the sound 
      track for Start Wars - A New Hope that was played in conjunction with the film.`,
		technical: ['Tenor Trombone', 'Alto Trombone'],
		type: 'music',
		index: 1.0,
		link: 'https://www.siouxcitysymphony.org/',
	},
	{
		dataType: 'experience',
		startYear: 2017,
		endYear: 'present',
		title: 'Private Instructor',
		description: `Teach dedicated middle school and high school low brass students. Emphasize 
      musicality as the ultimate goal while gaining an understanding of fundamentals and ear 
      training to achieve it. Always looking to bring more students into the studio who are 
      willing to put in the work. `,
		technical: ['Tenor Trombone', 'Alto Trombone', 'Euphonium'],
		type: 'music',
		index: 2.0,
	},
	{
		dataType: 'experience',
		startYear: 2015,
		endYear: 2019,
		title: 'Assistant Director of Marching Band',
		org: 'Brandon Valley High School',
		description: `Worked as low brass instructor and assisted in direction of the entire 
      ensemble throughout band camp every summer, evening rehearsals, and at competitions. 
      Fostered a close relationship with the low brass section in and out of rehearsal. 
      Tough an emphasis on breathing technique and fundamental marching technique as part 
      of my role.`,
		technical: [],
		type: 'music',
		index: 3.0,
		link: 'https://www.brandonvalleybands.com/',
	},
	{
		dataType: 'experience',
		startYear: 2014,
		endYear: 2015,
		title: 'Marching Member',
		org: 'Madison Scouts',
		description: `Member of the 2014 and 2015 Madison Scouts Drum Corps. Achieved peak 
      marching performance through 100% dedication to the craft and to the group. 
      Rehearsed for 12-13 hours every day for 1 month of spring training. Worked as bus 
      loader to ensure that the transitions between housing sites and shows efficiently.
       Participated in the DCI Performers Showcase as a Trombone Quartet.`,
		technical: ['1st Baritone', '3rd Euphonium'],
		type: 'music',
		index: 4.0,
		link: 'https://www.forwardperformingarts.org/madison-scouts/home',
	},
]
