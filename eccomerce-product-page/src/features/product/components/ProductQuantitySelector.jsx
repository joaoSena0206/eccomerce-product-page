function ProductQuantitySelector({
	onDecreaseClick,
	onIncreaseClick,
	quantity,
}) {
	return (
		<div className="flex justify-between p-5 py-3 bg-[#eef0f9] items-center rounded-md mt-3 lg:w-[200px] lg:mt-0 lg:h-[50px]">
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
