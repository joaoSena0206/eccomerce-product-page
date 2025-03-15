import { Logo, CartIcon, MobileMenu, UserProfile } from "./";

function Header() {
	return (
		<header className="flex justify-between p-7">
			<div className="flex space-x-5 items-center">
				<MobileMenu />

				<Logo />
			</div>

			<div className="flex space-x-5">
				<CartIcon />

				<UserProfile />
			</div>
		</header>
	);
}

export default Header;
