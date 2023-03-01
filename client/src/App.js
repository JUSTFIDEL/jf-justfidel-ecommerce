import data from './data'

function App() {
	return (
		<div className="App">
			<header>
				<a href="/">
					<img
						src="./images/logo.svg"
						className="logo"
						alt="logo"
					/>
				</a>
			</header>

			<main className="margin">
				<h1>Featured Products</h1>
				<div className="products">
					{data.products.map(product => (
						<div key={product.slug} className="product">
							<a href={'/product/{product.slug'}>
								<img
									alt={product.name}
									src={product.image}
								/>
							</a>
							<div className="product-info">
								<a
									href={
										'/product/{product.slug'
									}>
									<p className="p-name">
										{product.name}
									</p>
								</a>
								<p className="p-price">
									N{product.price}
								</p>
								<button>Add to cart</button>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	)
}

export default App
