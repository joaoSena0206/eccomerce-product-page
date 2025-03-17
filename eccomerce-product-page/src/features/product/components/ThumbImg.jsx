function ThumbImg({ imgSrc, onClick, isSelected }) {
	return (
		<div
			className={
				isSelected && "border-[3px] border-[#e0773e] rounded-xl"
			}>
			<img
				onClick={onClick}
				className={`w-[100px] rounded-lg ${isSelected && "opacity-50"}`}
				src={imgSrc}
				alt="Mini image"
			/>
		</div>
	);
}

export default ThumbImg;
