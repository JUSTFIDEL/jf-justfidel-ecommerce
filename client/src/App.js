import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Footer from './screen/Components/Footer'
import HomeScreen from './screen/HomeScreen'
import ProductScreen from './screen/ProductScreen'

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<header>
					<Link to="/">
						<img src="../images/logo.svg" className="logo" alt="logo" />
					</Link>
				</header>
				<main className="margin">
					<Routes>
						<Route path="/product/:slug" element={<ProductScreen />} />
						<Route path="/" element={<HomeScreen />} />
					</Routes>
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</BrowserRouter>
	)
}

export default App
