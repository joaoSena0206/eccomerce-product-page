import { useState } from "react";
import {
	Logo,
	CartIcon,
	MobileMenu,
	UserProfile,
	SidebarMenu,
	Backdrop,
} from "./";

function Header() {
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
				<CartIcon />

				<UserProfile />
			</div>
		</header>
	);
}

export default Header;
