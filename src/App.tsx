import 'assets/scss/main.scss'
import Content from 'components/Content/Content'
import Header from 'components/Header/Header'
import { Controls } from 'models/controls.interface'
import React, { FC, useState } from 'react'

export interface ContextProps {
	controls: Controls
	setControls: React.Dispatch<React.SetStateAction<Controls>>
}

export const Context = React.createContext({} as ContextProps)

function App() {
	const [controls, setControls] = useState<Controls>({
		software: true,
		music: true,
	})

	const contextValue = {
		controls,
		setControls,
	}

	return (
		<Context.Provider value={contextValue}>
			<div className='main'>
				<div className='main-inner'>
					<Header></Header>
					<Content></Content>
				</div>
			</div>
		</Context.Provider>
	)
}

export default App
