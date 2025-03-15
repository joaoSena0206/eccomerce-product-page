import { CartIcon } from "../../header";

function AddCartButton() {
	return (
		<div className="bg-[#FF7D1B] rounded-md flex justify-center items-center py-3 space-x-3 mt-5">
			<CartIcon color="#FFFFF" />
			<p className="font-bold">Add to cart</p>
		</div>
	);
}

export default AddCartButton;