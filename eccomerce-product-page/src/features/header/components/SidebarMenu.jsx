import CloseIcon from "./CloseIcon";

function SidebarMenu({ isOpen, onClick }) {
	return (
		<div
			className={`fixed top-0 left-0 h-screen w-64 bg-white z-30 p-7 pr-30 shadow-md
				transform transition-transform duration-300 ease-in-out
				${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
			<CloseIcon onClick={onClick} />

			<nav className="mt-15">
				<ul className="font-bold text-[18px] space-y-5">
					<li>Collections</li>
					<li>Men</li>
					<li>Women</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</div>
	);
}

export default SidebarMenu;
