import { useState } from "react";
import { Logo, MobileMenu, UserProfile, SidebarMenu, Backdrop } from "./";
import Cart from "../cart";
import { CartIcon } from "../cart";

function Header({ onCartClick }) {
	let [isMenuOpen, setIsMenuOpen] = useState(false);

	function handleOpenMenuClick() {
		setIsMenuOpen(true);
	}

	function handleCloseMenuClick() {
		setIsMenuOpen(false);
	}

	return (
		<header className="flex justify-between p-7">
			<Backdrop isOpen={isMenuOpen} onClick={handleCloseMenuClick} />

			<div className="flex space-x-5 items-center">
				<MobileMenu onClick={handleOpenMenuClick} />
				<SidebarMenu
					isOpen={isMenuOpen}
					onClick={handleCloseMenuClick}
				/>

				<Logo />
			</div>

			<div className="flex space-x-5 items-center">
				<CartIcon onClick={onCartClick} />

				<UserProfile />
			</div>
		</header>
	);
}

export default Header;
