import { Link } from 'react-router-dom'
import Rating from './Rating'

function Product(props) {
	const { product } = props
	return (
		<div key={product.slug} className="product">
			<Link to={`/product/${product.slug}`}>
				<img alt={product.name} src={product.image} />
			</Link>
			<div className="product-info">
				<Link to={`/product/${product.slug}`}>
					<p className="p-name">{product.name}</p>
				</Link>
				<Rating rating={product.rating} numReview={product.numReview} />
				<p className="p-price">N{product.price}</p>
				<button>Add to cart</button>
			</div>
		</div>
	)
}

export default Product
