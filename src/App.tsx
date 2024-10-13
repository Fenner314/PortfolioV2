import 'assets/scss/main.scss'
import Content from 'components/Content/Content'
import Header from 'components/Header/Header'
import { getControlValue } from 'helpers/functions/get-control-value.helper'
import { Controls } from 'models/controls.interface'
import { StorageKeys } from 'models/storage-keys.enum'
import React, { useState } from 'react'
import { StorageService } from 'services/storage.service'

export interface ContextProps {
	controls: Controls
	setControls: React.Dispatch<React.SetStateAction<Controls>>
}

const storageService = new StorageService()

export const Context = React.createContext({} as ContextProps)

function App() {
	const [controls, setControls] = useState<Controls>({
		software: storageService.get(StorageKeys.Software) === false ? false : true,
		music: storageService.get(StorageKeys.Music) === false ? false : true,
	})

	const contextValue = {
		controls,
		setControls,
	}

	return (
		<Context.Provider value={contextValue}>
			<div className={'main ' + getControlValue(controls)}>
				<div className='main-inner'>
					<Header></Header>
					<Content></Content>
				</div>
			</div>
		</Context.Provider>
	)
}

export default App
