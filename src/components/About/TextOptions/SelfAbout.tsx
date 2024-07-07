import Emphasis from 'components/Common/Emphasis/Emphasis'
import TextBlock from 'components/Common/TextBlock/TextBlock'
import { useState } from 'react'
import dogs from '../../../assets/images/dogs.jpg'

export default function SelfAbout() {
	const [showDogImage, setShowDogImage] = useState(false)
	const [mousePosX, setMousePosX] = useState(0)
	const [mousePosY, setMousePosY] = useState(0)

	const showDogs = (e: MouseEvent) => {
		setMousePosX(e.clientX)
		setMousePosY(e.clientY)
		setShowDogImage(true)
	}

	const hideDogs = (e?: MouseEvent) => {
		setShowDogImage(false)
	}

	return (
		<div className='about-text'>
			<TextBlock>
				In my spare time, I enjoy spending time with my beautiful wife,{' '}
				<Emphasis>
					<a
						href='https://www.facebook.com/taylorthesoprano'
						rel='noreferrer'
						target='_blank'
					>
						Taylor Fenner
					</a>
				</Emphasis>
				, and supporting her opera career, as well as hanging out with our two dogs,{' '}
				<Emphasis
					onMouseEnter={(e: MouseEvent) => showDogs(e)}
					onMouseOut={hideDogs}
				>
					Henry and Oliver
				</Emphasis>
				. They are both chocolate labs and very cute. When they are not keeping me
				in shape on long walks, I try to stay in shape in the{' '}
				<Emphasis>
					<span className='gym'>gym</span>
				</Emphasis>{' '}
				as well. In the rest of my spare time when I'm not working on professional
				development , you'll probably find me playing saving the world of Azeroth in{' '}
				<Emphasis>
					<span className='wow'>World of Warcraft</span>
				</Emphasis>{' '}
				or exploring the Lands Between (and getting my butt kicked) in{' '}
				<Emphasis>
					<span className='elden-ring'>Elden Ring</span>
				</Emphasis>
				.
			</TextBlock>
			{showDogImage && (
				<div>
					<img
						src={dogs}
						alt='Two chocolate labs, Henry and Oliver, standing next to each other'
						className='dogs'
						width={200}
						style={{ top: mousePosY + 12, left: mousePosX - 200 - 12 }}
					/>
				</div>
			)}
		</div>
	)
}
