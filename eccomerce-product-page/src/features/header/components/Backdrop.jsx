function Backdrop({ isOpen, onClick }) {
	return (
		isOpen && (
			<div
				onClick={onClick}
				className={`fixed left-0 top-0 w-screen h-screen bg-black z-20 opacity-50`}></div>
		)
	);
}

export default Backdrop;
