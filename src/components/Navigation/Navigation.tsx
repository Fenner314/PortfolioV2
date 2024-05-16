import React, { FC, useEffect, useRef, useState } from 'react'
import './Navigation.scss'
import { Link, useLocation } from 'react-router-dom'
import { Url, UrlOption } from 'models/url.model'
import { Offsets } from 'models/offsets.interface'

interface NavigationProps {}

type offsetKeys =
	| 'about'
	| 'experience'
	| 'projects'
	| 'education'
	| 'media'
	| 'contact'

const Navigation: FC<NavigationProps> = () => {
	const initialUrl: Url = window.location.href?.split('#')[1] as Url
	const [activeUrl, setActiveUrl] = useState<Url>(initialUrl ?? UrlOption.About)
	const [offsets, setOffsets] = useState<Offsets>({})
	const location = useLocation()
	const [scrollPosition, setScrollPosition] = useState(0)

	const handleScroll = () => {
		const position = window.scrollY
		setScrollPosition(position)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true })

		setCurrentSectionsAsOffsets()

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		if (offsets.experience && scrollPosition < offsets.experience) {
			setActiveUrl(UrlOption.About)
		} else if (offsets.projects && scrollPosition < offsets.projects) {
			setActiveUrl(UrlOption.Experience)
		} else if (offsets.contact && scrollPosition < offsets.contact) {
			setActiveUrl(UrlOption.Projects)
		} else {
			setActiveUrl(UrlOption.Contact)
		}
	}, [scrollPosition])

	const setCurrentSectionsAsOffsets = () => {
		const offsetObj: Offsets<HTMLAnchorElement> = {
			[UrlOption.About]: document.getElementById('about') as HTMLAnchorElement,
			[UrlOption.Experience]: document.getElementById(
				'experience'
			) as HTMLAnchorElement,
			[UrlOption.Projects]: document.getElementById(
				'projects'
			) as HTMLAnchorElement,
			[UrlOption.Education]: document.getElementById(
				'education'
			) as HTMLAnchorElement,
			[UrlOption.Media]: document.getElementById('media') as HTMLAnchorElement,
			[UrlOption.Contact]: document.getElementById('contact') as HTMLAnchorElement,
		}

		Object.keys(offsetObj).forEach((key: string) => {
			const typedKey = key as Url
			if (offsetObj[typedKey] && offsetObj[typedKey]?.getBoundingClientRect()) {
				const offsetVal = offsetObj[typedKey]?.getBoundingClientRect()?.top ?? 0
				setOffsets((prev) => ({
					...prev,
					[key]: offsetVal + window.scrollY - 64,
				}))
			} else {
				setOffsets((prev) => {
					delete prev[typedKey]
					return prev
				})
			}
		})
	}

	return (
		<div className='Navigation'>
			<div className={`nav-item ${activeUrl === UrlOption.About ? 'active' : ''}`}>
				<span className='nav-indicator'></span>
				<a href='#about'>About</a>
			</div>
			<div
				className={`nav-item ${activeUrl === UrlOption.Experience ? 'active' : ''}`}
			>
				<span className='nav-indicator'></span>
				<a href='#experience'>Experience</a>
			</div>
			<div
				className={`nav-item ${activeUrl === UrlOption.Projects ? 'active' : ''}`}
			>
				<span className='nav-indicator'></span>
				<a href='#projects'>Projects</a>
			</div>
			<div
				className={`nav-item ${activeUrl === UrlOption.Contact ? 'active' : ''}`}
			>
				<span className='nav-indicator'></span>
				<a href='#contact'>Contact</a>
			</div>
		</div>
	)
}

export default Navigation
