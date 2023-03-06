import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Badge from 'react-bootstrap/Badge'
import Footer from './screen/Components/Footer'
import HomeScreen from './screen/HomeScreen'
import ProductScreen from './screen/ProductScreen'
import { useContext } from 'react'
import { Store } from './Store'

function App() {
	const { state } = useContext(Store)
	const { cart } = state

	return (
		<BrowserRouter>
			<div className="App d-flex flex-column site-container">
				<header>
					<Navbar variant="dark my-nav">
						<div>
							<Link to="/">
								<img
									src="../images/logo.svg"
									className="logo"
									alt="logo"
								/>
							</Link>
						</div>
						<div>
							<Nav className="me-auto">
								<Link to="/cart" className="nav-link">
									<strong>Cart</strong>
									{cart.cartItems.length > 0 && (
										<Badge pill bg="danger">
											{cart.cartItems.reduce(
												(a, c) => a + c.quantity,
												0,
											)}
										</Badge>
									)}
								</Link>
							</Nav>
						</div>
					</Navbar>
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
