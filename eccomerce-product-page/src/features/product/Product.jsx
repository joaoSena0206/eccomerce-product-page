import {
	ProductCarousel,
	ProductDescription,
	ProductQuantitySelector,
	AddCartButton,
} from "./";

function Product({ onAddCart, onIncreaseClick, onDecreaseClick, product }) {
	return (
		<section className="lg:flex lg:px-20 lg:py-10 lg:space-x-10 lg:justify-center">
			<ProductCarousel />

			<div className="p-5 lg:p-0 lg:max-w-[450px]">
				<ProductDescription product={product} />
				<div className="lg:flex lg:space-x-3 lg:items-end">
					<ProductQuantitySelector
						quantity={product.quantity}
						onDecreaseClick={onDecreaseClick}
						onIncreaseClick={onIncreaseClick}
					/>

					<AddCartButton onClick={onAddCart} />
				</div>
			</div>
		</section>
	);
}

export default Product;
