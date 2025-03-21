import { CartIcon } from "../../cart";

function AddCartButton({ onClick }) {
	return (
		<div
			onClick={onClick}
			className="bg-[#FF7D1B] rounded-md flex justify-center items-center py-3 space-x-3 mt-5 lg:w-full lg-mt-0 lg:h-[50px]">
			<CartIcon color="#FFFFF" />
			<p className="font-bold">Add to cart</p>
		</div>
	);
}

export default AddCartButton;
