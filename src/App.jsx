import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/screens/home/Home'
import Admin from './components/screens/admin/Admin'
import { ModalProvider } from './components/ModalProvider'

function App() {
	return (
		<ModalProvider>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/admin' element={<Admin />} />
				</Routes>
			</Router>
		</ModalProvider>
	)
}

export default App
