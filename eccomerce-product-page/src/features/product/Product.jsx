import {
	ProductCarousel,
	ProductDescription,
	ProductQuantitySelector,
} from "./";

function Product() {
	return (
		<section>
			<ProductCarousel />

			<div className="p-5">
				<ProductDescription />
				<ProductQuantitySelector />
			</div>
		</section>
	);
}

export default Product;
