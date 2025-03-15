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
	let [isOpen, setIsOpen] = useState(false);

	function handleOpenMenuClick() {
		setIsOpen(true);
	}

	function handleCloseMenuClick() {
		setIsOpen(false);
	}

	return (
		<header className="flex justify-between p-7">
			<Backdrop isOpen={isOpen} onClick={handleCloseMenuClick} />

			<div className="flex space-x-5 items-center">
				<MobileMenu onClick={handleOpenMenuClick} />
				<SidebarMenu isOpen={isOpen} onClick={handleCloseMenuClick} />

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
