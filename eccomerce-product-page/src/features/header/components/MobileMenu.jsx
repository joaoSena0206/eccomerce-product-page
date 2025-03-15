import menu from "../icons/icon-menu.svg";

function MobileMenu({ onClick }) {
	return (
		<img
			onClick={onClick}
			className="w-[20px] h-[20px]"
			src={menu}
			alt="Mobile Menu"
		/>
	);
}

export default MobileMenu;
