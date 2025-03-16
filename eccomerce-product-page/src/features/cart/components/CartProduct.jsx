import DeleteIcon from "./DeleteIcon";

function CartProduct({ product }) {
	let productTotalPrice = product.price * product.quantity;

	return (
		<div className="flex space-x-3 items-center justify-between">
			<img
				className="w-[80px] h-[80px] rounded-md"
				src={product.img}
				alt={product.name}
			/>

			<div>
				<p className="text-[#797a7b] mb-1">{product.name}</p>

				<div className="flex space-x-3">
					<p className="text-[#797a7b]">
						${product.price.toFixed(2)} x {product.quantity}
					</p>
					<p className="font-bold">${productTotalPrice.toFixed(2)}</p>
				</div>
			</div>

			<DeleteIcon />
		</div>
	);
}

export default CartProduct;
