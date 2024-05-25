import { MediaData } from 'models/audio-data.interface'
import { CardData } from 'models/card-data.interface'
import { EducationData } from 'models/education-data.interface'
import { ExperienceData } from 'models/experience-data.interface'
import { ProjectData } from 'models/project-data.interface'

export const isExperienceData = (
	object: CardData
): object is ExperienceData => {
	return object.dataType === 'experience'
}

export const isEducationData = (object: CardData): object is EducationData => {
	return object.dataType === 'education'
}

export const isProjectData = (object: CardData): object is ProjectData => {
	return object.dataType === 'project'
}

export const isMediaData = (object: CardData): object is MediaData => {
	return object.dataType === 'media'
}
