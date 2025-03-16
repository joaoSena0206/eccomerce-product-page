import {
	ProductCarousel,
	ProductDescription,
	ProductQuantitySelector,
	AddCartButton,
} from "./";

function Product({ onAddCart, onIncreaseClick, onDecreaseClick, product }) {
	return (
		<section>
			<ProductCarousel />

			<div className="p-5">
				<ProductDescription product={product} />
				<ProductQuantitySelector
					quantity={product.quantity}
					onDecreaseClick={onDecreaseClick}
					onIncreaseClick={onIncreaseClick}
				/>

				<AddCartButton onClick={onAddCart} />
			</div>
		</section>
	);
}

export default Product;
