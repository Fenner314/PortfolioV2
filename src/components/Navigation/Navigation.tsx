import React, { FC, useContext, useEffect, useRef, useState } from 'react'
import './Navigation.scss'
import { useLocation } from 'react-router-dom'
import { Url, UrlOption } from 'models/url.model'
import { Offsets } from 'models/offsets.interface'
import { Context } from 'App'

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
	const initialUrl: Url = window.location.href?.split('#')[1] as Url
	const [activeUrl, setActiveUrl] = useState<Url>(initialUrl ?? UrlOption.About)
	const [offsets, setOffsets] = useState<Offsets>({})
	const [offsetsOrderedArray, setOffsetsOrderedArray] = useState<number[]>([])
	const [scrollPosition, setScrollPosition] = useState(0)
	const location = useLocation()

	const { controls } = useContext(Context)

	const handleScroll = () => {
		const position = window.scrollY
		setScrollPosition(position)
	}

	useEffect(() => {
		if (offsetsOrderedArray?.length) {
			window.addEventListener('scroll', handleScroll, { passive: true })

			const elementId = location.hash.slice(1) as keyof Offsets
			window.scrollTo({
				top: offsets[elementId],
				behavior: 'smooth',
			})
			document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth'

			return () => {
				window.removeEventListener('scroll', handleScroll)
			}
		}
	}, [offsetsOrderedArray])

	useEffect(() => {
		setOffsetsOrderedArray(
			Object.values(offsets).sort((a: number, b: number) => a - b)
		)
	}, [offsets])

	useEffect(() => {
		for (let i = 0; i < offsetsOrderedArray.length; i++) {
			if (
				scrollPosition >= offsetsOrderedArray[i] &&
				scrollPosition < offsetsOrderedArray[i + 1]
			) {
				setActiveUrl(Object.keys(offsets)[i] as Url)
				break
			} else if (
				i === offsetsOrderedArray.length - 1 &&
				scrollPosition >= offsetsOrderedArray[i]
			) {
				setActiveUrl(Object.keys(offsets)[i] as Url)
				break
			}
		}
	}, [scrollPosition, offsetsOrderedArray])

	useEffect(() => {
		setTimeout(() => {
			setCurrentSectionsAsOffsets()
		}, 30)
	}, [controls])

	const setCurrentSectionsAsOffsets = () => {
		const offsetObj: Offsets<HTMLAnchorElement> = {
			[UrlOption.About]: document.getElementById('about') as HTMLAnchorElement,
			[UrlOption.FunFacts]: document.getElementById(
				'fun-facts'
			) as HTMLAnchorElement,
			[UrlOption.Education]: document.getElementById(
				'education'
			) as HTMLAnchorElement,
			[UrlOption.Experience]: document.getElementById(
				'experience'
			) as HTMLAnchorElement,
			[UrlOption.Projects]: document.getElementById(
				'projects'
			) as HTMLAnchorElement,
			[UrlOption.Media]: document.getElementById('media') as HTMLAnchorElement,
			[UrlOption.Contact]: document.getElementById('contact') as HTMLAnchorElement,
		}

		const unorderedOffsets: any = offsets
		Object.keys(offsetObj).forEach((key: string) => {
			const typedKey = key as Url
			if (offsetObj[typedKey] && offsetObj[typedKey]?.offsetTop) {
				const offsetVal = offsetObj[typedKey]?.offsetTop ?? 0
				unorderedOffsets[typedKey] = offsetVal - 64
			} else {
				delete unorderedOffsets[typedKey]
			}
		})

		const orderedOffsets = Object.keys(unorderedOffsets)
			.sort((a: string, b: string) => unorderedOffsets[a] - unorderedOffsets[b])
			.reduce((obj: any, key) => {
				obj[key] = unorderedOffsets[key] as any
				return obj
			}, {} as any)
		setOffsets(orderedOffsets)
	}

	return (
		<div className='Navigation'>
			<div className={`nav-item ${activeUrl === UrlOption.About ? 'active' : ''}`}>
				<span className='nav-indicator'></span>
				<a href='#about'>About</a>
			</div>
			{!controls.software && !controls.music && (
				<div
					className={`nav-item ${activeUrl === UrlOption.FunFacts ? 'active' : ''}`}
				>
					<span className='nav-indicator'></span>
					<a href='#fun-facts'>Fun Facts</a>
				</div>
			)}
			{(controls.software || controls.music) && (
				<div
					className={`nav-item ${activeUrl === UrlOption.Education ? 'active' : ''}`}
				>
					<span className='nav-indicator'></span>
					<a href='#education'>Education</a>
				</div>
			)}
			{(controls.music || controls.software) && (
				<div
					className={`nav-item ${
						activeUrl === UrlOption.Experience ? 'active' : ''
					}`}
				>
					<span className='nav-indicator'></span>
					<a href='#experience'>Experience</a>
				</div>
			)}
			{controls.software && (
				<div
					className={`nav-item ${activeUrl === UrlOption.Projects ? 'active' : ''}`}
				>
					<span className='nav-indicator'></span>
					<a href='#projects'>Projects</a>
				</div>
			)}
			{controls.music && (
				<div
					className={`nav-item ${activeUrl === UrlOption.Media ? 'active' : ''}`}
				>
					<span className='nav-indicator'></span>
					<a href='#media'>Media</a>
				</div>
			)}
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
