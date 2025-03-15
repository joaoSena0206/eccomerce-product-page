function Backdrop({ isOpen, onClick }) {
	return (
		<div
			onClick={onClick}
			className={`fixed left-0 top-0 w-screen h-screen bg-black opacity-50 z-20 ${
				isOpen ? "" : "hidden"
			}`}></div>
	);
}

export default Backdrop;