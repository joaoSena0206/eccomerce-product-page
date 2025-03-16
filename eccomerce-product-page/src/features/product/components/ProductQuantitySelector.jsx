function ProductQuantitySelector({
	onDecreaseClick,
	onIncreaseClick,
	quantity,
}) {
	return (
		<div className="flex justify-between p-5 py-3 bg-[#F7F8FD] items-center rounded-md mt-3">
			<img
				onClick={onDecreaseClick}
				src="src/features/product/icons/icon-minus.svg"
				alt="Minus 1 Product"
			/>

			<p className="font-bold">{quantity}</p>

			<img
				onClick={onIncreaseClick}
				src="src/features/product/icons/icon-plus.svg"
				alt="Plus 1 product"
			/>
		</div>
	);
}

export default ProductQuantitySelector;
