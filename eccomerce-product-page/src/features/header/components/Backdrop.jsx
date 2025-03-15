function Backdrop({ isOpen, onClick }) {
	return (
		<div
			onClick={onClick}
			className={`fixed left-0 top-0 w-screen h-screen bg-black z-20 transition-opacity duration-300 ease-in-out
				${
					isOpen
						? "opacity-50 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}></div>
	);
}

export default Backdrop;
