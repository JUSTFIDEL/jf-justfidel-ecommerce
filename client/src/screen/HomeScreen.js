import { Link } from 'react-router-dom'
import data from '../data'

function HomeScreen() {
	return (
		<div>
			<h1>Featured Products</h1>
			<div className="products">
				{data.products.map(product => (
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
				))}
			</div>
		</div>
	)
}

export default HomeScreen
