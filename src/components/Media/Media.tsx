import React, { FC, useContext, useEffect, useState } from 'react'
import './Media.scss'
import { mediaData } from 'helpers/data/media.data'
import Card from 'components/Common/Card/Card'
import { Context } from 'App'
import MobileNavItem from 'components/Navigation/MobileNavItem'

interface MediaProps {}

const Media: FC<MediaProps> = () => {
	const { isMobile } = useContext(Context)
	const [media, setMedia] = useState(mediaData)

	const toggleActiveMedia = (index: number) => {
		const newMedia = media.map((med, i) => {
			if (i === index) {
				med.media.active = true
				med.media.playing = !med.media.playing
			} else {
				med.media.active = false
				med.media.playing = false
			}

			return med
		})

		setMedia(newMedia)

		return newMedia[index]
	}

	const renderMedia = () => {
		return media
			.sort((a, b) => a.index - b.index)
			.map((med, index) => {
				return (
					<Card
						key={index}
						data={med}
						isPlaying={med.media.playing}
						isActive={med.media.active}
						onClick={toggleActiveMedia}
					/>
				)
			})
	}
	return (
		<div className='Media'>
			{isMobile && <MobileNavItem id='media' label='Media' />}
			{renderMedia()}
		</div>
	)
}

export default Media
