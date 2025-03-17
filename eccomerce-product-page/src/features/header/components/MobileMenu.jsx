import menu from "../icons/icon-menu.svg";

function MobileMenu({ onClick }) {
	let isMobile = window.innerWidth < 1024;

	return (
		isMobile && (
			<img
				onClick={onClick}
				className="w-[20px] h-[20px]"
				src={menu}
				alt="Mobile Menu"
			/>
		)
	);
}

export default MobileMenu;
