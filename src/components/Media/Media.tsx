import React, { FC } from 'react'
import './Media.scss'
import { mediaData } from 'helpers/data/media.data'
import Card from 'components/Common/Card/Card'

interface MediaProps {}

const Media: FC<MediaProps> = () => {
	const renderMedia = () =>
		mediaData.map((media, index) => {
			return <Card key={index} data={media} />
		})

	return <div className='Media'>{renderMedia()}</div>
}

export default Media
