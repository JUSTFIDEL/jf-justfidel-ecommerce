import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useReducer } from 'react'
import logger from 'use-reducer-logger'

const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_REQUEST':
			return { ...state, loading: true }
		case 'FETCH_SUCCESS':
			return { ...state, products: action.payload, loading: false }
		case 'FETCH_FAIL':
			return { ...state, loading: false, error: action.payload }
		default:
			return state
	}
}

function HomeScreen() {
	const [{ loading, error, products }, dispatch] = useReducer(
		logger(reducer),
		{
			products: [],
			loading: true,
			error: '',
		},
	)
	// const [products, setProducts] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: 'FETCH_REQUEST' })
			try {
				const result = await axios.get('/api/products')
				dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
			} catch (err) {
				dispatch({ type: 'FETCH_FAIL', payload: err.message })
			}

			// setProducts(result.data)
		}
		fetchData()
	}, [])
	return (
		<div>
			<h1>Featured Products</h1>
			<div className="products">
				{loading ? (
					<div>
						<h1>Loading...</h1>
					</div>
				) : error ? (
					<div>{error}</div>
				) : (
					products.map(product => (
						<div key={product.slug} className="product">
							<Link to={`/product/${product.slug}`}>
								<img alt={product.name} src={product.image} />
							</Link>
							<div className="product-info">
								<Link to={`/product/${product.slug}`}>
									<p className="p-name">{product.name}</p>
								</Link>
								<p className="p-price">N{product.price}</p>
								<button>Add to cart</button>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	)
}

export default HomeScreen
