import React, { FC } from 'react'
import './Card.scss'
import { ReactComponent as PlayButton } from 'assets/icons/circle-play-solid.svg'
import { CardData } from 'models/card-data.interface'
import Tech from '../../Tech/Tech'
import { ReactComponent as Arrow } from 'assets/icons/arrow-up-right.svg'
import { ExperienceData } from 'models/experience-data.interface'
import { EducationData } from 'models/education-data.interface'
import { ProjectData } from 'models/project-data.interface'
import {
	isEducationData,
	isExperienceData,
	isMediaData,
	isProjectData,
} from 'helpers/functions/is-type.helper'

interface CardProps {
	data: ExperienceData | EducationData | ProjectData
}

const Card: FC<CardProps> = ({ data }) => {
	const { title, org, description, technical, type, link } = data

	let startYear: number | undefined
	let endYear: number | string | undefined
	let imageSrc: string | undefined
	let mediaType: 'audio' | 'video' | undefined
	let mediaSrc: string | undefined

	if (isExperienceData(data)) {
		startYear = data.startYear
		endYear = data.endYear
	}
	if (isEducationData(data)) {
		startYear = data.startYear
		endYear = data.endYear
	}
	if (isProjectData(data)) {
		imageSrc = data.imageSrc
	}
	if (isMediaData(data)) {
		mediaType = data.mediaType
		mediaSrc = mediaType === 'audio' ? data.audioSrc : data.videoSrc
	}

	const renderLeftSection = () => {
		if (
			(isExperienceData(data) || isEducationData(data)) &&
			startYear &&
			endYear
		) {
			return (
				<div className='dates'>
					<span>{startYear}</span>
					<span>&nbsp;-&nbsp;</span>
					<span>
						{typeof endYear === 'number' ? endYear : endYear?.toUpperCase()}
					</span>
				</div>
			)
		} else if (isProjectData(data) && imageSrc) {
			return (
				<div>
					<img className='image' src={imageSrc} alt={title} />
				</div>
			)
		} else if (isMediaData(data) && mediaSrc) {
			return (
				<div className='media pointer'>
					<PlayButton className='play-button' width={48} />
					{/* <audio controls>
						<source src={mediaSrc} type='audio/mpeg' />
						Your browser does not support the audio element.
					</audio> */}
					{/* <img className='image' src={imageSrc} alt={title} /> */}
				</div>
			)
		}
	}

	return (
		<div className={`Card ${link && 'pointer'}`}>
			<a href={link} target='_blank' rel='noreferrer'>
				<div className='grid'>
					{renderLeftSection()}
					<div className='info-container'>
						<div className={`title ${type}`}>
							<h3>{title}</h3>
							{org && (
								<>
									<span className='circle'></span>
									<h3>{org}</h3>
								</>
							)}
							{link && <Arrow class='link-arrow' width={18} height={18} />}
						</div>
						<p>{description}</p>
						<div className='tech-container'>
							{technical?.map((tech) => (
								<Tech text={tech} type={type} />
							))}
						</div>
					</div>
				</div>
			</a>
		</div>
	)
}

export default Card
