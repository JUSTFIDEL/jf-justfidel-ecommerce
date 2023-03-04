import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Badge from 'react-bootstrap/Badge'
import Footer from './screen/Components/Footer'
import HomeScreen from './screen/HomeScreen'
import ProductScreen from './screen/ProductScreen'
import useContext from 'react'
import { Store } from './Store'

function App() {
	const { state } = useContext(Store)
	const { cart } = state

	return (
		<BrowserRouter>
			<div className="App">
				<header>
					<Link to="/">
						<img src="../images/logo.svg" className="logo" alt="logo" />
					</Link>
					<Nav className="me-auto">
						<Link to="/cart" className="nav-link">
							Cart
							{cart.cartItems.length > 0 && (
								<Badge pill bg="danger">
									{cart.cartItems.length}
								</Badge>
							)}
						</Link>
					</Nav>
				</header>
				<main>
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
