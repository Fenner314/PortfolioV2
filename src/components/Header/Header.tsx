import React, {
	FC,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react'
import './Header.scss'
import Navigation from 'components/Navigation/Navigation'
import { Context } from 'App'
import { ReactComponent as Github } from '../../assets/icons/github.svg'
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg'
import { ReactComponent as SHT } from '../../assets/icons/sht.svg'
import { Control } from 'models/controls.interface'
import { StorageService } from 'services/storage.service'
import { StorageKeys } from 'models/storage-keys.enum'
import { SubTitle } from 'models/sub-title.type'

interface HeaderProps {}

const storageService = new StorageService()

const subTitleValues: {
	software: SubTitle[]
	music: SubTitle[]
	neither: SubTitle[]
} = {
	software: ['Software Developer', 'Consultant'],
	music: ['Trombonist', 'Educator'],
	neither: ['Husband', 'Dog Dad', 'Gamer'],
}

const tags = {
	software:
		'I help businesses grow by building engaging and inspiring digital products.',
	music:
		'I promote positive interactions with music  through well-rehearsed performance and thoughtful teaching. ',
	both:
		'I help businesses grow by using my musical background to bring unique perspectives while building engaging and inspiring digital products.',
}

const Header: FC<HeaderProps> = () => {
	const { controls, setControls } = useContext(Context)
	const [subTitles, setSubTitles] = useState<ReactNode[]>([])

	const handleControlToggle = (control: Control, checked: boolean) => {
		const key = control === 'software' ? StorageKeys.Software : StorageKeys.Music
		storageService.set(key, checked)
		setControls((prev) => ({ ...prev, [control]: checked }))
	}

	const calculateSubTitles = useCallback(() => {
		let subTitlesTemp: SubTitle[] = []
		Object.keys(controls).forEach((control) => {
			const typedControl = control as Control
			if (controls[typedControl]) {
				subTitlesTemp = subTitlesTemp.concat(subTitleValues[typedControl])
			}
		})
		if (!subTitlesTemp?.length) {
			subTitlesTemp = subTitleValues.neither
		}
		const subTitlesElements: ReactNode[] = []
		const subTitlesContainerElementWidth: number =
			document.querySelector('.sub-titles')?.clientWidth ?? 0
		let subTitleWidths: number[] = []

		subTitlesTemp.forEach((text: SubTitle, index: number) => {
			subTitlesElements.push(<h3 className='sub-title'>{text}</h3>)
			const tempElement = document.createElement('h3')
			tempElement.className = 'sub-title'
			tempElement.innerHTML = text
			document.querySelector('.sub-titles')?.appendChild(tempElement)
			const bounds = tempElement.getBoundingClientRect()
			document.querySelector('.sub-titles')?.removeChild(tempElement)
			const currentSubtitleWidth = bounds.width
			subTitleWidths.push(currentSubtitleWidth)

			const totalWidth =
				subTitleWidths.reduce((accumulator, current) => accumulator + current, 0) +
				20.45 /** width of divider with margin */ *
					Math.floor(subTitleWidths?.length / 2)

			if (totalWidth > subTitlesContainerElementWidth) {
				subTitlesElements.splice(
					index /** inserts right before most recent element */,
					1 /** removes previous divider */,
					<br />
				)
				subTitleWidths = []
			} else if (index !== subTitlesTemp?.length - 1) {
				subTitlesElements.push(<span className='divider'> | </span>)
			}
		})

		setSubTitles(subTitlesElements)
		return subTitlesElements
	}, [controls])

	const renderTag = () => {
		if (controls.software && controls.music) {
			return tags.both
		} else if (controls.software) {
			return tags.software
		} else if (controls.music) {
			return tags.music
		}
	}

	useEffect(() => {
		calculateSubTitles()
	}, [controls, calculateSubTitles])

	return (
		<div className='Header'>
			<div className='inner'>
				<div className='content'>
					<div className='controls'>
						<label htmlFor='software' className='control'>
							<input
								type='checkbox'
								defaultChecked={controls.software}
								onChange={(e) => handleControlToggle('software', e.target.checked)}
								name='software'
								id='software'
							/>
							Software Development
						</label>
						<label htmlFor='music' className='control'>
							<input
								type='checkbox'
								defaultChecked={controls.music}
								onChange={(e) => handleControlToggle('music', e.target.checked)}
								name='music'
								id='music'
							/>
							Music
						</label>
					</div>
					<div className='header'>
						<h1 className='title'>Jacob Fenner</h1>
						<div className='sub-titles'>{subTitles.map((title) => title)}</div>
						<p className='tag'>{renderTag()}</p>
					</div>
					<Navigation></Navigation>
				</div>
				<div className='footer'>
					<Github class='link-icon' width={24} alt='Github icon' />
					<LinkedIn class='link-icon' width={24} alt='LinkedIn icon' />
					<SHT
						class='link-icon sht'
						width={24}
						height={24}
						alt='Seven Hills Technology icon'
					/>
				</div>
			</div>
		</div>
	)
}

export default Header
