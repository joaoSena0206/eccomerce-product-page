import CartProduct from "./components/CartProduct";

function Cart({ isOpen, products = [], onDelete }) {
	let emptyCartMessage = (
		<p className="absolute font-bold text-[#6C6D72] top-1/2 left-1/2 -translate-1/2">
			Your cart is empty.
		</p>
	);

	return (
		isOpen && (
			<div className="absolute top-[90px] rounded-md p-5 z-20 left-1/2 -translate-x-1/2 bg-white w-[95%] max-w-[400px]">
				<h1 className="font-bold mb-5">Cart</h1>

				<hr className="-ml-5 -mr-5 mb-5 border-[#dddcdc]"></hr>

				<div className="min-h-[250px] relative">
					{products.length >= 1
						? products.map((product, index) => {
								return (
									<CartProduct
										onDelete={onDelete}
										key={index}
										product={product}
									/>
								);
						  })
						: emptyCartMessage}
				</div>
			</div>
		)
	);
}

export default Cart;
