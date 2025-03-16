import { useState } from "react";
import { Logo, MobileMenu, UserProfile, SidebarMenu, Backdrop } from "./";
import Cart from "../cart";
import { CartIcon } from "../cart";

function Header() {
	let [isMenuOpen, setIsMenuOpen] = useState(false);
	let [isCartOpen, setIsCartOpen] = useState(false);

	function handleOpenMenuClick() {
		setIsMenuOpen(true);
	}

	function handleCloseMenuClick() {
		setIsMenuOpen(false);
	}

	function handleCartClick() {
		setIsCartOpen(isCartOpen ? false : true);
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
				<CartIcon onClick={handleCartClick} />
				<Cart isOpen={isCartOpen} />

				<UserProfile />
			</div>
		</header>
	);
}

export default Header;
