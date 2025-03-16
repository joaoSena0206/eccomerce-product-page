function ProductDescription({ product }) {
	return (
		<div>
			<div>
				<h2 className="text-[#99989D] font-bold mb-3">
					SNEAKER COMPANY
				</h2>
				<h1 className="font-bold text-[30px] leading-9 mb-3">
					{product.name}
				</h1>

				<p className="text-[#6B6B6D] mb-3">{product.description}</p>
			</div>

			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-3">
					<p className="font-bold text-[30px]">
						${product.price.toFixed(2)}
					</p>

					<div className="bg-[#212129] text-white rounded-md px-2 py-1 font-bold">
						<p>{product.discount + "%"}</p>
					</div>
				</div>

				<p className="text-[#6B6B6D] font-bold">
					<s>${product.lastPrice.toFixed(2)}</s>
				</p>
			</div>
		</div>
	);
}

export default ProductDescription;
