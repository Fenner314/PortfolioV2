import React, { FC, useEffect, useState } from 'react'
import './Media.scss'
import { mediaData } from 'helpers/data/media.data'
import Card from 'components/Common/Card/Card'

interface MediaProps {}

const Media: FC<MediaProps> = () => {
	const [media, setMedia] = useState(mediaData)

	const toggleActiveMedia = (index: number) => {
		console.log(index)
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

	useEffect(() => {
		console.log(media)
	}, [media])

	const renderMedia = () => {
		console.log('rendermedia')
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
	return <div className='Media'>{renderMedia()}</div>
}

export default Media
