import React, { FC } from 'react'
import './Card.scss'
import { CardData } from 'models/card-data.interface'
import Tech from '../../Tech/Tech'
import { ReactComponent as Arrow } from 'assets/icons/arrow-up-right.svg'

interface CardProps {
	data: CardData
}

const Card: FC<CardProps> = ({ data }) => {
	const {
		startYear,
		endYear,
		imageSrc,
		title,
		org,
		description,
		technical,
		type,
		link,
	} = data

	return (
		<div className={`Card ${link && 'pointer'}`}>
			<a href={link} target='_blank' rel='noreferrer'>
				<div className='grid'>
					{startYear && endYear ? (
						<div className='dates'>
							<span>{startYear}</span>
							<span>&nbsp;-&nbsp;</span>
							<span>
								{typeof endYear === 'number' ? endYear : endYear?.toUpperCase()}
							</span>
						</div>
					) : (
						<div>
							<img className='image' src={imageSrc} alt={title} />
						</div>
					)}
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
