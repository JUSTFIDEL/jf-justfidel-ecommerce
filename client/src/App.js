import data from './data'

function App() {
	return (
		<div className="App">
			<header>
				<a href="/">justFidel</a>
			</header>

			<main className="margin">
				<h1>Featured Products</h1>
				<div className="containner">
					{data.products.map(product => (
						<div
							key={product.slug}
							className="image-containner">
							<img
								alt={product.name}
								src={product.image}
								className="img-wd"
							/>
							<p className="p-name">
								{product.name}
							</p>
							<p className="p-price">
								N{product.price}
							</p>
						</div>
					))}
				</div>
			</main>
		</div>
	)
}

export default App
