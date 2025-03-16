import "./App.css";

import Header from "./features/header";
import Product from "./features/product";
import Cart from "./features/cart";
import { useState } from "react";

let productData = {
	price: 125.0,
	lastPrice: 250.0,
	discount: 0,
	quantity: 1,
	img: "src/features/product/images/image-product-1-thumbnail.jpg",
	name: "Fall Limited Edition Sneakers",
	description:
		"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
};
productData.discount = (productData.price / productData.lastPrice) * 100;

function App() {
	let [isCartOpen, setIsCartOpen] = useState(false);
	let [product, setProduct] = useState(productData);
	let [products, setProducts] = useState([]);

	function handleCartClick() {
		setIsCartOpen(isCartOpen ? false : true);
	}

	function handleDecreaseClick() {
		let productQuantity = product.quantity;

		if (productQuantity - 1 >= 1) {
			setProduct({
				...product,
				quantity: productQuantity - 1,
			});
		}
	}

	function handleIncreaseClick() {
		let productQuantity = product.quantity;

		setProduct({
			...product,
			quantity: productQuantity + 1,
		});
	}

	function handleAddCart() {
		setProducts([...products, product]);
	}

	return (
		<>
			<Header onCartClick={handleCartClick} />

			<Product
				onAddCart={handleAddCart}
				onDecreaseClick={handleDecreaseClick}
				onIncreaseClick={handleIncreaseClick}
				product={product}
			/>

			<Cart isOpen={isCartOpen} products={products} />
		</>
	);
}

export default App;
