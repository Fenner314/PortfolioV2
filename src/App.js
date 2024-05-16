import 'assets/scss/main.scss'
import Content from 'components/Content/Content'
import Header from 'components/Header/Header'

function App() {
	return (
		<div className='main'>
			<div className='main-inner'>
				<Header></Header>
				<Content></Content>
			</div>
		</div>
	)
}

export default App
