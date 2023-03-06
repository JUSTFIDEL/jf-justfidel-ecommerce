import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { Store } from '../Store'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MessageBox from './Components/MessageBox'
import { Link } from 'react-router-dom'

function CartScreen() {
	const { state, dispatch: ctxDispatch } = useContext(Store)
	const {
		cart: { cartItem },
	} = state

	return (
		<div>
			<Helmet>
				<title>Shopping Cart</title>
			</Helmet>
			<h1>Shopping Cart</h1>
			<Row>
				<Col md={8}>
               {cartItems.length === 0 ? ( 
                  <MessageBox>Cart is Empty. <Link to='/'>Go Shopping</Link>
                  </MessageBox>
               ) : ()} 
            </Col>
				<Col md={4}></Col>
			</Row>
		</div>
	)
}

export default CartScreen
