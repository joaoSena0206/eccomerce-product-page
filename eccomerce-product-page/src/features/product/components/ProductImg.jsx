function ProductImg({ imgSrc, productName }) {
	return <img className="w-full" src={imgSrc} alt={productName + " image"} />;
}

export default ProductImg;
