function NavigationPc() {
	let isPc = window.innerWidth >= 1024;

	return (
		isPc && (
			<nav>
				<ul className="flex space-x-3 text-[#7E7F84] font-[500] items-center">
					<li className="cursor-pointer">Collections</li>
					<li className="cursor-pointer">Men</li>
					<li className="cursor-pointer">Women</li>
					<li className="cursor-pointer">About</li>
					<li className="cursor-pointer">Contact</li>
				</ul>
			</nav>
		)
	);
}

export default NavigationPc;
