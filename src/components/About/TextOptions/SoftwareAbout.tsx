import Emphasis from 'components/Common/Emphasis/Emphasis'
import TextBlock from 'components/Common/TextBlock/TextBlock'

export default function SoftwareAbout() {
	return (
		<div className='about-text'>
			<TextBlock>
				I discovered my love for coding and web development while I finished my
				masters degree in music and I haven’t looked back since. I started out
				taking any freelance work I could get, which consisted mainly of working on
				projects for peers and friends, until I got the opportunity to work as part
				of a team of 3 on a{' '}
				<Emphasis>
					<a
						href='https://siouxfalls.business/entrepreneur-strives-to-cut-time-spent-waiting-for-table/'
						target='_blank'
						rel='noreferrer'
					>
						start up company
					</a>
				</Emphasis>
				. Later, I would go on to work for an{' '}
				<Emphasis>
					<a
						href='https://sevenhillstechnology.com/'
						target='_blank'
						rel='noreferrer'
					>
						established consulting company
					</a>
				</Emphasis>{' '}
				where the client I worked most closely with was a{' '}
				<Emphasis>
					<a href='https://www.sentrilock.com/' target='_blank' rel='noreferrer'>
						large real-estate corporation{' '}
					</a>
				</Emphasis>
				.{' '}
			</TextBlock>
			<TextBlock>
				My goal is to build excellent user experiences, whether that means an
				accessible and easy to use interface, or a well built back end to ensure all
				actions and data remain stable and easy to understand. The end user is the
				most important part of any product, so I always prioritize their experience.
			</TextBlock>
		</div>
	)
}
