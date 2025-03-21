import { Context } from 'App'
import TextBlock from 'components/Common/TextBlock/TextBlock'
import MobileNavItem from 'components/Navigation/MobileNavItem'
import { useContext } from 'react'

export default function FunFacts() {
	const { isMobile } = useContext(Context)

	return (
		<div className='fun-facts-text'>
			{isMobile && <MobileNavItem id='fun-facts' label='Fun Facts' />}
			<ul style={{ paddingLeft: '1rem' }}>
				<li>
					<TextBlock>I can solve a rubiks cube in around one minute</TextBlock>
				</li>
				<li>
					<TextBlock>
						When I was in 8th grade, I memorized and recited 386 digits of pi
					</TextBlock>
				</li>
				<li>
					<TextBlock>
						I've only ever had one girlfriend, and we married when we were 21 years
					</TextBlock>
				</li>
				<li>
					<TextBlock>
						Over the course of two summers, I traveled nearly 4,000 miles on foot
					</TextBlock>
				</li>
			</ul>
		</div>
	)
}
