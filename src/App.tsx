import 'assets/scss/main.scss'
import Content from 'components/Content/Content'
import Header from 'components/Header/Header'
import { getControlValue } from 'helpers/functions/get-control-value.helper'
import { Controls } from 'models/controls.interface'
import { StorageKeys } from 'models/storage-keys.enum'
import React, { useEffect, useState } from 'react'
import ReactGA from 'react-ga4'
import { StorageService } from 'services/storage.service'

export interface ContextProps {
	controls: Controls
	setControls: React.Dispatch<React.SetStateAction<Controls>>
	isMobile: boolean
}

const storageService = new StorageService()

export const Context = React.createContext({} as ContextProps)

ReactGA.initialize('G-5ESY74KQ64')

function App() {
	const [controls, setControls] = useState<Controls>({
		software: storageService.get(StorageKeys.Software) === false ? false : true,
		music: storageService.get(StorageKeys.Music) === false ? false : true,
	})
	const [isMobile, setIsMobile] = useState(false)

	ReactGA.send({ hitType: 'pageview', page: window.location.pathname })

	const determineIsMobile = () => {
		if (window.innerWidth < 1006) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}

	useEffect(() => {
		window.addEventListener('resize', () => {
			determineIsMobile()
		})
		determineIsMobile()

		ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
	}, [])

	const contextValue = {
		controls,
		setControls,
		isMobile,
	}

	return (
		<Context.Provider value={contextValue}>
			<div className={`main ` + getControlValue(controls)}>
				<div className={`main-inner ${isMobile && 'mobile'}`}>
					<Header></Header>
					<Content></Content>
				</div>
			</div>
		</Context.Provider>
	)
}

export default App
