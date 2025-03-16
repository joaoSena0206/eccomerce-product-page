function Cart({ isOpen }) {
	return (
		isOpen && (
			<div className="absolute top-[90px] rounded-md p-5 z-20 left-1/2 -translate-x-1/2 bg-white w-[95%]">
				<h1 className="font-bold mb-5">Cart</h1>

				<hr className="-ml-5 -mr-5 mb-5 border-[#dddcdc]"></hr>

				<div className="min-h-[250px] relative">
					<p className="font-bold text-[#6C6D72] absolute top-1/2 left-1/2 -translate-1/2">
						Your cart is empty.
					</p>
				</div>
			</div>
		)
	);
}

export default Cart;
