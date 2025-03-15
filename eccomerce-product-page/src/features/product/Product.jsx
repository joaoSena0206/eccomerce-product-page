import {
	ProductCarousel,
	ProductDescription,
	ProductQuantitySelector,
	AddCartButton,
} from "./";

function Product() {
	return (
		<section>
			<ProductCarousel />

			<div className="p-5">
				<ProductDescription />
				<ProductQuantitySelector />

				<AddCartButton />
			</div>
		</section>
	);
}

export default Product;
