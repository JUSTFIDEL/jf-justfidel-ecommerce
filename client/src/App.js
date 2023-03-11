import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Badge from 'react-bootstrap/Badge'
import Footer from './screen/Components/Footer'
import HomeScreen from './screen/HomeScreen'
import ProductScreen from './screen/ProductScreen'
import { useContext } from 'react'
import { Store } from './Store'
import CartScreen from './screen/CartScreen'
import SigninScreen from './screen/SigninScreen'
import { LinkContainer } from 'react-router-bootstrap'
import ShippingAddressScreen from './screen/ShippingAddressScreen'
import SignupScreen from './screen/SignupScreen'
import Container from 'react-bootstrap/Container'

function App() {
	const { state, dispatch: ctxDispatch } = useContext(Store)
	const { cart, userInfo } = state

	const signOutHandler = () => {
		ctxDispatch({ type: 'USER_SIGNOUT' })
		localStorage.removeItem('userInfo')
		localStorage.removeItem('shippingAddress')
	}

	return (
		<BrowserRouter>
			<div className="d-flex flex-column site-container">
				<ToastContainer position="bottom-center" limit={1} />
				<header>
					<Navbar variant="dark my-nav">
						<Container>
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
									{userInfo ? (
										<NavDropdown
											title={userInfo.name}
											id="basic-nav-dropdown">
											<LinkContainer to="/profile">
												<NavDropdown.Item>
													User Profile
												</NavDropdown.Item>
											</LinkContainer>
											<LinkContainer to="/orderhistory">
												<NavDropdown.Item>
													Order History
												</NavDropdown.Item>
											</LinkContainer>
											<NavDropdown.Divider />
											<Link
												className="dropdown-item"
												to="#signout"
												onClick={signOutHandler}>
												Sign Out
											</Link>
										</NavDropdown>
									) : (
										<Link className="nav-link" to="/signin">
											Sign In
										</Link>
									)}
								</Nav>
							</div>
						</Container>
					</Navbar>
				</header>
				<main className="scr-pad">
					<Routes>
						<Route path="/product/:slug" element={<ProductScreen />} />
						<Route path="/cart" element={<CartScreen />} />
						<Route path="/signin" element={<SigninScreen />} />
						<Route path="/signup" element={<SignupScreen />} />
						<Route path="/shipping" element={<ShippingAddressScreen />} />
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
