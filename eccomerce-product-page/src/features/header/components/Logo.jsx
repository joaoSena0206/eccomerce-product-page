import logoIcon from "../icons/logo.svg";

function Logo() {
	return (
		<img
			className="w-[120px] h-[20px] cursor-pointer"
			src={logoIcon}
			alt="Sneakers's Logo"
		/>
	);
}

export default Logo;
