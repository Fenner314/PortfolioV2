import React, { FC, useEffect, useRef, useState } from 'react'
import './Card.scss'
import { ReactComponent as PlayButton } from 'assets/icons/circle-play-solid.svg'
import { ReactComponent as PauseButton } from 'assets/icons/circle-pause-solid.svg'
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
import { MediaData } from 'models/audio-data.interface'

interface CardProps {
	data: ExperienceData | EducationData | ProjectData | MediaData
	onClick?: any
	isPlaying?: boolean
	isActive?: boolean
}

const Card: FC<CardProps> = ({ data, onClick, isPlaying, isActive }) => {
	const { title, org, description, technical, type, link } = data

	const [audio, setAudio] = useState<HTMLAudioElement>()
	const [audioTimeValue, setAudioTimeValue] = useState<number>(0)
	const [duration, setDuration] = useState<string>()
	const [startYear, setStartYear] = useState<number>()
	const [endYear, setEndYear] = useState<number | string>()
	const [imageSrc, setImageSrc] = useState<string>()
	const [mediaType, setMediaType] = useState<'audio' | 'video'>()
	const [mediaSrc, setMediaSrc] = useState<string>()

	const [cardTitleWrapped, setCardTitleWrapped] = useState(false)

	const titleRef = useRef<HTMLHeadingElement>(null)
	const orgRef = useRef<HTMLHeadingElement>(null)

	const index = data.index

	useEffect(() => {
		if (isExperienceData(data)) {
			setStartYear(data.startYear)
			setEndYear(data.endYear)
		}
		if (isEducationData(data)) {
			setStartYear(data.startYear)
			setEndYear(data.endYear)
		}
		if (isProjectData(data)) {
			setImageSrc(data.imageSrc)
		}
		if (isMediaData(data)) {
			setMediaType(data.media.type)
			setMediaSrc(data.media.src)

			if (data.media.type === 'audio' && data.media.src) {
				const audioPlayer = new Audio(data.media.src)
				setAudio(audioPlayer)
				const slider = document.getElementById(
					'slider-' + index
				) as HTMLInputElement

				if (audioPlayer?.duration) {
					const tempDuration = getRoundedDownTime(audioPlayer?.duration)
					setDuration(calculateTime(tempDuration))
					slider.max = tempDuration.toString()
				}
			}
		}

		setTimeout(() => {
			isTitleWrapped()
		})
		window.addEventListener('resize', () => {
			isTitleWrapped()
		})
	}, [])

	useEffect(() => {
		togglePlaySound()
	}, [isPlaying])

	const togglePlaySound = () => {
		// set duration if it hasn't loaded previously
		if (!duration && audio?.duration) setDuration(calculateTime(audio?.duration))

		if (isPlaying) {
			audio?.play()
			if (audio) {
				audio.addEventListener('timeupdate', (e) => {
					setAudioTimeValue(getRoundedDownTime(audio.currentTime))
				})
			}
		} else {
			audio?.pause()
		}
	}

	const isTitleWrapped = () => {
		const titleEl = titleRef.current as HTMLHeadingElement
		const orgEl = orgRef.current as HTMLHeadingElement

		if (titleEl && orgEl) {
			setCardTitleWrapped(
				titleEl.offsetTop <= orgEl.offsetTop - 4 ||
					titleEl.offsetTop >= orgEl.offsetTop + 4
			)
		}
	}

	const handleClick = () => {
		onClick(index - 1)
		togglePlaySound()
	}

	const renderLeftSection = () => {
		if (
			(isExperienceData(data) || isEducationData(data)) &&
			(startYear || endYear)
		) {
			return (
				<div className='dates'>
					<span>{startYear}</span>
					{endYear && (
						<>
							<span>&nbsp;-&nbsp;</span>
							<span>
								{typeof endYear === 'number' ? endYear : endYear?.toUpperCase()}
							</span>
						</>
					)}
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
				<div className='media pointer' onClick={handleClick}>
					{data.media.playing ? (
						<button>
							<PauseButton className='play-button' width={48} />
						</button>
					) : (
						<button>
							<PlayButton className='play-button' width={48} />
						</button>
					)}
				</div>
			)
		} else {
			return <div className='dates'></div>
		}
	}

	const getRoundedDownTime = (time: number | undefined): number => {
		return time ? Math.floor(time) : 0
	}

	const calculateTime = (secs: number | undefined) => {
		if (!secs) return '0:00'

		const minutes = Math.floor(secs / 60)
		const seconds = Math.floor(secs % 60)
		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
		return `${minutes}:${returnedSeconds}`
	}

	const handleSliderChange = (e: any) => {
		setAudioTimeValue(e.target.value) // set time
		if (audio) audio.currentTime = e.target.value // set audio time
	}

	return (
		<div className={`Card ${link && 'pointer'}`}>
			<a href={link} target='_blank' rel='noreferrer'>
				<div className='grid'>
					{renderLeftSection()}
					<div className='info-container'>
						<div className={`title ${type}`}>
							<h3 ref={titleRef}>{title}</h3>
							{org && (
								<>
									{<span className={`circle ${cardTitleWrapped && 'invisible'}`}></span>}
									<h3 ref={orgRef}>
										{org}{' '}
										{link && (
											<Arrow class={`link-arrow ${type}`} width={18} height={18} />
										)}
									</h3>
								</>
							)}
							{/* {link && <Arrow class='link-arrow' width={18} height={18} />} */}
						</div>
						<p>{description}</p>
						<div className='tech-container'>
							{technical?.map((tech) => (
								<Tech text={tech} type={type} />
							))}
						</div>
					</div>
				</div>
				{/* vvvv custom audio player vvvv */}
				<div
					className={
						(mediaType === 'audio' && audio && isActive ? 'show' : 'hide') +
						' controls'
					}
				>
					<span>{calculateTime(audioTimeValue)}</span>
					<input
						type='range'
						className='slider'
						id={`slider-${index}`}
						max={getRoundedDownTime(audio?.duration)}
						onChange={(e) => handleSliderChange(e)}
						value={audioTimeValue}
					/>
					<span>{duration}</span>
				</div>
				{/* ^^^^ custom audio player ^^^^ */}
			</a>
		</div>
	)
}

export default Card
