function ProductDescription() {
	return (
		<div>
			<div>
				<h2 className="text-[#99989D] font-bold mb-3">
					SNEAKER COMPANY
				</h2>
				<h1 className="font-bold text-[30px] leading-9 mb-3">
					Fall Limited Edition Sneakers
				</h1>

				<p className="text-[#6B6B6D] mb-3">
					These low-profile sneakers are your perfect casual wear
					companion. Featuring a durable rubber outer sole, they'll
					withstand everything the weather can offer.
				</p>
			</div>

			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-3">
					<p className="font-bold text-[30px]">$125.00</p>

					<div className="bg-[#212129] text-white rounded-md px-2 py-1 font-bold">
						<p>50%</p>
					</div>
				</div>

				<p className="text-[#6B6B6D] font-bold">
					<s>$250.00</s>
				</p>
			</div>
		</div>
	);
}

export default ProductDescription;
